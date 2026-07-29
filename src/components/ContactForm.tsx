"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type InquiryType = "general" | "investor" | "partnership";

export default function ContactForm({
  type = "general",
  submitLabel = "Send Message",
}: {
  type?: InquiryType;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // honeypot — bots tend to fill every field, humans never see this one
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          type,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className={`bodyTxt ${styles.statusSuccess}`} style={{ margin: "0 auto", textAlign: "center" }}>
        Thank you — we&apos;ve received your message and will be in touch shortly.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input className={styles.input} id="name" name="name" type="text" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input className={styles.input} id="email" name="email" type="email" required />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Phone (optional)
        </label>
        <input className={styles.input} id="phone" name="phone" type="tel" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea className={styles.textarea} id="message" name="message" required />
      </div>

      <div className={styles.submitRow}>
        <button type="submit" className="btn btnGoldFill" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : submitLabel}
        </button>
        {status === "error" && <span className={`${styles.status} ${styles.statusError}`}>{errorMessage}</span>}
      </div>
    </form>
  );
}
