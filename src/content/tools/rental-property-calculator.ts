import { CalculatorContent } from "@/types/calculators";

export const rentalPropertyCalculator: CalculatorContent = {
  title: "Rental Property Calculator",
  description: "Analyze the profitability of a rental property.",
  category: "Real Estate",
  article: `
    <h2>Analyzing Rental Properties for Maximum Returns</h2>
    <p>
      A rental property calculator is an essential tool for any real estate investor. It helps you evaluate the financial performance of a potential rental property, ensuring you make a sound investment decision. This calculator will help you analyze key metrics like cash flow, cap rate, and cash-on-cash return.
    </p>
    <h3>Key Inputs for Rental Property Analysis</h3>
    <ul>
      <li><strong>Purchase Price:</strong> The total cost to acquire the property.</li>
      <li><strong>Monthly Rent:</strong> The estimated gross monthly rental income.</li>
      <li><strong>Property Tax:</strong> The annual property tax bill.</li>
      <li><strong>Insurance:</strong> The annual cost of landlord insurance.</li>
      <li><strong>Maintenance:</strong> A percentage of the rent set aside for repairs and maintenance (typically 5-10%).</li>
      <li><strong>Vacancy:</strong> A percentage of the rent to account for periods when the property is vacant (typically 5-10%).</li>
    </ul>
    <h3>Understanding the Results</h3>
    <p>
      <strong>Cash Flow:</strong> This is your net income after all expenses have been paid. Positive cash flow is essential for a successful rental property.
    </p>
    <p>
      <strong>Cap Rate:</strong> The capitalization rate is the rate of return on a real estate investment property based on the income that the property is expected to generate. It is calculated by dividing the net operating income by the property asset value. A higher cap rate generally indicates a better return.
    </p>
    <p>
      <strong>Cash-on-Cash Return:</strong> This metric calculates the cash income earned on the cash invested in a property. It's a key metric for investors who use financing, as it measures the return on their actual cash investment.
    </p>
  `,
  calculator: {
    fields: [],
    calculation: async (data) => {
      return { result: 0 };
    },
  },
};