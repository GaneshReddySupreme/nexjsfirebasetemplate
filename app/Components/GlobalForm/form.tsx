"use client";
import { use, useState } from "react";
import { db } from "@/app/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { dmSans } from "../../fonts";
import Loader from "../Loader";

export default function GlobalForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [scamType, setScamType] = useState("");
  const [amountLost, setAmountLost] = useState("");
  const [message, setMessage] = useState("");
  const [showScamOptions, setShowScamOptions] = useState(false);
  const [showAmountOptions, setShowAmountOptions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Basic required field check
  //   if (
  //     !firstName ||
  //     !lastName ||
  //     !phone ||
  //     !email ||
  //     !scamType ||
  //     !amountLost ||
  //     !message
  //   ) {
  //     setError(true);
  //     return;
  //   }
  //   // Check email
  //   if (!/^\S+@\S+\.\S+$/.test(email)) {
  //     setError(true);
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   // Check phone
  //   if (!/^\d{10,}$/.test(phone)) {
  //     setError(true);
  //     setIsSubmitting(false);
  //     return;
  //   }
  //   await addDoc(collection(db, "submissions"), {
  //     firstName,
  //     lastName,
  //     phone,
  //     email,
  //     scamType,
  //     amountLost,
  //     message,
  //   });
  //   // Clear form
  //   setFirstName("");
  //   setLastName("");
  //   setPhone("");
  //   setEmail("");
  //   setScamType("");
  //   setAmountLost("");
  //   setSubmitted(true);
  //   setMessage("");
  //   setIsSubmitting(false);
  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSubmitted(false);

    // Validation checks
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !scamType ||
      !amountLost ||
      !message
    ) {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10,}$/.test(phone)) {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    // If all good, submit to Firestore
    try {
      await addDoc(collection(db, "submissions"), {
        firstName,
        lastName,
        phone,
        email,
        scamType,
        amountLost,
        message,
      });

      // Clear form
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setScamType("");
      setAmountLost("");
      setMessage("");

      setSubmitted(true);
    } catch (err) {
      console.error("Error saving to Firestore:", err);
      setError(true);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-full rounded mb-6">
      {/* Name fields */}
      <div className="flex flex-col md:flex-row gap-4 mb-4  md:mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`${dmSans.className} md:w-1/2 h-[60px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={`${dmSans.className} md:w-1/2 h-[60px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
        />
      </div>

      {/* Phone & email */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-4">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`${dmSans.className} md:w-1/2 h-[60px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
        />
        <input
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${dmSans.className} md:w-1/2 h-[60px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
        />
      </div>

      {/* Custom select dropdowns */}
      <div className="flex flex-col md:flex-row gap-4 mb-4  md:mb-6 relative">
        {/* Scam type dropdown */}
        <div className="relative w-full md:w-1/2">
          <div
            onClick={() => setShowScamOptions(!showScamOptions)}
            className={`${dmSans.className}  h-[60px] pl-3 flex items-center justify-between gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
          >
            {scamType || "Choose a scam type"}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {showScamOptions && (
            <div className="absolute z-10 bg-white border border-[#efefef] w-full mt-1 rounded-xl shadow">
              {[
                "Crypto Scam",
                "Forex Scam",
                "Online Shopping Scam",
                "Investment Scam",
              ].map((type) => (
                <div
                  key={type}
                  onClick={() => {
                    setScamType(type);
                    setShowScamOptions(false);
                  }}
                  className="p-3 hover:bg-[#efefef] cursor-pointer"
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Amount lost dropdown */}
        <div className="relative w-full md:w-1/2">
          <div
            onClick={() => setShowAmountOptions(!showAmountOptions)}
            className={`${dmSans.className}  h-[60px] pl-3 flex items-center justify-between gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
          >
            {amountLost || "How much was lost"}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {showAmountOptions && (
            <div className="absolute z-10 bg-white border border-[#efefef] w-full mt-1 rounded-xl shadow">
              {[
                "Less than $1,000",
                "$1,000 - $10,000",
                "$10,000 - $50,000",
                "Over $50,000",
              ].map((amount) => (
                <div
                  key={amount}
                  onClick={() => {
                    setAmountLost(amount);
                    setShowAmountOptions(false);
                  }}
                  className="p-3 hover:bg-[#efefef] cursor-pointer"
                >
                  {amount}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex gap-4 mb-4 md:mb-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your situation"
          className={`${dmSans.className}  h-[160px] pl-3 flex items-center justify-center gap-2 border border-2 w-full py-3 rounded-xl text-sm border-[#efefef] bg-white hover:bg-[#efefef] cursor-pointer font-bold`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={`${
          dmSans.className
        } gap-2 cursor-pointer inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-black rounded-full hover:bg-yellow-400 ${
          isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      >
        Get a free consultation
        {isSubmitting ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </>
        )}
      </button>
      <p className="relative h-6">
        <span
          className={`absolute left-0 transition-all duration-300 ease-in-out
      ${
        error
          ? "translate-y-0 opacity-100 text-red-500"
          : "translate-y-4 opacity-0"
      }
    `}
        >
          Please fill out all fields correctly.
        </span>
        <span
          className={`absolute left-0 transition-all duration-300 ease-in-out
      ${
        !error && submitted
          ? "translate-y-0 opacity-100 text-green-500"
          : "translate-y-4 opacity-0"
      }
    `}
        >
          Form submitted successfully!
        </span>
      </p>
    </form>
  );
}
