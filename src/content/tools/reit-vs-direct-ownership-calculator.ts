import { CalculatorContent } from '@/types';

export const REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'REIT vs. Direct Ownership Calculator',
  description: 'Compare returns, liquidity, and effort between REIT investments and directly owning rental properties',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'reit-vs-direct-ownership-calculator',
  metaTitle: 'REIT vs Direct Property Ownership Calculator - Which Real Estate Investment is Better?',
  metaDescription: 'Compare REIT (Real Estate Investment Trust) investments versus directly owning rental property. Analyze returns, liquidity, taxes, time commitment, and passive income potential.',
  article: {
    title: "REITs vs. Direct Property Ownership: Complete Comparison",
    content: `
    <h2>REITs vs. Direct Property Ownership: Complete Comparison</h2>
    <p>Real Estate Investment Trusts (REITs) and direct property ownership both offer real estate exposure, but with vastly different characteristics. This calculator helps you decide which path fits your goals.</p>
    
    <h3>What Are REITs?</h3>
    <p>REITs are companies that own and operate income-producing real estate. They must:</p>
    <ul>
      <li>Distribute 90% of taxable income as dividends</li>
      <li>Invest 75%+ of assets in real estate</li>
      <li>Derive 75%+ of income from real estate</li>
      <li>Have at least 100 shareholders</li>
    </ul>
    
    <h3>Types of REITs</h3>
    <ul>
      <li><strong>Equity REITs:</strong> Own and operate properties (apartments, malls, offices)</li>
      <li><strong>Mortgage REITs:</strong> Finance real estate through mortgages</li>
      <li><strong>Hybrid REITs:</strong> Combination of both</li>
      <li><strong>Public vs. Private:</strong> Traded on stock exchanges or private placements</li>
    </ul>
    
    <h3>REIT Advantages</h3>
    <ul>
      <li><strong>Low Entry Cost:</strong> Start with $100 vs $20,000-100,000 for property</li>
      <li><strong>Instant Liquidity:</strong> Sell shares anytime during market hours</li>
      <li><strong>No Management:</strong> Zero landlord responsibilities</li>
      <li><strong>Professional Management:</strong> Expert teams optimize properties</li>
      <li><strong>Diversification:</strong> Own pieces of hundreds of properties</li>
      <li><strong>Passive Income:</strong> Quarterly dividend payments</li>
      <li><strong>Access to Premium Assets:</strong> Invest in commercial properties beyond individual reach</li>
    </ul>
    
    <h3>Direct Ownership Advantages</h3>
    <ul>
      <li><strong>Leverage:</strong> 5:1 leverage with 20% down payment</li>
      <li><strong>Tax Benefits:</strong> Depreciation, mortgage interest deductions</li>
      <li><strong>Control:</strong> Choose tenants, improvements, sale timing</li>
      <li><strong>Forced Appreciation:</strong> Renovations increase value</li>
      <li><strong>1031 Exchange:</strong> Defer capital gains indefinitely</li>
      <li><strong>Tangible Asset:</strong> Own physical property</li>
    </ul>
    
    <h3>Key Comparison Points</h3>
    <table>
      <tr>
        <th>Factor</th>
        <th>REITs</th>
        <th>Direct Ownership</th>
      </tr>
      <tr>
        <td>Minimum Investment</td>
        <td>$100-1,000</td>
        <td>$20,000-100,000</td>
      </tr>
      <tr>
        <td>Liquidity</td>
        <td>Instant (public REITs)</td>
        <td>30-180 days to sell</td>
      </tr>
      <tr>
        <td>Time Required</td>
        <td>0 hours</td>
        <td>5-20 hours/month</td>
      </tr>
      <tr>
        <td>Leverage</td>
        <td>None (REITs use leverage)</td>
        <td>4-5x personal leverage</td>
      </tr>
      <tr>
        <td>Control</td>
        <td>None</td>
        <td>Complete</td>
      </tr>
      <tr>
        <td>Tax Treatment</td>
        <td>Ordinary income (dividends)</td>
        <td>Depreciation, cap gains</td>
      </tr>
    </table>
    
    <h3>Historical Returns (1990-2023)</h3>
    <ul>
      <li><strong>REIT Average Annual Return:</strong> 9.5%</li>
      <li><strong>Direct Rental Property:</strong> 8-12% (varies by location)</li>
      <li><strong>S&P 500 (for reference):</strong> 10.5%</li>
    </ul>
    
    <h3>Tax Differences</h3>
    <p><strong>REITs:</strong> Dividends taxed as ordinary income (up to 37%)</p>
    <p><strong>Direct Ownership:</strong> Depreciation deductions reduce taxable income; long-term capital gains (15-20%); 1031 exchanges defer taxes</p>
    
    <h3>Who Should Choose REITs?</h3>
    <ul>
      <li>Limited capital ($5,000-50,000)</li>
      <li>No time for property management</li>
      <li>Want instant liquidity</li>
      <li>Prefer passive income</li>
      <li>Want diversification across property types/locations</li>
    </ul>
    
    <h3>Who Should Choose Direct Ownership?</h3>
    <ul>
      <li>Have $50,000+ for down payment</li>
      <li>Willing to manage properties (or hire managers)</li>
      <li>Want leverage to amplify returns</li>
      <li>Seeking tax optimization strategies</li>
      <li>Want control over investment decisions</li>
    </ul>
    
    <h3>Hybrid Strategy</h3>
    <p>Many investors use both:</p>
    <ul>
      <li>REITs in tax-advantaged accounts (IRA, 401k)</li>
      <li>Direct ownership in taxable accounts (for tax benefits)</li>
      <li>REITs for asset classes hard to access (data centers, cell towers)</li>
      <li>Direct ownership in local markets they understand</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "investmentAmount",
        label: "Investment Amount",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "reitDividendYield",
        label: "REIT Dividend Yield (%)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "reitAppreciation",
        label: "REIT Price Appreciation (%/year)",
        type: "number",
        placeholder: "5.5",
        defaultValue: "5.5",
      },
      {
        name: "propertyDownPayment",
        label: "Property Down Payment (%)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "rentalYield",
        label: "Rental Yield (%/year)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "propertyAppreciation",
        label: "Property Appreciation (%/year)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "years",
        label: "Investment Time Horizon (Years)",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
    ],
    results: [
      { label: "REIT Final Value", isCurrency: true },
      { label: "REIT Total Dividends Received", isCurrency: true },
      { label: "REIT Total Return", isCurrency: false },
      { label: "Property Final Value", isCurrency: true },
      { label: "Property Total Cash Flow", isCurrency: true },
      { label: "Property Net Equity", isCurrency: true },
      { label: "Property Total Return", isCurrency: false },
      { label: "Better Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const investmentAmount = Number(data.investmentAmount) || 0;
      const reitDividendYield = Number(data.reitDividendYield) / 100 || 0;
      const reitAppreciation = Number(data.reitAppreciation) / 100 || 0;
      const downPaymentPercent = Number(data.propertyDownPayment) / 100 || 0;
      const rentalYield = Number(data.rentalYield) / 100 || 0;
      const propertyAppreciation = Number(data.propertyAppreciation) / 100 || 0;
      const years = Number(data.years) || 0;
      
      // REIT calculation
      const reitTotalReturn = reitDividendYield + reitAppreciation;
      let reitValue = investmentAmount;
      let totalDividends = 0;
      
      for (let year = 0; year < years; year++) {
        const dividends = reitValue * reitDividendYield;
        totalDividends += dividends;
        reitValue *= (1 + reitAppreciation);
      }
      
      const reitFinalValue = reitValue + totalDividends;
      const reitReturnPercent = ((reitFinalValue - investmentAmount) / investmentAmount) * 100;
      
      // Direct ownership calculation
      const propertyPrice = investmentAmount / downPaymentPercent;
      const futurePropertyValue = propertyPrice * Math.pow(1 + propertyAppreciation, years);
      
      // Calculate rental cash flow
      let totalCashFlow = 0;
      let annualRent = propertyPrice * rentalYield;
      for (let year = 0; year < years; year++) {
        const netIncome = annualRent * 0.5; // 50% rule
        totalCashFlow += netIncome;
        annualRent *= 1.03; // 3% rent growth
      }
      
      // Calculate loan paydown
      const loanAmount = propertyPrice * (1 - downPaymentPercent);
      const remainingLoan = loanAmount * Math.max(0, 1 - (years / 30));
      const propertyNetEquity = futurePropertyValue - remainingLoan + totalCashFlow;
      const propertyReturnPercent = ((propertyNetEquity - investmentAmount) / investmentAmount) * 100;
      
      // Comparison
      const betterInvestment = reitFinalValue > propertyNetEquity
        ? "REIT 📊"
        : "Direct Property 🏠";

      return [
        { label: "REIT Final Value", value: `${reitFinalValue.toFixed(2)}`, isCurrency: true },
        { label: "REIT Total Dividends Received", value: `${totalDividends.toFixed(2)}`, isCurrency: true },
        { label: "REIT Total Return", value: `${reitReturnPercent.toFixed(2)}%`, isCurrency: false },
        { label: "Property Final Value", value: `${futurePropertyValue.toFixed(2)}`, isCurrency: true },
        { label: "Property Total Cash Flow", value: `${totalCashFlow.toFixed(2)}`, isCurrency: true },
        { label: "Property Net Equity", value: `${propertyNetEquity.toFixed(2)}`, isCurrency: true },
        { label: "Property Total Return", value: `${propertyReturnPercent.toFixed(2)}%`, isCurrency: false },
        { label: "Better Investment", value: betterInvestment, isCurrency: false },
      ];
    },
  },
};