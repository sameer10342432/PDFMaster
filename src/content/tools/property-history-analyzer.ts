import { CalculatorContent } from '@/types';

export const PROPERTY_HISTORY_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Property History Analyzer (Sales/Price)',
  description: 'Analyze property sales history, price trends, and transaction patterns to identify opportunities and assess appreciation potential.',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'property-history-analyzer',
  article: {
    title: "Using Property Sales History for Investment Analysis",
    content: `
    <h2>Why Property History Matters</h2>
    <p>A property's sales history reveals appreciation trends, market cycles, seller motivations, and potential red flags that impact investment decisions.</p>
    
    <h3>Key Metrics from Sales History</h3>
    <ul>
      <li><strong>Historical Prices:</strong> Track purchase prices over time</li>
      <li><strong>Appreciation Rate:</strong> Annual appreciation percentage</li>
      <li><strong>Days on Market:</strong> How quickly property sells in different cycles</li>
      <li><strong>Sale Frequency:</strong> How often property changes hands</li>
      <li><strong>Transaction Type:</strong> Arms-length sale, foreclosure, short sale, estate sale</li>
    </ul>
    
    <h3>Red Flags in Property History</h3>
    <ul>
      <li><strong>Frequent Flips:</strong> Multiple sales in short periods may indicate problems</li>
      <li><strong>Price Declines:</strong> Selling for less than previous purchase price</li>
      <li><strong>Foreclosure/Short Sale:</strong> May indicate structural or market issues</li>
      <li><strong>Long Ownership + No Updates:</strong> Potential for deferred maintenance</li>
      <li><strong>Quick Sale After Purchase:</strong> Buyer may have discovered issues</li>
    </ul>
    
    <h3>Positive Indicators</h3>
    <ul>
      <li><strong>Steady Appreciation:</strong> Consistent 3-5% annual growth</li>
      <li><strong>Long Ownership:</strong> Stable neighborhood, satisfied owners</li>
      <li><strong>Market-Rate Transactions:</strong> Arms-length sales at fair prices</li>
      <li><strong>Recent Improvements:</strong> Permits showing upgrades and maintenance</li>
    </ul>
    
    <h3>Investment Strategy Applications</h3>
    <p><strong>Buy-and-Hold:</strong></p>
    <ul>
      <li>Look for consistent 4-7% annual appreciation history</li>
      <li>Stable neighborhoods with 10-15+ year ownership cycles</li>
      <li>Limited foreclosure activity in recent history</li>
    </ul>
    
    <p><strong>Fix-and-Flip:</strong></p>
    <ul>
      <li>Properties selling below recent comparable sales</li>
      <li>Foreclosures or estate sales at significant discounts</li>
      <li>Quick turnover markets (30-60 days on market historically)</li>
    </ul>
    
    <p><strong>Value-Add:</strong></p>
    <ul>
      <li>Long-term ownership (20+ years) with minimal updates</li>
      <li>Properties selling below peak but in appreciating markets</li>
      <li>Neighborhoods transitioning to higher values</li>
    </ul>
    
    <h3>Data Sources</h3>
    <ul>
      <li><strong>Public Records:</strong> County assessor and recorder offices</li>
      <li><strong>MLS History:</strong> Complete transaction data for listed properties</li>
      <li><strong>Online Platforms:</strong> Zillow, Redfin, Realtor.com historical data</li>
      <li><strong>Title Reports:</strong> Comprehensive ownership and lien history</li>
    </ul>
    
    <h3>Analysis Tips</h3>
    <ul>
      <li>Compare property appreciation to neighborhood and city averages</li>
      <li>Adjust historical prices for inflation to get real appreciation</li>
      <li>Research major sales (identify circumstances: distress, estate, etc.)</li>
      <li>Look for patterns in seasonal pricing and market cycles</li>
    </ul>
    
    <p><em>Note: This is a demonstration tool with sample data. For actual property history, access county records or use real estate data platforms.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Total Appreciation (Period)', isCurrency: false },
      { label: 'Average Annual Appreciation', isCurrency: false },
      { label: 'Total Value Gain', isCurrency: true },
      { label: 'Ownership Stability', isCurrency: false },
      { label: 'Market Performance', isCurrency: false },
      { label: 'Investment Outlook', isCurrency: false },
    ],
    fields: [
      {
        name: 'address',
        label: 'Property Address',
        type: 'text',
        defaultValue: '321 Pine Street, Denver, CO 80202',
      },
      {
        name: 'demoHistory',
        label: 'Demo Sales History (Select for Testing)',
        type: 'select',
        options: [
          { label: 'Strong Steady Growth', value: 'strong' },
          { label: 'Moderate Appreciation', value: 'moderate' },
          { label: 'Volatile/Mixed History', value: 'volatile' },
          { label: 'Declining Value', value: 'declining' },
        ],
        defaultValue: 'moderate',
      },
      {
        name: 'currentListPrice',
        label: 'Current Asking/Market Price',
        type: 'number',
        defaultValue: 550000,
      },
    ],
    calculate: (data) => {
      const { address, demoHistory, currentListPrice } = data;
      
      let appreciation = '';
      let annualRate = '';
      let valueGain = 0;
      let stability = '';
      let performance = '';
      let outlook = '';
      
      switch (demoHistory) {
        case 'strong':
          appreciation = '+85% over 15 years (2009: $297k → 2024: $550k)';
          annualRate = '5.7% average annual appreciation';
          valueGain = currentListPrice - (currentListPrice / 1.85);
          stability = '★★★★★ Excellent - Single owner 15 years';
          performance = '✓ Above Market - Outperformed city average (4.2%)';
          outlook = '✓ Positive - Strong historical growth, stable ownership, good buy-and-hold candidate';
          break;
        case 'moderate':
          appreciation = '+48% over 12 years (2012: $372k → 2024: $550k)';
          annualRate = '4.0% average annual appreciation';
          valueGain = currentListPrice - (currentListPrice / 1.48);
          stability = '★★★★☆ Good - Two owners, average 6-year hold';
          performance = '⚖️ At Market - Matches city average appreciation';
          outlook = '⚖️ Neutral - Steady moderate growth, standard for neighborhood, solid investment';
          break;
        case 'volatile':
          appreciation = '+22% over 10 years (2014: $450k → 2019: $380k → 2024: $550k)';
          annualRate = '2.2% average (volatile with 2018 dip)';
          valueGain = currentListPrice - (currentListPrice / 1.22);
          stability = '★★☆☆☆ Below Average - Four sales in 10 years';
          performance = '⚠️ Below Market - Underperformed city average, period of decline';
          outlook = '⚠️ Caution - Frequent turnover and volatility suggest property or neighborhood issues';
          break;
        case 'declining':
          appreciation = '-8% over 8 years (2016: $600k → 2024: $550k)';
          annualRate = '-1.0% average annual decline';
          valueGain = currentListPrice - (currentListPrice / 0.92);
          stability = '★☆☆☆☆ Poor - Foreclosure in 2020, quick flip';
          performance = '✗ Well Below Market - Significant underperformance vs. city (+3.5%)';
          outlook = '✗ High Risk - Declining value, distressed history, investigate structural or title issues';
          break;
      }
      
      return [
        { label: 'Total Appreciation (Period)', value: appreciation, isCurrency: false },
        { label: 'Average Annual Appreciation', value: annualRate, isCurrency: false },
        { label: 'Total Value Gain', value: valueGain, isCurrency: true },
        { label: 'Ownership Stability', value: stability, isCurrency: false },
        { label: 'Market Performance', value: performance, isCurrency: false },
        { label: 'Investment Outlook', value: outlook, isCurrency: false },
      ];
    },
  },
};
