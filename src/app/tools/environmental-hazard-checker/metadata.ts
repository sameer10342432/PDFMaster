import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Environmental Hazard Checker | Superfund Sites, Soil Contamination, Pollution',
  description: 'Check environmental hazards near properties including EPA Superfund sites, soil contamination, air quality issues, and toxic waste sites. Protect your investment with proper due diligence.',
  keywords: [
    'environmental hazard checker',
    'superfund site lookup',
    'soil contamination',
    'toxic waste sites',
    'EPA hazard map',
    'brownfield sites',
    'environmental contamination',
    'pollution checker',
    'hazardous waste',
    'environmental due diligence',
    'property contamination',
    'toxic site finder',
    'air quality checker',
    'water contamination',
    'environmental assessment'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/environmental-hazard-checker',
  },
  openGraph: {
    title: 'Environmental Hazard Checker for Properties',
    description: 'Check EPA Superfund sites, soil contamination, and environmental hazards near any property address.',
    url: '/tools/environmental-hazard-checker',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environmental Hazard Checker',
    description: 'Identify Superfund sites, soil contamination, and pollution risks near properties.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
