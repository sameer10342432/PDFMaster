import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovation Cost Estimator - Calculate Home Improvement Costs by Room & Quality Level | Property Tools',
  description: 'Estimate renovation costs for kitchen, bathroom, and room improvements. Get detailed cost breakdowns by material quality (basic, mid-range, high-end), project scope, and room size. Plan your renovation budget with comprehensive cost analysis.',
  keywords: [
    'renovation cost estimator',
    'home improvement calculator',
    'remodeling cost calculator',
    'renovation budget planner',
    'home renovation costs',
    'kitchen renovation cost',
    'bathroom renovation cost',
    'room renovation calculator',
    'construction cost estimator',
    'home improvement budget',
    'renovation planning tool',
    'remodeling expenses',
    'home upgrade costs',
    'interior renovation cost',
    'property improvement calculator'
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
    title: 'Renovation Cost Estimator | Property Tools',
    description: 'Calculate accurate renovation costs for your home improvement projects. Get detailed estimates by room, materials, and project scope.',
    url: '/tools/renovation-cost-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/renovation-cost-estimator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Renovation Cost Estimator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renovation Cost Estimator | Property Tools',
    description: 'Calculate accurate renovation costs for your home improvement projects. Get detailed estimates by room, materials, and project scope.',
    images: ['/images/renovation-cost-estimator-twitter.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: '/tools/renovation-cost-estimator',
  },
}