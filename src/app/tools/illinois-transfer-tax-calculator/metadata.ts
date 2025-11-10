import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Transfer Tax Calculator - Chicago & Cook County Transfer Tax | Property Tools',
  description: 'Calculate Illinois real estate transfer tax including Chicago city tax (0.75%-1.05%), state tax (0.1%), and Cook County rates. Free calculator for accurate IL closing cost estimates.',
  keywords: [
    'illinois transfer tax',
    'chicago transfer tax',
    'cook county transfer tax',
    'illinois closing costs',
    'chicago real estate tax',
    'il transfer tax',
    'ptax 203',
    'illinois recording fees',
    'chicago seller costs',
    'illinois state transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/illinois-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Illinois Transfer Tax Calculator - Chicago & State Rates',
    description: 'Calculate Illinois transfer tax: 0.1% state + Chicago 0.75%-1.05% city tax. Accurate closing cost estimates for Illinois real estate.',
    url: '/tools/illinois-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
