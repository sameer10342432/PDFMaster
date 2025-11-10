import { CalculatorContent } from '@/types';

export const REPS_STATUS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Professional (REPs) Status Tax Benefit Calculator',
  description: 'Calculate potential tax benefits of qualifying as a Real Estate Professional under IRS rules and how it affects rental property losses.',
  icon: 'Icon',
  category: 'Tax Strategy & Entity Planning',
  slug: 'reps-status-calculator',
  article: {
    title: "Understanding Real Estate Professional Status Tax Benefits",
    content: `
    <h2>What is Real Estate Professional (REPs) Status?</h2>
    <p>Real Estate Professional status is an IRS designation that allows real estate investors to deduct unlimited rental property losses against their ordinary income, rather than being subject to the $25,000 passive activity loss limitation.</p>
    
    <h3>Qualification Requirements</h3>
    <ul>
      <li><strong>Material Participation:</strong> You must spend more than 750 hours per year in real estate activities</li>
      <li><strong>Majority of Time:</strong> More than 50% of your working hours must be in real estate</li>
      <li><strong>Active Participation:</strong> You must materially participate in each rental property</li>
      <li><strong>Documentation:</strong> Keep detailed logs of time spent on real estate activities</li>
    </ul>
    
    <h3>Tax Benefits</h3>
    <p>Qualifying as a REP allows you to:</p>
    <ul>
      <li>Deduct all rental property losses against W-2 income, business income, or other ordinary income</li>
      <li>Avoid the $25,000 passive activity loss cap that applies to non-REPs</li>
      <li>Potentially reduce your taxable income by tens of thousands of dollars annually</li>
      <li>Offset high-income tax brackets with real estate depreciation and expenses</li>
    </ul>
    
    <h3>Who Should Consider REPs Status?</h3>
    <ul>
      <li>High-income earners with significant rental portfolios</li>
      <li>Real estate agents, brokers, or property managers</li>
      <li>Full-time real estate investors</li>
      <li>Married couples where one spouse can dedicate full-time to real estate</li>
    </ul>
    
    <p><em>Note: This calculator provides estimates. Consult a qualified tax professional for personalized advice.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Rental Losses', isCurrency: true },
      { label: 'Passive Loss Limitation (Non-REP)', isCurrency: true },
      { label: 'REP Status Additional Deduction', isCurrency: true },
      { label: 'Tax Savings (REP vs Non-REP)', isCurrency: true },
      { label: 'Effective Tax Reduction (%)', isCurrency: false },
      { label: 'Qualification Status', isCurrency: false },
    ],
    fields: [
      {
        name: 'ordinaryIncome',
        label: 'Annual Ordinary Income (W-2 + Business)',
        type: 'number',
        defaultValue: 150000,
      },
      {
        name: 'rentalLosses',
        label: 'Total Annual Rental Property Losses',
        type: 'number',
        defaultValue: 45000,
      },
      {
        name: 'realEstateHours',
        label: 'Hours Spent in Real Estate Activities',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'totalWorkHours',
        label: 'Total Annual Work Hours',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'marginalTaxRate',
        label: 'Your Marginal Tax Rate (%)',
        type: 'number',
        defaultValue: 32,
      },
      {
        name: 'agi',
        label: 'Modified Adjusted Gross Income (MAGI)',
        type: 'number',
        defaultValue: 120000,
      },
    ],
    calculate: (data) => {
      const { ordinaryIncome, rentalLosses, realEstateHours, totalWorkHours, marginalTaxRate, agi } = data;
      
      // Check REP qualification
      const meetsHourRequirement = realEstateHours >= 750;
      const meetsMajorityRequirement = realEstateHours > (totalWorkHours * 0.5);
      const qualifiesAsREP = meetsHourRequirement && meetsMajorityRequirement;
      
      // Calculate passive loss limitation for non-REP
      let passiveLossLimit = 0;
      if (agi <= 100000) {
        passiveLossLimit = 25000;
      } else if (agi <= 150000) {
        // Phase out $25k limit by $1 for every $2 over $100k
        passiveLossLimit = Math.max(0, 25000 - ((agi - 100000) * 0.5));
      }
      // Above $150k AGI, no passive loss deduction allowed for non-REPs
      
      // Calculate deductions
      const nonREPDeduction = Math.min(rentalLosses, passiveLossLimit);
      const repDeduction = qualifiesAsREP ? rentalLosses : nonREPDeduction;
      const additionalDeduction = repDeduction - nonREPDeduction;
      
      // Calculate tax savings
      const taxRate = marginalTaxRate / 100;
      const taxSavings = additionalDeduction * taxRate;
      const effectiveTaxReduction = ordinaryIncome > 0 ? (taxSavings / ordinaryIncome) * 100 : 0;
      
      // Qualification status message
      let qualificationStatus = '';
      if (qualifiesAsREP) {
        qualificationStatus = '✓ Qualifies for REP Status';
      } else if (!meetsHourRequirement) {
        qualificationStatus = `✗ Need ${750 - realEstateHours} more hours (750 minimum)`;
      } else {
        qualificationStatus = `✗ Need ${Math.ceil((totalWorkHours * 0.5 + 1) - realEstateHours)} more hours (50%+ requirement)`;
      }
      
      return [
        { label: 'Total Rental Losses', value: rentalLosses, isCurrency: true },
        { label: 'Passive Loss Limitation (Non-REP)', value: passiveLossLimit, isCurrency: true },
        { label: 'REP Status Additional Deduction', value: additionalDeduction, isCurrency: true },
        { label: 'Tax Savings (REP vs Non-REP)', value: taxSavings, isCurrency: true },
        { label: 'Effective Tax Reduction (%)', value: parseFloat(effectiveTaxReduction.toFixed(2)), isCurrency: false },
        { label: 'Qualification Status', value: qualificationStatus, isCurrency: false },
      ];
    },
  },
};
