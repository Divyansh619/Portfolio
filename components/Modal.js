import Image from "next/image";
import React from "react";

const Modal = ({ onClose }) => {
   
  return (
    <div
      className="fixed top-0 z-50 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div className="relative bg-black rounded-lg border border-blue-400 shadow-lg">
        <button
          className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="gap-4 p-8">
          <Image src={"/pass.png"} height={50} width={50} className="mx-auto" />

          <div>
            <p className="font-medium text-2xl flex justify-center text-green-400">
              Thank You!
            </p>

            <p className="line-clamp-1 flex mt-4 justify-center text-sm text-white">
              Your message has been sent successfully!
            </p>
            <p className="line-clamp-1 flex justify-center text-sm text-white">
              We will get back to you as soon as possible.
            </p>
            <p className="line-clamp-1 flex justify-center text-sm text-white">
              Thank you for reaching out to us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
