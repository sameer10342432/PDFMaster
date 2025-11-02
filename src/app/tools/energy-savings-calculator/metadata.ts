import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energy Savings Calculator | Property Tools - Calculate Home Energy Efficiency Savings',
  description: 'Calculate potential energy savings from home improvements, solar panels, insulation, HVAC upgrades, and energy-efficient appliances. Compare costs and ROI for energy efficiency investments.',
  keywords: [
    'energy savings calculator',
    'home energy efficiency',
    'solar panel savings',
    'insulation calculator',
    'HVAC efficiency',
    'energy audit',
    'utility bill reduction',
    'green home improvements',
    'energy cost analysis',
    'renewable energy savings',
    'home weatherization',
    'energy efficient appliances',
    'LED lighting savings',
    'smart thermostat savings',
    'energy rebates calculator'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Energy Savings Calculator - Calculate Home Energy Efficiency ROI',
    description: 'Estimate energy savings and payback periods for home energy improvements including solar, insulation, HVAC, and appliance upgrades.',
    type: 'website',
    url: 'https://propertytools.com/tools/energy-savings-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-energy-savings-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy Savings Calculator Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Savings Calculator - Home Energy Efficiency ROI',
    description: 'Calculate potential savings from energy-efficient home improvements and renewable energy installations.',
    images: ['/og-energy-savings-calculator.jpg']
  },
  alternates: {
    canonical: 'https://propertytools.com/tools/energy-savings-calculator'
  }
}