import { Post } from "@/.contentlayer/generated";
import formatDate from "@/lib/formatDate";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-purple-100/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-purple-800/20 sm:-inset-x-6 sm:rounded-2xl" />
          <Link href={post.slug}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{post.title}</span>
          </Link>
        </h2>
        <span className="relative z-10 order-first mb-3 flex items-center text-xs text-zinc-900 uppercase dark:text-zinc-500 font-semibold">
          <CalendarIcon className="w-3 h-3 mr-1" />
          <span>{formatDate(post.date)}</span>
        </span>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-purple-500"
        >
          <span>Read article</span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </div>
      </div>
    </article>
  );
}
