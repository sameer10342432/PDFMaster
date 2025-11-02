import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Break-Even Analysis Calculator - Real Estate Investment Analysis | Property Tools',
  description: 'Free break-even analysis calculator for real estate investments. Calculate break-even point, payback period, and profitability analysis for property investments.',
  keywords: [
    'break-even analysis calculator',
    'real estate break-even',
    'investment break-even',
    'property break-even calculator',
    'payback period calculator',
    'profitability analysis',
    'investment analysis calculator',
    'real estate ROI calculator',
    'property investment calculator',
    'break-even point calculator',
    'financial analysis tool',
    'investment profitability'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Break-Even Analysis Calculator - Real Estate Investment Analysis',
    description: 'Free break-even analysis calculator for real estate investments. Calculate break-even point, payback period, and profitability analysis.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Break-Even Analysis Calculator - Real Estate Investment Analysis',
    description: 'Free break-even analysis calculator for real estate investments. Calculate break-even point and profitability analysis.',
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
    canonical: '/tools/break-even-analysis-calculator',
  },
  category: 'Real Estate Tools',
};