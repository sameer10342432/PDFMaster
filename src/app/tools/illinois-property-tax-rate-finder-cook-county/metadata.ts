import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Property Tax Rate Finder (Cook County) - Calculate Your Tax Bill | Property Tools',
  description: 'Find accurate property tax rates for Cook County, Illinois municipalities including Chicago, Evanston, Oak Park. Calculate your estimated annual property tax bill with exemptions for 2024.',
  keywords: [
    'cook county property tax',
    'illinois property tax calculator',
    'chicago property tax rate',
    'cook county tax rate',
    'property tax cook county',
    'illinois property tax',
    'evanston property tax',
    'oak park property tax',
    'cook county assessor',
    'illinois homeowner exemption',
    'cook county senior exemption',
    'chicago property tax',
    'illinois property tax rate',
    'cook county treasurer',
    'property tax finder illinois',
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
    canonical: '/tools/illinois-property-tax-rate-finder-cook-county',
  },
  openGraph: {
    title: 'Illinois Property Tax Rate Finder (Cook County)',
    description: 'Calculate Cook County property taxes for all municipalities. Get accurate tax estimates with homeowner and senior exemptions.',
    url: '/tools/illinois-property-tax-rate-finder-cook-county',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-illinois-property-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Illinois Property Tax Rate Finder (Cook County) - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois Property Tax Rate Finder (Cook County)',
    description: 'Calculate property taxes for Chicago and Cook County suburbs with accurate 2024 tax rates and exemptions.',
    images: ['/og-illinois-property-tax.jpg'],
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
