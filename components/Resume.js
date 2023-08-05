import Image from "next/image";
import React from "react";
import Skills from "./Skills";

const Resume = () => {
  const educationdata = [
    {
      id: 1,
      name: "Bachelor of Technology",
      branch: "Mechanical Engineering",
      year: "2014-18",
      school: "Kamla Nehru Institute of Technology",
      City: "Sultanpur,up",
    },
    {
      id: 2,
      name: "Seconday School",

      year: "2012-14",
      school: "Stella Maris Convent School",
      City: "Sultanpur,up",
    },
    {
      id: 3,
      name: "High School",

      year: "2011-12",
      school: "Stella Maris Convent School",
      City: "Sultanpur,up",
    },
  ];

  const experiencedata = [
    {
      id: 1,
      Jrole: "Front-end developer",
      company: "SASONE ",
      year: "April 22 -July 22",
      role: "Internship",
      City: "Lucknow,up",
    },
    {
      id: 2,
      Jrole: "Front-end developer",
      company: "SASONE ",
      year: "August 22 - Present",
      role: "Fulltime",
      City: "Lucknow,up",
    },
  ];

  return (
    <section class="bg-black m-2 md:m-8 rounded-2xl text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-2xl mx-start text-start relative">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Resume
          </h2>
          <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="text-xl font-bold mt-6 mr-2">Education</span>
              <Image src={"/education.png"} className="mt-6" height={45} width={45} />
            </div>
            <div>
              {educationdata?.map((item, index) => (
                <div
                  key={index}
                  className="education-box my-6 rounded-lg border hover:border-gray-300 bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-md  border-pink-500 hover:shadow-xl transition duration-300"
                >
                  <div className="text-yellow-600 text-sm">{item.year}</div>

                  <h2 className="mt-4 text-lg font- text-white">
                    {item.name}
                  </h2>
                  <h2 className="mt-2 text-base font-semibold text-pink-300">
                    {item.branch}
                  </h2>

                  <p className="mt-2 text-base text-gray-400">
                    {item.school}, {item.City}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="text-xl font-bold mt-6 mr-2">Experience</span>
              <Image src={"/experience.png"} className="mt-6" height={45} width={45} />
            </div>
            <div>
              {experiencedata?.map((item, index) => (
                <div
                  key={index}
                  className="experience-box my-6 rounded-lg border hover:border-gray-300 bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-md border-pink-500 hover:shadow-xl transition duration-300"
                >
                  <div className="text-yellow-600 text-sm">{item.year}</div>

                  <h2 className="mt-4 text-lg  text-white">
                    {item.Jrole}
                  </h2>
                  <h2 className="mt-2 text-lg font-semibold text-pink-300">
                    {item.company}
                  </h2>

                  <p className="mt-2 text-base text-gray-400">
                     <span className="text-purple-400">{item.role}</span> {item.City}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* #Skills */}
        <Skills/>
      </div>
    </section>
  );
};

export default Resume;
