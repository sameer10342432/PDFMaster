import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Flipping ROI Calculator - House Flip Profit Calculator | Property Tools',
  description: 'Free property flipping ROI calculator to analyze house flip investments. Calculate renovation costs, holding costs, profit margins, and return on investment for fix-and-flip projects.',
  keywords: [
    'property flipping calculator',
    'house flip calculator',
    'fix and flip calculator',
    'property flip ROI',
    'house flipping profit calculator',
    'renovation ROI calculator',
    'flip investment calculator',
    'property rehab calculator',
    'house flip profit margin',
    'real estate flipping calculator',
    'flip analysis calculator',
    'property renovation calculator'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Flipping ROI Calculator - House Flip Profit Calculator',
    description: 'Free property flipping ROI calculator to analyze house flip investments. Calculate renovation costs, holding costs, and profit margins.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Flipping ROI Calculator - House Flip Profit Calculator',
    description: 'Free property flipping ROI calculator to analyze house flip investments and calculate profit margins.',
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
    canonical: '/tools/property-flipping-roi-calculator',
  },
  category: 'Real Estate Tools',
};