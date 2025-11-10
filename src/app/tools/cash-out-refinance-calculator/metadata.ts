import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash-Out Refinance Calculator - Calculate Cash Out & New Payment | Property Tools',
  description: 'Calculate cash-out refinance options. See how much equity you can access, new monthly payment, and total costs. Determine if cash-out refinancing is right for you.',
  keywords: [
    'cash-out refinance calculator',
    'cash out refi calculator',
    'home equity cash out',
    'refinance cash calculator',
    'mortgage cash out calculator',
    'equity extraction calculator',
    'cash-out refinance costs',
    'tap home equity',
    'refinance for cash',
    'cash-out refi worth it'
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
    canonical: '/tools/cash-out-refinance-calculator',
  },
  openGraph: {
    title: 'Cash-Out Refinance Calculator - Calculate Cash & Payment',
    description: 'Free cash-out refinance calculator. Calculate maximum cash available, new monthly payment, and total borrowing costs.',
    url: '/tools/cash-out-refinance-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-cash-out-refinance-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Cash-Out Refinance Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash-Out Refinance Calculator - Calculate Cash & Payment',
    description: 'Calculate how much cash you can get from a cash-out refinance.',
    images: ['/og-cash-out-refinance-calculator.jpg'],
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
