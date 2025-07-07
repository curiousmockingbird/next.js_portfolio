import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import LastPlayed from './components/LastPlayed';

export const metadata: Metadata = {
  title: 'Home | HarolDeveloper',
  description: 'HarolDeveloper portfolio home page',
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">My Spotify Dashboard</h1>

      {/* Server-rendered widget */}
      <LastPlayed />

      {/* Client component for any interactive bits */}
      <HomeClient />
    </>
  );
}
