import { ExpandableCardDemo } from "@/app/_components/Modal";
import Card from "@/app/_components/Card";

export default function Milestone() {
  return (
    <section
      id="milestone"
      className="relative bg-white max-w-7xl mx-auto pb-20 pt-20 px-4 md:px-8 lg:pb-32 lg:pt-32"
    >
      <h2 className="text-2xl font-bold text-zinc-800 md:text-3xl dark:text-zinc-100">
        From Learning to Recognition
      </h2>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 md:text-base max-w-4xl mb-8">
        Built through self-learning, persistence, and hard work, these
        recognitions and awards reflect the progress I’ve made as a Front-End
        Web Developer — from sharpening my skills to delivering real-world
        impact.
      </p>
      <Card />
    </section>
  );
}
