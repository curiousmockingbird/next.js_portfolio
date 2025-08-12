import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import HeaderClient from './components/HeaderClient';
// import LastPlayed from './components/LastPlayed';
// import TopTechHeadline from './components/TopTechHeadline';

export const metadata: Metadata = {
  title: 'Home | HarolDeveloper',
  description: 'HarolDeveloper portfolio home page',
};

export default function Home() {
  return (
    <section className="flex flex-col h-screen">
      <HeaderClient />
      <HomeClient />
      {/* <div className="animate-marquee flex flex-row items-center gap-6">
        <LastPlayed />
        <TopTechHeadline />
      </div> */}
    </section>
  );
}
