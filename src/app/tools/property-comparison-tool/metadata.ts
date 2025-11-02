import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Comparison Tool | Compare Investment Properties Side-by-Side | Property Tools',
  description: 'Compare multiple investment properties side-by-side with detailed analysis of purchase price, rental income, expenses, yields, and ROI. Make informed real estate investment decisions with comprehensive property comparisons.',
  keywords: [
    'property comparison tool',
    'investment property comparison',
    'real estate comparison',
    'property analysis tool',
    'investment property calculator',
    'property ROI comparison',
    'rental yield comparison',
    'property investment analysis',
    'real estate investment comparison',
    'property evaluation tool',
    'investment property metrics',
    'property performance comparison',
    'real estate decision tool',
    'property investment calculator',
    'comparative property analysis'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Comparison Tool - Compare Investment Properties Side-by-Side',
    description: 'Professional property comparison tool for real estate investors. Compare multiple properties with detailed financial analysis, yields, ROI, and cash flow projections to make the best investment decisions.',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Property Comparison Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Comparison Tool | Real Estate Investment Analysis',
    description: 'Compare investment properties side-by-side. Analyze yields, ROI, cash flow, and key metrics to choose the best real estate investments.',
    images: ['/placeholder-600x400.svg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/tools/property-comparison-tool'
  }
}