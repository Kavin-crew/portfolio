"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/app/_components/ui/AuroraBackground";
import Image from "next/image";
import { heroContent } from "@/app/_data/contents";
import Link from "next/link";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex justify-center items-center flex-col max-w-7xl text-center px-4 md:px-8 lg:px-10">
          <Image
            src="https://res.cloudinary.com/kavin-crew/image/upload/e_background_removal/b_rgb:8F76F3/c_fill,w_160,h_160,ar_1:1,f_png/v1767458261/portfolio-images/Screenshot_2025-11-18_025020_rqcfhz.png"
            alt="Image of Kavin"
            className="block aspect-square object-cover h-20 w-20 rounded-full pointer-events-auto"
            width={160}
            height={160}
          />
          <h1 className="text-4xl font-bold mt-8 tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m a passionate Front-End Web Developer with experience
            building responsive, user-friendly websites using HTML, CSS,
            JavaScript (React, Nextjs), Wordpress (Divi, Elementor), Git. I
            specialize in creating clean, efficient UIs and solving problems
            through code. I&apos;m currently open to freelance, part-time, and
            work-from-home (WFH) opportunities where I can collaborate with
            teams or clients remotely. Whether it’s improving UI/UX, fixing
            bugs, or building full websites from scratch—I’m eager to contribute
            and grow.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            ✅ Available for: Full-Time | Freelance | Part-Time
          </p>
          <h3 class="mt-7 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Let&apos;s connect
          </h3>
          <div className="mt-3 flex gap-6">
            {heroContent.map((item, index) => (
              <Link
                key={`hero-social-link-${index}`}
                href={item.link}
                className="group -m-1 p-1"
                aria-label={item.socialLinks}
                target="_blank"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
