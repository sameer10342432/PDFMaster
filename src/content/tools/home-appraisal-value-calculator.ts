import { CalculatorContent } from '@/types';

export const HOME_APPRAISAL_VALUE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Appraisal Value Calculator',
  description: 'Estimate your home\'s market value using multiple appraisal methods including comparable sales and square footage.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'home-appraisal-value-calculator',
  article: {
    title: "Understanding Home Appraisal and Valuation",
    content: `
      <h2>What is a Home Appraisal?</h2>
      <p>
        A home appraisal is a professional, unbiased estimate of your home's market value. Lenders require appraisals before approving mortgages to ensure the property value justifies the loan amount. For sellers, understanding your home's appraised value helps set a realistic listing price.
      </p>
      <h3>How Appraisers Determine Home Value</h3>
      <ul>
        <li><strong>Comparable Sales (Comps):</strong> Recent sales of similar homes in your area within the last 3-6 months.</li>
        <li><strong>Home Characteristics:</strong> Square footage, bedrooms, bathrooms, lot size, age, and condition.</li>
        <li><strong>Location Factors:</strong> Neighborhood quality, school district, proximity to amenities.</li>
        <li><strong>Improvements:</strong> Updated kitchens, bathrooms, new roof, HVAC, flooring.</li>
        <li><strong>Market Conditions:</strong> Current supply and demand in your local market.</li>
      </ul>
      <h3>Appraisal Methods</h3>
      <p>
        <strong>Sales Comparison Approach:</strong> The most common method for residential properties. Compares your home to 3-5 recently sold comparable properties (comps) and adjusts for differences in features, size, and condition.
      </p>
      <p>
        <strong>Cost Approach:</strong> Calculates what it would cost to rebuild your home from scratch, minus depreciation, plus land value. Primarily used for new construction or unique properties.
      </p>
      <p>
        <strong>Income Approach:</strong> Used for rental properties. Based on the income the property generates. Calculates value by dividing net operating income by capitalization rate.
      </p>
      <h3>Factors That Increase Home Value</h3>
      <ul>
        <li>Kitchen and bathroom renovations (highest ROI improvements)</li>
        <li>Additional square footage (finished basement, additions)</li>
        <li>Curb appeal and landscaping</li>
        <li>Energy-efficient upgrades (new windows, insulation, HVAC)</li>
        <li>Updated flooring and fresh paint</li>
        <li>Modern fixtures and finishes</li>
        <li>Improved outdoor living space (deck, patio)</li>
      </ul>
      <h3>Factors That Decrease Home Value</h3>
      <ul>
        <li>Deferred maintenance and needed repairs</li>
        <li>Outdated kitchens and bathrooms</li>
        <li>Poor floor plan or functional obsolescence</li>
        <li>Environmental issues (mold, water damage)</li>
        <li>External factors (busy road, power lines, commercial neighbors)</li>
        <li>Excess personalization or over-improvement for neighborhood</li>
      </ul>
      <h3>When to Get a Professional Appraisal</h3>
      <p>
        While online estimators provide quick values, consider a professional appraisal ($300-$500) when: refinancing your mortgage, selling your home, disputing property taxes, settling an estate, or removing PMI. Professional appraisers physically inspect your home and provide detailed reports accepted by lenders and courts.
      </p>
      <h3>Improving Appraisal Value</h3>
      <p>
        Before an appraisal: complete minor repairs, deep clean and declutter, provide list of recent improvements, compile comparable sales data, ensure all systems are functional, and improve curb appeal. These efforts can increase your appraisal by 2-5%.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeSquareFeet",
        label: "Home Square Footage",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "bedrooms",
        label: "Number of Bedrooms",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "bathrooms",
        label: "Number of Bathrooms",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "lotSize",
        label: "Lot Size (Square Feet)",
        type: "number",
        placeholder: "7500",
        defaultValue: "7500",
      },
      {
        name: "homeAge",
        label: "Home Age (Years)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "comp1Price",
        label: "Comparable 1 Sale Price",
        type: "number",
        placeholder: "380000",
        defaultValue: "380000",
      },
      {
        name: "comp1SquareFeet",
        label: "Comparable 1 Square Feet",
        type: "number",
        placeholder: "1950",
        defaultValue: "1950",
      },
      {
        name: "comp2Price",
        label: "Comparable 2 Sale Price",
        type: "number",
        placeholder: "395000",
        defaultValue: "395000",
      },
      {
        name: "comp2SquareFeet",
        label: "Comparable 2 Square Feet",
        type: "number",
        placeholder: "2050",
        defaultValue: "2050",
      },
      {
        name: "comp3Price",
        label: "Comparable 3 Sale Price",
        type: "number",
        placeholder: "405000",
        defaultValue: "405000",
      },
      {
        name: "comp3SquareFeet",
        label: "Comparable 3 Square Feet",
        type: "number",
        placeholder: "2100",
        defaultValue: "2100",
      },
      {
        name: "conditionAdjustment",
        label: "Condition Adjustment (% Better/Worse than Comps)",
        type: "number",
        placeholder: "0",
        defaultValue: "0",
      },
    ],
    results: [
      { label: "Average Price Per Square Foot", isCurrency: true },
      { label: "Estimated Home Value (Comps Method)", isCurrency: true },
      { label: "Condition-Adjusted Value", isCurrency: true },
      { label: "Estimated Value Range", isString: true },
    ],
    calculate: (data: any) => {
      const homeSquareFeet = Number(data.homeSquareFeet) || 0;
      const bedrooms = Number(data.bedrooms) || 0;
      const bathrooms = Number(data.bathrooms) || 0;
      const lotSize = Number(data.lotSize) || 0;
      const homeAge = Number(data.homeAge) || 0;
      const comp1Price = Number(data.comp1Price) || 0;
      const comp1SquareFeet = Number(data.comp1SquareFeet) || 0;
      const comp2Price = Number(data.comp2Price) || 0;
      const comp2SquareFeet = Number(data.comp2SquareFeet) || 0;
      const comp3Price = Number(data.comp3Price) || 0;
      const comp3SquareFeet = Number(data.comp3SquareFeet) || 0;
      const conditionAdjustment = Number(data.conditionAdjustment) || 0;

      if (homeSquareFeet <= 0) {
        return [
          { label: "Estimated Home Value", value: "Please enter valid home square footage.", type: "string" },
        ];
      }

      const comps = [];
      if (comp1Price > 0 && comp1SquareFeet > 0) {
        comps.push({ price: comp1Price, sqft: comp1SquareFeet, pricePerSqFt: comp1Price / comp1SquareFeet });
      }
      if (comp2Price > 0 && comp2SquareFeet > 0) {
        comps.push({ price: comp2Price, sqft: comp2SquareFeet, pricePerSqFt: comp2Price / comp2SquareFeet });
      }
      if (comp3Price > 0 && comp3SquareFeet > 0) {
        comps.push({ price: comp3Price, sqft: comp3SquareFeet, pricePerSqFt: comp3Price / comp3SquareFeet });
      }

      if (comps.length === 0) {
        return [
          { label: "Estimated Home Value", value: "Please provide at least one comparable sale.", type: "string" },
        ];
      }

      const avgPricePerSqFt = comps.reduce((sum, comp) => sum + comp.pricePerSqFt, 0) / comps.length;
      const baseEstimate = avgPricePerSqFt * homeSquareFeet;
      const conditionAdjustedValue = baseEstimate * (1 + conditionAdjustment / 100);

      const lowRange = conditionAdjustedValue * 0.95;
      const highRange = conditionAdjustedValue * 1.05;
      const valueRange = `$${Math.round(lowRange).toLocaleString()} - $${Math.round(highRange).toLocaleString()}`;

      return [
        { label: "Average Price Per Square Foot", value: avgPricePerSqFt, type: "currency" },
        { label: "Estimated Home Value (Comps Method)", value: baseEstimate, type: "currency" },
        { label: "Condition-Adjusted Value", value: conditionAdjustedValue, type: "currency" },
        { label: "Estimated Value Range", value: valueRange, type: "string" },
      ];
    },
  },
};
