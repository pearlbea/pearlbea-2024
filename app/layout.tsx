import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Roboto_Slab({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
