import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TN Homes LLC — Home Building & Remodeling in Seattle, WA',
  description:
    'TN Homes LLC builds single family homes, ADUs, DADUs, and handles full remodels in Seattle and greater Washington State. AI-first project management, transparent pricing, and real-time client portal.',
  openGraph: {
    title: 'TN Homes LLC',
    description: 'Home Building & Remodeling in Seattle, WA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
