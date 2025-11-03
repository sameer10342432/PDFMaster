import { CalculatorContent } from '@/types';

export const REAL_ESTATE_CROWDFUNDING_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Real Estate Crowdfunding Calculator',
  description: 'Estimate your potential returns from a real estate crowdfunding investment. For passive investors.',
  slug: 'real-estate-crowdfunding-calculator',
  icon: 'Icon',
  category: 'Investing',
  article: {
    title: 'What is Real Estate Crowdfunding?',
    content: `
    <h2>What is Real Estate Crowdfunding?</h2>
    <p>Real estate crowdfunding has emerged as a popular way for individuals to invest in real estate without the need for large amounts of capital or the hassles of property management. Crowdfunding platforms pool money from multiple investors to purchase properties, and the investors share in the profits.</p>

    <h3>How Real Estate Crowdfunding Works</h3>
    <p>The process is typically straightforward:</p>
    <ol>
      <li><strong>Choose a Platform:</strong> Select a reputable real estate crowdfunding platform.</li>
      <li><strong>Browse Investments:</strong> Review the available investment opportunities, which can include residential, commercial, and industrial properties.</li>
      <li><strong>Invest:</strong> Choose a property and invest an amount you are comfortable with. Minimum investments can be as low as a few hundred dollars.</li>
      <li><strong>Earn Returns:</strong> You can earn returns in two main ways:</li>
      <ul>
        <li><strong>Rental Income:</strong> If the property is rented out, you will receive a share of the rental income, typically paid out quarterly.</li>
        <li><strong>Property Appreciation:</strong> When the property is sold, you will receive a share of the profits from the appreciation in its value.</li>
      </ul>
    </ol>

    <h3>Types of Crowdfunding Investments</h3>
    <p>There are two main types of real estate crowdfunding investments:</p>
    <ul>
      <li><strong>Equity Investments:</strong> You become a part-owner of the property and share in the rental income and appreciation. This is a higher-risk, higher-reward strategy.</li>
      <li><strong>Debt Investments:</strong> You are essentially lending money to a real estate developer, and you receive fixed interest payments. This is a lower-risk, lower-reward strategy.</li>
    </ul>

    <h3>Pros and Cons of Real Estate Crowdfunding</h3>
    <h4>Pros:</h4>
    <ul>
      <li><strong>Low Barrier to Entry:</strong> You can invest in real estate with a small amount of money.</li>
      <li><strong>Diversification:</strong> You can easily invest in multiple properties across different locations and property types.</li>
      <li><strong>Passive Income:</strong> The platform handles all the property management, making it a passive investment.</li>
    </ul>
    <h4>Cons:</h4>
    <ul>
      <li><strong>Illiquidity:</strong> Your money is typically tied up for several years until the property is sold.</li>
      <li><strong>Platform Fees:</strong> Crowdfunding platforms charge fees for their services, which can reduce your returns.</li>
      <li><strong>Market Risk:</strong> Like any real estate investment, there is a risk of losing money if the property value declines.</li>
    </ul>

    <h3>How to Use the Crowdfunding Calculator</h3>
    <p>This calculator will help you estimate the potential returns on a real estate crowdfunding investment. You will need to provide your initial investment amount, the expected annual return from rental income, the expected annual appreciation, and the investment holding period. The calculator will then project the growth of your investment over time.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'initialInvestment',
        label: 'Initial Investment',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'annualRentalReturn',
        label: 'Annual Rental Return (%)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'annualAppreciation',
        label: 'Annual Property Appreciation (%)',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (Years)',
        type: 'number',
        defaultValue: 5,
      },
    ],
    results: [
      {
        label: 'Total Investment Value',
        isCurrency: true,
      },
      {
        label: 'Total Rental Income',
        isCurrency: true,
      },
      {
        label: 'Total Appreciation',
        isCurrency: true,
      },
      {
        label: 'Return on Investment (ROI)',
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { initialInvestment, annualRentalReturn, annualAppreciation, holdingPeriod } = values;
      let investmentValue = initialInvestment;
      let totalRentalIncome = 0;

      for (let i = 0; i < holdingPeriod; i++) {
        const rentalIncome = investmentValue * (annualRentalReturn / 100);
        totalRentalIncome += rentalIncome;
        investmentValue *= (1 + annualAppreciation / 100);
      }

      const totalReturn = (investmentValue - initialInvestment) + totalRentalIncome;
      const averageAnnualReturn = (totalReturn / initialInvestment) / holdingPeriod * 100;

      return [
        { label: 'Total Rental Income', value: totalRentalIncome.toFixed(2), isCurrency: true },
        { label: 'Ending Investment Value', value: investmentValue.toFixed(2), isCurrency: true },
        { label: 'Total Return', value: totalReturn.toFixed(2), isCurrency: true },
        { label: 'Average Annual Return', value: `${averageAnnualReturn.toFixed(2)}%` },
      ];
    },
  },
};