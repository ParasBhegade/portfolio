"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const commands = [
  { label: "About", section: "about", shortcut: "A" },
  { label: "Skills", section: "skills", shortcut: "S" },
  { label: "Experience", section: "experience", shortcut: "E" },
  { label: "Projects", section: "projects", shortcut: "P" },
  { label: "Resume", section: "resume", shortcut: "R" },
  { label: "Contact", section: "contact", shortcut: "C" },
  { label: "Gallery", href: "/gallery", shortcut: "G" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (cmd) => {
      setOpen(false);
      setQuery("");
      if (cmd.href) {
        router.push(cmd.href);
      } else if (cmd.section) {
        // Navigate home first if needed
        if (window.location.pathname !== "/") {
          router.push(`/#${cmd.section}`);
        } else {
          const el = document.getElementById(cmd.section);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [router]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyNav = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => (s + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => (s - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selected]) {
      execute(filtered[selected]);
    }
  };

  if (!open) return null;

  return (
    <div className="cmd-overlay" onClick={() => setOpen(false)}>
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyNav}
          />
          <kbd className="cmd-kbd">ESC</kbd>
        </div>
        <div className="cmd-list">
          {filtered.length === 0 && (
            <div className="cmd-empty">No results found.</div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              className={`cmd-item ${i === selected ? "cmd-item--active" : ""}`}
              onClick={() => execute(cmd)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="cmd-item-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {cmd.label}
              </span>
              <kbd className="cmd-shortcut">{cmd.shortcut}</kbd>
            </button>
          ))}
        </div>
        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
