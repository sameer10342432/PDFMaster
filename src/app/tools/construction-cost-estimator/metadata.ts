import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Cost Estimator - Calculate Building Costs, Materials, Labor & Permits | Property Tools',
  description: 'Estimate construction costs for new builds and renovations. Get detailed breakdowns of materials, labor, permits, foundation, and contingency costs. Calculate cost per square foot and total project budgets.',
  keywords: [
    'construction cost estimator',
    'building cost calculator',
    'renovation cost estimator',
    'home construction costs',
    'building materials calculator',
    'labor cost estimator',
    'construction budget calculator',
    'home improvement costs',
    'remodeling cost calculator',
    'new home construction cost',
    'addition cost calculator',
    'kitchen renovation cost',
    'bathroom remodel cost',
    'roofing cost calculator',
    'flooring cost estimator',
    'permit costs calculator',
    'contractor cost estimator',
    'square foot construction cost',
    'custom home building cost',
    'commercial construction cost'
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
    title: 'Construction Cost Estimator | Building & Renovation Cost Calculator',
    description: 'Estimate construction costs for new builds, renovations, and home improvements. Get detailed breakdown of materials, labor, permits, and total project costs.',
    url: 'https://propertytools.com/tools/construction-cost-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://propertytools.com/images/construction-cost-estimator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Cost Estimator - Building & Renovation Cost Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Cost Estimator | Building & Renovation Cost Calculator',
    description: 'Estimate construction costs for new builds, renovations, and home improvements. Get detailed breakdown of materials, labor, permits, and total project costs.',
    images: ['https://propertytools.com/images/construction-cost-estimator-twitter.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: 'https://propertytools.com/tools/construction-cost-estimator',
  },
}