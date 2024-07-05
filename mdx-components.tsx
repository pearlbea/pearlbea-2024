import type { MDXComponents } from "mdx/types";
import { clsx } from "clsx";
import { roboto_slab } from "./app/fonts";
import styles from "./app/writing/writing.module.css";

export function useMDXComponents(): MDXComponents {
  return {
    a: ({ href, children }) => (
      <a
        href={href}
        rel="noopener noreferrer"
        className={styles.link}
        target="_blank"
      >
        {children}
      </a>
    ),
    code: ({ children }) => <code className={styles.code}>{children}</code>,
    h1: ({ children }) => (
      <h1 className={clsx(roboto_slab.className, styles.articleTitle)}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={clsx(roboto_slab.className, styles.subTitle)}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className={clsx(roboto_slab.className)}>{children}</h2>
    ),
    hr: () => <hr className={styles.line} />,
    p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  };
}
