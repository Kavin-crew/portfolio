"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";

export default function Card({ cardsContent }) {
  const [activeCard, setActiveCard] = useState(null);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setActiveCard(null));

  return (
    <>
      <ul className="w-full mt-15 grid  gap-x-12 gap-y-16 grid-cols-1 md:gap-x-6 sm:grid-cols-2 md:gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {cardsContent.map((card, index) => (
          <li
            className="group relative flex flex-col px-8 py-6 items-center sm:items-start rounded-lg cursor-pointer min-w-full hover:bg-zinc-50 hover:dark:bg-zinc-800/50 transition-colors duration-300 ease-linear"
            key={`card-${card.title}-${index}`}
            onClick={() => setActiveCard(card)}
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 will-change-auto">
              {card.icon}
            </span>
            <div>
              <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 relative z-10 text-center sm:text-left">
                {card.title}
              </h3>
              <p className="relative z-10 text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
                {card.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Overlay */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm z-50"
            onClick={() => setActiveCard(null)}
          />
        )}
      </AnimatePresence>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl mx-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-7 h-7 cursor-pointer  bg-violet-500 dark:bg-gray-700 hover:bg-violet-400 dark:hover:bg-gray-600 rounded-full transition-colors duration-300 ease-linear"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white dark:text-gray-700"
                >
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full h-64 md:min-h-[calc(100dvh-400px)]">
                <Image
                  src={activeCard.src}
                  alt={activeCard.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                  {activeCard.title}
                </h2>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {activeCard.content}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
