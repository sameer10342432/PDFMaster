import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ohio Transfer Tax Calculator - County Conveyance Fees | Property Tools',
  description: 'Calculate Ohio real estate conveyance fees and transfer tax by county. Free calculator for Franklin, Cuyahoga, Hamilton counties and more. Ohio has no state transfer tax - only county fees (0.1%-0.4%).',
  keywords: [
    'ohio transfer tax',
    'ohio conveyance fees',
    'franklin county transfer tax',
    'cuyahoga county transfer tax',
    'hamilton county transfer tax',
    'ohio closing costs',
    'ohio county fees',
    'ohio recording fees',
    'ohio real estate tax',
    'columbus transfer tax',
    'cleveland transfer tax'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ohio-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Ohio Transfer Tax Calculator - County Conveyance Fees',
    description: 'Calculate Ohio county conveyance fees: $1-$4 per $1,000 (0.1-0.4%). No state transfer tax in Ohio.',
    url: '/tools/ohio-transfer-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};
