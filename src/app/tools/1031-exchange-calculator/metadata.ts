import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1031 Exchange Calculator - Calculate Tax-Deferred Property Exchanges | Property Tools',
  description: 'Calculate tax savings with our free 1031 exchange calculator. Analyze deferred taxes, depreciation recapture, capital gains, and net benefits for like-kind property exchanges. Compare scenarios with detailed breakdowns and charts.',
  keywords: [
    '1031 exchange calculator',
    'like-kind exchange',
    'tax-deferred exchange',
    'property exchange calculator',
    'real estate exchange',
    'investment property exchange',
    'tax savings calculator',
    'replacement property calculator',
    'starker exchange',
    'simultaneous exchange',
    'delayed exchange',
    'reverse exchange'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: '1031 Exchange Calculator - Calculate Tax-Deferred Property Exchanges',
    description: 'Free 1031 exchange calculator to analyze tax-deferred property exchanges. Calculate potential tax savings, replacement property requirements, and exchange timelines.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1031 Exchange Calculator - Calculate Tax-Deferred Property Exchanges',
    description: 'Free 1031 exchange calculator to analyze tax-deferred property exchanges. Calculate potential tax savings and replacement property requirements.',
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
    canonical: '/tools/1031-exchange-calculator',
  },
  category: 'Real Estate Tools',
};