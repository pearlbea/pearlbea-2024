import PageLayout from "../page-layout";

export default function WritingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="writing">{children}</PageLayout>;
}
