import projects from "./projectData";

import dws from "../assets/dws.png";
import orkeneo from "../assets/orkeneo.jpeg";
import optigrit from "../assets/optigrit.jpeg";
import cfl from "../assets/CityFutureLab.png"

import optigritCert from "../assets/certificates/Optigrit.pdf";
import orkeneoCert from "../assets/certificates/Orkeneo_Experience.pdf";

export const profile = {
  displayName: "Ashutosh Maurya",
  username: "guest",
  hostname: "ashutosh",
  title: "Full Stack Developer · Software Engineer",
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
  codingProfiles: {
    leetcode: "https://leetcode.com/u/ashutosh_m03",
    codechef: "https://www.codechef.com/users/ashutosh_m03",
    hackerrank: "https://www.hackerrank.com/profile/mauryaashutosh11",
  },
};

export const skillGrouped = [
  {
    category: "Programming Languages",
    description: "Core languages for competitive programming, algorithms, and system development",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend & Backend",
    description: "Full-stack frameworks, user interface libraries, and server runtimes",
    skills: ["HTML/CSS", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer", "MUI", "Node.js", "Express.js", "Koa.js"],
  },
  {
    category: "Databases",
    description: "Relational, NoSQL, and database management tools",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "DBeaver-ce"],
  },
  {
    category: "Tools & Technologies",
    description: "Infrastructure, cloud services, deployment, and API integrators",
    skills: ["Git & GitHub", "Docker", "AWS", "Linux", "WebSockets", "Postman", "Supabase", "HubSpot", "Razorpay"],
  },
  {
    category: "Core Concepts",
    description: "Fundamental computer science, software engineering, and algorithmic principles",
    skills: [
      "Data Structures & Algorithms (950+ Solved)",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Computer Networks",
      "System Architecture",
    ],
  },
];

export const skills = [
  { name: "Python", category: "language" },
  { name: "C++", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Git", category: "tools" },
];

export const skillCategories = ["all", "frontend", "backend", "tools", "language"];

export const experiences = [
  {
    id: 3,
    img: cfl,
    role: "Full Stack Developer",
    company: "City Future Lab - IIT Kharagpur",
    location: "Kharagpur, India (Onsite)",
    date: "May 2026 – Present",
    roles: [
      {
        role: "Full Stack Developer",
        date: "May 2026 – Present",
      },
    ],
    points: [
      "Architected a scalable transport system using MERN, FastAPI, SQL, and WebSockets, unifying frequency-based scheduling with Deadheading & VRP-driven route optimization (26% fleet reduction, 20% efficiency gain).",
      "Engineered event-driven backend services using REST APIs, integrated MongoDB and SQL databases, and containerized deployment via Docker, improving database query performance by 40%.",
      "Built real-time telemetry monitoring dashboards and WebSocket event pipelines for automated dispatching operations."
    ],
    skills: ["MERN Stack", "FastAPI", "SQL", "WebSockets", "Docker", "MongoDB", "VRP Optimization"],
  },
    {
    id: 2,
    img: orkeneo,
    role: "Software Developer",
    company: "Orkeneo AI Labs",
    location: "Remote",
    date: "Jan 2026 – Present",
    roles: [
      {
        role: "Software Developer",
        date: "July 2026 – Present",
      },
      {
        role: "Full Stack Developer Intern",
        date: "Jan 2026 – July 2026",
      },
    ],
    points: [
      "Engineered scalable full-stack data systems using Next.js, TypeScript, REST APIs, and AWS S3, applying ingestion pipelines, real-time dashboards, POS integrations, and LangChain querying to reduce processing time by 40%.",
      "Owned production-grade features including secure auth, Razorpay payments, HubSpot CRM automation, Authkey WhatsApp API, and subscription pipelines with scheduled cron jobs (99.9% uptime).",
      "Improved reporting efficiency by 3x and reduced manual business operations by 60% across production workflows."
    ],
    skills: ["Next.js", "TypeScript", "AWS S3", "Razorpay", "LangChain", "Node.js", "PostgreSQL", "Hubspot", "Authkey"],
    certificate: orkeneoCert,
  },
  {
    id: 1,
    img: optigrit,
    role: "Full Stack Software Developer Intern (Part-Time)",
    company: "Optigrit",
    location: "Remote",
    date: "Mar 2025 – June 2025",
    roles: [
      {
        role: "Full Stack Software Developer Intern (Part-Time)",
        date: "Mar 2025 – June 2025",
      },
    ],
    points: [
      "Engineered backend services and handled socket-based events using Koa.js and PostgreSQL to ensure reliable real-time communication.",
      "Fixed and optimized the chat feature by resolving critical socket event listener bugs and improving the notification-based forum.",
      "Resolved complex issues related to task, subtask, course, and section creation, significantly improving the discussion and announcement forums."
    ],
    skills: ["WebSockets", "Koa.js", "PostgreSQL", "Backend Architecture", "Real-time Chat"],
    certificate: optigritCert,
  },
  {
    id: 0,
    img: dws,
    role: "Software Development Engineer Intern",
    company: "DWS Global Tech",
    location: "Remote",
    date: "Aug 2025 – Jan 2026",
    roles: [
      {
        role: "Software Development Engineer Intern",
        date: "Aug 2025 – Jan 2026",
      },
    ],
    points: [
      "Developed dynamic and scalable production web applications using the MERN stack, managing both frontend user interfaces and backend microservices.",
      "Collaborated with cross-functional engineering teams in agile sprints to optimize API endpoints, database queries, and mobile responsiveness.",
      "Engineered reusable React UI components and integrated third-party REST services to accelerate feature release cycles."
    ],
    skills: ["MERN Stack", "TypeScript", "Tailwind CSS", "Express.js", "REST APIs"],
  },
];

export const portfolioProjects = projects;
