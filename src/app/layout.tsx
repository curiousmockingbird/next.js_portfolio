import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TranStackProvider from './components/providers/TanStackProvider'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HarolDeveloper',
  description: 'Full-stack developer',
  openGraph: {
    title: 'HarolDeveloper',
    description: 'Full-stack developer',
    images: [
      {
        url: '/profile_pic.jpg',  // Path to your image in the public directory
        width: 1000,
        height: 1000,
        alt: 'HarolDeveloper Thumbnail',
      },
    ],
    siteName: 'HarolDeveloper',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'HarolDeveloper',
  //   description: 'Full-stack developer',
  //   images: ['/path/to/your/image.jpg'], // Path to your image in the public directory
  // },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranStackProvider>
        {children}
        </TranStackProvider>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
