import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boston Residential Exemption Calculator - Calculate MA Property Tax Savings | Property Tools',
  description: 'Calculate Boston residential exemption savings (up to $3,817/year). Estimate property tax reduction for owner-occupied homes in Boston, MA with FY2024 exemption amounts.',
  keywords: [
    'boston residential exemption',
    'boston property tax exemption',
    'boston tax exemption calculator',
    'massachusetts residential exemption',
    'boston owner occupied exemption',
    'boston property tax savings',
    'form 128-res boston',
    'boston tax relief',
    'boston homeowner exemption',
    'boston ma property tax',
    'residential exemption massachusetts',
    'boston assessing department',
    'boston tax exemption 2024',
    'boston property tax rate',
    'boston residential tax savings',
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
    canonical: '/tools/boston-ma-residential-exemption-calculator',
  },
  openGraph: {
    title: 'Boston Residential Exemption Calculator',
    description: 'Calculate your Boston residential exemption savings. Estimate property tax reduction for owner-occupied homes with up to $3,817 annual savings.',
    url: '/tools/boston-ma-residential-exemption-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-boston-residential-exemption.jpg',
        width: 1200,
        height: 630,
        alt: 'Boston Residential Exemption Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boston Residential Exemption Calculator',
    description: 'Calculate Boston property tax savings with residential exemption. Up to $3,817 annual savings for owner-occupants.',
    images: ['/og-boston-residential-exemption.jpg'],
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
