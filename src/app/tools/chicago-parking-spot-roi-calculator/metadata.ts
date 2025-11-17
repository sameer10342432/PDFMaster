import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Parking Spot ROI Calculator - Deeded Parking Investment | Property Tools',
  description: 'Calculate ROI for buying a Chicago parking spot including rental income, appreciation, property taxes, and HOA fees. Analyze deeded parking space investments.',
  keywords: [
    'chicago parking spot',
    'parking spot investment',
    'deeded parking chicago',
    'chicago parking roi',
    'parking spot rental income',
    'chicago condo parking',
    'parking space investment',
    'chicago parking prices',
    'river north parking',
    'loop parking spot',
    'gold coast parking',
    'lincoln park parking',
    'chicago parking rental',
    'parking investment calculator',
    'chicago real estate parking',
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
    canonical: '/tools/chicago-parking-spot-roi-calculator',
  },
  openGraph: {
    title: 'Chicago Parking Spot ROI Calculator',
    description: 'Calculate return on investment for Chicago parking spots including rental income, appreciation, and operating costs.',
    url: '/tools/chicago-parking-spot-roi-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-chicago-parking.jpg',
        width: 1200,
        height: 630,
        alt: 'Chicago Parking Spot ROI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Parking Spot ROI Calculator',
    description: 'Calculate ROI for Chicago deeded parking spots with rental income projections and appreciation analysis.',
    images: ['/og-chicago-parking.jpg'],
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
