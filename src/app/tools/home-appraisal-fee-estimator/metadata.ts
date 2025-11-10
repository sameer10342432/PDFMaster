import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Appraisal Fee Estimator | Calculate Appraisal Costs by Property Type',
  description: 'Estimate home appraisal costs based on property type, size, and location. Compare fees for conventional, FHA, VA appraisals. Budget accurately for closing costs.',
  keywords: [
    'appraisal fee calculator',
    'home appraisal cost',
    'appraisal estimator',
    'property appraisal fees',
    'FHA appraisal cost',
    'VA appraisal fee',
    'conventional appraisal',
    'closing cost appraisal',
    'home valuation cost',
    'appraisal price estimate',
    'real estate appraisal fee',
    'property valuation cost',
    'appraisal budget',
    'appraisal comparison',
    'home inspection cost'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/home-appraisal-fee-estimator',
  },
  openGraph: {
    title: 'Home Appraisal Fee Estimator',
    description: 'Calculate home appraisal costs based on property type and location. Compare FHA, VA, and conventional appraisal fees.',
    url: '/tools/home-appraisal-fee-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Appraisal Fee Estimator',
    description: 'Estimate appraisal costs for different property types and loan programs.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
