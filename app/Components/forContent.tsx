"use client";

import { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 text-left text-black font-medium"
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-gray-600 text-sm">{answer}</div>}
    </div>
  );
}


export default function ForContent() {
  return (
    <>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect team within hours.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    question: "Is it possible to get money back after getting scammed?",
                    answer:
                      "In some cases, yes. It depends on the payment method used and how quickly action is taken.",
                  },
                  {
                    question: "How can I recover my money from a scammer?",
                    answer:
                      "Contact your bank or payment provider immediately and report the fraud to local authorities.",
                  },
                  {
                    question: "How do you track down someone who scammed you?",
                    answer:
                      "You can report to cybercrime units, share details with law enforcement, or hire a professional investigator.",
                  },
                  {
                    question: "Can scammed funds be recovered?",
                    answer:
                      "There’s no guarantee, but early reporting increases your chances significantly.",
                  },
                ].map((item, idx) => (
                  <AccordionItem key={idx} question={item.question} answer={item.answer} />
                ))}
              </div>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-full mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
