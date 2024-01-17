"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border dark:border-gray-700 shadow rounded-full w-10 h-10 flex items-center justify-center"
    >
      {theme !== "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonStarIcon className="w-5 h-5" />
      )}
    </button>
  );
}

export function ThemeToggleFallback() {
  return (
    <span className="border dark:border-gray-700 shadow rounded-full w-10 h-10 flex items-center justify-center">
      <SunIcon className="w-5 h-5" />
    </span>
  );
}
