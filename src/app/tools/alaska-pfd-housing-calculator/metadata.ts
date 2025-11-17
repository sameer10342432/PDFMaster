import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alaska Permanent Fund Dividend (PFD) Housing Calculator | Property Tools',
  description: 'Calculate how Alaska PFD impacts housing affordability, mortgage qualification, and down payment savings. Estimate household PFD benefits for Anchorage, Fairbanks, Juneau communities.',
  keywords: [
    'alaska pfd calculator',
    'alaska permanent fund dividend',
    'pfd housing calculator',
    'alaska pfd amount',
    'alaska resident dividend',
    'pfd down payment',
    'alaska housing affordability',
    'pfd mortgage qualification',
    'alaska pfd 2024',
    'permanent fund dividend alaska',
    'anchorage housing pfd',
    'alaska pfd eligibility',
    'pfd rent assistance',
    'alaska dividend housing',
    'pfd savings calculator',
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
    canonical: '/tools/alaska-pfd-housing-calculator',
  },
  openGraph: {
    title: 'Alaska Permanent Fund Dividend (PFD) Housing Calculator',
    description: 'Calculate how Alaska PFD improves housing affordability and mortgage qualification. Estimate household PFD benefits and down payment savings.',
    url: '/tools/alaska-pfd-housing-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-alaska-pfd.jpg',
        width: 1200,
        height: 630,
        alt: 'Alaska PFD Housing Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alaska PFD Housing Calculator',
    description: 'Calculate Alaska Permanent Fund Dividend impact on housing affordability and mortgage qualification.',
    images: ['/og-alaska-pfd.jpg'],
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
