import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Gallery - Paras Bhegade",
};

export default function Gallery() {
  return (
    <div style={{ backgroundColor: "var(--background)", minHeight: "100vh" }}>
      {/* Header Section */}
      <AnimatedSection className="section gallery-header-section" style={{ paddingTop: "8rem", paddingBottom: "2rem" }}>
        <div className="container">
          <h1 className="gallery-title" style={{ textTransform: "uppercase", marginBottom: "1rem" }}>BUILDS AND EXPERIMENTS</h1>
          <div style={{ width: "150px", height: "8px", backgroundColor: "var(--accent-blue)", marginBottom: "2rem", border: "2px solid var(--border-color)" }}></div>
          <p style={{ fontSize: "1.125rem", maxWidth: "800px", lineHeight: 1.8 }}>
            High-performance data visualization interfaces engineered for complex operational environments.
          </p>
        </div>
      </AnimatedSection>

      {/* Gallery Grid */}
      <AnimatedSection className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8">

            {/* Project 1 */}
            <div className="neo-border neo-shadow gallery-card">
              <div className="gallery-card-header" style={{ backgroundColor: "var(--accent-yellow)" }}>
                <h3 className="gallery-card-title" style={{ color: "#1a1a1a" }}>Industrial Automation<br />Dashboard</h3>
              </div>
              <div className="gallery-card-body">
                <div className="flex flex-col gap-4" style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Problem:</strong> Lack of real-time visibility into machine status and performance hindered operational efficiency and led to unexpected downtime.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Approach:</strong> Built a real-time monitoring dashboard, streaming sensor data through a Flask API to a custom frontend interface for instant analytics.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Results:</strong> Automated data collection, enabling instant insights, predicting maintenance needs, and significantly improving factory throughput.</p>
                </div>
                <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
                  <span className="tag">Real-Time Data</span>
                  <span className="tag">Predictive Maintenance</span>
                  <span className="tag">Sensor Integration</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="neo-border neo-shadow gallery-card">
              <div className="gallery-card-header" style={{ backgroundColor: "var(--accent-red)" }}>
                <h3 className="gallery-card-title" style={{ color: "#1a1a1a" }}>Logistics ERP<br />Dashboard</h3>
              </div>
              <div className="gallery-card-body">
                <div className="flex flex-col gap-4" style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Problem:</strong> Fragmented supply chain data and manual fleet tracking caused inefficiencies and delayed decision-making processes.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Approach:</strong> Developed a comprehensive ERP system, applying data-driven backend logic and API integrations to unify global supply chain metrics.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Results:</strong> Centralized inventory forecasting and fleet tracking into a single command center, optimizing operational efficiency.</p>
                </div>
                <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
                  <span className="tag">Supply Chain</span>
                  <span className="tag">Fleet Tracking</span>
                  <span className="tag">Command Center</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="neo-border neo-shadow gallery-card">
              <div className="gallery-card-header" style={{ backgroundColor: "var(--accent-blue)" }}>
                <h3 className="gallery-card-title" style={{ color: "#f5f0e8" }}>AI Talent Research<br />Dashboard</h3>
              </div>
              <div className="gallery-card-body">
                <div className="flex flex-col gap-4" style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Problem:</strong> Organizations struggle to match internal talent capabilities with evolving role requirements, leading to skill gaps.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Approach:</strong> Utilized NLP and machine learning to analyze user skills and profiles against industry job descriptions.</p>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Results:</strong> Provided highly accurate career path recommendations and multidimensional skill mapping to bridge talent gaps.</p>
                </div>
                <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
                  <span className="tag">NLP</span>
                  <span className="tag">Skill Mapping</span>
                  <span className="tag">Data Visualization</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Coming Soon */}
      <AnimatedSection className="section" style={{ paddingTop: "2rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div className="neo-border neo-shadow coming-soon-box">
            <img
              src="/coming_soon.png"
              alt="More projects coming soon"
              className="coming-soon-img"
            />
            <h2 style={{ textTransform: "uppercase", marginBottom: "1rem" }}>More Coming Soon</h2>
            <div style={{ width: "80px", height: "6px", backgroundColor: "var(--accent-yellow)", marginBottom: "1.5rem", border: "2px solid var(--border-color)" }}></div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "600px", color: "var(--secondary)" }}>
              New projects and experiments are currently in development. Check back soon — there is a lot more in the pipeline.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
