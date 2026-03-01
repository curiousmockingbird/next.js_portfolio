
import './globals.css'
import type { Metadata } from 'next'
import TanStackProvider from './components/providers/TanStackProvider'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from './components/HeaderClient';
import ChatWidget from './components/ChatWidget';
import ChatLauncher from './components/ChatLauncher';
import ClientErrorReporter from './components/ClientErrorReporter';
import PageViewLogger from './components/PageViewLogger';

// Removed next/font/google to avoid network fetch during build.

export const metadata: Metadata = {
  title: 'HarolDeveloper',
  description: 'Full-stack developer',
  openGraph: {
    url: 'https://haroldeveloper.tech', // Replace with your website URL
    type: 'website', // Commonly "website" or "article"
    title: 'HarolDeveloper',
    description: 'Full-stack developer',
    images: [
      {
        url: 'https://haroldeveloper.tech/profile_pic.jpg',  // Path to your image in the public directory
        width: 1200,
        height: 630,
        alt: 'HarolDeveloper Thumbnail',
      },
    ],
    siteName: 'HarolDeveloper',
  }
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider>
          <TanStackProvider>
            {children}
          </TanStackProvider>
        </ThemeProvider>
        <ChatWidget />
        <ChatLauncher />
        <ClientErrorReporter />
        <PageViewLogger />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
