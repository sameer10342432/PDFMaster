import { CalculatorContent } from "@/types";

export const mortgageCreditCertificateCalculator: CalculatorContent = {
  title: "Mortgage Credit Certificate (MCC) Calculator",
  description:
    "Calculate annual federal tax savings from a Mortgage Credit Certificate, which converts part of your mortgage interest into a dollar-for-dollar tax credit.",
  icon: "Icon",
  category: "First-Time Homebuyer Tools",
  slug: "mortgage-credit-certificate-calculator",
  article: {
    title: "Understanding Mortgage Credit Certificates (MCCs)",
    content:
      "A Mortgage Credit Certificate (MCC) is one of the most powerful yet underutilized tools for first-time homebuyers. Unlike a tax deduction which reduces your taxable income, an MCC provides a dollar-for-dollar tax credit equal to a percentage of your annual mortgage interest. Most MCC programs provide a 20-50% credit rate (typically 20-25%), with a maximum annual credit of $2,000. Here's how it works: If you pay $10,000 in mortgage interest annually and have a 20% MCC, you receive a $2,000 federal tax credit, reducing your tax bill by $2,000. You can still deduct the remaining $8,000 of interest as an itemized deduction. This dual benefit makes MCCs extremely valuable. The MCC lasts for the life of the loan, as long as you live in the home as your primary residence. If you refinance, you may be able to reissue the MCC. If you have leftover credit exceeding your tax liability, you can carry it forward for up to 3 years. MCCs are administered by state and local housing finance agencies, with varying income and purchase price limits (typically 80-120% of area median income). One-time fees of 0.5-2% of the loan amount apply. The increased cash flow from reduced tax withholding can help buyers qualify for larger loans. Many lenders and buyers are unfamiliar with MCCs, so working with an MCC-experienced lender is crucial.",
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Mortgage Loan Amount ($)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "interestRate",
        label: "Interest Rate (%)",
        type: "number",
        defaultValue: "6.5",
      },
      {
        name: "mccRate",
        label: "MCC Credit Rate (%)",
        type: "number",
        defaultValue: "20",
      },
      {
        name: "annualIncome",
        label: "Annual Household Income ($)",
        type: "number",
        defaultValue: "75000",
      },
      {
        name: "currentTaxLiability",
        label: "Estimated Annual Tax Liability ($)",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "mccFeePercent",
        label: "MCC Fee (% of loan amount)",
        type: "number",
        defaultValue: "1",
      },
    ],
    results: [
      {
        label: "First Year Interest Paid",
        isCurrency: true,
      },
      {
        label: "MCC Tax Credit (Year 1)",
        isCurrency: true,
      },
      {
        label: "Remaining Interest Deduction",
        isCurrency: true,
      },
      {
        label: "Tax Savings from Deduction",
        isCurrency: true,
      },
      {
        label: "Total First Year Tax Benefit",
        isCurrency: true,
      },
      {
        label: "Monthly Tax Savings",
        isCurrency: true,
      },
      {
        label: "30-Year MCC Benefit",
        isCurrency: true,
      },
      {
        label: "One-Time MCC Fee",
        isCurrency: true,
      },
      {
        label: "Break-Even Period",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { loanAmount, interestRate, mccRate, annualIncome, currentTaxLiability, mccFeePercent } = values;
      const loan = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100;
      const mccPercent = parseFloat(mccRate) / 100;
      const income = parseFloat(annualIncome);
      const taxLiability = parseFloat(currentTaxLiability);
      const feePercent = parseFloat(mccFeePercent) / 100;

      const firstYearInterest = loan * rate;
      
      let mccCredit = firstYearInterest * mccPercent;
      mccCredit = Math.min(mccCredit, 2000);
      
      const remainingInterest = firstYearInterest - (mccCredit / mccPercent);
      const marginalTaxRate = income < 44000 ? 0.12 : income < 95000 ? 0.22 : 0.24;
      const deductionSavings = remainingInterest * marginalTaxRate;
      
      const totalBenefit = mccCredit + deductionSavings;
      const monthlySavings = mccCredit / 12;
      
      let totalThirtyYear = 0;
      let balance = loan;
      const monthlyRate = rate / 12;
      const monthlyPayment = loan * (monthlyRate * Math.pow(1 + monthlyRate, 360)) / (Math.pow(1 + monthlyRate, 360) - 1);
      
      for (let i = 0; i < 360; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;
        
        if (i % 12 === 11) {
          const yearlyInterest = interestPayment * 12;
          const yearlyCredit = Math.min(yearlyInterest * mccPercent, 2000);
          totalThirtyYear += yearlyCredit;
        }
      }
      
      const mccFee = loan * feePercent;
      const breakEvenMonths = Math.ceil(mccFee / monthlySavings);

      return [
        {
          label: "First Year Interest Paid",
          value: firstYearInterest.toFixed(2),
          isCurrency: true,
        },
        {
          label: "MCC Tax Credit (Year 1)",
          value: mccCredit.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Remaining Interest Deduction",
          value: remainingInterest.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Tax Savings from Deduction",
          value: deductionSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total First Year Tax Benefit",
          value: totalBenefit.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Tax Savings",
          value: monthlySavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "30-Year MCC Benefit",
          value: totalThirtyYear.toFixed(2),
          isCurrency: true,
        },
        {
          label: "One-Time MCC Fee",
          value: mccFee.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Break-Even Period",
          value: `${breakEvenMonths} months`,
          isCurrency: false,
        },
      ];
    },
  },
};
