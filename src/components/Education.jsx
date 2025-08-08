import React from 'react'
import mmmutLogo from "../assets/education_logo/mmmut_logo.png"
import upbLogo from "../assets/education_logo/upb_logo.png"

const education = [
    {
      id: 0,
      img: mmmutLogo,
      school: "Madan Mohan Malviya University of Technology, Gorakhpur",
      date: "Sept 2023 - July 2027",
      grade: "8.85 CGPA",
      desc: "I am currently pursuing my Btech degree in Information Technology Branch from Madan Mohan Malviya University of Technology, Gorakhpur. My experience at MMMUT has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: upbLogo,
      school: "Dhaneshwari Devi Inter College, Madhuban, Mau",
      date: "Apr 2019 - March 2021",
      grade: "81.67%",
      desc: "I have completed my class 12 education from Dhaneshwari Devi Inter College, Khirikotha under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with English and a regional language Hindi.",
      degree: "UPMSP(XII) - PCM",
    },
    {
      id: 2,
      img: upbLogo,
      school: "Maa Vindhyawasini Feku Prasad Smarak IC, Bandhanpur, Mau",
      date: "Apr 2017 - March 2019",
      grade: "70.6%",
      desc: "I have completed my class 10 education from Maa Vindhyawasini Feku Prasad Smarak IC, Bandhanpur, Mau, under the UP board, where I studied Science.",
      degree: "UPMSP(X), Science",
    },
  ];


const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 text-left"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-muted-foreground mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-primary/50 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 hover:border-4 hover:border-primary opacity-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-foreground/20 bg-primary-background backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-secondary-foreground">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-secondary-foreground">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-foreground/80 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-muted-foreground">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;





