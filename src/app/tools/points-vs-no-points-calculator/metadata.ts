import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Points vs. No-Points Mortgage Calculator - Should You Pay Mortgage Points? | Property Tools',
  description: 'Compare paying mortgage points vs. no points. Calculate breakeven point, monthly savings, and total cost. Determine if buying points saves money over your loan term.',
  keywords: [
    'points vs no points calculator',
    'mortgage points calculator',
    'should I buy points',
    'discount points worth it',
    'mortgage points comparison',
    'points breakeven calculator',
    'buy down rate calculator',
    'mortgage points decision',
    'zero points mortgage',
    'origination points calculator'
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
    canonical: '/tools/points-vs-no-points-calculator',
  },
  openGraph: {
    title: 'Points vs. No-Points Mortgage Calculator - Compare Options',
    description: 'Free mortgage points calculator. Compare paying points upfront vs. zero points. Calculate breakeven and total savings over loan term.',
    url: '/tools/points-vs-no-points-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-points-comparison-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Points vs No-Points Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Points vs. No-Points Mortgage Calculator',
    description: 'Compare paying mortgage points upfront vs. zero points option.',
    images: ['/og-points-comparison-calculator.jpg'],
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
