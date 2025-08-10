import React from "react";
import Tilt from "react-parallax-tilt";
import dws from "../assets/dws.png";
export const experiences = [
  {
    id: 0,
    img: dws,
    role: "Software Development Engineer",
    company: "DWS Global Tech",
    date: "August 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with teams to build responsive UI and optimize application performance in an agile environment.",
    skills: ["MERN Stack", "TypeScript", "Tailwind CSS"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary">EXPERIENCE</h2>

        <p className="text-muted-foreground mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-primary/50 h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-fill rounded-full"
              />
            </div>
            <Tilt
              className="transition-all delay-300 rounded-full"
              tiltMaxAngleX={4}
              tiltMaxAngleY={8}
              perspective={500}
              scale={1.05}
              transitionSpeed={100}
              gyroscope={true}
            >
              {/* Content Section */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-foreground/20 bg-primary-background backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 `}
              >
                {/* Flex container for image and text */}
                <div className="flex flex-col lg:flex-row items-center space-x-6">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-fill"
                    />
                  </div>

                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-secondary-foreground">
                        {experience.role}
                      </h3>
                      <h4 className="text-md sm:text-sm text-seondary-foreground">
                        {experience.company}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground">{experience.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-foreground/80">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
