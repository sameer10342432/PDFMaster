import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Front-End DTI Calculator - Housing Debt-to-Income Ratio Calculator | Property Tools',
  description: 'Calculate your front-end DTI ratio (housing ratio). Most lenders prefer 28% or lower for housing costs. Check if your mortgage payment fits your budget with our free calculator.',
  keywords: [
    'front-end DTI calculator',
    'housing ratio calculator',
    'front-end debt ratio',
    '28 percent rule',
    'housing debt to income',
    'mortgage payment ratio',
    'PITI calculator',
    'housing expense ratio',
    'front-end ratio',
    'housing affordability ratio',
    'mortgage qualification calculator'
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
    canonical: '/tools/frontend-dti-calculator',
  },
  openGraph: {
    title: 'Front-End DTI Calculator - Housing Ratio Calculator',
    description: 'Free front-end DTI calculator. Calculate your housing ratio (mortgage + taxes + insurance + HOA) to income ratio. Target 28% or lower.',
    url: '/tools/frontend-dti-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-frontend-dti-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Front-End DTI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Front-End DTI Calculator - Housing Ratio Calculator',
    description: 'Calculate your front-end DTI ratio to ensure affordable housing payments.',
    images: ['/og-frontend-dti-calculator.jpg'],
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
