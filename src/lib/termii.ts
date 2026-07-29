// Termii WhatsApp notification — internal alert only, gated behind env vars.
// Verify the request shape against Termii's current docs (https://developers.termii.com)
// before relying on this in production; endpoints/params can change.
export async function sendTermiiWhatsAppNotification(message: string) {
  const apiKey = process.env.TERMII_API_KEY;
  const senderId = process.env.TERMII_SENDER_ID;
  const to = process.env.TERMII_NOTIFY_PHONE;

  if (!apiKey || !senderId || !to) {
    console.warn("Termii WhatsApp notification skipped: missing TERMII_API_KEY/SENDER_ID/NOTIFY_PHONE");
    return;
  }

  const res = await fetch("https://api.ng.termii.com/api/sms/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      to,
      from: senderId,
      sms: message,
      type: "plain",
      channel: "whatsapp",
    }),
  });

  if (!res.ok) {
    console.error("Termii WhatsApp notification failed", await res.text().catch(() => ""));
  }
}
