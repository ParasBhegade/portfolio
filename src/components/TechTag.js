import { 
  SiPython, SiJavascript, SiHtml5, SiC,
  SiFlask, SiPandas, SiNumpy, SiJupyter, SiReact, SiNextdotjs, 
  SiGit, SiFastapi 
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase, FaChartBar, FaBrain, FaServer, FaCode, FaHtml5, FaCogs } from "react-icons/fa";

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
  "Jupyter": <SiJupyter />,
  "Git": <SiGit />,
  "VS Code": <FaCode />,
  "FastAPI": <SiFastapi />,
  "Next.js": <SiNextdotjs />,
  "React": <SiReact />,
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
  "Monitoring": <FaChartBar />
};

export default function TechTag({ name, className = "tag" }) {
  const icon = iconMap[name] || <FaCode />; // Fallback icon
  return (
    <span className={`${className} flex align-center gap-2`} style={{ display: "inline-flex", alignItems: "center" }}>
      {icon} {name !== "C" && name}
    </span>
  );
}
