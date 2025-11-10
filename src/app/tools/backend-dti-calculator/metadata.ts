import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Back-End DTI Calculator - Total Debt-to-Income Ratio Calculator | Property Tools',
  description: 'Calculate your back-end DTI ratio (total debt ratio). Includes all monthly debts - mortgage, cars, loans, credit cards. Target 36-43% for loan approval with our free calculator.',
  keywords: [
    'back-end DTI calculator',
    'total debt ratio calculator',
    'back-end debt to income',
    'total DTI calculator',
    '43% DTI rule',
    'total debt ratio',
    'mortgage qualification calculator',
    'debt to income all debts',
    'back-end ratio',
    'total monthly obligations',
    'loan approval calculator'
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
    canonical: '/tools/backend-dti-calculator',
  },
  openGraph: {
    title: 'Back-End DTI Calculator - Total Debt Ratio Calculator',
    description: 'Free back-end DTI calculator. Calculate your total debt-to-income ratio including all monthly debts. Target 43% or lower for mortgage approval.',
    url: '/tools/backend-dti-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-backend-dti-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Back-End DTI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back-End DTI Calculator - Total Debt Ratio Calculator',
    description: 'Calculate your back-end DTI ratio with all monthly debts included.',
    images: ['/og-backend-dti-calculator.jpg'],
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
