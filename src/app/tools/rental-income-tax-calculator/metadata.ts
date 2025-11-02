import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Income Tax Calculator - Calculate Property Tax Obligations | Property Tools',
  description: 'Free rental income tax calculator to estimate tax obligations on rental property income. Calculate deductions, depreciation, and net taxable rental income.',
  keywords: [
    'rental income tax calculator',
    'property tax calculator',
    'rental property tax',
    'investment property tax calculator',
    'rental income tax estimator',
    'property depreciation calculator',
    'rental tax deductions calculator',
    'landlord tax calculator',
    'real estate tax calculator',
    'rental property tax obligations',
    'investment property taxes',
    'rental income tax planning'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Rental Income Tax Calculator - Calculate Property Tax Obligations',
    description: 'Free rental income tax calculator to estimate tax obligations on rental property income. Calculate deductions and depreciation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Income Tax Calculator - Calculate Property Tax Obligations',
    description: 'Free rental income tax calculator to estimate tax obligations on rental property income.',
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
    canonical: '/tools/rental-income-tax-calculator',
  },
  category: 'Real Estate Tools',
};