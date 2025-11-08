import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA Loan Entitlement Calculator - Calculate Available Entitlement & Maximum Loan | Property Tools',
  description: 'Calculate your available VA loan entitlement and maximum purchase price with zero down payment. Determine basic and bonus entitlement for standard and high-cost counties. Track remaining entitlement with existing VA loans.',
  keywords: [
    'VA loan entitlement',
    'VA entitlement calculator',
    'VA loan benefit calculator',
    'VA loan maximum',
    'VA bonus entitlement',
    'VA basic entitlement',
    'VA home loan benefit',
    'VA remaining entitlement',
    'veterans mortgage calculator',
    'VA loan amount calculator',
    'VA second home entitlement',
    'VA loan eligibility',
    'military home loan benefit',
    'VA loan guarantee',
    'VA certificate of eligibility'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/va-loan-entitlement-calculator',
  },
  openGraph: {
    title: 'VA Loan Entitlement Calculator - Calculate Your VA Benefits | Property Tools',
    description: 'Calculate your available VA loan entitlement and find out how much you can borrow with zero down payment.',
    url: '/tools/va-loan-entitlement-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VA Loan Entitlement Calculator - Property Tools',
    description: 'Calculate your VA loan entitlement and maximum purchase price with our comprehensive calculator.',
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
};
