import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Hurricane Insurance Estimator - Wind & Flood Coverage | Property Tools',
  description: 'Calculate Florida hurricane insurance costs including windstorm, flood insurance, and deductibles. Estimate premiums for coastal and inland Florida properties with wind mitigation discounts.',
  keywords: [
    'florida hurricane insurance',
    'hurricane insurance cost',
    'florida windstorm insurance',
    'florida flood insurance',
    'citizens property insurance',
    'hurricane deductible florida',
    'wind mitigation discount',
    'florida coastal insurance',
    'hurricane insurance premium',
    'florida homeowners insurance',
    'nfip flood insurance florida',
    'florida insurance crisis',
    'hurricane coverage florida',
    'wind insurance florida',
    'florida hurricane deductible',
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
    canonical: '/tools/florida-hurricane-insurance-estimator',
  },
  openGraph: {
    title: 'Florida Hurricane Insurance Estimator',
    description: 'Calculate hurricane insurance costs for Florida properties including wind, flood, and comprehensive coverage with wind mitigation discounts.',
    url: '/tools/florida-hurricane-insurance-estimator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-florida-hurricane-insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Florida Hurricane Insurance Estimator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Hurricane Insurance Estimator',
    description: 'Calculate complete hurricane insurance costs for Florida including windstorm and flood coverage with mitigation discounts.',
    images: ['/og-florida-hurricane-insurance.jpg'],
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
