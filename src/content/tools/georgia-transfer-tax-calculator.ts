import { CalculatorContent } from '@/types';

export const GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Georgia Transfer Tax Calculator - State & County Intangible Tax',
  description: 'Calculate Georgia real estate transfer tax and intangible recording tax',
  slug: 'georgia-transfer-tax-calculator',
  icon: '🍑',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Georgia Real Estate Transfer Tax',
    content: `
    <h2>Georgia Transfer Tax Guide</h2>
    <p>Georgia has a unique transfer tax structure with a low state rate of <strong>$1 per $1,000 (0.1%)</strong> plus an intangible recording tax on the loan amount. Understanding both taxes is important for accurate closing cost estimates.</p>
    
    <h3>Georgia State Transfer Tax</h3>
    <p><strong>State Rate:</strong> $1 per $1,000 of sale price (0.1%)</p>
    <p>This is one of the lowest state transfer tax rates in the country. On a $300,000 home, the state transfer tax is only $300.</p>

    <h3>Georgia Intangible Recording Tax</h3>
    <p>Separate from the transfer tax, Georgia charges an <strong>intangible recording tax</strong> on new mortgages:</p>
    <p><strong>Rate:</strong> $1.50 per $500 of loan amount (0.3%)</p>
    <p>This tax applies to:</p>
    <ul>
      <li>New purchase mortgages</li>
      <li>Refinance loans</li>
      <li>Home equity loans and lines of credit</li>
      <li>Commercial property loans</li>
    </ul>
    <p>Cash buyers do not pay the intangible tax.</p>

    <h3>County Transfer Tax (Select Counties)</h3>
    <p>Some Georgia counties add their own transfer tax:</p>
    <p><strong>Fulton County (Atlanta):</strong> No additional county tax</p>
    <p><strong>DeKalb County:</strong> No additional county tax</p>
    <p><strong>Gwinnett County:</strong> No additional county tax</p>
    <p><strong>Cobb County:</strong> No additional county tax</p>
    <p>Most Georgia counties do NOT charge additional transfer taxes beyond the state rate.</p>

    <h3>Who Pays Georgia Transfer Tax?</h3>
    <p><strong>Seller typically pays:</strong> State transfer tax ($1 per $1,000)</p>
    <p><strong>Buyer typically pays:</strong> Intangible recording tax (if financing)</p>
    <p>These arrangements are negotiable in the purchase contract.</p>

    <h3>Georgia Recording Fees</h3>
    <p>County recording fees in Georgia:</p>
    <p><strong>Deed Recording:</strong> $25-$60</p>
    <p><strong>Security Deed Recording:</strong> $25-$60</p>
    <p><strong>Additional Pages:</strong> $2-$5 per page</p>

    <h3>Example: $350,000 Home with $280,000 Loan</h3>
    <p><strong>Seller's Costs:</strong></p>
    <ul>
      <li>State Transfer Tax: $350,000 ÷ 1,000 × $1 = $350</li>
      <li>Recording Fee: $30</li>
      <li><strong>Total Seller: $380 (0.11%)</strong></li>
    </ul>
    <p><strong>Buyer's Costs:</strong></p>
    <ul>
      <li>Intangible Tax: $280,000 ÷ 500 × $1.50 = $840</li>
      <li>Recording Fees: $30</li>
      <li><strong>Total Buyer: $870</strong></li>
    </ul>
    <p><strong>Combined Transfer Costs: $1,250 (0.36% of purchase price)</strong></p>

    <h3>Georgia Transfer Tax Exemptions</h3>
    <p>Common exemptions include:</p>
    <ul>
      <li>Transfers between spouses</li>
      <li>Gifts to family members (with proper documentation)</li>
      <li>Transfers to/from government entities</li>
      <li>Certain court-ordered transfers</li>
      <li>Transfers to secure or release debt</li>
    </ul>

    <h3>Georgia vs Other Southern States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">On $300K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Georgia</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,100</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>Georgia state transfer tax</li>
      <li>Intangible recording tax (if financing)</li>
      <li>Recording fees</li>
      <li>Total seller and buyer costs</li>
      <li>Combined transfer costs</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 350000,
      },
      {
        name: 'loanAmount',
        label: 'Mortgage/Loan Amount',
        type: 'number',
        defaultValue: 280000,
      },
      {
        name: 'recordingFees',
        label: 'Recording Fees',
        type: 'number',
        defaultValue: 60,
      },
    ],
    results: [
      { label: 'GA State Transfer Tax (Seller)', isCurrency: true },
      { label: 'Intangible Recording Tax (Buyer)', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Total Seller Costs', isCurrency: true },
      { label: 'Total Buyer Costs', isCurrency: true },
      { label: 'Combined Transfer Costs', isCurrency: true },
      { label: 'Transfer Tax as % of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const { salePrice, loanAmount, recordingFees } = values;

      const stateTransferTax = (salePrice / 1000) * 1; // $1 per $1,000
      const intangibleTax = loanAmount > 0 ? (loanAmount / 500) * 1.50 : 0; // $1.50 per $500
      
      const totalSellerCosts = stateTransferTax + (recordingFees / 2);
      const totalBuyerCosts = intangibleTax + (recordingFees / 2);
      const combinedCosts = stateTransferTax + intangibleTax + recordingFees;
      const percentageOfSale = (stateTransferTax / salePrice) * 100;

      return [
        { label: 'GA State Transfer Tax (Seller)', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'Intangible Recording Tax (Buyer)', value: intangibleTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFees.toFixed(2), isCurrency: true },
        { label: 'Total Seller Costs', value: totalSellerCosts.toFixed(2), isCurrency: true },
        { label: 'Total Buyer Costs', value: totalBuyerCosts.toFixed(2), isCurrency: true },
        { label: 'Combined Transfer Costs', value: combinedCosts.toFixed(2), isCurrency: true },
        { label: 'Transfer Tax as % of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
