import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Transfer Tax Calculator - Doc Stamps & Documentary Stamp Tax | Property Tools',
  description: 'Calculate Florida documentary stamp tax (doc stamps), intangible tax, and recording fees. Free calculator for Florida real estate transfer costs including Miami-Dade special rates. Estimate seller and buyer closing costs accurately.',
  keywords: [
    'florida transfer tax',
    'florida doc stamps',
    'florida documentary stamp tax',
    'florida intangible tax',
    'florida recording fees',
    'miami-dade transfer tax',
    'florida real estate tax',
    'florida closing costs',
    'doc stamps calculator',
    'florida seller costs',
    'florida buyer costs',
    'documentary stamps florida'
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
    canonical: '/tools/florida-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Florida Transfer Tax Calculator - Documentary Stamps & Transfer Costs',
    description: 'Calculate Florida doc stamps, intangible tax, and recording fees. Includes Miami-Dade special rates and detailed cost breakdown for buyers and sellers.',
    url: '/tools/florida-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-florida-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Florida Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Transfer Tax Calculator - Doc Stamps & Intangible Tax',
    description: 'Calculate Florida documentary stamp tax, intangible tax, and recording fees with special Miami-Dade rates.',
    images: ['/og-florida-transfer-tax.jpg'],
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
