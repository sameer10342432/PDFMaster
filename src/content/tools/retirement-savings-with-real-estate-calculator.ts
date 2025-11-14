import { CalculatorContent } from "@/types";

export const RETIREMENT_SAVINGS_WITH_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Retirement Savings with Real Estate Calculator",
  description: "Plan retirement savings strategy incorporating real estate equity and rental income.",
  icon: "Icon",
  category: "Real Estate",
  slug: "retirement-savings-with-real-estate-calculator",
  article: {
    title: "About the Retirement Savings with Real Estate Calculator",
    content: `
    The Retirement Savings with Real Estate Calculator helps you plan for retirement by integrating real estate holdings, equity, and rental income into your overall retirement strategy.

    ### How it Works

    This calculator projects your retirement readiness by combining traditional retirement savings (401k, IRA) with real estate assets, equity growth, and passive rental income.

    #### Key Inputs:

    - **Current Age & Retirement Age:** Timeline for retirement planning.
    - **Current Retirement Savings:** Existing 401k, IRA, and investment accounts.
    - **Monthly Contributions:** Regular additions to retirement accounts.
    - **Real Estate Holdings:** Primary residence and investment property values.
    - **Mortgage Balances:** Current debt on properties.
    - **Rental Income:** Monthly cash flow from investment properties.
    - **Expected Returns:** Growth rates for investments and real estate appreciation.
    - **Retirement Income Needs:** Desired annual income in retirement.

    ### Why Use This Calculator?

    - **Holistic Planning:** See complete retirement picture including real estate.
    - **Equity Growth:** Project home equity accumulation by retirement age.
    - **Passive Income:** Factor in rental income for retirement cash flow.
    - **Diversification:** Balance traditional savings with real estate holdings.

    ### Key Features:

    - Calculate projected retirement account balance
    - Project real estate equity at retirement age
    - Estimate annual rental income in retirement
    - Determine total retirement assets (liquid + real estate)
    - Compare against retirement income goals
    - Calculate retirement readiness percentage
    - Provide recommendations for retirement planning
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentAge",
        label: "Current Age",
        type: "number",
        defaultValue: "40",
      },
      {
        name: "retirementAge",
        label: "Planned Retirement Age",
        type: "number",
        defaultValue: "65",
      },
      {
        name: "currentRetirementSavings",
        label: "Current Retirement Savings (401k, IRA)",
        type: "number",
        defaultValue: "200000",
      },
      {
        name: "monthlyContribution",
        label: "Monthly Retirement Contribution",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "expectedReturnRate",
        label: "Expected Return Rate on Savings (%)",
        type: "number",
        defaultValue: "7",
      },
      {
        name: "primaryResidenceValue",
        label: "Primary Residence Current Value",
        type: "number",
        defaultValue: "500000",
      },
      {
        name: "primaryResidenceMortgage",
        label: "Primary Residence Mortgage Balance",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "investmentPropertyValue",
        label: "Investment Property Total Value",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "investmentPropertyMortgage",
        label: "Investment Property Mortgage Balance",
        type: "number",
        defaultValue: "280000",
      },
      {
        name: "monthlyRentalIncome",
        label: "Current Monthly Rental Income (Net)",
        type: "number",
        defaultValue: "1800",
      },
      {
        name: "realEstateAppreciation",
        label: "Real Estate Appreciation Rate (%)",
        type: "number",
        defaultValue: "3.5",
      },
      {
        name: "desiredAnnualRetirementIncome",
        label: "Desired Annual Retirement Income",
        type: "number",
        defaultValue: "80000",
      },
    ],
    results: [
      { label: "Years Until Retirement", isCurrency: false },
      { label: "Projected Retirement Account Balance", isCurrency: true },
      { label: "Primary Residence Equity at Retirement", isCurrency: true },
      { label: "Investment Property Equity at Retirement", isCurrency: true },
      { label: "Total Real Estate Equity at Retirement", isCurrency: true },
      { label: "Annual Rental Income at Retirement", isCurrency: true },
      { label: "Total Retirement Assets", isCurrency: true },
      { label: "Retirement Income from Assets (4% Rule)", isCurrency: true },
      { label: "Total Annual Retirement Income", isCurrency: true },
      { label: "Retirement Readiness", isCurrency: false },
    ],
    calculate: (values) => {
      const { currentAge, retirementAge, currentRetirementSavings, monthlyContribution, expectedReturnRate, primaryResidenceValue, primaryResidenceMortgage, investmentPropertyValue, investmentPropertyMortgage, monthlyRentalIncome, realEstateAppreciation, desiredAnnualRetirementIncome } = values;
      
      const yearsUntilRetirement = retirementAge - currentAge;
      
      const monthlyRate = (expectedReturnRate / 100) / 12;
      const months = yearsUntilRetirement * 12;
      let retirementAccountBalance = currentRetirementSavings;
      for (let i = 0; i < months; i++) {
        retirementAccountBalance = retirementAccountBalance * (1 + monthlyRate) + monthlyContribution;
      }
      
      const primaryResidenceFutureValue = primaryResidenceValue * Math.pow(1 + realEstateAppreciation / 100, yearsUntilRetirement);
      const primaryResidenceEquity = primaryResidenceFutureValue;
      
      const investmentPropertyFutureValue = investmentPropertyValue * Math.pow(1 + realEstateAppreciation / 100, yearsUntilRetirement);
      const investmentPropertyEquity = investmentPropertyFutureValue;
      
      const totalRealEstateEquity = primaryResidenceEquity + investmentPropertyEquity - primaryResidenceMortgage - investmentPropertyMortgage;
      
      const annualRentalIncome = monthlyRentalIncome * 12;
      
      const totalRetirementAssets = retirementAccountBalance + totalRealEstateEquity;
      
      const incomeFrom4PercentRule = totalRetirementAssets * 0.04;
      const totalAnnualRetirementIncome = incomeFrom4PercentRule + annualRentalIncome;
      
      const retirementReadinessPercent = (totalAnnualRetirementIncome / desiredAnnualRetirementIncome) * 100;
      let readinessAssessment = "";
      if (retirementReadinessPercent >= 100) {
        readinessAssessment = `${retirementReadinessPercent.toFixed(0)}% - On Track for Retirement`;
      } else if (retirementReadinessPercent >= 75) {
        readinessAssessment = `${retirementReadinessPercent.toFixed(0)}% - Nearly On Track`;
      } else if (retirementReadinessPercent >= 50) {
        readinessAssessment = `${retirementReadinessPercent.toFixed(0)}% - Needs Improvement`;
      } else {
        readinessAssessment = `${retirementReadinessPercent.toFixed(0)}% - Significantly Underfunded`;
      }

      return [
        { label: "Years Until Retirement", value: yearsUntilRetirement.toFixed(0) + ' years', isCurrency: false },
        { label: "Projected Retirement Account Balance", value: retirementAccountBalance.toFixed(2), isCurrency: true },
        { label: "Primary Residence Equity at Retirement", value: primaryResidenceEquity.toFixed(2), isCurrency: true },
        { label: "Investment Property Equity at Retirement", value: investmentPropertyEquity.toFixed(2), isCurrency: true },
        { label: "Total Real Estate Equity at Retirement", value: totalRealEstateEquity.toFixed(2), isCurrency: true },
        { label: "Annual Rental Income at Retirement", value: annualRentalIncome.toFixed(2), isCurrency: true },
        { label: "Total Retirement Assets", value: totalRetirementAssets.toFixed(2), isCurrency: true },
        { label: "Retirement Income from Assets (4% Rule)", value: incomeFrom4PercentRule.toFixed(2), isCurrency: true },
        { label: "Total Annual Retirement Income", value: totalAnnualRetirementIncome.toFixed(2), isCurrency: true },
        { label: "Retirement Readiness", value: readinessAssessment, isCurrency: false },
      ];
    },
  },
};
