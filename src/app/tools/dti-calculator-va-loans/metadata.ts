import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DTI Calculator for VA Loans - VA Debt-to-Income Ratio Calculator | Property Tools',
  description: 'Calculate your debt-to-income ratio for VA loans. VA loans allow up to 41% DTI with flexible residual income requirements. Check your eligibility for VA home loans with our free calculator.',
  keywords: [
    'VA DTI calculator',
    'VA debt to income ratio',
    'VA loan DTI requirements',
    'veterans mortgage calculator',
    'military home loan DTI',
    'VA loan eligibility',
    'residual income calculator',
    'VA loan debt ratio',
    'VA home loan calculator',
    'veterans benefits calculator',
    'VA loan qualification',
    'DTI for veterans'
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
    canonical: '/tools/dti-calculator-va-loans',
  },
  openGraph: {
    title: 'DTI Calculator for VA Loans - Check Your VA Loan Eligibility',
    description: 'Free VA loan DTI calculator. Calculate debt-to-income ratio for VA mortgages with up to 41% DTI allowance. Includes residual income analysis for veterans and military members.',
    url: '/tools/dti-calculator-va-loans',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-va-dti-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'VA Loan DTI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTI Calculator for VA Loans - Check Your VA Loan Eligibility',
    description: 'Calculate your debt-to-income ratio for VA loans with flexible underwriting guidelines.',
    images: ['/og-va-dti-calculator.jpg'],
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
