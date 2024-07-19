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
    <section>
      <h2
        className={clsx(roboto_slab.className, "font-bold text-2xl py-2 mt-4")}
      >
        {title}
      </h2>
      <ul className="text-lg py-2">
        <li>{event}</li>
        <li>{date}</li>
      </ul>
      <Link
        href={link}
        className="text-pink-800 underline underline-offset-4 mt-2"
        target="_blank"
        rel="noopener norefferer"
      >
        More info
      </Link>
    </section>
  );
}
