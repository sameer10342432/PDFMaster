import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance Calculator - Calculate Mortgage Refinancing Savings & Break-Even Point | Property Tools',
  description: 'Calculate refinancing benefits with our comprehensive calculator. Analyze monthly savings, break-even point, closing costs, cash-out options, and total interest savings. Compare rate-and-term vs cash-out refinancing.',
  keywords: [
    'refinance calculator',
    'mortgage refinance calculator',
    'refinancing calculator',
    'home refinance calculator',
    'mortgage refi calculator',
    'refinance savings calculator',
    'loan refinance calculator',
    'refinancing analysis',
    'mortgage refinancing tool',
    'refi break-even calculator',
    'refinance comparison calculator',
    'home loan refinance'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Refinance Calculator - Calculate Mortgage Refinancing Savings',
    description: 'Free refinance calculator to determine if refinancing your mortgage makes sense. Calculate monthly savings and break-even point.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refinance Calculator - Calculate Mortgage Refinancing Savings',
    description: 'Free refinance calculator to determine if refinancing your mortgage makes sense. Calculate savings and break-even point.',
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
    canonical: '/tools/refinance-calculator',
  },
  category: 'Real Estate Tools',
};