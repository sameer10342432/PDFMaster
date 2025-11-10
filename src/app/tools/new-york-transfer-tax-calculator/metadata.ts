import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New York Transfer Tax Calculator - Mansion Tax & NYC Transfer Tax | Property Tools',
  description: 'Calculate New York State transfer tax, NYC transfer tax, and mansion tax. Free calculator includes progressive mansion tax brackets ($1M-$25M+), mortgage recording tax, and commercial property rates. Accurate NY real estate closing cost estimates.',
  keywords: [
    'new york transfer tax',
    'nyc transfer tax',
    'mansion tax calculator',
    'new york mansion tax',
    'ny state transfer tax',
    'mortgage recording tax ny',
    'new york closing costs',
    'manhattan transfer tax',
    'nyc real estate tax',
    'brooklyn transfer tax',
    'commercial transfer tax ny',
    'new york seller costs'
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
    canonical: '/tools/new-york-transfer-tax-calculator',
  },
  openGraph: {
    title: 'New York Transfer Tax Calculator - Mansion Tax & NYC Transfer Tax',
    description: 'Calculate NY State transfer tax, NYC transfer tax, and progressive mansion tax (1%-3.9%). Includes mortgage recording tax and detailed buyer/seller cost breakdown.',
    url: '/tools/new-york-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-new-york-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'New York Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Transfer Tax Calculator - Mansion Tax & NYC Rates',
    description: 'Calculate NY State transfer tax, NYC transfer tax, mansion tax, and mortgage recording tax for accurate closing cost estimates.',
    images: ['/og-new-york-transfer-tax.jpg'],
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
