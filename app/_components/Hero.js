"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/app/_data/contents";
import { AuroraBackground } from "@/app/_components/ui/AuroraBackground";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

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
        className="relative flex flex-col gap-4 items-center justify-center px-4 "
      >
        <div className="flex justify-center items-center flex-col max-w-7xl text-center px-0 md:px-8 lg:px-10">
          <Image
            src="https://res.cloudinary.com/kavin-crew/image/upload/e_background_removal/b_rgb:8F76F3/c_fill,w_160,h_160,ar_1:1,f_png/v1767458261/portfolio-images/Screenshot_2025-11-18_025020_rqcfhz.png"
            alt="Image of Kavin"
            className="block aspect-square object-cover h-20 w-20 rounded-full pointer-events-auto"
            width={160}
            height={160}
          />
          <h1 className="text-2xl font-bold mt-8 text-zinc-800 md:text-3xl dark:text-zinc-100">
            Front-end development focused on clarity, speed, and business
            impact.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            I turn designs into polished, interactive web experiences. Built
            with attention to detail, performance, and real-world usability.
            Focused on creating interfaces users actually enjoy using.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <BriefcaseIcon className="h-4 w-4 pb-0.5 mr-1 fill-zinc-500 inline-block" />
            Available for: Full-Time • Part-Time • Freelance
          </p>
          <h3 className="mt-7 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
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
