import { CalculatorContent } from '@/types';

export const STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Stocks vs. Real Estate (Historical) Analyzer',
  description: 'Compare historical returns between stock market investments and real estate properties over different time periods',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'stocks-vs-real-estate-historical-analyzer',
  metaTitle: 'Stocks vs Real Estate Historical Returns Calculator - Historical Performance Comparison',
  metaDescription: 'Analyze and compare historical investment returns between S&P 500 stocks and real estate properties. See how $100k would have grown over 10, 20, or 30 years in each asset class.',
  article: {
    title: "Stocks vs. Real Estate: Historical Performance Analysis",
    content: `
    <h2>Stocks vs. Real Estate: Historical Performance Analysis</h2>
    <p>The debate between stocks and real estate has raged for decades. Let's examine the historical data to understand which has performed better over time.</p>
    
    <h3>Historical Returns (1990-2023)</h3>
    <ul>
      <li><strong>S&P 500 Average Annual Return:</strong> ~10.5% (with dividends reinvested)</li>
      <li><strong>Real Estate Average Annual Appreciation:</strong> ~3.8% nationally</li>
      <li><strong>Real Estate + Rental Income:</strong> ~8-12% total return</li>
    </ul>
    
    <h3>Why Real Estate Appears to Underperform</h3>
    <p>The 3.8% appreciation rate doesn't tell the full story. Real estate investors also benefit from:</p>
    <ul>
      <li><strong>Rental Income:</strong> 4-8% cash-on-cash return annually</li>
      <li><strong>Leverage:</strong> 5x amplification with 20% down payment</li>
      <li><strong>Mortgage Paydown:</strong> Tenants pay off your loan</li>
      <li><strong>Tax Benefits:</strong> Depreciation shields income</li>
    </ul>
    
    <h3>Stock Market Advantages in Historical Data</h3>
    <ul>
      <li><strong>Compound Growth:</strong> Exponential growth over long periods</li>
      <li><strong>Liquidity:</strong> Sell anytime during market hours</li>
      <li><strong>Dividends:</strong> Passive income without management</li>
      <li><strong>Recovery Speed:</strong> Faster bounce-back from crashes</li>
      <li><strong>Global Exposure:</strong> Diversification across industries/countries</li>
    </ul>
    
    <h3>Historical Crash Comparisons</h3>
    <table>
      <tr>
        <th>Event</th>
        <th>Stock Impact</th>
        <th>Real Estate Impact</th>
      </tr>
      <tr>
        <td>2008 Financial Crisis</td>
        <td>-37% (recovered by 2013)</td>
        <td>-19% nationally (recovered by 2016)</td>
      </tr>
      <tr>
        <td>Dot-Com Bubble (2000)</td>
        <td>-49% (recovered by 2007)</td>
        <td>Minimal impact</td>
      </tr>
      <tr>
        <td>COVID-19 Crash (2020)</td>
        <td>-34% (recovered in 5 months)</td>
        <td>+11% appreciation</td>
      </tr>
    </table>
    
    <h3>Real-World Example: $100,000 Invested in 1990</h3>
    <p><strong>Stock Market (S&P 500):</strong></p>
    <ul>
      <li>2023 Value: ~$3,500,000</li>
      <li>Strategy: Buy and hold index fund</li>
      <li>Time required: < 1 hour per year</li>
    </ul>
    
    <p><strong>Real Estate (Single Rental):</strong></p>
    <ul>
      <li>1990: Buy $500k property with $100k down</li>
      <li>2023: Property worth ~$1,800,000</li>
      <li>Equity: ~$1,800,000 (loan paid off by tenants)</li>
      <li>Plus: ~$800,000 in cash flow over 33 years</li>
      <li>Total: ~$2,600,000</li>
      <li>Time required: 5-10 hours/month managing</li>
    </ul>
    
    <h3>Regional Variations in Real Estate</h3>
    <p>National averages hide huge variations:</p>
    <ul>
      <li><strong>San Francisco (1990-2023):</strong> 7.2% annual appreciation</li>
      <li><strong>Detroit (1990-2023):</strong> 0.8% annual appreciation</li>
      <li><strong>Austin (2010-2023):</strong> 9.1% annual appreciation</li>
    </ul>
    
    <h3>Time Period Matters</h3>
    <ul>
      <li><strong>1-5 Years:</strong> Stocks very volatile, real estate more stable</li>
      <li><strong>10-20 Years:</strong> Both perform well, leverage helps real estate</li>
      <li><strong>30+ Years:</strong> Stocks historically edge out real estate</li>
    </ul>
    
    <h3>The Hybrid Approach</h3>
    <p>Many wealthy individuals use both:</p>
    <ul>
      <li>Max out 401k/IRA in stock index funds (tax advantages)</li>
      <li>Invest in 1-3 rental properties (leverage + cash flow)</li>
      <li>Keep emergency fund in high-yield savings</li>
      <li>Diversification reduces overall portfolio risk</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "initialInvestment",
        label: "Initial Investment Amount",
        type: "number",
        placeholder: "100000",
        defaultValue: "100000",
      },
      {
        name: "timePeriod",
        label: "Investment Time Period (Years)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "stockReturn",
        label: "Stock Market Annual Return (%)",
        type: "number",
        placeholder: "10.5",
        defaultValue: "10.5",
      },
      {
        name: "stockVolatility",
        label: "Stock Volatility (Std Dev %)",
        type: "number",
        placeholder: "18",
        defaultValue: "18",
      },
      {
        name: "realEstateAppreciation",
        label: "Real Estate Appreciation (%)",
        type: "number",
        placeholder: "3.8",
        defaultValue: "3.8",
      },
      {
        name: "rentalYield",
        label: "Rental Yield (%/year)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "leverage",
        label: "Real Estate Leverage (% Down Payment)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
    ],
    results: [
      { label: "Stock Market Final Value", isCurrency: true },
      { label: "Stock Total Return", isCurrency: false },
      { label: "Real Estate Property Value", isCurrency: true },
      { label: "Real Estate Cash Flow Total", isCurrency: true },
      { label: "Real Estate Total Equity", isCurrency: true },
      { label: "Real Estate Total Return", isCurrency: false },
      { label: "Better Performer", isCurrency: false },
      { label: "Advantage Amount", isCurrency: true },
    ],
    calculate: (data: any) => {
      const initialInvestment = Number(data.initialInvestment) || 0;
      const years = Number(data.timePeriod) || 0;
      const stockReturn = Number(data.stockReturn) / 100 || 0;
      const realEstateAppreciation = Number(data.realEstateAppreciation) / 100 || 0;
      const rentalYield = Number(data.rentalYield) / 100 || 0;
      const leverage = Number(data.leverage) / 100 || 0;
      
      // Stock calculation
      const stockFinalValue = initialInvestment * Math.pow(1 + stockReturn, years);
      const stockTotalReturn = ((stockFinalValue - initialInvestment) / initialInvestment) * 100;
      
      // Real Estate calculation with leverage
      const propertyPrice = initialInvestment / leverage;
      const futurePropertyValue = propertyPrice * Math.pow(1 + realEstateAppreciation, years);
      
      // Calculate cash flow
      let totalCashFlow = 0;
      let annualRent = propertyPrice * rentalYield;
      for (let year = 0; year < years; year++) {
        totalCashFlow += annualRent * 0.5; // 50% rule for expenses
        annualRent *= 1.03; // 3% rent growth
      }
      
      // Calculate loan paydown (simplified)
      const loanAmount = propertyPrice * (1 - leverage);
      const remainingLoan = loanAmount * Math.max(0, 1 - (years / 30));
      const totalEquity = futurePropertyValue - remainingLoan + totalCashFlow;
      const realEstateTotalReturn = ((totalEquity - initialInvestment) / initialInvestment) * 100;
      
      // Comparison
      const betterPerformer = stockFinalValue > totalEquity
        ? "Stock Market 📈"
        : "Real Estate 🏠";
      const advantage = Math.abs(stockFinalValue - totalEquity);

      return [
        { label: "Stock Market Final Value", value: `${stockFinalValue.toFixed(2)}`, isCurrency: true },
        { label: "Stock Total Return", value: `${stockTotalReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Real Estate Property Value", value: `${futurePropertyValue.toFixed(2)}`, isCurrency: true },
        { label: "Real Estate Cash Flow Total", value: `${totalCashFlow.toFixed(2)}`, isCurrency: true },
        { label: "Real Estate Total Equity", value: `${totalEquity.toFixed(2)}`, isCurrency: true },
        { label: "Real Estate Total Return", value: `${realEstateTotalReturn.toFixed(2)}%`, isCurrency: false },
        { label: "Better Performer", value: betterPerformer, isCurrency: false },
        { label: "Advantage Amount", value: `${advantage.toFixed(2)}`, isCurrency: true },
      ];
    },
  },
};