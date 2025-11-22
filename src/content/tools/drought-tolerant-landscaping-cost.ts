import { CalculatorContent } from '@/types';

export const DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT: CalculatorContent = {
  title: 'Drought-Tolerant Landscaping Cost Calculator',
  description: 'Calculate costs and water savings from drought-resistant landscaping and xeriscaping',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'drought-tolerant-landscaping-cost',
  article: {
    title: "Understanding Drought-Tolerant Landscaping",
    content: `
    <h2>What is Drought-Tolerant Landscaping?</h2>
    <p>Drought-tolerant landscaping, also known as xeriscaping, uses plants and design principles that require minimal water. This approach reduces water consumption by 50-75% compared to traditional lawns while creating beautiful, sustainable outdoor spaces.</p>
    
    <h3>Benefits of Drought-Tolerant Landscaping</h3>
    <ul>
      <li><strong>Water Savings:</strong> Reduce outdoor water use by 50-75%</li>
      <li><strong>Lower Utility Bills:</strong> Save $500-$2,000 annually on water costs</li>
      <li><strong>Less Maintenance:</strong> No mowing, reduced fertilizing and pest control</li>
      <li><strong>Increased Property Value:</strong> Eco-friendly homes sell for 3-6% more</li>
      <li><strong>Environmental Impact:</strong> Conserve precious water resources</li>
      <li><strong>Resilience:</strong> Better survival during drought conditions</li>
    </ul>
    
    <h3>Key Components and Costs</h3>
    <p><strong>Native Plants ($3-15 per plant):</strong> Adapted to local climate, require minimal care</p>
    <p><strong>Mulch ($30-50 per cubic yard):</strong> Retains moisture, reduces evaporation</p>
    <p><strong>Drip Irrigation ($1,500-$3,000):</strong> Efficient watering system with minimal waste</p>
    <p><strong>Permeable Hardscaping ($10-25 per sq ft):</strong> Gravel, decomposed granite, pavers</p>
    <p><strong>Rock Gardens ($4-10 per sq ft):</strong> Decorative stones and boulders</p>
    
    <h3>Installation Costs by Yard Size</h3>
    <ul>
      <li>Small yard (1,000 sq ft): $3,000-$6,000</li>
      <li>Medium yard (2,500 sq ft): $6,000-$12,000</li>
      <li>Large yard (5,000 sq ft): $10,000-$20,000</li>
    </ul>
    
    <h3>Long-Term Savings</h3>
    <p>Traditional lawn maintenance costs $200-$400 per month including water, mowing, fertilizer, and weed control. Drought-tolerant landscaping reduces these costs by 70-90%, paying for itself in 3-7 years.</p>
    
    <h3>Popular Drought-Tolerant Plants</h3>
    <ul>
      <li>Succulents (agave, aloe, echeveria)</li>
      <li>Native grasses (blue grama, buffalo grass)</li>
      <li>Lavender and rosemary</li>
      <li>California poppies and yarrow</li>
      <li>Desert marigold and penstemon</li>
    </ul>
    
    <h3>Rebates and Incentives</h3>
    <p>Many municipalities offer rebates for removing lawns and installing drought-tolerant landscaping, ranging from $1-$3 per square foot of turf removed. Check with your local water district for available programs.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "yardSize",
        label: "Yard Size (sq ft)",
        type: "number",
        placeholder: "2500",
        defaultValue: "2500",
      },
      {
        name: "costPerSqFt",
        label: "Cost per Sq Ft ($)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "currentWaterBill",
        label: "Current Monthly Water Bill ($)",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "waterReduction",
        label: "Expected Water Reduction (%)",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "rebatePerSqFt",
        label: "Municipal Rebate ($ per sq ft)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
    ],
    results: [
      { label: "Total Installation Cost", isCurrency: true },
      { label: "Total Rebate", isCurrency: true },
      { label: "Net Cost", isCurrency: true },
      { label: "Monthly Water Savings", isCurrency: true },
      { label: "Annual Savings", isCurrency: true },
      { label: "Payback Period (years)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const yardSize = Number(data.yardSize) || 0;
      const costPerSqFt = Number(data.costPerSqFt) || 0;
      const waterBill = Number(data.currentWaterBill) || 0;
      const reduction = Number(data.waterReduction) / 100 || 0;
      const rebate = Number(data.rebatePerSqFt) || 0;
      
      const totalCost = yardSize * costPerSqFt;
      const totalRebate = yardSize * rebate;
      const netCost = totalCost - totalRebate;
      const monthlySavings = waterBill * reduction;
      const annualSavings = monthlySavings * 12;
      const payback = annualSavings > 0 ? netCost / annualSavings : 0;

      return [
        { label: "Total Installation Cost", value: totalCost.toFixed(2), isCurrency: true },
        { label: "Total Rebate", value: totalRebate.toFixed(2), isCurrency: true },
        { label: "Net Cost", value: netCost.toFixed(2), isCurrency: true },
        { label: "Monthly Water Savings", value: monthlySavings.toFixed(2), isCurrency: true },
        { label: "Annual Savings", value: annualSavings.toFixed(2), isCurrency: true },
        { label: "Payback Period (years)", value: payback.toFixed(1), isCurrency: false },
      ];
    },
  },
};
