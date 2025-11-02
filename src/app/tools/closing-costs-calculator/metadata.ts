import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Closing Costs Calculator | Estimate Home Buying & Selling Fees - Property Tools',
  description: 'Calculate comprehensive closing costs for buying or selling property. Get detailed breakdown of fees, taxes, insurance, and third-party charges with our free closing costs calculator.',
  keywords: [
    'closing costs calculator',
    'home buying fees',
    'property closing costs',
    'real estate transaction costs',
    'settlement costs',
    'title insurance calculator',
    'escrow fees',
    'attorney fees calculator',
    'home inspection costs',
    'appraisal fees',
    'recording fees',
    'transfer taxes',
    'origination fees',
    'closing cost estimator',
    'buyer closing costs',
    'seller closing costs',
    'mortgage closing costs',
    'real estate fees calculator',
    'property transaction fees',
    'closing cost breakdown'
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
    title: 'Closing Costs Calculator | Estimate Home Buying & Selling Fees',
    description: 'Calculate comprehensive closing costs for buying or selling property. Get detailed breakdown of fees, taxes, insurance, and third-party charges.',
    url: 'https://propertytools.com/tools/closing-costs-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://propertytools.com/images/closing-costs-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Closing Costs Calculator - Estimate Home Buying & Selling Fees',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Closing Costs Calculator | Estimate Home Buying & Selling Fees',
    description: 'Calculate comprehensive closing costs for buying or selling property. Get detailed breakdown of fees, taxes, insurance, and third-party charges.',
    images: ['https://propertytools.com/images/closing-costs-calculator-twitter.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: 'https://propertytools.com/tools/closing-costs-calculator',
  },
}