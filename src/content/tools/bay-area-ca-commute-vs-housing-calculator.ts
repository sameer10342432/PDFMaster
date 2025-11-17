import { CalculatorContent } from '@/types/calculator';

export const bayAreaCommuteHousingContent: CalculatorContent = {
  meta: {
    title: 'Bay Area Commute vs Housing Cost Calculator | California ROI Analysis',
    description: 'Compare Bay Area housing costs vs commute expenses. Calculate total cost of ownership for San Francisco, Oakland, San Jose, and suburban locations in California.',
  },
  title: 'Bay Area (CA) Commute vs. Housing Calculator',
  description: 'Compare total costs of living closer vs. farther from work in the Bay Area',
  icon: 'Car',
  category: 'State-Specific Tools',
  subcategory: 'Location Analysis',
  article: {
    title: 'Bay Area Commute vs. Housing Cost Analysis',
    content: `
# Bay Area Commute vs. Housing Calculator

## The Bay Area Trade-Off

The San Francisco Bay Area presents a unique dilemma: pay premium prices to live near work, or save on housing but spend more on commuting and lose valuable time.

## Housing Cost by Location

### San Francisco
- **Median Home**: $1,300,000
- **Median Rent (1BR)**: $3,200/month
- **Median Rent (2BR)**: $4,400/month

### Oakland/Berkeley
- **Median Home**: $900,000
- **Median Rent (1BR)**: $2,400/month
- **Median Rent (2BR)**: $3,200/month

### San Jose/South Bay
- **Median Home**: $1,200,000
- **Median Rent (1BR)**: $2,800/month
- **Median Rent (2BR)**: $3,600/month

### Peninsula (Burlingame, San Mateo)
- **Median Home**: $1,500,000
- **Median Rent (1BR)**: $3,000/month
- **Median Rent (2BR)**: $4,000/month

### Outer Bay Area (Walnut Creek, Livermore)
- **Median Home**: $750,000
- **Median Rent (1BR)**: $2,200/month
- **Median Rent (2BR)**: $2,800/month

### Far Suburbs (Tracy, Antioch, Vallejo)
- **Median Home**: $600,000
- **Median Rent (1BR)**: $1,800/month
- **Median Rent (2BR)**: $2,400/month

## Commute Costs

### Direct Costs
**Driving (per mile)**
- **Gas**: $0.15-$0.25/mile
- **Maintenance**: $0.08/mile
- **Insurance**: $0.06/mile
- **Depreciation**: $0.12/mile
- **Total**: $0.41-$0.51/mile

**Public Transit**
- **BART Monthly Pass**: $150-$250
- **Caltrain Monthly**: $200-$350
- **AC Transit**: $80-$100
- **Combined**: $250-$400/month typical

### Time Value
**Hourly Rate × Commute Hours = Lost Income Potential**

If you earn $100,000/year ($48/hour):
- **1-hour daily commute**: ~$1,000/month in time value
- **2-hour daily commute**: ~$2,000/month in time value

## Total Cost Comparison Examples

### Example 1: Tech Worker in San Francisco
**Option A: Live in SF (walkable to office)**
- **Rent (1BR)**: $3,200/month
- **Commute Cost**: $0
- **Commute Time**: 0 hours
- **Total**: $3,200/month

**Option B: Live in Walnut Creek**
- **Rent (1BR)**: $2,200/month
- **BART + Parking**: $350/month
- **Commute Time**: 2 hours/day
- **Time Value**: $2,000/month
- **Total Effective Cost**: $4,550/month

**Verdict**: Living in SF saves $1,350/month!

### Example 2: Suburban Family
**Option A: Peninsula Home**
- **Mortgage (30yr, $1.5M, 20% down)**: $6,800/month
- **Commute (10 miles)**: $200/month
- **Time Value**: $500/month
- **Total**: $7,500/month

**Option B: Tracy Home**
- **Mortgage (30yr, $600K, 20% down)**: $2,700/month
- **Commute (60 miles)**: $600/month
- **Time Value**: $2,000/month
- **Total**: $5,300/month

**Verdict**: Tracy saves $2,200/month (but 2hr commute daily)

## Quality of Life Factors

### Living Close to Work
**Pros:**
- More family time
- Better work-life balance
- Less stress
- Health benefits (less sitting)
- Walkable neighborhoods
- Cultural amenities

**Cons:**
- Higher housing costs
- Smaller living space
- Less yard/outdoor space
- Higher cost of living generally

### Long Commute
**Pros:**
- Larger homes
- More affordable
- Bigger yards
- Lower overall cost of living

**Cons:**
- 10-20 hours/week commuting
- Stress and fatigue
- Vehicle wear and tear
- Environmental impact
- Less family time
- Health impacts

## Break-Even Analysis

### When Close Living Makes Sense
- **High Income**: >$150K/year (time very valuable)
- **No Car Needed**: Transit/walk/bike to work
- **Small Household**: 1-2 people (smaller space OK)
- **Short-Term**: 2-5 year timeline

### When Suburbs Make Sense
- **Family**: Need space for children
- **Long-Term**: 10+ year timeline (build equity)
- **Flexible Schedule**: Hybrid/remote options
- **Low Time Value**: Enjoy commute time (podcasts, reading)

## 5-Year Total Cost of Ownership

### Living in SF ($1.3M Condo)
- **Down Payment**: $260K
- **Mortgage**: $408K (5 years)
- **HOA**: $30K
- **Property Tax**: $65K
- **Maintenance**: $20K
- **Commute**: $0
- **Total Out-of-Pocket**: $783K
- **Equity Gained**: ~$150K
- **Net Cost**: $633K

### Living in Tracy ($600K Home)
- **Down Payment**: $120K
- **Mortgage**: $188K (5 years)
- **Property Tax**: $30K
- **Maintenance**: $15K
- **Commute Costs**: $36K (gas + wear)
- **Time Value**: $120K (2 hrs/day)
- **Total Out-of-Pocket**: $509K
- **Equity Gained**: ~$80K
- **Net Cost**: $429K

**Financial Savings**: Tracy saves $204K over 5 years
**But**: Lost 2,600 hours (3.6 months of 24/7 time)

## Decision Framework

### Calculate Your Personal Formula
1. **Housing Cost Difference**: City premium
2. **Commute Direct Cost**: Gas, transit, etc.
3. **Time Value**: Your hourly rate × commute hours
4. **Quality of Life Value**: How much is time worth to you?

**Total Cost = Housing + Commute + (Time × Personal Value)**

### Use This Tool To:
1. Input your work location
2. Compare 2-3 housing options
3. Calculate commute costs and time
4. Assign value to your time
5. See total monthly and 5-year costs
6. Make an informed decision

This calculator helps Bay Area workers make data-driven decisions about the housing-commute trade-off.
    `,
    keywords: [
      'Bay Area commute costs',
      'San Francisco housing',
      'California commute calculator',
      'Bay Area cost of living',
      'SF vs Oakland housing',
      'Bay Area suburbs',
      'BART commute cost',
      'Silicon Valley housing',
      'Bay Area ROI',
      'commute time value',
    ],
  },
  variables: {
    workLocation: {
      label: 'Work Location',
      type: 'select',
      defaultValue: 'sf-downtown',
      options: [
        { value: 'sf-downtown', label: 'San Francisco - Downtown' },
        { value: 'sf-soma', label: 'San Francisco - SoMa/South Beach' },
        { value: 'oakland', label: 'Oakland' },
        { value: 'san-jose', label: 'San Jose' },
        { value: 'palo-alto', label: 'Palo Alto/Stanford' },
        { value: 'mountain-view', label: 'Mountain View/Sunnyvale' },
      ],
      helpText: 'Where do you work?',
    },
    housingOptionA: {
      label: 'Option A: Housing Location',
      type: 'select',
      defaultValue: 'sf',
      options: [
        { value: 'sf', label: 'San Francisco' },
        { value: 'oakland', label: 'Oakland/Berkeley' },
        { value: 'peninsula', label: 'Peninsula (San Mateo, Burlingame)' },
        { value: 'south-bay', label: 'South Bay (San Jose)' },
        { value: 'outer-bay', label: 'Outer Bay (Walnut Creek, Livermore)' },
        { value: 'far-suburbs', label: 'Far Suburbs (Tracy, Antioch)' },
      ],
      helpText: 'First housing option to compare',
    },
    housingCostA: {
      label: 'Option A: Monthly Housing Cost ($)',
      type: 'number',
      defaultValue: 3500,
      min: 1500,
      max: 15000,
      step: 100,
      helpText: 'Rent or mortgage payment',
    },
    commuteDistanceA: {
      label: 'Option A: Commute Distance (miles one-way)',
      type: 'number',
      defaultValue: 5,
      min: 0,
      max: 80,
      step: 1,
      helpText: 'Distance from home to work',
    },
    housingOptionB: {
      label: 'Option B: Housing Location',
      type: 'select',
      defaultValue: 'outer-bay',
      options: [
        { value: 'sf', label: 'San Francisco' },
        { value: 'oakland', label: 'Oakland/Berkeley' },
        { value: 'peninsula', label: 'Peninsula (San Mateo, Burlingame)' },
        { value: 'south-bay', label: 'South Bay (San Jose)' },
        { value: 'outer-bay', label: 'Outer Bay (Walnut Creek, Livermore)' },
        { value: 'far-suburbs', label: 'Far Suburbs (Tracy, Antioch)' },
      ],
      helpText: 'Second housing option to compare',
    },
    housingCostB: {
      label: 'Option B: Monthly Housing Cost ($)',
      type: 'number',
      defaultValue: 2400,
      min: 1500,
      max: 15000,
      step: 100,
      helpText: 'Rent or mortgage payment',
    },
    commuteDistanceB: {
      label: 'Option B: Commute Distance (miles one-way)',
      type: 'number',
      defaultValue: 35,
      min: 0,
      max: 80,
      step: 1,
      helpText: 'Distance from home to work',
    },
    annualIncome: {
      label: 'Annual Income ($)',
      type: 'number',
      defaultValue: 120000,
      min: 50000,
      max: 500000,
      step: 10000,
      helpText: 'Your gross annual income',
    },
    daysPerWeek: {
      label: 'Commute Days Per Week',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 7,
      step: 1,
      helpText: 'How many days do you commute?',
    },
    commuteMethod: {
      label: 'Primary Commute Method',
      type: 'select',
      defaultValue: 'driving',
      options: [
        { value: 'driving', label: 'Driving (personal vehicle)' },
        { value: 'bart', label: 'BART' },
        { value: 'caltrain', label: 'Caltrain' },
        { value: 'bus', label: 'Bus/AC Transit' },
        { value: 'bike-walk', label: 'Bike/Walk' },
      ],
      helpText: 'How do you commute?',
    },
  },
  calculate: (inputs) => {
    const housingCostA = inputs.housingCostA || 3500;
    const commuteDistanceA = inputs.commuteDistanceA || 5;
    const housingCostB = inputs.housingCostB || 2400;
    const commuteDistanceB = inputs.commuteDistanceB || 35;
    const annualIncome = inputs.annualIncome || 120000;
    const daysPerWeek = inputs.daysPerWeek || 5;
    const commuteMethod = inputs.commuteMethod || 'driving';

    // Calculate hourly rate
    const hourlyRate = annualIncome / 2080; // 2080 work hours per year

    // Commute cost per mile
    let costPerMile = 0.45; // Default driving
    let speedMph = 30; // Average speed

    if (commuteMethod === 'bart') {
      costPerMile = 0.20;
      speedMph = 40;
    } else if (commuteMethod === 'caltrain') {
      costPerMile = 0.25;
      speedMph = 45;
    } else if (commuteMethod === 'bus') {
      costPerMile = 0.10;
      speedMph = 25;
    } else if (commuteMethod === 'bike-walk') {
      costPerMile = 0.02;
      speedMph = 12;
    }

    // Option A calculations
    const monthlyCommuteDistanceA = commuteDistanceA * 2 * daysPerWeek * 4.33; // Round trips per month
    const monthlyCommuteCostA = monthlyCommuteDistanceA * costPerMile;
    const dailyCommuteTimeA = (commuteDistanceA * 2) / speedMph; // Hours per day
    const monthlyCommuteHoursA = dailyCommuteTimeA * daysPerWeek * 4.33;
    const monthlyTimeValueA = monthlyCommuteHoursA * hourlyRate;
    const totalMonthlyCostA = housingCostA + monthlyCommuteCostA + monthlyTimeValueA;

    // Option B calculations
    const monthlyCommuteDistanceB = commuteDistanceB * 2 * daysPerWeek * 4.33;
    const monthlyCommuteCostB = monthlyCommuteDistanceB * costPerMile;
    const dailyCommuteTimeB = (commuteDistanceB * 2) / speedMph;
    const monthlyCommuteHoursB = dailyCommuteTimeB * daysPerWeek * 4.33;
    const monthlyTimeValueB = monthlyCommuteHoursB * hourlyRate;
    const totalMonthlyCostB = housingCostB + monthlyCommuteCostB + monthlyTimeValueB;

    // Comparison
    const monthlySavings = totalMonthlyCostA - totalMonthlyCostB;
    const annualSavings = monthlySavings * 12;
    const fiveYearSavings = annualSavings * 5;

    // Annual commute time difference
    const annualHourDifferenceA = monthlyCommuteHoursA * 12;
    const annualHourDifferenceB = monthlyCommuteHoursB * 12;
    const annualTimeSaved = annualHourDifferenceB - annualHourDifferenceA;

    return {
      results: {
        totalMonthlyCostA: {
          label: 'Option A: Total Monthly Cost',
          value: totalMonthlyCostA,
          type: 'currency' as const,
        },
        housingCostA: {
          label: 'Option A: Housing Cost',
          value: housingCostA,
          type: 'currency' as const,
        },
        monthlyCommuteCostA: {
          label: 'Option A: Monthly Commute Cost',
          value: monthlyCommuteCostA,
          type: 'currency' as const,
        },
        monthlyTimeValueA: {
          label: 'Option A: Monthly Time Value',
          value: monthlyTimeValueA,
          type: 'currency' as const,
        },
        monthlyCommuteHoursA: {
          label: 'Option A: Monthly Commute Hours',
          value: monthlyCommuteHoursA,
          type: 'number' as const,
          precision: 1,
        },
        totalMonthlyCostB: {
          label: 'Option B: Total Monthly Cost',
          value: totalMonthlyCostB,
          type: 'currency' as const,
        },
        housingCostB: {
          label: 'Option B: Housing Cost',
          value: housingCostB,
          type: 'currency' as const,
        },
        monthlyCommuteCostB: {
          label: 'Option B: Monthly Commute Cost',
          value: monthlyCommuteCostB,
          type: 'currency' as const,
        },
        monthlyTimeValueB: {
          label: 'Option B: Monthly Time Value',
          value: monthlyTimeValueB,
          type: 'currency' as const,
        },
        monthlyCommuteHoursB: {
          label: 'Option B: Monthly Commute Hours',
          value: monthlyCommuteHoursB,
          type: 'number' as const,
          precision: 1,
        },
        monthlySavings: {
          label: 'Monthly Savings (A vs B)',
          value: monthlySavings,
          type: 'currency' as const,
        },
        annualSavings: {
          label: 'Annual Savings (A vs B)',
          value: annualSavings,
          type: 'currency' as const,
        },
        fiveYearSavings: {
          label: '5-Year Savings (A vs B)',
          value: fiveYearSavings,
          type: 'currency' as const,
        },
        annualTimeSaved: {
          label: 'Annual Hours Saved (Option A)',
          value: annualTimeSaved,
          type: 'number' as const,
          precision: 0,
        },
      },
    };
  },
};
