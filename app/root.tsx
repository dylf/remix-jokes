import { Outlet, LiveReload, Links } from "remix";
import type { LinksFunction } from "remix";
import globalStylesUrl from "./styles/global.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import globalMediumStylesUrl from "./styles/global-medium.css";

export let links: LinksFunction = () => {
  return [
    {rel: "stylesheet", href: globalStylesUrl},
    {rel: "stylesheet", href: globalLargeStylesUrl, media: "print, (min-width 640px)"},
    {rel: "stylesheet", href: globalMediumStylesUrl, media: "screen and (min-width: 1024px)"},
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}