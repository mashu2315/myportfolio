import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { portfolioProjects } from "../lib/portfolioData";
import { OsShell } from "../components/os/OsShell";

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = useMemo(() => portfolioProjects, []);

  return (
    <OsShell>
      <section className="py-10 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} /> Back
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              All <span className="text-primary">Projects</span>
            </h1>
            <div className="w-[64px]" />
          </div>

          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            A complete list of my work—click any project to view it in full and
            open the live demo or source code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Tilt
                key={project.id}
                className="transition-all delay-300 rounded-full"
                tiltMaxAngleX={4}
                tiltMaxAngleY={8}
                perspective={500}
                scale={1.0}
                transitionSpeed={100}
                gyroscope={true}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="py-2 group border-2 bg-card border-primary/30 rounded-lg overflow-hidden flex flex-col justify-between shadow-xs card-hover h-full cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fill transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center px-4 pb-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                      title="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                      title="Source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-background backdrop-blur-md bg-opacity-90 p-4">
            <div className="bg-gray-900 scale-75 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-primary-foreground text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-gray-900 px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </OsShell>
  );
};

