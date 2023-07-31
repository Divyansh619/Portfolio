import React from "react";

const Contacts = () => {
  return (
    <section class="py-10 bg-black m-8 rounded-2xl ">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-start text-start relative">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Contact me
          </h2>
          <div class="  w-1/4 h-0.5 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div class="overflow-hidden border border-white bg-gray-900 rounded-xl">
              <div class="p-6">
                <svg
                  class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p class="mt-6 text-lg font-medium text-white">
                  +91-7007011378
                </p>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {/* +1-446-526-0117 */}
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-gray-900 border border-white rounded-xl">
              <div className="p-3">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-sm font-medium text-white">
                  <a
                    href="mailto:divyanshsingh619@gmail.com"
                    className="underline"
                  >
                    divyanshsingh619@gmail.com
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  <a
                    href="mailto:divyanshsingh619@yahoo.com"
                    className="underline"
                  >
                    divyanshsingh619@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-gray-900 border border-white rounded-xl">
              <div class="p-6">
                <svg
                  class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="mt-6  font-medium leading-relaxed text-white">
                  Civil Lines,Sultanpur
                </p>
              </div>
            </div>
          </div>

          <div class="mt-6 overflow-hidden bg-black border border-white rounded-xl">
            <div class="px-6 py-12 sm:p-12">
              <h3 class="text-3xl font-semibold text-center text-white">
                Send me a message
              </h3>
              <form method="POST" class="mt-14">
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
