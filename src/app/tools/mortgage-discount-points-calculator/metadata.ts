import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Discount Points Calculator - Calculate Points Cost & Savings | Property Tools',
  description: 'Calculate mortgage discount points cost, interest savings, and breakeven period. See how buying points lowers your rate and monthly payment with our free calculator.',
  keywords: [
    'mortgage discount points calculator',
    'discount points calculator',
    'buy down rate calculator',
    'mortgage points cost',
    'points breakeven calculator',
    'how much do points cost',
    'mortgage points savings',
    'origination points',
    'loan discount points',
    'points worth it calculator'
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
    canonical: '/tools/mortgage-discount-points-calculator',
  },
  openGraph: {
    title: 'Mortgage Discount Points Calculator - Calculate Cost & Savings',
    description: 'Free mortgage points calculator. Calculate the cost of discount points, monthly savings, and breakeven period for your home loan.',
    url: '/tools/mortgage-discount-points-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-discount-points-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Discount Points Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Discount Points Calculator',
    description: 'Calculate discount points cost and savings on your mortgage.',
    images: ['/og-discount-points-calculator.jpg'],
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
