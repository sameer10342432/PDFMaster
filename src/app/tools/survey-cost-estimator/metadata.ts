import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Survey Cost Estimator | Land Survey Fee Calculator',
  description: 'Estimate property survey costs based on lot size, terrain, and survey type. Calculate fees for boundary, ALTA, topographic, and subdivision surveys.',
  keywords: [
    'land survey cost',
    'property survey estimator',
    'boundary survey cost',
    'ALTA survey fee',
    'topographic survey',
    'land survey calculator',
    'property survey fees',
    'survey cost estimate',
    'surveyor fees',
    'lot survey cost',
    'property boundary survey',
    'subdivision survey',
    'mortgage survey cost',
    'survey price estimate',
    'land surveyor rates'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/survey-cost-estimator',
  },
  openGraph: {
    title: 'Property Survey Cost Estimator',
    description: 'Calculate land survey costs for boundary, ALTA, topographic surveys based on property size and complexity.',
    url: '/tools/survey-cost-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Survey Cost Estimator',
    description: 'Estimate surveyor fees for different types of land and property surveys.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
