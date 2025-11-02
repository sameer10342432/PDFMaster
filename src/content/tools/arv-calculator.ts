import { CalculatorContent } from '@/types';

export const ARV_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'After Repair Value (ARV) Calculator',
  description: 'Estimate the after repair value (ARV) of a property. A key metric for fix-and-flip investors.',
  category: 'Real Estate',
  slug: 'arv-calculator',
  article: {
    title: "What is After Repair Value (ARV)?",
    content: `
    <p>The After Repair Value (ARV) is an estimate of a property\'s value after it has been renovated. It is a key metric for real estate investors to determine the potential profitability of a fix-and-flip project. The most common way to calculate ARV is by analyzing recent sales of comparable properties (comps) in the area that are in the renovated condition you plan for your property.</p>
  `,
  },
  calculator: {
    fields: [
        {
            name: "purchasePrice",
            label: "Purchase Price",
            type: "number",
            placeholder: "200000",
            defaultValue: "200000",
        },
        {
            name: "renovationCosts",
            label: "Cost of Renovations",
            type: "number",
            placeholder: "50000",
            defaultValue: "50000",
        },
        {
            name: "comp1",
            label: "Comp 1 Sale Price",
            type: "number",
            placeholder: "300000",
            defaultValue: "300000",
        },
        {
            name: "comp2",
            label: "Comp 2 Sale Price",
            type: "number",
            placeholder: "310000",
            defaultValue: "310000",
        },
        {
            name: "comp3",
            label: "Comp 3 Sale Price",
            type: "number",
            placeholder: "295000",
            defaultValue: "295000",
        },
    ],
    calculate: (data: any) => {
        const { purchasePrice, renovationCosts, comp1, comp2, comp3 } = data;

        const comps = [comp1, comp2, comp3].filter(c => c && c > 0).map(c => Number(c));
        if (comps.length === 0) {
            return [
                { label: "After Repair Value (ARV)", value: "Please provide at least one comparable sale.", type: "string" },
            ];
        }
        const arv = comps.reduce((acc, curr) => acc + curr, 0) / comps.length;
        const potentialProfit = arv - (Number(purchasePrice) || 0) - (Number(renovationCosts) || 0);

        return [
          { label: "After Repair Value (ARV)", value: arv, type: "currency" },
          { label: "Potential Profit", value: potentialProfit, type: "currency" },
        ];
    },
  },
};