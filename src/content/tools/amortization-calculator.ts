import { CalculatorContent } from "@/types";

export const amortizationCalculator: CalculatorContent = {
  title: "Amortization Calculator",
  description:
    "Calculate your amortization schedule to see how your loan is paid off over time.",
  category: "Calculators",
  slug: "amortization-calculator",
  article: {
    title: "Understanding Your Amortization Schedule",
    content:
      "An amortization schedule is a table detailing each periodic payment on a loan. It shows how much of each payment goes towards interest and how much goes towards paying off the principal. Use this calculator to see how your loan is paid off over time.",
  },
  calculator: {
    fields: [
        {
            name: "loanAmount",
            label: "Loan Amount",
            type: "number",
            defaultValue: "100000",
        },
        {
            name: "interestRate",
            label: "Interest Rate (%)",
            type: "number",
            defaultValue: "5",
        },
        {
            name: "loanTerm",
            label: "Loan Term (Years)",
            type: "number",
            defaultValue: "30",
        },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, loanTerm } = values;
      const principal = parseFloat(loanAmount);
      const interestRatePercent = parseFloat(interestRate);
      const loanTermYears = parseInt(loanTerm);

      const monthlyInterestRate = interestRatePercent / 100 / 12;
      const numberOfPayments = loanTermYears * 12;
      const monthlyPayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      let remainingBalance = principal;
      const amortizationSchedule = [];

      for (let i = 1; i <= numberOfPayments; i++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
        amortizationSchedule.push({
          month: i,
          principal: principalPayment.toFixed(2),
          interest: interestPayment.toFixed(2),
          balance: remainingBalance.toFixed(2),
        });
      }

      return [
        {
          label: "Monthly Payment",
          value: monthlyPayment.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Interest Paid",
          value: (monthlyPayment * numberOfPayments - principal).toFixed(2),
          isCurrency: true,
        },
        {
          label: "Amortization Schedule",
          value: amortizationSchedule,
          isTable: true,
        },
      ];
    },
  },
};