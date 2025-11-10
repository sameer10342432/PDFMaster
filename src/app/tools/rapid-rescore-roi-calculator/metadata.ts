import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rapid Rescore ROI Calculator - Credit Rescore Savings Calculator | Property Tools',
  description: 'Calculate ROI on rapid credit rescoring. See if paying $30-100 to boost your credit score saves thousands in interest. Compare mortgage rates and monthly payments with our free calculator.',
  keywords: [
    'rapid rescore calculator',
    'credit rescore ROI',
    'rapid credit rescore',
    'credit score improvement cost',
    'mortgage rate credit score',
    'rapid rescore savings',
    'credit boost calculator',
    'credit score mortgage rate',
    'rescore worth it',
    'rapid rescore cost benefit'
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
    canonical: '/tools/rapid-rescore-roi-calculator',
  },
  openGraph: {
    title: 'Rapid Rescore ROI Calculator - Is Credit Rescoring Worth It?',
    description: 'Calculate if rapid credit rescoring saves you money. See how a higher credit score lowers your mortgage rate and monthly payment. Typical cost: $30-100.',
    url: '/tools/rapid-rescore-roi-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-rapid-rescore-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Rapid Rescore ROI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Rescore ROI Calculator - Is Credit Rescoring Worth It?',
    description: 'Calculate rapid rescore ROI - see how much a credit boost can save on your mortgage.',
    images: ['/og-rapid-rescore-calculator.jpg'],
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
