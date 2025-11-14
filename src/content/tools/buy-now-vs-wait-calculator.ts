import { CalculatorContent } from "@/types";

export const BUY_NOW_VS_WAIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Buy Now vs. Wait Calculator (Price & Rate Forecast)",
  description: "Analyze whether to buy real estate now or wait based on price and interest rate forecasts.",
  icon: "Icon",
  category: "Real Estate",
  slug: "buy-now-vs-wait-calculator",
  article: {
    title: "About the Buy Now vs. Wait Calculator",
    content: `
    The Buy Now vs. Wait Calculator helps homebuyers make timing decisions by analyzing the financial impact of current market conditions versus waiting for future changes in prices and interest rates.

    ### How it Works

    This calculator compares the total cost of buying now versus waiting, factoring in expected changes to home prices, interest rates, and rent costs during the waiting period.

    #### Key Inputs:

    - **Current Home Price:** Market price of the property today.
    - **Current Interest Rate:** Today's mortgage rate.
    - **Expected Future Price:** Projected home price after waiting period.
    - **Expected Future Rate:** Projected interest rate after waiting period.
    - **Months to Wait:** How long you're considering waiting.
    - **Current Monthly Rent:** What you'll pay in rent while waiting.
    - **Down Payment Savings:** Additional savings accumulated while waiting.

    ### Why Use This Calculator?

    - **Timing Decision:** Determine the optimal time to enter the market.
    - **Total Cost Analysis:** Compare all-in costs for both scenarios.
    - **Opportunity Cost:** Account for rent paid and equity missed.
    - **Break-Even Analysis:** See when waiting pays off (or doesn't).

    ### Key Features:

    - Calculate total payment comparison over loan life
    - Factor in rent costs during waiting period
    - Account for missed equity building
    - Include down payment growth from savings
    - Project home appreciation or depreciation
    - Determine financial advantage of each scenario
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentHomePrice",
        label: "Current Home Price",
        type: "number",
        defaultValue: "425000",
      },
      {
        name: "currentInterestRate",
        label: "Current Interest Rate (%)",
        type: "number",
        defaultValue: "7",
      },
      {
        name: "futureHomePriceChange",
        label: "Expected Price Change (%)",
        type: "number",
        defaultValue: "-5",
      },
      {
        name: "futureInterestRateChange",
        label: "Expected Rate Change (%)",
        type: "number",
        defaultValue: "-1",
      },
      {
        name: "monthsToWait",
        label: "Months to Wait",
        type: "number",
        defaultValue: "12",
      },
      {
        name: "currentMonthlyRent",
        label: "Current Monthly Rent",
        type: "number",
        defaultValue: "2600",
      },
      {
        name: "currentDownPayment",
        label: "Current Down Payment Available",
        type: "number",
        defaultValue: "85000",
      },
      {
        name: "monthlyDownPaymentSavings",
        label: "Additional Monthly Savings",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "savingsInterestRate",
        label: "Savings Account Interest Rate (%)",
        type: "number",
        defaultValue: "4.5",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
    ],
    results: [
      { label: "Buy Now - Loan Amount", isCurrency: true },
      { label: "Buy Now - Monthly Payment", isCurrency: true },
      { label: "Future Price", isCurrency: true },
      { label: "Future Interest Rate", isCurrency: false },
      { label: "Wait - Total Rent Paid", isCurrency: true },
      { label: "Wait - Future Down Payment", isCurrency: true },
      { label: "Wait - Future Loan Amount", isCurrency: true },
      { label: "Wait - Future Monthly Payment", isCurrency: true },
      { label: "Monthly Payment Difference", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (values) => {
      const { currentHomePrice, currentInterestRate, futureHomePriceChange, futureInterestRateChange, monthsToWait, currentMonthlyRent, currentDownPayment, monthlyDownPaymentSavings, savingsInterestRate, loanTerm } = values;
      
      const buyNowLoanAmount = currentHomePrice - currentDownPayment;
      const buyNowMonthlyRate = (currentInterestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;
      const buyNowMonthlyPayment = buyNowLoanAmount * (buyNowMonthlyRate * Math.pow(1 + buyNowMonthlyRate, numberOfPayments)) / (Math.pow(1 + buyNowMonthlyRate, numberOfPayments) - 1);
      
      const futureHomePrice = currentHomePrice * (1 + futureHomePriceChange / 100);
      const futureInterestRate = currentInterestRate + futureInterestRateChange;
      const totalRentPaid = currentMonthlyRent * monthsToWait;
      
      const monthlyRate = (savingsInterestRate / 100) / 12;
      let futureDownPayment = currentDownPayment;
      for (let i = 0; i < monthsToWait; i++) {
        futureDownPayment = futureDownPayment * (1 + monthlyRate) + monthlyDownPaymentSavings;
      }
      
      const waitLoanAmount = futureHomePrice - futureDownPayment;
      const waitMonthlyRate = (futureInterestRate / 100) / 12;
      const waitMonthlyPayment = waitLoanAmount * (waitMonthlyRate * Math.pow(1 + waitMonthlyRate, numberOfPayments)) / (Math.pow(1 + waitMonthlyRate, numberOfPayments) - 1);
      
      const monthlyPaymentDifference = buyNowMonthlyPayment - waitMonthlyPayment;
      const totalCostDifference = (monthlyPaymentDifference * numberOfPayments) - totalRentPaid;
      
      let recommendation = "";
      if (totalCostDifference > 50000) {
        recommendation = "Wait - Significant savings projected";
      } else if (totalCostDifference > 0) {
        recommendation = "Slight advantage to waiting";
      } else if (totalCostDifference > -50000) {
        recommendation = "Buy Now - Small cost difference";
      } else {
        recommendation = "Buy Now - Waiting will cost more";
      }

      return [
        { label: "Buy Now - Loan Amount", value: buyNowLoanAmount.toFixed(2), isCurrency: true },
        { label: "Buy Now - Monthly Payment", value: buyNowMonthlyPayment.toFixed(2), isCurrency: true },
        { label: "Future Price", value: futureHomePrice.toFixed(2), isCurrency: true },
        { label: "Future Interest Rate", value: futureInterestRate.toFixed(2) + '%', isCurrency: false },
        { label: "Wait - Total Rent Paid", value: totalRentPaid.toFixed(2), isCurrency: true },
        { label: "Wait - Future Down Payment", value: futureDownPayment.toFixed(2), isCurrency: true },
        { label: "Wait - Future Loan Amount", value: waitLoanAmount.toFixed(2), isCurrency: true },
        { label: "Wait - Future Monthly Payment", value: waitMonthlyPayment.toFixed(2), isCurrency: true },
        { label: "Monthly Payment Difference", value: Math.abs(monthlyPaymentDifference).toFixed(2), isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
