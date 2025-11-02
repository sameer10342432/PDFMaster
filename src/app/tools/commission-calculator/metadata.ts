import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Commission Calculator | Calculate Agent Fees & Net Proceeds',
  description: 'Calculate real estate agent commissions, transaction fees, and net proceeds from property sales. Free commission calculator with detailed breakdowns for buyers, sellers, and agents.',
  keywords: [
    'real estate commission calculator',
    'agent commission calculator',
    'realtor fees calculator',
    'property commission calculator',
    'real estate fees',
    'agent fees',
    'commission split calculator',
    'net proceeds calculator',
    'closing costs calculator',
    'real estate transaction fees',
    'listing agent commission',
    'buyer agent commission',
    'brokerage fees',
    'real estate calculator',
    'property sale calculator'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/commission-calculator',
  },
  openGraph: {
    title: 'Real Estate Commission Calculator | Calculate Agent Fees & Net Proceeds',
    description: 'Calculate real estate agent commissions, transaction fees, and net proceeds from property sales. Free commission calculator with detailed breakdowns.',
    url: '/tools/commission-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Real Estate Commission Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Commission Calculator | Calculate Agent Fees & Net Proceeds',
    description: 'Calculate real estate agent commissions, transaction fees, and net proceeds from property sales. Free commission calculator with detailed breakdowns.',
    images: ['/placeholder-600x400.svg'],
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
    google: 'verification_token_here',
  },
}