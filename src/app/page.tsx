import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import LastPlayed from './components/LastPlayed';

export const metadata: Metadata = {
  title: 'Home | HarolDeveloper',
  description: 'HarolDeveloper portfolio home page',
};

export default function Home() {
  return (
      <section className="flex flex-col h-screen">
        <HomeClient />
        <div>
          <h1 className="text-2xl font-bold mb-6">My Spotify Dashboard</h1>
          <LastPlayed />
        </div>
      </section>
  );
}
