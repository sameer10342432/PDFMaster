import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Fee Calculator - Calculate Homeowners Association Costs | Property Tools',
  description: 'Calculate HOA fees and analyze homeowners association costs. Estimate monthly dues, special assessments, and total annual HOA expenses for property budgeting and investment analysis.',
  keywords: [
    'HOA fee calculator',
    'homeowners association fees',
    'HOA dues calculator',
    'condo fees calculator',
    'HOA cost estimator',
    'special assessment calculator',
    'HOA budget planner',
    'community association fees',
    'monthly HOA dues',
    'HOA expense analysis',
    'property association costs',
    'HOA fee comparison',
    'homeowners dues',
    'association fee calculator',
    'HOA financial planning'
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
    canonical: '/tools/hoa-fee-calculator',
  },
  openGraph: {
    title: 'HOA Fee Calculator - Calculate Homeowners Association Costs',
    description: 'Calculate HOA fees and analyze homeowners association costs. Estimate monthly dues, special assessments, and total annual HOA expenses.',
    url: '/tools/hoa-fee-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-hoa-fee-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'HOA Fee Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Fee Calculator - Calculate Homeowners Association Costs',
    description: 'Calculate HOA fees and analyze homeowners association costs. Estimate monthly dues, special assessments, and total annual HOA expenses.',
    images: ['/og-hoa-fee-calculator.jpg'],
    creator: '@PropertyTools',
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
  verification: {
    google: 'your-google-verification-code',
  },
};