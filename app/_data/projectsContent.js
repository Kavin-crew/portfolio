import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiLeaflet } from "react-icons/si";
import { FaReact, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Image from "next/image";

const iconClass =
  "h-6 w-6 fill-violet-600 transition hover:fill-violet-700 dark:fill-violet-400 dark:hover:fill-violet-500";

export const ICONS = {
  vercel: <IoLogoVercel className={iconClass} />,
  nextjs: <RiNextjsFill className={iconClass} />,
  tailwind: <RiTailwindCssFill className={iconClass} />,
  mongodb: <SiMongodb className={iconClass} />,
  react: <FaReact className={iconClass} />,
  sass: <FaSass className={iconClass} />,
  javascript: <IoLogoJavascript className={iconClass} />,
  html: <FaHtml5 className={iconClass} />,
  leaflet: <SiLeaflet className={iconClass} />,
  css: <FaCss3 className={`${iconClass} h-5! w-5!`} />,
  zustand: (
    <Image
      src="/zustand.svg"
      alt="Zustand"
      width={22}
      height={22}
      className="icon-filter"
    />
  ),
};

export const projectsContent = [
  {
    title: "Clean Environment Generator ",
    link: "https://clean-environment-generator.vercel.app/",
    githublink: "https://github.com/Kavin-crew/clean-environment-generator",
    description:
      "Generates live previews of widgets and provides a shareable link",
    logo: <Image src="/yotpo-icon.png" alt="Yotpo" width={26} height={26} />,
    icons: [
      {
        name: "Vercel",
        icon: ICONS.vercel,
      },
      {
        name: "Next.js",
        icon: ICONS.nextjs,
      },
      {
        name: "Zustand",
        icon: ICONS.zustand,
      },
      {
        name: "Tailwind",
        icon: ICONS.tailwind,
      },
    ],
  },
  {
    title: "The Wild Oasis",
    link: "https://the-wild-oasis-nextjs-gamma.vercel.app/",
    githublink: "https://github.com/Kavin-crew/the-wild-oasis-nextjs",
    description:
      "Modern hotel management app featuring authentication and dynamic data handling.",
    logo: (
      <Image
        src="/wild-oasis-logo.webp"
        alt="The Wild Oasis"
        width={26}
        height={26}
      />
    ),
    icons: [
      {
        name: "Vercel",
        icon: ICONS.vercel,
      },
      {
        name: "Next.js",
        icon: ICONS.nextjs,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
      {
        name: "Tailwind",
        icon: ICONS.tailwind,
      },
    ],
  },
  {
    title: "G-UP Report",
    link: "https://www.g-up.report/",
    githublink: "https://github.com/Kavin-crew/g-up",
    description: "Research project for Gcash user monitoring",
    logo: (
      <Image
        src="/g-up-logo.png"
        alt="G-UP"
        width={26}
        height={26}
        className="w-auto h-auto"
      />
    ),
    icons: [
      {
        name: "Vercel",
        icon: ICONS.vercel,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
    ],
  },
  {
    title: "Forkify",
    link: "https://kfa-forkify.netlify.app/",
    githublink: "https://github.com/Kavin-crew/kfa-forktify",
    description:
      "JavaScript-based recipe application that lets users search, view, and bookmark recipes using data from a public API.",
    logo: (
      <Image
        src="/forkify.png"
        alt="Forkify"
        className="rounded-full overflow-hidden"
        width={26}
        height={26}
      />
    ),
    icons: [
      {
        name: "SCSS",
        icon: ICONS.sass,
      },
      {
        name: "JavaScript",
        icon: ICONS.javascript,
      },
      {
        name: "HTML",
        icon: ICONS.html,
      },
    ],
  },
  {
    title: "Today I Learned",
    link: "https://kfa-today-i-learned.netlify.app/",
    githublink: "https://github.com/Kavin-crew/crash-course-fullstack-react",
    description:
      "A growing collection of bite-sized lessons and notes captured while learning modern web development.",
    logo: (
      <Image
        src="/today-i-learned.png"
        alt="Today I Learned Logo"
        width={26}
        height={26}
      />
    ),
    icons: [
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
      },
    ],
  },
  {
    title: "Mapty",
    link: "https://kavin-crew.github.io/kfa-mapty/",
    githublink: "https://github.com/Kavin-crew/kfa-mapty",
    description:
      "App that tracks workouts on an interactive map using geolocation and local storage.",
    logo: (
      <Image
        src="/mapty.png"
        alt="Mapty Logo"
        width={26}
        height={26}
        className="w-auto h-auto aspect-square object-contain bg-white rounded-full py-1"
      />
    ),
    icons: [
      {
        name: "Leaflet",
        icon: ICONS.leaflet,
      },
      {
        name: "JavaScript",
        icon: ICONS.javascript,
      },
    ],
  },
  {
    title: "Bankist",
    link: "https://kavin-crew.github.io/bankist/",
    githublink: "https://github.com/Kavin-crew/bankist",
    description:
      "Minimalist banking app that demonstrates core JavaScript concepts like arrays, dates, timers, and internationalization.",
    logo: (
      <Image
        src="/bankist.png"
        alt="Bankist Logo"
        width={26}
        height={26}
        className="aspect-square object-contain"
      />
    ),
    icons: [
      {
        name: "HTML",
        icon: ICONS.html,
      },
      {
        name: "CSS",
        icon: ICONS.css,
      },
      {
        name: "JavaScript",
        icon: ICONS.javascript,
      },
    ],
  },
  {
    title: "Bankist - Landing Page",
    link: "https://kavin-crew.github.io/kfa-bankist/",
    githublink: "https://github.com/Kavin-crew/kfa-bankist",
    description:
      "A landing page implementing modern JavaScript features and smooth, interactive user experiences.",
    logo: (
      <Image
        src="/bankist.png"
        alt="Bankist Logo"
        width={26}
        height={26}
        className="aspect-square object-contain"
      />
    ),
    icons: [
      {
        name: "HTML",
        icon: ICONS.html,
      },
      {
        name: "CSS",
        icon: ICONS.css,
      },
      {
        name: "JavaScript",
        icon: ICONS.javascript,
      },
    ],
  },
  {
    title: "Omnifood",
    link: "https://kavin-crew.github.io/omnifood-by-jonas/",
    githublink: "https://github.com/Kavin-crew/omnifood-by-jonas",
    description:
      "Responsive website promoting healthy meal plans and subscriptions.",
    logo: (
      <Image
        src="/omnifood-logo.png"
        alt="Omnifood Logo"
        width={26}
        height={26}
        className="aspect-square object-contain"
      />
    ),
    icons: [
      {
        name: "HTML",
        icon: ICONS.html,
      },
      {
        name: "CSS",
        icon: ICONS.css,
      },
      {
        name: "JavaScript",
        icon: ICONS.javascript,
      },
    ],
  },
];
