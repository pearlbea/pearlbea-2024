import { clsx } from "clsx";
import { roboto } from "./fonts";
import NavMenu from "./nav";

export default function PageLayout({
  pageName,
  children,
}: Readonly<{
  pageName: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={clsx(roboto.className, "flex flex-col md:flex-row")}>
      <NavMenu page={pageName} />
      <div className="md:mx-8">{children}</div>
    </div>
  );
}
