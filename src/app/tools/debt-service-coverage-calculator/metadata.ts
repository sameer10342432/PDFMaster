import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debt Service Coverage Calculator | Property Tools',
  description: 'Calculate debt service coverage ratio (DSCR) for real estate investments. Analyze loan qualification, cash flow, and investment viability with our comprehensive DSCR calculator and educational guide.',
  keywords: [
    'debt service coverage calculator',
    'DSCR calculator',
    'debt service coverage ratio',
    'real estate loan qualification',
    'investment property financing',
    'cash flow analysis',
    'NOI calculator',
    'debt service ratio',
    'commercial real estate financing',
    'rental property loans',
    'investment property analysis',
    'loan underwriting',
    'property cash flow',
    'real estate investment metrics',
    'DSCR requirements'
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
    canonical: '/tools/debt-service-coverage-calculator',
  },
  openGraph: {
    title: 'Debt Service Coverage Calculator | Property Tools',
    description: 'Calculate debt service coverage ratio (DSCR) for real estate investments. Analyze loan qualification, cash flow, and investment viability with our comprehensive DSCR calculator.',
    url: '/tools/debt-service-coverage-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Debt Service Coverage Calculator - Real Estate Investment Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Service Coverage Calculator | Property Tools',
    description: 'Calculate DSCR for real estate investments. Analyze loan qualification and cash flow with our comprehensive calculator.',
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
    google: 'your-google-verification-code',
  },
}