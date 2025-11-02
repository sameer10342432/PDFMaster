import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Yield Calculator - Calculate Property Investment Returns | Property Tools',
  description: 'Calculate rental yield, gross yield, net yield, and cash-on-cash returns for investment properties. Free rental yield calculator with comprehensive investment analysis and market insights.',
  keywords: [
    'rental yield calculator',
    'property investment calculator',
    'gross rental yield',
    'net rental yield',
    'cash on cash return',
    'investment property returns',
    'property yield analysis',
    'rental income calculator',
    'property investment analysis',
    'real estate yield calculator',
    'investment property calculator',
    'rental property returns',
    'property investment metrics',
    'rental yield formula',
    'investment property evaluation'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
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
  openGraph: {
    title: 'Rental Yield Calculator - Calculate Property Investment Returns',
    description: 'Calculate rental yield, gross yield, net yield, and cash-on-cash returns for investment properties. Free calculator with comprehensive investment analysis.',
    url: 'https://propertytools.com.au/tools/rental-yield-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: 'https://propertytools.com.au/images/rental-yield-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rental Yield Calculator - Property Investment Returns',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Yield Calculator - Calculate Property Investment Returns',
    description: 'Calculate rental yield, gross yield, net yield, and cash-on-cash returns for investment properties. Free calculator with investment analysis.',
    images: ['https://propertytools.com.au/images/rental-yield-calculator-twitter.jpg'],
    creator: '@PropertyToolsAU',
  },
  alternates: {
    canonical: 'https://propertytools.com.au/tools/rental-yield-calculator',
  },
  category: 'Real Estate Tools',
};