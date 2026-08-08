import { skillGrouped } from "../lib/portfolioData";
import Tilt from "react-parallax-tilt";
import { Code2, Cpu, Database, Layout, Wrench, CheckCircle } from "lucide-react";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Programming Languages":
      return <Code2 className="w-4 h-4 text-primary" />;
    case "Frontend & Backend":
      return <Layout className="w-4 h-4 text-primary" />;
    case "Databases":
      return <Database className="w-4 h-4 text-primary" />;
    case "Tools & Technologies":
      return <Wrench className="w-4 h-4 text-primary" />;
    case "Core Concepts":
      return <Cpu className="w-4 h-4 text-primary" />;
    default:
      return <Code2 className="w-4 h-4 text-primary" />;
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-foreground mt-1">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
            Core programming languages, frameworks, cloud services, and computer science fundamentals.
          </p>
        </div>

        {/* Skills Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGrouped.map((group, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={600}
              scale={1.02}
              transitionSpeed={300}
              gyroscope={true}
              className="h-full"
            >
              <div className="group bg-card border border-border p-5 rounded-xl shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors h-full cursor-pointer">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 font-medium leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* High Contrast Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded text-xs font-semibold bg-primary/10 text-foreground dark:text-foreground border border-primary/20 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};