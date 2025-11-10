import { CalculatorContent } from '@/types';

export const WASHINGTON_TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Washington Transfer Tax Calculator - Real Estate Excise Tax (REET)',
  description: 'Calculate Washington State real estate excise tax with graduated rates from 1.1% to 3.0% plus local REET fees',
  slug: 'washington-transfer-tax-calculator',
  icon: '🏛️',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Washington State Real Estate Excise Tax (REET)',
    content: `
    <h2>Washington State REET Guide</h2>
    <p>Washington State imposes a <strong>Real Estate Excise Tax (REET)</strong> on all real property sales. Unlike most states with flat transfer tax rates, Washington uses a <strong>graduated rate structure</strong> where higher-priced properties pay a higher percentage - ranging from 1.1% to 3.0% based on the selling price.</p>
    
    <h3>Washington State REET Graduated Rates (2025)</h3>
    <p>The state REET is calculated based on the full selling price using these tiers:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Selling Price</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">State REET Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$525,000 or less</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.1%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$525,001 - $1,525,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.28%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,525,001 - $3,025,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.75%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Over $3,025,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.0%</td>
      </tr>
    </table>
    <p><strong>Special Classifications:</strong> Agricultural land and timberland (with county assessor classification) pay a flat 1.28% rate regardless of sale price.</p>

    <h3>Local REET (Additional City/County Tax)</h3>
    <p>In addition to state REET, most cities and counties impose <strong>local real estate excise taxes</strong>:</p>
    <ul>
      <li><strong>REET 1:</strong> 0.25% (imposed by nearly all jurisdictions)</li>
      <li><strong>REET 2:</strong> Additional 0.25% (optional - many jurisdictions impose this)</li>
      <li><strong>Total Local REET:</strong> Typically 0.25% to 0.50%</li>
    </ul>
    <p><strong>Important:</strong> Local REET rates vary by city and county. Check with your county treasurer for exact rates. Most King County jurisdictions impose both REET 1 and REET 2 for a combined 0.50% local tax.</p>

    <h3>Example Calculations</h3>
    <p><strong>$400,000 Home (Typical Jurisdiction with 0.25% Local REET):</strong></p>
    <ul>
      <li>State REET: $4,400 (1.1%)</li>
      <li>Local REET: $1,000 (0.25%)</li>
      <li><strong>Total REET: $5,400</strong></li>
    </ul>
    
    <p><strong>$2,000,000 Home (with 0.50% Local REET):</strong></p>
    <ul>
      <li>State REET: $55,000 (2.75%)</li>
      <li>Local REET: $10,000 (0.50%)</li>
      <li><strong>Total REET: $65,000</strong></li>
    </ul>

    <p><strong>$4,000,000 Luxury Home (with 0.50% Local REET):</strong></p>
    <ul>
      <li>State REET: $120,000 (3.0%)</li>
      <li>Local REET: $20,000 (0.50%)</li>
      <li><strong>Total REET: $140,000</strong></li>
    </ul>

    <h3>Who Pays Washington REET?</h3>
    <p><strong>Typically the Seller</strong> pays the real estate excise tax in Washington State. However, this is negotiable between buyer and seller in the purchase agreement.</p>
    <p><strong>Legal Liability:</strong> While custom dictates the seller pays, the buyer is ultimately liable if the tax remains unpaid. The county will not record the deed until REET is paid in full.</p>

    <h3>When and How REET is Paid</h3>
    <p>REET must be paid <strong>at closing, before the deed is recorded</strong>. The title company or closing attorney typically:</p>
    <ul>
      <li>Calculates the exact REET amount</li>
      <li>Collects payment from the seller (or negotiated party)</li>
      <li>Files the Real Estate Excise Tax Affidavit with the county</li>
      <li>Records the deed after tax payment confirmation</li>
    </ul>
    <p>Payment is made to the county treasurer where the property is located.</p>

    <h3>What REET is Based On</h3>
    <p>REET is calculated on the <strong>full selling price</strong>, which includes:</p>
    <ul>
      <li>Cash payment</li>
      <li>Fair market value of property or services exchanged</li>
      <li>Liens and encumbrances assumed by the buyer</li>
      <li>Mortgages and debts assumed</li>
    </ul>
    <p>Essentially, anything the seller receives or is relieved of counts toward the selling price.</p>

    <h3>Washington vs Other States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Transfer Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.28-1.53%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,400-7,650</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pennsylvania</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
    </table>

    <h3>Exemptions and Reductions</h3>
    <p><strong>Full Exemptions (No REET):</strong></p>
    <ul>
      <li>Gifts with no consideration</li>
      <li>Transfers to settle an estate (executor deeds)</li>
      <li>Transfers pursuant to divorce or legal separation</li>
      <li>Government acquisitions for public use</li>
      <li>Nonprofit affordable housing transfers (qualifying)</li>
    </ul>
    
    <p><strong>Reduced Rates:</strong></p>
    <ul>
      <li>Agricultural land: 1.28% flat rate (with classification)</li>
      <li>Timberland: 1.28% flat rate (with classification)</li>
    </ul>

    <h3>Tax Deductibility</h3>
    <p><strong>NOT Tax-Deductible:</strong> REET cannot be deducted as a personal expense on your federal income taxes (unlike property taxes).</p>
    <p><strong>May Reduce Capital Gains:</strong> For investment properties, REET paid by the seller can be added to the cost basis, potentially reducing capital gains tax liability.</p>

    <h3>King County Specifics</h3>
    <p>King County (Seattle) has some of the highest transfer costs in Washington:</p>
    <ul>
      <li>State REET: 1.1% to 3.0% (graduated)</li>
      <li>Local REET: 0.50% (0.25% REET 1 + 0.25% REET 2)</li>
      <li><strong>Total: 1.60% to 3.50%</strong></li>
    </ul>
    <p>On a $800,000 Seattle home, expect approximately $10,240 in total REET ($6,400 state + $4,000 local).</p>

    <h3>How to Use This Calculator</h3>
    <p>Enter your property details to calculate:</p>
    <ul>
      <li>State REET based on graduated rate tiers</li>
      <li>Local REET (city/county) based on your jurisdiction</li>
      <li>Total real estate excise tax</li>
      <li>Percentage of sale price</li>
      <li>Comparison to other states</li>
    </ul>

    <h3>Tips for Washington Real Estate Sellers</h3>
    <p>Budget 1.5-3.5% of sale price for REET depending on property value. Check your local REET rate with the county treasurer. Consider REET costs when pricing your home. Factor REET into net proceeds calculations. In competitive markets, negotiate REET payment with buyer. Get pre-approval for agricultural classification if applicable. Consult a tax professional about capital gains implications. Review the Real Estate Excise Tax Affidavit carefully before signing.</p>
    
    <h3>Washington Seller Closing Costs Beyond REET</h3>
    <p>While REET is a significant expense, sellers also pay:</p>
    <ul>
      <li>Real estate commissions (typically 5-6%)</li>
      <li>Title insurance for buyer (negotiable)</li>
      <li>Escrow fees (split with buyer)</li>
      <li>Property tax prorations</li>
      <li>HOA transfer fees (if applicable)</li>
      <li>Outstanding liens or assessments</li>
      <li>Home warranty for buyer (if offered)</li>
    </ul>
    <p>A typical Washington seller on a $600,000 home pays $40,000-48,000 in total closing costs, with REET and commissions being the largest expenses.</p>

    <h3>Resources</h3>
    <p>Visit the Washington Department of Revenue REET page for official guidance. Check with your county treasurer for local REET rates. Use the WA DOR online REET calculator for verification. Consult a Washington real estate attorney for complex transactions. Review RCW 82.45 for complete statutory details.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'localREETRate',
        label: 'Local REET Rate (%)',
        type: 'number',
        defaultValue: 0.25,
      },
    ],
    results: [
      { label: 'State REET', isCurrency: true },
      { label: 'Local REET', isCurrency: true },
      { label: 'Total Real Estate Excise Tax', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
      { label: 'Savings vs Pennsylvania (2%)', isCurrency: true },
      { label: 'Savings vs Delaware (4%)', isCurrency: true },
    ],
    calculate: (values) => {
      const { salePrice, localREETRate } = values;

      let stateREETRate = 0;
      if (salePrice <= 525000) {
        stateREETRate = 0.011;
      } else if (salePrice <= 1525000) {
        stateREETRate = 0.0128;
      } else if (salePrice <= 3025000) {
        stateREETRate = 0.0275;
      } else {
        stateREETRate = 0.03;
      }

      const stateREET = salePrice * stateREETRate;
      const localREET = salePrice * (localREETRate / 100);
      const totalREET = stateREET + localREET;
      const percentageOfSale = (totalREET / salePrice) * 100;

      const pennsylvaniaTax = salePrice * 0.02;
      const delawareTax = salePrice * 0.04;
      const savingsVsPennsylvania = pennsylvaniaTax - totalREET;
      const savingsVsDelaware = delawareTax - totalREET;

      return [
        { label: 'State REET', value: stateREET.toFixed(2), isCurrency: true },
        { label: 'Local REET', value: localREET.toFixed(2), isCurrency: true },
        { label: 'Total Real Estate Excise Tax', value: totalREET.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(3)}%` },
        { label: 'Savings vs Pennsylvania (2%)', value: savingsVsPennsylvania.toFixed(2), isCurrency: true },
        { label: 'Savings vs Delaware (4%)', value: savingsVsDelaware.toFixed(2), isCurrency: true },
      ];
    },
  },
};
