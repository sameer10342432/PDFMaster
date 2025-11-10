import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Georgia Transfer Tax Calculator - State & Intangible Tax | Property Tools',
  description: 'Calculate Georgia real estate transfer tax (0.1%) and intangible recording tax (0.3%). Free calculator for accurate Georgia closing costs including Atlanta, Savannah, and all counties.',
  keywords: [
    'georgia transfer tax',
    'georgia intangible tax',
    'atlanta transfer tax',
    'georgia closing costs',
    'ga state transfer tax',
    'georgia recording tax',
    'georgia real estate tax',
    'fulton county transfer tax',
    'georgia seller costs',
    'savannah transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/georgia-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Georgia Transfer Tax Calculator - State & Intangible Tax',
    description: 'Calculate Georgia transfer tax (0.1%) and intangible recording tax (0.3%) for accurate real estate closing costs.',
    url: '/tools/georgia-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
