import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI Calculator - Calculate Real Estate Return on Investment, Cash Flow & Appreciation | Property Tools',
  description: 'Calculate comprehensive real estate ROI including cash flow, property appreciation, tax benefits, and cap rates. Analyze total returns, annual ROI, and cash-on-cash returns for rental properties over multiple years.',
  keywords: [
    'ROI calculator',
    'return on investment calculator',
    'real estate ROI',
    'property investment calculator',
    'cash flow calculator',
    'rental property ROI',
    'investment property calculator',
    'real estate returns',
    'property investment analysis',
    'rental yield calculator',
    'cap rate calculator',
    'cash on cash return',
    'investment property analysis',
    'real estate investment calculator',
    'property ROI analysis'
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
    canonical: '/tools/roi-calculator',
  },
  openGraph: {
    title: 'ROI Calculator - Real Estate Return on Investment Calculator',
    description: 'Calculate your real estate ROI with our comprehensive calculator. Analyze cash flow, appreciation, tax benefits, and total returns on your property investments.',
    url: '/tools/roi-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/roi-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ROI Calculator - Real Estate Return on Investment Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculator - Real Estate Return on Investment Calculator',
    description: 'Calculate your real estate ROI with our comprehensive calculator. Analyze cash flow, appreciation, tax benefits, and total returns.',
    images: ['/images/roi-calculator-twitter.jpg'],
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