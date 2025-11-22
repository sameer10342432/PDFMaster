import { CalculatorContent } from '@/types';

export const COMMUNITY_SOLAR_VS_ROOFTOP_SOLAR_CONTENT: CalculatorContent = {
  title: 'Community Solar vs. Rooftop Solar Calculator',
  description: 'Compare costs and benefits of community solar programs vs. installing rooftop solar panels',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'community-solar-vs-rooftop-solar',
  article: {
    title: "Community Solar vs. Rooftop Solar: Complete Comparison",
    content: `
    <h2>Understanding Your Solar Options</h2>
    <p>Solar energy offers two main options for homeowners: rooftop solar panels or community solar programs. Each has distinct advantages, costs, and ideal use cases. Understanding both helps you maximize savings and environmental impact.</p>
    
    <h3>What is Rooftop Solar?</h3>
    <p>Rooftop solar involves installing photovoltaic panels on your property. You own the system, generate electricity on-site, and typically see 20-30 year returns.</p>
    
    <h4>Rooftop Solar Costs</h4>
    <ul>
      <li>Average installation: $15,000-$25,000 (before incentives)</li>
      <li>Federal tax credit: 30% of system cost</li>
      <li>State/local incentives: Varies, $1,000-$10,000</li>
      <li>Net cost: $10,000-$18,000 typical</li>
      <li>Payback period: 6-12 years</li>
      <li>System lifespan: 25-30 years</li>
    </ul>
    
    <h4>Rooftop Solar Benefits</h4>
    <ul>
      <li>Eliminate or dramatically reduce electric bills</li>
      <li>Increase home value by $15,000-$20,000</li>
      <li>Protection from rising energy costs</li>
      <li>Net metering credits for excess production</li>
      <li>Energy independence</li>
      <li>25-30 year savings: $30,000-$60,000</li>
    </ul>
    
    <h4>Rooftop Solar Requirements</h4>
    <ul>
      <li>Own your home (not renting)</li>
      <li>Suitable roof (direction, angle, condition)</li>
      <li>Minimal shading from trees or buildings</li>
      <li>Roof age less than 10-15 years</li>
      <li>Upfront capital or financing available</li>
      <li>HOA approval (if applicable)</li>
    </ul>
    
    <h3>What is Community Solar?</h3>
    <p>Community solar (or solar gardens) allows you to subscribe to a shared solar farm without installing panels on your property. You receive credits on your utility bill for your portion of the electricity generated.</p>
    
    <h4>Community Solar Costs</h4>
    <ul>
      <li>No upfront cost (subscription model)</li>
      <li>Typical savings: 5-15% off electric bill</li>
      <li>Monthly subscription: Based on usage</li>
      <li>No installation, maintenance, or insurance costs</li>
      <li>No long-term commitment in most programs</li>
    </ul>
    
    <h4>Community Solar Benefits</h4>
    <ul>
      <li>Immediate savings with zero upfront cost</li>
      <li>Accessible to renters and those with unsuitable roofs</li>
      <li>No maintenance or replacement worries</li>
      <li>Portable - can transfer subscription if you move</li>
      <li>Support large-scale renewable energy</li>
      <li>Cancel or adjust anytime (flexibility)</li>
    </ul>
    
    <h4>Community Solar Ideal For</h4>
    <ul>
      <li>Renters or condo/apartment dwellers</li>
      <li>Homes with shaded or unsuitable roofs</li>
      <li>Those without upfront capital</li>
      <li>People planning to move within 5-10 years</li>
      <li>Risk-averse individuals preferring no maintenance</li>
    </ul>
    
    <h3>Financial Comparison (25-Year Analysis)</h3>
    
    <h4>Rooftop Solar ($18,000 net investment)</h4>
    <ul>
      <li>Year 1-6: Negative cash flow (payback period)</li>
      <li>Year 7-25: $2,000-$3,000/year savings</li>
      <li>Total 25-year savings: $40,000-$50,000</li>
      <li>Home value increase: +$18,000</li>
      <li>Total benefit: $58,000-$68,000</li>
    </ul>
    
    <h4>Community Solar ($0 investment)</h4>
    <ul>
      <li>Year 1-25: $150-$300/year savings (10% off bill)</li>
      <li>Total 25-year savings: $3,750-$7,500</li>
      <li>No maintenance costs: Save $2,000-$4,000</li>
      <li>Total benefit: $5,750-$11,500</li>
    </ul>
    
    <h3>Key Decision Factors</h3>
    
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px;">Factor</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Choose Rooftop</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Choose Community</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ownership</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Own your home</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Rent or uncertain</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Roof Quality</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Good, unshaded</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Poor or shaded</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Capital</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$15k+ available</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No upfront funds</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Timeline</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Staying 10+ years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moving soon</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Savings</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Maximum (50-100%)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate (5-15%)</td>
      </tr>
    </table>
    
    <h3>Environmental Impact</h3>
    <p>Both options significantly reduce carbon emissions:</p>
    <ul>
      <li><strong>Rooftop Solar (6 kW system):</strong> Offsets 7,000-10,000 lbs CO₂/year</li>
      <li><strong>Community Solar (typical subscription):</strong> Offsets 3,000-5,000 lbs CO₂/year</li>
    </ul>
    
    <h3>The Best of Both Worlds</h3>
    <p>Some homeowners use community solar while planning for rooftop installation, or combine both to maximize renewable energy usage and savings.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyElectricBill",
        label: "Monthly Electric Bill ($)",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "rooftopSystemCost",
        label: "Rooftop System Cost ($)",
        type: "number",
        placeholder: "20000",
        defaultValue: "20000",
      },
      {
        name: "federalTaxCredit",
        label: "Federal Tax Credit (%)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "rooftopOffsetPercent",
        label: "Rooftop Bill Offset (%)",
        type: "number",
        placeholder: "90",
        defaultValue: "90",
      },
      {
        name: "communitySavingsPercent",
        label: "Community Solar Savings (%)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "yearsInHome",
        label: "Years in Home",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
    ],
    results: [
      { label: "Rooftop Net Cost (after incentives)", isCurrency: true },
      { label: "Rooftop Annual Savings", isCurrency: true },
      { label: "Rooftop Payback Period (years)", isCurrency: false },
      { label: "Rooftop Total Savings (time horizon)", isCurrency: true },
      { label: "Community Solar Annual Savings", isCurrency: true },
      { label: "Community Total Savings (time horizon)", isCurrency: true },
      { label: "Rooftop Advantage Over Time", isCurrency: true },
    ],
    calculate: (data: any) => {
      const monthlyBill = Number(data.monthlyElectricBill) || 0;
      const systemCost = Number(data.rooftopSystemCost) || 0;
      const taxCredit = Number(data.federalTaxCredit) / 100 || 0;
      const rooftopOffset = Number(data.rooftopOffsetPercent) / 100 || 0;
      const communitySavings = Number(data.communitySavingsPercent) / 100 || 0;
      const years = Number(data.yearsInHome) || 0;
      
      const netCost = systemCost * (1 - taxCredit);
      const annualBill = monthlyBill * 12;
      const rooftopAnnualSavings = annualBill * rooftopOffset;
      const payback = rooftopAnnualSavings > 0 ? netCost / rooftopAnnualSavings : 0;
      const rooftopTotalSavings = (rooftopAnnualSavings * years) - netCost;
      
      const communityAnnualSavings = annualBill * communitySavings;
      const communityTotalSavings = communityAnnualSavings * years;
      
      const advantage = rooftopTotalSavings - communityTotalSavings;

      return [
        { label: "Rooftop Net Cost (after incentives)", value: netCost.toFixed(2), isCurrency: true },
        { label: "Rooftop Annual Savings", value: rooftopAnnualSavings.toFixed(2), isCurrency: true },
        { label: "Rooftop Payback Period (years)", value: payback.toFixed(1), isCurrency: false },
        { label: "Rooftop Total Savings (time horizon)", value: rooftopTotalSavings.toFixed(2), isCurrency: true },
        { label: "Community Solar Annual Savings", value: communityAnnualSavings.toFixed(2), isCurrency: true },
        { label: "Community Total Savings (time horizon)", value: communityTotalSavings.toFixed(2), isCurrency: true },
        { label: "Rooftop Advantage Over Time", value: advantage > 0 ? `+${advantage.toFixed(2)}` : advantage.toFixed(2), isCurrency: true },
      ];
    },
  },
};
