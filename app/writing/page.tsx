import Card from "../writing/card";
import { roboto_slab } from "../fonts";
import { clsx } from "clsx";

export default function Writing() {
  return (
    <>
      <h1 className={clsx(roboto_slab.className, "text-4xl")}>Writing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title=" A Quick Cors Primer for Frontend Folks"
          summary="You&lsquo;ve made some requests on Postman. You understand which
          endpoints will deliver what payloads. Contented, you start developing
          on localhost. Enter the villain — CORS Error!"
          link="./writing/quick-cors-primer"
        />
        <Card
          title="Lost in SPA(ce)"
          summary=" How to tell screen readers when the page has changed in a single page
          application."
          link="./writing/lost-in-space"
        />
        <Card
          title="Precache for Performance"
          summary="Improve your page load time by pre-caching resources during service worker installation."
          link="./writing/precache"
        />
      </div>
    </>
  );
}
