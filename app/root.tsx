import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Shrikhand&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <meta property="og:title" content="Keep Fresh" />
        <meta
          property="og:description"
          content="Smart food inventory tracker available for iPhone and Web"
        />
        <meta name="theme-color" content="#c4e0e6" />
        <meta name="apple-itunes-app" content="app-id=6753958860" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keepfre.sh" />
        <link
          rel="apple-touch-icon"
          href="https://images.keepfre.sh/app/icons/AppIcon-iOS-Default-1024x1024%401x.png"
        />
        <meta
          property="og:image"
          content="https://images.keepfre.sh/app/icons/AppIcon-iOS-Default-1024x1024%401x.png"
        />
        <title>Keep Fresh</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container p-4 pt-16 mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="overflow-x-auto p-4 w-full">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
