import HeadingPrimary from "@/app/_components/HeadingPrimary";
import HeadingSecondary from "@/app/_components/HeadingSecondary";
import Paragraph from "@/app/_components/Paragraph";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative max-w-7xl mx-auto pb-20 pt-20 px-4 md:px-8 lg:pb-32 lg:pt-32">
      <div>
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
              <HeadingPrimary>
                I’m Kavin. I live in Cebu City, where I build the future.
              </HeadingPrimary>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <Paragraph>
                  A front-end developer based in Philippines. I build
                  responsive, accessible web interfaces that feel clear,
                  intuitive, and human. I enjoy the process of turning ideas
                  into something people can actually use — thoughtfully,
                  deliberately, and with care.
                </Paragraph>
                <Paragraph>
                  My interest in web development started with curiosity. I began
                  by experimenting with HTML and CSS, breaking layouts, fixing
                  them again, and slowly understanding how the web really works.
                  As I learned JavaScript, static pages became interactive, and
                  I discovered how powerful a well-built interface can be when
                  design and code work together.
                </Paragraph>
                <Paragraph>
                  Along the way, I developed a strong appreciation for clean
                  code, semantic HTML, and user-first thinking. I care about
                  details — how layouts respond on different screens, how
                  interactions feel, and how accessible an experience is for
                  everyone. Every project teaches me something new, and I enjoy
                  refining my approach with each one.
                </Paragraph>
                <Paragraph>
                  Today, I focus on growing as a front-end developer by building
                  real projects, learning modern tools like React, and following
                  industry best practices. I’m driven by continuous improvement
                  and the goal of creating web experiences that are simple,
                  reliable, and meaningful.
                </Paragraph>
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <li className="mt-4 flex">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                    href="#"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                      ></path>
                    </svg>
                    <span className="ml-4 leading-6">Follow on GitHub</span>
                  </a>
                </li>
                <li className="mt-4 flex">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                    href="#"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                    >
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                    <span className="ml-4 leading-6">Follow on LinkedIn</span>
                  </a>
                </li>
                <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                    href="mailto:spencer@planetaria.tech"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                      ></path>
                    </svg>
                    <span className="ml-4 leading-6">
                      abreganakavin@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
