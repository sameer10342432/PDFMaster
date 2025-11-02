import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Design Cost Estimator | Room-by-Room Design Budget Calculator',
  description: 'Calculate interior design costs with our comprehensive estimator. Get detailed room-by-room pricing, material costs, labor estimates, and design style budgets for your home renovation project.',
  keywords: [
    'interior design cost calculator',
    'room design budget estimator',
    'home renovation cost calculator',
    'interior design pricing',
    'design budget planner',
    'room makeover cost',
    'interior decorator fees',
    'home design expenses',
    'renovation budget calculator',
    'interior design consultation cost',
    'furniture budget calculator',
    'design project estimator',
    'home styling costs',
    'interior design investment',
    'room renovation budget'
  ],
  authors: [{ name: 'Property Tools' }],
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
    title: 'Interior Design Cost Estimator | Room-by-Room Design Budget Calculator',
    description: 'Calculate interior design costs with our comprehensive estimator. Get detailed room-by-room pricing, material costs, labor estimates, and design style budgets for your home renovation project.',
    url: 'https://propertytools.com/tools/interior-design-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://propertytools.com/og-interior-design-estimator.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Design Cost Estimator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Cost Estimator | Room-by-Room Design Budget Calculator',
    description: 'Calculate interior design costs with our comprehensive estimator. Get detailed room-by-room pricing, material costs, labor estimates, and design style budgets.',
    images: ['https://propertytools.com/twitter-interior-design-estimator.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: 'https://propertytools.com/tools/interior-design-estimator',
  },
}