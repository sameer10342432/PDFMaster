import { CalculatorContent } from "@/types";

export const REAL_ESTATE_NET_WORTH_PERCENTAGE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Real Estate as % of Net Worth Calculator",
  description: "Analyze your real estate holdings as a percentage of total net worth and portfolio diversification.",
  icon: "Icon",
  category: "Real Estate",
  slug: "real-estate-net-worth-percentage-calculator",
  article: {
    title: "About the Real Estate as % of Net Worth Calculator",
    content: `
    The Real Estate as % of Net Worth Calculator helps you understand how much of your wealth is tied up in real estate and whether your portfolio is properly diversified.

    ### How it Works

    This calculator analyzes your real estate equity, other assets, and liabilities to determine your net worth composition and diversification level.

    #### Key Inputs:

    - **Primary Residence Value:** Current market value of your home.
    - **Primary Residence Mortgage:** Outstanding mortgage balance.
    - **Investment Properties:** Total value and debt for rental/investment properties.
    - **Liquid Assets:** Cash, savings, stocks, bonds, retirement accounts.
    - **Other Assets:** Vehicles, business equity, collectibles.
    - **Other Liabilities:** Credit cards, student loans, car loans, other debt.

    ### Why Use This Calculator?

    - **Diversification Analysis:** Determine if you're over-concentrated in real estate.
    - **Risk Assessment:** Understand your exposure to real estate market fluctuations.
    - **Financial Planning:** Make informed decisions about future investments.
    - **Wealth Composition:** See the breakdown of your total net worth.

    ### Key Features:

    - Calculate total real estate equity
    - Determine net worth and composition
    - Analyze real estate concentration (recommended: 25-40%)
    - Compare liquid vs. illiquid assets
    - Assess portfolio diversification
    - Provide recommendations for rebalancing
  `,
  },
  calculator: {
    fields: [
      {
        name: "primaryResidenceValue",
        label: "Primary Residence Market Value",
        type: "number",
        defaultValue: "450000",
      },
      {
        name: "primaryResidenceMortgage",
        label: "Primary Residence Mortgage Balance",
        type: "number",
        defaultValue: "300000",
      },
      {
        name: "investmentPropertyValue",
        label: "Investment Property Total Value",
        type: "number",
        defaultValue: "600000",
      },
      {
        name: "investmentPropertyDebt",
        label: "Investment Property Total Debt",
        type: "number",
        defaultValue: "420000",
      },
      {
        name: "cashAndSavings",
        label: "Cash & Savings Accounts",
        type: "number",
        defaultValue: "50000",
      },
      {
        name: "stocksAndBonds",
        label: "Stocks, Bonds, Mutual Funds",
        type: "number",
        defaultValue: "150000",
      },
      {
        name: "retirementAccounts",
        label: "Retirement Accounts (401k, IRA)",
        type: "number",
        defaultValue: "200000",
      },
      {
        name: "otherAssets",
        label: "Other Assets (Vehicles, Business, etc.)",
        type: "number",
        defaultValue: "50000",
      },
      {
        name: "otherLiabilities",
        label: "Other Liabilities (Credit Cards, Loans)",
        type: "number",
        defaultValue: "25000",
      },
    ],
    results: [
      { label: "Total Real Estate Value", isCurrency: true },
      { label: "Total Real Estate Equity", isCurrency: true },
      { label: "Total Liquid Assets", isCurrency: true },
      { label: "Total Assets", isCurrency: true },
      { label: "Total Liabilities", isCurrency: true },
      { label: "Net Worth", isCurrency: true },
      { label: "Real Estate as % of Net Worth", isCurrency: false },
      { label: "Diversification Assessment", isCurrency: false },
    ],
    calculate: (values) => {
      const { primaryResidenceValue, primaryResidenceMortgage, investmentPropertyValue, investmentPropertyDebt, cashAndSavings, stocksAndBonds, retirementAccounts, otherAssets, otherLiabilities } = values;
      
      const totalRealEstateValue = primaryResidenceValue + investmentPropertyValue;
      const totalRealEstateDebt = primaryResidenceMortgage + investmentPropertyDebt;
      const totalRealEstateEquity = totalRealEstateValue - totalRealEstateDebt;
      const totalLiquidAssets = cashAndSavings + stocksAndBonds + retirementAccounts;
      const totalAssets = totalRealEstateValue + totalLiquidAssets + otherAssets;
      const totalLiabilities = totalRealEstateDebt + otherLiabilities;
      const netWorth = totalAssets - totalLiabilities;
      const realEstatePercentage = (totalRealEstateEquity / netWorth) * 100;
      
      let assessment = "";
      if (realEstatePercentage > 60) {
        assessment = "Over-concentrated in Real Estate - Consider diversifying";
      } else if (realEstatePercentage > 40) {
        assessment = "Above Average Real Estate Allocation - Monitor diversification";
      } else if (realEstatePercentage >= 25) {
        assessment = "Healthy Real Estate Allocation - Well diversified";
      } else {
        assessment = "Under-allocated to Real Estate - Opportunity to add exposure";
      }

      return [
        { label: "Total Real Estate Value", value: totalRealEstateValue.toFixed(2), isCurrency: true },
        { label: "Total Real Estate Equity", value: totalRealEstateEquity.toFixed(2), isCurrency: true },
        { label: "Total Liquid Assets", value: totalLiquidAssets.toFixed(2), isCurrency: true },
        { label: "Total Assets", value: totalAssets.toFixed(2), isCurrency: true },
        { label: "Total Liabilities", value: totalLiabilities.toFixed(2), isCurrency: true },
        { label: "Net Worth", value: netWorth.toFixed(2), isCurrency: true },
        { label: "Real Estate as % of Net Worth", value: realEstatePercentage.toFixed(1) + '% (Recommended: 25-40%)', isCurrency: false },
        { label: "Diversification Assessment", value: assessment, isCurrency: false },
      ];
    },
  },
};
