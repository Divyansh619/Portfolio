import Image from "next/image";
import React from "react";

const PersonalProjects = () => {
  const liveproject = [
    {
      name: "TimesAscent",
      id: 1,
      description:
        "TimesAscent, a leading platform in the job market landscape, is dedicated to delivering unparalleled job opportunities and career-centric content to professionals across diverse industries and job functions. With a commitment to excellence, the website curates a vast array of job listings from esteemed companies and organizations, positioning itself as a paramount resource for individuals aspiring to advance their careers or explore new and rewarding job prospects.",
      logo: "/TimesLogo.webp",
      href: "https://timesascent.com/",
    },
    {
      name: "RozgaarIndia",
      id: 2,
      description:
        "Rozgaar India is a distinguished and cutting-edge online multi-industry freelance job portal. Designed to bridge the gap between employers and freelance job seekers, this platform serves as an efficient marketplace for connecting talent with opportunities. Whether seeking short-term projects or long-term contracts, Rozgaar India provides a seamless avenue for freelancers to showcase their skills and for companies to hire remote talent for a wide range of tasks.",
      logo: "/Rozgaar.svg",
      href: "https://www.rozgaarindia.com/",
    },
    {
      name: "StockOne",
      id: 3,
      description:
        "The present project aims to develop a sophisticated Car Stock Management System that facilitates seamless coordination across various modules, including Electronic Data Processing (EDP), Stock Manager, Showroom Manager, and Super Admin. The system is designed to efficiently handle and monitor the inventory of cars within the showroom, encompassing both available units and delivered vehicles. ",
      logo: "/Stockone.svg",
      href: "https://stockone.sashyundai.com/",
    },
    {
      name: "SAS-Hyundai",
      id: 4,
      description:
        "This is a  dealership car  website which serves as an online platform for a car dealership to showcase their inventory of vehicles, provide information about the dealership's services, and offer a user-friendly experience for potential customers. This website serves as a virtual showroom, allowing potential buyers to explore the dealership's inventory, services, and special offers from the comfort of their own homes. It plays a pivotal role in attracting customers, facilitating car sales, and building a strong online presence for the dealership",
      logo: "/sashyundai.svg",
      href: "https://www.sashyundai.com/",
    },
    {
      name: "SAS-One",
      id: 5,
      description:
        "Rozgaar India is an online multi-industry freelance job portal. The platform allows employers to connect with freelance job seekers.",
      logo: "/saslogo.svg",
      href: "https://www.sasone.in/",
    },
    {
      name: "Admin",
      id: 6,
      description:
        "The primary objective of this initiative is to design and implement a comprehensive and efficient admin panel capable of overseeing multiple projects simultaneously. The purpose of this admin panel is to empower administrators with the necessary tools and functionalities to ensure the seamless functioning, robust security, and optimal user experience across all associated websites. The admin's responsibility will encompass managing diverse technical aspects while upholding content relevancy and currency for the benefit of website visitors.",
      logo: "/admin.png",
      href: "https://admin.sashyundai.com/",
    },
  ];
  return (
    <section className="py-10 m-2 md:m-8 rounded-2xl bg-black text-white    ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            My Live Projects
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
                  <div className="flex items-center justify-between px-3 py-3 bg-zinc-100 hover:bg-gray-100 transition duration-200">
                    <div className="flex items-center flex-shrink-0">
                      <Image
                        src={item.logo}
                        height={50}
                        width={100}
                        alt={item.name}
                      />
                    </div>

                    <a
                      href={item.href}
                      className="inline-flex ml-3 items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 rounded-lg  bg-gradient-to-r from-purple-600 to-pink-600"
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

export default PersonalProjects;
