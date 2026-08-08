import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import Resume from "../assets/Resume.pdf";
import { profile } from "../lib/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    const container = document.getElementById("os-home-scroll-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-12 px-4 relative border-t border-border bg-card/60 backdrop-blur-md">
      <div className="container max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
        {/* Name & Title */}
        <div>
          <h3 className="text-lg font-bold text-foreground tracking-wide uppercase">
            Ashutosh Maurya
          </h3>
          <p className="text-xs text-muted-foreground font-medium mt-0.5">
            Software Engineer / Full Stack Developer
          </p>
        </div>

        {/* Links: GitHub · LinkedIn · Email · Resume */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground pt-1">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Github size={14} /> GitHub
          </a>
          <span>·</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <span>·</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Mail size={14} /> Email
          </a>
          <span>·</span>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <FileText size={14} /> Resume
          </a>
        </div>

        {/* Made with ♥ and Ashutosh */}
        <div className="pt-2 flex items-center justify-between w-full border-t border-border mt-4 text-xs text-muted-foreground font-medium">
          <span>&copy; {new Date().getFullYear()} Ashutosh Maurya. All rights reserved.</span>
          <span className="flex items-center gap-1 text-foreground/80 font-semibold">
            Made with <span className="text-red-500">♥</span> and Ashutosh
          </span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
