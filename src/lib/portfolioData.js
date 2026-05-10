import projects from "./projectData";

import dws from "../assets/dws.png";
import orkeneo from "../assets/orkeneo.jpeg";

export const profile = {
  displayName: "Ashutosh Maurya",
  username: "guest",
  hostname: "ashutosh",
  title: "Web Developer",
  osName: "AshutoshOS",
  email: "mauryaashutosh1983@gmail.com",
  phone: "+91 8707477117",
  location: "Mau, Uttar Pradesh, India (276306)",
  links: {
    github: "https://github.com/mashu2315",
    linkedin: "https://www.linkedin.com/in/ashutosh-maurya-634bb831a/",
    twitter: "https://x.com/ashutosh_m03?t=0o3_Sk5Y37TYDlBat-Hdew&s=09",
    instagram:
      "https://www.instagram.com/ashutosh_m03?igsh=MXJ2ZGphZWU0cXJnNQ==",
  },
};

export const skills = [
  // Language
  { name: "C", level: 70, category: "language" },
  { name: "CPP", level: 75, category: "language" },
  { name: "Python", level: 70, category: "language" },
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Next.js", level: 50, category: "frontend" },
  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 55, category: "backend" },
  { name: "FastAPI", level: 55, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Pycharm", level: 55, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Supabase", level: 75, category: "tools" },
  { name: "Dbeaver (similar to MySQL)", level: 70, category: "tools" },
  { name: "AWS S3", level: 80, category: "tools" },

];

export const skillCategories = ["all", "frontend", "backend", "tools", "language"];

export const experiences = [
  {
    id: 1,
    img: orkeneo,
    role: "Full Stack Intern",
    company: "Orkeneo",
    date: "January 2026 - Present",
    desc: "Implemented and refined interactive dashboard modules using Next.js (App Router) and Tailwind CSS, focusing on component reusability, accessibility, and consistent design systems. Integrated API-driven components using effective state management and server-side rendering, resulting in faster page loads and a maintainable frontend architecture.",
    skills: ["Full Stack", "TypeScript", "Tailwind CSS", "Next.js", "PostgreSQL"],
  },
  {
    id: 0,
    img: dws,
    role: "Software Development Engineer",
    company: "DWS Global Tech",
    date: "August 2025 - January-2026",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with teams to build responsive UI and optimize application performance in an agile environment.",
    skills: ["MERN Stack", "TypeScript", "Tailwind CSS"],
  },
];

export const portfolioProjects = projects;

