import TechTag from "./TechTag";

export default function NeoCard({ title, subtitle, description, tags, children, style }) {
  return (
    <div className="neo-card" style={{ display: "flex", flexDirection: "column", height: "100%", ...style }}>
      {title && <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>}
      {subtitle && <h4 style={{ marginBottom: "1rem", color: "var(--secondary)" }}>{subtitle}</h4>}
      {description && <p style={{ flexGrow: 1 }}>{description}</p>}
      {children && <div style={{ flexGrow: 1 }}>{children}</div>}
      {tags && (
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap" }}>
          {tags.map((tag, idx) => (
            <TechTag key={idx} name={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
