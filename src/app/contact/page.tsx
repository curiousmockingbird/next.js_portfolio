import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | HarolDeveloper',
  description: 'Get in touch with HarolDeveloper for collaborations or questions.',
};

export default function ContactPage() {
  return <ContactClient />;
}
