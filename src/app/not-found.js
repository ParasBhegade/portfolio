import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-code">404</div>
      <h1 className="not-found-title">model_not_found</h1>
      <pre className="not-found-ascii">{`
    ╔══════════════════════════════╗
    ║  ERROR: Page not found      ║
    ║  Status: 404                ║
    ║  Model: undefined           ║
    ║                              ║
    ║  > Checking training data... ║
    ║  > No matching route found   ║
    ║  > Suggestion: go home       ║
    ╚══════════════════════════════╝
      `}</pre>
      <Link href="/" className="neo-btn primary" style={{ textDecoration: "none" }}>
        ← Back to Home
      </Link>
    </div>
  );
}
