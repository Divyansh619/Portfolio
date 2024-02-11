import React from "react";

const Skills = () => {
  const skillsbar = [
    {
      id: 1,
      name: "Next.js",
      bar: "70%",
      color: "from-green-400 to-blue-500",
    },
    {
      id: 2,
      name: "React.js",
      bar: "70%",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "React Native",
      bar: "70%",
      color: "from-pink-400 to-blue-500",
    },
    {
      id: 4,
      name: "JavaScript",
      bar: "65%",
      color: "from-yellow-300 to-orange-400",
    },
    {
      id: 5,
      name: "CSS3",
      bar: "80%",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 6,
      name: "HTML5",
      bar: "80%",
      color: "from-red-400 to-pink-500",
    },
    {
      id: 7,
      name: "Shopify",
      bar: "70%",
      color: "from-green-400 to-yellow-500",
    },
  ];

  const skillshave = [
    {
      id: 1,
      name: "HTML5",
      type: "Language",
      logo: "/skill/html.png",
    },
    {
      id: 2,
      name: "CSS3",
      type: "Language",
      logo: "/skill/css.png",
    },
    {
      id: 3,
      name: "JavaScript",
      type: "Language",
      logo: "/skill/js.png",
    },
    {
      id: 4,
      name: "Redux",
      type: "Framework",
      logo: "/skill/redux.png",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      type: "Framework",
      logo: "/skill/tailwind.png",
    },
    {
      id: 6,
      name: "Bootstrap",
      type: "Framework",
      logo: "/skill/bootstrap.png",
    },
    {
      id: 7,
      name: "Git",
      type: "Tool",
      logo: "/skill/git.png",
    },
    {
      id: 8,
      name: "Bitbucket",
      type: "Tool",
      logo: "/skill/bit.png",
    },
    {
      id: 9,
      name: "ReactJS",
      type: "Framework",
      logo: "/skill/react.gif",
    },
    {
      id: 10,
      name: "Next.js",
      type: "Framework",
      logo: "/skill/next.svg",
    },
    {
      id: 11,
      name: "Responsive Design",
      type: "design",
      logo: "/skill/responsive.png",
    },
   
    {
      id: 13,
      name: "SEO",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 14,
      name: "Frontend Performance",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    
    {
      id: 15,
      name: "RESTful APIs",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 16,
      name: "UI/UX Design",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 17,
      name: "React Router",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 12,
      name: "Agile Methodologies",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 13,
      name: "React Native",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 14,
      name: "Shopify",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 14,
      name: "Server Side Rendering",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
    {
      id: 15,
      name: "Github",
      type: "Methodology",
      logo: "/skill/agile.png",
    },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 bg-black text-white">
      {/* Skills column */}
      <div className="p-4">
        <div class="max-w-2xl mx-start text-start relative">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Skills
          </h2>
          <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
        {skillsbar.map((item) => {
          return (
            <div key={item.id} className="mt-6">
              <div className="bg-gray-800 h-1 rounded-full overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${item.color} h-full`}
                  style={{ width: item.bar }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-gray-400">
                <span>{item.name}</span>
                <span>{item.bar}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Knowledge column */}
      <div className="p-4">
        <div className="max-w-2xl mx-start text-start relative">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Knowledge
          </h2>
          <div className="w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
        <div>
          {skillshave.map((item) => {
            return (
              <button key={item.id} className="mt-6 mx-2">
                <span className="whitespace-nowrap rounded-lg   px-3 py-2 text-sm text-white border hover:border-yellow-400 border-[#e3436b]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
