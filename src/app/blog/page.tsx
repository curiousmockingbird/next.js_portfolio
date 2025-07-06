import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog | HarolDeveloper',
  description: 'Read my latest articles and tutorials.',
};

export default function BlogPage() {
  return <BlogClient />;
}
