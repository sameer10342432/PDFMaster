import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oregon Property Tax Limitation (Measure 50) Calculator | Property Tools',
  description: 'Calculate Oregon property taxes under Measure 50 with 3% annual MAV cap. Understand Maximum Assessed Value vs Real Market Value and estimate future tax savings for Portland, Eugene, Bend properties.',
  keywords: [
    'oregon measure 50',
    'oregon property tax calculator',
    'measure 50 calculator',
    'oregon mav calculator',
    'maximum assessed value oregon',
    'real market value oregon',
    'oregon property tax cap',
    '3 percent property tax limit',
    'portland property tax',
    'multnomah county property tax',
    'oregon property tax exemption',
    'oregon tax assessment',
    'measure 50 explained',
    'oregon property tax rate',
    'oregon av calculator',
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
    canonical: '/tools/oregon-property-tax-limitation-measure-50',
  },
  openGraph: {
    title: 'Oregon Property Tax Limitation (Measure 50) Calculator',
    description: 'Calculate Oregon property taxes with Measure 50 3% annual cap. Compare MAV vs RMV and estimate tax savings for all Oregon counties.',
    url: '/tools/oregon-property-tax-limitation-measure-50',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-oregon-measure-50.jpg',
        width: 1200,
        height: 630,
        alt: 'Oregon Measure 50 Property Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon Measure 50 Property Tax Calculator',
    description: 'Calculate Oregon property taxes with MAV 3% annual cap and understand tax savings from Measure 50.',
    images: ['/og-oregon-measure-50.jpg'],
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
