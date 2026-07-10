import {
  SiPython, SiJavascript, SiC, SiFlask, SiPandas, SiNumpy,
  SiJupyter, SiReact, SiNextdotjs, SiGit, SiFastapi, SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import {
  FaJava, FaCss3Alt, FaDatabase, FaChartBar, FaBrain,
  FaServer, FaCode, FaHtml5, FaCogs, FaGlobe, FaRobot,
} from "react-icons/fa";

const iconMap = {
  "Python": <SiPython />,
  "JavaScript": <SiJavascript />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "C": <SiC />,
  "Java": <FaJava />,
  "Flask": <SiFlask />,
  "Pandas": <SiPandas />,
  "NumPy": <SiNumpy />,
  "Matplotlib": <FaChartBar />,
  "Jupyter": <SiJupyter />,
  "Git": <SiGit />,
  "VS Code": <FaCode />,
  "FastAPI": <SiFastapi />,
  "Next.js": <SiNextdotjs />,
  "React": <SiReact />,
  "Scikit-learn": <SiScikitlearn />,
  "TensorFlow": <SiTensorflow />,
  "Data Analysis": <FaChartBar />,
  "Data Cleaning": <FaChartBar />,
  "EDA": <FaChartBar />,
  "Machine Learning": <FaBrain />,
  "Flask / FastAPI": <SiFastapi />,
  "Database": <FaDatabase />,
  "APIs": <FaServer />,
  "Operations": <FaCogs />,
  "Branding": <FaChartBar />,
  "AI": <FaBrain />,
  "Data Processing": <FaDatabase />,
  "Flask API": <SiFlask />,
  "Real-time": <FaServer />,
  "Monitoring": <FaChartBar />,
  "Web Automation": <FaGlobe />,
  "Data Operations": <FaDatabase />,
  "NLP": <FaRobot />,
};

export default function TechTag({ name, className = "tag" }) {
  const icon = iconMap[name] || <FaCode />;
  return (
    <span className={`tech-tag ${className}`}>
      {icon} {name}
    </span>
  );
}
