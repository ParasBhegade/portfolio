"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NeoButton({ children, href, variant = "primary", className = "", ...props }) {
  const btnClass = `neo-btn ${variant} ${className}`;
  const pathname = usePathname();

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

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={btnClass} {...props}>
          {children}
        </a>
      );
    }
    
    // For internal anchors on home page, use a standard anchor with smooth scroll
    if (href.startsWith("#")) {
      return (
        <a href={href} onClick={handleClick} className={btnClass} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
