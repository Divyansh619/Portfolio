import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <section class="py-10 bg-black m-2 md:m-8 rounded-2xl ">
      <div class="px-4 mx-auto sm:px-6 base:px-8 max-w-7xl">
        <div class="max-w-2xl mx-start text-start relative">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Contact me
          </h2>
          <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div class="grid grid-cols-1 gap-6 px-4 sm:px-8 md:px-0 md:grid-cols-3">
            <div class="overflow-hidden border border-pink-500 bg-gray-900 rounded-xl">
              <div class="p-6">
                <img src={"/call.png"} height={40} width={40} />
                <div className="mt-6">
                  <a
                    class=" text-base font-medium text-white"
                    href={`tel:${+91 - 7007011378}`}
                  >
                    +91-7007011378
                  </a>
                </div>

                <p class="mt-1 text-base font-medium text-gray-900">
                  {/* +1-446-526-0117 */}
                </p>
              </div>
            </div>

            <div class="bg-gray-900 border border-pink-500 rounded-xl">
              <div class="p-6">
                <img src={"/gmail.png"} height={45} width={45} />
                <p class="mt-6 md:text-xs text-base font-medium text-white">
                  <a
                    href="mailto:divyanshsingh619@gmail.com"
                    class="underline max-w-full break-all"
                  >
                    divyanshsingh619@gmail.com
                  </a>
                </p>
                {/* <!-- <p class="mt-1 text-sm font-medium text-white">
      <a href="mailto:divyanshsingh619@yahoo.com" class="underline">
        divyanshsingh619@yahoo.com
      </a>
    </p> --> */}
              </div>
            </div>

            <div class="overflow-hidden bg-gray-900 border border-pink-500 rounded-xl">
              <div class="p-6">
                <img src={"/location.png"} height={40} width={40} />
                <p class="mt-6  font-medium leading-relaxed text-white">
                  Civil Lines, Sultanpur
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6 overflow-hidden bg-black border border-white rounded-xl">
            <div class="px-6 py-8 sm:py-12">
              <h3 class="text-3xl font-semibold text-center text-white">
                Send me a message
              </h3>
              <form method="POST" class="mt-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label for="" class="text-base font-medium text-white">
                      Your name
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        required
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your full name"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-black border border-blue-600 rounded-md focus:outline-none focus:border-yellow-600 caret-yellow-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-white">
                      Email address
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="email"
                        required
                        name=""
                        id=""
                        placeholder="Enter your email address"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-black border border-green-600 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-white">
                      Phone number
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="tel"
                        required
                        name=""
                        id=""
                        placeholder="Enter your phone number"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-black border border-purple-600 rounded-md focus:outline-none focus:border-pink-600 caret-pink-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-white">
                      Company name
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="text"
                        required
                        name=""
                        id=""
                        placeholder="Enter your company name"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-black border border-orange-600 rounded-md focus:outline-none focus:border-indigo-600 caret-indigo-600"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="" class="text-base font-medium text-white">
                      Message
                    </label>
                    <div class="mt-2.5 relative">
                      <textarea
                        name=""
                        required
                        id=""
                        placeholder="Enter your message"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-black border border-teal-600 rounded-md resize-y focus:outline-none focus:border-lime-600 caret-lime-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border border-transparent rounded-md focus:outline-none hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 focus:bg-gradient-to-r focus:from-blue-700 focus:via-purple-700 focus:to-pink-700"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
