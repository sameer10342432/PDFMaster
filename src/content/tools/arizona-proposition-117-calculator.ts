import { CalculatorContent } from "@/types";

export const arizonaProposition117Calculator: CalculatorContent = {
  title: "Arizona Proposition 117 Property Tax Cap Calculator",
  description:
    "Calculate how Arizona's Proposition 117 limits annual increases in your property's Limited Property Value (LPV) to protect against rapid tax increases.",
  icon: "Icon",
  category: "State-Specific Tools",
  slug: "arizona-proposition-117-calculator",
  article: {
    title: "Understanding Arizona Proposition 117 Tax Cap",
    content:
      "Arizona Proposition 117, passed in 2012, limits the annual increase in a property's Limited Property Value (LPV) to 5% per year. This protection helps homeowners avoid dramatic property tax increases when market values surge. In Arizona, properties have two values: Full Cash Value (FCV), which is the market value, and Limited Property Value (LPV), which is used for calculating property taxes. The LPV can only increase by a maximum of 5% annually, even if the FCV increases more. This creates a 'cap' that protects long-term homeowners from being taxed out of their homes during real estate booms. However, when you buy a property, the LPV resets to match the purchase price (FCV). The 5% cap then applies from that new baseline. If market values decline, the LPV can decrease without limit to match the lower FCV. Understanding this system is crucial for Arizona homeowners and real estate investors, as it affects long-term tax planning and the true cost of homeownership. Properties owned longer benefit more from the cap, creating a 'loyalty discount' for established residents.",
  },
  calculator: {
    fields: [
      {
        name: "fullCashValue",
        label: "Full Cash Value (Market Value) ($)",
        type: "number",
        defaultValue: "400000",
      },
      {
        name: "currentLPV",
        label: "Current Limited Property Value ($)",
        type: "number",
        defaultValue: "320000",
      },
      {
        name: "taxRate",
        label: "Combined Tax Rate (%)",
        type: "number",
        defaultValue: "1.2",
      },
      {
        name: "yearsProjected",
        label: "Years to Project",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "annualAppreciation",
        label: "Expected Annual Market Appreciation (%)",
        type: "number",
        defaultValue: "6",
      },
    ],
    results: [
      {
        label: "New Limited Property Value",
        isCurrency: true,
      },
      {
        label: "Property Tax (with Prop 117 Cap)",
        isCurrency: true,
      },
      {
        label: "Property Tax (without Cap)",
        isCurrency: true,
      },
      {
        label: "Annual Tax Savings",
        isCurrency: true,
      },
      {
        label: "Projected FCV in Future",
        isCurrency: true,
      },
      {
        label: "Projected LPV in Future",
        isCurrency: true,
      },
      {
        label: "Cumulative Tax Savings",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { fullCashValue, currentLPV, taxRate, yearsProjected, annualAppreciation } = values;
      const fcv = parseFloat(fullCashValue);
      const lpv = parseFloat(currentLPV);
      const rate = parseFloat(taxRate) / 100;
      const years = parseInt(yearsProjected);
      const appreciation = parseFloat(annualAppreciation) / 100;

      const maxLPVIncrease = lpv * 1.05;
      const newLPV = Math.min(maxLPVIncrease, fcv);
      
      const taxWithCap = newLPV * rate;
      const taxWithout = fcv * rate;
      const annualSavings = taxWithout - taxWithCap;

      let projectedFCV = fcv;
      let projectedLPV = lpv;
      let cumulativeSavings = 0;

      for (let i = 0; i < years; i++) {
        projectedFCV = projectedFCV * (1 + appreciation);
        projectedLPV = Math.min(projectedLPV * 1.05, projectedFCV);
        const yearlyTaxWithCap = projectedLPV * rate;
        const yearlyTaxWithout = projectedFCV * rate;
        cumulativeSavings += (yearlyTaxWithout - yearlyTaxWithCap);
      }

      return [
        {
          label: "New Limited Property Value",
          value: newLPV.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Property Tax (with Prop 117 Cap)",
          value: taxWithCap.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Property Tax (without Cap)",
          value: taxWithout.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax Savings",
          value: annualSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Projected FCV in Future",
          value: projectedFCV.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Projected LPV in Future",
          value: projectedLPV.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Cumulative Tax Savings",
          value: cumulativeSavings.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
