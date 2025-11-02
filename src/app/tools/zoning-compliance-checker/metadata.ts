import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zoning Compliance Checker | Property Tools',
  description: 'Check zoning compliance for real estate properties. Analyze zoning regulations, permitted uses, and development restrictions with our comprehensive zoning compliance guide.',
  keywords: [
    'zoning compliance checker',
    'zoning regulations',
    'property zoning analysis',
    'zoning laws',
    'land use regulations',
    'zoning restrictions',
    'property development rules',
    'zoning permits',
    'municipal zoning',
    'zoning ordinances',
    'property use compliance',
    'zoning violations',
    'development compliance',
    'real estate zoning',
    'zoning requirements'
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
    canonical: '/tools/zoning-compliance-checker',
  },
  openGraph: {
    title: 'Zoning Compliance Checker | Property Tools',
    description: 'Check zoning compliance for real estate properties. Analyze zoning regulations, permitted uses, and development restrictions.',
    url: '/tools/zoning-compliance-checker',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Zoning Compliance Checker - Property Regulations Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoning Compliance Checker | Property Tools',
    description: 'Check zoning compliance for properties. Analyze regulations, permitted uses, and development restrictions.',
    images: ['/placeholder-600x400.svg'],
    creator: '@PropertyTools',
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
  verification: {
    google: 'your-google-verification-code',
  },
}