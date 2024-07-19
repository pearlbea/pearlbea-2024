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
    <div className="flex flex-col column pb-4 px-4 rounded">
      <div>
        <Link
          className={clsx(
            roboto_slab.className,
            "text-lg text-pink-900 underline hover:text-pink-700 active:text-pink-700 focus:text-pink-700"
          )}
          href={link}
        >
          {title}
        </Link>
        <p className="text-md py-2">{summary}</p>
      </div>
    </div>
  );
}
