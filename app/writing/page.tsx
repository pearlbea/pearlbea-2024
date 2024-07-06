import Card from "../writing/card";
import { roboto_slab } from "../fonts";

export default function Writing() {
  return (
    <>
      <h1 className={roboto_slab.className}>Writing</h1>
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
    </>
  );
}
