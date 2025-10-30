import { Background } from '~/components/background.tsx';
import { Footer } from '~/components/footer.tsx';
import { Hero } from '~/components/hero.tsx';
import { Navbar } from '~/components/navbar.tsx';
import type { Route } from './+types/home';

// biome-ignore lint/correctness/noEmptyPattern: react-router default
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'KeepFresh' },
    {
      name: 'description',
      content: "The world's best food waste tracker - end food waste for good",
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
