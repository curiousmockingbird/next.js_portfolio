import type { Metadata } from 'next';
import DevProjectsClient from './DevProjectsClient';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dev Projects | HarolDeveloper',
  description: 'Professional projects across the modern full-stack landscape.',
};

export default function DevProjectsPage() {
  return (
    <Suspense fallback={null}>
      <DevProjectsClient />
    </Suspense>
  );
}
