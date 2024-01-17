"use client";

import { ThemeToggleFallback } from "@/components/ThemeToggle";
import { HomeIcon, PencilIcon, CogIcon, InfoIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
  loading: () => <ThemeToggleFallback />,
});

const links = [
  {
    icon: PencilIcon,
    href: "/",
    text: "Writing",
  },
  {
    icon: CogIcon,
    href: "/projects",
    text: "Projects",
  },
  {
    icon: InfoIcon,
    href: "/about",
    text: "About",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full relative top-8">
      <div className="flex items-center mx-auto justify-between md:max-w-2xl max-w-lg sm:px-8 px-2">
        <Link
          className="rounded-full shadow border dark:border-gray-700 p-2"
          href="/"
        >
          <HomeIcon />
        </Link>
        <ul className="flex rounded-full px-3 text-sm dark:text-white text-black font-medium border dark:border-gray-700 shadow">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.href === pathname ? "text-purple-600" : ""
              } relative flex items-center space-x-1 px-3 py-2 transition hover:text-purple-500 dark:hover:text-purple-400`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.text}</span>
            </Link>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
