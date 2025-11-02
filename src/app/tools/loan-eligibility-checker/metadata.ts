import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loan Eligibility Checker - Check FHA, VA, USDA, Conventional & Jumbo Loan Qualification | Property Tools',
  description: 'Check eligibility for property loans including FHA, VA, USDA, conventional, and jumbo loans. Calculate debt-to-income ratios, credit score requirements, down payment needs, and get pre-qualification estimates. Analyze loan programs and qualification criteria.',
  keywords: [
    'loan eligibility checker',
    'mortgage qualification calculator',
    'property loan eligibility',
    'FHA loan eligibility',
    'VA loan eligibility',
    'conventional loan requirements',
    'USDA loan checker',
    'jumbo loan qualification',
    'debt to income calculator',
    'mortgage pre-qualification',
    'loan approval calculator',
    'home loan eligibility',
    'mortgage requirements',
    'loan qualification tool',
    'property financing eligibility'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
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
  openGraph: {
    title: 'Loan Eligibility Checker | Property Loan Qualification Calculator',
    description: 'Check your eligibility for property loans including conventional, FHA, VA, USDA, and jumbo loans. Calculate debt-to-income ratios and get pre-qualification estimates.',
    url: '/tools/loan-eligibility-checker',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-loan-eligibility-checker.jpg',
        width: 1200,
        height: 630,
        alt: 'Loan Eligibility Checker - Property Loan Qualification Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Eligibility Checker | Property Loan Qualification Calculator',
    description: 'Check your eligibility for property loans including conventional, FHA, VA, USDA, and jumbo loans. Calculate debt-to-income ratios and get pre-qualification estimates.',
    images: ['/og-loan-eligibility-checker.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: '/tools/loan-eligibility-checker',
  },
}