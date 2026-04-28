import NeoCard from "@/components/NeoCard";
import NeoButton from "@/components/NeoButton";
import AnimatedSection from "@/components/AnimatedSection";
import TechTag from "@/components/TechTag";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection className="section" style={{ background: "linear-gradient(180deg, var(--background) 0%, var(--surface-alt) 100%)", padding: "6rem 0 4rem 0" }}>
        <div className="container grid grid-cols-2 gap-8" style={{ alignItems: "center", position: "relative" }}>

          {/* Left Column: Text Content */}
          <div className="flex flex-col hero-reveal" style={{ alignItems: "flex-start", position: "relative", zIndex: 20 }}>
            <div className="neo-border" style={{
              backgroundColor: "var(--accent-yellow)",
              color: "#1a1a1a",
              padding: "0.25rem 0.75rem",
              fontWeight: "bold",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              marginBottom: "2rem",
              boxShadow: "4px 4px 0px 0px var(--shadow-color)"
            }}>
              Open for Opportunities
            </div>

            <h1 className="hero-title" style={{ color: "var(--text-main)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              PARAS<br />BHEGADE
            </h1>

            <div style={{ width: "120px", height: "10px", backgroundColor: "var(--accent-red)", marginBottom: "2rem", border: "2px solid var(--border-color)" }}></div>

            <h2 style={{ color: "var(--text-main)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.4 }}>
              Data Science & AI/ML Intern<br />
              <span className="hero-subtitle" style={{ color: "var(--accent-blue)" }}>building intelligent systems and data-driven solutions</span>
            </h2>
            <p style={{ color: "var(--secondary)", fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "90%" }}>
              Leveraging machine learning, data analysis, and automation to build actionable, data-driven solutions.
            </p>

            <div className="flex gap-4" style={{ flexWrap: "wrap", position: "relative", zIndex: 30 }}>
              <NeoButton href="#projects" variant="primary">View Projects</NeoButton>
              <NeoButton href="https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com" variant="secondary" target="_blank" rel="noopener noreferrer">Contact Me</NeoButton>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex hero-image-reveal" style={{ justifyContent: "center", alignItems: "center", position: "relative", zIndex: 5 }}>
            <div className="hero-image-container">
              {/* Offset Shadow */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--accent-yellow)",
                zIndex: 0
              }}></div>

              {/* Image Box */}
              <div className="neo-border" style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--surface)",
                zIndex: 1,
              }}>
                {/* The "Pop-out" Clipping Logic:
                    We use a container that is positioned absolutely but with a HUGE top padding 
                    to allow the head to pop out, but overflow: hidden to clip the bottom. 
                */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "200%", // Plenty of space for the head to pop out
                  overflow: "hidden",
                  pointerEvents: "none"
                }}>
                  <Image
                    src="/pfp.png"
                    alt="Paras Bhegade"
                    width={540}
                    height={600}
                    style={{
                      position: "absolute",
                      bottom: "-35px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "auto",
                      height: "100%", // Fit exactly to the box height
                      objectFit: "contain",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="section" style={{ backgroundColor: "var(--background)", scrollMarginTop: "100px" }}>

        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "3rem", textTransform: "uppercase" }}>About Me</h2>
              <div style={{ width: "100px", height: "8px", backgroundColor: "var(--accent-red)", marginBottom: "2rem", border: "2px solid var(--border-color)" }}></div>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
                I am a B.Tech CSE (AI) undergraduate deeply interested in Data Science and Machine Learning. I thrive on solving complex, real-world problems by building intelligent, data-driven systems.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
                My goal is to secure a Machine Learning or Data Engineer role where I can leverage my expertise in AI and data pipelines to create impactful technological solutions.
              </p>
            </div>
            <div className="neo-card" style={{ backgroundColor: "var(--surface-alt)" }}>
              <h3 style={{ borderBottom: "3px solid var(--border-color)", paddingBottom: "1rem", marginBottom: "1rem" }}>Education</h3>
              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>B.Tech in Computer Science Engineering (AI & ML)</h4>
              <p style={{ fontWeight: "bold", color: "var(--secondary)" }}>Nutan College of Engineering and Research, Pune</p>
              <div className="flex justify-between" style={{ marginTop: "1rem" }}>
                <span className="tag" style={{ margin: 0 }}>Pass out: 2027</span>
                <span className="tag" style={{ margin: 0 }}>CGPA: 8</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="section" style={{ backgroundColor: "var(--surface)", borderTop: "3px solid var(--border-color)", borderBottom: "3px solid var(--border-color)", scrollMarginTop: "100px" }}>
        <div className="container">
          <h2 style={{ fontSize: "3rem", textTransform: "uppercase", textAlign: "center", marginBottom: "3rem" }}>Technical Arsenal</h2>

          <div className="grid grid-cols-2 gap-8">
            <NeoCard title="Programming" tags={["C", "Java", "Python", "JavaScript"]}>
              <p>Building the logic and core architecture for scalable software solutions.</p>
            </NeoCard>
            <NeoCard title="Data Science" tags={["Pandas", "NumPy", "Matplotlib"]}>
              <p>Processing data, performing statistical analysis, and visualizing insights.</p>
            </NeoCard>
            <NeoCard title="ML & AI" tags={["Scikit-learn", "TensorFlow"]}>
              <p>Developing predictive models, deep learning networks, and computer vision pipelines.</p>
            </NeoCard>
            <NeoCard title="Tools" tags={["Git", "Jupyter", "VS Code"]}>
              <p>Essential developer environments and version control systems for team collaboration.</p>
            </NeoCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="section" style={{ backgroundColor: "var(--background)", scrollMarginTop: "100px" }}>
        <div className="container">
          <h2 style={{ fontSize: "3rem", textTransform: "uppercase", marginBottom: "3rem" }}>Experience</h2>

          <div className="flex flex-col gap-8">
            <div className="neo-card" style={{ borderLeft: "8px solid var(--accent-blue)" }}>
              <div className="flex justify-between align-center" style={{ marginBottom: "1rem" }}>
                <h3 style={{ margin: 0 }}>Laxmi Logistics – ERP System</h3>
                <span className="tag" style={{ margin: 0, backgroundColor: "var(--accent-yellow)", color: "#1a1a1a" }}>Contract Project (₹2,00,000)</span>
              </div>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>Built a comprehensive logistics ERP system. Worked on backend logic, APIs, and deployment, applying data-driven approaches for operational insights.</p>
              <div className="flex" style={{ flexWrap: "wrap" }}>
                <TechTag name="Python" />
                <TechTag name="Flask / FastAPI" />
                <TechTag name="Database" />
              </div>
            </div>

            <div className="neo-card" style={{ borderLeft: "8px solid var(--accent-red)" }}>
              <div className="flex justify-between align-center" style={{ marginBottom: "1rem" }}>
                <h3 style={{ margin: 0 }}>GruhSetu – Housing Society Management</h3>
                <span className="tag" style={{ margin: 0, backgroundColor: "var(--accent-yellow)", color: "#1a1a1a" }}>Startup Experience</span>
              </div>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>Led digital transformation initiatives by developing the official platform, automating email communications, and streamlining daily operations. Significantly enhanced online branding and optimized internal data workflows.</p>
              <a href="https://gruhsetuhousingsocietymanagement.com/" target="_blank" rel="noopener noreferrer" className="flex" style={{ alignItems: "center", gap: "0.5rem", display: "inline-flex", color: "var(--accent-blue)", fontWeight: "bold", marginBottom: "1.5rem", textDecoration: "none" }}>
                View Platform <FaArrowRight style={{ transform: "rotate(-45deg)", fontSize: "0.9rem" }} />
              </a>
              <div className="flex" style={{ flexWrap: "wrap" }}>
                <TechTag name="Web Automation" />
                <TechTag name="JavaScript" />
                <TechTag name="Data Operations" />
                <TechTag name="APIs" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Highlights Section */}
      <AnimatedSection id="projects" className="section" style={{ backgroundColor: "var(--surface-alt)", borderTop: "3px solid var(--border-color)", scrollMarginTop: "100px" }}>
        <div className="container">
          <div className="flex flex-col-mobile justify-between align-center gap-4" style={{ marginBottom: "3rem", alignItems: "center", textAlign: "center" }}>
            <h2 style={{ fontSize: "3rem", textTransform: "uppercase", margin: 0 }}>Featured Projects</h2>
            <NeoButton href="/gallery" variant="primary">View Gallery</NeoButton>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <NeoCard title="AI Talent Research & Recommendation Engine" tags={["Machine Learning", "Data Processing", "AI"]}>
              <p>Developed an AI-based system to analyze user skills, interests, and profiles, providing personalized career path recommendations.</p>
            </NeoCard>
            <NeoCard title="Industrial Automation Dashboard" tags={["Flask API", "Real-time", "Monitoring"]}>
              <p>Built a real-time machine monitoring dashboard, automating processes with a Flask API and a custom frontend.</p>
            </NeoCard>
          </div>
        </div>
      </AnimatedSection>
      {/* Contact Section */}
      <AnimatedSection id="contact" className="section contact-section">
        <div className="container">

          {/* Header */}
          <div className="contact-marquee-wrap">
            <p className="contact-marquee-label">— Let&apos;s Work Together —</p>
          </div>
          <div className="contact-hero-text" style={{ flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <span className="contact-highlight">Got an idea?</span>
              <span className="contact-highlight contact-highlight--outline">Let&apos;s build it.</span>
            </div>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--accent-blue)", marginTop: "1rem", maxWidth: "800px", lineHeight: 1.4 }}>
              Open to internships and full-time roles in Data Science & AI/ML.
            </p>
          </div>
          <div className="contact-divider" />

          {/* Body: cards + form */}
          <div className="contact-body">

            {/* Left: contact info cards */}
            <div className="contact-cards-col">

              <div className="contact-card contact-card--yellow">
                <div className="contact-card-icon-wrap">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/></svg>
                </div>
                <div>
                  <p className="contact-card-label">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhegadeparas5@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card-value">
                    bhegadeparas5@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card contact-card--blue">
                <div className="contact-card-icon-wrap">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
                </div>
                <div>
                  <p className="contact-card-label">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/paras-bhegade/" target="_blank" rel="noopener noreferrer" className="contact-card-value">
                    /in/paras-bhegade
                  </a>
                </div>
              </div>

              <div className="contact-card contact-card--neutral">
                <div className="contact-card-icon-wrap">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </div>
                <div>
                  <p className="contact-card-label">GitHub</p>
                  <a href="https://github.com/ParasBhegade" target="_blank" rel="noopener noreferrer" className="contact-card-value">
                    github.com/ParasBhegade
                  </a>
                </div>
              </div>

            </div>

            {/* Right: form */}
            <ContactForm />

          </div>

        </div>
      </AnimatedSection>
    </div>
  );
}

