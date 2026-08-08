import { ArrowDown, Briefcase, Code, Download, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import { ReactTyped } from 'react-typed';
import Tilt from 'react-parallax-tilt';
import profileImage from "../assets/profile2.png";
import Resume from "../assets/Resume.pdf";
import { profile } from "../lib/portfolioData";

export const HeroSection = () => {
  const downloadResume = () => {
    window.open(Resume, "_blank");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='hero' className='relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12 md:py-16'>
      <div className='container max-w-5xl mx-auto z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12'>
        {/* Left Column Text Info */}
        <div className="space-y-4 text-center md:text-left w-full md:w-3/5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Full Stack Developer · Software Engineer
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground'>
            ASHUTOSH <span className='text-primary'>MAURYA</span>
          </h1>

          <div className='text-lg md:text-xl text-foreground/90 font-bold'>
            I build{' '}
            <ReactTyped
              strings={[
                "Scalable Web Applications",
                "Full Stack Data Systems",
                "Event-Driven Backend APIs",
                "High-Performance Products",
                "Complex Backend Architectures",
                "Scalable Frontend Designs"
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop={true}
              className='text-primary font-bold'
            />
          </div>

          <p className='text-sm md:text-base text-muted-foreground max-w-xl font-medium leading-relaxed'>
            Software Development Engineer with experience engineering production full-stack systems, optimizing database queries, and integrating real-time API services using Next.js, React, Node.js, and TypeScript.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
            {["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-secondary text-secondary-foreground border border-border">
                {tech}
              </span>
            ))}
          </div>

          {/* Primary Buttons */}
          <div className='pt-3 flex flex-wrap gap-3 justify-center md:justify-start items-center'>
            <button
              onClick={() => scrollToSection('experience')}
              className='cosmic-button cursor-pointer text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2'
            >
              <Briefcase size={16} /> View Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-xs sm:text-sm hover:bg-primary/20 transition-colors cursor-pointer flex items-center gap-2'
            >
              <Code size={16} /> View Projects
            </button>
            <button
              onClick={downloadResume}
              className='px-5 py-2.5 rounded-full border border-border hover:bg-foreground/5 text-foreground font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2'
            >
              <Download size={16} /> Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-4 justify-center md:justify-start text-muted-foreground">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

        {/* Right Column Profile Image with 3D Tilt and Hover Rotation */}
        <div className='w-full md:w-2/5 flex justify-center items-center'>
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={600}
            scale={1.03}
            transitionSpeed={400}
            gyroscope={true}
            className="rounded-full overflow-hidden"
          >
            <div className="relative group cursor-pointer p-1">
              <img
                src={profileImage}
                alt="Ashutosh Maurya"
                className='h-[240px] md:h-[300px] lg:h-[340px] rounded-full object-cover border-2 border-primary/30 shadow-md group-hover:rotate-6 group-hover:scale-105 transition-transform duration-500 ease-out'
              />
            </div>
          </Tilt>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={() => scrollToSection('experience')}
        className='mt-8 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity'
      >
        <span className='text-[11px] text-muted-foreground font-semibold tracking-wider uppercase mb-1'>Scroll Down</span>
        <ArrowDown className='h-4 w-4 text-primary animate-bounce' />
      </div>
    </section>
  );
};
