import NavMenu from "./nav";
import Writing from "./writing/page";
import clsx from "clsx";
import { roboto } from "./fonts";

export default function Home() {
  return (
    <div className={clsx(roboto.className, "flex")}>
      <NavMenu page="writing" />
      <Writing />
    </div>
  );
}
