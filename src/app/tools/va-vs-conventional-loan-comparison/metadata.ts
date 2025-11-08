import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA vs. Conventional Loan Comparison - Compare Benefits, Rates & Requirements | Property Tools',
  description: 'Compare VA and conventional loans side-by-side. Analyze monthly payments, total interest, funding fees, PMI costs, and lifetime savings. Find the best mortgage option for veterans and military members.',
  keywords: [
    'VA vs conventional loan',
    'VA loan comparison',
    'military home loan',
    'veterans mortgage benefits',
    'VA funding fee',
    'conventional vs VA mortgage',
    'no down payment loan',
    'VA loan calculator',
    'mortgage comparison tool',
    'military benefits calculator',
    'home loan comparison',
    'VA loan advantages',
    'conventional loan PMI',
    'veterans home buying',
    'military mortgage options'
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
    canonical: '/tools/va-vs-conventional-loan-comparison',
  },
  openGraph: {
    title: 'VA vs. Conventional Loan Comparison - Find Your Best Option | Property Tools',
    description: 'Compare VA and conventional mortgages side-by-side. See how much you can save with a VA loan vs conventional financing for military and veteran homebuyers.',
    url: '/tools/va-vs-conventional-loan-comparison',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VA vs. Conventional Loan Comparison - Property Tools',
    description: 'Compare VA and conventional loans to find the best mortgage option for veterans and military members.',
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
