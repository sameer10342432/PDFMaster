import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval Calculator - Estimate Pre-Approval Amount | Property Tools',
  description: 'Estimate your mortgage pre-approval amount based on income, debts, credit score, and down payment. Get maximum loan amount, home price, DTI ratio, and approval likelihood for conventional, FHA, and VA loans.',
  keywords: [
    'mortgage pre-approval calculator',
    'pre-approval estimator',
    'home loan pre-approval',
    'mortgage qualification calculator',
    'pre-approval amount',
    'how much can I borrow',
    'mortgage eligibility calculator',
    'loan pre-qualification',
    'home buying budget',
    'mortgage affordability',
    'pre-approval tool',
    'lending qualification',
    'mortgage approval calculator',
    'home loan estimator',
    'mortgage pre-qual calculator'
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
    canonical: '/tools/mortgage-pre-approval-calculator',
  },
  openGraph: {
    title: 'Mortgage Pre-Approval Calculator - Estimate Your Loan Amount | Property Tools',
    description: 'Find out how much you can get pre-approved for with our comprehensive mortgage pre-approval calculator.',
    url: '/tools/mortgage-pre-approval-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Pre-Approval Calculator - Property Tools',
    description: 'Estimate your mortgage pre-approval amount based on income, credit, and debts.',
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
