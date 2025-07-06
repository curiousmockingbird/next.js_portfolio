import type { Metadata } from 'next';
import DevProjectsClient from './DevProjectsClient';

export const metadata: Metadata = {
  title: 'Dev Projects | HarolDeveloper',
  description: 'Professional projects across the modern full-stack landscape.',
};

export default function DevProjectsPage() {
  return <DevProjectsClient />;
}
