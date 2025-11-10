import { CalculatorContent } from '@/types';

export const EVICTION_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Eviction Cost & Timeline Estimator (by State)',
  description: 'Estimate eviction costs, legal fees, and timeline for tenant removal by state',
  slug: 'eviction-cost-calculator',
  icon: '⚖️',
  category: 'Rental & Income',
  article: {
    title: 'Complete Guide to Eviction Costs and Timelines',
    content: `
    <h2>Understanding Eviction Costs</h2>
    <p>Evicting a non-paying or problem tenant involves significant costs and time investment. Understanding state-specific requirements, legal fees, and lost rent helps landlords prepare financially and make informed decisions about tenant management.</p>
    
    <h3>Major Cost Components</h3>
    <ul>
      <li><strong>Court Filing Fees:</strong> $50-500 depending on state and court type</li>
      <li><strong>Attorney Fees:</strong> $500-$3,000+ for legal representation through process</li>
      <li><strong>Process Server/Sheriff:</strong> $50-200 to serve eviction notice and execute writ</li>
      <li><strong>Lost Rent:</strong> Monthly rent multiplied by eviction timeline (2-6+ months)</li>
      <li><strong>Property Damage/Cleaning:</strong> Average $1,000-$3,000 for turnover after difficult eviction</li>
      <li><strong>Storage/Disposal:</strong> $200-$1,000 for abandoned tenant belongings</li>
    </ul>

    <h3>Eviction Timeline by State</h3>
    <p><strong>Fast States (30-60 days):</strong> Indiana, North Dakota, Wyoming, Montana, Arkansas</p>
    <p><strong>Moderate States (60-90 days):</strong> Florida, Texas, Georgia, Arizona, Nevada</p>
    <p><strong>Slow States (90-180 days):</strong> California, New York, New Jersey, Massachusetts, Maryland</p>
    <p><strong>Very Slow (180+ days):</strong> COVID-era restrictions, tenant-friendly jurisdictions, court backlogs</p>
    
    <h3>How to Use This Calculator</h3>
    <p>Select your state, enter monthly rent and expected delays. The calculator estimates:</p>
    <ul>
      <li>Total eviction timeline from notice to possession</li>
      <li>Court and legal fees</li>
      <li>Lost rent during eviction process</li>
      <li>Turnover and cleaning costs</li>
      <li>Total cost to evict</li>
      <li>Cost as percentage of annual rent</li>
    </ul>

    <h3>The Eviction Process</h3>
    <p><strong>Step 1:</strong> Notice to Quit/Pay or Quit (3-30 days depending on state and violation)</p>
    <p><strong>Step 2:</strong> File unlawful detainer/eviction lawsuit with court ($100-500 filing fee)</p>
    <p><strong>Step 3:</strong> Serve tenant with court summons ($50-150 process server fee)</p>
    <p><strong>Step 4:</strong> Court hearing (tenant may contest, causing delays)</p>
    <p><strong>Step 5:</strong> Obtain judgment and writ of possession (5-30 days post-hearing)</p>
    <p><strong>Step 6:</strong> Sheriff executes eviction ($100-300 fee)</p>
    <p><strong>Step 7:</strong> Clean, repair, and re-rent property ($1,000-$3,000+ costs)</p>
    
    <h3>State-Specific Notice Periods</h3>
    <p><strong>Non-Payment:</strong> 3 days (CA, FL, TX), 5 days (IL, AZ), 10 days (GA), 14 days (MA), 30 days (NJ)</p>
    <p><strong>Lease Violation:</strong> 5-30 days cure period depending on state</p>
    <p><strong>No-Cause Termination:</strong> 30-60 days notice for month-to-month tenancies (some states prohibit)</p>
    
    <h3>Ways to Reduce Eviction Costs</h3>
    <p><strong>Cash for Keys:</strong> Offer tenant $500-$2,000 to vacate voluntarily by specific date (faster and cheaper than eviction)</p>
    <p><strong>Mediation:</strong> Negotiate payment plan or early termination before filing (saves legal fees)</p>
    <p><strong>Proper Documentation:</strong> Maintain lease, payment records, violation notices (speeds court process)</p>
    <p><strong>Attorney Consultation Only:</strong> Use attorney for document review instead of full representation ($200-500 vs $2,000+)</p>
    <p><strong>Act Quickly:</strong> Start eviction immediately after grace period ends (reduces lost rent)</p>
    
    <h3>Tenant Delaying Tactics</h3>
    <p>Savvy tenants can extend timelines through bankruptcy filings (automatic 30-90 day stay), requesting continuances, filing counterclaims, appealing judgments, and claiming discrimination. Some states' eviction moratoriums and tenant protection laws provide additional delays. Budget extra time for contested evictions.</p>
    
    <h3>Collection After Eviction</h3>
    <p>Winning an eviction judgment doesn't guarantee payment. Only 10-20% of landlords successfully collect unpaid rent through wage garnishment or collection agencies. Consider eviction costs as sunk costs and focus on re-renting quickly to minimize losses.</p>
    
    <h3>Prevention is Key</h3>
    <p>Thorough tenant screening (credit check, background check, employment verification, landlord references) costs $30-75 per applicant but prevents costly evictions. Set clear lease terms, enforce policies consistently, and address issues promptly to avoid escalation to eviction.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'state',
        label: 'State',
        type: 'select',
        options: [
          { value: 'fast', label: 'Fast State (30-60 days)' },
          { value: 'moderate', label: 'Moderate State (60-90 days)' },
          { value: 'slow', label: 'Slow State (90-180 days)' },
          { value: 'very_slow', label: 'Very Slow (180+ days)' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'monthlyRent',
        label: 'Monthly Rent',
        type: 'number',
        defaultValue: 1800,
      },
      {
        name: 'courtFilingFees',
        label: 'Court Filing Fees',
        type: 'number',
        defaultValue: 300,
      },
      {
        name: 'attorneyFees',
        label: 'Attorney Fees',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'serviceOfProcessFees',
        label: 'Process Server/Sheriff Fees',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'propertyDamage',
        label: 'Estimated Property Damage/Cleaning',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'storageFees',
        label: 'Storage/Disposal of Belongings',
        type: 'number',
        defaultValue: 500,
      },
      {
        name: 'additionalDelays',
        label: 'Additional Delays (Months)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'Eviction Timeline (Months)', isCurrency: false },
      { label: 'Lost Rent', isCurrency: true },
      { label: 'Legal & Court Fees', isCurrency: true },
      { label: 'Property Damage/Turnover', isCurrency: true },
      { label: 'Total Eviction Cost', isCurrency: true },
      { label: 'Vacancy Months to Recover Cost', isCurrency: false },
      { label: 'Cost as % of Annual Rent', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        state,
        monthlyRent,
        courtFilingFees,
        attorneyFees,
        serviceOfProcessFees,
        propertyDamage,
        storageFees,
        additionalDelays,
      } = values;

      // Base timeline in months by state speed
      const timelineMonths: Record<string, number> = {
        fast: 1.5,
        moderate: 2.5,
        slow: 4,
        very_slow: 6,
      };
      
      const baseTimeline = timelineMonths[state as string] || 2.5;
      const totalTimelineMonths = baseTimeline + additionalDelays;
      
      const lostRent = monthlyRent * totalTimelineMonths;
      const legalAndCourtFees = courtFilingFees + attorneyFees + serviceOfProcessFees;
      const turnoverCosts = propertyDamage + storageFees;
      const totalEvictionCost = lostRent + legalAndCourtFees + turnoverCosts;
      
      const vacancyMonthsToRecover = totalEvictionCost / monthlyRent;
      const costAsPercentOfAnnualRent = (totalEvictionCost / (monthlyRent * 12)) * 100;

      return [
        { label: 'Eviction Timeline (Months)', value: totalTimelineMonths.toFixed(1) },
        { label: 'Lost Rent', value: lostRent.toFixed(2), isCurrency: true },
        { label: 'Legal & Court Fees', value: legalAndCourtFees.toFixed(2), isCurrency: true },
        { label: 'Property Damage/Turnover', value: turnoverCosts.toFixed(2), isCurrency: true },
        { label: 'Total Eviction Cost', value: totalEvictionCost.toFixed(2), isCurrency: true },
        { label: 'Vacancy Months to Recover Cost', value: vacancyMonthsToRecover.toFixed(1) },
        { label: 'Cost as % of Annual Rent', value: `${costAsPercentOfAnnualRent.toFixed(1)}%` },
      ];
    },
  },
};
