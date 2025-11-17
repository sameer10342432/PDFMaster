import { CalculatorContent } from '@/types';

export const WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'What Can I Afford Calculator (Buyer)',
  description: 'Calculate the maximum home price you can afford based on your income, debt, down payment, and credit score with detailed affordability analysis',
  icon: 'Icon',
  category: 'Buyer Tools',
  slug: 'what-can-i-afford-buyer-calculator',
  article: {
    title: "Home Affordability Calculator - How Much House Can You Afford?",
    content: `
    <h2>Understanding Home Affordability</h2>
    <p>Determining how much house you can afford is one of the most important steps in the home buying process. This calculator helps you understand your true buying power based on your financial situation, income, debts, and down payment capabilities.</p>
    
    <h3>Key Factors in Home Affordability</h3>
    <ul>
      <li><strong>Gross Monthly Income:</strong> Your total income before taxes and deductions</li>
      <li><strong>Monthly Debt Payments:</strong> Car loans, student loans, credit cards, and other recurring debts</li>
      <li><strong>Down Payment:</strong> The amount you can put down upfront (typically 3-20%)</li>
      <li><strong>Credit Score:</strong> Affects your interest rate and loan approval</li>
      <li><strong>Debt-to-Income Ratio:</strong> Lenders typically require DTI below 43%</li>
    </ul>
    
    <h3>The 28/36 Rule</h3>
    <p>Most lenders follow the 28/36 rule:</p>
    <ul>
      <li><strong>28% Rule:</strong> Housing costs shouldn't exceed 28% of gross monthly income</li>
      <li><strong>36% Rule:</strong> Total debt payments shouldn't exceed 36% of gross monthly income</li>
    </ul>
    
    <h3>What's Included in Housing Costs?</h3>
    <p>Your monthly housing payment includes:</p>
    <ul>
      <li>Principal and interest on the mortgage</li>
      <li>Property taxes</li>
      <li>Homeowners insurance</li>
      <li>HOA fees (if applicable)</li>
      <li>PMI (if down payment is less than 20%)</li>
    </ul>
    
    <h3>How Credit Score Affects Affordability</h3>
    <p>Your credit score significantly impacts the interest rate you'll receive:</p>
    <ul>
      <li><strong>760+:</strong> Best rates (typically 0.5-1% lower)</li>
      <li><strong>700-759:</strong> Good rates</li>
      <li><strong>660-699:</strong> Average rates</li>
      <li><strong>620-659:</strong> Higher rates</li>
      <li><strong>Below 620:</strong> May require FHA or special programs</li>
    </ul>
    
    <h3>Tips to Increase Affordability</h3>
    <ul>
      <li>Pay down existing debts to lower your DTI ratio</li>
      <li>Improve your credit score for better interest rates</li>
      <li>Save for a larger down payment (reduces PMI and monthly payment)</li>
      <li>Consider FHA loans (3.5% down) or VA loans (0% down for eligible veterans)</li>
      <li>Shop around for the best mortgage rates</li>
      <li>Look in areas with lower property taxes</li>
    </ul>
    
    <h3>Don't Forget Additional Costs</h3>
    <p>Beyond the mortgage, budget for:</p>
    <ul>
      <li>Closing costs (2-5% of purchase price)</li>
      <li>Moving expenses</li>
      <li>Home maintenance (1-2% of home value annually)</li>
      <li>Utilities and services</li>
      <li>Furniture and appliances</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyIncome",
        label: "Gross Monthly Income",
        type: "number",
        placeholder: "6000",
        defaultValue: "6000",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "downPayment",
        label: "Down Payment Amount",
        type: "number",
        placeholder: "40000",
        defaultValue: "40000",
      },
      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        placeholder: "720",
        defaultValue: "720",
      },
      {
        name: "propertyTaxRate",
        label: "Annual Property Tax Rate (%)",
        type: "number",
        placeholder: "1.2",
        defaultValue: "1.2",
      },
      {
        name: "homeInsurance",
        label: "Annual Home Insurance",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "hoaFees",
        label: "Monthly HOA Fees",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Maximum Home Price", isCurrency: true },
      { label: "Estimated Interest Rate", isCurrency: false },
      { label: "Maximum Monthly Payment", isCurrency: true },
      { label: "Front-End DTI Ratio", isCurrency: false },
      { label: "Back-End DTI Ratio", isCurrency: false },
      { label: "PMI Required?", isCurrency: false },
      { label: "Loan Amount", isCurrency: true },
      { label: "Recommended Home Price Range", isCurrency: false },
    ],
    calculate: (data: any) => {
      const monthlyIncome = Number(data.monthlyIncome) || 0;
      const monthlyDebts = Number(data.monthlyDebts) || 0;
      const downPayment = Number(data.downPayment) || 0;
      const creditScore = Number(data.creditScore) || 720;
      const propertyTaxRate = Number(data.propertyTaxRate) || 1.2;
      const homeInsurance = Number(data.homeInsurance) || 1200;
      const hoaFees = Number(data.hoaFees) || 0;
      
      // Determine interest rate based on credit score
      let interestRate = 7.0;
      if (creditScore >= 760) interestRate = 6.5;
      else if (creditScore >= 700) interestRate = 6.75;
      else if (creditScore >= 660) interestRate = 7.0;
      else if (creditScore >= 620) interestRate = 7.5;
      else interestRate = 8.0;
      
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = 30 * 12;
      
      // Maximum housing payment (28% rule)
      const maxHousingPayment = monthlyIncome * 0.28;
      
      // Maximum total debt payment (36% rule)
      const maxTotalDebt = monthlyIncome * 0.36;
      const maxHousingFromDebt = maxTotalDebt - monthlyDebts;
      
      // Use the more conservative limit
      const maxMonthlyPayment = Math.min(maxHousingPayment, maxHousingFromDebt);
      
      // Account for property tax, insurance, and HOA
      const monthlyInsurance = homeInsurance / 12;
      
      // Estimate home price (iterative approach)
      let estimatedPrice = 200000;
      let iterations = 0;
      let converged = false;
      
      while (!converged && iterations < 50) {
        const monthlyTax = (estimatedPrice * (propertyTaxRate / 100)) / 12;
        const downPaymentPercent = downPayment / estimatedPrice;
        const pmiRequired = downPaymentPercent < 0.20;
        const monthlyPMI = pmiRequired ? (estimatedPrice - downPayment) * 0.005 / 12 : 0;
        
        const loanAmount = estimatedPrice - downPayment;
        const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
        
        const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + hoaFees + monthlyPMI;
        
        const difference = maxMonthlyPayment - totalMonthly;
        
        if (Math.abs(difference) < 10) {
          converged = true;
        } else {
          estimatedPrice += difference * 100;
        }
        
        iterations++;
      }
      
      // Calculate final values
      const loanAmount = estimatedPrice - downPayment;
      const downPaymentPercent = (downPayment / estimatedPrice) * 100;
      const pmiRequired = downPaymentPercent < 20;
      
      // Calculate DTI ratios
      const monthlyTax = (estimatedPrice * (propertyTaxRate / 100)) / 12;
      const monthlyPMI = pmiRequired ? loanAmount * 0.005 / 12 : 0;
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      const totalHousingPayment = monthlyPI + monthlyTax + (homeInsurance / 12) + hoaFees + monthlyPMI;
      
      const frontEndDTI = (totalHousingPayment / monthlyIncome) * 100;
      const backEndDTI = ((totalHousingPayment + monthlyDebts) / monthlyIncome) * 100;
      
      // Recommended range (80-95% of max)
      const recommendedMin = estimatedPrice * 0.80;
      const recommendedMax = estimatedPrice * 0.95;

      return [
        { label: "Maximum Home Price", value: `${estimatedPrice.toFixed(0)}`, isCurrency: true },
        { label: "Estimated Interest Rate", value: `${interestRate.toFixed(2)}%`, isCurrency: false },
        { label: "Maximum Monthly Payment", value: `${totalHousingPayment.toFixed(2)}`, isCurrency: true },
        { label: "Front-End DTI Ratio", value: `${frontEndDTI.toFixed(1)}%`, isCurrency: false },
        { label: "Back-End DTI Ratio", value: `${backEndDTI.toFixed(1)}%`, isCurrency: false },
        { label: "PMI Required?", value: pmiRequired ? "✅ Yes" : "❌ No", isCurrency: false },
        { label: "Loan Amount", value: `${loanAmount.toFixed(0)}`, isCurrency: true },
        { label: "Recommended Home Price Range", value: `$${recommendedMin.toFixed(0)} - $${recommendedMax.toFixed(0)}`, isCurrency: false },
      ];
    },
  },
};
