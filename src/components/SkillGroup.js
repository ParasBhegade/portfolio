"use client";

import {
  SiPython, SiJavascript, SiC, SiFlask, SiPandas, SiNumpy,
  SiJupyter, SiReact, SiNextdotjs, SiGit, SiFastapi, SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { FaChartBar, FaDatabase, FaCode, FaCogs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    accent: "var(--accent-yellow)",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C", icon: <SiC /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    accent: "var(--accent-blue)",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ],
  },
  {
    title: "Web & Frameworks",
    accent: "var(--accent-red)",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    title: "Tools & Workflow",
    accent: "var(--secondary)",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Matplotlib", icon: <FaChartBar /> },
    ],
  },
];

function SkillCard({ name, icon, index }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
    >
      <span className="skill-card-icon">{icon}</span>
      <span className="skill-card-label">{name}</span>
    </motion.div>
  );
}

export default function SkillGroup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="skill-groups">
      {skillGroups.map((group, gIdx) => (
        <div key={group.title} className="skill-group-block">
          <h3
            className="skill-group-title"
            style={{ borderLeftColor: group.accent }}
          >
            {group.title}
          </h3>
          <div className="skill-group-grid">
            {isInView &&
              group.skills.map((skill, sIdx) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={gIdx * 4 + sIdx}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
