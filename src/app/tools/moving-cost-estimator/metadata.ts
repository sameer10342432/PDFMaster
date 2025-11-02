import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Moving Cost Estimator - Calculate Local & Long-Distance Moving Costs, Packing & Labor | Property Tools',
  description: 'Estimate moving costs for local and long-distance relocations. Get detailed quotes for packing services, labor costs, truck rental, storage, and additional services. Calculate costs by room inventory and distance.',
  keywords: [
    'moving cost calculator',
    'relocation expenses',
    'moving estimate',
    'moving company quotes',
    'packing costs',
    'long distance moving',
    'local moving costs',
    'moving budget planner',
    'household moving',
    'commercial moving',
    'moving services pricing',
    'moving cost breakdown'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Moving Cost Estimator - Calculate Your Relocation Expenses',
    description: 'Get accurate moving cost estimates for your relocation. Compare local vs long-distance rates, packing services, and additional moving expenses.',
    type: 'website',
    url: 'https://propertytools.com/tools/moving-cost-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moving Cost Estimator - Calculate Your Relocation Expenses',
    description: 'Get accurate moving cost estimates for your relocation. Compare local vs long-distance rates, packing services, and additional moving expenses.',
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
  alternates: {
    canonical: 'https://propertytools.com/tools/moving-cost-estimator',
  },
}