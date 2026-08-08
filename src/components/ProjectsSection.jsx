import { ArrowRight, ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import projects from "../lib/projectData";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            FEATURED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-foreground mt-1">
            Production <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
            Full-stack web applications, backend services, and interactive systems crafted with clean code and performance focus.
          </p>
        </div>

        {/* Projects Grid with Tilt & Hover Rotated Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, key) => (
            <Tilt
              key={key}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={600}
              scale={1.02}
              transitionSpeed={300}
              gyroscope={true}
              className="h-full"
            >
              <div
                onClick={() => handleOpenModal(project)}
                className="group border border-border bg-card rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-primary/50 transition-all duration-300 cursor-pointer h-full"
              >
                {/* Cover Image with Rotation on Hover */}
                <div className="h-44 overflow-hidden relative border-b border-border bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 group-hover:-rotate-3 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {project.tags.slice(0, 4).map((tag, tKey) => (
                        <span
                          key={tKey}
                          className="px-2 py-0.5 text-[11px] font-semibold rounded bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* 2-Line Description */}
                    <ul className="text-muted-foreground text-xs space-y-1 mb-4 list-disc list-inside font-medium leading-relaxed">
                      {(project.points || project.description.split("\n")).map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Links */}
                  <div
                    className="flex justify-between items-center pt-3 border-t border-border text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                      <Github size={13} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cosmic-button cursor-pointer text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 font-bold"
          >
            {showAll ? (
              <>
                Show Less Projects <ChevronUp size={15} />
              </>
            ) : (
              <>
                Show All Projects ({projects.length}) <ChevronDown size={15} />
              </>
            )}
          </button>

          <a
            className="px-5 py-2.5 rounded-full border border-border hover:bg-foreground/5 text-foreground font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mashu2315"
          >
            GitHub Profile <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Modal View for Project */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-lg font-bold text-foreground">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground text-xl font-bold p-1 cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg border border-border"
              />

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                  Key Features & Engineering:
                </h4>
                <ul className="text-muted-foreground text-xs space-y-1.5 list-disc list-inside font-medium leading-relaxed">
                  {(selectedProject.points || selectedProject.description.split("\n")).map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary text-xs font-semibold rounded px-2.5 py-1 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-3 border-t border-border">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-secondary text-secondary-foreground text-center text-xs font-bold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github size={14} /> View Code
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-center text-xs font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink size={14} /> View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};