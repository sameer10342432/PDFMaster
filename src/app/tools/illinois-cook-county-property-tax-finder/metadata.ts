import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Cook County Property Tax Rate Finder & Calculator | Property Tools',
  description: 'Find Cook County Illinois property tax rates by municipality including Chicago, Evanston, Oak Park, and suburbs. Calculate your property tax with homestead exemptions.',
  keywords: [
    'cook county property tax',
    'illinois property tax',
    'chicago property tax',
    'cook county tax rate',
    'evanston property tax',
    'oak park property tax',
    'illinois homestead exemption',
    'cook county assessor',
    'chicago tax rate',
    'illinois property tax calculator',
    'cook county reassessment',
    'naperville property tax',
    'cook county exemptions',
    'illinois senior freeze',
    'chicago homestead exemption',
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
    canonical: '/tools/illinois-cook-county-property-tax-finder',
  },
  openGraph: {
    title: 'Illinois Cook County Property Tax Rate Finder',
    description: 'Find and calculate Cook County property tax rates by municipality. Includes Chicago, Evanston, Oak Park, and all Cook County suburbs.',
    url: '/tools/illinois-cook-county-property-tax-finder',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-cook-county-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Cook County Property Tax Finder - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois Cook County Property Tax Rate Finder',
    description: 'Calculate Cook County property taxes by municipality with homestead exemptions and detailed rate breakdowns.',
    images: ['/og-cook-county-tax.jpg'],
    creator: '@propertytools',
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
};
