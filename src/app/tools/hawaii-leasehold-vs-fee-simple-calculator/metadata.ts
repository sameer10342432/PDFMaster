import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hawaii Leasehold vs Fee Simple Calculator - Compare Ownership Costs | Property Tools',
  description: 'Compare Hawaii leasehold vs fee simple ownership costs including purchase price, lease rent, appreciation, and long-term financial implications. Understand Bishop Estate and leasehold risks.',
  keywords: [
    'hawaii leasehold',
    'hawaii fee simple',
    'leasehold vs fee simple',
    'hawaii leasehold property',
    'bishop estate hawaii',
    'hawaii lease rent',
    'leasehold condo hawaii',
    'hawaii real estate ownership',
    'leasehold fee simple comparison',
    'hawaii property lease',
    'kamehameha schools leasehold',
    'hawaii kai leasehold',
    'leasehold conversion hawaii',
    'hawaii land ownership',
    'leasehold financing hawaii',
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
    canonical: '/tools/hawaii-leasehold-vs-fee-simple-calculator',
  },
  openGraph: {
    title: 'Hawaii Leasehold vs Fee Simple Calculator',
    description: 'Compare leasehold vs fee simple ownership costs in Hawaii. Calculate lease rent, appreciation, and long-term value differences.',
    url: '/tools/hawaii-leasehold-vs-fee-simple-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-hawaii-leasehold.jpg',
        width: 1200,
        height: 630,
        alt: 'Hawaii Leasehold vs Fee Simple Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawaii Leasehold vs Fee Simple Calculator',
    description: 'Compare Hawaii leasehold vs fee simple ownership including lease rent costs and long-term financial implications.',
    images: ['/og-hawaii-leasehold.jpg'],
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
