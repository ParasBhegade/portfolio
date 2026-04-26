"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleScroll = (e, id) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50, padding: "1.5rem 0", borderBottom: "3px solid var(--border-color)", backgroundColor: "var(--surface)" }}>
      <div className="container nav-container flex justify-between align-center">
        <Link href="/">
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-space-grotesk)", textTransform: "uppercase" }}>
            PARAS.DEV
          </div>
        </Link>
        <div className="flex nav-links align-center gap-4">
          {!isHome && <Link href="/" style={{ fontWeight: 800 }}>HOME</Link>}
          <a href="/#about" onClick={(e) => handleScroll(e, 'about')} style={{ fontWeight: 800 }}>ABOUT</a>
          <a href="/#skills" onClick={(e) => handleScroll(e, 'skills')} style={{ fontWeight: 800 }}>SKILLS</a>
          <a href="/#experience" onClick={(e) => handleScroll(e, 'experience')} style={{ fontWeight: 800 }}>EXPERIENCE</a>
          <Link href="/gallery" style={{ fontWeight: 800 }}>GALLERY</Link>
          <button
            onClick={toggleTheme}
            className="neo-btn secondary"
            style={{ padding: "0.5rem", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px" }}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}
