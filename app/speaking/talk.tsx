import Link from "next/link";
import { clsx } from "clsx";
import { roboto_slab } from "../fonts";

export default function Talk({
  title,
  event,
  date,
  link,
}: {
  title: string;
  event: string;
  date: string;
  link: string;
}) {
  return (
    <section className="mb-4">
      <h2
        className={clsx(
          roboto_slab.className,
          "font-bold text-xl md:text-2xl py-2"
        )}
      >
        {title}
      </h2>
      <ul className="text-lg py-2">
        <li>{event}</li>
        <li>{date}</li>
      </ul>
      <Link
        href={link}
        className={clsx(
          roboto_slab.className,
          "text-pink-900 hover:text-pink-700 active:text-pink-700 focus:text-pink-700 underline underline-offset-2"
        )}
        target="_blank"
        rel="noopener norefferer"
      >
        More info
      </Link>
    </section>
  );
}
