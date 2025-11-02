import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Maintenance Tracker - Schedule Repairs, Track Costs & Manage Vendors | Property Tools',
  description: 'Track property maintenance with scheduling for preventive maintenance, repair tracking, vendor management, and cost analysis. Manage maintenance history, recurring tasks, and emergency repairs for rental properties.',
  keywords: [
    'property maintenance tracker',
    'rental property maintenance',
    'maintenance schedule',
    'repair tracking',
    'preventive maintenance',
    'maintenance costs',
    'property management',
    'maintenance calendar',
    'repair history',
    'vendor management',
    'property upkeep',
    'maintenance planning',
    'repair log',
    'property maintenance software',
    'landlord tools'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Property Maintenance Tracker - Schedule & Track All Property Repairs',
    description: 'Professional maintenance tracking tool for property managers and landlords. Schedule preventive maintenance, track repair costs, manage vendors, and maintain comprehensive maintenance records.',
    type: 'website',
    images: [
      {
        url: '/placeholder-600x400.svg',
        width: 600,
        height: 400,
        alt: 'Property Maintenance Tracker Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Maintenance Tracker | Professional Property Management Tool',
    description: 'Track maintenance schedules, repair costs, and vendor information. Keep detailed records and never miss important property maintenance tasks.',
    images: ['/placeholder-600x400.svg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/tools/maintenance-tracker'
  }
}