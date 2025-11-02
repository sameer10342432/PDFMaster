import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash Flow Analyzer - Calculate Rental Property Cash Flow, Cap Rate & Cash-on-Cash Returns | Property Tools',
  description: 'Analyze rental property cash flow with comprehensive calculations. Calculate monthly income, expenses, vacancy rates, cap rates, and cash-on-cash returns. Get detailed financial projections and investment performance metrics.',
  keywords: [
    'cash flow analyzer',
    'real estate cash flow calculator',
    'investment cash flow tool',
    'property cash flow analysis',
    'rental property cash flow',
    'real estate investment calculator',
    'property investment analysis',
    'cash flow projection tool',
    'investment property calculator',
    'rental income calculator',
    'property cash flow forecast',
    'real estate financial analysis',
    'investment cash flow model',
    'property investment tool',
    'cash flow statement generator'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
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
  openGraph: {
    title: 'Cash Flow Analyzer - Real Estate Investment Analysis Tool',
    description: 'Free cash flow analyzer for real estate investments. Calculate monthly cash flow, annual returns, and investment performance with detailed projections.',
    url: 'https://propertytools.com.au/tools/cash-flow-analyzer',
    siteName: 'Property Tools',
    images: [
      {
        url: 'https://propertytools.com.au/images/cash-flow-analyzer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cash Flow Analyzer - Real Estate Investment Tool',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash Flow Analyzer - Real Estate Investment Analysis Tool',
    description: 'Free cash flow analyzer for real estate investments. Calculate monthly cash flow and annual returns with detailed projections.',
    images: ['https://propertytools.com.au/images/cash-flow-analyzer-twitter.jpg'],
    creator: '@PropertyToolsAU',
  },
  alternates: {
    canonical: 'https://propertytools.com.au/tools/cash-flow-analyzer',
  },
  category: 'Real Estate Tools',
};