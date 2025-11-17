import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Is This Neighborhood Safe? Complete Safety Assessment Checklist',
  description: 'Comprehensive neighborhood safety checklist to evaluate crime rates, lighting, security, and safety factors before buying or renting. Make informed decisions about neighborhood safety.',
  keywords: [
    'neighborhood safety checklist',
    'is this neighborhood safe',
    'neighborhood safety assessment',
    'safe neighborhood checklist',
    'crime rate checker',
    'neighborhood security evaluation',
    'area safety guide',
    'home safety assessment',
    'neighborhood crime statistics',
    'safe area to live',
    'neighborhood watch',
    'street safety evaluation',
    'community safety checklist',
    'residential area safety',
    'neighborhood risk assessment',
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
    canonical: '/tools/neighborhood-safety-checklist',
  },
  openGraph: {
    title: 'Is This Neighborhood Safe? Complete Safety Assessment Checklist',
    description: 'Comprehensive neighborhood safety checklist to evaluate crime rates, lighting, security, and safety factors before buying or renting.',
    url: '/tools/neighborhood-safety-checklist',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Neighborhood Safety Checklist Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is This Neighborhood Safe? Complete Safety Assessment Checklist',
    description: 'Comprehensive neighborhood safety checklist to evaluate crime rates, lighting, security, and safety factors.',
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
