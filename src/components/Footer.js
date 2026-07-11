"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container flex justify-between align-center">
        <div>
          <h3 style={{ marginBottom: "0.5rem" }}>Paras Bhegade</h3>
          <p style={{ margin: 0 }}>Data Science Intern</p>
        </div>
        <div className="flex gap-4 footer-socials">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
          >
            <FaEnvelope size={20} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/paras-bhegade/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/ParasBhegade"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
