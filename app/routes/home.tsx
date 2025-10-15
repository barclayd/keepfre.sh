import { Background } from '~/welcome/background.tsx';
import { Footer } from '~/welcome/footer.tsx';
import { Hero } from '~/welcome/hero.tsx';
import { Navbar } from '~/welcome/navbar.tsx';
import type { Route } from './+types/home';

// biome-ignore lint/correctness/noEmptyPattern: react-router default
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export function ServerComponent() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Background />
      <div className="flex-grow flex justify-center items-center -mt-[50vh] z-1 py-[100px]">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
