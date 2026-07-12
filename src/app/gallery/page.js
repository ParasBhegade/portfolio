import AnimatedSection from "@/components/AnimatedSection";
import StaggeredCards from "@/components/StaggeredCards";

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
            <AnimatedSection delay={0.1}>
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
                  <div className="flex gap-4" style={{ flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    <span className="tech-tag tag">Real-Time Data</span>
                    <span className="tech-tag tag">Predictive Maintenance</span>
                    <span className="tech-tag tag">Sensor Integration</span>
                  </div>
                  <a href="https://github.com/ParasBhegade/Industial-automation-dashboard" target="_blank" rel="noopener noreferrer" className="flex project-link" style={{ alignItems: "center", gap: "0.5rem", display: "inline-flex", color: "var(--accent-yellow)", fontWeight: "bold", textDecoration: "none" }}>
                    View on GitHub <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" style={{ transform: "rotate(-45deg)", fontSize: "0.9rem" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Project 2 */}
            <AnimatedSection delay={0.2}>
              <div className="neo-border neo-shadow gallery-card">
                <div className="gallery-card-header" style={{ backgroundColor: "var(--accent-blue)" }}>
                  <h3 className="gallery-card-title" style={{ color: "#f5f0e8" }}>AI Talent Research &amp;<br />Recommendation Engine</h3>
                </div>
                <div className="gallery-card-body">
                  <div className="flex flex-col gap-4" style={{ marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Problem:</strong> Organizations struggle to match internal talent capabilities with evolving role requirements, leading to skill gaps.</p>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Approach:</strong> Utilized NLP and machine learning to analyze user skills and profiles against industry job descriptions.</p>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Results:</strong> Provided highly accurate career path recommendations and multidimensional skill mapping to bridge talent gaps.</p>
                  </div>
                  <div className="flex gap-4" style={{ flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    <span className="tech-tag tag">NLP</span>
                    <span className="tech-tag tag">Skill Mapping</span>
                    <span className="tech-tag tag">Data Visualization</span>
                  </div>
                  <a href="https://github.com/ParasBhegade/Ai-powered-global-talent-engine" target="_blank" rel="noopener noreferrer" className="flex project-link" style={{ alignItems: "center", gap: "0.5rem", display: "inline-flex", color: "var(--accent-yellow)", fontWeight: "bold", textDecoration: "none" }}>
                    View on GitHub <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" style={{ transform: "rotate(-45deg)", fontSize: "0.9rem" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Project 3 */}
            <AnimatedSection delay={0.3}>
              <div className="neo-border neo-shadow gallery-card">
                <div className="gallery-card-header" style={{ backgroundColor: "var(--accent-red)" }}>
                  <h3 className="gallery-card-title" style={{ color: "#f5f0e8" }}>Global Superstore<br />Sales Analytics</h3>
                </div>
                <div className="gallery-card-body">
                  <div className="flex flex-col gap-4" style={{ marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Problem:</strong> Businesses struggle to identify sales trends, profitable products, and customer purchasing patterns across different regions, affecting strategic decision-making.</p>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Approach:</strong> Performed data cleaning, exploratory data analysis (EDA), and visualization using Python, Pandas, NumPy, and Matplotlib to analyze sales, profit, customer segments, and regional performance.</p>
                    <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}><strong>Results:</strong> Generated actionable insights into sales trends, top-performing products, customer behavior, and regional profitability through interactive visualizations and analytical reports.</p>
                  </div>
                  <div className="flex gap-4" style={{ flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    <span className="tech-tag tag">Data Analysis</span>
                    <span className="tech-tag tag">EDA</span>
                    <span className="tech-tag tag">Data Visualization</span>
                  </div>
                  <a href="https://github.com/ParasBhegade/Global-Superstore-Analytics" target="_blank" rel="noopener noreferrer" className="flex project-link" style={{ alignItems: "center", gap: "0.5rem", display: "inline-flex", color: "var(--accent-yellow)", fontWeight: "bold", textDecoration: "none" }}>
                    View on GitHub <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" style={{ transform: "rotate(-45deg)", fontSize: "0.9rem" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </AnimatedSection>

      {/* Coming Soon */}
      <AnimatedSection className="section" style={{ paddingTop: "2rem", paddingBottom: "6rem" }} delay={0.2}>
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
