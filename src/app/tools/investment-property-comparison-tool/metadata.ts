import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Property Comparison Tool - Compare Real Estate Investments | Property Tools',
  description: 'Free investment property comparison tool to analyze and compare multiple real estate investments. Compare ROI, cash flow, cap rates, and investment metrics side-by-side.',
  keywords: [
    'investment property comparison',
    'property comparison tool',
    'real estate comparison',
    'investment comparison calculator',
    'property analysis tool',
    'real estate investment comparison',
    'property ROI comparison',
    'rental property comparison',
    'investment property analyzer',
    'property metrics comparison',
    'real estate portfolio comparison',
    'investment decision tool'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Investment Property Comparison Tool - Compare Real Estate Investments',
    description: 'Free investment property comparison tool to analyze and compare multiple real estate investments. Compare ROI, cash flow, and cap rates.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Property Comparison Tool - Compare Real Estate Investments',
    description: 'Free investment property comparison tool to analyze and compare multiple real estate investments.',
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
  alternates: {
    canonical: '/tools/investment-property-comparison-tool',
  },
  category: 'Real Estate Tools',
};