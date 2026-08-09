import React from "react";
import Tilt from "react-parallax-tilt";
import { experiences } from "../lib/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 font-sans relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            CAREER BRANCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-foreground mt-1">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
            Interactive career branch showing professional full-stack and backend engineering history.
          </p>
        </div>

        {/* Alternating Branch Timeline Container */}
        <div className="relative">
          {/* Central Vertical Trunk (The Branch) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 -translate-x-1/2 rounded-full z-0" />

          <div className="space-y-12 md:space-y-16 relative z-10">
            {experiences.map((experience, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Central Node (Fruit/Leaf on the Branch) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card border-2 border-primary text-primary items-center justify-center shadow-md">
                    <Briefcase size={15} />
                  </div>

                  {/* Horizontal Stem Line Connecting Node to Card */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-primary/40 z-10 ${
                      isEven ? "left-1/2 w-8" : "right-1/2 w-8"
                    }`}
                  />

                  {/* Left Column */}
                  {!isEven ? (
                    <div className="w-full">
                      <ExperienceCard experience={experience} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Right Column */}
                  {isEven ? (
                    <div className="w-full">
                      <ExperienceCard experience={experience} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  const roles = experience.roles || [];
  const hasMultipleRoles = roles.length > 1;
  const primaryRole = experience.role || (roles.length > 0 ? roles[0].role : "");

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={800}
      scale={1.01}
      transitionSpeed={300}
      gyroscope={true}
      className="w-full"
    >
      <div className="group p-6 rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 p-1 flex items-center justify-center shrink-0 mt-0.5">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-lg bg-white group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 ease-out"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {experience.company}
              </h3>
              
              {!hasMultipleRoles && primaryRole && (
                <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                  {primaryRole}
                </p>
              )}

              {experience.location && (
                <p className="flex items-center gap-1 text-xs text-muted-foreground font-medium mt-0.5">
                  <MapPin size={11} /> {experience.location}
                </p>
              )}

              {/* LinkedIn Nested Roles Timeline (Only shown when company has multiple roles) */}
              {hasMultipleRoles && (
                <div className="mt-3.5 relative pl-6 space-y-3.5">
                  {/* Vertical connecting line - Centered at 7px */}
                  <div className="absolute left-[7px] top-2.5 bottom-2.5 w-[2px] -translate-x-1/2 bg-muted-foreground/30 group-hover:bg-primary/40 transition-colors" />

                  {roles.map((subRole, rIdx) => (
                    <div key={rIdx} className="relative pl-2">
                      {/* Circular dot matching LinkedIn style - Centered at 7px */}
                      <div className="absolute left-[-17px] top-1.5 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-muted-foreground/60 group-hover:bg-primary transition-colors border border-card" />
                      
                      <h4 className="text-sm font-bold text-primary transition-colors leading-snug">
                        {subRole.role}
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5">
                        <Calendar size={11} /> {subRole.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap flex items-center gap-1.5 self-start sm:self-center">
            <Calendar size={12} /> {experience.date}
          </span>
        </div>

        {/* Card Content (Bullet Points) */}
        <div className="mt-4 space-y-2.5">
          {experience.points ? (
            experience.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
                  {pt}
                </p>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
              {experience.desc}
            </p>
          )}
        </div>

        {/* Tech Badges & Certificate */}
        <div className="mt-5 border-t border-border pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mr-1">
              Stack:
            </span>
            {experience.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="bg-secondary text-secondary-foreground font-semibold px-2.5 py-0.5 text-xs rounded border border-border"
              >
                {skill}
              </span>
            ))}
          </div>

          {experience.certificate && (
            <a
              href={experience.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              onClick={(e) => e.stopPropagation()}
            >
              <FileText size={14} /> Certificate
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
};

export default Experience;
