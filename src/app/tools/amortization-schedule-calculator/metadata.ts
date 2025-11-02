import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amortization Schedule Calculator - Loan Payment Breakdown | Property Tools',
  description: 'Free amortization schedule calculator to generate detailed payment breakdowns for mortgages and loans. View principal, interest, and remaining balance for each payment.',
  keywords: [
    'amortization schedule calculator',
    'loan amortization',
    'mortgage amortization',
    'payment schedule calculator',
    'loan payment breakdown',
    'principal and interest calculator',
    'mortgage schedule',
    'loan repayment schedule',
    'amortization table',
    'payment calculator',
    'loan calculator',
    'mortgage payment schedule'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Amortization Schedule Calculator - Loan Payment Breakdown',
    description: 'Free amortization schedule calculator to generate detailed payment breakdowns for mortgages and loans. View principal, interest, and remaining balance.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amortization Schedule Calculator - Loan Payment Breakdown',
    description: 'Free amortization schedule calculator to generate detailed payment breakdowns for mortgages and loans.',
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
    canonical: '/tools/amortization-schedule-calculator',
  },
  category: 'Real Estate Tools',
};