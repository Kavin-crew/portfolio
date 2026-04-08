import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  TrophyIcon,
  CodeBracketIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

const iconClass =
  "h-4 w-4 fill-violet-600 transition hover:fill-violet-700 dark:fill-violet-400 dark:hover:fill-violet-500";

export const ICONS = {
  userIcon: <UserIcon className={iconClass} />,
  arrowUp: <ArrowTrendingUpIcon className={iconClass} />,
  trophyIcon: <TrophyIcon className={iconClass} />,
  codeBracketIcon: <CodeBracketIcon className={iconClass} />,
  phoneIcon: <PhoneIcon className={iconClass} />,
};

// Navigation Items
export const navItems = [
  {
    name: "About",
    link: "/about",
    icon: ICONS.userIcon,
  },
  {
    name: "Timeline",
    link: "/timeline",
    icon: ICONS.arrowUp,
  },
  {
    name: "Achievements",
    link: "/achievements",
    icon: ICONS.trophyIcon,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: ICONS.codeBracketIcon,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: ICONS.phoneIcon,
  },
];
