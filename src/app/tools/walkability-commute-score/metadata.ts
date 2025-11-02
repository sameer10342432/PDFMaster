import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Walkability & Commute Score Calculator | Property Tools',
  description: 'Evaluate neighborhood walkability and commute convenience with our comprehensive scoring tool. Analyze public transport, pedestrian infrastructure, amenities access, and commute times to make informed property decisions.',
  keywords: [
    'walkability score',
    'commute calculator',
    'public transport access',
    'pedestrian infrastructure',
    'neighborhood amenities',
    'walk score',
    'transit score',
    'bike score',
    'commute time calculator',
    'transportation analysis',
    'property location analysis',
    'urban planning',
    'sustainable transport',
    'car-free living',
    'public transit',
    'walking distance',
    'cycling infrastructure',
    'accessibility score',
    'mobility assessment',
    'transport connectivity'
  ],
  authors: [{ name: 'Property Tools Team' }],
  openGraph: {
    title: 'Walkability & Commute Score Calculator - Analyze Transportation Convenience',
    description: 'Comprehensive tool to evaluate neighborhood walkability, public transport access, and commute convenience for better property decisions.',
    type: 'website',
    url: 'https://propertytools.com/tools/walkability-commute-score',
    siteName: 'Property Tools',
    images: [
      {
        url: 'https://propertytools.com/og-walkability-commute-score.jpg',
        width: 1200,
        height: 630,
        alt: 'Walkability & Commute Score Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walkability & Commute Score Calculator | Property Tools',
    description: 'Evaluate neighborhood walkability and commute convenience with comprehensive transportation analysis.',
    images: ['https://propertytools.com/twitter-walkability-commute-score.jpg']
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
  alternates: {
    canonical: 'https://propertytools.com/tools/walkability-commute-score'
  }
}