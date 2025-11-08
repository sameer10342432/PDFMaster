import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Rate by Credit Score Estimator - Calculate Rate Impact | Property Tools',
  description: 'Estimate mortgage interest rates based on your credit score. See how credit affects monthly payments and total interest costs. Compare rates across credit score tiers from excellent (760+) to poor (620-659).',
  keywords: [
    'mortgage rate by credit score',
    'credit score mortgage rate',
    'interest rate estimator',
    'credit score impact',
    'mortgage rate calculator',
    'credit score tiers',
    'mortgage interest by credit',
    'credit rating mortgage',
    'loan rate estimator',
    'credit score savings',
    'mortgage rate tiers',
    'credit impact calculator',
    'interest rate by FICO',
    'mortgage APR calculator',
    'credit-based pricing'
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
    canonical: '/tools/mortgage-rate-credit-score-estimator',
  },
  openGraph: {
    title: 'Mortgage Rate by Credit Score Estimator - See Rate Impact | Property Tools',
    description: 'Find out how your credit score affects your mortgage interest rate and monthly payment with our rate estimator.',
    url: '/tools/mortgage-rate-credit-score-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Rate by Credit Score Estimator - Property Tools',
    description: 'Estimate mortgage rates based on your credit score and see potential savings.',
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
