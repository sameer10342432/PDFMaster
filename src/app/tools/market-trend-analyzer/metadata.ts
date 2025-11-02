import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Trend Analyzer - Real Estate Market Analysis, Price Trends & Investment Insights | Property Tools',
  description: 'Analyze real estate market trends with comprehensive data insights. Track median prices, price changes, days on market, inventory levels, and sales volume. Get market forecasts and investment opportunity analysis.',
  keywords: [
    'market trend analyzer',
    'real estate market analysis',
    'property market trends',
    'housing market data',
    'real estate analytics',
    'market conditions',
    'property value trends',
    'investment market analysis',
    'real estate insights',
    'market performance',
    'property price trends',
    'housing market forecast',
    'real estate statistics',
    'market research tool',
    'property investment analysis'
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
    title: 'Market Trend Analyzer | Property Tools',
    description: 'Analyze real estate market trends with comprehensive data insights. Track property values, market conditions, and investment opportunities.',
    url: '/tools/market-trend-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/market-trend-analyzer-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Market Trend Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Trend Analyzer | Property Tools',
    description: 'Analyze real estate market trends with comprehensive data insights. Track property values, market conditions, and investment opportunities.',
    images: ['/images/market-trend-analyzer-twitter.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: '/tools/market-trend-analyzer',
  },
}