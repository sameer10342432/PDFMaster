import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rate-and-Term Refinance Calculator - Should You Refinance? | Property Tools',
  description: 'Calculate rate-and-term refinance savings, breakeven period, and monthly payment reduction. Determine if refinancing your mortgage saves money with our free calculator.',
  keywords: [
    'rate and term refinance calculator',
    'refinance calculator',
    'should I refinance calculator',
    'refinance breakeven calculator',
    'mortgage refinance savings',
    'refinancing worth it',
    'refinance cost benefit',
    'lower mortgage rate calculator',
    'refinance analysis',
    'mortgage refi calculator'
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
    canonical: '/tools/rate-and-term-refinance-calculator',
  },
  openGraph: {
    title: 'Rate-and-Term Refinance Calculator - Calculate Savings',
    description: 'Free refinance calculator. Calculate monthly savings, breakeven period, and lifetime interest savings when refinancing to a lower rate.',
    url: '/tools/rate-and-term-refinance-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-rate-term-refinance-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Rate-and-Term Refinance Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rate-and-Term Refinance Calculator - Calculate Savings',
    description: 'Determine if refinancing saves you money with our free calculator.',
    images: ['/og-rate-term-refinance-calculator.jpg'],
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
