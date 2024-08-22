import PageLayout from "../page-layout";

export default function SpeakingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="speaking">{children}</PageLayout>;
}
