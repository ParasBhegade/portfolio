export default function GlowText({ children, as: Tag = "span", className = "", style = {} }) {
  return (
    <Tag
      className={`glow-text ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
