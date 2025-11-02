import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tenant Screening Checklist - Comprehensive Rental Application Review Tool',
  description: 'Complete tenant screening checklist with credit, income, background verification criteria. Streamline your rental property tenant selection process with professional screening guidelines.',
  keywords: [
    'tenant screening checklist',
    'rental application review',
    'tenant background check',
    'credit score requirements',
    'income verification',
    'rental history check',
    'landlord screening process',
    'tenant qualification criteria',
    'rental property management',
    'tenant selection guidelines',
    'rental application criteria',
    'property management tools',
    'tenant vetting process',
    'rental screening standards',
    'landlord tenant screening'
  ],
  authors: [{ name: 'Property Tools' }],
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
    title: 'Tenant Screening Checklist - Professional Rental Application Review',
    description: 'Comprehensive tenant screening checklist with credit, income, and background verification criteria. Streamline your rental property tenant selection process.',
    url: 'https://propertytools.com/tools/tenant-screening-checklist',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://propertytools.com/images/tenant-screening-checklist-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Tenant Screening Checklist Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenant Screening Checklist - Professional Rental Application Review',
    description: 'Comprehensive tenant screening checklist with credit, income, and background verification criteria for landlords.',
    images: ['https://propertytools.com/images/tenant-screening-checklist-twitter.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: 'https://propertytools.com/tools/tenant-screening-checklist',
  },
}