import Link from "next/link";
import { navItems } from "@/app/_data/contents";

export default function Footer() {
  return (
    <footer>
      <ul>
        {navItems.map((item, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
