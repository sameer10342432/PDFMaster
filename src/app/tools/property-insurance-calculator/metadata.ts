import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Insurance Calculator | Coverage Analysis & Cost Estimation Tool',
  description: 'Calculate property insurance costs with our comprehensive tool. Analyze coverage options, compare quotes, estimate premiums, and understand insurance factors for homeowners, renters, and commercial properties.',
  keywords: [
    'property insurance calculator',
    'homeowners insurance cost',
    'renters insurance calculator',
    'commercial property insurance',
    'insurance premium calculator',
    'coverage analysis tool',
    'insurance quote comparison',
    'property insurance estimator',
    'dwelling coverage calculator',
    'liability insurance calculator',
    'personal property coverage',
    'insurance deductible calculator',
    'flood insurance calculator',
    'earthquake insurance cost',
    'umbrella insurance calculator',
    'insurance coverage analysis',
    'property insurance factors',
    'insurance cost estimator',
    'home insurance premium',
    'property protection calculator'
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
    title: 'Property Insurance Calculator | Coverage Analysis & Cost Estimation',
    description: 'Calculate property insurance costs with comprehensive coverage analysis. Compare quotes, estimate premiums, and understand insurance factors for informed decisions.',
    url: '/tools/property-insurance-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-property-insurance-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Insurance Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Insurance Calculator | Coverage Analysis & Cost Estimation',
    description: 'Calculate property insurance costs with comprehensive coverage analysis. Compare quotes and estimate premiums for informed insurance decisions.',
    images: ['/og-property-insurance-calculator.jpg'],
    creator: '@PropertyTools',
  },
  alternates: {
    canonical: '/tools/property-insurance-calculator',
  },
}