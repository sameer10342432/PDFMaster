import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Portfolio Tracker - Track Property Performance, Cash Flow & Returns | Property Tools',
  description: 'Track your real estate portfolio with comprehensive performance monitoring. Analyze cash flow, expenses, returns, equity, and property distribution across your entire investment portfolio. Monitor portfolio yield and leverage ratios.',
  keywords: [
    'real estate portfolio tracker',
    'property portfolio tracker',
    'investment property tracker',
    'real estate portfolio management',
    'property investment tracking',
    'portfolio performance tracker',
    'real estate asset tracker',
    'property cash flow tracker',
    'investment portfolio monitor',
    'real estate investment tracker',
    'property management tracker',
    'portfolio analytics tool'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Real Estate Portfolio Tracker - Property Investment Tracking',
    description: 'Free real estate portfolio tracker to monitor your property investments. Track performance, cash flow, and returns across your portfolio.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Portfolio Tracker - Property Investment Tracking',
    description: 'Free real estate portfolio tracker to monitor your property investments and track performance.',
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
    canonical: '/tools/real-estate-portfolio-tracker',
  },
  category: 'Real Estate Tools',
};