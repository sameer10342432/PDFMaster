import { CalculatorContent } from "@/types";

export const montanaBiennialReappraisal: CalculatorContent = {
  title: "Montana Property Tax Biennial Reappraisal Calculator",
  description:
    "Calculate property tax changes under Montana's biennial reappraisal cycle, where property values are reassessed every two years affecting your tax bill.",
  icon: "Icon",
  category: "State-Specific Tools",
  slug: "montana-biennial-reappraisal-calculator",
  article: {
    title: "Understanding Montana's Biennial Property Reappraisal System",
    content:
      "Montana conducts property reappraisals every two years (biennially) rather than annually. The Montana Department of Revenue reappraises all property as of January 1st of each odd-numbered year (2023, 2025, etc.), and those values are used for the following two tax years. This means property values remain fixed for two-year periods, providing stability but also creating potential 'sticker shock' when reappraisals occur during strong market growth. Montana has different tax rates for different property classes: residential property is taxed at a rate based on the first $750,000 of market value (lower rate) and amounts above that (higher rate). Primary residences may qualify for additional exemptions. The state also has several property tax assistance programs for elderly and low-income residents. When market values increase significantly during a reappraisal year, your tax bill can jump substantially even if mill levies remain the same. Understanding the reappraisal cycle and estimating future increases helps Montana property owners budget for tax changes and avoid surprises. Property owners can appeal their assessed values during the reappraisal year if they believe the valuation is incorrect.",
  },
  calculator: {
    fields: [
      {
        name: "currentMarketValue",
        label: "Current Market Value ($)",
        type: "number",
        defaultValue: "350000",
      },
      {
        name: "newMarketValue",
        label: "New Reappraised Market Value ($)",
        type: "number",
        defaultValue: "420000",
      },
      {
        name: "residentialTaxRate",
        label: "Residential Tax Rate (%) - Under $750k",
        type: "number",
        defaultValue: "1.35",
      },
      {
        name: "upperTaxRate",
        label: "Residential Tax Rate (%) - Over $750k",
        type: "number",
        defaultValue: "1.89",
      },
      {
        name: "localMillLevy",
        label: "Local Mill Levy",
        type: "number",
        defaultValue: "250",
      },
      {
        name: "qualifyingPrimaryResidence",
        label: "Primary Residence?",
        type: "select",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        defaultValue: "Yes",
      },
    ],
    results: [
      {
        label: "Value Increase",
        isCurrency: true,
      },
      {
        label: "Percentage Increase",
        isCurrency: false,
      },
      {
        label: "Current Annual Tax",
        isCurrency: true,
      },
      {
        label: "New Annual Tax After Reappraisal",
        isCurrency: true,
      },
      {
        label: "Annual Tax Increase",
        isCurrency: true,
      },
      {
        label: "Monthly Tax Increase",
        isCurrency: true,
      },
      {
        label: "2-Year Tax Impact",
        isCurrency: true,
      },
    ],
    calculate: (values) => {
      const { currentMarketValue, newMarketValue, residentialTaxRate, upperTaxRate, localMillLevy, qualifyingPrimaryResidence } = values;
      const currentVal = parseFloat(currentMarketValue);
      const newVal = parseFloat(newMarketValue);
      const lowerRate = parseFloat(residentialTaxRate) / 100;
      const higherRate = parseFloat(upperTaxRate) / 100;
      const millLevy = parseFloat(localMillLevy);
      const isPrimary = qualifyingPrimaryResidence === "Yes";

      const valueIncrease = newVal - currentVal;
      const percentageIncrease = ((valueIncrease / currentVal) * 100).toFixed(1);

      const calculateTax = (value: number) => {
        const threshold = 750000;
        let taxableValue;
        
        if (value <= threshold) {
          taxableValue = value * lowerRate;
        } else {
          taxableValue = (threshold * lowerRate) + ((value - threshold) * higherRate);
        }
        
        const tax = (taxableValue * millLevy) / 1000;
        return isPrimary ? tax * 0.97 : tax; // 3% primary residence credit
      };

      const currentTax = calculateTax(currentVal);
      const newTax = calculateTax(newVal);
      const taxIncrease = newTax - currentTax;
      const monthlyIncrease = taxIncrease / 12;
      const twoYearImpact = taxIncrease * 2;

      return [
        {
          label: "Value Increase",
          value: valueIncrease.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Percentage Increase",
          value: `${percentageIncrease}%`,
          isCurrency: false,
        },
        {
          label: "Current Annual Tax",
          value: currentTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "New Annual Tax After Reappraisal",
          value: newTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Tax Increase",
          value: taxIncrease.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Tax Increase",
          value: monthlyIncrease.toFixed(2),
          isCurrency: true,
        },
        {
          label: "2-Year Tax Impact",
          value: twoYearImpact.toFixed(2),
          isCurrency: true,
        },
      ];
    },
  },
};
