"use client";

import { clsx } from "clsx";
import { roboto } from "../fonts";
import NavMenu from "../nav";
import styles from "./writing.module.css";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={clsx(styles.article, roboto.className)}>
      <NavMenu />
      {children}
    </main>
  );
}
