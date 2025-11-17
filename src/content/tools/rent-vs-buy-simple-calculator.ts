import { CalculatorContent } from '@/types';

export const RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Rent vs. Buy Calculator (Simple)',
  description: 'Quick comparison tool to determine whether renting or buying makes more financial sense for your situation',
  icon: 'Icon',
  category: 'Buyer Tools',
  slug: 'rent-vs-buy-simple-calculator',
  article: {
    title: "Rent vs. Buy: Making the Right Housing Decision",
    content: `
    <h2>Should You Rent or Buy?</h2>
    <p>The decision to rent or buy a home is one of the biggest financial choices you'll make. While buying builds equity, renting offers flexibility. This calculator helps you make an informed decision based on your financial situation and lifestyle goals.</p>
    
    <h3>When Buying Makes Sense</h3>
    <ul>
      <li><strong>Long-term stability:</strong> Planning to stay in the area for 5+ years</li>
      <li><strong>Building equity:</strong> Want to build wealth through homeownership</li>
      <li><strong>Tax benefits:</strong> Can deduct mortgage interest and property taxes</li>
      <li><strong>Stable market:</strong> Property values are appreciating</li>
      <li><strong>Personalization:</strong> Want to customize and improve your space</li>
      <li><strong>Fixed costs:</strong> Prefer predictable monthly payments (fixed-rate mortgage)</li>
    </ul>
    
    <h3>When Renting Makes Sense</h3>
    <ul>
      <li><strong>Flexibility:</strong> May need to relocate for work or personal reasons</li>
      <li><strong>Lower upfront costs:</strong> Don't have savings for down payment and closing costs</li>
      <li><strong>No maintenance:</strong> Landlord handles repairs and maintenance</li>
      <li><strong>High home prices:</strong> Local market prices are inflated</li>
      <li><strong>Career mobility:</strong> Job requires frequent moves</li>
      <li><strong>Testing a location:</strong> Want to try living in an area before committing</li>
    </ul>
    
    <h3>Hidden Costs of Homeownership</h3>
    <p>Many first-time buyers underestimate the true cost of owning:</p>
    <ul>
      <li>Property taxes (1-2% of home value annually)</li>
      <li>Homeowners insurance ($1,000-$3,000+ per year)</li>
      <li>Maintenance and repairs (1-2% of home value annually)</li>
      <li>HOA fees (can be $100-$700+ monthly)</li>
      <li>PMI if down payment is less than 20%</li>
      <li>Utilities (often higher than apartments)</li>
      <li>Closing costs (2-5% of purchase price)</li>
    </ul>
    
    <h3>The 5-Year Rule</h3>
    <p>Financial experts often cite the "5-year rule" - you should plan to stay in a home for at least 5 years to break even on:</p>
    <ul>
      <li>Closing costs when buying</li>
      <li>Realtor commission when selling (5-6%)</li>
      <li>Transaction costs and moving expenses</li>
      <li>Time for property appreciation to offset costs</li>
    </ul>
    
    <h3>Price-to-Rent Ratio</h3>
    <p>A simple metric to evaluate your local market:</p>
    <ul>
      <li><strong>Ratio below 15:</strong> Generally favors buying</li>
      <li><strong>Ratio 15-20:</strong> Borderline - depends on your situation</li>
      <li><strong>Ratio above 20:</strong> Generally favors renting</li>
    </ul>
    <p>Formula: Home Price ÷ Annual Rent</p>
    
    <h3>Beyond the Numbers</h3>
    <p>While financial calculations are important, also consider:</p>
    <ul>
      <li>Lifestyle preferences and goals</li>
      <li>Desire for stability vs. flexibility</li>
      <li>Local school quality (if you have children)</li>
      <li>Commute and location preferences</li>
      <li>Family plans and life stage</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Purchase Price",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
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
        placeholder: "7.0",
        defaultValue: "7.0",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "yearsStaying",
        label: "Years Planning to Stay",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
      {
        name: "homeAppreciation",
        label: "Expected Annual Home Appreciation (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "rentIncrease",
        label: "Expected Annual Rent Increase (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
    ],
    results: [
      { label: "Total Cost of Buying", isCurrency: true },
      { label: "Total Cost of Renting", isCurrency: true },
      { label: "5-Year Cost Difference", isCurrency: true },
      { label: "Price-to-Rent Ratio", isCurrency: false },
      { label: "Monthly Mortgage Payment", isCurrency: true },
      { label: "Break-Even Year", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homePrice = Number(data.homePrice) || 0;
      const downPaymentPercent = Number(data.downPayment) || 20;
      const interestRate = Number(data.interestRate) || 7.0;
      const monthlyRent = Number(data.monthlyRent) || 0;
      const years = Number(data.yearsStaying) || 7;
      const homeAppreciation = Number(data.homeAppreciation) || 3;
      const rentIncrease = Number(data.rentIncrease) || 3;
      
      // Calculate buying costs
      const downPaymentAmount = homePrice * (downPaymentPercent / 100);
      const loanAmount = homePrice - downPaymentAmount;
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = 30 * 12;
      
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      // Closing costs (3% of home price)
      const closingCosts = homePrice * 0.03;
      
      // Annual costs
      const annualPropertyTax = homePrice * 0.012; // 1.2% property tax
      const annualInsurance = 1200;
      const annualMaintenance = homePrice * 0.01; // 1% maintenance
      
      // Total buying costs over the period
      let totalBuyingCost = downPaymentAmount + closingCosts;
      let currentHomeValue = homePrice;
      
      for (let year = 1; year <= years; year++) {
        totalBuyingCost += (monthlyMortgage * 12);
        totalBuyingCost += annualPropertyTax + annualInsurance + annualMaintenance;
        currentHomeValue *= (1 + homeAppreciation / 100);
      }
      
      // Subtract home equity (current value minus remaining loan)
      const totalPaid = monthlyMortgage * 12 * years;
      const totalInterest = totalPaid - (loanAmount - (loanAmount * Math.pow(1 + monthlyRate, numPayments - years * 12) - totalPaid));
      const remainingBalance = loanAmount - (totalPaid - totalInterest);
      const homeEquity = currentHomeValue - remainingBalance;
      
      // Selling costs (6% commission)
      const sellingCosts = currentHomeValue * 0.06;
      const netBuyingCost = totalBuyingCost - homeEquity + sellingCosts;
      
      // Calculate renting costs
      let totalRentingCost = 0;
      let currentRent = monthlyRent;
      
      for (let year = 1; year <= years; year++) {
        totalRentingCost += currentRent * 12;
        currentRent *= (1 + rentIncrease / 100);
      }
      
      // Calculate metrics
      const costDifference = netBuyingCost - totalRentingCost;
      const priceToRentRatio = homePrice / (monthlyRent * 12);
      
      // Find break-even year
      let breakEvenYear = 0;
      for (let year = 1; year <= 30; year++) {
        let buyingCostAtYear = downPaymentAmount + closingCosts;
        let rentingCostAtYear = 0;
        let tempHomeValue = homePrice;
        let tempRent = monthlyRent;
        
        for (let y = 1; y <= year; y++) {
          buyingCostAtYear += (monthlyMortgage * 12) + annualPropertyTax + annualInsurance + annualMaintenance;
          tempHomeValue *= (1 + homeAppreciation / 100);
          rentingCostAtYear += tempRent * 12;
          tempRent *= (1 + rentIncrease / 100);
        }
        
        const tempTotalPaid = monthlyMortgage * 12 * year;
        const tempRemainingBalance = Math.max(0, loanAmount - (tempTotalPaid * 0.3)); // Simplified
        const tempEquity = tempHomeValue - tempRemainingBalance;
        const tempSellingCosts = tempHomeValue * 0.06;
        const tempNetBuying = buyingCostAtYear - tempEquity + tempSellingCosts;
        
        if (tempNetBuying <= rentingCostAtYear && breakEvenYear === 0) {
          breakEvenYear = year;
        }
      }
      
      // Recommendation
      let recommendation = "";
      if (priceToRentRatio < 15 && years >= 5) {
        recommendation = "🏡 Buying is likely better";
      } else if (priceToRentRatio > 20 || years < 3) {
        recommendation = "🏠 Renting is likely better";
      } else {
        recommendation = "⚖️ Borderline - Consider personal factors";
      }

      return [
        { label: "Total Cost of Buying", value: `${netBuyingCost.toFixed(0)}`, isCurrency: true },
        { label: "Total Cost of Renting", value: `${totalRentingCost.toFixed(0)}`, isCurrency: true },
        { label: "5-Year Cost Difference", value: `${Math.abs(costDifference).toFixed(0)}`, isCurrency: true },
        { label: "Price-to-Rent Ratio", value: priceToRentRatio.toFixed(1), isCurrency: false },
        { label: "Monthly Mortgage Payment", value: `${monthlyMortgage.toFixed(2)}`, isCurrency: true },
        { label: "Break-Even Year", value: breakEvenYear > 0 ? `Year ${breakEvenYear}` : "Beyond 30 years", isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
