"use client";

import {
  SiPython, SiJavascript, SiC, SiFlask, SiPandas, SiNumpy,
  SiJupyter, SiReact, SiNextdotjs, SiGit, SiFastapi, SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import {
  FaJava, FaCss3Alt, FaDatabase, FaChartBar, FaBrain,
  FaServer, FaCode, FaHtml5, FaCogs,
} from "react-icons/fa";

const allTechs = [
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Jupyter", icon: <SiJupyter /> },
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "Data Analysis", icon: <FaChartBar /> },
  { name: "Database", icon: <FaDatabase /> },
  { name: "APIs", icon: <FaServer /> },
];

export default function TechMarquee() {
  // Duplicate for seamless loop
  const items = [...allTechs, ...allTechs];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={i} className="marquee-item tag">
            {tech.icon}
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
