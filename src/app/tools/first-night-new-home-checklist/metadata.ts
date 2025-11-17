import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Night in New Home Checklist | Essential Move-In Day Tasks',
  description: 'Complete checklist for your first night in a new home. Never forget essential items, safety checks, and comfort items for a smooth first night. Free printable moving checklist.',
  keywords: [
    'first night new home checklist',
    'move-in day checklist',
    'first night moving checklist',
    'new home essentials',
    'moving day survival kit',
    'first night box',
    'move-in essentials',
    'new home first day',
    'overnight bag moving',
    'moving day necessities',
    'new homeowner checklist',
    'first 24 hours new home',
    'move-in safety check',
    'essential moving items',
    'moving day preparation',
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
    canonical: '/tools/first-night-new-home-checklist',
  },
  openGraph: {
    title: 'First Night in New Home Checklist | Essential Move-In Day Tasks',
    description: 'Complete checklist for your first night in a new home. Never forget essential items, safety checks, and comfort items for a smooth first night.',
    url: '/tools/first-night-new-home-checklist',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'First Night New Home Checklist Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Night in New Home Checklist | Essential Move-In Day Tasks',
    description: 'Complete checklist for your first night in a new home. Never forget essential items, safety checks, and comfort items.',
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
