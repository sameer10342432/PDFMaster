import { CalculatorContent } from "@/types";

export const BUY_VS_RENT_ADVANCED_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Buy vs. Rent Advanced Calculator (with Investment)",
  description: "Comprehensive analysis of buying vs. renting including investment opportunity costs and tax benefits.",
  icon: "Icon",
  category: "Real Estate",
  slug: "buy-vs-rent-advanced-calculator",
  article: {
    title: "About the Buy vs. Rent Advanced Calculator",
    content: `
    The Buy vs. Rent Advanced Calculator provides a comprehensive financial comparison between buying and renting, including investment opportunity costs, tax benefits, and long-term wealth building.

    ### How it Works

    This calculator compares the total cost of homeownership (mortgage, taxes, maintenance) versus renting and investing the difference in alternative investments.

    #### Key Inputs:

    - **Home Purchase Price:** Total cost to buy the home.
    - **Down Payment:** Upfront cash payment (typically 20%).
    - **Mortgage Terms:** Interest rate and loan duration.
    - **Monthly Rent:** Current rental payment.
    - **Home Appreciation:** Expected annual appreciation rate.
    - **Investment Return:** Expected return on invested savings.
    - **Tax Bracket:** For calculating mortgage interest and property tax deductions.
    - **Holding Period:** How long you plan to stay (5, 10, 30 years).

    ### Why Use This Calculator?

    - **True Cost Comparison:** Includes all hidden costs of ownership.
    - **Investment Opportunity:** Shows what happens if you invest the difference.
    - **Tax Benefits:** Accounts for mortgage interest and property tax deductions.
    - **Wealth Building:** Compare final net worth in both scenarios.

    ### Key Features:

    - Calculate total cost of ownership including maintenance and repairs
    - Account for mortgage interest tax deductions
    - Model investment returns on rent vs. buy savings difference
    - Project home equity growth over time
    - Compare final wealth position after holding period
    - Determine break-even point (when buying becomes better than renting)
  `,
  },
  calculator: {
    fields: [
      {
        name: "homePurchasePrice",
        label: "Home Purchase Price",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment (%)",
        type: "number",
        defaultValue: "20",
      },
      {
        name: "mortgageInterestRate",
        label: "Mortgage Interest Rate (%)",
        type: "number",
        defaultValue: "6.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
      {
        name: "monthlyRent",
        label: "Monthly Rent",
        type: "number",
        defaultValue: "2400",
      },
      {
        name: "annualRentIncrease",
        label: "Annual Rent Increase (%)",
        type: "number",
        defaultValue: "3",
      },
      {
        name: "homeAppreciation",
        label: "Home Appreciation Rate (%)",
        type: "number",
        defaultValue: "3.5",
      },
      {
        name: "propertyTaxRate",
        label: "Annual Property Tax Rate (%)",
        type: "number",
        defaultValue: "1.2",
      },
      {
        name: "homeInsurance",
        label: "Annual Home Insurance",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "maintenanceRate",
        label: "Annual Maintenance (% of Home Value)",
        type: "number",
        defaultValue: "1",
      },
      {
        name: "investmentReturn",
        label: "Investment Return Rate (%)",
        type: "number",
        defaultValue: "7",
      },
      {
        name: "taxBracket",
        label: "Tax Bracket (%)",
        type: "number",
        defaultValue: "24",
      },
      {
        name: "yearsToAnalyze",
        label: "Years to Analyze",
        type: "number",
        defaultValue: "10",
      },
    ],
    results: [
      { label: "Monthly Mortgage Payment (P&I)", isCurrency: true },
      { label: "Total Monthly Ownership Cost (Year 1)", isCurrency: true },
      { label: "Home Value After Period", isCurrency: true },
      { label: "Remaining Mortgage Balance", isCurrency: true },
      { label: "Home Equity Built", isCurrency: true },
      { label: "Total Rent Paid", isCurrency: true },
      { label: "Renter Investment Account Balance", isCurrency: true },
      { label: "Net Worth Advantage", isCurrency: false },
    ],
    calculate: (values) => {
      const { homePurchasePrice, downPaymentPercent, mortgageInterestRate, loanTerm, monthlyRent, annualRentIncrease, homeAppreciation, propertyTaxRate, homeInsurance, maintenanceRate, investmentReturn, taxBracket, yearsToAnalyze } = values;
      
      const downPayment = homePurchasePrice * (downPaymentPercent / 100);
      const loanAmount = homePurchasePrice - downPayment;
      const monthlyRate = (mortgageInterestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const monthlyPropertyTax = (homePurchasePrice * propertyTaxRate / 100) / 12;
      const monthlyInsurance = homeInsurance / 12;
      const monthlyMaintenance = (homePurchasePrice * maintenanceRate / 100) / 12;
      const totalMonthlyOwnership = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;
      
      const homeValueAfterPeriod = homePurchasePrice * Math.pow(1 + homeAppreciation / 100, yearsToAnalyze);
      
      let remainingBalance = loanAmount;
      for (let i = 0; i < yearsToAnalyze * 12; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPI - interestPayment;
        remainingBalance -= principalPayment;
      }
      
      const homeEquityBuilt = homeValueAfterPeriod - remainingBalance;
      
      let totalRentPaid = 0;
      let currentRent = monthlyRent;
      for (let year = 0; year < yearsToAnalyze; year++) {
        totalRentPaid += currentRent * 12;
        currentRent *= (1 + annualRentIncrease / 100);
      }
      
      const monthlySavings = totalMonthlyOwnership - monthlyRent;
      let investmentBalance = downPayment;
      const monthlyInvestmentReturn = (investmentReturn / 100) / 12;
      for (let i = 0; i < yearsToAnalyze * 12; i++) {
        investmentBalance = investmentBalance * (1 + monthlyInvestmentReturn) + Math.max(0, -monthlySavings);
      }
      
      const buyerNetWorth = homeEquityBuilt;
      const renterNetWorth = investmentBalance;
      const netWorthAdvantage = buyerNetWorth > renterNetWorth ? 
        `Buying Wins by $${(buyerNetWorth - renterNetWorth).toFixed(0)}` : 
        `Renting Wins by $${(renterNetWorth - buyerNetWorth).toFixed(0)}`;

      return [
        { label: "Monthly Mortgage Payment (P&I)", value: monthlyPI.toFixed(2), isCurrency: true },
        { label: "Total Monthly Ownership Cost (Year 1)", value: totalMonthlyOwnership.toFixed(2), isCurrency: true },
        { label: "Home Value After Period", value: homeValueAfterPeriod.toFixed(2), isCurrency: true },
        { label: "Remaining Mortgage Balance", value: remainingBalance.toFixed(2), isCurrency: true },
        { label: "Home Equity Built", value: homeEquityBuilt.toFixed(2), isCurrency: true },
        { label: "Total Rent Paid", value: totalRentPaid.toFixed(2), isCurrency: true },
        { label: "Renter Investment Account Balance", value: investmentBalance.toFixed(2), isCurrency: true },
        { label: "Net Worth Advantage", value: netWorthAdvantage, isCurrency: false },
      ];
    },
  },
};
