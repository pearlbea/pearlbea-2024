import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./page.module.css";

import { roboto_slab } from "./fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imgWrapper}>
        <Image
          src="/full-pb-photo-blur.jpg"
          alt="Photo of Pearl"
          width={600}
          height={317}
          priority
        />
      </div>
      <Image
        src="/icon.png"
        alt="PB icon"
        className={styles.pbIcon}
        width={60}
        height={60}
        priority
      />

      <h1 className={clsx(styles.headline, roboto_slab.className)}>
        Pearl Latteier
      </h1>
      <p className={styles.description}>
        Thanks for visiting! You can also find me on{" "}
        <Link
          className={styles.inlineLink}
          href="https://github.com/pearlbea"
          rel="noopener nofollower"
          target="_blank"
        >
          GitHub
        </Link>
        ,{" "}
        <Link
          className={styles.inlineLink}
          href="https://www.linkedin.com/in/pearllatteier/"
          rel="noopener nofollower"
          target="_blank"
        >
          LinkedIn
        </Link>
        , and{" "}
        <Link
          className={styles.inlineLink}
          href="https://twitter.com/pblatteier"
          rel="noopener nofollower"
          target="_blank"
        >
          Twitter
        </Link>
        .
      </p>

      <nav>
        <ul className={styles.buttonLinks}>
          <li>
            <Link className={styles.buttonLink} href="/writing">
              Writing
            </Link>
          </li>
          <li>
            <Link className={styles.buttonLink} href="/speaking">
              Speaking
            </Link>
          </li>
          <li>
            <Link className={styles.buttonLink} href="/coding">
              Coding
            </Link>
          </li>
          {/* <li>
            <Link className={styles.buttonLink} href="/working">
              Working
            </Link>
          </li> */}
        </ul>
      </nav>
    </main>
  );
}
