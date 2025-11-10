import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Texas Transfer Tax Calculator - Recording Fees & Closing Costs | Property Tools',
  description: 'Calculate Texas real estate transfer costs and recording fees. Texas has no state transfer tax - learn what you actually pay when buying or selling property in Texas. Includes county recording fees, title insurance estimates, and cost comparisons.',
  keywords: [
    'texas transfer tax',
    'texas real estate transfer tax',
    'texas recording fees',
    'texas closing costs',
    'texas deed recording',
    'texas title insurance',
    'texas property transfer costs',
    'no transfer tax texas',
    'texas county recording fees',
    'texas real estate fees',
    'texas seller closing costs',
    'texas buyer closing costs'
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
    canonical: '/tools/texas-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Texas Transfer Tax Calculator - No State Transfer Tax',
    description: 'Calculate Texas real estate transfer costs. Texas has no state transfer tax - discover what you actually pay for recording fees, title insurance, and closing costs.',
    url: '/tools/texas-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-texas-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Texas Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Transfer Tax Calculator - No State Transfer Tax',
    description: 'Calculate Texas real estate transfer costs. Texas has no state transfer tax - see what you actually pay at closing.',
    images: ['/og-texas-transfer-tax.jpg'],
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
};
