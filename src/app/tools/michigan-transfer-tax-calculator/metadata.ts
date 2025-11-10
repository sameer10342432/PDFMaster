import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Michigan Transfer Tax Calculator - State & County Tax | Property Tools',
  description: 'Calculate Michigan real estate transfer tax (0.86% combined). Includes state tax (0.75%) and county tax (0.11%). Free calculator for accurate MI closing costs.',
  keywords: [
    'michigan transfer tax',
    'michigan state transfer tax',
    'michigan county transfer tax',
    'detroit transfer tax',
    'michigan closing costs',
    'wayne county transfer tax',
    'oakland county transfer tax',
    'michigan real estate tax',
    'michigan recording fees',
    'grand rapids transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/michigan-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Michigan Transfer Tax Calculator - 0.86% Combined Rate',
    description: 'Calculate Michigan transfer tax: 0.75% state + 0.11% county = 0.86% total.',
    url: '/tools/michigan-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
