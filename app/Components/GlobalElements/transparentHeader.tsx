"use client";
import { useState } from "react";
import Modal from "./Modal";
import FirestoreForm from "../FirestoreForm";
export default function TransparentHeader() {
  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg> */}

              <svg
                className={`${showMobileMenu ? "hidden" : "block"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                className={`${showMobileMenu ? "block" : "hidden"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div
              className={`lg:hidden fixed top-16 left-0 w-full bg-[#FCF8F1] transition-all duration-300 ease-in-out ${
                showMobileMenu
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col items-center space-y-8 p-6">
                <a
                  href="#"
                  className="text-base text-black hover:text-opacity-80"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-base text-black hover:text-opacity-80"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="text-base text-black hover:text-opacity-80"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-base text-black hover:text-opacity-80"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setShowModal(true);
                    setShowMobileMenu(false);
                  }}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black rounded-full hover:bg-yellow-300 hover:text-black"
                >
                  Join Now
                </a>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <a
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
              onClick={() => setShowModal(true)}
            >
              {" "}
              Join Now{" "}
            </a>
          </div>
        </div>
      </header>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <FirestoreForm onSuccess={() => setShowModal(false)} />
      </Modal>
    </>
  );
}
