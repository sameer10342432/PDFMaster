import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Credit Score Improvement Simulator for Mortgage - Calculate Savings | Property Tools',
  description: 'Simulate credit score improvements and see how different actions impact your mortgage rates and savings. Model debt paydown, error removal, and perfect payment history to project rate reductions and monthly savings.',
  keywords: [
    'credit score simulator',
    'credit improvement calculator',
    'mortgage credit simulator',
    'credit score impact',
    'improve credit score',
    'credit repair simulator',
    'mortgage rate savings',
    'credit utilization impact',
    'credit improvement strategy',
    'FICO score simulator',
    'credit score projection',
    'debt paydown calculator',
    'credit repair calculator',
    'mortgage savings calculator',
    'credit score improvement'
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
    canonical: '/tools/credit-score-improvement-simulator',
  },
  openGraph: {
    title: 'Credit Score Improvement Simulator - See Mortgage Savings | Property Tools',
    description: 'Simulate credit score improvements and calculate potential mortgage savings with better rates.',
    url: '/tools/credit-score-improvement-simulator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Score Improvement Simulator - Property Tools',
    description: 'Model credit score improvements and see how they impact your mortgage rate and monthly payment.',
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
