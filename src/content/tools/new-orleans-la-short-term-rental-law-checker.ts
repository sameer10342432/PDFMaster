import { CalculatorContent } from '@/types/calculator';

export const newOrleansShortTermRentalContent: CalculatorContent = {
  meta: {
    title: 'New Orleans Short-Term Rental Law Checker | STR Compliance Tool',
    description: 'Check New Orleans short-term rental regulations, zoning compliance, licensing requirements, and permit eligibility for Airbnb and VRBO properties in Louisiana.',
  },
  title: 'New Orleans (LA) Short-Term Rental Law Checker',
  description: 'Verify compliance with New Orleans STR regulations and licensing requirements',
  icon: 'Building',
  category: 'State-Specific Tools',
  subcategory: 'Location Analysis',
  article: {
    title: 'Understanding New Orleans Short-Term Rental Regulations',
    content: `
# New Orleans Short-Term Rental Law Checker

## Overview

New Orleans has some of the most complex short-term rental (STR) regulations in the United States. The city's licensing system, zoning requirements, and enforcement mechanisms are designed to balance tourism revenue with neighborhood preservation and affordable housing concerns.

## New Orleans STR License Types

### 1. Temporary License
- **Homestead Exemption Required**: Owner must claim homestead exemption on the property
- **Duration Limit**: Maximum 90 days per year
- **Residential Occupancy**: Owner must occupy the property as their primary residence
- **Zone Restrictions**: Allowed in most residential zones with restrictions

### 2. Accessory Short-Term Rental (ASTR)
- **Definition**: Renting part of owner-occupied dwelling
- **Owner Presence**: Owner must be present during rental period
- **Units Allowed**: One unit per property
- **Commercial Areas**: Primarily allowed in commercial districts

### 3. Commercial Short-Term Rental
- **Zoning**: Only in specific commercial zones
- **License Cap**: Limited number of licenses available
- **Operator Requirements**: Professional management required
- **Insurance**: Commercial liability insurance mandatory

## Zoning Regulations by District

### French Quarter
- **ASTR Only**: No whole-home rentals permitted
- **Commercial STRs**: Allowed on commercial corridors
- **Enforcement**: Highest scrutiny and frequent inspections

### Garden District & Uptown
- **Temporary Licenses**: Available with homestead exemption
- **90-Day Limit**: Strictly enforced
- **Neighbor Complaints**: Can trigger license review

### Central Business District
- **Commercial STRs**: Permitted in designated buildings
- **Hotel Tax**: Full hotel occupancy tax applies
- **Safety Requirements**: Enhanced fire and safety standards

### Bywater & Marigny
- **Mixed Regulations**: Varies by specific block
- **Community Input**: Strong neighborhood association involvement
- **Historic Preservation**: Additional restrictions in historic districts

## Licensing Requirements

### Application Process
1. **Homestead Exemption Verification** (for temporary licenses)
2. **Good Neighbor Brochure Distribution** to adjacent properties
3. **Safety Inspection** by city officials
4. **Proof of Insurance** (minimum $300,000 liability)
5. **Platform Registration** with city-approved booking platforms
6. **Tax Registration** with Louisiana Department of Revenue

### Ongoing Compliance
- **Annual Renewal**: License must be renewed each year
- **Occupancy Reporting**: Monthly guest stay reports required
- **Tax Remittance**: Hotel occupancy tax (13% + fees)
- **Complaint Response**: Must respond to neighbor complaints within 24 hours
- **Safety Updates**: Annual safety equipment inspection

## Financial Obligations

### Taxes and Fees
- **Hotel Occupancy Tax**: 13% of gross rental revenue
- **State Sales Tax**: 4.45% (varies by parish)
- **License Fee**: $500-$1,000 annually (depending on type)
- **Application Fee**: $150-$350 initial filing

### Insurance Requirements
- **Liability Coverage**: Minimum $300,000
- **Property Damage**: Recommended $500,000+
- **Commercial Policy**: Required for commercial STR licenses
- **Platform Insurance**: Verify Airbnb/VRBO coverage limits

## Common Violations and Penalties

### Operating Without License
- **First Offense**: $500-$1,000 fine
- **Second Offense**: $1,000-$2,500 fine
- **Third Offense**: Criminal citation, up to $5,000 fine

### Exceeding 90-Day Limit
- **Penalty**: $100-$500 per violation day
- **License Revocation**: Possible for repeated violations
- **Platform Blocking**: City can require platforms to block listings

### Zoning Violations
- **Immediate Cease**: Must stop operations immediately
- **Daily Fines**: $500+ per day of continued operation
- **Legal Action**: City can pursue injunction

## Best Practices for Compliance

### Documentation
- **Guest Registry**: Maintain records for 3 years
- **Tax Records**: Keep all tax remittance receipts
- **Complaint Log**: Document all neighbor interactions
- **Inspection Reports**: File annual safety inspection results

### Neighbor Relations
- **Communication**: Provide contact information to neighbors
- **Parking**: Ensure adequate off-street parking
- **Noise Control**: Implement quiet hours and house rules
- **Trash Management**: Provide clear waste disposal instructions

### Professional Management
- **24/7 Contact**: Maintain emergency contact system
- **Property Checks**: Regular property condition inspections
- **Guest Screening**: Verify guest identity and rental purpose
- **Platform Compliance**: Use only city-approved booking platforms

## Changes in 2024-2025

### New Regulations
- **License Moratorium**: New commercial STR licenses limited in residential areas
- **Platform Reporting**: Enhanced data sharing between platforms and city
- **Occupancy Tracking**: GPS and entry monitoring requirements under review
- **Affordable Housing Offset**: Proposed fees to support affordable housing fund

### Enforcement Enhancements
- **Task Force**: Dedicated STR enforcement unit established
- **Technology Tools**: GIS mapping of licensed vs. unlisted STRs
- **Neighbor Hotline**: 24/7 complaint reporting system
- **Expedited Hearings**: Faster adjudication of violations

## Investment Considerations

### Return on Investment
- **High Season Revenue**: $200-$500+ per night during Mardi Gras and festivals
- **Occupancy Rate**: 60-80% annual average in popular areas
- **Operating Costs**: 30-40% of gross revenue typical
- **Break-Even**: 2-4 years for conforming properties

### Risk Factors
- **Regulatory Change**: Ongoing political debate over STR regulations
- **Market Saturation**: Increasing competition in popular areas
- **Hurricane Season**: June-November can impact bookings
- **Legal Compliance**: High cost of violations and legal defense

## How to Use This Tool

1. **Enter Property Address**: Verify zoning classification
2. **Select License Type**: Choose intended rental model
3. **Calculate Days**: Ensure compliance with 90-day limits
4. **Review Requirements**: Check all licensing prerequisites
5. **Estimate Costs**: Calculate fees, taxes, and insurance
6. **Assess Viability**: Determine if STR is financially feasible

## Important Notes

- **Legal Counsel**: Consult an attorney specializing in STR law
- **Neighborhood Associations**: Check for additional restrictions
- **Historic Districts**: May have separate preservation requirements
- **Condo/HOA Rules**: Private restrictions may be more strict than city laws
- **Regular Updates**: New Orleans STR laws change frequently

## Resources

- **City of New Orleans STR Portal**: https://nola.gov/short-term-rentals/
- **Louisiana Hotel/Motel Association**: Industry advocacy and resources
- **STR Compliance Services**: Professional licensing assistance
- **Neighbor Relations Guide**: City-provided "Good Neighbor" materials

This tool helps property owners navigate New Orleans' complex STR landscape and make informed decisions about short-term rental investment and compliance.
    `,
    keywords: [
      'New Orleans short-term rental',
      'NOLA STR license',
      'Airbnb New Orleans',
      'VRBO Louisiana',
      'New Orleans rental regulations',
      'STR compliance',
      'French Quarter rental laws',
      'New Orleans vacation rental',
      'short-term rental permit',
      'NOLA homestead exemption',
    ],
  },
  variables: {
    propertyAddress: {
      label: 'Property Address',
      type: 'text',
      defaultValue: '',
      helpText: 'Enter the full property address in New Orleans',
    },
    propertyType: {
      label: 'Property Type',
      type: 'select',
      defaultValue: 'single-family',
      options: [
        { value: 'single-family', label: 'Single-Family Home' },
        { value: 'condo', label: 'Condominium' },
        { value: 'duplex', label: 'Duplex/Multi-Family' },
        { value: 'apartment', label: 'Apartment' },
        { value: 'commercial', label: 'Commercial Building' },
      ],
      helpText: 'Select your property type',
    },
    homesteadExemption: {
      label: 'Do you have homestead exemption on this property?',
      type: 'select',
      defaultValue: 'yes',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'planning', label: 'Planning to Apply' },
      ],
      helpText: 'Required for temporary STR licenses',
    },
    rentalType: {
      label: 'Intended Rental Type',
      type: 'select',
      defaultValue: 'temporary',
      options: [
        { value: 'temporary', label: 'Temporary (up to 90 days/year)' },
        { value: 'accessory', label: 'Accessory (owner present)' },
        { value: 'commercial', label: 'Commercial STR' },
        { value: 'full-time', label: 'Full-Time Rental' },
      ],
      helpText: 'Select your intended rental model',
    },
    estimatedDays: {
      label: 'Estimated Rental Days Per Year',
      type: 'number',
      defaultValue: 60,
      min: 1,
      max: 365,
      step: 1,
      helpText: 'How many days per year do you plan to rent?',
    },
    nightlyRate: {
      label: 'Average Nightly Rate ($)',
      type: 'number',
      defaultValue: 200,
      min: 50,
      max: 2000,
      step: 10,
      helpText: 'Expected average nightly rental rate',
    },
    district: {
      label: 'New Orleans District',
      type: 'select',
      defaultValue: 'other',
      options: [
        { value: 'french-quarter', label: 'French Quarter' },
        { value: 'garden-district', label: 'Garden District' },
        { value: 'cbd', label: 'Central Business District' },
        { value: 'bywater', label: 'Bywater/Marigny' },
        { value: 'uptown', label: 'Uptown' },
        { value: 'mid-city', label: 'Mid-City' },
        { value: 'other', label: 'Other' },
      ],
      helpText: 'Select the district where your property is located',
    },
  },
  calculate: (inputs) => {
    const nightlyRate = inputs.nightlyRate || 200;
    const estimatedDays = inputs.estimatedDays || 60;
    const rentalType = inputs.rentalType || 'temporary';
    const homesteadExemption = inputs.homesteadExemption || 'no';
    const district = inputs.district || 'other';

    // Calculate gross revenue
    const grossRevenue = nightlyRate * estimatedDays;

    // Calculate taxes
    const hotelTax = grossRevenue * 0.13; // 13% hotel occupancy tax
    const salesTax = grossRevenue * 0.0445; // 4.45% state sales tax
    const totalTaxes = hotelTax + salesTax;

    // License fees
    let licenseFee = 0;
    if (rentalType === 'temporary') licenseFee = 500;
    if (rentalType === 'accessory') licenseFee = 750;
    if (rentalType === 'commercial') licenseFee = 1000;

    const applicationFee = 250;

    // Calculate insurance costs (annual)
    const insuranceCost = rentalType === 'commercial' ? 2500 : 1500;

    // Total costs
    const totalCosts = totalTaxes + licenseFee + insuranceCost;

    // Net revenue
    const netRevenue = grossRevenue - totalCosts;

    // Compliance check
    let complianceStatus = 'Compliant';
    const issues: string[] = [];

    // Check 90-day limit for temporary
    if (rentalType === 'temporary' && estimatedDays > 90) {
      complianceStatus = 'Non-Compliant';
      issues.push('Temporary licenses limited to 90 days per year');
    }

    // Check homestead exemption for temporary
    if (rentalType === 'temporary' && homesteadExemption === 'no') {
      complianceStatus = 'Non-Compliant';
      issues.push('Homestead exemption required for temporary licenses');
    }

    // French Quarter restrictions
    if (district === 'french-quarter' && rentalType === 'temporary') {
      complianceStatus = 'Restricted';
      issues.push('French Quarter only allows accessory STRs (owner present)');
    }

    // Build compliance message
    let complianceMessage = '';
    if (complianceStatus === 'Compliant') {
      complianceMessage = '✓ Your rental plan appears to comply with New Orleans STR regulations';
    } else if (complianceStatus === 'Restricted') {
      complianceMessage = '⚠ Your property may have additional restrictions';
    } else {
      complianceMessage = '✗ Your rental plan does not comply with current regulations';
    }

    return {
      results: {
        grossRevenue: {
          label: 'Estimated Gross Revenue',
          value: grossRevenue,
          type: 'currency' as const,
        },
        hotelTax: {
          label: 'Hotel Occupancy Tax (13%)',
          value: hotelTax,
          type: 'currency' as const,
        },
        salesTax: {
          label: 'State Sales Tax (4.45%)',
          value: salesTax,
          type: 'currency' as const,
        },
        licenseFee: {
          label: 'Annual License Fee',
          value: licenseFee,
          type: 'currency' as const,
        },
        insuranceCost: {
          label: 'Annual Insurance Cost',
          value: insuranceCost,
          type: 'currency' as const,
        },
        totalCosts: {
          label: 'Total Annual Costs',
          value: totalCosts,
          type: 'currency' as const,
        },
        netRevenue: {
          label: 'Estimated Net Revenue',
          value: netRevenue,
          type: 'currency' as const,
        },
        complianceStatus: {
          label: 'Compliance Status',
          value: complianceStatus,
          type: 'text' as const,
        },
        complianceMessage: {
          label: 'Compliance Assessment',
          value: complianceMessage,
          type: 'text' as const,
        },
        issues: {
          label: 'Compliance Issues',
          value: issues.length > 0 ? issues.join('; ') : 'None identified',
          type: 'text' as const,
        },
      },
    };
  },
};
