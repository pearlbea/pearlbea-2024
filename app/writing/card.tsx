import Link from "next/link";
import { clsx } from "clsx";
import { roboto_slab } from "../fonts";
import styles from "../writing/writing.module.css";

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
    <div className={styles.card}>
      <Link
        className={clsx(roboto_slab.className, styles.cardTitle)}
        href={link}
      >
        {title}
      </Link>
      <p className={styles.preview}>{summary}</p>
    </div>
  );
}
