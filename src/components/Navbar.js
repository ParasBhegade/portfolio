"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience'];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleScrollTo = (e, id) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getLinkStyle = (id) => ({
    fontWeight: 800,
    color: activeSection === id ? "var(--accent-blue)" : "inherit",
    textDecoration: activeSection === id ? "underline" : "none",
    transition: "color 0.3s"
  });

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
          <a href="/#about" onClick={(e) => handleScrollTo(e, 'about')} style={getLinkStyle('about')}>ABOUT</a>
          <a href="/#skills" onClick={(e) => handleScrollTo(e, 'skills')} style={getLinkStyle('skills')}>SKILLS</a>
          <a href="/#experience" onClick={(e) => handleScrollTo(e, 'experience')} style={getLinkStyle('experience')}>EXPERIENCE</a>
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
