"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import HeadingQuaternary from "@/app/_components/HeadingQuaternary";
import HeadingTertiary from "@/app/_components/HeadingTertiary";
import Paragraph from "@/app/_components/Paragraph";

export default function Card({ cardsContent }) {
  const [activeCard, setActiveCard] = useState(null);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => setActiveCard(null));

  return (
    <>
      <ul className="w-full mt-15 grid  gap-x-12 gap-y-8 grid-cols-1 md:gap-x-6 sm:grid-cols-2 sm:gap-y-16 md:gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {cardsContent.map((card, index) => (
          <li
            className="group relative flex flex-col px-2 py-2 items-center sm:px-8 sm:py-6 sm:items-start rounded-lg cursor-pointer min-w-full hover:bg-zinc-50 hover:dark:bg-zinc-800/50 transition-colors duration-300 ease-linear"
            key={`card-${card.title}-${index}`}
            onClick={() => setActiveCard(card)}
          >
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 will-change-auto">
              {card.icon}
            </span>
            <div>
              <HeadingQuaternary className="mt-6 relative z-10 text-center sm:text-left">
                {card.title}
              </HeadingQuaternary>
              <Paragraph className="relative z-10 text-center sm:text-left">
                {card.description}
              </Paragraph>
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
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-7 h-7 cursor-pointer bg-violet-600 dark:bg-gray-700 hover:bg-violet-700 dark:hover:bg-gray-600 rounded-full transition-colors duration-300 ease-linear"
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
                <HeadingTertiary className="mb-3">
                  {activeCard.title}
                </HeadingTertiary>
                <Paragraph>{activeCard.content}</Paragraph>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
