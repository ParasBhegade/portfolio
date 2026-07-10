"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Hide on scroll down, show on scroll up (only after 200px)
      if (current > 200) {
        setHidden(current > lastScroll.current && current - lastScroll.current > 5);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;

      // Active section detection
      if (!isHome) return;
      const sections = ["about", "skills", "experience", "projects", "resume", "contact"];
      let found = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            found = section;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleScrollTo = (e, id) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  const getLinkClass = (id) =>
    `nav-link ${activeSection === id ? "nav-link--active" : ""}`;

  const navLinks = (
    <>
      {!isHome && (
        <Link href="/" className="nav-link" onClick={() => setMobileOpen(false)}>
          HOME
        </Link>
      )}
      <a href="/#about" onClick={(e) => handleScrollTo(e, "about")} className={getLinkClass("about")}>ABOUT</a>
      <a href="/#skills" onClick={(e) => handleScrollTo(e, "skills")} className={getLinkClass("skills")}>SKILLS</a>
      <a href="/#experience" onClick={(e) => handleScrollTo(e, "experience")} className={getLinkClass("experience")}>EXPERIENCE</a>
      <a href="/#resume" onClick={(e) => handleScrollTo(e, "resume")} className={getLinkClass("resume")}>RESUME</a>
      <Link href="/gallery" className={`nav-link ${pathname === "/gallery" ? "nav-link--active" : ""}`} onClick={() => setMobileOpen(false)}>
        GALLERY
      </Link>
    </>
  );

  return (
    <nav
      className={`navbar ${hidden ? "navbar--hidden" : ""}`}
    >
      <div className="container nav-container flex justify-between align-center">
        <Link href="/" className="nav-logo">
          PARAS.DEV
        </Link>

        {/* Desktop links */}
        <div className="flex nav-links align-center gap-4">
          {navLinks}
          <button
            onClick={toggleTheme}
            className="neo-btn secondary theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`}>
        <div className="mobile-drawer-links">
          {navLinks}
          <button
            onClick={() => { toggleTheme(); setMobileOpen(false); }}
            className="neo-btn secondary theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}
