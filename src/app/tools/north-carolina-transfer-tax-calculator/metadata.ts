import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'North Carolina Transfer Tax Calculator - Excise Tax | Property Tools',
  description: 'Calculate North Carolina real estate excise tax (0.2%) and recording fees. Free calculator for accurate NC closing costs. No county or city transfer taxes - only state excise tax.',
  keywords: [
    'north carolina transfer tax',
    'nc excise tax',
    'north carolina real estate tax',
    'nc closing costs',
    'charlotte transfer tax',
    'raleigh transfer tax',
    'nc recording fees',
    'north carolina seller costs',
    'nc form e-500',
    'greensboro transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/north-carolina-transfer-tax-calculator',
  },
  openGraph: {
    title: 'North Carolina Transfer Tax Calculator - Excise Tax',
    description: 'Calculate North Carolina excise tax ($2 per $1,000 = 0.2%). No local transfer taxes in NC.',
    url: '/tools/north-carolina-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
