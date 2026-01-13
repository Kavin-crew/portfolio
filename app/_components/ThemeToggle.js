"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Switch to dark theme"
      className="group h-7.5 w-7.5 rounded-full bg-white/90 flex justify-center items-center cursor-pointer shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <SunIcon
        className="h-4 w-4 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden 
        [@media(prefers-color-scheme:dark)]:fill-violet-50 
        [@media(prefers-color-scheme:dark)]:stroke-violet-500 
        [@media(prefers-color-scheme:dark)]:group-hover:fill-violet-50 
        [@media(prefers-color-scheme:dark)]:group-hover:stroke-violet-600"
      />

      <MoonIcon
        className="hidden h-4 w-4 fill-zinc-700 stroke-zinc-500 transition dark:block group-hover:fill-zinc-600 group-hover:stroke-zinc-700 
        [@media(prefers-color-scheme:light)]:fill-violet-500 
        [@media(prefers-color-scheme:light)]:stroke-violet-300 
        [@media(prefers-color-scheme:light)]:group-hover:fill-violet-600 
        [@media(prefers-color-scheme:light)]:group-hover:stroke-violet-400"
      />
    </button>
  );
}
