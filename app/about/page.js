import Image from "next/image";
import { aboutContent } from "@/app/_data/aboutContent";
import { socialLinks } from "@/app/_data/heroContent";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative min-h-dvh w-full bg-white dark:bg-neutral-950 pb-20 pt-32 px-4 md:px-10 lg:pb-32">
      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
        <div>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1fr_25rem] lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src="https://res.cloudinary.com/kavin-crew/image/upload/v1768151509/portfolio-images/ChatGPT_Image_Jan_12_2026_12_30_15_AM_lfat2d.png"
                  alt="my picture"
                  width={150}
                  height={150}
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              {aboutContent.heading}
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                {aboutContent.description}
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                {socialLinks.map((link) => (
                  <li key={link.socialLinks} className="mt-4 flex">
                    <Link
                      className="group flex text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-violet-400 dark:hover:text-violet-400"
                      href={link.link}
                    >
                      {link.icon}
                      <span className="ml-4 leading-6">
                        Follow on {link.socialLinks}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                <Link
                  className="group flex text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-violet-400 dark:hover:text-violet-400"
                  href="mailto:abreganakavin@gmail.com"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-500 dark:group-hover:fill-violet-600 duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                    ></path>
                  </svg>
                  <span className="ml-4 leading-6">
                    abreganakavin@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
