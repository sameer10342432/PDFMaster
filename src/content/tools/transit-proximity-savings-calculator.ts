import { CalculatorContent } from '@/types';

export const TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Proximity to Public Transit Savings Calculator',
  description: 'Calculate financial benefits of living near quality public transportation',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'transit-proximity-savings-calculator',
  article: {
    title: "Understanding Public Transit Proximity Value",
    content: `
    <h2>The Value of Transit-Oriented Living</h2>
    <p>Living near quality public transportation transforms your financial picture, lifestyle, and property value. Homes within a half-mile of transit stations save residents thousands annually while commanding premium prices.</p>
    
    <h3>Financial Benefits of Transit Proximity</h3>
    
    <h4>Transportation Cost Savings</h4>
    <p>The average American household spends $12,295 annually on transportation (Bureau of Labor Statistics). Transit-oriented households spend 40-60% less:</p>
    <ul>
      <li><strong>Car ownership costs eliminated:</strong> $10,000/year per car</li>
      <li><strong>Annual transit pass:</strong> $800-$1,500</li>
      <li><strong>Occasional rideshare/car rental:</strong> $500-$1,000</li>
      <li><strong>Net savings: $8,000-$10,000 per year</strong></li>
    </ul>
    
    <h4>Property Value Premium</h4>
    <p>Proximity to transit increases property values significantly:</p>
    <ul>
      <li>Within 0.25 mile: 10-20% premium</li>
      <li>Within 0.5 mile: 5-15% premium</li>
      <li>Within 1 mile: 2-8% premium</li>
    </ul>
    
    <h3>Types of Transit and Their Impact</h3>
    
    <h4>Rail Transit (Highest Value)</h4>
    <ul>
      <li>Subway/Metro: 15-20% property premium</li>
      <li>Light Rail: 10-15% property premium</li>
      <li>Commuter Rail: 8-12% property premium</li>
    </ul>
    
    <h4>Bus Rapid Transit (BRT)</h4>
    <ul>
      <li>Premium BRT: 5-10% property premium</li>
      <li>Standard BRT: 3-7% property premium</li>
    </ul>
    
    <h4>Standard Bus Service</h4>
    <ul>
      <li>Frequent service (10 min headways): 2-5% premium</li>
      <li>Regular service (15-30 min): 1-3% premium</li>
    </ul>
    
    <h3>Beyond Dollar Savings</h3>
    
    <h4>Time Savings</h4>
    <ul>
      <li>No parking search: Save 15-30 min/day</li>
      <li>Predictable commute times</li>
      <li>Productive travel time (work, read, relax)</li>
      <li>Annual time savings worth: $2,000-$5,000</li>
    </ul>
    
    <h4>Health Benefits</h4>
    <ul>
      <li>More walking (to/from stations): 20-30 min/day</li>
      <li>Reduced stress from driving</li>
      <li>Lower accident risk</li>
      <li>Health savings: $500-$1,500/year</li>
    </ul>
    
    <h4>Environmental Impact</h4>
    <ul>
      <li>Reduce CO₂ emissions: 4,800 lbs/year</li>
      <li>Equivalent to planting 120 trees</li>
      <li>Reduce traffic congestion</li>
    </ul>
    
    <h3>Total Cost of Living Analysis</h3>
    <p><strong>Transit-Oriented Development:</strong></p>
    <ul>
      <li>Home price: $400,000 (10% premium)</li>
      <li>Monthly mortgage: $2,400</li>
      <li>Transportation: $150 (transit pass + occasional rideshare)</li>
      <li>Total: $2,550/month</li>
    </ul>
    
    <p><strong>Car-Dependent Suburb:</strong></p>
    <ul>
      <li>Home price: $350,000</li>
      <li>Monthly mortgage: $2,100</li>
      <li>Transportation: $1,500 (2 cars)</li>
      <li>Total: $3,600/month</li>
      <li><strong>Savings by choosing transit: $1,050/month = $12,600/year</strong></li>
    </ul>
    
    <h3>Evaluating Transit Quality</h3>
    <p>When assessing transit proximity value, consider:</p>
    <ul>
      <li><strong>Frequency:</strong> Service every 10-15 minutes or better</li>
      <li><strong>Reliability:</strong> On-time performance above 90%</li>
      <li><strong>Coverage:</strong> Direct access to major employment centers</li>
      <li><strong>Hours:</strong> Early morning to late evening service</li>
      <li><strong>Safety:</strong> Well-lit, maintained stations</li>
      <li><strong>Connectivity:</strong> Easy transfers to other lines</li>
    </ul>
    
    <h3>Investment Perspective</h3>
    <p>The property premium for transit proximity ($40,000 on a $400,000 home) is offset by $8,000-12,000 in annual savings. The premium pays for itself in 3-5 years, after which you benefit from pure savings while building equity in a premium location.</p>
    
    <h3>Future Appreciation</h3>
    <p>Transit-oriented properties typically appreciate 1-2% faster than car-dependent locations, as demand for walkable, transit-accessible neighborhoods continues to grow, especially among younger buyers.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "distanceToTransit",
        label: "Distance to Transit (miles)",
        type: "number",
        placeholder: "0.3",
        defaultValue: "0.3",
      },
      {
        name: "transitType",
        label: "Transit Type (1=Bus, 2=BRT, 3=Rail)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "baseHomePrice",
        label: "Comparable Home Price (no transit) ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "currentCarCosts",
        label: "Current Annual Car Costs ($)",
        type: "number",
        placeholder: "12000",
        defaultValue: "12000",
      },
      {
        name: "annualTransitPass",
        label: "Annual Transit Pass Cost ($)",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
    ],
    results: [
      { label: "Transit Property Premium (%)", isCurrency: false },
      { label: "Transit Home Price", isCurrency: true },
      { label: "Annual Transportation Savings", isCurrency: true },
      { label: "Premium Payback Period (years)", isCurrency: false },
      { label: "10-Year Net Benefit", isCurrency: true },
      { label: "Monthly Total Cost Savings", isCurrency: true },
    ],
    calculate: (data: any) => {
      const distance = Number(data.distanceToTransit) || 0;
      const transitType = Number(data.transitType) || 1;
      const basePrice = Number(data.baseHomePrice) || 0;
      const carCosts = Number(data.currentCarCosts) || 0;
      const transitPass = Number(data.annualTransitPass) || 0;
      
      // Calculate premium based on distance and type
      let basePremium = 0;
      if (transitType === 3) basePremium = 0.15; // Rail
      else if (transitType === 2) basePremium = 0.08; // BRT
      else basePremium = 0.04; // Bus
      
      // Reduce premium based on distance
      let distanceFactor = 1;
      if (distance <= 0.25) distanceFactor = 1.2;
      else if (distance <= 0.5) distanceFactor = 1.0;
      else if (distance <= 1) distanceFactor = 0.5;
      else distanceFactor = 0.2;
      
      const premium = basePremium * distanceFactor;
      const transitHomePrice = basePrice * (1 + premium);
      const priceDifference = transitHomePrice - basePrice;
      
      // Transportation savings
      const annualSavings = carCosts - transitPass - 800; // $800 for occasional rideshare
      
      // Payback
      const payback = annualSavings > 0 ? priceDifference / annualSavings : 0;
      
      // 10-year benefit
      const tenYearSavings = annualSavings * 10;
      const netBenefit = tenYearSavings - priceDifference;
      
      // Monthly savings
      const monthlySavings = annualSavings / 12;

      return [
        { label: "Transit Property Premium (%)", value: `${(premium * 100).toFixed(1)}%`, isCurrency: false },
        { label: "Transit Home Price", value: transitHomePrice.toFixed(2), isCurrency: true },
        { label: "Annual Transportation Savings", value: annualSavings.toFixed(2), isCurrency: true },
        { label: "Premium Payback Period (years)", value: payback.toFixed(1), isCurrency: false },
        { label: "10-Year Net Benefit", value: netBenefit.toFixed(2), isCurrency: true },
        { label: "Monthly Total Cost Savings", value: monthlySavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
