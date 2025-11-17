import { CalculatorContent } from '@/types/calculator';

export const seattleDuvallFeeContent: CalculatorContent = {
  meta: {
    title: 'Seattle Duvall Fee Estimator | Development Impact Fees Calculator',
    description: 'Calculate Seattle and King County development impact fees, transportation fees, park fees, and school impact fees for new construction and residential development in Washington.',
  },
  title: 'Seattle (WA) "Duvall" Fee Estimator',
  description: 'Calculate development impact fees and Duvall fees for Seattle projects',
  icon: 'Calculator',
  category: 'State-Specific Tools',
  subcategory: 'Location Analysis',
  article: {
    title: 'Understanding Seattle Development Impact Fees and Duvall Fees',
    content: `
# Seattle Development Impact Fees Estimator

## Overview

Development impact fees in Seattle and King County help fund infrastructure improvements necessitated by new development. Understanding these fees is critical for accurate project budgeting and feasibility analysis.

## Types of Impact Fees

### Transportation Impact Fees
Transportation impact fees fund road improvements, traffic signals, sidewalks, and transit infrastructure needed to accommodate new development.

**Residential Fees** (per dwelling unit):
- Single-Family Home: $7,500-$12,000
- Townhouse/Duplex: $6,000-$9,500
- Multifamily (3+ units): $4,500-$7,500

**Commercial Fees** (per 1,000 sq ft):
- Retail: $8,500-$14,000
- Office: $6,500-$11,000
- Industrial: $3,500-$6,000
- Restaurant: $15,000-$22,000

### Park Impact Fees
Park fees fund acquisition and development of parks, trails, and open spaces.

**Residential**: $2,500-$4,500 per dwelling unit
**Commercial**: Generally exempt unless mixed-use

### School Impact Fees
School impact fees fund new schools and educational facilities in growing areas.

**King County School Districts**:
- Elementary Impact: $8,000-$12,000 per home
- Middle School: $4,000-$6,000 per home
- High School: $6,000-$9,000 per home
- **Total Average**: $18,000-$27,000 per residential unit

### Fire/EMS Impact Fees
Emergency services fees fund fire stations and equipment.

**Fee Range**: $500-$2,000 per dwelling unit or per 5,000 sq ft commercial

## Fee Calculations by Project Type

### Single-Family Home (2,500 sq ft)
- Transportation Fee: $10,000
- Park Fee: $3,500
- School Fee (if applicable): $22,000
- Fire/EMS Fee: $1,200
- **Total**: $36,700

### Townhouse Development (10 units)
- Transportation Fee: $75,000 ($7,500/unit)
- Park Fee: $30,000 ($3,000/unit)
- School Fee: $200,000 ($20,000/unit)
- Fire/EMS Fee: $10,000 ($1,000/unit)
- **Total**: $315,000

### Multifamily Apartment (50 units)
- Transportation Fee: $300,000 ($6,000/unit)
- Park Fee: $150,000 ($3,000/unit)
- School Fee: $0 (often exempt for multifamily)
- Fire/EMS Fee: $40,000 ($800/unit)
- **Total**: $490,000 ($9,800/unit)

### Commercial Retail (20,000 sq ft)
- Transportation Fee: $240,000 ($12,000 per 1,000 sf)
- Park Fee: $0 (exempt)
- School Fee: $0 (exempt)
- Fire/EMS Fee: $8,000
- **Total**: $248,000

## Geographic Variations

### Seattle City Limits
- **Higher Transportation Fees**: Urban areas pay premium
- **Additional Fees**: May include streetscape improvements
- **SEPA Review**: Environmental review costs $5,000-$25,000
- **Utility Connection**: Sewer/water can add $15,000-$40,000

### Unincorporated King County
- **Standard Fees**: County-wide fee schedule
- **Road Standards**: May require road improvements
- **Septic vs. Sewer**: Impacts utility costs significantly
- **Fire District Fees**: Vary by district

### Suburban Cities (Bellevue, Redmond, Renton)
- **Local Variations**: Each city sets own fee schedule
- **Affordable Housing**: Some cities offer fee reductions
- **Mixed-Use Incentives**: Reduced fees for downtown development
- **TDR Programs**: Transfer of development rights may reduce fees

## Fee Payment Timing

### At Building Permit Issuance
- **Most Common**: Fees due when permit issued
- **Cash Flow Impact**: Must budget upfront
- **No Interest**: Fees don't accrue interest if paid promptly

### Deferred Payment Options
- **Affordable Housing**: Fee deferral available
- **Economic Hardship**: Case-by-case consideration
- **Payment Plans**: Some jurisdictions allow installments

## Exemptions and Reductions

### Affordable Housing Projects
- **80% AMI or Below**: 50-100% fee reduction
- **Inclusionary Zoning**: Fee waivers for required affordable units
- **Nonprofit Developers**: Additional incentives available

### Accessory Dwelling Units (ADUs)
- **Owner-Occupied**: Often exempt from impact fees
- **Size Limits**: ADUs under 800 sq ft typically exempt
- **Rental Restrictions**: May require affordable rent commitment

### Redevelopment Projects
- **Credit for Existing Use**: Fees based on net new impact
- **Brownfield Cleanup**: Additional incentives may apply
- **Historic Buildings**: Some fee reductions available

## Recent Changes (2024-2025)

### Fee Increases
- **Transportation Fees**: Increased 15% average in 2024
- **School Fees**: Up 20% in high-growth districts
- **Indexing**: Annual CPI adjustments now standard

### New Fee Programs
- **Climate Impact Fee**: Proposed carbon offset fee
- **Stormwater Fee**: Enhanced stormwater management charges
- **Complete Streets**: Bike/pedestrian infrastructure fees

## Planning for Impact Fees

### Budget Allocation
- **Preliminary Budget**: Include 15-20% of hard costs for all fees
- **Contingency**: Add 10% buffer for fee increases
- **Timing**: Understand payment schedule early

### Cost Reduction Strategies
- **Fee Studies**: Challenge fees if disproportionate
- **Phased Development**: Spread fees over time
- **Density Bonuses**: Achieve fee reduction through added density
- **TDR/FAR Purchase**: May reduce per-unit fees

## How to Use This Tool

1. **Select Project Type**: Residential or commercial
2. **Enter Size Details**: Units or square footage
3. **Choose Location**: Seattle, King County, or suburban city
4. **Review Fee Breakdown**: Understand each fee component
5. **Plan Budget**: Incorporate fees into pro forma
6. **Explore Reductions**: Identify potential exemptions

This tool provides estimated impact fees for development projects in the Seattle metropolitan area, helping developers and property owners budget accurately.
    `,
    keywords: [
      'Seattle impact fees',
      'development fees Seattle',
      'King County impact fees',
      'Duvall fees',
      'transportation impact fee',
      'school impact fee Washington',
      'Seattle development costs',
      'impact fee calculator',
      'Seattle permit fees',
      'King County development',
    ],
  },
  variables: {
    projectType: {
      label: 'Project Type',
      type: 'select',
      defaultValue: 'single-family',
      options: [
        { value: 'single-family', label: 'Single-Family Home' },
        { value: 'townhouse', label: 'Townhouse/Duplex' },
        { value: 'multifamily', label: 'Multifamily (3+ units)' },
        { value: 'retail', label: 'Commercial Retail' },
        { value: 'office', label: 'Commercial Office' },
        { value: 'industrial', label: 'Industrial' },
      ],
      helpText: 'Type of development project',
    },
    units: {
      label: 'Number of Units (if residential)',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 500,
      step: 1,
      helpText: 'Total dwelling units',
    },
    squareFeet: {
      label: 'Square Feet (if commercial)',
      type: 'number',
      defaultValue: 5000,
      min: 1000,
      max: 500000,
      step: 100,
      helpText: 'Total commercial square footage',
    },
    location: {
      label: 'Location',
      type: 'select',
      defaultValue: 'seattle',
      options: [
        { value: 'seattle', label: 'Seattle City Limits' },
        { value: 'king-county', label: 'Unincorporated King County' },
        { value: 'bellevue', label: 'Bellevue' },
        { value: 'redmond', label: 'Redmond' },
        { value: 'renton', label: 'Renton' },
      ],
      helpText: 'Project location',
    },
    affordableHousing: {
      label: 'Affordable Housing Component?',
      type: 'select',
      defaultValue: 'no',
      options: [
        { value: 'no', label: 'No' },
        { value: 'partial', label: 'Yes (Partial - 20% affordable)' },
        { value: 'full', label: 'Yes (100% affordable)' },
      ],
      helpText: 'Is this an affordable housing project?',
    },
    includeSchoolFees: {
      label: 'Include School Impact Fees?',
      type: 'select',
      defaultValue: 'yes',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No (exempt district or project type)' },
      ],
      helpText: 'School fees apply to most single-family developments',
    },
  },
  calculate: (inputs) => {
    const projectType = inputs.projectType || 'single-family';
    const units = inputs.units || 1;
    const squareFeet = inputs.squareFeet || 5000;
    const location = inputs.location || 'seattle';
    const affordableHousing = inputs.affordableHousing || 'no';
    const includeSchoolFees = inputs.includeSchoolFees || 'yes';

    let transportationFee = 0;
    let parkFee = 0;
    let schoolFee = 0;
    let fireFee = 0;

    // Calculate fees based on project type
    if (projectType === 'single-family') {
      transportationFee = 10000 * units;
      parkFee = 3500 * units;
      schoolFee = includeSchoolFees === 'yes' ? 22000 * units : 0;
      fireFee = 1200 * units;
    } else if (projectType === 'townhouse') {
      transportationFee = 7500 * units;
      parkFee = 3000 * units;
      schoolFee = includeSchoolFees === 'yes' ? 20000 * units : 0;
      fireFee = 1000 * units;
    } else if (projectType === 'multifamily') {
      transportationFee = 6000 * units;
      parkFee = 3000 * units;
      schoolFee = 0; // typically exempt
      fireFee = 800 * units;
    } else if (projectType === 'retail') {
      const thousandSqFt = squareFeet / 1000;
      transportationFee = 12000 * thousandSqFt;
      parkFee = 0;
      schoolFee = 0;
      fireFee = (squareFeet / 5000) * 1500;
    } else if (projectType === 'office') {
      const thousandSqFt = squareFeet / 1000;
      transportationFee = 8500 * thousandSqFt;
      parkFee = 0;
      schoolFee = 0;
      fireFee = (squareFeet / 5000) * 1200;
    } else if (projectType === 'industrial') {
      const thousandSqFt = squareFeet / 1000;
      transportationFee = 4500 * thousandSqFt;
      parkFee = 0;
      schoolFee = 0;
      fireFee = (squareFeet / 5000) * 800;
    }

    // Location adjustments
    if (location === 'seattle') {
      // Seattle fees are baseline
      transportationFee *= 1.15; // 15% higher in Seattle proper
    } else if (location === 'bellevue') {
      transportationFee *= 1.10;
      parkFee *= 1.20; // Bellevue emphasizes parks
    } else if (location === 'redmond') {
      transportationFee *= 1.05;
    }

    // Affordable housing discounts
    let discount = 0;
    if (affordableHousing === 'partial') {
      discount = 0.20; // 20% reduction
    } else if (affordableHousing === 'full') {
      discount = 0.75; // 75% reduction
    }

    const totalBeforeDiscount = transportationFee + parkFee + schoolFee + fireFee;
    const discountAmount = totalBeforeDiscount * discount;
    const totalFees = totalBeforeDiscount - discountAmount;

    // Additional fees estimate
    const sepaReview = projectType !== 'single-family' && units > 5 ? 15000 : 0;
    const utilityConnection = (projectType.includes('family') || projectType === 'townhouse') ? units * 8000 : (squareFeet / 1000) * 2000;

    const grandTotal = totalFees + sepaReview + utilityConnection;

    // Per unit calculation for residential
    const perUnitFee = (projectType === 'single-family' || projectType === 'townhouse' || projectType === 'multifamily') ? 
      totalFees / units : 0;

    return {
      results: {
        transportationFee: {
          label: 'Transportation Impact Fee',
          value: transportationFee,
          type: 'currency' as const,
        },
        parkFee: {
          label: 'Park Impact Fee',
          value: parkFee,
          type: 'currency' as const,
        },
        schoolFee: {
          label: 'School Impact Fee',
          value: schoolFee,
          type: 'currency' as const,
        },
        fireFee: {
          label: 'Fire/EMS Fee',
          value: fireFee,
          type: 'currency' as const,
        },
        totalBeforeDiscount: {
          label: 'Total Impact Fees (before discount)',
          value: totalBeforeDiscount,
          type: 'currency' as const,
        },
        discountAmount: {
          label: 'Affordable Housing Discount',
          value: discountAmount,
          type: 'currency' as const,
        },
        totalFees: {
          label: 'Total Impact Fees',
          value: totalFees,
          type: 'currency' as const,
        },
        sepaReview: {
          label: 'SEPA Environmental Review (if applicable)',
          value: sepaReview,
          type: 'currency' as const,
        },
        utilityConnection: {
          label: 'Utility Connection Fees (estimate)',
          value: utilityConnection,
          type: 'currency' as const,
        },
        grandTotal: {
          label: 'Total Development Fees',
          value: grandTotal,
          type: 'currency' as const,
        },
        perUnitFee: {
          label: 'Per Unit Fee (if residential)',
          value: perUnitFee,
          type: 'currency' as const,
        },
      },
    };
  },
};
