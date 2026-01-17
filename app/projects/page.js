import { PinContainer } from "@/app/_components/ui/CardPin";
import HeadingQuaternary from "@/app/_components/HeadingQuaternary";
import Paragraph from "@/app/_components/Paragraph";

export default function ProjectsPage() {
  return (
    <section className="relative bg-white dark:bg-neutral-950 mx-auto pb-32 pt-32 px-4 md:px-8 lg:pb-32">
      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
        <article className="w-full mt-15 grid gap-x-12 gap-y-8 grid-cols-1 md:gap-x-6 sm:grid-cols-2 sm:gap-y-16 md:gap-y-9 md:grid-cols-3">
          <div className="h-160 w-full flex items-center justify-center ">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-2 sm:basis-1/2 w-[20rem] h-80 flex-start sm:px-8 sm:py-6">
                <HeadingQuaternary>Project 1</HeadingQuaternary>
                <div className="text-base m-0! p-0! font-normal">
                  <Paragraph className="mb-0!">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </Paragraph>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        </article>
      </div>
    </section>
  );
}
