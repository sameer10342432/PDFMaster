import { CalculatorContent } from '@/types';

export const HOA_FEE_VS_AMENITIES_VALUE_CONTENT: CalculatorContent = {
  title: 'HOA Fee vs. Amenities Value Calculator',
  description: 'Determine if your HOA fees provide good value based on amenities offered and your usage patterns',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'hoa-fee-vs-amenities-value',
  article: {
    title: "Understanding HOA Fee Value",
    content: `
    <h2>Are You Getting Good Value from HOA Fees?</h2>
    <p>Homeowners Association (HOA) fees can range from $100 to over $1,000 per month. This calculator helps you determine if the amenities and services justify the cost.</p>
    
    <h3>What HOA Fees Typically Cover</h3>
    <ul>
      <li><strong>Maintenance:</strong> Landscaping, snow removal, exterior repairs</li>
      <li><strong>Amenities:</strong> Pool, gym, clubhouse, tennis courts</li>
      <li><strong>Utilities:</strong> Water, trash, sometimes cable/internet</li>
      <li><strong>Insurance:</strong> Master policy for common areas and building exterior</li>
      <li><strong>Reserves:</strong> Long-term capital improvements and emergency funds</li>
    </ul>
    
    <h3>Calculating Amenity Value</h3>
    <p>To assess value, compare your HOA fees against the cost of equivalent services:</p>
    <ul>
      <li><strong>Gym Membership:</strong> $30-100/month</li>
      <li><strong>Pool Club:</strong> $50-200/month</li>
      <li><strong>Lawn Service:</strong> $100-300/month</li>
      <li><strong>Snow Removal:</strong> $50-150/month (seasonal)</li>
      <li><strong>Property Insurance:</strong> Portion of master policy</li>
    </ul>
    
    <h3>Usage Matters</h3>
    <p>The value proposition depends heavily on your usage patterns:</p>
    <ul>
      <li><strong>High Usage:</strong> If you use the gym 3x/week and pool regularly, fees provide excellent value</li>
      <li><strong>Moderate Usage:</strong> Occasional amenity use may still justify fees through landscaping and insurance</li>
      <li><strong>Low Usage:</strong> If you rarely use amenities, you're essentially subsidizing other residents</li>
    </ul>
    
    <h3>Hidden Benefits</h3>
    <p>Beyond amenities, HOA fees often include:</p>
    <ul>
      <li><strong>Property Value:</strong> Well-maintained communities maintain higher values</li>
      <li><strong>Consistency:</strong> Architectural standards preserve neighborhood aesthetics</li>
      <li><strong>Convenience:</strong> No need to hire/manage contractors for exterior work</li>
      <li><strong>Community:</strong> Social events and organized activities</li>
    </ul>
    
    <h3>Red Flags</h3>
    <ul>
      <li><strong>Poor Reserves:</strong> Low reserve fund may mean special assessments ahead</li>
      <li><strong>Deferred Maintenance:</strong> Visible neglect indicates financial problems</li>
      <li><strong>High Delinquency:</strong> Many owners behind on fees</li>
      <li><strong>Frequent Increases:</strong> Fees rising faster than inflation</li>
    </ul>
    
    <h3>Questions to Ask the HOA Board</h3>
    <ol>
      <li>What percentage of the budget goes to reserves?</li>
      <li>When was the last reserve study conducted?</li>
      <li>Are any special assessments planned?</li>
      <li>What is the delinquency rate on HOA fees?</li>
      <li>How often do fees increase and by how much?</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyHOAFee",
        label: "Monthly HOA Fee",
        type: "number",
        placeholder: "350",
        defaultValue: "350",
      },
      {
        name: "gymValue",
        label: "Comparable Gym Membership Cost",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "poolValue",
        label: "Comparable Pool/Swim Club Cost",
        type: "number",
        placeholder: "80",
        defaultValue: "80",
      },
      {
        name: "landscapingValue",
        label: "Comparable Landscaping Service Cost",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "gymUsagePerMonth",
        label: "Your Gym Usage (times per month)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "poolUsagePerMonth",
        label: "Your Pool Usage (times per month)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "resalePremium",
        label: "Estimated HOA Resale Premium (%)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Annual HOA Fees", isCurrency: true },
      { label: "Replacement Value of Amenities", isCurrency: true },
      { label: "Effective Value (Based on Usage)", isCurrency: true },
      { label: "Net Value (Gain/Loss)", isCurrency: true },
      { label: "Value Score", isCurrency: false },
      { label: "Verdict", isCurrency: false },
    ],
    calculate: (data: any) => {
      const monthlyHOAFee = Number(data.monthlyHOAFee) || 0;
      const gymValue = Number(data.gymValue) || 0;
      const poolValue = Number(data.poolValue) || 0;
      const landscapingValue = Number(data.landscapingValue) || 0;
      const gymUsagePerMonth = Number(data.gymUsagePerMonth) || 0;
      const poolUsagePerMonth = Number(data.poolUsagePerMonth) || 0;
      const resalePremium = Number(data.resalePremium) || 0;
      
      const annualHOAFees = monthlyHOAFee * 12;
      const replacementValue = (gymValue + poolValue + landscapingValue) * 12;
      
      const gymUsageFactor = Math.min(gymUsagePerMonth / 8, 1);
      const poolUsageFactor = Math.min(poolUsagePerMonth / 6, 1);
      
      const effectiveGymValue = gymValue * 12 * gymUsageFactor;
      const effectivePoolValue = poolValue * 12 * poolUsageFactor;
      const effectiveLandscapingValue = landscapingValue * 12;
      
      const effectiveValue = effectiveGymValue + effectivePoolValue + effectiveLandscapingValue;
      const netValue = effectiveValue - annualHOAFees;
      
      const valueScore = annualHOAFees > 0 ? (effectiveValue / annualHOAFees) * 100 : 0;
      
      let verdict = "";
      if (valueScore > 100) {
        verdict = "✅ Excellent Value - HOA fees well justified";
      } else if (valueScore > 80) {
        verdict = "✅ Good Value - Reasonable return on fees";
      } else if (valueScore > 60) {
        verdict = "⚠️ Fair Value - Consider increasing amenity usage";
      } else {
        verdict = "❌ Poor Value - HOA fees exceed amenity value";
      }

      return [
        { label: "Annual HOA Fees", value: `${annualHOAFees.toFixed(2)}`, isCurrency: true },
        { label: "Replacement Value of Amenities", value: `${replacementValue.toFixed(2)}`, isCurrency: true },
        { label: "Effective Value (Based on Usage)", value: `${effectiveValue.toFixed(2)}`, isCurrency: true },
        { label: "Net Value (Gain/Loss)", value: `${netValue.toFixed(2)}`, isCurrency: true },
        { label: "Value Score", value: `${valueScore.toFixed(1)}%`, isCurrency: false },
        { label: "Verdict", value: verdict, isCurrency: false },
      ];
    },
  },
};
