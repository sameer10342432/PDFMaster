import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maryland Rain Tax (Stormwater Fee) Estimator - Calculate Annual Fees | Property Tools',
  description: 'Calculate Maryland stormwater management fees (rain tax) based on impervious surfaces. Estimate annual fees for all MD counties and learn how to reduce costs with credits.',
  keywords: [
    'maryland rain tax',
    'maryland stormwater fee',
    'maryland rain tax calculator',
    'md stormwater management fee',
    'maryland impervious surface tax',
    'rain tax maryland 2024',
    'chesapeake bay rain tax',
    'maryland rain garden credit',
    'stormwater fee reduction maryland',
    'baltimore rain tax',
    'montgomery county stormwater fee',
    'anne arundel stormwater fee',
    'maryland eru calculator',
    'rain barrel credit maryland',
    'maryland rain tax exemption',
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
    canonical: '/tools/maryland-rain-tax-stormwater-fee-estimator',
  },
  openGraph: {
    title: 'Maryland Rain Tax (Stormwater Fee) Estimator',
    description: 'Calculate Maryland stormwater fees based on impervious surfaces. Estimate annual costs and learn fee reduction strategies with rain gardens and credits.',
    url: '/tools/maryland-rain-tax-stormwater-fee-estimator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-maryland-rain-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Maryland Rain Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maryland Rain Tax Calculator',
    description: 'Calculate Maryland stormwater management fees and discover reduction strategies with green infrastructure credits.',
    images: ['/og-maryland-rain-tax.jpg'],
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
