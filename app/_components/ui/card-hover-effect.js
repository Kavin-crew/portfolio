import { cn } from "@/app/_lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Paragraph from "@/app/_components/Paragraph";
import HeadingQuaternary from "@/app/_components/HeadingQuaternary";

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
        <Link
          href={item?.link}
          key={item?.link}
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
          <Card>
            <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {item?.logo}
            </span>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        " bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export function CardTitle({ className, children }) {
  return <HeadingQuaternary>{children}</HeadingQuaternary>;
}
export const CardDescription = ({ className, children }) => {
  return <Paragraph> {children}</Paragraph>;
};
