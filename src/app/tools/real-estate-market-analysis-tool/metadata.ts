import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Market Analysis Tool - Property Market Research | Property Tools',
  description: 'Free real estate market analysis tool to research property markets, analyze trends, compare neighborhoods, and evaluate investment opportunities in different areas.',
  keywords: [
    'real estate market analysis',
    'property market research',
    'market analysis tool',
    'real estate market trends',
    'property market data',
    'neighborhood analysis',
    'market research tool',
    'real estate analytics',
    'property market comparison',
    'investment market analysis',
    'real estate market report',
    'property market insights'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Real Estate Market Analysis Tool - Property Market Research',
    description: 'Free real estate market analysis tool to research property markets, analyze trends, and evaluate investment opportunities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Market Analysis Tool - Property Market Research',
    description: 'Free real estate market analysis tool to research property markets and analyze trends.',
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
    canonical: '/tools/real-estate-market-analysis-tool',
  },
  category: 'Real Estate Tools',
};