import { CalculatorContent } from "@/types";

export const HOME_RENOVATION_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Home Renovation ROI Calculator",
  description: "The Home Renovation ROI Calculator helps you determine the return on investment for your home improvement projects.",
  icon: "Icon",
  category: "Real Estate",
  slug: "home-renovation-roi-calculator",
  article: {
    title: "Understanding Home Renovation ROI",
    content: `
      <p>
        The Home Renovation ROI Calculator is a tool designed to help homeowners and real estate investors evaluate the potential financial returns of renovation projects. By inputting the cost of the renovation and the expected increase in property value, you can quickly calculate the ROI and make informed decisions about which projects to undertake.
      </p>
      <p>
        A positive ROI indicates that the increase in property value is greater than the cost of the renovation, resulting in a financial gain. A negative ROI, on the other hand, means that the project costs more than the value it adds to your property.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "renovationCost",
        label: "Renovation Cost",
        type: "number",
        defaultValue: 25000,
      },
      {
        name: "valueIncrease",
        label: "Increase in Property Value",
        type: "number",
        defaultValue: 40000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { renovationCost, valueIncrease } = values;
      const roi = ((valueIncrease - renovationCost) / renovationCost) * 100;

      return [
        { label: "Return on Investment (ROI)", value: roi.toFixed(2) + "%" },
      ];
    },
  },
};