import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";

export const projectsContent = [
  {
    title: "Clean Environment Generator ",
    link: "https://clean-environment-generator.vercel.app/",
    githublink: "https://github.com/Kavin-crew/clean-environment-generator",
    description:
      "Generates live previews of widgets and provides a shareable link",
    logo: <Image src="/yotpo-icon.png" alt="Zustand" width={26} height={26} />,
    icons: [
      {
        name: "Vercel",
        icon: (
          <IoLogoVercel className="h-6 w-6 fill-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-300 dark:group-hover:fill-violet-200" />
        ),
      },
      {
        name: "Next.js",
        icon: (
          <RiNextjsFill className="h-6 w-6 fill-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-300 dark:group-hover:fill-violet-200" />
        ),
      },
      {
        name: "Zustand",
        icon: <Image src="/zustand.svg" alt="Zustand" width={22} height={22} />,
      },
    ],
  },
];
