"use client";
import { ReactNode } from "react";
import GlobalForm from "../GlobalForm/form";

export default function Modal({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 md:overflow-hidden overflow-y-auto 
    ${show ? "bg-black bg-opacity-50 visible" : "invisible"}`}
    >
      <div className="bg-white md:pt-8 md:pr-6 md:pb-0 md:pl-6 pt-12 rounded shadow max-w-2xl w-full relative rounded-3xl">
        <button
          onClick={onClose}
          className="absolute md:top-4 md:right-4 top-6 right-6 text-gray-600 text-xl cursor-pointer hover:text-gray-800 transition"
        >
          &times;
        </button>
        <GlobalForm />
      </div>
    </div>
  );
}
