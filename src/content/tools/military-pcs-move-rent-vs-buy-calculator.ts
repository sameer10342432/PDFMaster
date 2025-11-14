import { CalculatorContent } from "@/types";

export const MILITARY_PCS_MOVE_RENT_VS_BUY_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Military (PCS) Move Rent vs. Buy Calculator",
  description: "Help military families decide whether to rent or buy during a PCS (Permanent Change of Station) move.",
  icon: "Icon",
  category: "Real Estate",
  slug: "military-pcs-move-rent-vs-buy-calculator",
  article: {
    title: "About the Military (PCS) Move Rent vs. Buy Calculator",
    content: `
    Military families face unique housing decisions during PCS (Permanent Change of Station) moves. This calculator helps service members compare the financial impact of renting versus buying at their new duty station, considering BAH (Basic Allowance for Housing), expected tour length, and potential rental income after reassignment.

    ### How it Works

    This calculator compares renting vs. buying by analyzing BAH coverage, mortgage costs, equity building, and the option to convert the property to a rental when you PCS again.

    ### Why Use This Calculator?

    Military families need to make housing decisions quickly during PCS moves. This calculator helps you maximize BAH benefits, plan for future PCS moves, and decide whether to build equity or maintain flexibility.

    ### Best Practices

    1. **Consider Tour Length:** Buying makes more sense for 3+ year tours
    2. **Rental Potential:** Choose properties that will rent well after you PCS
    3. **BAH Coverage:** Ensure your mortgage + expenses don't exceed BAH significantly
    4. **Resale Value:** Near military bases with stable housing demand
  `,
  },
  calculator: {
    fields: [
      { name: "homePrice", label: "Home Purchase Price ($)", type: "number", defaultValue: "300000" },
      { name: "downPayment", label: "Down Payment (%)", type: "number", defaultValue: "5" },
      { name: "interestRate", label: "Interest Rate (%)", type: "number", defaultValue: "6.5" },
      { name: "loanTerm", label: "Loan Term (Years)", type: "number", defaultValue: "30" },
      { name: "monthlyBAH", label: "Monthly BAH ($)", type: "number", defaultValue: "2400" },
      { name: "monthlyRent", label: "Monthly Rent ($)", type: "number", defaultValue: "2200" },
      { name: "tourLengthYears", label: "Expected Tour Length (Years)", type: "number", defaultValue: "3" },
      { name: "annualPropertyTax", label: "Annual Property Tax ($)", type: "number", defaultValue: "3600" },
      { name: "annualInsurance", label: "Annual Home Insurance ($)", type: "number", defaultValue: "1800" },
      { name: "monthlyHOA", label: "Monthly HOA Fees ($)", type: "number", defaultValue: "150" },
      { name: "monthlyMaintenance", label: "Monthly Maintenance ($)", type: "number", defaultValue: "250" },
      { name: "homeAppreciation", label: "Annual Home Appreciation (%)", type: "number", defaultValue: "3" },
      { name: "closingCosts", label: "Closing Costs ($)", type: "number", defaultValue: "9000" },
    ],
    results: [
      { label: "Buy: Monthly Housing Cost", isCurrency: true },
      { label: "Rent: Monthly Housing Cost", isCurrency: true },
      { label: "Buy: Total Cost Over Tour", isCurrency: true },
      { label: "Rent: Total Cost Over Tour", isCurrency: true },
      { label: "Equity Built During Tour", isCurrency: true },
      { label: "Home Value After Tour", isCurrency: true },
      { label: "Net Benefit of Buying", isCurrency: true },
      { label: "Breakeven Period (Months)", isCurrency: false },
    ],
    calculate: (values) => {
      const loanAmount = values.homePrice * (1 - values.downPayment / 100);
      const monthlyRate = values.interestRate / 100 / 12;
      const numPayments = values.loanTerm * 12;
      const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

      const monthlyPropertyTax = values.annualPropertyTax / 12;
      const monthlyInsurance = values.annualInsurance / 12;
      const buyMonthlyCost = monthlyMortgage + monthlyPropertyTax + monthlyInsurance + values.monthlyHOA + values.monthlyMaintenance;
      const rentMonthlyCost = values.monthlyRent;

      const tourMonths = values.tourLengthYears * 12;
      const downPaymentAmount = values.homePrice * (values.downPayment / 100);
      const buyTotalCost = downPaymentAmount + values.closingCosts + (buyMonthlyCost * tourMonths);
      const rentTotalCost = rentMonthlyCost * tourMonths;

      let equityBuilt = 0;
      let balance = loanAmount;
      for (let i = 0; i < tourMonths; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyMortgage - interestPayment;
        equityBuilt += principalPayment;
        balance -= principalPayment;
      }

      const homeValueAfterTour = values.homePrice * Math.pow(1 + values.homeAppreciation / 100, values.tourLengthYears);
      const totalEquity = equityBuilt + downPaymentAmount + (homeValueAfterTour - values.homePrice);
      const netBenefitOfBuying = totalEquity - (buyTotalCost - rentTotalCost);

      const monthlyDifference = buyMonthlyCost - rentMonthlyCost;
      const breakEvenMonths = monthlyDifference > 0 ? (downPaymentAmount + values.closingCosts) / (equityBuilt / tourMonths) : 0;

      return [
        { label: "Buy: Monthly Housing Cost", value: buyMonthlyCost.toFixed(2), isCurrency: true },
        { label: "Rent: Monthly Housing Cost", value: rentMonthlyCost.toFixed(2), isCurrency: true },
        { label: "Buy: Total Cost Over Tour", value: buyTotalCost.toFixed(2), isCurrency: true },
        { label: "Rent: Total Cost Over Tour", value: rentTotalCost.toFixed(2), isCurrency: true },
        { label: "Equity Built During Tour", value: equityBuilt.toFixed(2), isCurrency: true },
        { label: "Home Value After Tour", value: homeValueAfterTour.toFixed(2), isCurrency: true },
        { label: "Net Benefit of Buying", value: netBenefitOfBuying.toFixed(2), isCurrency: true },
        { label: "Breakeven Period (Months)", value: breakEvenMonths.toFixed(1), isCurrency: false },
      ];
    },
  },
};
