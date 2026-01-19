import { cn } from "@/app/_lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "@/app/_components/Paragraph";
import HeadingQuaternary from "@/app/_components/HeadingQuaternary";
import { FaCodeFork } from "react-icons/fa6";

import { useState } from "react";
import Link from "next/link";

export function HoverEffect({ items, className }) {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title + idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-violet-400 dark:bg-violet-300 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="grid grid-rows-[1fr_40px_44px] bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent relative z-20">
            <Link href={item?.link} target="_blank">
              <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-hidden">
                {item?.logo}
              </span>
              <HeadingQuaternary>{item.title}</HeadingQuaternary>
              <Paragraph className="mb-4!">{item.description}</Paragraph>
            </Link>
            {item?.icons && (
              <div className="flex gap-2 mt-4 items-center">
                {item.icons.map((iconItem, iconIdx) => (
                  <IconTooltip
                    key={iconItem.name || iconIdx}
                    name={iconItem.name}
                  >
                    <span>{iconItem.icon}</span>
                  </IconTooltip>
                ))}
              </div>
            )}
            <Link
              href={item.githublink}
              className="flex items-center gap-2 mt-5 pl-1 dark:text-zinc-400 dark:hover:text-zinc-300"
              target="_blank"
            >
              <FaCodeFork className="h-4 w-4 fill-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-400 dark:group-hover:fill-violet-500" />
              View on Github
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function IconTooltip({ children, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-700 rounded-md whitespace-nowrap pointer-events-none z-50 shadow-lg"
          >
            {name}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
