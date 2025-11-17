import { CalculatorContent } from "@/types";

export const renterAffordabilityCalculator: CalculatorContent = {
  title: "What Can I Afford? (Renter) Calculator",
  description:
    "Calculate the maximum rent you can afford based on your income, debts, and financial goals while maintaining a healthy budget and saving for future needs.",
  icon: "Icon",
  category: "Rent & Lease Tools",
  slug: "renter-affordability-calculator",
  article: {
    title: "Understanding What Rent You Can Actually Afford",
    content:
      "Determining affordable rent is crucial for financial health, yet many renters overspend on housing, leaving little for savings, debt payoff, or emergencies. The traditional '30% rule' suggests spending no more than 30% of gross income on rent, but this outdated guideline doesn't account for individual circumstances, debt loads, or financial goals. A better approach uses the 50/30/20 budget: 50% of after-tax income for needs (including rent), 30% for wants, and 20% for savings and debt payoff. In high-cost cities, renters often spend 40-50% of income on housing, becoming 'rent burdened' and sacrificing savings and quality of life. Landlords typically require income to be 2.5-3x monthly rent, limiting options for those with lower incomes. When calculating affordable rent, consider: take-home pay (not gross income), recurring debts (student loans, car payments, credit cards), utilities not included in rent, renter's insurance, parking fees, expected rent increases (3-5% annually), and savings goals. Financial advisors recommend keeping total housing costs under 35% of gross income in expensive markets, ideally under 25% in affordable areas. Building an emergency fund (3-6 months expenses) should take priority over renting a nicer place. This calculator provides personalized rent affordability based on your complete financial picture, not just income.",
  },
  calculator: {
    fields: [
      {
        name: "monthlyGrossIncome",
        label: "Monthly Gross Income ($)",
        type: "number",
        defaultValue: "5000",
      },
      {
        name: "monthlyTakeHome",
        label: "Monthly Take-Home Income ($)",
        type: "number",
        defaultValue: "3800",
      },
      {
        name: "monthlyDebts",
        label: "Monthly Debt Payments ($)",
        type: "number",
        defaultValue: "400",
      },
      {
        name: "savingsGoalPercent",
        label: "Savings Goal (% of take-home)",
        type: "number",
        defaultValue: "20",
      },
      {
        name: "estimatedUtilities",
        label: "Estimated Utilities ($)",
        type: "number",
        defaultValue: "150",
      },
      {
        name: "otherEssentials",
        label: "Other Essential Expenses ($)",
        type: "number",
        defaultValue: "600",
      },
      {
        name: "budgetMethod",
        label: "Budget Method",
        type: "select",
        options: [
          { value: "Conservative (25% gross)", label: "Conservative (25% gross)" },
          { value: "30% Rule", label: "30% Rule" },
          { value: "50/30/20 Method", label: "50/30/20 Method" },
          { value: "Aggressive Savings (35% needs)", label: "Aggressive Savings (35% needs)" }
        ],
        defaultValue: "50/30/20 Method",
      },
    ],
    results: [
      {
        label: "Maximum Affordable Rent",
        isCurrency: true,
      },
      {
        label: "Total Housing Cost Limit",
        isCurrency: true,
      },
      {
        label: "% of Gross Income",
        isCurrency: false,
      },
      {
        label: "% of Take-Home Income",
        isCurrency: false,
      },
      {
        label: "Monthly Savings Amount",
        isCurrency: true,
      },
      {
        label: "Remaining for Discretionary",
        isCurrency: true,
      },
      {
        label: "Landlord Income Requirement",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { monthlyGrossIncome, monthlyTakeHome, monthlyDebts, savingsGoalPercent, estimatedUtilities, otherEssentials, budgetMethod } = values;
      const grossIncome = parseFloat(monthlyGrossIncome);
      const takeHome = parseFloat(monthlyTakeHome);
      const debts = parseFloat(monthlyDebts);
      const savingsGoal = parseFloat(savingsGoalPercent) / 100;
      const utilities = parseFloat(estimatedUtilities);
      const essentials = parseFloat(otherEssentials);

      let maxRent = 0;
      let recommendation = "";

      switch (budgetMethod) {
        case "Conservative (25% gross)":
          maxRent = grossIncome * 0.25 - utilities;
          recommendation = "Conservative approach, excellent for aggressive savers";
          break;
        case "30% Rule":
          maxRent = grossIncome * 0.30 - utilities;
          recommendation = "Traditional rule, may be tight in HCOL areas";
          break;
        case "50/30/20 Method":
          const needsBudget = takeHome * 0.50;
          maxRent = needsBudget - debts - utilities - essentials;
          recommendation = "Balanced approach prioritizing savings";
          break;
        case "Aggressive Savings (35% needs)":
          const aggressiveNeedsBudget = takeHome * 0.35;
          maxRent = aggressiveNeedsBudget - debts - utilities - essentials;
          recommendation = "Maximizes savings, requires discipline";
          break;
      }

      maxRent = Math.max(0, maxRent);
      const totalHousingCost = maxRent + utilities;
      const percentGross = ((totalHousingCost / grossIncome) * 100).toFixed(1);
      const percentTakeHome = ((totalHousingCost / takeHome) * 100).toFixed(1);
      const savingsAmount = takeHome * savingsGoal;
      const remainingDiscretionary = takeHome - totalHousingCost - debts - essentials - savingsAmount;
      const landlordRequirement = maxRent * 3;

      let finalRecommendation = recommendation;
      if (parseFloat(percentGross) > 35) {
        finalRecommendation += " - WARNING: High rent burden, consider roommates or lower rent";
      } else if (parseFloat(percentGross) < 25) {
        finalRecommendation += " - Excellent position for saving";
      }

      return [
        {
          label: "Maximum Affordable Rent",
          value: maxRent.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Housing Cost Limit",
          value: totalHousingCost.toFixed(2),
          isCurrency: true,
        },
        {
          label: "% of Gross Income",
          value: `${percentGross}%`,
          isCurrency: false,
        },
        {
          label: "% of Take-Home Income",
          value: `${percentTakeHome}%`,
          isCurrency: false,
        },
        {
          label: "Monthly Savings Amount",
          value: savingsAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Remaining for Discretionary",
          value: remainingDiscretionary.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Landlord Income Requirement",
          value: landlordRequirement.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Recommendation",
          value: finalRecommendation,
          isCurrency: false,
        },
      ];
    },
  },
};
