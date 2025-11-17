import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colorado Gallagher Amendment Tax Impact Calculator | Property Tools',
  description: 'Calculate how Colorado\'s repealed Gallagher Amendment affected property taxes. Compare historical assessment rates and understand the current frozen 7.15% residential rate.',
  keywords: [
    'colorado gallagher amendment',
    'gallagher amendment colorado',
    'colorado property tax',
    'colorado assessment rate',
    'colorado property tax calculator',
    'tabor colorado',
    'colorado residential assessment',
    'proposition 120 colorado',
    'colorado mill levy',
    'gallagher repeal',
    'colorado tax impact',
    'colorado property tax rate',
    'colorado real estate tax',
    'denver property tax',
    'boulder property tax',
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
    canonical: '/tools/colorado-gallagher-amendment-tax-impact',
  },
  openGraph: {
    title: 'Colorado Gallagher Amendment Tax Impact Calculator',
    description: 'Calculate how Colorado\'s Gallagher Amendment affected your property taxes. Compare historical rates from 1982 to current frozen 7.15% rate.',
    url: '/tools/colorado-gallagher-amendment-tax-impact',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-colorado-gallagher.jpg',
        width: 1200,
        height: 630,
        alt: 'Colorado Gallagher Amendment Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Gallagher Amendment Tax Impact Calculator',
    description: 'Calculate historical property tax impact of Colorado\'s Gallagher Amendment and understand the current assessment system.',
    images: ['/og-colorado-gallagher.jpg'],
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
