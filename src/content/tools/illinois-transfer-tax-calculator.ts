import { CalculatorContent } from '@/types';

export const ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Illinois Transfer Tax Calculator - State & Local Transfer Tax',
  description: 'Calculate Illinois real estate transfer tax, county transfer tax, and Chicago-specific transfer rates',
  slug: 'illinois-transfer-tax-calculator',
  icon: '🌆',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Illinois Real Estate Transfer Tax',
    content: `
    <h2>Illinois Transfer Tax Guide</h2>
    <p>Illinois has a relatively low state transfer tax of <strong>$0.50 per $500</strong> (0.1% of sale price), but local transfer taxes in cities like Chicago can significantly increase the total cost. Understanding both state and local rates is essential for accurate closing cost estimates.</p>
    
    <h3>Illinois State Transfer Tax Rate</h3>
    <p><strong>State Rate:</strong> $0.50 per $500 of value (0.1% of sale price)</p>
    <p>This is one of the lowest state transfer tax rates in the country. On a $300,000 home, the Illinois state transfer tax is only $300.</p>

    <h3>Chicago Transfer Tax (Much Higher)</h3>
    <p>Chicago imposes significantly higher transfer tax rates:</p>
    <p><strong>Standard Rate:</strong> $3.75 per $500 (0.75% of sale price)</p>
    <p><strong>Properties over $1 million:</strong> $5.25 per $500 (1.05% of sale price)</p>
    <p>Combined with the state tax, Chicago properties face:</p>
    <ul>
      <li>Under $1M: 0.85% total (0.1% state + 0.75% city)</li>
      <li>Over $1M: 1.15% total (0.1% state + 1.05% city)</li>
    </ul>

    <h3>Other Illinois Counties</h3>
    <p>Many Illinois counties add their own transfer taxes:</p>
    <p><strong>Cook County:</strong> $0.50 per $500 (0.1%) - matches state rate</p>
    <p><strong>DuPage County:</strong> $0.25 per $500 (0.05%)</p>
    <p><strong>Lake County:</strong> $0.50 per $500 (0.1%)</p>
    <p><strong>Will County:</strong> $0.50 per $500 (0.1%)</p>
    <p>Combined state + county rates typically range from 0.15% to 0.2% outside Chicago.</p>

    <h3>Who Pays Illinois Transfer Tax?</h3>
    <p>In Illinois, the <strong>seller traditionally pays</strong> all transfer taxes. However, this can be negotiated in the purchase contract. In competitive markets, buyers sometimes agree to pay transfer taxes to make their offers more attractive.</p>

    <h3>Illinois Recording Fees</h3>
    <p>In addition to transfer taxes, counties charge recording fees:</p>
    <p><strong>Deed Recording:</strong> $50-$125</p>
    <p><strong>Mortgage Recording:</strong> $75-$150</p>
    <p><strong>Additional Documents:</strong> $25-$50 each</p>

    <h3>Example: $400,000 Home in Chicago</h3>
    <p><strong>State Transfer Tax:</strong> $400,000 × 0.001 = $400</p>
    <p><strong>Chicago Transfer Tax:</strong> $400,000 × 0.0075 = $3,000</p>
    <p><strong>Cook County Transfer Tax:</strong> $400,000 × 0.001 = $400</p>
    <p><strong>Recording Fees:</strong> $100</p>
    <p><strong>Total Transfer Costs: $3,900 (0.975%)</strong></p>

    <h3>Illinois Transfer Tax Declaration</h3>
    <p>All Illinois real estate transfers require filing:</p>
    <ul>
      <li><strong>PTAX-203:</strong> Illinois Real Estate Transfer Declaration</li>
      <li>Must be filed with deed recording</li>
      <li>Includes sale price and property details</li>
      <li>Required even if transaction is exempt</li>
    </ul>

    <h3>Transfer Tax Exemptions</h3>
    <p>Common exemptions include:</p>
    <ul>
      <li>Transfers between spouses or family members (gift)</li>
      <li>Transfers to secure or release debt</li>
      <li>Transfers to/from government entities</li>
      <li>Certain court-ordered transfers</li>
      <li>Transfers with no monetary consideration</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Select your location (Chicago, Cook County, or other Illinois county), enter the sale price, and calculate:</p>
    <ul>
      <li>Illinois state transfer tax</li>
      <li>City/county transfer tax</li>
      <li>Total combined transfer tax</li>
      <li>Recording fees</li>
      <li>Total closing costs related to transfer</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'location',
        label: 'Property Location',
        type: 'select',
        options: [
          { value: 'chicago_under_1m', label: 'Chicago (Under $1M)' },
          { value: 'chicago_over_1m', label: 'Chicago ($1M and above)' },
          { value: 'cook_county', label: 'Cook County (Outside Chicago)' },
          { value: 'other_county', label: 'Other Illinois County' },
        ],
        defaultValue: 'chicago_under_1m',
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'countyRate',
        label: 'County Transfer Tax Rate (%) for Other Counties',
        type: 'number',
        defaultValue: 0.1,
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 100,
      },
    ],
    results: [
      { label: 'Illinois State Transfer Tax', isCurrency: true },
      { label: 'City/County Transfer Tax', isCurrency: true },
      { label: 'Total Transfer Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Transfer Tax as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { location, salePrice, countyRate, recordingFees } = values;

      const stateRate = 0.001; // $0.50 per $500 = 0.1%
      let localRate = 0;

      if (location === 'chicago_under_1m') {
        localRate = 0.0075 + 0.001; // Chicago 0.75% + Cook County 0.1%
      } else if (location === 'chicago_over_1m') {
        localRate = 0.0105 + 0.001; // Chicago 1.05% + Cook County 0.1%
      } else if (location === 'cook_county') {
        localRate = 0.001; // Cook County 0.1%
      } else {
        localRate = countyRate / 100;
      }

      const stateTransferTax = salePrice * stateRate;
      const localTransferTax = salePrice * localRate;
      const totalTransferTax = stateTransferTax + localTransferTax;
      const totalCosts = totalTransferTax + recordingFees;
      const percentageOfSale = (totalTransferTax / salePrice) * 100;

      return [
        { label: 'Illinois State Transfer Tax', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'City/County Transfer Tax', value: localTransferTax.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Tax', value: totalTransferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Tax as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
