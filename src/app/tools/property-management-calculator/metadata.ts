import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management Calculator | Property Tools',
  description: 'Calculate property management costs, fees, and ROI analysis. Compare self-management vs professional property management with detailed cost breakdowns and profit analysis.',
  keywords: [
    'property management calculator',
    'property management fees',
    'rental property costs',
    'property management ROI',
    'landlord expenses',
    'rental income calculator',
    'property management analysis',
    'self management vs professional',
    'property operating expenses',
    'rental property profitability',
    'property management comparison',
    'landlord calculator',
    'rental property tools',
    'property investment analysis'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Management Calculator | Property Tools',
    description: 'Calculate property management costs, fees, and ROI analysis. Compare self-management vs professional property management with detailed cost breakdowns.',
    type: 'website',
    url: '/tools/property-management-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Management Calculator Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Management Calculator | Property Tools',
    description: 'Calculate property management costs and compare self-management vs professional management options.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
}