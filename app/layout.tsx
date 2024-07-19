import type { Metadata } from "next";
import { clsx } from "clsx";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pearl Latteier",
  description: "Pearl's professional website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "bg-slate-50")}>
        <main className="container mx-auto max-w-6xl">{children}</main>
      </body>
    </html>
  );
}
