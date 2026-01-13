import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

// Navigation Items
export const navItems = [
  {
    name: "About",
    link: "/about",
    icon: <HomeIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Timeline",
    link: "/timeline",
    icon: <UserIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Achievements",
    link: "/achievements",
    icon: <TrophyIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <PhoneIcon className="h-4 w-4 via-violet-400 dark:text-white" />,
  },
];
