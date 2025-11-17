import { CalculatorContent } from "@/types";

export const michiganPRECalculator: CalculatorContent = {
  title: "Michigan Principal Residence Exemption (PRE) Calculator",
  description:
    "Calculate property tax savings with Michigan's Principal Residence Exemption, which exempts your primary home from the 18-mill school operating tax.",
  icon: "Icon",
  category: "State-Specific Tools",
  slug: "michigan-pre-calculator",
  article: {
    title: "Understanding Michigan's Principal Residence Exemption",
    content:
      "Michigan's Principal Residence Exemption (PRE) is one of the most valuable property tax benefits for homeowners in the state. When you claim the PRE on your primary residence, you're exempt from paying the local school operating tax (up to 18 mills), which can reduce your property tax bill by 30-50% depending on your location. To qualify, the property must be your primary residence where you live for more than 6 months of the year. You must file a PRE affidavit with your local assessor's office. The exemption applies to your principal residence only - second homes, rental properties, and vacation properties do not qualify. If you move, you must rescind the exemption within 90 days and file a new one at your new residence. Michigan law requires that you occupy the property by November 1st of the tax year to claim the exemption for that year. Failing to properly rescind a PRE when you move can result in penalties, interest, and back taxes. This calculator helps you understand the tax savings from claiming the PRE and the cost of not having it on investment properties.",
  },
  calculator: {
    fields: [
      {
        name: "taxableValue",
        label: "Taxable Value of Property ($)",
        type: "number",
        defaultValue: "150000",
      },
      {
        name: "localMillageRate",
        label: "Total Local Millage Rate (mills)",
        type: "number",
        defaultValue: "45",
      },
      {
        name: "schoolOperatingTax",
        label: "School Operating Tax (mills, max 18)",
        type: "number",
        defaultValue: "18",
      },
      {
        name: "yearsOwned",
        label: "Years of Ownership",
        type: "number",
        defaultValue: "5",
      },
    ],
    results: [
      {
        label: "Annual Tax Without PRE",
        isCurrency: true,
      },
      {
        label: "Annual Tax With PRE",
        isCurrency: true,
      },
      {
        label: "Annual PRE Savings",
        isCurrency: true,
      },
      {
        label: "Total Savings Over Time",
        isCurrency: true,
      },
      {
        label: "Percentage Reduction",
        isCurrency: false,
      },
      {
        label: "Monthly Savings",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { taxableValue, localMillageRate, schoolOperatingTax, yearsOwned } = values;
      const taxVal = parseFloat(taxableValue);
      const localRate = parseFloat(localMillageRate);
      const schoolTax = parseFloat(schoolOperatingTax);
      const years = parseFloat(yearsOwned);

      const annualTaxWithout = (taxVal * localRate) / 1000;
      const schoolTaxAmount = (taxVal * schoolTax) / 1000;
      const annualTaxWith = annualTaxWithout - schoolTaxAmount;
      const annualSavings = schoolTaxAmount;
      const totalSavings = annualSavings * years;
      const percentageReduction = ((annualSavings / annualTaxWithout) * 100).toFixed(1);
      const monthlySavings = annualSavings / 12;

      return [
        {
          label: "Annual Tax Without PRE",
          value: annualTaxWithout.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax With PRE",
          value: annualTaxWith.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual PRE Savings",
          value: annualSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Savings Over Time",
          value: totalSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Percentage Reduction",
          value: `${percentageReduction}%`,
          isCurrency: false,
        },
        {
          label: "Monthly Savings",
          value: monthlySavings.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
