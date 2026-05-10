import { StarBackground } from "../../components/StarBackground";
import { OsShell } from "../../components/os/OsShell";
import { Folder, LayoutGrid, Mail, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { profile } from "../../lib/portfolioData";
import { createElement, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import { motion } from "framer-motion";

export const HomePage = () => {
  const constraintsRef = useRef(null);
  const navigate = useNavigate();
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <OsShell>
      <div className="relative h-full w-full overflow-hidden" ref={constraintsRef}>
        <StarBackground />

        {/* Background Image centered as wallpaper */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-50 md:opacity-70">
          <div className="pointer-events-auto">
            <Tilt
              className="hover:border-4 transition-all delay-300 border-primary-foreground rounded-full"
              tiltMaxAngleX={45}
              tiltMaxAngleY={45}
              perspective={1000}
              scale={1.1}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Ashutosh Maurya"
                className="h-[200px] md:h-[350px] lg:h-[450px] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>

        {/* Foreground Content: Full Desktop Workspace */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Welcome App (Draggable) */}
          {isWelcomeOpen && (
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragMomentum={false}
              className="absolute top-[12%] left-[5%] md:left-[15%] lg:left-[20%] w-[90%] md:w-[70%] lg:w-[50%] max-w-2xl bg-card/65 backdrop-blur-md border border-foreground/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] pointer-events-auto overflow-hidden z-30"
            >
              {/* Header */}
              <div className="h-11 bg-background/50 border-b border-foreground/10 px-4 flex items-center justify-between cursor-grab active:cursor-grabbing select-none">
                <span className="text-xs font-semibold text-muted-foreground">Welcome to AshutoshOS v1.0</span>
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setIsWelcomeOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                    title="Close"
                  />
                  <button 
                    onClick={() => setIsWelcomeOpen(false)}
                    className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"
                    title="Minimize"
                  />
                  <button 
                    className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer"
                    title="Maximize"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground drop-shadow-md">
                  Hi, I'm <span className="text-primary">Ashutosh</span> <span className="text-gradient">Maurya</span>
                </h1>
                <div className="text-base text-muted-foreground mt-2 font-semibold">
                  I'm a <ReactTyped strings={["Web Developer", "Coder", "Frontend Developer"]} typeSpeed={70} backSpeed={60} loop={true} className="text-primary font-bold" />
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-medium">
                  I have experience in building websites using the MERN stack. I enjoy learning new things and love solving problems through coding and development.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <button 
                    onClick={() => navigate("/projects")}
                    className="cosmic-button shadow-md cursor-pointer text-xs"
                  >
                    Explore Projects
                  </button>
                  <button 
                    onClick={() => setIsWelcomeOpen(false)}
                    className="px-4 py-2 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors text-xs font-semibold text-foreground/80 cursor-pointer"
                  >
                    Close & Enter Desktop
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Desktop Icons in a clean layout across the whole screen (non-scrollable, wraps naturally) */}
          <div className="absolute inset-6 flex flex-row md:flex-col flex-wrap gap-4 items-center md:items-start justify-start md:justify-end content-start pointer-events-none">
            <DesktopFolder to="/about" label="About" constraintsRef={constraintsRef} />
            <DesktopFolder to="/skills" label="Skills" constraintsRef={constraintsRef} />
            <DesktopFolder to="/experience" label="Experience" constraintsRef={constraintsRef} />
            <DesktopFolder to="/education" label="Education" constraintsRef={constraintsRef} />
            <DesktopFolder to="/projects" label="Projects" icon={LayoutGrid} constraintsRef={constraintsRef} />
            <DesktopFolder to="/contact" label="Contact" icon={Mail} constraintsRef={constraintsRef} />
            <DesktopFolder to="/terminal" label="Terminal" icon={Terminal} constraintsRef={constraintsRef} />
            
            {/* Custom Desktop Icon to Re-open Welcome dialog */}
            {!isWelcomeOpen && (
              <motion.div
                onClick={() => setIsWelcomeOpen(true)}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragMomentum={false}
                className="group flex flex-col items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-foreground/10 rounded-xl cursor-grab active:cursor-grabbing relative pointer-events-auto"
              >
                <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-[1rem] grid place-items-center bg-primary/20 text-primary group-hover:bg-primary/30 backdrop-blur-md border border-foreground/20 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Folder className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 drop-shadow-md pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground/90 text-center drop-shadow-md tracking-wide pointer-events-none select-none">
                  Welcome App
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </OsShell>
  );
};

const DesktopFolder = ({ to, label, icon, constraintsRef }) => {
  const navigate = useNavigate();
  const isDragging = useRef(false);

  return (
    <motion.div
      onClick={() => {
        if (!isDragging.current) {
          navigate(to);
        }
      }}
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
      dragElastic={0.2}
      dragMomentum={false}
      draggable={false}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      className="group flex flex-col items-center gap-1 sm:gap-2 p-1 sm:p-2 hover:bg-foreground/10 rounded-xl cursor-grab active:cursor-grabbing relative pointer-events-auto"
    >
      <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-[1rem] grid place-items-center bg-primary/20 text-primary group-hover:bg-primary/30 backdrop-blur-md border border-foreground/20 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {createElement(icon ?? Folder, { className: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 drop-shadow-md pointer-events-none" })}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground/90 text-center drop-shadow-md tracking-wide pointer-events-none select-none">
        {label}
      </div>
    </motion.div>
  );
};

