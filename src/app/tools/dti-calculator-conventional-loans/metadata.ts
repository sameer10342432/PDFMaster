import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DTI Calculator for Conventional Loans - Conventional Loan Debt-to-Income Calculator | Property Tools',
  description: 'Calculate your debt-to-income ratio for conventional loans. Most lenders require 43% max DTI (up to 50% with strong credit). Check your eligibility for conventional mortgages with our free calculator.',
  keywords: [
    'conventional loan DTI calculator',
    'conventional mortgage DTI',
    'debt to income ratio conventional',
    'Fannie Mae DTI requirements',
    'Freddie Mac DTI limits',
    'conventional loan eligibility',
    'conventional mortgage calculator',
    'DTI for conventional loans',
    'conventional loan qualification',
    '43% DTI rule',
    'conventional loan debt ratio'
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
    canonical: '/tools/dti-calculator-conventional-loans',
  },
  openGraph: {
    title: 'DTI Calculator for Conventional Loans - Check Your Eligibility',
    description: 'Free conventional loan DTI calculator. Calculate debt-to-income ratio with 43% standard limit (up to 50% with excellent credit). Determine your conventional mortgage eligibility.',
    url: '/tools/dti-calculator-conventional-loans',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-conventional-dti-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Conventional Loan DTI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTI Calculator for Conventional Loans - Check Your Eligibility',
    description: 'Calculate your debt-to-income ratio for conventional mortgages with our free DTI calculator.',
    images: ['/og-conventional-dti-calculator.jpg'],
    creator: '@propertytools',
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
