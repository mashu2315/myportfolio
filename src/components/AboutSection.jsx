import { Briefcase, Code, User, Download, Mail, ExternalLink, Award, Trophy, Star } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Resume from '../assets/Resume.pdf';
import { profile } from "../lib/portfolioData";

export const AboutSection = () => {

  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const achievements = [
    {
      platform: "LeetCode",
      title: "Knight Rank (Peak Rating: 1913)",
      description: "Achieved Knight rank on LeetCode with a peak rating of 1913 by solving daily coding challenges.",
      link: profile.codingProfiles.leetcode,
      badge: "Knight (1913)",
    },
    {
      platform: "CodeChef",
      title: "2-Star Rating (Peak Rating: 1464)",
      description: "Maintained 2-star with a rating of 1464 in C++ on CodeChef for competitive programming skills.",
      link: profile.codingProfiles.codechef,
      badge: "2★ (1464)",
    },
    {
      platform: "HackerRank",
      title: "5-Star Rating in C++",
      description: "Earned a 5-star rating in C++ on HackerRank by completing problem-solving modules.",
      link: profile.codingProfiles.hackerrank,
      badge: "5★ C++",
    },
    {
      platform: "Codeforces",
      title: "Max Rating: 1035",
      description: "Increased Codeforces rating through contest participation, achieving a maximum rating of 1035.",
      link: null,
      badge: "1035 Rating",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
            ENGINEER PROFILE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-foreground mt-1">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
            Passionate Software Development Engineer focused on scalable software architecture and user-centric web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bio text */}
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Full Stack Software Engineer
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
              I am a Software Development Engineer specializing in full-stack web application development using Node.js, Express, React.js, Next.js, and TypeScript. I take pride in crafting clean RESTful APIs, robust database schemas, and performant user interfaces.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
              With a strong foundation in Data Structures and Algorithms (950+ problems solved across LeetCode, CodeChef, HackerRank, and Codeforces), I bring an analytical and problem-solving mindset to system scaling bottlenecks, real-time features, and event-driven architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-3 justify-start">
              <button
                onClick={scrollToContact}
                className="cosmic-button cursor-pointer text-xs font-semibold px-5 py-2.5 flex items-center gap-2"
              >
                <Mail size={15} /> Get In Touch
              </button>

              <button
                onClick={downloadResume}
                className="px-5 py-2.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-xs font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Download size={15} /> Download CV
              </button>
            </div>
          </div>

          {/* Core Feature Cards */}
          <div className="grid grid-cols-1 gap-4">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={600}
              scale={1.02}
              transitionSpeed={300}
              gyroscope={true}
            >
              <div className="group p-4 rounded-xl border border-border bg-card shadow-xs cursor-pointer hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">Full Stack Architecture</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium leading-relaxed">
                      End-to-end web applications built with Next.js, React, Node.js, and PostgreSQL/MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={600}
              scale={1.02}
              transitionSpeed={300}
              gyroscope={true}
            >
              <div className="group p-4 rounded-xl border border-border bg-card shadow-xs cursor-pointer hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">Algorithmic Problem Solving</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium leading-relaxed">
                      LeetCode Knight (1913 Peak) with 1000+ DSA problems solved across competitive platforms.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={600}
              scale={1.02}
              transitionSpeed={300}
              gyroscope={true}
            >
              <div className="group p-4 rounded-xl border border-border bg-card shadow-xs cursor-pointer hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">Systems & Cloud Engineering</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium leading-relaxed">
                      Docker containerization, AWS integration, WebSockets, and event-driven API services.
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        {/* Coding Profiles & Competitive Achievements Block */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" /> Competitive Programming & DSA
              </h3>
            </div>

            {/* Quick Profile Links */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={profile.codingProfiles.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold border border-primary/20 flex items-center gap-1.5 transition-colors"
              >
                LeetCode <ExternalLink size={12} />
              </a>
              <a
                href={profile.codingProfiles.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold border border-border flex items-center gap-1.5 transition-colors"
              >
                CodeChef <ExternalLink size={12} />
              </a>
              <a
                href={profile.codingProfiles.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold border border-border flex items-center gap-1.5 transition-colors"
              >
                HackerRank <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={600}
                scale={1.01}
                transitionSpeed={300}
                gyroscope={true}
              >
                <div className="p-4 rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-xs flex flex-col justify-between h-full hover:border-primary/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Award size={14} className="text-primary" /> {item.platform}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.link && (
                    <div className="pt-3 mt-3 border-t border-border/60">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                      >
                        Profile Link <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
