import Image from "next/image";
import React from "react";

const Profile = () => {
  const socialMediaData = [
    {
      id: "fb",
      name: "Facebook",
      imgName: "/facebook.png",
    },
    {
      id: "twitter",
      name: "Twitter",
      imgName: "/twitter.png",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      imgName: "/linkedin.png",
    },
    {
      id: "github",
      name: "GitHub",
      imgName: "/github.png",
    },
  ];
  return (
    <section className="py-10 bg-black m-8 rounded-2xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Profile Picture */}
          <div className="relative h-60 w-60 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/family.webp"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              loading="eager"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold text-white">Divyansh Singh</h2>
          <p className="mt-2 text-base  text-gray-400">Frontend Developer</p>
        </div>

        <div className="mt-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            {socialMediaData.map((item) => (
              <div
                key={item.id}
                // href={`https://www.${item.id}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center  bg-white rounded-lg transition-all hover:shadow-md"
              >
                <div className=" group-hover:gradient-blue">
                  <Image
                    src={item.imgName}
                    height={40}
                    width={40}
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {/* Contact Details */}
          <div className="text-white bg-gray-900 p-4 rounded-lg">
            <div className="text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/phone.png"}
                height={50}
                width={50}
                alt="Phone Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">Phone</div>{" "}
                <div>+91-7007011378</div>
              </span>
            </div>

            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/email.png"}
                height={50}
                width={50}
                alt="Email Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">Email</div>{" "}
                <div>divyanshsingh619@gmail.com</div>
              </span>
            </div>
            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/address.png"}
                height={50}
                width={50}
                alt="Address Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">
                  Address
                </div>{" "}
                <div>Civil Lines, Sultanpur, Uttar pradesh</div>
              </span>
            </div>
            <div className="mt-2 text-base border-b-2 border-gray-700 pb-2 flex items-center">
              <Image
                src={"/birthday.png"}
                height={50}
                width={50}
                alt="Birthday Icon"
                className="mr-3"
              />
              <span>
                <div className="font-semibold text-sm text-gray-400">
                  Birthday
                </div>{" "}
                <div>17 September 1998</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
