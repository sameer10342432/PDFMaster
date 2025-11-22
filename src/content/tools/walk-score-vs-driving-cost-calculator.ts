import { CalculatorContent } from '@/types';

export const WALK_SCORE_VS_DRIVING_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Walk Score vs. Driving Cost Calculator',
  description: 'Compare the financial impact of walkable neighborhoods vs. car-dependent locations',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'walk-score-vs-driving-cost-calculator',
  article: {
    title: "Understanding Walk Score and Transportation Costs",
    content: `
    <h2>What is Walk Score?</h2>
    <p>Walk Score is a measure of how walkable a neighborhood is, rated from 0-100. Higher scores indicate more amenities within walking distance, reducing the need for car ownership and use. Walk Score significantly impacts both lifestyle and finances.</p>
    
    <h3>Walk Score Categories</h3>
    <ul>
      <li><strong>90-100 (Walker's Paradise):</strong> Daily errands do not require a car</li>
      <li><strong>70-89 (Very Walkable):</strong> Most errands can be accomplished on foot</li>
      <li><strong>50-69 (Somewhat Walkable):</strong> Some errands can be accomplished on foot</li>
      <li><strong>25-49 (Car-Dependent):</strong> Most errands require a car</li>
      <li><strong>0-24 (Car-Dependent):</strong> Almost all errands require a car</li>
    </ul>
    
    <h3>True Cost of Car Ownership</h3>
    <p>The average American spends $10,728 per year to own and operate a vehicle (AAA, 2024):</p>
    <ul>
      <li>Car payments/depreciation: $4,500</li>
      <li>Fuel: $2,000</li>
      <li>Insurance: $1,500</li>
      <li>Maintenance and repairs: $1,200</li>
      <li>Registration and taxes: $800</li>
      <li>Parking: $700+</li>
    </ul>
    
    <h3>Financial Benefits of Walkable Neighborhoods</h3>
    <ul>
      <li><strong>Reduced Car Ownership:</strong> High Walk Score areas allow one-car or zero-car households</li>
      <li><strong>Lower Transportation Costs:</strong> Save $8,000-$15,000 per year by eliminating one car</li>
      <li><strong>Higher Property Values:</strong> Each point of Walk Score adds $500-$3,000 to home value</li>
      <li><strong>Lower Insurance:</strong> Drive less means lower auto insurance premiums</li>
      <li><strong>Health Savings:</strong> More walking reduces healthcare costs by $500-$2,000 annually</li>
    </ul>
    
    <h3>Total Cost of Living Analysis</h3>
    <p>While walkable neighborhoods often have higher home prices, the total cost of living can be lower:</p>
    <p><strong>Car-Dependent Suburb:</strong></p>
    <ul>
      <li>Home: $350,000 ($2,000/month mortgage)</li>
      <li>2 cars required: $1,800/month</li>
      <li>Total: $3,800/month</li>
    </ul>
    <p><strong>Walkable Urban:</strong></p>
    <ul>
      <li>Home: $450,000 ($2,500/month mortgage)</li>
      <li>1 car or zero: $400/month (transit + occasional rideshare)</li>
      <li>Total: $2,900/month (24% savings)</li>
    </ul>
    
    <h3>Environmental and Health Benefits</h3>
    <ul>
      <li>Reduce carbon emissions by 2-4 tons per year</li>
      <li>Walk 30+ minutes more per day</li>
      <li>Lower obesity and cardiovascular disease rates</li>
      <li>Reduced stress from commuting</li>
    </ul>
    
    <h3>Property Premium for Walkability</h3>
    <p>Research shows that properties in walkable neighborhoods (Walk Score 70+) command a 5-20% premium but deliver significant long-term savings. A home with a Walk Score of 90 vs. 40 saves residents $10,000+ annually in transportation costs.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "walkableHomePrice",
        label: "Walkable Home Price ($)",
        type: "number",
        placeholder: "450000",
        defaultValue: "450000",
      },
      {
        name: "carDependentHomePrice",
        label: "Car-Dependent Home Price ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "carsWalkable",
        label: "Cars Needed (Walkable)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "carsDependent",
        label: "Cars Needed (Car-Dependent)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "annualCarCost",
        label: "Annual Cost Per Car ($)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "downPayment",
        label: "Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "interestRate",
        label: "Mortgage Interest Rate (%)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
    ],
    results: [
      { label: "Walkable Monthly Housing Cost", isCurrency: true },
      { label: "Walkable Monthly Transport Cost", isCurrency: true },
      { label: "Walkable Total Monthly Cost", isCurrency: true },
      { label: "Car-Dependent Monthly Housing Cost", isCurrency: true },
      { label: "Car-Dependent Monthly Transport Cost", isCurrency: true },
      { label: "Car-Dependent Total Monthly Cost", isCurrency: true },
      { label: "Monthly Savings (Walkable)", isCurrency: true },
      { label: "Annual Savings", isCurrency: true },
    ],
    calculate: (data: any) => {
      const walkablePrice = Number(data.walkableHomePrice) || 0;
      const carPrice = Number(data.carDependentHomePrice) || 0;
      const carsWalk = Number(data.carsWalkable) || 0;
      const carsDep = Number(data.carsDependent) || 0;
      const carCost = Number(data.annualCarCost) || 0;
      const downPct = Number(data.downPayment) / 100 || 0;
      const rate = Number(data.interestRate) / 100 / 12 || 0;
      
      const loanWalk = walkablePrice * (1 - downPct);
      const loanCar = carPrice * (1 - downPct);
      const n = 360; // 30 years
      
      const monthlyWalk = loanWalk * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
      const monthlyCar = loanCar * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
      
      const transportWalk = (carsWalk * carCost) / 12;
      const transportCar = (carsDep * carCost) / 12;
      
      const totalWalk = monthlyWalk + transportWalk;
      const totalCar = monthlyCar + transportCar;
      const savings = totalCar - totalWalk;
      const annualSavings = savings * 12;

      return [
        { label: "Walkable Monthly Housing Cost", value: monthlyWalk.toFixed(2), isCurrency: true },
        { label: "Walkable Monthly Transport Cost", value: transportWalk.toFixed(2), isCurrency: true },
        { label: "Walkable Total Monthly Cost", value: totalWalk.toFixed(2), isCurrency: true },
        { label: "Car-Dependent Monthly Housing Cost", value: monthlyCar.toFixed(2), isCurrency: true },
        { label: "Car-Dependent Monthly Transport Cost", value: transportCar.toFixed(2), isCurrency: true },
        { label: "Car-Dependent Total Monthly Cost", value: totalCar.toFixed(2), isCurrency: true },
        { label: "Monthly Savings (Walkable)", value: savings > 0 ? `+${savings.toFixed(2)}` : savings.toFixed(2), isCurrency: true },
        { label: "Annual Savings", value: annualSavings > 0 ? `+${annualSavings.toFixed(2)}` : annualSavings.toFixed(2), isCurrency: true },
      ];
    },
  },
};
