import { CalculatorContent } from '@/types';

export const HOME_WARRANTY_BUYER_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Warranty (Buyer) ROI Calculator',
  description: 'Calculate the return on investment for a home warranty plan and determine if it\'s worth the cost',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'home-warranty-buyer-roi-calculator',
  article: {
    title: "Understanding Home Warranty ROI for Buyers",
    content: `
    <h2>Understanding Home Warranty ROI for Buyers</h2>
    <p>A home warranty is a service contract that covers the repair or replacement of major home systems and appliances. Understanding the ROI helps you decide if this protection is worth the annual cost.</p>
    
    <h3>What Does a Home Warranty Cover?</h3>
    <p>Typical home warranty plans cover:</p>
    <ul>
      <li><strong>Major Systems:</strong> HVAC, electrical, plumbing, water heater</li>
      <li><strong>Appliances:</strong> Refrigerator, oven, dishwasher, washer/dryer</li>
      <li><strong>Optional Coverage:</strong> Pool equipment, septic systems, well pumps</li>
    </ul>
    
    <h3>Calculating ROI</h3>
    <p>The formula for home warranty ROI:</p>
    <p><strong>ROI % = ((Total Repair Costs Covered - Warranty Cost - Deductibles) / Warranty Cost) × 100</strong></p>
    
    <h3>When a Home Warranty Makes Sense</h3>
    <ul>
      <li><strong>Older Homes:</strong> Properties with aging systems and appliances</li>
      <li><strong>Budget Protection:</strong> When unexpected repairs would strain your finances</li>
      <li><strong>Peace of Mind:</strong> Especially valuable for first-time homebuyers</li>
      <li><strong>Transition Period:</strong> Coverage during the first year of homeownership</li>
    </ul>
    
    <h3>When to Skip It</h3>
    <ul>
      <li><strong>New Construction:</strong> Builder warranties often provide better coverage</li>
      <li><strong>Strong Emergency Fund:</strong> If you have 6+ months of expenses saved</li>
      <li><strong>New Appliances:</strong> Recent updates typically have manufacturer warranties</li>
      <li><strong>High Deductibles:</strong> Plans with $100+ service fees may not be cost-effective</li>
    </ul>
    
    <h3>Key Considerations</h3>
    <p><strong>Read the Fine Print:</strong> Understand exclusions, coverage limits, and pre-existing condition clauses.</p>
    <p><strong>Provider Reputation:</strong> Research claim approval rates and customer service quality.</p>
    <p><strong>Compare Plans:</strong> Annual costs range from $300-$800 depending on coverage level.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "warrantyCost",
        label: "Annual Warranty Cost",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "coverageTerm",
        label: "Coverage Term (Years)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "expectedRepairs",
        label: "Expected Repair Incidents",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "avgRepairCost",
        label: "Average Repair Cost (if no warranty)",
        type: "number",
        placeholder: "800",
        defaultValue: "800",
      },
      {
        name: "serviceCallFee",
        label: "Service Call Fee (Deductible per visit)",
        type: "number",
        placeholder: "75",
        defaultValue: "75",
      },
    ],
    results: [
      { label: "Total Warranty Cost", isCurrency: true },
      { label: "Total Expected Repair Costs (Without Warranty)", isCurrency: true },
      { label: "Total Deductibles Paid", isCurrency: true },
      { label: "Net Savings", isCurrency: true },
      { label: "ROI Percentage", isCurrency: false },
      { label: "Verdict", isCurrency: false },
    ],
    calculate: (data: any) => {
      const warrantyCost = Number(data.warrantyCost) || 0;
      const coverageTerm = Number(data.coverageTerm) || 1;
      const expectedRepairs = Number(data.expectedRepairs) || 0;
      const avgRepairCost = Number(data.avgRepairCost) || 0;
      const serviceCallFee = Number(data.serviceCallFee) || 0;
      
      const totalWarrantyCost = warrantyCost * coverageTerm;
      const totalExpectedRepairCosts = avgRepairCost * expectedRepairs;
      const totalDeductibles = serviceCallFee * expectedRepairs;
      const netSavings = totalExpectedRepairCosts - totalWarrantyCost - totalDeductibles;
      const roiPercentage = totalWarrantyCost > 0 ? (netSavings / totalWarrantyCost) * 100 : 0;
      
      let verdict = "";
      if (roiPercentage > 50) {
        verdict = "✅ Excellent Value - Warranty highly recommended";
      } else if (roiPercentage > 0) {
        verdict = "✅ Positive ROI - Warranty is worthwhile";
      } else if (roiPercentage > -25) {
        verdict = "⚠️ Break Even - Consider your risk tolerance";
      } else {
        verdict = "❌ Poor Value - Skip the warranty";
      }

      return [
        { label: "Total Warranty Cost", value: `${totalWarrantyCost.toFixed(2)}`, isCurrency: true },
        { label: "Total Expected Repair Costs (Without Warranty)", value: `${totalExpectedRepairCosts.toFixed(2)}`, isCurrency: true },
        { label: "Total Deductibles Paid", value: `${totalDeductibles.toFixed(2)}`, isCurrency: true },
        { label: "Net Savings", value: `${netSavings.toFixed(2)}`, isCurrency: true },
        { label: "ROI Percentage", value: `${roiPercentage.toFixed(2)}%`, isCurrency: false },
        { label: "Verdict", value: verdict, isCurrency: false },
      ];
    },
  },
};
