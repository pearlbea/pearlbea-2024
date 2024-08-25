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
        title="PRPL on Rails III"
        summary="Improve your site's performance with service worker caching."
        link="./writing/prpl-on-rails-3"
      />
      <Card
        title="PRPL on Rails II"
        summary="Optimize rendering to speed up your site's time-to-interactive."
        link="./writing/prpl-on-rails-2"
      />
      <Card
        title="PRPL on Rails I"
        summary="Split your Rails JavaScript with Webpack to make your site load faster."
        link="./writing/prpl-on-rails-1"
      />
    </section>
  );
}
