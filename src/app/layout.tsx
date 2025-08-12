
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TanStackProvider from './components/providers/TanStackProvider'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from './components/HeaderClient';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider>
          <TanStackProvider>
            {children}
          </TanStackProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
