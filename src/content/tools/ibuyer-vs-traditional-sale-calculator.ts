import { CalculatorContent } from '@/types';

export const IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'iBuyer vs Traditional Sale Calculator',
  description: 'Compare instant cash offers from iBuyers (Opendoor, Offerpad, Zillow) versus traditional home sales through an agent.',
  icon: 'Icon',
  category: 'Seller Tools',
  slug: 'ibuyer-vs-traditional-sale-calculator',
  article: {
    title: "iBuyer vs Traditional Sale: Understanding Your Options",
    content: `
      <h2>What is an iBuyer?</h2>
      <p>
        iBuyers (instant buyers) like Opendoor, Offerpad, and Zillow Offers use algorithms to make instant cash offers on homes. They provide convenience and speed but typically offer 3-12% below market value and charge service fees of 5-7%, similar to agent commissions.
      </p>
      <h3>How iBuyers Work</h3>
      <ol>
        <li><strong>Request an Offer:</strong> Submit your home details online through the iBuyer platform.</li>
        <li><strong>Receive Instant Offer:</strong> Get a preliminary offer within 24-48 hours based on automated valuation.</li>
        <li><strong>Home Assessment:</strong> iBuyer inspects the property and may adjust the offer based on condition.</li>
        <li><strong>Review Final Offer:</strong> Final offer includes deductions for repairs and service fee (5-7%).</li>
        <li><strong>Choose Closing Date:</strong> Close in as little as 7-14 days or select a later date (up to 60-90 days).</li>
        <li><strong>Sell to iBuyer:</strong> Direct sale with no showings, open houses, or contingencies.</li>
      </ol>
      <h3>iBuyer Pros</h3>
      <ul>
        <li><strong>Speed:</strong> Close in 1-2 weeks instead of 30-60+ days.</li>
        <li><strong>Convenience:</strong> No showings, staging, or repairs needed.</li>
        <li><strong>Certainty:</strong> Guaranteed sale with no contingencies or financing fall-through.</li>
        <li><strong>Flexible Timeline:</strong> Choose your move-out date within a wide window.</li>
        <li><strong>As-Is Sale:</strong> Sell without making any repairs or improvements.</li>
      </ul>
      <h3>iBuyer Cons</h3>
      <ul>
        <li><strong>Lower Offers:</strong> Typically 3-12% below market value to account for iBuyer's risk and resale costs.</li>
        <li><strong>Service Fees:</strong> 5-7% service fee similar to agent commission but with lower sale price.</li>
        <li><strong>Repair Deductions:</strong> iBuyer deducts estimated repair costs from the offer after inspection.</li>
        <li><strong>Limited Markets:</strong> Only available in certain markets and property types.</li>
        <li><strong>Price Range Limits:</strong> Most iBuyers only buy homes between $100k-$500k.</li>
      </ul>
      <h3>Traditional Sale Pros</h3>
      <ul>
        <li><strong>Higher Sale Price:</strong> Open market competition drives prices higher, especially in hot markets.</li>
        <li><strong>Agent Expertise:</strong> Professional marketing, negotiation, and legal guidance.</li>
        <li><strong>Market Exposure:</strong> Reach all potential buyers through MLS and marketing.</li>
        <li><strong>Buyer Bidding:</strong> Multiple offers can drive price above asking in competitive markets.</li>
      </ul>
      <h3>When to Choose iBuyer</h3>
      <p>
        iBuyer makes sense if: you need to relocate quickly for work, you're in a slow market and want certainty, your home needs significant repairs you can't afford, you want to avoid showings and open houses, or convenience is worth more than maximizing price.
      </p>
      <h3>When to Choose Traditional Sale</h3>
      <p>
        Traditional sale is better if: you have time for the process (2-3 months), your home is in great condition, your market is competitive with low inventory, you want top dollar, or your home is unique/luxury and may attract bidding wars.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "marketValue",
        label: "Estimated Market Value",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "iBuyerOfferReduction",
        label: "iBuyer Offer Reduction (%)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
      {
        name: "iBuyerServiceFee",
        label: "iBuyer Service Fee (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "iBuyerRepairDeductions",
        label: "iBuyer Repair Deductions",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "traditionalAgentCommission",
        label: "Traditional Sale Agent Commission (%)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "traditionalClosingCosts",
        label: "Traditional Sale Closing Costs",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "traditionalRepairCosts",
        label: "Traditional Sale Repair Costs",
        type: "number",
        placeholder: "3000",
        defaultValue: "3000",
      },
    ],
    results: [
      { label: "iBuyer Initial Offer", isCurrency: true },
      { label: "iBuyer Service Fee", isCurrency: true },
      { label: "iBuyer Total Deductions", isCurrency: true },
      { label: "iBuyer Net Proceeds", isCurrency: true },
      { label: "Traditional Sale Price", isCurrency: true },
      { label: "Traditional Total Costs", isCurrency: true },
      { label: "Traditional Net Proceeds", isCurrency: true },
      { label: "Difference (Traditional - iBuyer)", isCurrency: true },
    ],
    calculate: (data: any) => {
      const marketValue = Number(data.marketValue) || 0;
      const iBuyerOfferReduction = Number(data.iBuyerOfferReduction) || 0;
      const iBuyerServiceFee = Number(data.iBuyerServiceFee) || 0;
      const iBuyerRepairDeductions = Number(data.iBuyerRepairDeductions) || 0;
      const traditionalAgentCommission = Number(data.traditionalAgentCommission) || 0;
      const traditionalClosingCosts = Number(data.traditionalClosingCosts) || 0;
      const traditionalRepairCosts = Number(data.traditionalRepairCosts) || 0;

      if (marketValue <= 0) {
        return [
          { label: "Difference (Traditional - iBuyer)", value: "Please enter a valid market value.", type: "string" },
        ];
      }

      const iBuyerOffer = marketValue * (1 - iBuyerOfferReduction / 100);
      const iBuyerFee = iBuyerOffer * (iBuyerServiceFee / 100);
      const iBuyerTotalDeductions = iBuyerFee + iBuyerRepairDeductions;
      const iBuyerNet = iBuyerOffer - iBuyerTotalDeductions;

      const traditionalSalePrice = marketValue;
      const traditionalCommission = traditionalSalePrice * (traditionalAgentCommission / 100);
      const traditionalTotalCosts = traditionalCommission + traditionalClosingCosts + traditionalRepairCosts;
      const traditionalNet = traditionalSalePrice - traditionalTotalCosts;

      const difference = traditionalNet - iBuyerNet;

      return [
        { label: "iBuyer Initial Offer", value: iBuyerOffer, type: "currency" },
        { label: "iBuyer Service Fee", value: iBuyerFee, type: "currency" },
        { label: "iBuyer Total Deductions", value: iBuyerTotalDeductions, type: "currency" },
        { label: "iBuyer Net Proceeds", value: iBuyerNet, type: "currency" },
        { label: "Traditional Sale Price", value: traditionalSalePrice, type: "currency" },
        { label: "Traditional Total Costs", value: traditionalTotalCosts, type: "currency" },
        { label: "Traditional Net Proceeds", value: traditionalNet, type: "currency" },
        { label: "Difference (Traditional - iBuyer)", value: difference, type: "currency" },
      ];
    },
  },
};
