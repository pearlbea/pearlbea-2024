import type { Metadata } from "next";
import { clsx } from "clsx";
import { roboto, roboto_slab } from "./fonts";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pearl Latteier",
  description: "Pearl's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "bg-slate-50")}>
        <main className="container mx-auto max-w-5xl">
          <header className="m-8">
            <Image
              src="/icon.png"
              alt="PB icon"
              width={60}
              height={60}
              priority
            />
            <h1 className={clsx(roboto_slab.className, "text-4xl mt-8")}>
              Pearl Latteier
            </h1>
            <ul className="flex align-baseline">
              <li className="m-1">
                <Link
                  aria-labelledby="gitHub"
                  href="https://github.com/pearlbea"
                  rel="noopener nofollow"
                  target="_blank"
                  className="text-pink-900 hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
                >
                  github
                </Link>
              </li>
              <li className="m-1">
                <span className="mr-2">·</span>
                <Link
                  aria-labelledby="linkedIn"
                  href="https://www.linkedin.com/in/pearllatteier/"
                  rel="noopener nofollow"
                  target="_blank"
                  className="text-pink-900 hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
                >
                  linikedIn
                </Link>
              </li>
              <li className="m-1">
                <span className="mr-2">·</span>
                <Link
                  aria-labelledby="twitter"
                  href="https://twitter.com/pblatteier"
                  rel="noopener nofollow"
                  target="_blank"
                  className="text-pink-900 hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
                >
                  twitter
                </Link>
              </li>
            </ul>
          </header>
          <div className="mx-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
