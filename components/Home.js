import React from "react";

const Home = () => {
  const projects = [
    {
      name: "TimesAscent",
      logo: "/TimesLogo.webp",
      href: "https://timesascent.com/",
    },
    {
      name: "StockOne",
      logo: "/Stockone.svg",
      href: "https://stockone.sashyundai.com/login",
    },
    {
      name: "Sashyundai",
      logo: "/sashyundai.svg",
      href: "https://www.sashyundai.com/",
    },
    {
      name: "SAS ONE",
      logo: "/saslogo.svg",
      href: "https://www.sasone.in/",
    },
    {
      name: "Rozgaar",
      logo: "/Rozgaar.svg",
      href: "https://www.rozgaarindia.com/",
    },
    {
      name: "ONE POST",
      logo: "/onepost.png",
      href: "https://www.rozgaarindia.com/",
    },
    {
      name: "SASXTRA",
      logo: "/sasxtra.svg",
      href: "https://www.rozgaarindia.com/",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="sm:m-8 m-2">
      <section class="py-10 bg-black sm:py-16 lg:py-24 rounded-2xl">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-start text-start relative">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
              About Me
            </h2>
            <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <p class="max-w-xl mx-start mt-4 text-base leading-relaxed text-gray-300">
              As a passionate React developer with expertise in Next.js,
              Tailwind CSS, and HTML, I craft beautiful and user-friendly web
              applications. With a focus on seamless user experiences and
              responsive design, I enjoy turning complex problems into elegant
              solutions. My creativity extends to UI/UX, and I thrive in
              collaborative environments where I can contribute my technical
              skills and excellent communication. Let's build something amazing
              together!
            </p>
          </div>

          {/* <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How to create an account?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How can I make payment?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  Do you provide discounts?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span class="text-lg font-semibold text-white">?</span>
              </div>
              <div class="ml-4">
                <p class="text-xl font-semibold text-white">
                  How do you provide support?
                </p>
                <p class="mt-4 text-base text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div> */}
          <div className="hidden md:block">
            <div className="mt-12 marquee-container py-12 rounded-lg bg-zinc-50">
              <div className="marquee ">
                {duplicatedProjects.map((item, index) => (
                  <a key={index} className="logo" href={item.href}>
                    <img
                      className="object-contain lg:w-auto mx-12 h-8"
                      src={item.logo}
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
