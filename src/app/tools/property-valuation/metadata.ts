import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Valuation Tool - Estimate Property Value & Market Analysis | Property Tools',
  description: 'Free property valuation tool to estimate property values using comparable sales, market analysis, and valuation methods. Get accurate property appraisals and market insights.',
  keywords: [
    'property valuation tool',
    'property value estimator',
    'home valuation calculator',
    'property appraisal tool',
    'real estate valuation',
    'property market value',
    'home value estimator',
    'property price calculator',
    'comparative market analysis',
    'property assessment tool',
    'real estate appraisal',
    'property worth calculator',
    'home price estimator',
    'property evaluation tool',
    'market value calculator'
  ],
  authors: [{ name: 'Property Tools Team' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
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
  openGraph: {
    title: 'Property Valuation Tool - Estimate Property Value & Market Analysis',
    description: 'Free property valuation tool to estimate property values using comparable sales, market analysis, and valuation methods. Get accurate property appraisals.',
    url: 'https://propertytools.com.au/tools/property-valuation',
    siteName: 'Property Tools',
    images: [
      {
        url: 'https://propertytools.com.au/images/property-valuation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Valuation Tool - Estimate Property Value',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Valuation Tool - Estimate Property Value & Market Analysis',
    description: 'Free property valuation tool to estimate property values using comparable sales and market analysis. Get accurate property appraisals.',
    images: ['https://propertytools.com.au/images/property-valuation-twitter.jpg'],
    creator: '@PropertyToolsAU',
  },
  alternates: {
    canonical: 'https://propertytools.com.au/tools/property-valuation',
  },
  category: 'Real Estate Tools',
};