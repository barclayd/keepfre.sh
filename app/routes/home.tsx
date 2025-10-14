import { Background } from '~/welcome/background.tsx';
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
    <main className="w-full">
      <Navbar />
      <Background />
      <div className="flex justify-center items-center h-[200px] md:py-4 md:[300px]">
        <Hero />
      </div>
    </main>
  );
}
