import Link from "next/link";
import { navItems } from "@/app/_data/contents";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400">
          {navItems.map((item, idx) => (
            <Link
              key={`footer-link-${idx}`}
              href={item.link}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex justify-center border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} Kavin A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
