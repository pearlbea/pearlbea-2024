"use client";

import { clsx } from "clsx";
import { roboto } from "../fonts";
import NavMenu from "../nav";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={clsx(
        roboto.className,
        "container mx-auto max-w-3xl p-8 mt-16"
      )}
    >
      <NavMenu />
      {children}
    </main>
  );
}
