import { CalculatorContent } from '@/types';

export const CURB_APPEAL_ROI_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Curb Appeal ROI Calculator',
  description: 'Calculate the return on investment for exterior home improvements to boost curb appeal and sale price.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'curb-appeal-roi-calculator',
  article: {
    title: "Boosting Home Value with Curb Appeal",
    content: `
      <h2>Why Curb Appeal Matters</h2>
      <p>
        Curb appeal is the attractiveness of your home's exterior as viewed from the street. First impressions matter tremendously in real estate—94% of realtors advise sellers to improve curb appeal before listing. Homes with excellent curb appeal can sell for up to 7% more than comparable homes with poor exterior presentation.
      </p>
      <h3>High-ROI Curb Appeal Improvements</h3>
      <ul>
        <li><strong>Landscaping:</strong> Professional landscaping returns 100-200% ROI. Fresh mulch, trimmed hedges, and colorful flowers create instant appeal for $500-$3,000.</li>
        <li><strong>Fresh Paint:</strong> Painting the front door and trim costs $100-$500 and can return 200%+ ROI by making the home look well-maintained.</li>
        <li><strong>New Garage Door:</strong> A new garage door recoups 94% of its cost and dramatically improves street appeal.</li>
        <li><strong>Entry Door Replacement:</strong> A new front door returns 75% of its cost while creating a welcoming entrance.</li>
        <li><strong>Exterior Lighting:</strong> Updated fixtures for $200-$1,000 enhance safety and aesthetics.</li>
        <li><strong>Driveway/Walkway Repair:</strong> Fixing cracks and pressure washing can return 100%+ ROI for $300-$1,500.</li>
        <li><strong>Window Boxes/Planters:</strong> Inexpensive way to add charm for $100-$400.</li>
      </ul>
      <h3>Quick Wins for Immediate Impact</h3>
      <p>
        For sellers on a budget, focus on low-cost, high-impact improvements: pressure wash all exterior surfaces ($100-$300), add fresh mulch to beds ($200-$500), paint the front door a bold color ($50-$150), update house numbers and mailbox ($50-$200), and ensure lawn is mowed and edged ($0-$100).
      </p>
      <h3>Calculating Your Curb Appeal ROI</h3>
      <p>
        <strong>Formula:</strong> ROI = ((Increased Home Value - Total Improvement Costs) / Total Improvement Costs) × 100%
      </p>
      <p>
        Track all costs including materials, labor, and landscaping services. Compare your home's estimated value before and after improvements using comparable sales data or a professional appraisal.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeValueBefore",
        label: "Estimated Home Value Before Improvements",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "homeValueAfter",
        label: "Estimated Home Value After Improvements",
        type: "number",
        placeholder: "365000",
        defaultValue: "365000",
      },
      {
        name: "landscapingCost",
        label: "Landscaping Cost",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "paintingCost",
        label: "Painting Cost (Door, Trim, etc.)",
        type: "number",
        placeholder: "800",
        defaultValue: "800",
      },
      {
        name: "garageDoorCost",
        label: "Garage Door Replacement Cost",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
      {
        name: "entryDoorCost",
        label: "Entry Door Replacement Cost",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "lightingCost",
        label: "Exterior Lighting Cost",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "hardscapingCost",
        label: "Driveway/Walkway Repairs Cost",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "otherCost",
        label: "Other Improvements Cost",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Total Investment in Curb Appeal", isCurrency: true },
      { label: "Increase in Home Value", isCurrency: true },
      { label: "Net Gain from Improvements", isCurrency: true },
      { label: "Curb Appeal ROI", isCurrency: false },
      { label: "Value Recovered", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homeValueBefore = Number(data.homeValueBefore) || 0;
      const homeValueAfter = Number(data.homeValueAfter) || 0;
      const landscapingCost = Number(data.landscapingCost) || 0;
      const paintingCost = Number(data.paintingCost) || 0;
      const garageDoorCost = Number(data.garageDoorCost) || 0;
      const entryDoorCost = Number(data.entryDoorCost) || 0;
      const lightingCost = Number(data.lightingCost) || 0;
      const hardscapingCost = Number(data.hardscapingCost) || 0;
      const otherCost = Number(data.otherCost) || 0;

      const totalInvestment = landscapingCost + paintingCost + garageDoorCost + entryDoorCost + lightingCost + hardscapingCost + otherCost;

      if (homeValueBefore <= 0 || homeValueAfter <= 0 || totalInvestment <= 0) {
        return [
          { label: "Curb Appeal ROI", value: "Please enter valid home values and improvement costs.", type: "string" },
        ];
      }

      const valueIncrease = homeValueAfter - homeValueBefore;
      const netGain = valueIncrease - totalInvestment;
      const roi = (netGain / totalInvestment) * 100;
      const valueRecovered = (valueIncrease / totalInvestment) * 100;

      return [
        { label: "Total Investment in Curb Appeal", value: totalInvestment, type: "currency" },
        { label: "Increase in Home Value", value: valueIncrease, type: "currency" },
        { label: "Net Gain from Improvements", value: netGain, type: "currency" },
        { label: "Curb Appeal ROI", value: roi, type: "percentage" },
        { label: "Value Recovered", value: valueRecovered, type: "percentage" },
      ];
    },
  },
};
