"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function NeoButton({ children, href, variant = "primary", className = "", ...props }) {
  const btnClass = `neo-btn ${variant} ${className}`;
  const pathname = usePathname();
  const btnRef = useRef(null);

  const handleClick = (e) => {
    if (href && href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Magnetic hover effect (desktop only, subtle)
  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btnRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = "";
    }
  };

  const magneticProps = {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={btnClass} {...magneticProps} {...props}>
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} onClick={handleClick} className={btnClass} {...magneticProps} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={btnClass} {...magneticProps} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...magneticProps} {...props}>
      {children}
    </button>
  );
}
