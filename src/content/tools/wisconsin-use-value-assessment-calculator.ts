import { CalculatorContent } from "@/types";

export const wisconsinUseValueAssessment: CalculatorContent = {
  title: "Wisconsin Use-Value Assessment Calculator (Farms)",
  description:
    "Calculate property tax savings for Wisconsin farmland enrolled in the Use-Value Assessment program, which values agricultural land based on its farming income rather than market value.",
  icon: "Icon",
  category: "State-Specific Tools",
  slug: "wisconsin-use-value-assessment-calculator",
  article: {
    title: "Understanding Wisconsin's Use-Value Assessment for Farmland",
    content:
      "Wisconsin's Use-Value Assessment program, established under Wisconsin Statute 70.32(2r), allows qualifying agricultural land to be assessed based on its value for farming purposes rather than its market value. This program helps farmers keep their land affordable by reducing property taxes, especially in areas where development pressure has increased market values. To qualify, the land must be 35 acres or larger (or generate $6,000+ in annual farm income if smaller), have been in agricultural use for the past 5 years, and be actively farmed. The program assesses land based on soil productivity and typical farm income rather than potential development value. When land exits the program, a conversion charge (penalty) equal to the tax savings from the past 10 years may apply. This calculator helps farmers estimate their tax savings under the program and understand the potential conversion charge if they decide to develop or sell their land.",
  },
  calculator: {
    fields: [
      {
        name: "acreage",
        label: "Total Acreage",
        type: "number",
        defaultValue: "100",
      },
      {
        name: "marketValue",
        label: "Market Value per Acre ($)",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "useValue",
        label: "Use-Value Assessment per Acre ($)",
        type: "number",
        defaultValue: "2500",
      },
      {
        name: "taxRate",
        label: "Local Property Tax Rate (Mill Rate)",
        type: "number",
        defaultValue: "18.5",
      },
      {
        name: "yearsEnrolled",
        label: "Years Enrolled in Program",
        type: "number",
        defaultValue: "5",
      },
    ],
    results: [
      {
        label: "Total Market Value",
        isCurrency: true,
      },
      {
        label: "Total Use-Value Assessment",
        isCurrency: true,
      },
      {
        label: "Assessment Reduction",
        isCurrency: true,
      },
      {
        label: "Annual Tax Without Program",
        isCurrency: true,
      },
      {
        label: "Annual Tax With Program",
        isCurrency: true,
      },
      {
        label: "Annual Tax Savings",
        isCurrency: true,
      },
      {
        label: "Total Savings Over Time",
        isCurrency: true,
      },
      {
        label: "Estimated Conversion Charge",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { acreage, marketValue, useValue, taxRate, yearsEnrolled } = values;
      const acres = parseFloat(acreage);
      const marketVal = parseFloat(marketValue);
      const useVal = parseFloat(useValue);
      const rate = parseFloat(taxRate);
      const years = parseInt(yearsEnrolled);

      const totalMarketValue = acres * marketVal;
      const totalUseValue = acres * useVal;
      const assessmentReduction = totalMarketValue - totalUseValue;
      
      const annualTaxWithout = (totalMarketValue * rate) / 1000;
      const annualTaxWith = (totalUseValue * rate) / 1000;
      const annualSavings = annualTaxWithout - annualTaxWith;
      const totalSavings = annualSavings * years;
      
      const conversionYears = Math.min(years, 10);
      const conversionCharge = annualSavings * conversionYears;

      return [
        {
          label: "Total Market Value",
          value: totalMarketValue.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Use-Value Assessment",
          value: totalUseValue.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Assessment Reduction",
          value: assessmentReduction.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax Without Program",
          value: annualTaxWithout.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax With Program",
          value: annualTaxWith.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax Savings",
          value: annualSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Savings Over Time",
          value: totalSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Estimated Conversion Charge",
          value: conversionCharge.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
