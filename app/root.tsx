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
        <title>
          KeepFresh - Food Inventory Tracking App | Reduce Food Waste
        </title>
        <meta
          name="description"
          content="KeepFresh - Smart food inventory tracking app. Reduce food waste & save money. Available for free on the App Store."
        />
        <meta
          name="keywords"
          content="food inventory tracking app, food waste reduction, pantry organizer, expiration date tracker, shopping list app, smart refrigerator app, food management, KeepFresh"
        />
        <link rel="canonical" href="https://keepfre.sh" />
        <meta
          property="og:title"
          content="KeepFresh - Smart Food Inventory Tracker"
        />
        <meta
          property="og:description"
          content="Smart food inventory tracker available for free on iOS and Web"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keepfre.sh" />
        <meta
          property="og:image"
          content="https://images.keepfre.sh/app/icons/app-icon-background.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="og:image:alt"
          content="KeepFresh - Smart Food Inventory Tracking App"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KeepFresh - Smart Food Inventory Tracker"
        />
        <meta
          name="twitter:description"
          content="Never waste food again. Track expiration dates, organize your pantry, and reduce food waste with KeepFresh."
        />
        <meta
          name="twitter:image"
          content="https://images.keepfre.sh/app/icons/app-icon-background.webp"
        />
        <meta name="twitter:site" content="@KeepFre_sh" />
        <meta name="twitter:creator" content="@KeepFre_sh" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#c4e0e6" />

        <meta name="apple-itunes-app" content="app-id=6753958860" />
        <link
          rel="apple-touch-icon"
          href="https://images.keepfre.sh/app/icons/app-icon-background.webp"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'KeepFresh',
            description:
              'Smart food inventory tracking app - reduce food waste and save money',
            url: 'https://keepfre.sh',
            image:
              'https://images.keepfre.sh/app/icons/app-icon-background.webp',
            applicationCategory: 'Productivity',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              ratingCount: '1',
            },
            operatingSystem: 'iOS, Web',
            author: {
              '@type': 'Organization',
              name: 'KeepFresh',
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KeepFresh',
            url: 'https://keepfre.sh',
            logo: 'https://images.keepfre.sh/app/icons/app-icon-background.webp',
            sameAs: ['https://twitter.com/KeepFre_sh'],
            description:
              'Smart food inventory tracking app - reduces food waste, save money',
          })}
        </script>
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
