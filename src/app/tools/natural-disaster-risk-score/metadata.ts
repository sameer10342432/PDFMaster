import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natural Disaster Risk Score by Address | Flood, Earthquake, Wildfire Risk',
  description: 'Assess natural disaster risks for any property address. Check flood zones, earthquake risk, wildfire hazard, hurricane exposure, and tornado probability. Essential due diligence for homebuyers.',
  keywords: [
    'natural disaster risk',
    'flood zone checker',
    'earthquake risk',
    'wildfire hazard',
    'hurricane risk',
    'tornado probability',
    'FEMA flood map',
    'disaster risk score',
    'property hazard assessment',
    'climate risk',
    'natural hazard map',
    'property risk analysis',
    'environmental due diligence',
    'disaster zone finder',
    'home safety assessment'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/natural-disaster-risk-score',
  },
  openGraph: {
    title: 'Natural Disaster Risk Score by Address',
    description: 'Assess natural disaster risks including floods, earthquakes, wildfires, hurricanes, and tornadoes for any property address.',
    url: '/tools/natural-disaster-risk-score',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Disaster Risk Score by Address',
    description: 'Assess comprehensive natural disaster risks for any property. FEMA data, earthquake zones, wildfire maps, and more.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
