import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSpringboot, SiSpring, SiMysql, SiFirebase, SiVercel, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiNetworkChart, BiCodeAlt } from "react-icons/bi";

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JDBC / Servlet", icon: BiCodeAlt, color: "#ea580c" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: BiCodeAlt, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "REST APIs", icon: TbApi, color: "#0052CC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: BiNetworkChart, color: "#10b981" },
      { name: "Communication", icon: BiNetworkChart, color: "#3b82f6" },
      { name: "Teamwork", icon: BiNetworkChart, color: "#8b5cf6" },
    ],
  },
];

export const marqueeSkills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
];
