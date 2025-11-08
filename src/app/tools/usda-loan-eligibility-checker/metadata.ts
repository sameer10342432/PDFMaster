import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USDA Loan Eligibility Checker - Check Rural Development Loan Qualification | Property Tools',
  description: 'Check your eligibility for USDA rural development home loans. Verify income limits, location requirements, credit score criteria, and approval paths for 100% financing with no down payment.',
  keywords: [
    'USDA loan eligibility',
    'rural development loan',
    'USDA home loan',
    'zero down payment mortgage',
    'rural housing loan',
    'USDA income limits',
    'rural loan qualification',
    'USDA loan requirements',
    'no down payment loan',
    'USDA eligibility calculator',
    'rural homebuyer',
    'USDA approved areas',
    'USDA loan checker',
    'rural property financing',
    '100% financing'
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
    canonical: '/tools/usda-loan-eligibility-checker',
  },
  openGraph: {
    title: 'USDA Loan Eligibility Checker - Verify Your Qualification | Property Tools',
    description: 'Find out if you qualify for a USDA rural development loan with 100% financing and no down payment required.',
    url: '/tools/usda-loan-eligibility-checker',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USDA Loan Eligibility Checker - Property Tools',
    description: 'Check your eligibility for USDA rural development home loans with our comprehensive eligibility checker.',
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
