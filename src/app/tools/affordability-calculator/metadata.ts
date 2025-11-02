import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Affordability Calculator - Calculate Maximum House Price & Monthly Payment | Property Tools',
  description: 'Determine how much house you can afford with our comprehensive calculator. Analyze income, debts, down payment, property taxes, insurance, PMI, and HOA fees. Get debt-to-income ratios and emergency fund recommendations.',
  keywords: [
    'home affordability calculator',
    'how much house can I afford',
    'mortgage affordability',
    'home buying calculator',
    'house price calculator',
    'affordability analysis',
    'debt to income ratio',
    'home loan calculator',
    'property affordability',
    'first time home buyer',
    'mortgage pre-approval',
    'housing budget calculator',
    'real estate affordability',
    'home purchase calculator',
    'property budget planner'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/affordability-calculator',
  },
  openGraph: {
    title: 'Home Affordability Calculator - Determine Your Budget | Property Tools',
    description: 'Find out how much house you can afford with our detailed affordability calculator. Get personalized results based on your income, debts, and financial situation.',
    url: '/tools/affordability-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/affordability-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Affordability Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Affordability Calculator - Property Tools',
    description: 'Calculate your home buying budget with our comprehensive affordability calculator. Factor in all expenses for accurate results.',
    images: ['/images/affordability-calculator-twitter.jpg'],
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