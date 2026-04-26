"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Hi Paras,\n\n${message}\n\n— ${name}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div className="contact-form-col">
      <p className="contact-form-title">Send a Message</p>
      <p className="contact-form-sub">I'll get back to you within 24 hours.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="contact-input contact-textarea"
          placeholder="What's on your mind?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="contact-submit-btn">
          Send it →
        </button>
      </form>
    </div>
  );
}
