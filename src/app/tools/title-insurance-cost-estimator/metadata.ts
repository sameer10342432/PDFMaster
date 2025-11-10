import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Title Insurance Cost Estimator | Calculate Title Fees for Home Purchase',
  description: 'Estimate title insurance costs for your home purchase. Calculate owner\'s policy and lender\'s policy fees based on purchase price and location. Compare title company rates.',
  keywords: [
    'title insurance calculator',
    'title insurance cost',
    'title insurance estimator',
    'closing cost calculator',
    'owner title policy',
    'lender title insurance',
    'title company fees',
    'title insurance rates',
    'closing title fees',
    'property title insurance',
    'title insurance premium',
    'title company comparison',
    'title insurance quote',
    'title policy cost',
    'real estate title fees'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/title-insurance-cost-estimator',
  },
  openGraph: {
    title: 'Title Insurance Cost Estimator',
    description: 'Calculate title insurance costs for your home purchase including owner\'s and lender\'s policies.',
    url: '/tools/title-insurance-cost-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title Insurance Cost Estimator',
    description: 'Estimate title insurance fees and compare rates from different title companies.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
