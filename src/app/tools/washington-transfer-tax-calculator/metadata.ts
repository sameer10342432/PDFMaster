import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washington Transfer Tax Calculator - Real Estate Excise Tax (REET) | Property Tools',
  description: 'Calculate Washington State real estate excise tax (REET) with graduated rates from 1.1% to 3.0%. Includes state and local REET, King County rates, and complete seller closing cost breakdown.',
  keywords: [
    'washington transfer tax',
    'washington state transfer tax',
    'washington reet',
    'washington real estate excise tax',
    'washington state reet',
    'washington closing costs',
    'king county transfer tax',
    'seattle transfer tax',
    'washington property transfer tax',
    'reet calculator',
    'washington seller closing costs',
    'wa state excise tax',
    'local reet washington',
    'graduated transfer tax',
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
    canonical: '/tools/washington-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Washington Transfer Tax Calculator - REET Graduated Rates',
    description: 'Calculate Washington real estate excise tax with graduated rates from 1.1% to 3.0%. Includes state and local REET calculations.',
    url: '/tools/washington-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-washington-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Washington Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington Transfer Tax Calculator - REET Rates',
    description: 'Calculate Washington State real estate excise tax with graduated rates from 1.1% to 3.0%.',
    images: ['/og-washington-transfer-tax.jpg'],
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
