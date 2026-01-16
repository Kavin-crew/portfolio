import {
  cardsAwards,
  trainingCertifications,
} from "@/app/_data/achievementsContent";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import Card from "@/app/_components/Card";

export default function Milestone() {
  return (
    <section
      id="achievements"
      className="relative bg-white dark:bg-neutral-950 mx-auto pb-20 pt-32 px-4 md:px-8 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
        <HeadingSecondary>From Learning to Recognition</HeadingSecondary>
        <Paragraph className="mt-6">
          Built through self-learning, persistence, and hard work, these
          recognitions and awards reflect the progress I’ve made as a Front-End
          Web Developer — from sharpening my skills to delivering real-world
          impact.
        </Paragraph>
        <Card cardsContent={cardsAwards} />

        <HeadingSecondary className="mt-24">
          From Curiosity to Craft
        </HeadingSecondary>
        <Paragraph className="mt-6">
          Driven by curiosity and continuous improvement, this collection
          highlights my self-learning journey and professional certifications as
          a Front-End Web Developer. Each milestone represents the skills I’ve
          intentionally built — from mastering modern frameworks to refining
          performance, accessibility, and real-world problem solving.
        </Paragraph>
        <Card cardsContent={trainingCertifications} />
      </div>
    </section>
  );
}
