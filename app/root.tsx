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
        <title>KeepFresh - Food Waste Tracker | Food Waste Tracking App</title>
        <meta
          name="description"
          content="KeepFresh is a free food waste tracker app that helps you reduce food waste, track expiration dates, and save money. Smart food waste tracking for your pantry, fridge & freezer. Available on iOS and web."
        />
        <link rel="canonical" href="https://keepfre.sh" />
        <meta
          property="og:title"
          content="KeepFresh - Food Waste Tracker | Reduce Waste & Save Money"
        />
        <meta
          property="og:description"
          content="KeepFresh is a free food waste tracker app that helps you reduce food waste, track expiration dates, and save money. Smart food waste tracking for your pantry, fridge & freezer. Available on iOS and web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KeepFresh" />
        <meta property="og:url" content="https://keepfre.sh" />
        <meta
          property="og:image"
          content="https://images.keepfre.sh/app/icons/app-icon-background.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta name="application-name" content="KeepFresh" />
        <meta
          property="og:image:alt"
          content="KeepFresh - Smart Food Inventory Tracking App"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KeepFresh - Food Waste Tracker | Reduce Waste & Save Money"
        />
        <meta
          name="twitter:description"
          content="KeepFresh is a free food waste tracker app that helps you reduce food waste, track expiration dates, and save money. Smart food waste tracking for your pantry, fridge & freezer. Available on iOS and web."
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
            logo: 'https://images.keepfre.sh/app/icons/app-icon-background.webp',
            sameAs: ['https://twitter.com/KeepFre_sh'],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a food waste tracker?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A food waste tracker is an app that helps you monitor food items, track expiration dates, and reduce food waste by keeping your pantry organized.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does food waste tracking work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Food waste tracking apps like KeepFresh let you scan barcodes, set expiration reminders, and organise your food inventory to minimize waste.',
                },
              },
            ],
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
