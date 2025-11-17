import { CalculatorContent } from '@/types';

export const MORTGAGE_OFFER_COMPARISON_TOOL_LE_CONTENT: CalculatorContent = {
  title: 'Mortgage Offer Comparison Tool (LE)',
  description: 'Compare multiple mortgage Loan Estimates side-by-side to find the best deal based on rate, fees, and total costs',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'mortgage-offer-comparison-tool-le',
  article: {
    title: "How to Compare Loan Estimates (LE) and Choose the Best Mortgage",
    content: `
    <h2>Comparing Mortgage Loan Estimates</h2>
    <p>When shopping for a mortgage, you'll receive a Loan Estimate (LE) from each lender within 3 business days of applying. This standardized form makes it easier to compare offers, but understanding what to look for is crucial.</p>
    
    <h3>What is a Loan Estimate?</h3>
    <p>A Loan Estimate is a 3-page document that includes:</p>
    <ul>
      <li><strong>Page 1:</strong> Loan terms, projected payments, costs at closing</li>
      <li><strong>Page 2:</strong> Detailed breakdown of closing costs</li>
      <li><strong>Page 3:</strong> Additional information, comparisons, and contact details</li>
    </ul>
    
    <h3>Key Sections to Compare</h3>
    <p><strong>1. Loan Terms (Page 1)</strong></p>
    <ul>
      <li><strong>Loan Amount:</strong> Should match across all lenders</li>
      <li><strong>Interest Rate:</strong> Lower isn't always better if fees are high</li>
      <li><strong>Monthly P&I Payment:</strong> Principal and interest payment</li>
      <li><strong>Prepayment Penalty:</strong> Avoid loans with prepayment penalties</li>
      <li><strong>Balloon Payment:</strong> Flag any balloon loans</li>
    </ul>
    
    <p><strong>2. Projected Payments (Page 1)</strong></p>
    <ul>
      <li><strong>Principal & Interest:</strong> Fixed or variable</li>
      <li><strong>Mortgage Insurance:</strong> PMI for conventional, MIP for FHA</li>
      <li><strong>Estimated Escrow:</strong> Property tax and insurance (can vary)</li>
      <li><strong>Total Monthly Payment:</strong> PITI + MI</li>
    </ul>
    
    <p><strong>3. Costs at Closing (Page 1, Details Page 2)</strong></p>
    <ul>
      <li><strong>Origination Charges:</strong> Lender fees (0.5-1% typical)</li>
      <li><strong>Points:</strong> Discount points (optional, buy down rate)</li>
      <li><strong>Services You Cannot Shop For:</strong> Lender-required services</li>
      <li><strong>Services You Can Shop For:</strong> Title, appraisal, inspection</li>
      <li><strong>Taxes & Government Fees:</strong> Recording, transfer taxes</li>
      <li><strong>Prepaids:</strong> Prepaid interest, insurance, property tax</li>
      <li><strong>Initial Escrow:</strong> Months of insurance/tax reserves</li>
    </ul>
    
    <h3>APR vs. Interest Rate: Which Matters More?</h3>
    <p><strong>Interest Rate:</strong> The cost to borrow money (affects monthly payment)</p>
    <p><strong>APR (Annual Percentage Rate):</strong> True cost including fees and points</p>
    <p><strong>Rule:</strong> Compare APRs to see total borrowing cost. Lower APR = better deal over time.</p>
    
    <h3>Comparing Offers: Step-by-Step</h3>
    <ol>
      <li><strong>Verify Loan Amount:</strong> Ensure all LEs quote the same loan amount</li>
      <li><strong>Compare Interest Rates:</strong> Lower rate means lower monthly payment</li>
      <li><strong>Compare APRs:</strong> Lower APR means lower total cost</li>
      <li><strong>Sum Total Closing Costs:</strong> Section A-F on page 2</li>
      <li><strong>Factor in Credits:</strong> Lender credits reduce upfront costs</li>
      <li><strong>Calculate Break-Even:</strong> If paying points, how long to recoup?</li>
      <li><strong>Check Lock Period:</strong> 30-day lock standard, 60-day may cost more</li>
    </ol>
    
    <h3>Break-Even Analysis for Discount Points</h3>
    <p><strong>Example:</strong> Lender A offers 6.5% with no points. Lender B offers 6.25% with 1 point ($4,000).</p>
    <ul>
      <li>Payment difference: $40/month savings</li>
      <li>Break-even: $4,000 ÷ $40 = 100 months (8.3 years)</li>
      <li><strong>Decision:</strong> Pay points only if staying 8+ years</li>
    </ul>
    
    <h3>Red Flags When Comparing LEs</h3>
    <ul>
      <li><strong>Unusually Low Rate:</strong> Check for high origination fees or points</li>
      <li><strong>High Junk Fees:</strong> "Processing," "admin," "doc prep" fees over $500</li>
      <li><strong>Inflated Escrow:</strong> Some lenders pad escrow to inflate closing costs</li>
      <li><strong>Prepayment Penalty:</strong> Avoid unless rate savings justify it</li>
      <li><strong>Variable Rate Risk:</strong> ARM may save money initially but risks rate increases</li>
    </ul>
    
    <h3>Negotiation Tips</h3>
    <ul>
      <li><strong>Shop 3-5 Lenders:</strong> More quotes = better leverage</li>
      <li><strong>Ask for Match/Beat:</strong> Show competing LE and ask to match</li>
      <li><strong>Waive Fees:</strong> Application, underwriting, processing fees often negotiable</li>
      <li><strong>Time Your Lock:</strong> Lock when rates dip, float if trending down</li>
      <li><strong>Consider Relationship Discounts:</strong> Your bank may offer lower rates to existing customers</li>
    </ul>
    
    <h3>Final Decision Factors</h3>
    <p>Beyond numbers, consider:</p>
    <ul>
      <li><strong>Lender Reputation:</strong> Check reviews and BBB ratings</li>
      <li><strong>Communication:</strong> Responsive loan officer saves stress</li>
      <li><strong>Closing Timeline:</strong> Can they close on schedule?</li>
      <li><strong>Servicing:</strong> Will lender service or sell your loan?</li>
    </ul>
    
    <h3>Use This Calculator to Compare</h3>
    <p>Enter details from each Loan Estimate to compare total costs over different time horizons and identify the best deal for your situation.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Loan Amount",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "lender1Rate",
        label: "Lender 1 Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "lender1Fees",
        label: "Lender 1 Total Closing Costs",
        type: "number",
        placeholder: "12000",
        defaultValue: "12000",
      },
      {
        name: "lender1APR",
        label: "Lender 1 APR (%)",
        type: "number",
        placeholder: "6.75",
        defaultValue: "6.75",
      },
      {
        name: "lender2Rate",
        label: "Lender 2 Interest Rate (%)",
        type: "number",
        placeholder: "6.25",
        defaultValue: "6.25",
      },
      {
        name: "lender2Fees",
        label: "Lender 2 Total Closing Costs",
        type: "number",
        placeholder: "16000",
        defaultValue: "16000",
      },
      {
        name: "lender2APR",
        label: "Lender 2 APR (%)",
        type: "number",
        placeholder: "6.60",
        defaultValue: "6.60",
      },
      {
        name: "yearsInHome",
        label: "Expected Years in Home",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
    ],
    results: [
      { label: "Lender 1 Monthly Payment", isCurrency: true },
      { label: "Lender 2 Monthly Payment", isCurrency: true },
      { label: "Monthly Payment Difference", isCurrency: true },
      { label: "Lender 1 Total Cost (Years in Home)", isCurrency: true },
      { label: "Lender 2 Total Cost (Years in Home)", isCurrency: true },
      { label: "Best Lender by APR", isCurrency: false },
      { label: "Best Lender by Total Cost", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanAmount = Number(data.loanAmount) || 0;
      const lender1Rate = Number(data.lender1Rate) / 100 || 0;
      const lender1Fees = Number(data.lender1Fees) || 0;
      const lender1APR = Number(data.lender1APR) / 100 || 0;
      const lender2Rate = Number(data.lender2Rate) / 100 || 0;
      const lender2Fees = Number(data.lender2Fees) || 0;
      const lender2APR = Number(data.lender2APR) / 100 || 0;
      const yearsInHome = Number(data.yearsInHome) || 7;
      
      const loanTermMonths = 30 * 12;
      
      // Lender 1 payment
      const lender1MonthlyRate = lender1Rate / 12;
      const lender1Payment = loanAmount * (lender1MonthlyRate * Math.pow(1 + lender1MonthlyRate, loanTermMonths)) / (Math.pow(1 + lender1MonthlyRate, loanTermMonths) - 1);
      
      // Lender 2 payment
      const lender2MonthlyRate = lender2Rate / 12;
      const lender2Payment = loanAmount * (lender2MonthlyRate * Math.pow(1 + lender2MonthlyRate, loanTermMonths)) / (Math.pow(1 + lender2MonthlyRate, loanTermMonths) - 1);
      
      const monthlyPaymentDifference = Math.abs(lender1Payment - lender2Payment);
      
      // Total cost over years in home
      const monthsInHome = yearsInHome * 12;
      const lender1TotalCost = lender1Fees + (lender1Payment * monthsInHome);
      const lender2TotalCost = lender2Fees + (lender2Payment * monthsInHome);
      
      const bestLenderByAPR = lender1APR < lender2APR ? "✅ Lender 1 (Lower APR)" : "✅ Lender 2 (Lower APR)";
      const bestLenderByTotalCost = lender1TotalCost < lender2TotalCost ? "✅ Lender 1 (Lower Total Cost)" : "✅ Lender 2 (Lower Total Cost)";
      
      let recommendation = "";
      const costDifference = Math.abs(lender1TotalCost - lender2TotalCost);
      if (lender1TotalCost < lender2TotalCost) {
        recommendation = `✅ Choose Lender 1 - Saves $${costDifference.toFixed(0)} over ${yearsInHome} years`;
      } else {
        recommendation = `✅ Choose Lender 2 - Saves $${costDifference.toFixed(0)} over ${yearsInHome} years`;
      }

      return [
        { label: "Lender 1 Monthly Payment", value: `${lender1Payment.toFixed(2)}`, isCurrency: true },
        { label: "Lender 2 Monthly Payment", value: `${lender2Payment.toFixed(2)}`, isCurrency: true },
        { label: "Monthly Payment Difference", value: `${monthlyPaymentDifference.toFixed(2)}`, isCurrency: true },
        { label: "Lender 1 Total Cost (Years in Home)", value: `${lender1TotalCost.toFixed(2)}`, isCurrency: true },
        { label: "Lender 2 Total Cost (Years in Home)", value: `${lender2TotalCost.toFixed(2)}`, isCurrency: true },
        { label: "Best Lender by APR", value: bestLenderByAPR, isCurrency: false },
        { label: "Best Lender by Total Cost", value: bestLenderByTotalCost, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
