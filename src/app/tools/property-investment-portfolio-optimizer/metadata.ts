import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Investment Portfolio Optimizer - Analyze Risk, Returns & Diversification | Property Tools',
  description: 'Optimize your real estate portfolio with advanced analysis of risk, returns, and diversification. Calculate Sharpe ratios, leverage ratios, weighted cap rates, and scenario modeling. Balance portfolio allocation across property types and markets.',
  keywords: [
    'property portfolio optimizer',
    'real estate portfolio analyzer',
    'investment portfolio optimizer',
    'property portfolio management',
    'real estate portfolio diversification',
    'investment property portfolio',
    'portfolio optimization tool',
    'real estate asset allocation',
    'property investment strategy',
    'portfolio risk analysis',
    'real estate portfolio tracker',
    'investment diversification tool'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Investment Portfolio Optimizer - Real Estate Portfolio Analysis',
    description: 'Free property investment portfolio optimizer to analyze and optimize your real estate portfolio. Balance risk and returns across properties.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Investment Portfolio Optimizer - Real Estate Portfolio Analysis',
    description: 'Free property investment portfolio optimizer to analyze and optimize your real estate portfolio.',
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
    canonical: '/tools/property-investment-portfolio-optimizer',
  },
  category: 'Real Estate Tools',
};