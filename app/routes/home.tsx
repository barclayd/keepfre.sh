import { Background } from '~/components/background.tsx';
import { Footer } from '~/components/footer.tsx';
import { Hero } from '~/components/hero.tsx';
import { Navbar } from '~/components/navbar.tsx';

export function meta() {
  return [
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KeepFresh',
        description:
          'Smart food inventory tracking app - reduce food waste and save money',
        url: 'https://keepfre.sh',
        image: 'https://images.keepfre.sh/app/icons/app-icon-background.webp',
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
      },
    },
    {
      'script:ld+json': {
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
      },
    },
  ];
}

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />
      <Background />
      <div className="flex-grow flex justify-center items-center -mt-[50vh] z-1 py-[100px]">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
