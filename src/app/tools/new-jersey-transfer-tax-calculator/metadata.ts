import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Jersey Transfer Tax Calculator - Realty Transfer Fee & Mansion Tax | Property Tools',
  description: 'Calculate New Jersey realty transfer fee (1%) and mansion tax (1% over $1M). Free calculator for accurate NJ closing costs including Bergen, Essex, and all counties.',
  keywords: [
    'new jersey transfer tax',
    'nj realty transfer fee',
    'new jersey mansion tax',
    'nj closing costs',
    'bergen county transfer tax',
    'essex county transfer tax',
    'new jersey real estate tax',
    'nj seller costs',
    'newark transfer tax',
    'jersey city transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/new-jersey-transfer-tax-calculator',
  },
  openGraph: {
    title: 'New Jersey Transfer Tax Calculator - Realty Transfer Fee & Mansion Tax',
    description: 'Calculate NJ realty transfer fee (1%) and mansion tax (1% on amount over $1M).',
    url: '/tools/new-jersey-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
