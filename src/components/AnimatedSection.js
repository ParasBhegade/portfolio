"use client";

export default function AnimatedSection({ children, className, style, id }) {
  return (
    <section
      id={id}
      className={`animated-section ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
}
