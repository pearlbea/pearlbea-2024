import PageLayout from "../page-layout";

export default function SpeakingLayout({
  pageName,
  children,
}: Readonly<{
  pageName: string;
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="speaking" children={children} />;
}
