import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HELOC vs. Cash-Out Refinance Calculator - Compare Options | Property Tools',
  description: 'Compare HELOC vs cash-out refinance side-by-side. Calculate payments, total costs, and determine which option saves you more money with our free calculator.',
  keywords: [
    'HELOC vs cash-out refinance',
    'home equity comparison',
    'HELOC or refinance calculator',
    'cash-out vs HELOC',
    'home equity options',
    'HELOC calculator',
    'cash-out refinance comparison',
    'which is better HELOC or refinance',
    'home equity loan comparison',
    'tap home equity calculator'
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
    canonical: '/tools/heloc-vs-cashout-refinance-calculator',
  },
  openGraph: {
    title: 'HELOC vs. Cash-Out Refinance Calculator - Compare Options',
    description: 'Free comparison calculator for HELOC vs cash-out refinance. See which option saves you more money based on your situation.',
    url: '/tools/heloc-vs-cashout-refinance-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-heloc-vs-cashout-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'HELOC vs Cash-Out Refinance Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HELOC vs. Cash-Out Refinance Calculator',
    description: 'Compare HELOC and cash-out refinance options side-by-side.',
    images: ['/og-heloc-vs-cashout-calculator.jpg'],
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
