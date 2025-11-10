import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Property Listing Description Generator | Create Compelling Real Estate Listings',
  description: 'Generate professional property listing descriptions using AI. Create engaging MLS listings, highlight features, and attract buyers with SEO-optimized descriptions.',
  keywords: [
    'AI property listing generator',
    'real estate description writer',
    'MLS listing generator',
    'property description AI',
    'listing description tool',
    'real estate copywriting',
    'property listing creator',
    'AI real estate writer',
    'listing description generator',
    'property marketing copy',
    'MLS description writer',
    'real estate listing AI',
    'property ad generator',
    'listing copy creator',
    'AI listing assistant'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-property-listing-generator',
  },
  openGraph: {
    title: 'AI Property Listing Description Generator',
    description: 'Create professional, engaging property listings with AI. Generate compelling descriptions that attract buyers and sell homes faster.',
    url: '/tools/ai-property-listing-generator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Property Listing Description Generator',
    description: 'Generate professional MLS listings and property descriptions instantly with AI assistance.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
