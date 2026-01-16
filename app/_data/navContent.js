import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  TrophyIcon,
  CodeBracketIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

// Navigation Items
export const navItems = [
  {
    name: "About",
    link: "/about",
    icon: (
      <UserIcon className="h-4 w-4 text-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-200 dark:group-hover:fill-violet-100 duration-300" />
    ),
  },
  {
    name: "Timeline",
    link: "/timeline",
    icon: (
      <ArrowTrendingUpIcon className="h-4 w-4 text-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-200 dark:group-hover:fill-violet-100 duration-300" />
    ),
  },
  {
    name: "Projects",
    link: "/projects",
    icon: (
      <CodeBracketIcon className="h-4 w-4 text-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-200 dark:group-hover:fill-violet-100 duration-300" />
    ),
  },
  {
    name: "Achievements",
    link: "/achievements",
    icon: (
      <TrophyIcon className="h-4 w-4 text-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-200 dark:group-hover:fill-violet-100 duration-300" />
    ),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: (
      <PhoneIcon className="h-4 w-4 text-violet-600 transition group-hover:fill-violet-700 dark:fill-violet-200 dark:group-hover:fill-violet-100 duration-300" />
    ),
  },
];
