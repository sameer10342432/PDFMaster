import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Calculator - Calculate Monthly Payments, Interest & Amortization Schedule | Property Tools',
  description: 'Calculate mortgage payments with our free calculator. Get monthly payment amounts, total interest costs, amortization schedules, and compare different loan terms. Includes down payment analysis and detailed payment breakdowns.',
  keywords: [
    'mortgage calculator',
    'home loan calculator',
    'monthly payment calculator',
    'mortgage payment',
    'loan calculator',
    'interest calculator',
    'amortization calculator',
    'home buying calculator',
    'property loan calculator',
    'EMI calculator',
    'mortgage interest',
    'loan comparison'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/mortgage-calculator',
  },
  openGraph: {
    title: 'Mortgage Calculator - Calculate Monthly Payments & Interest',
    description: 'Free mortgage calculator to calculate monthly payments, total interest, and amortization schedules. Compare different loan terms and interest rates.',
    url: '/tools/mortgage-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-mortgage-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Calculator - Calculate Monthly Payments & Interest',
    description: 'Free mortgage calculator to calculate monthly payments, total interest, and amortization schedules.',
    images: ['/og-mortgage-calculator.jpg'],
    creator: '@propertytools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};