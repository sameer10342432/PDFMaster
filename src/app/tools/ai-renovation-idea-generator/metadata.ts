import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Renovation Idea Generator | Get Design Suggestions from Photos',
  description: 'Upload property photos and get AI-powered renovation ideas. Receive design suggestions, improvement recommendations, and modernization tips for any space.',
  keywords: [
    'AI renovation ideas',
    'home improvement AI',
    'design idea generator',
    'renovation suggestions',
    'AI interior design',
    'home remodel ideas',
    'property improvement AI',
    'renovation planner',
    'AI design assistant',
    'home makeover ideas',
    'renovation inspiration',
    'AI home improvement',
    'design recommendation tool',
    'property renovation AI',
    'remodeling ideas generator'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-renovation-idea-generator',
  },
  openGraph: {
    title: 'AI Renovation Idea Generator',
    description: 'Upload photos and get AI-powered renovation ideas and design suggestions for your property.',
    url: '/tools/ai-renovation-idea-generator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Renovation Idea Generator',
    description: 'Get instant renovation and design ideas from property photos using AI technology.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
