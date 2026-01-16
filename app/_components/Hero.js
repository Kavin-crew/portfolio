"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/app/_data/heroContent";
import { AuroraBackground } from "@/app/_components/ui/AuroraBackground";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import HeadingPrimary from "@/app/_components/HeadingPrimary";
import HeadingQuaternary from "@/app/_components/HeadingTertiary";
import Paragraph from "@/app/_components/Paragraph";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-32"
      >
        <div className="flex justify-center items-center flex-col max-w-7xl text-center px-0 md:px-8 lg:px-10">
          <Image
            src="https://res.cloudinary.com/kavin-crew/image/upload/v1768151509/portfolio-images/ChatGPT_Image_Jan_12_2026_12_30_15_AM_lfat2d.png"
            alt="Image of Kavin"
            className="block aspect-square object-cover h-20 w-20 rounded-full pointer-events-auto"
            width={160}
            height={160}
          />
          <HeadingPrimary className="mt-8">
            Front-end development focused on clarity, speed, and business
            impact.
          </HeadingPrimary>
          <Paragraph className="mt-6">
            I turn designs into polished, interactive web experiences. Built
            with attention to detail, performance, and real-world usability.
            Focused on creating interfaces users actually enjoy using.
          </Paragraph>
          <Paragraph>
            <BriefcaseIcon className="h-4 w-4 mr-1 -translate-y-0.5 inline-block fill-violet-600 dark:fill-violet-500" />
            Available for: Full-Time • Part-Time • Freelance
          </Paragraph>
          <HeadingQuaternary>Let&apos;s connect</HeadingQuaternary>
          <div className="mt-3 flex gap-6" aria-label="Social media">
            {socialLinks.map((item, index) => (
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
      </motion.section>
    </AuroraBackground>
  );
}
