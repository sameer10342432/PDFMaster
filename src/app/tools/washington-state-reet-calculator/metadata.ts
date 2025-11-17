import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washington State Real Estate Excise Tax (REET) Calculator | Property Tools',
  description: 'Calculate Washington State and local Real Estate Excise Tax (REET) for property sales. Get accurate REET estimates for Seattle, Bellevue, Tacoma, Spokane, and other WA municipalities.',
  keywords: [
    'washington reet calculator',
    'washington real estate excise tax',
    'seattle reet',
    'washington state transfer tax',
    'reet calculator',
    'bellevue reet',
    'wa excise tax',
    'washington property transfer tax',
    'reet rates washington',
    'seattle transfer tax',
    'washington real estate tax',
    'reet washington',
    'king county reet',
    'tacoma reet',
    'spokane reet',
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
    canonical: '/tools/washington-state-reet-calculator',
  },
  openGraph: {
    title: 'Washington State Real Estate Excise Tax (REET) Calculator',
    description: 'Calculate Washington REET for all municipalities. Includes progressive state rates and local REET for Seattle, Bellevue, and more.',
    url: '/tools/washington-state-reet-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-washington-reet.jpg',
        width: 1200,
        height: 630,
        alt: 'Washington State REET Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington State REET Calculator',
    description: 'Calculate WA real estate excise tax with progressive state rates and local REET included.',
    images: ['/og-washington-reet.jpg'],
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
