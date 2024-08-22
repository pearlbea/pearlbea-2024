import PageLayout from "../page-layout";

export default function CodingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="coding">{children}</PageLayout>;
}
