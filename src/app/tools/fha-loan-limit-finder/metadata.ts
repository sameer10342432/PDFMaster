import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FHA Loan Limit Finder - 2024 FHA Limits by County & Property Type | Property Tools',
  description: 'Find current FHA loan limits for your county and property type. Get 2024 FHA limits for 1-4 unit properties in low-cost, standard, and high-cost areas. Calculate maximum purchase price with FHA financing.',
  keywords: [
    'FHA loan limits',
    '2024 FHA limits',
    'FHA loan limits by county',
    'FHA maximum loan amount',
    'FHA lending limits',
    'FHA property limits',
    'FHA multi-unit limits',
    'FHA conforming limits',
    'FHA loan calculator',
    'FHA financing limits',
    'FHA duplex limits',
    'FHA triplex limits',
    'FHA fourplex limits',
    'FHA county limits',
    'FHA high-cost area'
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
    canonical: '/tools/fha-loan-limit-finder',
  },
  openGraph: {
    title: 'FHA Loan Limit Finder - Find 2024 FHA Limits | Property Tools',
    description: 'Find the maximum FHA loan amount for your county and property type. Get updated 2024 FHA lending limits.',
    url: '/tools/fha-loan-limit-finder',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FHA Loan Limit Finder - Property Tools',
    description: 'Find current FHA loan limits for your county and property type with our comprehensive FHA limit finder.',
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
};
