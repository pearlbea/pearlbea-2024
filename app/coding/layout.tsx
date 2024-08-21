import PageLayout from "../page-layout";

export default function CodingLayout({
  pageName,
  children,
}: Readonly<{
  pageName: string;
  children: React.ReactNode;
}>) {
  return <PageLayout pageName="coding" children={children} />;
}
