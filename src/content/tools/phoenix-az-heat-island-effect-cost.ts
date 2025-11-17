import { CalculatorContent } from '@/types/calculator';

export const phoenixHeatIslandContent: CalculatorContent = {
  meta: {
    title: 'Phoenix Heat Island Effect Cost Calculator | Arizona Cooling Costs',
    description: 'Calculate Phoenix urban heat island cooling costs, energy bills, and mitigation strategies. Estimate AC costs and heat-reduction investments in Arizona.',
  },
  title: 'Phoenix (AZ) "Heat Island" Effect Cost',
  description: 'Calculate cooling costs and mitigation strategies for Phoenix heat islands',
  icon: 'Sun',
  category: 'State-Specific Tools',
  subcategory: 'Location Analysis',
  article: {
    title: 'Phoenix Urban Heat Island: Costs and Mitigation Strategies',
    content: `
# Phoenix Heat Island Effect Cost Calculator

## Understanding Urban Heat Islands

Phoenix experiences extreme urban heat island (UHI) effects where developed areas are significantly hotter than surrounding desert. Temperature differences can reach 10-15°F between urban and rural areas.

## Heat Island Temperature Variations

### By Location Type
- **Dense Urban Core**: +12-15°F above baseline
- **Suburban Areas**: +6-10°F above baseline
- **Green/Tree-Covered**: +2-4°F above baseline
- **Desert Baseline**: Reference temperature

### Peak Summer Impact
- **Downtown Phoenix**: 115-120°F surface temps
- **Suburban Asphalt**: 110-115°F
- **Shaded/Vegetated**: 95-105°F
- **Pavement Surfaces**: 150-180°F!

## Cooling Cost Impact

### Monthly AC Costs by Location
**1,500 sq ft Home, July-August Peak**

**Dense Urban (115°F peak)**
- **Monthly Cost**: $250-$350
- **Annual Cost**: $2,200-$2,800
- **kWh Usage**: 2,000-2,800 monthly

**Suburban (110°F peak)**
- **Monthly Cost**: $200-$280
- **Annual Cost**: $1,800-$2,300
- **kWh Usage**: 1,600-2,200 monthly

**Cooler Areas (105°F peak)**
- **Monthly Cost**: $150-$210
- **Annual Cost**: $1,400-$1,800
- **kWh Usage**: 1,200-1,600 monthly

## Mitigation Strategies & Costs

### Cool Roof Coating
- **Cost**: $2,000-$4,000
- **Annual Savings**: $300-$600
- **Payback**: 4-8 years
- **Temp Reduction**: 10-15°F roof surface

### Shade Trees (Mature)
- **Cost**: $500-$1,500 per tree (planted)
- **Annual Savings**: $100-$200 per tree
- **Payback**: 5-10 years
- **Temp Reduction**: 5-8°F in shade

### Desert Landscaping
- **Cost**: $3-$6 per sq ft
- **Savings**: $150-$300 annually
- **Benefit**: Lower irrigation + cooling
- **Temp Reduction**: 2-4°F

### Window Tinting/Solar Screens
- **Cost**: $5-$15 per sq ft
- **Annual Savings**: $200-$400
- **Payback**: 3-6 years
- **Temp Reduction**: 5-10°F interior

### High-Efficiency AC Upgrade
- **Cost**: $5,000-$8,000
- **Annual Savings**: $500-$1,000
- **Payback**: 6-10 years
- **Efficiency**: 20 SEER vs 14 SEER

## Long-Term Financial Impact

### 10-Year Cost Comparison
**Dense Urban Home (no mitigation)**
- **Cooling Costs**: $25,000
- **Mitigation**: $0
- **Total**: $25,000

**Mitigated Urban Home**
- **Cooling Costs**: $17,000
- **Mitigation Investment**: $8,000
- **Total**: $25,000 (break-even + comfort!)

**Well-Mitigated Home**
- **Cooling Costs**: $15,000
- **Mitigation Investment**: $12,000
- **Total**: $27,000 (slight premium but much cooler)

## Health & Comfort Considerations

### Heat-Related Risks
- **Heat Exhaustion**: Increased risk in UHI zones
- **Sleep Quality**: Poor sleep in hot homes
- **Outdoor Activity**: Limited during peak heat
- **Property Damage**: AC strain, roof degradation

### Quality of Life
- **Comfort**: Significant improvement with mitigation
- **Usability**: Expanded outdoor living hours
- **Resale**: Energy-efficient homes premium
- **Insurance**: Lower AC repair/replacement costs

## Property Value Impact

### Energy-Efficient Features Premium
- **Cool Roof**: +$2,000-$5,000 value
- **Mature Trees**: +$5,000-$15,000 value
- **Solar Panels**: +$15,000-$30,000 value
- **New High-Efficiency AC**: +$3,000-$6,000 value

### Location Desirability
- **Established Tree-Lined Streets**: 5-10% premium
- **Desert View Lots**: 3-7% premium
- **Dense Urban**: 0-5% discount (heat concerns)

    `,
    keywords: [
      'Phoenix heat island',
      'Arizona cooling costs',
      'Phoenix AC costs',
      'urban heat island',
      'Phoenix energy bills',
      'heat mitigation Phoenix',
      'cool roof Arizona',
      'Phoenix summer costs',
      'desert landscaping Phoenix',
    ],
  },
  variables: {
    homeSize: {
      label: 'Home Size (square feet)',
      type: 'number',
      defaultValue: 1800,
      min: 800,
      max: 8000,
      step: 100,
      helpText: 'Total living space',
    },
    locationHeatLevel: {
      label: 'Location Heat Level',
      type: 'select',
      defaultValue: 'suburban',
      options: [
        { value: 'dense-urban', label: 'Dense Urban (+12-15°F)' },
        { value: 'suburban', label: 'Suburban (+6-10°F)' },
        { value: 'cooler', label: 'Tree-Covered/Cooler (+2-4°F)' },
      ],
      helpText: 'Heat island intensity',
    },
    currentACEfficiency: {
      label: 'Current AC Efficiency (SEER)',
      type: 'number',
      defaultValue: 14,
      min: 10,
      max: 22,
      step: 1,
      helpText: 'SEER rating of AC system',
    },
    electricityRate: {
      label: 'Electricity Rate (¢/kWh)',
      type: 'number',
      defaultValue: 13,
      min: 8,
      max: 25,
      step: 0.5,
      helpText: 'Your electricity cost per kWh',
    },
    mitigationInvestment: {
      label: 'Mitigation Investment',
      type: 'select',
      defaultValue: 'none',
      options: [
        { value: 'none', label: 'None - Current State' },
        { value: 'basic', label: 'Basic ($2,000-4,000)' },
        { value: 'moderate', label: 'Moderate ($6,000-10,000)' },
        { value: 'comprehensive', label: 'Comprehensive ($12,000-18,000)' },
      ],
      helpText: 'Heat mitigation investment level',
    },
  },
  calculate: (inputs) => {
    const homeSize = inputs.homeSize || 1800;
    const locationHeatLevel = inputs.locationHeatLevel || 'suburban';
    const currentACEfficiency = inputs.currentACEfficiency || 14;
    const electricityRate = (inputs.electricityRate || 13) / 100; // Convert to dollars
    const mitigationInvestment = inputs.mitigationInvestment || 'none';

    // Base cooling load multiplier
    let heatMultiplier = 1.0;
    if (locationHeatLevel === 'dense-urban') heatMultiplier = 1.30;
    if (locationHeatLevel === 'suburban') heatMultiplier = 1.15;
    if (locationHeatLevel === 'cooler') heatMultiplier = 1.00;

    // Calculate base annual cooling kWh
    const baseAnnualKwh = homeSize * 10; // Baseline: 10 kWh per sq ft
    const adjustedKwh = baseAnnualKwh * heatMultiplier * (14 / currentACEfficiency);

    // Calculate cost before mitigation
    const annualCostBeforeMitigation = adjustedKwh * electricityRate;

    // Mitigation savings
    let savingsPercentage = 0;
    let mitigationCost = 0;

    if (mitigationInvestment === 'basic') {
      savingsPercentage = 0.15; // 15% savings
      mitigationCost = 3000;
    } else if (mitigationInvestment === 'moderate') {
      savingsPercentage = 0.25; // 25% savings
      mitigationCost = 8000;
    } else if (mitigationInvestment === 'comprehensive') {
      savingsPercentage = 0.40; // 40% savings
      mitigationCost = 15000;
    }

    const annualSavings = annualCostBeforeMitigation * savingsPercentage;
    const annualCostAfterMitigation = annualCostBeforeMitigation - annualSavings;

    // Payback period
    const paybackYears = mitigationCost > 0 ? mitigationCost / annualSavings : 0;

    // 10-year analysis
    const tenYearCostWithoutMitigation = annualCostBeforeMitigation * 10;
    const tenYearCostWithMitigation = (annualCostAfterMitigation * 10) + mitigationCost;
    const tenYearNetSavings = tenYearCostWithoutMitigation - tenYearCostWithMitigation;

    // Peak summer month cost
    const peakMonthCost = (annualCostBeforeMitigation * 0.25); // 25% of annual in July/Aug

    return {
      results: {
        annualCostBeforeMitigation: {
          label: 'Annual Cooling Cost (current)',
          value: annualCostBeforeMitigation,
          type: 'currency' as const,
        },
        adjustedKwh: {
          label: 'Annual Cooling kWh',
          value: adjustedKwh,
          type: 'number' as const,
        },
        peakMonthCost: {
          label: 'Peak Summer Month Cost (July/Aug)',
          value: peakMonthCost,
          type: 'currency' as const,
        },
        mitigationCost: {
          label: 'Mitigation Investment',
          value: mitigationCost,
          type: 'currency' as const,
        },
        annualSavings: {
          label: 'Annual Energy Savings',
          value: annualSavings,
          type: 'currency' as const,
        },
        annualCostAfterMitigation: {
          label: 'Annual Cost (after mitigation)',
          value: annualCostAfterMitigation,
          type: 'currency' as const,
        },
        paybackYears: {
          label: 'Payback Period (years)',
          value: paybackYears,
          type: 'number' as const,
          precision: 1,
        },
        tenYearCostWithoutMitigation: {
          label: '10-Year Cost (no mitigation)',
          value: tenYearCostWithoutMitigation,
          type: 'currency' as const,
        },
        tenYearCostWithMitigation: {
          label: '10-Year Cost (with mitigation)',
          value: tenYearCostWithMitigation,
          type: 'currency' as const,
        },
        tenYearNetSavings: {
          label: '10-Year Net Savings',
          value: tenYearNetSavings,
          type: 'currency' as const,
        },
      },
    };
  },
};
