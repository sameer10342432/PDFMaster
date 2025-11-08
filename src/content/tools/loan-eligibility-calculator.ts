import { CalculatorContent } from '@/types';

export const LOAN_ELIGIBILITY_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Loan Eligibility Calculator',
  description: 'Determine if you qualify for a mortgage based on your income, debts, and credit profile',
  icon: 'Icon',
  category: 'Mortgage',
  slug: 'loan-eligibility-checker',
  article: {
    title: "Understanding Mortgage Loan Eligibility",
    content: `
    <p>Mortgage lenders use several factors to determine if you qualify for a home loan. Understanding these criteria can help you prepare before applying and improve your chances of approval.</p>
    
    <h2>Key Eligibility Factors</h2>
    <ul>
      <li><strong>Debt-to-Income Ratio (DTI):</strong> Most lenders prefer a DTI ratio below 43%, with many requiring 36% or less for conventional loans</li>
      <li><strong>Credit Score:</strong> Higher scores qualify for better rates; typically 620+ for conventional, 580+ for FHA</li>
      <li><strong>Employment History:</strong> Stable employment for at least 2 years is preferred</li>
      <li><strong>Down Payment:</strong> Minimum 3-20% depending on loan type</li>
      <li><strong>Loan-to-Value Ratio (LTV):</strong> Lower LTV ratios improve eligibility and rates</li>
    </ul>
    
    <h2>Types of Mortgage Loans</h2>
    <ul>
      <li><strong>Conventional:</strong> Requires good credit (620+) and typically 5-20% down</li>
      <li><strong>FHA:</strong> Lower credit requirements (580+), minimum 3.5% down</li>
      <li><strong>VA:</strong> No down payment for qualified veterans</li>
      <li><strong>USDA:</strong> No down payment for rural properties, income limits apply</li>
    </ul>
    
    <h2>Improving Your Eligibility</h2>
    <p>If you don't currently qualify, consider these steps:</p>
    <ul>
      <li>Pay down existing debts to lower your DTI ratio</li>
      <li>Improve your credit score by paying bills on time</li>
      <li>Save for a larger down payment</li>
      <li>Increase your income or add a co-borrower</li>
      <li>Reduce your target home price</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "annualIncome",
        label: "Annual Gross Income",
        type: "number",
        placeholder: "75000",
        defaultValue: "75000",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments",
        type: "number",
        placeholder: "800",
        defaultValue: "800",
      },
      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        placeholder: "720",
        defaultValue: "720",
      },
      {
        name: "downPayment",
        label: "Down Payment Amount",
        type: "number",
        placeholder: "60000",
        defaultValue: "60000",
      },
      {
        name: "homePrice",
        label: "Target Home Price",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "interestRate",
        label: "Expected Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "propertyTaxRate",
        label: "Property Tax Rate (% annually)",
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
    ],
    results: [
      { label: "Maximum Loan Amount You Qualify For", isCurrency: true },
      { label: "Maximum Home Price You Can Afford", isCurrency: true },
      { label: "Debt-to-Income Ratio", isCurrency: false },
      { label: "Loan-to-Value Ratio", isCurrency: false },
      { label: "Estimated Monthly Payment", isCurrency: true },
      { label: "Loan Eligibility Status", isCurrency: false },
    ],
    calculate: (data: any) => {
      const {
        annualIncome,
        monthlyDebts,
        creditScore,
        downPayment,
        homePrice,
        interestRate,
        loanTerm,
        propertyTaxRate,
        homeInsurance
      } = data;

      const monthlyIncome = (Number(annualIncome) || 0) / 12;
      const debts = Number(monthlyDebts) || 0;
      const credit = Number(creditScore) || 0;
      const down = Number(downPayment) || 0;
      const price = Number(homePrice) || 0;
      const rate = (Number(interestRate) || 0) / 100 / 12;
      const term = (Number(loanTerm) || 0) * 12;
      const taxRate = (Number(propertyTaxRate) || 0) / 100;
      const insurance = (Number(homeInsurance) || 0) / 12;

      // Calculate maximum DTI-based loan
      const maxHousingPayment = monthlyIncome * 0.28; // Front-end ratio
      const maxTotalDebt = monthlyIncome * 0.43; // Back-end ratio
      const maxHousingAfterDebts = maxTotalDebt - debts;
      const maxAllowedHousing = Math.min(maxHousingPayment, maxHousingAfterDebts);

      // Calculate how much principal & interest this allows
      const estimatedTaxAndInsurance = insurance + (price * taxRate / 12);
      const maxPIPayment = maxAllowedHousing - estimatedTaxAndInsurance;

      // Calculate maximum loan from P&I payment
      let maxLoanAmount = 0;
      if (rate > 0 && term > 0 && maxPIPayment > 0) {
        maxLoanAmount = maxPIPayment * ((Math.pow(1 + rate, term) - 1) / (rate * Math.pow(1 + rate, term)));
      }

      const maxHomePrice = maxLoanAmount + down;

      // Calculate actual loan details
      const loanAmount = price - down;
      const loanToValue = (loanAmount / price) * 100;

      // Calculate monthly payment for requested home
      let monthlyPI = 0;
      if (rate > 0 && term > 0) {
        monthlyPI = loanAmount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      }

      const monthlyTax = price * taxRate / 12;
      const totalMonthlyPayment = monthlyPI + monthlyTax + insurance;
      const totalDebtPayment = totalMonthlyPayment + debts;
      const dtiRatio = (totalDebtPayment / monthlyIncome) * 100;

      // Determine eligibility
      let eligibilityStatus = "";
      if (credit < 580) {
        eligibilityStatus = "Not Eligible - Credit score too low (minimum 580 required)";
      } else if (dtiRatio > 43) {
        eligibilityStatus = "Not Eligible - Debt-to-Income ratio too high (maximum 43%)";
      } else if (loanToValue > 97) {
        eligibilityStatus = "Not Eligible - Insufficient down payment";
      } else if (dtiRatio <= 28 && credit >= 740) {
        eligibilityStatus = "Excellent - Highly likely to qualify for best rates";
      } else if (dtiRatio <= 36 && credit >= 680) {
        eligibilityStatus = "Good - Likely to qualify with competitive rates";
      } else {
        eligibilityStatus = "Fair - May qualify but with higher rates";
      }

      return [
        { label: "Maximum Loan Amount You Qualify For", value: `${maxLoanAmount.toFixed(2)}`, isCurrency: true },
        { label: "Maximum Home Price You Can Afford", value: `${maxHomePrice.toFixed(2)}`, isCurrency: true },
        { label: "Debt-to-Income Ratio", value: `${dtiRatio.toFixed(2)}%`, isCurrency: false },
        { label: "Loan-to-Value Ratio", value: `${loanToValue.toFixed(2)}%`, isCurrency: false },
        { label: "Estimated Monthly Payment", value: `${totalMonthlyPayment.toFixed(2)}`, isCurrency: true },
        { label: "Loan Eligibility Status", value: eligibilityStatus, isCurrency: false },
      ];
    },
  },
};