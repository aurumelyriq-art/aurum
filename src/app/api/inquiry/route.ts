import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { sendTermiiWhatsAppNotification } from "@/lib/termii";
import InquiryConfirmation from "@/emails/InquiryConfirmation";
import InternalNotification from "@/emails/InternalNotification";

type InquiryType = "general" | "investor" | "partnership";
const INQUIRY_TYPES: InquiryType[] = ["general", "investor", "partnership"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : null;
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const type: InquiryType = INQUIRY_TYPES.includes(body.type as InquiryType)
    ? (body.type as InquiryType)
    : "general";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  const { error: insertError } = await supabase.from("inquiries").insert({
    name,
    email,
    phone,
    message,
    type,
  });

  if (insertError) {
    console.error("Failed to write inquiry to Supabase", insertError);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  // Email + WhatsApp are best-effort: the inquiry is already saved above,
  // so a missing/misconfigured key here should never fail the request.
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const internalEmail = process.env.INTERNAL_NOTIFY_EMAIL;

  if (resendApiKey && fromEmail) {
    const resend = new Resend(resendApiKey);
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "We've received your message — AURUM ELYRIQ",
        react: InquiryConfirmation({ name }),
      });
      if (internalEmail) {
        await resend.emails.send({
          from: fromEmail,
          to: internalEmail,
          subject: `${type !== "general" ? `[${type.toUpperCase()}] ` : ""}New inquiry from ${name}`,
          react: InternalNotification({ name, email, phone, message, type }),
        });
      }
    } catch (err) {
      console.error("Resend email send failed", err);
    }
  } else {
    console.warn("Resend email skipped: missing RESEND_API_KEY/RESEND_FROM_EMAIL");
  }

  if (type === "investor" || type === "partnership") {
    try {
      await sendTermiiWhatsAppNotification(
        `New ${type} inquiry from ${name} (${email}${phone ? `, ${phone}` : ""}): ${message}`
      );
    } catch (err) {
      console.error("Termii WhatsApp notification failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
