"use client";

import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import { projectsContent } from "@/app/_data/projectsContent";
import { HoverEffect } from "@/app/_components/ui/card-hover-effect";

export default function ProjectsPage() {
  return (
    <section className="relative bg-white dark:bg-neutral-950 mx-auto pb-32 pt-32 px-4 md:px-8 lg:pb-32">
      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
        <HeadingSecondary>Learning Through Building</HeadingSecondary>
        <Paragraph className="mt-6">
          These projects began as hands-on exercises from my courses and
          self-learning journey, designed to turn concepts into working
          solutions. Some were built to automate repetitive tasks, while others
          simplify everyday workflows. Each project represents steady progress —
          and this collection will continue to grow as I keep learning,
          building, and refining my skills.
        </Paragraph>

        <HoverEffect items={projectsContent} />
      </div>
    </section>
  );
}
