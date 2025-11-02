import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash-on-Cash Return Calculator - Calculate Real Estate Investment Returns & Cash Flow | Property Tools',
  description: 'Calculate cash-on-cash returns for rental properties. Analyze annual cash flow, monthly expenses, vacancy rates, cap rates, and payback periods. Compare investment performance with detailed ROI analysis.',
  keywords: [
    'cash-on-cash return calculator',
    'real estate return calculator',
    'investment return calculator',
    'property return calculator',
    'cash flow return',
    'real estate ROI',
    'investment performance calculator',
    'property investment returns',
    'cash yield calculator',
    'rental property returns',
    'real estate metrics',
    'investment analysis'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Cash-on-Cash Return Calculator - Real Estate Investment Returns',
    description: 'Free cash-on-cash return calculator for real estate investments. Calculate annual cash flow returns on your initial cash investment.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash-on-Cash Return Calculator - Real Estate Investment Returns',
    description: 'Free cash-on-cash return calculator for real estate investments. Calculate annual cash flow returns on your investment.',
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
    canonical: '/tools/cash-on-cash-return-calculator',
  },
  category: 'Real Estate Tools',
};