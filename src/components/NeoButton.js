import Link from "next/link";

export default function NeoButton({ children, href, variant = "primary", className = "", ...props }) {
  const btnClass = `neo-btn ${variant} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={btnClass} {...props}>
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
