import { CalculatorContent } from "@/types";

export const firstTimeHomebuyerSavingsPlan: CalculatorContent = {
  title: "First-Time Home Buyer Savings Plan Calculator",
  description:
    "Calculate how much to save monthly for your first home purchase, including down payment, closing costs, and emergency fund, with a personalized savings timeline.",
  icon: "Icon",
  category: "First-Time Homebuyer Tools",
  slug: "first-time-homebuyer-savings-plan",
  article: {
    title: "Building Your First-Time Home Buyer Savings Plan",
    content:
      "Saving for your first home requires more than just a down payment. A comprehensive savings plan includes: down payment (typically 3-20% of purchase price), closing costs (2-5% of purchase price), moving expenses ($1,000-$5,000), immediate repairs or improvements ($2,000-$10,000), and an emergency fund (3-6 months of housing costs). Many first-time buyers underestimate these costs and find themselves 'house poor' - owning a home but lacking funds for maintenance and emergencies. The 50/30/20 budgeting rule suggests allocating 20% of after-tax income to savings, though aggressive savers may increase this to 30-40%. Several savings strategies can accelerate your timeline: high-yield savings accounts (currently 4-5% APY), automated transfers from each paycheck, side income dedicated to housing savings, and reducing discretionary spending. Many states offer First-Time Homebuyer Savings Accounts with tax benefits - contributions may be tax-deductible and growth tax-free when used for qualified expenses. Setting specific monthly savings goals and tracking progress is crucial for staying motivated during the 2-5 year journey most first-time buyers face. This calculator helps create a realistic, personalized savings plan based on your target home price and current financial situation.",
  },
  calculator: {
    fields: [
      {
        name: "targetPurchasePrice",
        label: "Target Home Purchase Price ($)",
        type: "number",
        defaultValue: "300000",
      },
      {
        name: "downPaymentPercent",
        label: "Down Payment Percentage (%)",
        type: "number",
        defaultValue: "10",
      },
      {
        name: "closingCostPercent",
        label: "Estimated Closing Costs (%)",
        type: "number",
        defaultValue: "3",
      },
      {
        name: "currentSavings",
        label: "Current Savings for Home ($)",
        type: "number",
        defaultValue: "15000",
      },
      {
        name: "monthlySavings",
        label: "Monthly Savings Contribution ($)",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "savingsAPY",
        label: "Savings Account APY (%)",
        type: "number",
        defaultValue: "4.5",
      },
      {
        name: "movingCosts",
        label: "Expected Moving Costs ($)",
        type: "number",
        defaultValue: "3000",
      },
      {
        name: "emergencyFund",
        label: "Emergency Fund Goal ($)",
        type: "number",
        defaultValue: "10000",
      },
    ],
    results: [
      {
        label: "Down Payment Needed",
        isCurrency: true,
      },
      {
        label: "Closing Costs Needed",
        isCurrency: true,
      },
      {
        label: "Total Upfront Costs",
        isCurrency: true,
      },
      {
        label: "Total Savings Goal",
        isCurrency: true,
      },
      {
        label: "Amount Still Needed",
        isCurrency: true,
      },
      {
        label: "Months Until Goal (with interest)",
        isCurrency: false,
      },
      {
        label: "Target Purchase Date",
        isCurrency: false,
      },
      {
        label: "Interest Earned",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { targetPurchasePrice, downPaymentPercent, closingCostPercent, currentSavings, monthlySavings, savingsAPY, movingCosts, emergencyFund } = values;
      const price = parseFloat(targetPurchasePrice);
      const downPercent = parseFloat(downPaymentPercent) / 100;
      const closingPercent = parseFloat(closingCostPercent) / 100;
      const current = parseFloat(currentSavings);
      const monthly = parseFloat(monthlySavings);
      const apy = parseFloat(savingsAPY) / 100;
      const moving = parseFloat(movingCosts);
      const emergency = parseFloat(emergencyFund);

      const downPayment = price * downPercent;
      const closingCosts = price * closingPercent;
      const totalUpfront = downPayment + closingCosts + moving;
      const totalGoal = totalUpfront + emergency;
      const stillNeeded = Math.max(0, totalGoal - current);

      let balance = current;
      let months = 0;
      let interestEarned = 0;
      const monthlyRate = apy / 12;

      while (balance < totalGoal && months < 600) {
        const interest = balance * monthlyRate;
        balance += monthly + interest;
        interestEarned += interest;
        months++;
      }

      const targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + months);
      const targetDateStr = targetDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

      return [
        {
          label: "Down Payment Needed",
          value: downPayment.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Closing Costs Needed",
          value: closingCosts.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Upfront Costs",
          value: totalUpfront.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Savings Goal",
          value: totalGoal.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Amount Still Needed",
          value: stillNeeded.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Months Until Goal (with interest)",
          value: months >= 600 ? "Goal not achievable with current plan" : `${months} months`,
          isCurrency: false,
        },
        {
          label: "Target Purchase Date",
          value: months >= 600 ? "Adjust savings or goal" : targetDateStr,
          isCurrency: false,
        },
        {
          label: "Interest Earned",
          value: interestEarned.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
