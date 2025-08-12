import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import Header from './components/Header';
import { cookies } from 'next/headers';
// import LastPlayed from './components/LastPlayed';
// import TopTechHeadline from './components/TopTechHeadline';

export const metadata: Metadata = {
  title: 'Home | HarolDeveloper',
  description: 'HarolDeveloper portfolio home page',
};

export default function Home() {
  const theme = cookies().get('theme')?.value || 'dark';
  const imageSrc = theme === 'dark' ? '/hm.svg' : '/hm_black.svg';

  return (
    <section className="flex flex-col h-screen">
      <Header imageSrc={imageSrc} />
      <HomeClient />
      {/* <div className="animate-marquee flex flex-row items-center gap-6">
        <LastPlayed />
        <TopTechHeadline />
      </div> */}
    </section>
  );
}
