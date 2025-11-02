import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Inspection Checklist | Complete Property Inspection Guide & Checklist',
  description: 'Comprehensive home inspection checklist with detailed criteria for buyers, sellers, and inspectors. Free printable checklist covering all major home systems and components.',
  keywords: [
    'home inspection checklist',
    'property inspection checklist',
    'house inspection guide',
    'home inspection criteria',
    'property inspection guide',
    'home inspection report',
    'house inspection list',
    'home inspection standards',
    'property inspection standards',
    'home inspection process',
    'home inspection tips',
    'property inspection tips',
    'home inspection requirements',
    'house inspection requirements',
    'home inspection form'
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
    canonical: '/tools/home-inspection-checklist',
  },
  openGraph: {
    title: 'Home Inspection Checklist | Complete Property Inspection Guide & Checklist',
    description: 'Comprehensive home inspection checklist with detailed criteria for buyers, sellers, and inspectors. Free printable checklist covering all major home systems.',
    url: '/tools/home-inspection-checklist',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Home Inspection Checklist Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Inspection Checklist | Complete Property Inspection Guide & Checklist',
    description: 'Comprehensive home inspection checklist with detailed criteria for buyers, sellers, and inspectors. Free printable checklist covering all major home systems.',
    images: ['/placeholder-600x400.svg'],
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
  verification: {
    google: 'verification_token_here',
  },
}