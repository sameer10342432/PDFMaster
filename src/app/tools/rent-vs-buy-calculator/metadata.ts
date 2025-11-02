import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rent vs Buy Calculator - Compare Renting vs Buying Property Costs & Break-Even Analysis | Property Tools',
  description: 'Compare renting vs buying property with comprehensive cost analysis. Calculate stamp duty, ongoing costs, property growth, investment returns, and break-even points. Make informed housing decisions with detailed financial projections.',
  keywords: [
    'rent vs buy calculator',
    'rent or buy property Australia',
    'property decision calculator',
    'home buying vs renting',
    'rent vs mortgage calculator',
    'property investment decision',
    'Australian property calculator',
    'rent vs buy analysis',
    'housing decision tool',
    'property cost comparison',
    'rent vs own calculator',
    'property affordability tool',
    'home ownership calculator',
    'rental vs purchase analysis',
    'property financial calculator'
  ],
  authors: [{ name: 'Property Tools Australia' }],
  creator: 'Property Tools Australia',
  publisher: 'Property Tools Australia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com.au'),
  alternates: {
    canonical: '/tools/rent-vs-buy-calculator',
  },
  openGraph: {
    title: 'Rent vs Buy Calculator Australia | Property Decision Tool',
    description: 'Compare renting vs buying property in Australia. Calculate total costs, break-even points, and make informed housing decisions with our comprehensive rent vs buy calculator.',
    url: '/tools/rent-vs-buy-calculator',
    siteName: 'Property Tools Australia',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/rent-vs-buy-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rent vs Buy Calculator - Property Tools Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent vs Buy Calculator Australia | Property Decision Tool',
    description: 'Compare renting vs buying property in Australia. Calculate total costs, break-even points, and make informed housing decisions with our comprehensive rent vs buy calculator.',
    images: ['/images/rent-vs-buy-calculator-twitter.jpg'],
    creator: '@PropertyToolsAU',
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
    google: 'your-google-verification-code',
  },
}