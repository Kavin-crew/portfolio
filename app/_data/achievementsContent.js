import {
  FaAward, // Classic award/badge icon
  FaTrophy, // Trophy symbol
  FaMedal, // Medal icon
  FaCertificate, // Certificate / accomplishment document
  FaStar, // Star (generic recognition)
  FaStarHalfAlt, // Half star (optional rating)
  FaStarOfLife, // Special star/importance
} from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

export const cardsAwards = [
  {
    title: "Top Performer",
    description: "2024 - 2025",
    icon: <FaAward className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/achievements-yotpo_y23f20.jpg",
    content:
      "As I wrap up my time at Yotpo, I wanted to take a moment to reflect on a chapter that truly shaped me—not just as a developer, but as a professional. I recently received a formal certification summarizing my performance rankings throughout my entire tenure, and I’m incredibly proud and humbled to share these results",
  },
  {
    title: "Top Performer",
    description: "November 2022",
    icon: <FaTrophy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Nov_-_2022_bllx54.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate in alignment with KPI requirements.",
  },
  {
    title: "Top Performer",
    description: "October 2022",
    icon: <FaTrophy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Oct_-_2022_cert_hxkx1b.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate in alignment with KPI requirements.",
  },
  {
    title: "WordPress Ace Developer",
    description: "February 2023",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/Feb_2023_acpv33.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },

  {
    title: "WordPress Ace Developer",
    description: "October 2022",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064350/portfolio-images/Oct_2022_mxtur9.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },
  {
    title: "WordPress Ace Developer",
    description: "September 2022",
    icon: <FaMedal className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/Sept_2022_cd7uq8.jpg",
    content:
      "This award was presented to me for delivering the highest site conversion rate.",
  },
];

export const trainingCertifications = [
  {
    title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    description: "February 2024",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/React-2024_eiquva.jpg",
    content:
      "A complete, project-driven React development course that took me from beginner to advanced proficiency. I mastered modern React workflows, Next.js (App Router & Server Components), Redux state management, performance patterns, and practical app features — all through building multiple real-world applications.",
  },
  {
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    description: "September 2023",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/JS-2023_ai0mih.jpg",
    content:
      "A complete, project-based JavaScript course that built my skills from beginner to expert level — covering modern syntax, advanced patterns, asynchronous programming, debugging, and real-world application development. This foundation equips me to build dynamic user interfaces and progress into advanced front-end technologies with confidence.",
  },
  {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    description: "September 2023",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/SCSS-2023_kcevdp.jpg",
    content:
      "An advanced CSS certification focused on modern styling techniques — Flexbox, CSS Grid, animations, and SCSS — with real-world project applications. This course deepened my understanding of responsive layout systems and scalable CSS architecture, empowering me to build polished, production-ready user interfaces.",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    description: "November 2021",
    icon: <SiUdemy className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064349/portfolio-images/HTML_CSS_-_2021_u6buhq.jpg",
    content:
      "A project-based course that taught me how to build responsive, real-world websites using semantic HTML and modern CSS layout techniques like Flexbox and Grid. This strengthened my ability to create accessible, adaptive user interfaces and solidified core front-end fundamentals.",
  },
  {
    title: "2-Day Web Development Training",
    description: "November 2021",
    icon: <FaStarOfLife className="h-4 w-4 text-violet-500" />,
    src: "https://res.cloudinary.com/kavin-crew/image/upload/v1768064351/portfolio-images/Nov-2021_cert_cstyh4.jpg",
    content:
      "Completed a 2-day intensive training focused on converting website designs into fully responsive, industry-standard websites using WordPress Divi. Gained hands-on experience translating UI layouts into optimized, mobile-friendly pages with real-world build practices.",
  },
];
