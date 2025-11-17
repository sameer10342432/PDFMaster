import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philadelphia Wage Tax vs. Suburb Commute Calculator | Compare Living Costs',
  description: 'Compare Philadelphia 3.79% wage tax against suburb commuting costs. Calculate total annual expenses for city vs. suburb living in the Greater Philadelphia area.',
  keywords: [
    'philadelphia wage tax',
    'philly wage tax calculator',
    'philadelphia earnings tax',
    'philadelphia vs suburbs',
    'philadelphia wage tax 2024',
    'philadelphia resident tax',
    'philadelphia non-resident tax',
    'septa commute cost',
    'philadelphia commute calculator',
    'philadelphia suburb comparison',
    'main line commute',
    'philadelphia cost of living',
    'philly wage tax rate',
    'philadelphia city tax',
    'philadelphia earnings tax calculator',
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
    canonical: '/tools/philadelphia-pa-wage-tax-vs-suburb-commute',
  },
  openGraph: {
    title: 'Philadelphia Wage Tax vs. Suburb Commute Calculator',
    description: 'Compare Philadelphia 3.79% wage tax costs against suburb commuting expenses. Find the most affordable living option in Greater Philadelphia.',
    url: '/tools/philadelphia-pa-wage-tax-vs-suburb-commute',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-philadelphia-wage-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Philadelphia Wage Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philadelphia Wage Tax vs. Suburb Commute Calculator',
    description: 'Calculate whether living in Philadelphia or the suburbs is more affordable considering wage tax and commute costs.',
    images: ['/og-philadelphia-wage-tax.jpg'],
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
