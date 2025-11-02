import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rental Price Estimator | Property Tools Australia',
  description: 'Estimate fair rental prices for Australian properties using market data, comparable properties, and location factors. Get accurate rental valuations for investment decisions.',
  keywords: [
    'rental price estimator',
    'rental valuation',
    'property rental calculator',
    'rental market analysis',
    'rental yield calculator',
    'investment property rental',
    'rental price guide',
    'property rental value',
    'rental income estimator',
    'rental property calculator',
    'Australian rental market',
    'rental price comparison',
    'rental property investment',
    'rental market trends',
    'rental property analysis'
  ],
  authors: [{ name: 'Property Tools Australia' }],
  creator: 'Property Tools Australia',
  publisher: 'Property Tools Australia',
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
    title: 'Rental Price Estimator | Property Tools Australia',
    description: 'Estimate fair rental prices for Australian properties using market data, comparable properties, and location factors. Get accurate rental valuations for investment decisions.',
    url: 'https://propertytools.com.au/tools/rental-price-estimator',
    siteName: 'Property Tools Australia',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/rental-price-estimator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rental Price Estimator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Price Estimator | Property Tools Australia',
    description: 'Estimate fair rental prices for Australian properties using market data, comparable properties, and location factors.',
    images: ['/images/rental-price-estimator-twitter.jpg'],
    creator: '@PropertyToolsAU',
  },
  alternates: {
    canonical: 'https://propertytools.com.au/tools/rental-price-estimator',
  },
  other: {
    'application-name': 'Property Tools Australia',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
}