import React from "react";
import Tilt from "react-parallax-tilt";
import mmmutLogo from "../assets/education_logo/mmmut_logo.png";
import upbLogo from "../assets/education_logo/upb_logo.png";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    id: 0,
    img: mmmutLogo,
    school: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    date: "Sept 2023 - July 2027",
    grade: "8.85 CGPA",
    desc: "Pursuing Bachelor of Technology in Information Technology. Focused on Data Structures, Algorithms, Software Engineering, Database Systems, and System Architecture.",
    degree: "B.Tech — Information Technology",
  },
  {
    id: 1,
    img: upbLogo,
    school: "Dhaneshwari Devi Inter College, Mau",
    date: "Apr 2019 - March 2021",
    grade: "81.67%",
    desc: "Completed Senior Secondary Class 12 (PCM) under UP Board with high honors in Mathematics and Science.",
    degree: "Class XII (PCM) — UPMSP",
  },
  {
    id: 2,
    img: upbLogo,
    school: "Maa Vindhyawasini Feku Prasad Smarak IC, Mau",
    date: "Apr 2017 - March 2019",
    grade: "70.6%",
    desc: "Completed High School Class 10 under UP Board with a strong foundation in Mathematics and Science.",
    degree: "Class X — UPMSP",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 px-4 font-sans relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            ACADEMIC BRANCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-foreground mt-1">
            Education <span className="text-primary">& Honors</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
            Academic qualifications and computer science coursework from Madan Mohan Malaviya University of Technology.
          </p>
        </div>

        {/* Alternating Branch Timeline Container */}
        <div className="relative">
          {/* Central Vertical Trunk (The Branch) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 -translate-x-1/2 rounded-full z-0" />

          <div className="space-y-12 md:space-y-16 relative z-10">
            {education.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={edu.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Central Node (Leaf/Fruit Node on the Branch) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-card border-2 border-primary text-primary items-center justify-center shadow-md">
                    <GraduationCap size={16} />
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
                      <EducationCard edu={edu} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Right Column */}
                  {isEven ? (
                    <div className="w-full">
                      <EducationCard edu={edu} />
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

const EducationCard = ({ edu }) => {
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 p-1 flex items-center justify-center shrink-0">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 ease-out"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-primary">
                {edu.school}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
              <Award size={13} /> Grade: {edu.grade}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border flex items-center gap-1">
              <Calendar size={13} /> {edu.date}
            </span>
          </div>
        </div>

        <p className="mt-3 text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed">
          {edu.desc}
        </p>
      </div>
    </Tilt>
  );
};

export default Education;
