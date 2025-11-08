import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DTI Calculator for FHA Loans - Calculate FHA Debt-to-Income Ratio | Property Tools',
  description: 'Calculate your debt-to-income ratio specifically for FHA loan qualification. Get front-end and back-end DTI with FHA MIP, qualification status, automated vs manual approval paths, and FHA-specific requirements.',
  keywords: [
    'FHA DTI calculator',
    'FHA debt to income',
    'FHA loan DTI requirements',
    'FHA ratio calculator',
    'FHA qualification calculator',
    'FHA mortgage insurance DTI',
    'FHA front-end DTI',
    'FHA back-end DTI',
    'FHA automated approval',
    'FHA manual underwriting',
    'FHA loan qualification',
    'FHA MIP calculator',
    'FHA DTI limits',
    'FHA compensating factors',
    'FHA TOTAL scorecard'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/dti-calculator-fha-loans',
  },
  openGraph: {
    title: 'DTI Calculator for FHA Loans - Check FHA Qualification | Property Tools',
    description: 'Calculate your DTI ratio for FHA loans and see if you qualify for automated approval or need manual underwriting.',
    url: '/tools/dti-calculator-fha-loans',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTI Calculator for FHA Loans - Property Tools',
    description: 'Calculate your debt-to-income ratio specifically for FHA loan qualification and approval paths.',
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
};
