import Link from "next/link";
import { clsx } from "clsx";
import { roboto_slab } from "../fonts";

export default function ArticleCard({
  title,
  summary,
  link,
}: {
  title: string;
  summary: string;
  link: string;
}) {
  return (
    <div className="mb-4">
      <h2
        className={clsx(
          roboto_slab.className,
          "font-bold text-xl md:text-2xl py-2"
        )}
      >
        {title}
      </h2>
      <p className="text-base py-2">{summary}</p>
      <Link
        className={clsx(
          roboto_slab.className,
          "text-lg text-pink-900 hover:text-pink-700 active:text-pink-700 focus:text-pink-700 underline underline-offset-7"
        )}
        href={link}
      >
        Read the article
      </Link>
    </div>
  );
}
