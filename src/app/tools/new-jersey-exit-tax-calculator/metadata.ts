import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Jersey Exit Tax Calculator - Calculate NJ Withholding When Selling | Property Tools',
  description: 'Calculate New Jersey exit tax (estimated income tax withholding) when selling your home. Estimate 8.97% withholding, understand waiver options, and calculate potential refunds.',
  keywords: [
    'new jersey exit tax',
    'nj exit tax calculator',
    'new jersey departure tax',
    'nj withholding on home sale',
    'git rep 3 waiver',
    'new jersey estimated tax withholding',
    'nj exit tax 2024',
    'selling home in new jersey',
    'nj capital gains withholding',
    'new jersey exit tax refund',
    'nj moving out of state tax',
    'new jersey departure tax calculator',
    'git rep form new jersey',
    'nj 8.97 percent tax',
    'new jersey real estate withholding',
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
    canonical: '/tools/new-jersey-exit-tax-calculator',
  },
  openGraph: {
    title: 'New Jersey Exit Tax Calculator',
    description: 'Calculate NJ exit tax withholding when selling your home and moving out of state. Estimate 8.97% withholding and understand waiver options.',
    url: '/tools/new-jersey-exit-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-nj-exit-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'New Jersey Exit Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Jersey Exit Tax Calculator',
    description: 'Calculate NJ exit tax withholding when selling your home. Understand the 8.97% withholding requirement and potential refunds.',
    images: ['/og-nj-exit-tax.jpg'],
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
