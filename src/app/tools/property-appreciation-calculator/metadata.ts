import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Appreciation Calculator - Calculate Real Estate Value Growth | Property Tools',
  description: 'Free property appreciation calculator to estimate future property values and appreciation rates. Calculate compound growth, total returns, and investment projections.',
  keywords: [
    'property appreciation calculator',
    'real estate appreciation',
    'property value calculator',
    'home appreciation calculator',
    'property growth calculator',
    'real estate value growth',
    'property investment calculator',
    'home value appreciation',
    'real estate appreciation rate',
    'property value projection',
    'investment growth calculator',
    'property equity growth'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Appreciation Calculator - Calculate Real Estate Value Growth',
    description: 'Free property appreciation calculator to estimate future property values and appreciation rates. Calculate compound growth and investment projections.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Appreciation Calculator - Calculate Real Estate Value Growth',
    description: 'Free property appreciation calculator to estimate future property values and appreciation rates.',
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
  alternates: {
    canonical: '/tools/property-appreciation-calculator',
  },
  category: 'Real Estate Tools',
};