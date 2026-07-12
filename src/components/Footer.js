"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/paras-bhegade/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ParasBhegade"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/paras_bhegade/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://leetcode.com/u/EZIO_05/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn secondary footer-social-btn"
            aria-label="LeetCode"
          >
            <SiLeetcode size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
