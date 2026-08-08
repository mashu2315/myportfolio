import { OsShell } from "../../components/os/OsShell";
import { Folder, LayoutGrid, Mail, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createElement, useRef } from "react";
import { HeroSection } from "../../components/HeroSection";
import Experience from "../../components/ExperienceSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { SkillsSection } from "../../components/SkillsSection";
import Education from "../../components/Education";
import { AboutSection } from "../../components/AboutSection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";

export const HomePage = () => {
  const constraintsRef = useRef(null);

  return (
    <OsShell>
      <div className="flex flex-col w-full">
        {/* Viewport 1: OS Desktop & Developer Hero */}
        <div className="relative min-h-[calc(100vh-3rem)] w-full overflow-hidden shrink-0 flex flex-col justify-between" ref={constraintsRef}>
          {/* Hero Section */}
          <div className="relative z-20 w-full">
            <HeroSection />
          </div>

          {/* Quick OS Desktop Directory Shortcuts */}
          <div className="absolute top-16 right-4 sm:right-8 z-30 flex flex-col gap-2 pointer-events-none">
            <DesktopFolder to="/experience" label="experience/" sectionId="experience" constraintsRef={constraintsRef} />
            <DesktopFolder to="/projects" label="projects/" icon={LayoutGrid} sectionId="projects" constraintsRef={constraintsRef} />
            <DesktopFolder to="/skills" label="skills/" sectionId="skills" constraintsRef={constraintsRef} />
            <DesktopFolder to="/education" label="education/" sectionId="education" constraintsRef={constraintsRef} />
            <DesktopFolder to="/about" label="about/" sectionId="about" constraintsRef={constraintsRef} />
            <DesktopFolder to="/contact" label="contact/" icon={Mail} sectionId="contact" constraintsRef={constraintsRef} />
            <DesktopFolder to="/terminal" label="terminal" icon={Terminal} constraintsRef={constraintsRef} />
          </div>
        </div>

        {/* Viewport 2: Linear Recruiter Sections Flow */}
        <div className="relative z-10 border-t border-foreground/10">
          <Experience />
          <ProjectsSection />
          <SkillsSection />
          <Education />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </OsShell>
  );
};

const DesktopFolder = ({ to, label, icon, sectionId, constraintsRef }) => {
  const navigate = useNavigate();
  const isDragging = useRef(false);

  const handleClick = () => {
    if (isDragging.current) return;
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(to);
  };

  return (
    <motion.div
      onClick={handleClick}
      onDragStart={() => {
        isDragging.current = true;
      }}
      onDragEnd={() => {
        setTimeout(() => {
          isDragging.current = false;
        }, 50);
      }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragMomentum={false}
      className="group flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-md border border-foreground/15 hover:bg-primary/10 hover:border-primary/30 rounded-xl cursor-pointer shadow-sm transition-all duration-150 pointer-events-auto"
    >
      <div className="p-1 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {createElement(icon ?? Folder, { className: "w-3.5 h-3.5" })}
      </div>
      <span className="text-xs font-mono font-semibold text-foreground/90 group-hover:text-primary transition-colors">
        {label}
      </span>
    </motion.div>
  );
};
