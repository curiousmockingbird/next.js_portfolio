import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Home | HarolDeveloper',
  description: 'HarolDeveloper portfolio home page',
};

export default function Home() {
  return <HomeClient />;
}
