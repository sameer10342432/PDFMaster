import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Tax Estimator - Calculate Annual Property Taxes | Property Tools',
  description: 'Calculate property taxes with our comprehensive estimator. Get accurate estimates based on assessed value, tax rates, exemptions, and local jurisdictions. Essential tool for property buyers and investors.',
  keywords: [
    'property tax calculator',
    'property tax estimator',
    'real estate tax calculator',
    'annual property tax',
    'property tax assessment',
    'tax rate calculator',
    'homestead exemption',
    'property tax planning',
    'real estate taxes',
    'property assessment value',
    'millage rate calculator',
    'property tax burden',
    'local property taxes',
    'property tax comparison',
    'tax exemption calculator'
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
    canonical: '/tools/property-tax-estimator',
  },
  openGraph: {
    title: 'Property Tax Estimator - Calculate Annual Property Taxes',
    description: 'Calculate property taxes with our comprehensive estimator. Get accurate estimates based on assessed value, tax rates, exemptions, and local jurisdictions.',
    url: '/tools/property-tax-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-property-tax-estimator.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Tax Estimator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Tax Estimator - Calculate Annual Property Taxes',
    description: 'Calculate property taxes with our comprehensive estimator. Get accurate estimates based on assessed value, tax rates, exemptions, and local jurisdictions.',
    images: ['/og-property-tax-estimator.jpg'],
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
    google: 'your-google-verification-code',
  },
};