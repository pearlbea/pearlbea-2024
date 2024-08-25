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
        className="text-pink-800 underline underline-offset-4"
        target="_blank"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pink-800 px-4">
        {children}
      </blockquote>
    ),
    h1: ({ children }) => (
      <h1 className={clsx(roboto_slab.className, "font-bold text-4xl py-4")}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={clsx(roboto_slab.className, "font-bold text-2xl py-2")}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className={clsx(roboto_slab.className, "font-medium text-xl pb-2")}>
        {children}
      </h2>
    ),
    hr: () => <hr className={styles.line} />,
    p: ({ children }) => <p className="text-lg mb-4">{children}</p>,
    pre: ({ children }) => <pre className="text-sm px-4">{children}</pre>,
  };
}
