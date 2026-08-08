const projects = [
  {
    id: 0,
    title: "Medollo - Medicine Delivery App",
    description: "Full-stack MERN medicine delivery platform with mobile OTP auth (Twilio), enabling secure ordering workflows for 500+ users.\nRestructured UI/UX with Tailwind CSS featuring a searchable database of 58,000+ medicines with detailed browse and ordering capabilities.",
    points: [
      "Full-stack MERN medicine delivery platform with mobile OTP auth (Twilio), enabling secure ordering workflows for 500+ users.",
      "Restructured UI/UX with Tailwind CSS featuring a searchable database of 58,000+ medicines with detailed browse and ordering capabilities."
    ],
    image: "/projects/Project10.png",
    tags: ["React", "TailwindCSS", "Twilio", "NodeJs", "ExpressJS", "MongoDB"],
    demoUrl: "https://medollo-6vvy.vercel.app/",
    githubUrl: "https://github.com/mashu2315/medollo",
  },
  {
    id: 1,
    title: "Edunotion - Educational Platform",
    description: "Developed a production-grade MERN platform with robust JWT auth, RBAC (Role-Based Access Control), cloud storage, and protected API routes.\nEnhanced functionality by embedding a Gemini AI assistant that provides automated user assistance and real-time content generation.",
    points: [
      "Developed a production-grade MERN platform with robust JWT auth, RBAC (Role-Based Access Control), cloud storage, and protected API routes.",
      "Enhanced functionality by embedding a Gemini AI assistant that provides automated user assistance and real-time content generation."
    ],
    image: "/projects/Project11.png",
    tags: ["React", "TailwindCSS", "GeminiAPI", "NodeJs", "ExpressJS", "MongoDB"],
    demoUrl: "https://edunotion.vercel.app/",
    githubUrl: "https://github.com/mashu2315/edunotion",
  },
  {
    id: 2,
    title: "Talkyy - Real-time Chat App",
    description: "Real-time chat application using Node.js, WebSockets, and REST APIs, enabling 100+ concurrent users with persistent messaging and dark mode.\nImplemented a responsive UI boosting reliability by 45% while achieving 30% faster UI rendering across cross-platform devices.",
    points: [
      "Real-time chat application using Node.js, WebSockets, and REST APIs, enabling 100+ concurrent users with persistent messaging and dark mode.",
      "Implemented a responsive UI boosting reliability by 45% while achieving 30% faster UI rendering across cross-platform devices."
    ],
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "daisyui", "NodeJs", "ExpressJS", "MongoDB"],
    demoUrl: "https://chat-app-talkyy.onrender.com/",
    githubUrl: "https://github.com/mashu2315/chat-app-talkyy",
  },
  {
    id: 3,
    title: "Shop Me",
    description: "E-commerce platform for clothing and accessories, enabling users to shop seamlessly with custom product categorization.\nBuilt responsive frontend interface with Tailwind CSS, dark mode support, and interactive product filtering.",
    points: [
      "E-commerce platform for clothing and accessories, enabling users to shop seamlessly with custom product categorization.",
      "Built responsive frontend interface with Tailwind CSS, dark mode support, and interactive product filtering."
    ],
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://shop-me-topaz.vercel.app/",
    githubUrl: "https://github.com/mashu2315/shop_me",
  },
  {
    id: 4,
    title: "Trend Wise",
    description: "Real-time trending topics search platform utilizing Node.js, Express, Firebase Google Auth, and external API integrations.\nDelivers instant topic feeds, customized user bookmarks, and a dark mode interface.",
    points: [
      "Real-time trending topics search platform utilizing Node.js, Express, Firebase Google Auth, and external API integrations.",
      "Delivers instant topic feeds, customized user bookmarks, and a dark mode interface."
    ],
    image: "/projects/project6.png",
    tags: ["React", "TailwindCSS", "Google Authentication", "Firebase", "NodeJs", "ExpressJS", "MongoDB"],
    demoUrl: "https://trendwise-g4z4.vercel.app/",
    githubUrl: "https://github.com/mashu2315/trendwise",
  },
  {
    id: 5,
    title: "Book Your Lab",
    description: "Healthcare diagnostic platform helping users identify medical symptoms, view solutions, and schedule online lab check-ups.\nDesigned with interactive React-Slick carousels, responsive service cards, and simple booking workflows.",
    points: [
      "Healthcare diagnostic platform helping users identify medical symptoms, view solutions, and schedule online lab check-ups.",
      "Designed with interactive React-Slick carousels, responsive service cards, and simple booking workflows."
    ],
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "React-Slick"],
    demoUrl: "https://book-your-lab.vercel.app/",
    githubUrl: "https://github.com/mashu2315/book_your_lab",
  },
  {
    id: 6,
    title: "AgroSense - WSN & AI Agriculture System",
    description: "WSN-Based Smart Agriculture Monitoring and Crop Recommendation System using Cooja Simulation and Machine Learning.\nFeatures AI crop comparison engine, live weather monitoring pipelines, and predictive soil analytics.",
    points: [
      "WSN-Based Smart Agriculture Monitoring and Crop Recommendation System using Cooja Simulation and Machine Learning.",
      "Features AI crop comparison engine, live weather monitoring pipelines, and predictive soil analytics."
    ],
    image: "/projects/project14.png",
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Python", "Node.js", "Express.js", "MongoDB", "LangChain", "WebSockets"],
    demoUrl: "https://github.com/mashu2315/agriculture_monitoring",
    githubUrl: "https://github.com/mashu2315/agriculture_monitoring",
  },
  {
    id: 7,
    title: "Cura Doc - Patient & Doctor Healthcare Portal",
    description: "Platform to maintain medicines, appointments, and patient history with doctor appointment scheduling.\nBuilt with Next.js, TypeScript, and Tailwind CSS featuring automated reminders and medicine logs.",
    points: [
      "Platform to maintain medicines, appointments, and patient history with doctor appointment scheduling.",
      "Built with Next.js, TypeScript, and Tailwind CSS featuring automated reminders and medicine logs."
    ],
    image: "/projects/project13.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://cura-doc.vercel.app/",
    githubUrl: "https://github.com/mashu2315/Cura_doc",
  },
  {
    id: 8,
    title: "Spin The Wheel",
    description: "Interactive prize wheel application built with TypeScript, React, and Tailwind CSS for customizable reward gaming.\nFeatures configurable prize occurrence probabilities, smooth animation physics, and score tracking.",
    points: [
      "Interactive prize wheel application built with TypeScript, React, and Tailwind CSS for customizable reward gaming.",
      "Features configurable prize occurrence probabilities, smooth animation physics, and score tracking."
    ],
    image: "/projects/project12.png",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://spin-the-wheel-green-seven.vercel.app/",
    githubUrl: "https://github.com/mashu2315/spin_the_wheel",
  },
  {
    id: 9,
    title: "Trading Leaderboard",
    description: "Real-time trading leaderboard application built on MERN stack with instant WebSocket state updates.\nHandles live data synchronization, score calculation engines, and interactive financial performance metrics.",
    points: [
      "Real-time trading leaderboard application built on MERN stack with instant WebSocket state updates.",
      "Handles live data synchronization, score calculation engines, and interactive financial performance metrics."
    ],
    image: "/projects/project8.png",
    tags: ["React", "MongoDB", "ExpressJs", "NodeJs", "Tailwind CSS"],
    demoUrl: "https://leaderboard-icen.vercel.app/",
    githubUrl: "https://github.com/mashu2315/leaderboard",
  },
  {
    id: 10,
    title: "Zapmeds - Quick Medicine Delivery",
    description: "Quick 15-minute emergency medicine delivery web interface featuring dark mode UI and rapid product search.\nClean responsive layout with health test booking modules and optimized client-side rendering.",
    points: [
      "Quick 15-minute emergency medicine delivery web interface featuring dark mode UI and rapid product search.",
      "Clean responsive layout with health test booking modules and optimized client-side rendering."
    ],
    image: "/projects/project9.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://zapmeds.vercel.app/",
    githubUrl: "https://github.com/mashu2315/zapmeds",
  },
  {
    id: 11,
    title: "WS Cube Tech Clone",
    description: "Pixel-perfect clone of the popular educational platform WS Cube Tech using React and Tailwind CSS.\nIncludes interactive course carousels, responsive navigation menus, and structured curriculum previews.",
    points: [
      "Pixel-perfect clone of the popular educational platform WS Cube Tech using React and Tailwind CSS.",
      "Includes interactive course carousels, responsive navigation menus, and structured curriculum previews."
    ],
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS", "React-Slick"],
    demoUrl: "http://wscube-tech-taupe.vercel.app/",
    githubUrl: "https://github.com/mashu2315/wscube_tech",
  },
  {
    id: 12,
    title: "MochanD Clone",
    description: "High-performance clone of the official MochanD web platform built with Next.js, TypeScript, and Tailwind CSS.\nOptimized asset loading achieving under 3-second page response times and full cross-device responsiveness.",
    points: [
      "High-performance clone of the official MochanD web platform built with Next.js, TypeScript, and Tailwind CSS.",
      "Optimized asset loading achieving under 3-second page response times and full cross-device responsiveness."
    ],
    image: "/projects/project15.png",
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://mochand-five.vercel.app/",
    githubUrl: "https://github.com/mashu2315/mochand",
  },
  {
    id: 13,
    title: "Top Courses",
    description: "Course aggregation and selection platform enabling users to browse and filter educational courses by topic.\nBuilt with lightweight React and modular CSS for fast page performance and simple user interaction.",
    points: [
      "Course aggregation and selection platform enabling users to browse and filter educational courses by topic.",
      "Built with lightweight React and modular CSS for fast page performance and simple user interaction."
    ],
    image: "/projects/project5.png",
    tags: ["React", "CSS"],
    demoUrl: "https://top-courses-gamma-nine.vercel.app/",
    githubUrl: "https://github.com/mashu2315/top_courses",
  },
  {
    id: 14,
    title: "My Portfolio - AshutoshOS",
    description: "Interactive OS-style hybrid developer portfolio built with React, Framer Motion, and Tailwind CSS.\nFeatures recruiter-first linear scroll, draggable windows, terminal interface, and responsive dark mode UI.",
    points: [
      "Interactive OS-style hybrid developer portfolio built with React, Framer Motion, and Tailwind CSS.",
      "Features recruiter-first linear scroll, draggable windows, terminal interface, and responsive dark mode UI."
    ],
    image: "/projects/project7.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://ashutoshmaurya-navy.vercel.app/",
    githubUrl: "https://github.com/mashu2315/myportfolio",
  },
];

export default projects;