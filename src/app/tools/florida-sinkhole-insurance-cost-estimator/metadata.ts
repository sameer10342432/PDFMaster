import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Sinkhole Insurance Cost Estimator - Calculate Premium | Property Tools',
  description: 'Calculate Florida sinkhole insurance costs based on property value, county risk level, coverage type, and deductible. Estimate premiums for Pasco, Hernando, Hillsborough and other Florida counties.',
  keywords: [
    'florida sinkhole insurance',
    'sinkhole insurance cost',
    'florida sinkhole coverage',
    'catastrophic ground cover collapse',
    'CGCC coverage florida',
    'pasco county sinkhole insurance',
    'hernando county sinkhole',
    'hillsborough sinkhole insurance',
    'florida sinkhole premium',
    'sinkhole alley insurance',
    'florida homeowners sinkhole',
    'sinkhole deductible florida',
    'full sinkhole coverage',
    'florida geological hazard',
    'sinkhole insurance estimator',
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
    canonical: '/tools/florida-sinkhole-insurance-cost-estimator',
  },
  openGraph: {
    title: 'Florida Sinkhole Insurance Cost Estimator',
    description: 'Calculate Florida sinkhole insurance costs for all counties. Get estimates for CGCC and full coverage with customizable deductibles.',
    url: '/tools/florida-sinkhole-insurance-cost-estimator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-florida-sinkhole-insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Florida Sinkhole Insurance Cost Estimator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Sinkhole Insurance Cost Estimator',
    description: 'Calculate sinkhole insurance costs for Florida properties including high-risk Sinkhole Alley counties.',
    images: ['/og-florida-sinkhole-insurance.jpg'],
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
