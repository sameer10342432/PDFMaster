import { CalculatorContent } from '@/types';

export const COST_OF_MOVING_RENTER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost of Moving Calculator (Renter)',
  description: 'Calculate the total cost of moving to a new rental including deposits, moving expenses, and setup costs',
  icon: '📦',
  category: 'Renter Tools',
  slug: 'cost-of-moving-renter-calculator',
  article: {
    title: "Complete Guide to Renter Moving Costs",
    content: `
    <h2>Understanding Renter Moving Costs</h2>
    <p>Moving to a new rental property involves more than just packing boxes. Understanding all the costs involved helps you budget properly and avoid financial surprises.</p>
    
    <h3>Upfront Rental Costs</h3>
    <ul>
      <li><strong>Security Deposit:</strong> Typically 1-2 months' rent, refundable if property left in good condition</li>
      <li><strong>First Month's Rent:</strong> Due before or on move-in day</li>
      <li><strong>Last Month's Rent:</strong> Some landlords require this upfront</li>
      <li><strong>Application Fees:</strong> $25-$75 per applicant for background and credit checks</li>
      <li><strong>Broker Fee:</strong> In some markets (NYC, Boston), can be 10-15% of annual rent</li>
      <li><strong>Pet Deposit:</strong> $200-$500 per pet, sometimes non-refundable</li>
    </ul>
    
    <h3>Moving Service Costs</h3>
    <ul>
      <li><strong>Professional Movers:</strong> $800-$2,500+ for local moves</li>
      <li><strong>Truck Rental:</strong> $20-$100 per day plus mileage</li>
      <li><strong>Moving Supplies:</strong> Boxes, tape, bubble wrap ($50-$200)</li>
      <li><strong>Storage Unit:</strong> If needed between moves ($50-$300/month)</li>
      <li><strong>Insurance:</strong> Additional coverage for valuable items</li>
    </ul>
    
    <h3>Utility Setup and Deposits</h3>
    <ul>
      <li><strong>Electricity:</strong> $50-$150 deposit (may be waived with good credit)</li>
      <li><strong>Gas:</strong> $50-$100 deposit</li>
      <li><strong>Internet/Cable:</strong> Installation fees $50-$100, equipment $100-$200</li>
      <li><strong>Water/Sewage:</strong> Usually included in rent, but not always</li>
    </ul>
    
    <h3>Tips to Reduce Moving Costs</h3>
    <ul>
      <li>Move during off-peak times (mid-month, winter months)</li>
      <li>Get free boxes from grocery stores and liquor stores</li>
      <li>Sell or donate items you don't need before moving</li>
      <li>Ask friends and family to help instead of hiring movers</li>
      <li>Compare quotes from multiple moving companies</li>
      <li>Pack yourself to save on labor costs</li>
      <li>Check if your security deposit from previous rental covers new expenses</li>
    </ul>
    
    <h3>Hidden Costs to Remember</h3>
    <ul>
      <li>Cleaning the old apartment to get deposit back</li>
      <li>Changing your address (USPS, DMV, etc.)</li>
      <li>New furniture or appliances if new place needs them</li>
      <li>Time off work for moving day</li>
      <li>Eating out during the move (no kitchen access)</li>
      <li>Parking permits for the new location</li>
    </ul>
    
    <h3>Security Deposit Best Practices</h3>
    <ul>
      <li>Document the condition of your new apartment with photos</li>
      <li>Understand the lease terms for getting your deposit back</li>
      <li>Know your state's laws about deposit return timelines</li>
      <li>Keep all receipts for any repairs you make</li>
      <li>Do a walk-through with the landlord before moving out</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyRent",
        label: "New Monthly Rent",
        type: "number",
        placeholder: "1800",
        defaultValue: "1800",
      },
      {
        name: "securityDeposit",
        label: "Security Deposit (months)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "lastMonthRequired",
        label: "Last Month's Rent Required?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "No",
      },
      {
        name: "applicationFee",
        label: "Application Fee",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "brokerFee",
        label: "Broker Fee (if applicable)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "movingDistance",
        label: "Moving Distance (miles)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "movingMethod",
        label: "Moving Method",
        type: "select",
        options: [{ value: "DIY", label: "DIY" }, { value: "Truck Rental", label: "Truck Rental" }, { value: "Professional Movers", label: "Professional Movers" }],
        defaultValue: "Truck Rental",
      },
      {
        name: "utilityDeposits",
        label: "Utility Deposits",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
    ],
    results: [
      { label: "Total Upfront Rental Costs", isCurrency: true },
      { label: "Moving Expenses", isCurrency: true },
      { label: "Utility Setup Costs", isCurrency: true },
      { label: "Total Moving Cost", isCurrency: true },
      { label: "Monthly Budget Impact", isCurrency: true },
      { label: "Recommended Savings Buffer", isCurrency: true },
    ],
    calculate: (data: any) => {
      const monthlyRent = Number(data.monthlyRent) || 0;
      const securityDepositMonths = Number(data.securityDeposit) || 1;
      const lastMonthRequired = data.lastMonthRequired === "Yes";
      const applicationFee = Number(data.applicationFee) || 0;
      const brokerFee = Number(data.brokerFee) || 0;
      const movingDistance = Number(data.movingDistance) || 0;
      const movingMethod = data.movingMethod || "Truck Rental";
      const utilityDeposits = Number(data.utilityDeposits) || 0;
      
      // Calculate upfront rental costs
      const securityDeposit = monthlyRent * securityDepositMonths;
      const firstMonth = monthlyRent;
      const lastMonth = lastMonthRequired ? monthlyRent : 0;
      const totalUpfront = securityDeposit + firstMonth + lastMonth + applicationFee + brokerFee;
      
      // Calculate moving expenses
      let movingCost = 0;
      if (movingMethod === "DIY") {
        movingCost = 100; // Supplies and gas
      } else if (movingMethod === "Truck Rental") {
        movingCost = 150 + (movingDistance * 0.5); // Rental + mileage
      } else {
        movingCost = 800 + (movingDistance * 2); // Professional movers
      }
      
      const movingSupplies = 75;
      const totalMovingExpenses = movingCost + movingSupplies;
      
      // Calculate utility setup
      const internetSetup = 100;
      const totalUtilityCosts = utilityDeposits + internetSetup;
      
      // Total cost
      const totalCost = totalUpfront + totalMovingExpenses + totalUtilityCosts;
      
      // Monthly impact (amortized over first 3 months)
      const monthlyImpact = totalCost / 3;
      
      // Recommended buffer (20% extra for unexpected costs)
      const recommendedBuffer = totalCost * 1.2;

      return [
        { label: "Total Upfront Rental Costs", value: `${totalUpfront.toFixed(2)}`, isCurrency: true },
        { label: "Moving Expenses", value: `${totalMovingExpenses.toFixed(2)}`, isCurrency: true },
        { label: "Utility Setup Costs", value: `${totalUtilityCosts.toFixed(2)}`, isCurrency: true },
        { label: "Total Moving Cost", value: `${totalCost.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Budget Impact", value: `${monthlyImpact.toFixed(2)}`, isCurrency: true },
        { label: "Recommended Savings Buffer", value: `${recommendedBuffer.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
