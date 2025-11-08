import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Debt-to-Income (DTI) Ratio Calculator - Calculate Front & Back-End DTI for Mortgage | Property Tools',
  description: 'Calculate your debt-to-income ratio for mortgage qualification. Get front-end and back-end DTI percentages, qualification status, and recommendations for conventional, FHA, VA, and USDA loans.',
  keywords: [
    'DTI calculator',
    'debt to income ratio',
    'DTI ratio calculator',
    'mortgage DTI calculator',
    'front-end DTI',
    'back-end DTI',
    'debt ratio calculator',
    'mortgage qualification calculator',
    'housing ratio calculator',
    'DTI requirements',
    'FHA DTI limits',
    'conventional DTI',
    'VA DTI ratio',
    'mortgage eligibility',
    'debt income calculator'
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
    canonical: '/tools/debt-to-income-calculator',
  },
  openGraph: {
    title: 'Debt-to-Income (DTI) Ratio Calculator - Check Mortgage Qualification | Property Tools',
    description: 'Calculate your DTI ratio to determine if you qualify for a mortgage. Get detailed front-end and back-end DTI analysis.',
    url: '/tools/debt-to-income-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt-to-Income (DTI) Calculator - Property Tools',
    description: 'Calculate your debt-to-income ratio for mortgage qualification with our comprehensive DTI calculator.',
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
