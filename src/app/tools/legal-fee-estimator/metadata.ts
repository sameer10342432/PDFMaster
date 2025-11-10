import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Legal Fee Estimator | Calculate Attorney Costs for Property',
  description: 'Estimate real estate attorney fees for property transactions. Calculate legal costs for home purchase, sale, refinance, contract review, and title work.',
  keywords: [
    'real estate attorney fees',
    'legal fee calculator',
    'closing attorney cost',
    'real estate lawyer fees',
    'property attorney cost',
    'title attorney fees',
    'real estate legal costs',
    'lawyer fee estimator',
    'contract review fees',
    'closing legal fees',
    'real estate attorney rates',
    'property transaction costs',
    'legal closing costs',
    'attorney fee estimate',
    'property lawyer cost'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/legal-fee-estimator',
  },
  openGraph: {
    title: 'Real Estate Legal Fee Estimator',
    description: 'Calculate attorney fees for property purchase, sale, refinance, and contract review. Plan your legal costs accurately.',
    url: '/tools/legal-fee-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Legal Fee Estimator',
    description: 'Estimate attorney costs for residential and commercial real estate transactions.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
