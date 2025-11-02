import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator - Calculate Property Transfer Tax | Property Tools',
  description: 'Calculate stamp duty and transfer taxes for property purchases across different states and countries. Get accurate estimates for your real estate transaction costs.',
  keywords: [
    'stamp duty calculator',
    'property transfer tax',
    'real estate transfer tax',
    'stamp duty rates',
    'property tax calculator',
    'transfer tax calculator',
    'closing costs calculator',
    'property purchase tax',
    'stamp duty exemptions',
    'first time buyer stamp duty',
    'property transaction costs',
    'real estate fees calculator',
    'land transfer tax',
    'property registration fees',
    'stamp duty relief'
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
    canonical: '/tools/stamp-duty-calculator',
  },
  openGraph: {
    title: 'Stamp Duty Calculator - Property Transfer Tax Calculator | Property Tools',
    description: 'Calculate stamp duty and transfer taxes for property purchases. Get accurate estimates for closing costs and government fees.',
    url: '/tools/stamp-duty-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/stamp-duty-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Stamp Duty Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator - Property Tools',
    description: 'Calculate stamp duty and transfer taxes for property purchases. Accurate estimates for real estate transaction costs.',
    images: ['/images/stamp-duty-calculator-twitter.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};