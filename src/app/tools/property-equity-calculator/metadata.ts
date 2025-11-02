import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Equity Calculator - Calculate Home Equity & Loan-to-Value | Property Tools',
  description: 'Free property equity calculator to determine your home equity, loan-to-value ratio, and available equity for refinancing or home equity loans.',
  keywords: [
    'property equity calculator',
    'home equity calculator',
    'loan-to-value calculator',
    'LTV calculator',
    'home equity loan calculator',
    'property equity analysis',
    'mortgage equity calculator',
    'home value equity',
    'equity calculation',
    'refinance equity calculator',
    'HELOC calculator',
    'home equity line of credit'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Equity Calculator - Calculate Home Equity & Loan-to-Value',
    description: 'Free property equity calculator to determine your home equity, loan-to-value ratio, and available equity for refinancing.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Equity Calculator - Calculate Home Equity & Loan-to-Value',
    description: 'Free property equity calculator to determine your home equity and loan-to-value ratio.',
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
    canonical: '/tools/property-equity-calculator',
  },
  category: 'Real Estate Tools',
};