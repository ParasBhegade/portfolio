"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showSocials = pathname !== "/";

  return (
    <footer style={{ padding: "4rem 0", borderTop: "3px solid var(--border-color)", backgroundColor: "var(--surface-alt)", marginTop: "4rem" }}>
      <div className="container footer-container flex justify-between align-center">
        <div>
          <h3 style={{ marginBottom: "0.5rem" }}>Paras Bhegade</h3>
          <p style={{ margin: 0 }}>Data Science Intern</p>
        </div>
        {showSocials && (
          <div className="flex gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com" target="_blank" rel="noopener noreferrer" className="neo-btn secondary flex align-center gap-2" style={{ padding: "0.5rem 1rem", alignItems: "center" }}>
              <FaEnvelope size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/in/paras-bhegade/" target="_blank" rel="noopener noreferrer" className="neo-btn secondary flex align-center gap-2" style={{ padding: "0.5rem 1rem", alignItems: "center" }}>
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/ParasBhegade" target="_blank" rel="noopener noreferrer" className="neo-btn secondary flex align-center gap-2" style={{ padding: "0.5rem 1rem", alignItems: "center" }}>
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
