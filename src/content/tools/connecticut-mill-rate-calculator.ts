import { CalculatorContent } from "@/types";

export const connecticutMillRateCalculator: CalculatorContent = {
  title: "Connecticut Property Tax Calculator (Mill Rate)",
  description:
    "Calculate Connecticut property taxes using the mill rate system, where taxes are based on assessed value and local mill rates varying by municipality.",
  icon: "Icon",
  category: "State-Specific Tools",
  slug: "connecticut-mill-rate-calculator",
  article: {
    title: "Understanding Connecticut's Mill Rate Property Tax System",
    content:
      "Connecticut uses a mill rate system for property taxation, where one mill equals $1 of tax for every $1,000 of assessed property value. Connecticut is unique in that properties are assessed at 70% of their fair market value, meaning your assessed value is typically 70% of what your home would sell for. Each municipality sets its own mill rate annually based on budget needs. Mill rates vary dramatically across Connecticut - from as low as 15 mills in some wealthy suburbs to over 74 mills in Hartford, one of the highest in the nation. To calculate your tax: (Market Value × 0.70 = Assessed Value), then (Assessed Value × Mill Rate ÷ 1,000 = Annual Tax). Connecticut also offers several exemptions and credits, including those for veterans, elderly homeowners, and totally disabled persons. Property revaluations occur every 5 years in most towns, though some do annual revaluations. Understanding your local mill rate is essential for property budgeting and comparing the true cost of living between Connecticut towns. Many homebuyers are shocked to discover that a modest mill rate difference can translate to thousands of dollars in annual taxes.",
  },
  calculator: {
    fields: [
      {
        name: "marketValue",
        label: "Property Market Value ($)",
        type: "number",
        defaultValue: "350000",
      },
      {
        name: "assessmentRatio",
        label: "Assessment Ratio (% of Market Value)",
        type: "number",
        defaultValue: "70",
      },
      {
        name: "millRate",
        label: "Local Mill Rate",
        type: "number",
        defaultValue: "32.5",
      },
      {
        name: "motorVehicleMillRate",
        label: "Motor Vehicle Mill Rate (if applicable)",
        type: "number",
        defaultValue: "32.5",
      },
      {
        name: "vehicleValue",
        label: "Vehicle Value ($, optional)",
        type: "number",
        defaultValue: "0",
      },
      {
        name: "exemptionAmount",
        label: "Total Exemptions ($)",
        type: "number",
        defaultValue: "0",
      },
    ],
    results: [
      {
        label: "Assessed Property Value",
        isCurrency: true,
      },
      {
        label: "Net Assessed Value (After Exemptions)",
        isCurrency: true,
      },
      {
        label: "Annual Property Tax",
        isCurrency: true,
      },
      {
        label: "Annual Motor Vehicle Tax",
        isCurrency: true,
      },
      {
        label: "Total Annual Tax",
        isCurrency: true,
      },
      {
        label: "Monthly Tax (Escrow)",
        isCurrency: true,
      },
      {
        label: "Effective Tax Rate",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { marketValue, assessmentRatio, millRate, motorVehicleMillRate, vehicleValue, exemptionAmount } = values;
      const market = parseFloat(marketValue);
      const assessRatio = parseFloat(assessmentRatio) / 100;
      const propMillRate = parseFloat(millRate);
      const vehicleMillRate = parseFloat(motorVehicleMillRate);
      const vehicle = parseFloat(vehicleValue);
      const exemption = parseFloat(exemptionAmount);

      const assessedValue = market * assessRatio;
      const netAssessedValue = Math.max(0, assessedValue - exemption);
      const annualPropertyTax = (netAssessedValue * propMillRate) / 1000;
      
      const assessedVehicleValue = vehicle * assessRatio;
      const annualVehicleTax = (assessedVehicleValue * vehicleMillRate) / 1000;
      
      const totalAnnualTax = annualPropertyTax + annualVehicleTax;
      const monthlyTax = totalAnnualTax / 12;
      const effectiveRate = ((totalAnnualTax / market) * 100).toFixed(2);

      return [
        {
          label: "Assessed Property Value",
          value: assessedValue.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Net Assessed Value (After Exemptions)",
          value: netAssessedValue.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Property Tax",
          value: annualPropertyTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Annual Motor Vehicle Tax",
          value: annualVehicleTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Annual Tax",
          value: totalAnnualTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Tax (Escrow)",
          value: monthlyTax.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Effective Tax Rate",
          value: `${effectiveRate}%`,
          isCurrency: false,
        },
      ];
    },
  },
};
