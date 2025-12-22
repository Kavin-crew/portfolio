"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/_lib/utils";

export const ThreeDMarquee = ({ items, className }) => {
  // Split the items array into 4 equal parts
  const chunkSize = Math.ceil(items.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });
  return (
    <div
      className={cn(
        "mx-auto block h-150 overflow-hidden rounded-2xl max-sm:h-100 border border-zinc-100",
        className
      )}
    >
      <div className="relative flex size-full items-center justify-center">
        <div className="w-full h-auto shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="absolute left-1/2 -translate-x-1/2 w-600 lg:w-350 md:w-450 grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((item, imageIndex) => {
                  const ImageWrapper = item.url ? "a" : "div";

                  return (
                    <div className="relative" key={imageIndex + item.image}>
                      <GridLineHorizontal className="-top-4" offset="20px" />

                      <ImageWrapper
                        href={item.url}
                        target={item.url ? "_blank" : undefined}
                        rel={item.url ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        <motion.img
                          whileHover={{ y: -10 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          src={item.image}
                          alt={`Work preview ${imageIndex + 1}`}
                          className="aspect-8/3 w-full h-auto rounded-lg object-fit object-top ring ring-gray-950/5 hover:shadow-2xl cursor-pointer"
                        />
                      </ImageWrapper>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",

        //-100px if you want to keep the line inside
        "--offset": offset || "200px",

        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-(--height) w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-size-[var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
        "mask-exclude",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",

        //-100px if you want to keep the line inside
        "--offset": offset || "150px",

        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-(--width)",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-size-[var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
        "mask-exclude",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
