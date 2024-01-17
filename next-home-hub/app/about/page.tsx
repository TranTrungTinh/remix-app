import { allPages } from "@/.contentlayer/generated";
import { Mdx } from "@/mdx-components";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const socialLinks = [
  {
    icon: TwitterIcon,
    text: "Twitter",
  },
  {
    icon: InstagramIcon,
    text: "Instagram",
  },
  {
    icon: FacebookIcon,
    text: "Facebook",
  },
];

export default function AboutPage() {
  const page = allPages.find((page) => page.slugAsParams === "about");

  if (!page) {
    redirect("/");
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={page.image}
              alt="portrait"
              width={400}
              height={400}
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {page.title}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <Mdx code={page.body.code} />
          </div>
        </div>
        <div className="lg:pl-20">
          <ul className="space-y-4">
            {socialLinks.map((link) => (
              <li key={link.text} className="flex">
                <a
                  className="group flex text-base font-medium text-zinc-800 transition hover:text-purple-500 dark:text-zinc-200 dark:hover:text-purple-500"
                  href="#"
                >
                  <link.icon className="h-6 w-6 flex-none transition group-hover:text-purple-500" />
                  <span className="ml-4">Follow on {link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
