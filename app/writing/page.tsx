import Link from "next/link";
import { roboto_slab } from "../fonts";
import { clsx } from "clsx";
import styles from "./writing.module.css";

export default function Writing() {
  return (
    <>
      <h1 className={roboto_slab.className}>Writing</h1>
      <div className={styles.card}>
        <Link
          className={clsx(roboto_slab.className, styles.cardTitle)}
          href="./writing/quick-cors-primer"
        >
          A Quick Cors Primer for Frontend Folks
        </Link>
        <p className={styles.preview}>
          You&lsquo;ve made some requests on Postman. You understand which
          endpoints will deliver what payloads. Contented, you start developing
          on localhost. Enter the villain — CORS Error!
        </p>
      </div>
    </>
  );
}
