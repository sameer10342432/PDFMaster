import { CalculatorContent } from '@/types';

export const DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT: CalculatorContent = {
  title: 'Deconstruction vs. Demolition Value Calculator',
  description: 'Compare costs and benefits of deconstructing vs. demolishing a building, including material salvage value and tax deductions',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'deconstruction-vs-demolition-value',
  article: {
    title: "Deconstruction vs. Demolition: A Comprehensive Guide",
    content: `
    <h2>What is Deconstruction?</h2>
    <p>Deconstruction is the systematic dismantling of a building to salvage reusable materials, as opposed to demolition, which destroys the structure. Deconstruction recovers 50-85% of building materials for reuse or recycling, creating economic and environmental benefits.</p>
    
    <h3>Key Differences</h3>
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px;">Aspect</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Demolition</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Deconstruction</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Speed</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-3 days</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-6 weeks</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$4-8 per sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$8-15 per sq ft</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Material Recovery</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-15%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50-85%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Landfill Waste</td>
        <td style="border: 1px solid #ddd; padding: 8px;">85-95%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">15-50%</td>
      </tr>
    </table>
    
    <h3>Financial Benefits of Deconstruction</h3>
    <ul>
      <li><strong>Material Sales:</strong> Salvaged materials can be sold for $5,000-$50,000+</li>
      <li><strong>Tax Deductions:</strong> Donated materials qualify for charitable deductions (30-50% of value)</li>
      <li><strong>Lower Disposal Fees:</strong> 70-90% reduction in landfill costs</li>
      <li><strong>Job Creation:</strong> Creates 6-10 times more jobs than demolition</li>
    </ul>
    
    <h3>Valuable Salvageable Materials</h3>
    <ul>
      <li><strong>Lumber:</strong> $2-8 per board foot (old-growth wood worth more)</li>
      <li><strong>Hardwood Flooring:</strong> $5-15 per sq ft</li>
      <li><strong>Windows:</strong> $50-500 each</li>
      <li><strong>Doors:</strong> $100-1,000 each (solid wood, historic)</li>
      <li><strong>Bricks:</strong> $0.50-2 per brick</li>
      <li><strong>Fixtures:</strong> $50-2,000 (vintage lighting, hardware)</li>
      <li><strong>Architectural Details:</strong> $500-10,000+ (mantels, columns)</li>
    </ul>
    
    <h3>Tax Benefits</h3>
    <p>When materials are donated to qualified nonprofits, property owners can claim a charitable tax deduction equal to the fair market value of the donated items. For a typical 2,000 sq ft home, this deduction can range from $10,000-$30,000.</p>
    
    <h3>Environmental Impact</h3>
    <p>Deconstruction diverts 50-100 tons of waste from landfills per average home. This reduces greenhouse gas emissions equivalent to taking 2-3 cars off the road for a year.</p>
    
    <h3>When to Choose Deconstruction</h3>
    <ul>
      <li>Pre-1950s buildings with old-growth lumber</li>
      <li>Historic homes with architectural details</li>
      <li>Properties with high-quality materials</li>
      <li>When seeking LEED or green building credits</li>
      <li>Flexible timeline (not urgent demolition)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "buildingSize",
        label: "Building Size (sq ft)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "demolitionCostPerSqFt",
        label: "Demolition Cost ($ per sq ft)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "deconstructionCostPerSqFt",
        label: "Deconstruction Cost ($ per sq ft)",
        type: "number",
        placeholder: "12",
        defaultValue: "12",
      },
      {
        name: "salvageValue",
        label: "Estimated Salvage Value ($)",
        type: "number",
        placeholder: "20000",
        defaultValue: "20000",
      },
      {
        name: "taxBracket",
        label: "Tax Bracket (%)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
    ],
    results: [
      { label: "Demolition Total Cost", isCurrency: true },
      { label: "Deconstruction Total Cost", isCurrency: true },
      { label: "Salvage Value", isCurrency: true },
      { label: "Tax Deduction Benefit", isCurrency: true },
      { label: "Net Deconstruction Cost", isCurrency: true },
      { label: "Savings (Deconstruction vs Demolition)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const size = Number(data.buildingSize) || 0;
      const demoCost = Number(data.demolitionCostPerSqFt) || 0;
      const deconCost = Number(data.deconstructionCostPerSqFt) || 0;
      const salvage = Number(data.salvageValue) || 0;
      const taxBracket = Number(data.taxBracket) / 100 || 0;
      
      const demolitionTotal = size * demoCost;
      const deconstructionTotal = size * deconCost;
      const taxBenefit = salvage * taxBracket;
      const netDeconCost = deconstructionTotal - salvage - taxBenefit;
      const savings = demolitionTotal - netDeconCost;

      return [
        { label: "Demolition Total Cost", value: demolitionTotal.toFixed(2), isCurrency: true },
        { label: "Deconstruction Total Cost", value: deconstructionTotal.toFixed(2), isCurrency: true },
        { label: "Salvage Value", value: salvage.toFixed(2), isCurrency: true },
        { label: "Tax Deduction Benefit", value: taxBenefit.toFixed(2), isCurrency: true },
        { label: "Net Deconstruction Cost", value: netDeconCost.toFixed(2), isCurrency: true },
        { label: "Savings (Deconstruction vs Demolition)", value: savings > 0 ? `+${savings.toFixed(2)}` : savings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
