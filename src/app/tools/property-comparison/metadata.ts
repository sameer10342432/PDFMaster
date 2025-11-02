import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Comparison Tool - Compare Real Estate Properties Side by Side | Property Tools',
  description: 'Compare multiple properties side by side with our comprehensive comparison tool. Analyze prices, features, locations, and investment potential to make informed real estate decisions.',
  keywords: [
    'property comparison tool',
    'real estate comparison',
    'property comparison calculator',
    'compare properties',
    'home comparison tool',
    'real estate analysis',
    'property evaluation',
    'side by side property comparison',
    'property investment comparison',
    'real estate decision tool',
    'property features comparison',
    'home buying comparison',
    'property price comparison',
    'real estate comparison chart',
    'property analysis tool'
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
    canonical: '/tools/property-comparison',
  },
  openGraph: {
    title: 'Property Comparison Tool - Compare Real Estate Properties Side by Side',
    description: 'Compare multiple properties side by side with our comprehensive comparison tool. Analyze prices, features, locations, and investment potential.',
    url: '/tools/property-comparison',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/property-comparison-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Comparison Tool - Compare Real Estate Properties Side by Side',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Comparison Tool - Compare Real Estate Properties Side by Side',
    description: 'Compare multiple properties side by side. Analyze prices, features, locations, and investment potential to make informed decisions.',
    images: ['/images/property-comparison-twitter.jpg'],
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