import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Utility Transfer Coordinator | Move-In Utility Setup Checklist',
  description: 'Coordinate and track utility transfers for your new home. Complete checklist for electricity, water, gas, internet, and all essential services. Never miss a utility setup deadline.',
  keywords: [
    'utility transfer coordinator',
    'move-in utilities checklist',
    'utility setup guide',
    'homeowner utilities',
    'moving utilities checklist',
    'utility transfer timeline',
    'electricity transfer',
    'water service setup',
    'gas service transfer',
    'internet setup',
    'cable transfer',
    'trash service setup',
    'moving checklist utilities',
    'new home utilities',
    'utility disconnection',
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
    canonical: '/tools/utility-transfer-coordinator',
  },
  openGraph: {
    title: 'Utility Transfer Coordinator | Move-In Utility Setup Checklist',
    description: 'Coordinate and track utility transfers for your new home. Complete checklist for electricity, water, gas, internet, and all essential services.',
    url: '/tools/utility-transfer-coordinator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Utility Transfer Coordinator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utility Transfer Coordinator | Move-In Utility Setup Checklist',
    description: 'Coordinate and track utility transfers for your new home. Complete checklist for electricity, water, gas, internet, and all essential services.',
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
