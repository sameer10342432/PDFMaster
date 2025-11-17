import { CalculatorContent } from '@/types';

export const COST_OF_MOVING_BUYER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cost of Moving Calculator (Buyer)',
  description: 'Calculate comprehensive moving costs for homebuyers including closing costs, moving expenses, immediate repairs, and setup costs',
  icon: 'Icon',
  category: 'Buyer Tools',
  slug: 'cost-of-moving-buyer-calculator',
  article: {
    title: "Complete Homebuyer Moving Cost Guide",
    content: `
    <h2>Understanding Homebuyer Moving Costs</h2>
    <p>Buying a home involves significant upfront costs beyond the down payment. This guide helps you understand and budget for all expenses involved in purchasing and moving into your new home.</p>
    
    <h3>Closing Costs (2-5% of Purchase Price)</h3>
    <ul>
      <li><strong>Loan Origination Fee:</strong> 0.5-1% of loan amount</li>
      <li><strong>Appraisal Fee:</strong> $300-$600</li>
      <li><strong>Home Inspection:</strong> $300-$500</li>
      <li><strong>Title Insurance:</strong> $500-$2,000</li>
      <li><strong>Attorney Fees:</strong> $500-$1,500 (varies by state)</li>
      <li><strong>Recording Fees:</strong> $100-$250</li>
      <li><strong>Transfer Taxes:</strong> Varies by location, can be significant</li>
      <li><strong>Survey Fee:</strong> $150-$400</li>
      <li><strong>Credit Report:</strong> $25-$50</li>
      <li><strong>Prepaid Property Taxes:</strong> Varies by closing date</li>
      <li><strong>Homeowners Insurance (First Year):</strong> $1,000-$3,000</li>
      <li><strong>HOA Transfer Fees:</strong> If applicable</li>
    </ul>
    
    <h3>Moving Expenses</h3>
    <ul>
      <li><strong>Professional Movers:</strong> $1,500-$5,000+ depending on distance and volume</li>
      <li><strong>Packing Services:</strong> Additional $500-$1,500 if using movers</li>
      <li><strong>Moving Supplies:</strong> $100-$300 for boxes, tape, padding</li>
      <li><strong>Storage:</strong> $100-$300/month if needed temporarily</li>
      <li><strong>Vehicle Shipping:</strong> If moving long distance</li>
      <li><strong>Moving Insurance:</strong> Additional coverage for valuables</li>
    </ul>
    
    <h3>Immediate Home Expenses</h3>
    <ul>
      <li><strong>Lock Changes/Rekeying:</strong> $100-$300 for security</li>
      <li><strong>Deep Cleaning:</strong> $200-$500 before moving in</li>
      <li><strong>Painting:</strong> $1,000-$5,000 depending on size</li>
      <li><strong>Minor Repairs:</strong> Items found during inspection</li>
      <li><strong>Window Treatments:</strong> $500-$2,000</li>
      <li><strong>Lawn Equipment:</strong> $300-$1,000 if buying a house</li>
      <li><strong>Home Security System:</strong> $0-$500 setup</li>
    </ul>
    
    <h3>Utility Setup and Ongoing Costs</h3>
    <ul>
      <li><strong>Utility Deposits:</strong> $200-$400 total</li>
      <li><strong>Internet/Cable Installation:</strong> $50-$200</li>
      <li><strong>Homeowners Association Fees:</strong> If applicable</li>
      <li><strong>Higher Utility Bills:</strong> Houses typically cost more than apartments</li>
    </ul>
    
    <h3>Furniture and Appliances</h3>
    <ul>
      <li><strong>New Furniture:</strong> Budget for larger space</li>
      <li><strong>Appliances:</strong> If not included ($2,000-$8,000 for full set)</li>
      <li><strong>Window AC Units:</strong> If no central air</li>
      <li><strong>Washer/Dryer:</strong> $800-$2,500 if not included</li>
    </ul>
    
    <h3>Emergency Fund for New Homeowners</h3>
    <p>Set aside 1-3% of home value for unexpected issues:</p>
    <ul>
      <li>HVAC repairs or replacement</li>
      <li>Plumbing emergencies</li>
      <li>Roof leaks</li>
      <li>Electrical issues</li>
      <li>Appliance failures</li>
    </ul>
    
    <h3>Money-Saving Tips</h3>
    <ul>
      <li>Schedule closing at month-end to minimize prepaid interest</li>
      <li>Negotiate seller credits for closing costs</li>
      <li>Shop around for title insurance and homeowners insurance</li>
      <li>Do your own packing to save on moving costs</li>
      <li>Buy used or wait for sales on furniture and appliances</li>
      <li>Complete cosmetic updates yourself over time</li>
      <li>Ask the seller to leave appliances or lawn equipment</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
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
        name: "closingCostRate",
        label: "Closing Costs Rate (%)",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "movingDistance",
        label: "Moving Distance (miles)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "immediateRepairs",
        label: "Immediate Repairs/Updates",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
      {
        name: "newAppliances",
        label: "Need New Appliances?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Some", label: "Some" }, { value: "Full Set", label: "Full Set" }],
        defaultValue: "Some",
      },
      {
        name: "newFurniture",
        label: "New Furniture Budget",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
    ],
    results: [
      { label: "Down Payment", isCurrency: true },
      { label: "Closing Costs", isCurrency: true },
      { label: "Moving Expenses", isCurrency: true },
      { label: "Immediate Home Expenses", isCurrency: true },
      { label: "Furniture & Appliances", isCurrency: true },
      { label: "Total Cash Needed", isCurrency: true },
      { label: "Recommended Emergency Fund", isCurrency: true },
      { label: "Grand Total to Budget", isCurrency: true },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const downPaymentPercent = Number(data.downPayment) || 20;
      const closingCostRate = Number(data.closingCostRate) || 3;
      const movingDistance = Number(data.movingDistance) || 0;
      const homeSize = Number(data.homeSize) || 2000;
      const immediateRepairs = Number(data.immediateRepairs) || 0;
      const newAppliances = data.newAppliances || "Some";
      const newFurniture = Number(data.newFurniture) || 0;
      
      // Calculate down payment
      const downPayment = purchasePrice * (downPaymentPercent / 100);
      
      // Calculate closing costs
      const closingCosts = purchasePrice * (closingCostRate / 100);
      
      // Calculate moving expenses based on distance and home size
      const baseMovingCost = 1500;
      const distanceCost = movingDistance * 1.5;
      const sizeFactor = homeSize / 1000; // Extra cost per 1000 sq ft
      const movingExpenses = baseMovingCost + distanceCost + (sizeFactor * 500);
      
      // Immediate home expenses
      const lockChange = 150;
      const cleaning = 300;
      const utilitySetup = 200;
      const immediateHomeExpenses = lockChange + cleaning + utilitySetup + immediateRepairs;
      
      // Appliances cost
      let applianceCost = 0;
      if (newAppliances === "Some") applianceCost = 2000;
      else if (newAppliances === "Full Set") applianceCost = 6000;
      
      const furnitureAndAppliances = applianceCost + newFurniture;
      
      // Total cash needed at closing
      const totalCashNeeded = downPayment + closingCosts + movingExpenses + immediateHomeExpenses + furnitureAndAppliances;
      
      // Recommended emergency fund (2% of home value)
      const emergencyFund = purchasePrice * 0.02;
      
      // Grand total
      const grandTotal = totalCashNeeded + emergencyFund;

      return [
        { label: "Down Payment", value: `${downPayment.toFixed(2)}`, isCurrency: true },
        { label: "Closing Costs", value: `${closingCosts.toFixed(2)}`, isCurrency: true },
        { label: "Moving Expenses", value: `${movingExpenses.toFixed(2)}`, isCurrency: true },
        { label: "Immediate Home Expenses", value: `${immediateHomeExpenses.toFixed(2)}`, isCurrency: true },
        { label: "Furniture & Appliances", value: `${furnitureAndAppliances.toFixed(2)}`, isCurrency: true },
        { label: "Total Cash Needed", value: `${totalCashNeeded.toFixed(2)}`, isCurrency: true },
        { label: "Recommended Emergency Fund", value: `${emergencyFund.toFixed(2)}`, isCurrency: true },
        { label: "Grand Total to Budget", value: `${grandTotal.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};
