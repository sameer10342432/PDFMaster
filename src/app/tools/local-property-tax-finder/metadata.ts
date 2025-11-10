import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Property Tax Rate Finder by County | Free Tax Rate Lookup Tool',
  description: 'Find local property tax rates by county across the United States. Compare county, city, and school district tax rates. Essential tool for homebuyers and real estate investors.',
  keywords: [
    'property tax rate finder',
    'property tax by county',
    'county tax rates',
    'local property tax lookup',
    'property tax comparison',
    'city tax rates',
    'school district tax rates',
    'real estate tax finder',
    'property tax research',
    'tax rate comparison tool',
    'effective tax rate',
    'millage rate finder',
    'property tax planning',
    'county property tax',
    'state property tax rates'
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
    canonical: '/tools/local-property-tax-finder',
  },
  openGraph: {
    title: 'Local Property Tax Rate Finder by County | Property Tools',
    description: 'Find and compare local property tax rates by county across the United States. Research county, city, and school district tax rates before buying property.',
    url: '/tools/local-property-tax-finder',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-property-tax-finder.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Tax Rate Finder Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Property Tax Rate Finder by County',
    description: 'Find and compare local property tax rates by county across the United States. Essential research tool for property buyers and investors.',
    images: ['/og-property-tax-finder.jpg'],
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
    google: 'your-google-verification-code',
  },
};
