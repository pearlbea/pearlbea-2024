import type { Metadata } from "next";
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
