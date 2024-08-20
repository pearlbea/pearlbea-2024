import Card from "../writing/card";

export default function Writing() {
  return (
    <section>
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
      <Card
        title="A Tale of Four Components"
        summary="An exploration of web component libraries that compares vanilla JavaScript, Nutmeg, Polymer, and Stencil versions of the same component."
        link="./writing/tale-of-four-components"
      />
      <Card
        title="A Tale of Four Components"
        summary="An exploration of web component libraries that compares vanilla JavaScript, Nutmeg, Polymer, and Stencil versions of the same component."
        link="./writing/tale-of-four-components"
      />
    </section>
  );
}
