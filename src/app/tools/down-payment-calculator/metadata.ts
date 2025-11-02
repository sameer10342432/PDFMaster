import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Down Payment Calculator - Calculate Home Purchase Down Payment | Property Tools',
  description: 'Free down payment calculator to determine how much you need for a home purchase. Calculate down payment amounts, PMI requirements, and closing costs.',
  keywords: [
    'down payment calculator',
    'home down payment',
    'mortgage down payment',
    'house down payment calculator',
    'home purchase calculator',
    'PMI calculator',
    'closing costs calculator',
    'home buying calculator',
    'first time buyer calculator',
    'property purchase calculator',
    'loan down payment',
    'home affordability calculator'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Down Payment Calculator - Calculate Home Purchase Down Payment',
    description: 'Free down payment calculator to determine how much you need for a home purchase. Calculate down payment amounts and PMI requirements.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Down Payment Calculator - Calculate Home Purchase Down Payment',
    description: 'Free down payment calculator to determine how much you need for a home purchase. Calculate down payment amounts.',
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
  alternates: {
    canonical: '/tools/down-payment-calculator',
  },
  category: 'Real Estate Tools',
};