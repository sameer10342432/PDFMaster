import { CalculatorContent } from '@/types';

export const TRANSFER_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'State-Specific Real Estate Transfer Tax Calculator',
  description: 'Calculate real estate transfer taxes and recording fees by state',
  slug: 'transfer-tax-calculator',
  icon: '📜',
  category: 'Seller Tools',
  article: {
    title: 'Understanding Real Estate Transfer Taxes',
    content: `
    <h2>Real Estate Transfer Tax Guide</h2>
    <p>Transfer taxes are fees charged by state, county, or municipal governments when property ownership changes hands. These one-time taxes are typically paid at closing and vary significantly by location.</p>
    
    <h3>Who Pays Transfer Taxes?</h3>
    <ul>
      <li><strong>Seller:</strong> Most commonly pays transfer tax in traditional markets</li>
      <li><strong>Buyer:</strong> Sometimes responsible, especially in buyer's markets</li>
      <li><strong>Split:</strong> Many areas allow negotiation between buyer and seller</li>
      <li><strong>Local Custom:</strong> Follow regional norms unless contract specifies otherwise</li>
      <li><strong>Exemptions:</strong> Gifts, inheritance, and certain transfers may be exempt</li>
    </ul>

    <h3>State Transfer Tax Rates (Examples)</h3>
    <p><strong>High-Tax States:</strong></p>
    <p>Delaware: 4% (2% buyer, 2% seller)</p>
    <p>Washington: 1.78% state tax plus local taxes</p>
    <p>Pennsylvania: 2% (1% state, 1% local)</p>
    <p>Vermont: 1.25-1.45% depending on value</p>
    
    <p><strong>Moderate-Tax States:</strong></p>
    <p>New York: 0.4% + mansion tax over $1M</p>
    <p>Connecticut: 0.75% (higher for luxury homes)</p>
    <p>Illinois: 0.1% state + local varies</p>
    
    <p><strong>Low/No-Tax States:</strong></p>
    <p>Texas: No state transfer tax (possible local fees)</p>
    <p>Florida: $0.70 per $100 (0.7%)</p>
    <p>Indiana: No state transfer tax</p>

    <h3>How to Use This Calculator</h3>
    <p>Select your state, enter the property sale price, and indicate who pays the tax. The calculator provides:</p>
    <ul>
      <li>State transfer tax amount</li>
      <li>Typical local/county transfer tax</li>
      <li>Recording fees and documentation stamps</li>
      <li>Total transfer costs</li>
      <li>Cost per $1,000 of sale price</li>
    </ul>

    <h3>Additional Transfer Costs</h3>
    <p><strong>Recording Fees:</strong> $10-150 to record deed with county recorder</p>
    <p><strong>Documentary Stamps:</strong> State-specific tax on recorded documents</p>
    <p><strong>Mansion Tax:</strong> Additional tax on high-value properties in some states (NY, NJ, CT)</p>
    <p><strong>County/City Taxes:</strong> Local governments may impose additional transfer taxes</p>
    
    <h3>Transfer Tax Exemptions</h3>
    <p>Common exemptions include transfers between spouses, gifts to family members, inheritance and estate transfers, transfers to/from trusts with same beneficiaries, and certain nonprofit/government transfers. Refinancing typically does not trigger transfer tax. Always verify exemptions with your title company or attorney.</p>
    
    <h3>Regional Variations</h3>
    <p>Some cities impose their own transfer taxes beyond state rates. Philadelphia charges 4% total (1% state, 3% city). San Francisco has progressive rates from 0.5% to 6% based on value. Chicago adds $3.75 per $500 to Illinois state tax. Always check state, county, and city rates for complete picture.</p>
    
    <h3>Planning for Transfer Taxes</h3>
    <p>Budget transfer taxes in your closing cost estimates. Consider negotiating who pays in the purchase contract. Factor into net proceeds calculations for sellers. Some states allow seller credits to cover buyer's transfer taxes. In high-tax states, this can significantly impact deal economics.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'state',
        label: 'State',
        type: 'select',
        options: [
          { value: 'delaware', label: 'Delaware (4%)' },
          { value: 'washington', label: 'Washington (1.78%)' },
          { value: 'pennsylvania', label: 'Pennsylvania (2%)' },
          { value: 'vermont', label: 'Vermont (1.45%)' },
          { value: 'new_york', label: 'New York (0.4% + mansion tax)' },
          { value: 'connecticut', label: 'Connecticut (0.75%)' },
          { value: 'illinois', label: 'Illinois (0.1%)' },
          { value: 'florida', label: 'Florida (0.7%)' },
          { value: 'california', label: 'California (0.11%)' },
          { value: 'new_jersey', label: 'New Jersey (varies)' },
          { value: 'massachusetts', label: 'Massachusetts (varies)' },
          { value: 'texas', label: 'Texas (0%)' },
          { value: 'custom', label: 'Custom Rate' },
        ],
        defaultValue: 'florida',
      },
      {
        name: 'customRate',
        label: 'Custom Transfer Tax Rate (%)',
        type: 'number',
        defaultValue: 1.0,
      },
      {
        name: 'salePrice',
        label: 'Property Sale Price',
        type: 'number',
        defaultValue: 500000,
      },
      {
        name: 'localTaxRate',
        label: 'Local/County Tax Rate (%)',
        type: 'number',
        defaultValue: 0.5,
      },
      {
        name: 'recordingFee',
        label: 'Recording & Documentation Fees',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'mansionTax',
        label: 'Mansion Tax (for high-value properties)',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [
      { label: 'State Transfer Tax', isCurrency: true },
      { label: 'Local/County Transfer Tax', isCurrency: true },
      { label: 'Recording Fees', isCurrency: true },
      { label: 'Mansion Tax (if applicable)', isCurrency: true },
      { label: 'Total Transfer Costs', isCurrency: true },
      { label: 'Cost Per $1,000', isCurrency: true },
      { label: 'Percentage of Sale Price', isCurrency: false },
    ],
    calculate: (values) => {
      const {
        state,
        customRate,
        salePrice,
        localTaxRate,
        recordingFee,
        mansionTax,
      } = values;

      // State transfer tax rates
      const stateRates: Record<string, number> = {
        delaware: 4.0,
        washington: 1.78,
        pennsylvania: 2.0,
        vermont: 1.45,
        new_york: 0.4,
        connecticut: 0.75,
        illinois: 0.1,
        florida: 0.7,
        california: 0.11,
        new_jersey: 1.0,
        massachusetts: 0.5,
        texas: 0,
        custom: customRate,
      };
      
      const stateRate = stateRates[state as string] || customRate;
      const stateTransferTax = salePrice * (stateRate / 100);
      const localTransferTax = salePrice * (localTaxRate / 100);
      const totalTransferCosts = stateTransferTax + localTransferTax + recordingFee + mansionTax;
      const costPer1000 = (totalTransferCosts / salePrice) * 1000;
      const percentageOfSale = (totalTransferCosts / salePrice) * 100;

      return [
        { label: 'State Transfer Tax', value: stateTransferTax.toFixed(2), isCurrency: true },
        { label: 'Local/County Transfer Tax', value: localTransferTax.toFixed(2), isCurrency: true },
        { label: 'Recording Fees', value: recordingFee.toFixed(2), isCurrency: true },
        { label: 'Mansion Tax (if applicable)', value: mansionTax.toFixed(2), isCurrency: true },
        { label: 'Total Transfer Costs', value: totalTransferCosts.toFixed(2), isCurrency: true },
        { label: 'Cost Per $1,000', value: costPer1000.toFixed(2), isCurrency: true },
        { label: 'Percentage of Sale Price', value: `${percentageOfSale.toFixed(2)}%` },
      ];
    },
  },
};
