import { CalculatorContent } from '@/types';

export const WHOLESALE_REAL_ESTATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Wholesale Real Estate Calculator',
  description:
    'A tool for real estate wholesalers to quickly estimate the potential profitability of a deal. It helps calculate the maximum allowable offer (MAO) to a seller, ensuring a profitable exit strategy when selling the contract to an end buyer.',
  article: `
      <p>A wholesale real estate calculator is an indispensable tool for investors who specialize in wholesaling properties. This calculator is designed to help you quickly and accurately determine the maximum offer you can make on a property to ensure a profitable deal. By inputting key figures such as the After Repair Value (ARV), estimated repair costs, and your desired wholesale fee, you can calculate the Maximum Allowable Offer (MAO). This ensures that you leave enough room for the end buyer to make a profit, which is crucial for a successful wholesale transaction.</p>
    <h2>Analyzing a Wholesale Real Estate Deal</h2>
    <p>Wholesaling is a real estate investment strategy where you get a property under contract and then sell that contract to another buyer, usually a cash buyer or a fix-and-flip investor. The goal is to make a profit, known as a wholesale fee, without ever taking ownership of the property. This calculator will help you analyze a potential wholesale deal.</p>

    <h3>The Wholesale Formula</h3>
    <p>The key to a successful wholesale deal is to get the property under contract at a price that is low enough to be attractive to an end buyer. The formula for determining your Maximum Allowable Offer (MAO) is:</p>
    <p><strong>MAO = (After Repair Value * Investor\'s Percentage) - Rehab Costs - Your Wholesale Fee</strong></p>

    <h3>Key Terms in Wholesaling</h3>
    <ul>
      <li><strong>After Repair Value (ARV):</strong> The estimated market value of the property after all necessary repairs and renovations are completed. This is the most important number in the calculation.</li>
      <li><strong>Investor\'s Percentage:</strong> The percentage of the ARV that a cash buyer is typically willing to pay. This is often around 70%, but it can vary depending on the market.</li>
      <li><strong>Rehab Costs:</strong> The estimated cost of all repairs and renovations needed to bring the property to its ARV.</li>
      <li><strong>Wholesale Fee:</strong> The profit you want to make on the deal.</li>
    </ul>

    <h3>Steps in a Wholesale Deal</h3>
    <ol>
      <li><strong>Find a Motivated Seller:</strong> Look for homeowners who need to sell their property quickly, often due to financial distress, divorce, or an inherited property.</li>
      <li><strong>Get the Property Under Contract:</strong> Negotiate a purchase price with the seller and sign a purchase agreement. Your offer should be your MAO or lower.</li>
      <li><strong>Find a Cash Buyer:</strong> Market the property to your network of cash buyers and investors.</li>
      <li><strong>Assign the Contract:</strong> Once you find a buyer, you will assign your rights in the purchase agreement to them for a fee. This is your wholesale fee.</li>
      <li><strong>Closing:</strong> The end buyer closes on the property with the original seller, and you get paid your wholesale fee.</li>
    </ol>

    <h3>How to Use the Wholesale Calculator</h3>
    <p>This calculator will help you determine your Maximum Allowable Offer (MAO) for a potential wholesale deal. You will need to provide:</p>
    <ul>
      <li>The After Repair Value (ARV) of the property.</li>
      <li>The estimated rehab costs.</li>
      <li>Your desired wholesale fee.</li>
    </ul>
    <p>The calculator will then tell you the maximum price you can offer to the seller to make the deal work. This is a crucial step in ensuring a profitable wholesale transaction.</p>
  `,
  calculator: {
    fields: [
      {
        name: 'arv',
        label: 'After Repair Value (ARV)',
        type: 'number',
        defaultValue: 200000,
      },
      {
        name: 'rehabCosts',
        label: 'Rehabilitation Costs',
        type: 'number',
        defaultValue: 30000,
      },
      {
        name: 'wholesaleFee',
        label: 'Desired Wholesale Fee',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'investorPercentage',
        label: "Investor's Purchase Percentage (% of ARV)",
        type: 'number',
        defaultValue: 70,
      },
    ],
    calculate: (values: any) => {
      const { arv, rehabCosts, wholesaleFee, investorPercentage } = values;
      const mao = (arv * (investorPercentage / 100)) - rehabCosts - wholesaleFee;

      return [
        { label: 'Maximum Allowable Offer (MAO)', value: mao.toFixed(2), isCurrency: true },
      ];
    },
  },
};