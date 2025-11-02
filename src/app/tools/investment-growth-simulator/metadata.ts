import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Growth Simulator | Real Estate Investment Calculator & Analysis Tool',
  description: 'Calculate and visualize real estate investment growth with our comprehensive simulator. Analyze rental income, appreciation, tax benefits, and total returns over time with detailed projections and scenarios.',
  keywords: [
    'investment growth simulator',
    'real estate investment calculator',
    'property investment analysis',
    'rental property calculator',
    'investment returns calculator',
    'real estate ROI simulator',
    'property appreciation calculator',
    'investment projection tool',
    'rental income calculator',
    'real estate investment planning',
    'property investment growth',
    'investment scenario analysis',
    'real estate portfolio calculator',
    'investment performance tracker',
    'property investment simulator'
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
    title: 'Investment Growth Simulator | Real Estate Investment Calculator',
    description: 'Calculate and visualize real estate investment growth with comprehensive analysis of rental income, appreciation, and total returns over time.',
    url: '/tools/investment-growth-simulator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-investment-growth-simulator.jpg',
        width: 1200,
        height: 630,
        alt: 'Investment Growth Simulator - Real Estate Investment Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Growth Simulator | Real Estate Investment Calculator',
    description: 'Calculate and visualize real estate investment growth with comprehensive analysis of rental income, appreciation, and total returns.',
    images: ['/og-investment-growth-simulator.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: '/tools/investment-growth-simulator',
  },
  category: 'Real Estate Tools',
  classification: 'Real Estate Investment Calculator',
  other: {
    'application-name': 'Property Tools',
    'msapplication-TileColor': '#10b981',
    'theme-color': '#10b981',
  },
}