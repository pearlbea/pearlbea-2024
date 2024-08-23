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
      <div className="basis-1/4">
        <NavMenu page={pageName} />
      </div>
      <div className="basis-3/4 md:mx-8">{children}</div>
    </div>
  );
}
