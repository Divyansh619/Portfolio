import Image from "next/image";
import React from "react";

const Work = () => {
  const liveproject = [
    {
      name: "Todo List",
      id: 1,
      description:
        "The Todo List project is a task management app that helps users organize and prioritize their daily tasks efficiently. With a user-friendly interface, users can create, edit, and mark tasks as done, ensuring they stay on top of their responsibilities and deadlines. Its simplicity and synchronization across devices make it a valuable tool for increasing productivity and reducing stress.",
      logo: "/todo.png",
      href: "https://mytodo619.netlify.app//",
    },
    {
      name: "Cinefil",
      id: 2,
      description:
        " It is an online database of information related to movies, television shows, and video games. Users can access information such as cast, crew, plot summaries, and user ratings for various titles. TMDb provides an API (Application Programming Interface) that allows developers to integrate this information into their own applications or websites. It's a valuable resource for developers creating movie-related applications, websites, or servicess.",
      logo: "/cinefil.png",
      href: "https://cinefil.vercel.app/",
    },
    // {
    //   name: "buyBook",
    //   id: 3,
    //   description:
    //   "An ecommerce website built with React, tailored specifically for purchasing books. Seamlessly browse, search, and buy your favorite titles in a user-friendly interface designed to enhance your book-buying experience.",
    //   logo: "/cinefil.png",
    //   href: "https://cinefil.vercel.app/",
    // },
  ];
  return (
    <section className="py-10 m-2 md:m-8 rounded-2xl bg-black text-white    ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Self made Projects
          </h2>
          <div className="w-1/4 h-0.5 mt-3 mx-auto bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div className="grid  max-w-md grid-cols-1 gap-6 mt-8 lg:mt-16 lg:grid-cols-2 lg:max-w-full lg:gap-14">
          {liveproject.map((item) => {
            return (
              <div
                key={item.id}
                className="flex border border-gray-400 hover:border-yellow-600 flex-col overflow-hidden bg-gray-900 shadow-md rounded-xl"
              >
                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                  <div className="flex-shrink-0">
                    <span className="block text-xs font-semibold tracking-widest uppercase text-orange-500">
                      Technology
                    </span>
                  </div>
                  <div className="py-2">
                    <Image
                      src={item.logo}
                      height={50}
                      width={50}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 mt-2">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-base text-white">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200">
                  <div className="flex items-center justify-between px-2 py-2 bg-zinc-100 hover:bg-gray-100 transition duration-200">
                    <a
                      href={item.href}
                      className="inline-flex ml-2 items-center justify-center px-2 py-2 text-base font-semibold text-white transition-all duration-200 rounded-lg  bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      Visit Website
                      <svg
                        className="w-5 h-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
