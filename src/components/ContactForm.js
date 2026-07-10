"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Hi Paras,\n\n${message}\n\n— ${name}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="contact-form-col">
      <p className="contact-form-title">Send a Message</p>
      <p className="contact-form-sub">I&apos;ll get back to you within 24 hours.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="floating-field">
          <input
            className="contact-input"
            type="text"
            id="contact-name"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="contact-name" className="floating-label">Your name</label>
        </div>
        <div className="floating-field">
          <textarea
            className="contact-input contact-textarea"
            id="contact-message"
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <label htmlFor="contact-message" className="floating-label">What&apos;s on your mind?</label>
        </div>
        <button
          type="submit"
          className={`contact-submit-btn ${submitted ? "contact-submit-btn--success" : ""}`}
          disabled={submitted}
        >
          {submitted ? (
            <span className="submit-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Sent!
            </span>
          ) : (
            "Send it →"
          )}
        </button>
      </form>
    </div>
  );
}
