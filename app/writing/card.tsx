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
    <div className="flex flex-col column justify-between shadow-md pt-16 pb-4 px-4 rounded">
      <div>
        <Link
          className={clsx(roboto_slab.className, "text-3xl font-bold")}
          href={link}
        >
          {title}
        </Link>
        <p className="text-lg py-4">{summary}</p>
      </div>
      <Link
        href={link}
        className="underline text-base text-right text-pink-800"
      >
        Read more
      </Link>
    </div>
  );
}
