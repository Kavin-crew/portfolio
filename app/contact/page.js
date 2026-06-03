"use client";

import { cn } from "@/app/_lib/utils";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { useActionState, useEffect } from "react";
import { sendEmail } from "@/app/api/actions/route";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Message sent!");
    } else {
      toast.error(state.message || "Something went wrong.");
    }
  }, [state]);

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

        <div className="shadow-input mx-auto w-full rounded-xl bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Contact Me
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Have something in mind? Drop a message below and let’s discuss your
            project.
          </p>

          <form className="my-8" action={formAction}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isPending}
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                name="message"
                required
                disabled={isPending}
                type="textarea"
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send Message"}
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
