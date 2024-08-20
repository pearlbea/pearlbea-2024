import { clsx } from "clsx";
import { roboto } from "../fonts";
import NavMenu from "../nav";

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={clsx(roboto.className, "flex p-8")}>
      <NavMenu page="writing" />
      {children}
    </div>
  );
}
