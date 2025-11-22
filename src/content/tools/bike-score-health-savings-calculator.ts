import { CalculatorContent } from '@/types';

export const BIKE_SCORE_HEALTH_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Bike Score (Impact on Health Savings) Calculator',
  description: 'Calculate health and financial benefits from living in bike-friendly neighborhoods',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'bike-score-health-savings-calculator',
  article: {
    title: "Understanding Bike Score and Health Benefits",
    content: `
    <h2>What is Bike Score?</h2>
    <p>Bike Score measures how bikeable a location is on a scale of 0-100, considering factors like bike lanes, hills, road connectivity, and destinations. Higher Bike Scores correlate with increased cycling, better health outcomes, and significant financial savings.</p>
    
    <h3>Bike Score Categories</h3>
    <ul>
      <li><strong>90-100 (Biker's Paradise):</strong> Daily errands can be accomplished on a bike</li>
      <li><strong>70-89 (Very Bikeable):</strong> Biking is convenient for most trips</li>
      <li><strong>50-69 (Bikeable):</strong> Some bike infrastructure</li>
      <li><strong>0-49 (Somewhat Bikeable):</strong> Minimal bike infrastructure</li>
    </ul>
    
    <h3>Health Benefits of Regular Cycling</h3>
    <p>Studies show that commuting by bike for just 30 minutes per day, 5 days per week provides:</p>
    <ul>
      <li><strong>Cardiovascular Health:</strong> 50% reduction in heart disease risk</li>
      <li><strong>Weight Management:</strong> Burn 300-600 calories per hour</li>
      <li><strong>Mental Health:</strong> Reduced anxiety and depression by 30%</li>
      <li><strong>Immune System:</strong> 40% reduction in sick days</li>
      <li><strong>Longevity:</strong> Increase life expectancy by 2-4 years</li>
      <li><strong>Cancer Prevention:</strong> 45% lower risk of cancer</li>
    </ul>
    
    <h3>Financial Health Savings</h3>
    <p>Regular cyclists save on healthcare costs through:</p>
    <ul>
      <li>Lower insurance premiums: $200-500/year</li>
      <li>Reduced medical visits: $300-800/year</li>
      <li>Fewer prescriptions: $200-600/year</li>
      <li>Prevented chronic disease costs: $1,000-3,000/year</li>
      <li><strong>Total annual health savings: $1,700-$5,000</strong></li>
    </ul>
    
    <h3>Transportation Cost Savings</h3>
    <ul>
      <li>Bike purchase and maintenance: $300-800/year</li>
      <li>Replace car ownership ($10,000+/year): Save $9,200+</li>
      <li>Replace car commuting only: Save $2,000-4,000/year (gas, parking, wear)</li>
      <li>Reduce car use by 30%: Save $1,500-2,500/year</li>
    </ul>
    
    <h3>Employer Benefits</h3>
    <p>Many employers offer bike commuter benefits:</p>
    <ul>
      <li>Bike commuter tax benefit: Up to $300/year</li>
      <li>Subsidized bike purchase programs</li>
      <li>Free bike maintenance</li>
      <li>Shower facilities and secure parking</li>
    </ul>
    
    <h3>Environmental Impact</h3>
    <p>Biking instead of driving reduces your carbon footprint by:</p>
    <ul>
      <li>2,000-4,000 lbs CO₂ per year (commuting only)</li>
      <li>6,000-10,000 lbs CO₂ per year (car replacement)</li>
      <li>Equivalent to planting 100-250 trees</li>
    </ul>
    
    <h3>Property Value Premium</h3>
    <p>Homes in bike-friendly neighborhoods (Bike Score 70+) command a 3-11% premium. However, the combination of health savings, transportation savings, and quality of life improvements makes this premium worthwhile for active residents.</p>
    
    <h3>Productivity and Mental Health</h3>
    <ul>
      <li>Improved focus and productivity: Worth $2,000-5,000/year</li>
      <li>Reduced stress and improved mood</li>
      <li>Better sleep quality</li>
      <li>Increased energy levels throughout the day</li>
    </ul>
    
    <h3>Making the Most of High Bike Scores</h3>
    <ul>
      <li>Invest in a quality commuter bike ($500-1,500)</li>
      <li>Use proper safety equipment</li>
      <li>Plan safe routes using bike maps</li>
      <li>Join local cycling communities</li>
      <li>Consider e-bikes for longer distances or hills</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "weeklyBikeDays",
        label: "Days Biking Per Week",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "dailyBikeMinutes",
        label: "Minutes Biking Per Day",
        type: "number",
        placeholder: "40",
        defaultValue: "40",
      },
      {
        name: "currentHealthcareCost",
        label: "Current Annual Healthcare Cost ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "carMilesReplaced",
        label: "Annual Car Miles Replaced by Biking",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "costPerMile",
        label: "Cost Per Mile (car) ($)",
        type: "number",
        placeholder: "0.65",
        defaultValue: "0.65",
      },
    ],
    results: [
      { label: "Annual Health Savings", isCurrency: true },
      { label: "Annual Transportation Savings", isCurrency: true },
      { label: "Annual Bike Costs", isCurrency: true },
      { label: "Net Annual Savings", isCurrency: true },
      { label: "Calories Burned Per Year", isCurrency: false },
      { label: "CO₂ Reduced (lbs/year)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const days = Number(data.weeklyBikeDays) || 0;
      const minutes = Number(data.dailyBikeMinutes) || 0;
      const healthCost = Number(data.currentHealthcareCost) || 0;
      const miles = Number(data.carMilesReplaced) || 0;
      const costPerMile = Number(data.costPerMile) || 0;
      
      // Health savings (10-25% reduction in healthcare costs for regular cyclists)
      const weeklyMinutes = days * minutes;
      const healthSavingsPercent = weeklyMinutes >= 150 ? 0.20 : weeklyMinutes >= 75 ? 0.12 : 0.05;
      const healthSavings = healthCost * healthSavingsPercent;
      
      // Transportation savings
      const transportSavings = miles * costPerMile;
      
      // Bike costs
      const bikeCosts = 500; // Average annual bike maintenance and depreciation
      
      // Net savings
      const netSavings = healthSavings + transportSavings - bikeCosts;
      
      // Calories burned (approx 50 calories per 10 minutes of moderate cycling)
      const annualMinutes = days * minutes * 52;
      const caloriesBurned = (annualMinutes / 10) * 50;
      
      // CO2 reduced (1 lb per mile)
      const co2Reduced = miles * 1;

      return [
        { label: "Annual Health Savings", value: healthSavings.toFixed(2), isCurrency: true },
        { label: "Annual Transportation Savings", value: transportSavings.toFixed(2), isCurrency: true },
        { label: "Annual Bike Costs", value: bikeCosts.toFixed(2), isCurrency: true },
        { label: "Net Annual Savings", value: netSavings.toFixed(2), isCurrency: true },
        { label: "Calories Burned Per Year", value: caloriesBurned.toFixed(0), isCurrency: false },
        { label: "CO₂ Reduced (lbs/year)", value: co2Reduced.toFixed(0), isCurrency: false },
      ];
    },
  },
};
