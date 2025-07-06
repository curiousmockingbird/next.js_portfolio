import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Me | HarolDeveloper',
  description: 'Learn more about Harol, a full-stack developer.',
};

export default function AboutPage() {
  return <AboutClient />;
}
