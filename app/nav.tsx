import Link from "next/link";
import styles from "./nav.module.css";

export default function NavMenu({ page }: { page: string }) {
  return (
    <nav className="px-8 underline-offset-4">
      <ul className="flex pr-4 md:block">
        <li className="py-2 mr-4">
          <Link
            className={`my-4 ${page === "writing" ? styles.active : ""}`}
            href="/writing"
          >
            WRITING
          </Link>
        </li>
        <li className="py-2 mr-4">
          <Link
            className={`${styles.link} ${
              page === "speaking" ? styles.active : ""
            }`}
            href="/speaking"
          >
            SPEAKING
          </Link>
        </li>
        <li className="py-2 mr-4">
          <Link
            className={`${styles.link} ${
              page === "coding" ? styles.active : ""
            }`}
            href="/coding"
          >
            CODING
          </Link>
        </li>
      </ul>
    </nav>
  );
}
