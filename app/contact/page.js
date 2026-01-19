"use client";

import { cn } from "@/app/_lib/utils";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="relative bg-white min-h-dvh dark:bg-neutral-950 mx-auto pb-20 pt-32 px-4 md:px-8 lg:pb-32">
      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
        <HeadingSecondary>Let’s Work Together</HeadingSecondary>
        <Paragraph className="mt-6">
          Have a project in mind or need help bringing an idea to life? I’m open
          to freelance opportunities, collaborations, and front-end development
          work. Feel free to reach out — I’d be happy to discuss how we can
          build something great together.
        </Paragraph>

        <div className="shadow-input mx-auto w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Contact Me
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Have something in mind? Drop a message below and let’s discuss your
            project.
          </p>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" />
            </LabelInputContainer>
            <p className="text-red-500 mb-5">
              <b>Reminder:</b> This form is still under development and may not
              work as expected. Please feel free to reach out via email or
              social links in the meantime.
            </p>
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
