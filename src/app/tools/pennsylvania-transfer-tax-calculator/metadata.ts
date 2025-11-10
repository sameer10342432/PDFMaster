import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pennsylvania Transfer Tax Calculator - State & Local Realty Transfer Tax | Property Tools',
  description: 'Calculate Pennsylvania transfer tax (2% standard, 4% Philadelphia). Free calculator includes state tax (1%), local tax (1%), and Philadelphia first-time buyer rates. Accurate PA real estate closing costs.',
  keywords: [
    'pennsylvania transfer tax',
    'pa transfer tax',
    'philadelphia transfer tax',
    'pittsburgh transfer tax',
    'pa realty transfer tax',
    'pennsylvania closing costs',
    'pa state transfer tax',
    'local transfer tax pa',
    'pennsylvania seller costs',
    'philadelphia first time buyer',
    'pa recording fees',
    'pennsylvania real estate tax'
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
    canonical: '/tools/pennsylvania-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Pennsylvania Transfer Tax Calculator - 2% State & Local Tax',
    description: 'Calculate PA transfer tax: 2% standard (1% state + 1% local), 4% Philadelphia. Includes first-time buyer rates and detailed cost breakdown.',
    url: '/tools/pennsylvania-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-pennsylvania-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Pennsylvania Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pennsylvania Transfer Tax Calculator - State & Local Tax',
    description: 'Calculate PA transfer tax including state (1%), local (1%), and Philadelphia special rates (4%).',
    images: ['/og-pennsylvania-transfer-tax.jpg'],
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
