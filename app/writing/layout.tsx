import PageLayout from "../page-layout";

export default function WritingLayout({
  pageName,
  children,
}: Readonly<{
  pageName: string;
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="writing">{children}</PageLayout>;
}
