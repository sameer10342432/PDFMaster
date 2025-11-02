import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Flip Analyzer - Calculate Fix & Flip Profits, ROI & Renovation Costs | Property Tools',
  description: 'Analyze house flipping profitability with detailed cost breakdowns. Calculate renovation costs, holding expenses, financing costs, realtor commissions, and net profits. Get ROI analysis and risk assessments for fix-and-flip investments.',
  keywords: [
    'house flip analyzer',
    'house flipping calculator',
    'flip profit calculator',
    'real estate flipping',
    'renovation cost estimator',
    'fix and flip calculator',
    'property flipping analysis',
    'house flip ROI',
    'real estate investment calculator',
    'flip project analyzer',
    'renovation profit calculator',
    'house flipping guide',
    'flip investment analysis',
    'property renovation calculator',
    'house flip margins'
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
    canonical: '/tools/house-flip-analyzer',
  },
  openGraph: {
    title: 'House Flip Analyzer | Property Tools',
    description: 'Analyze house flipping profitability with our comprehensive calculator. Estimate renovation costs, holding expenses, and potential profits.',
    url: '/tools/house-flip-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'House Flip Analyzer - Real Estate Investment Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Flip Analyzer | Property Tools',
    description: 'Analyze house flipping profitability. Calculate renovation costs, holding expenses, and potential profits.',
    images: ['/placeholder-600x400.svg'],
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
}