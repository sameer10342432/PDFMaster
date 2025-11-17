import { CalculatorContent } from '@/types';

export const TENNESSEE_HALL_INCOME_TAX_REAL_ESTATE_CONTENT: CalculatorContent = {
  title: 'Tennessee Hall Income Tax (Real Estate Investment)',
  description: 'Calculate the former Tennessee Hall Tax impact on real estate investment income (repealed 2021)',
  slug: 'tennessee-hall-income-tax-real-estate',
  icon: '🏛️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Tennessee Hall Income Tax for Real Estate',
    content: `
    <h2>Tennessee Hall Income Tax Guide (Historical)</h2>
    <p>The <strong>Hall Income Tax</strong> was Tennessee's limited state income tax that applied only to investment income. While it was <strong>fully repealed in 2021</strong>, understanding its historical impact helps real estate investors appreciate Tennessee's current tax advantages.</p>
    
    <h3>What Was the Hall Income Tax?</h3>
    <p>The Hall Tax, named after the Tennessee State Senator who introduced it in 1929, taxed:</p>
    <ul>
      <li><strong>Interest Income:</strong> From bonds, savings accounts, CDs</li>
      <li><strong>Dividend Income:</strong> From stock ownership, REITs</li>
      <li><strong>Rate:</strong> 6% (reduced from initial 6% to final 1% before repeal)</li>
      <li><strong>Exemption:</strong> $1,250 individual / $2,500 joint (as of 2020)</li>
    </ul>
    
    <h3>Hall Tax Impact on Real Estate Investors</h3>
    <p>For real estate investors, the Hall Tax applied to:</p>
    <ul>
      <li><strong>REIT Dividends:</strong> Real Estate Investment Trust distributions were taxable</li>
      <li><strong>Interest on Notes:</strong> Seller-financed mortgages and private lending</li>
      <li><strong>Bond Interest:</strong> Municipal bonds (except Tennessee munis)</li>
    </ul>
    <p><strong>NOT Taxed by Hall Tax:</strong></p>
    <ul>
      <li>Rental income from properties</li>
      <li>Capital gains from property sales</li>
      <li>Active real estate business income</li>
      <li>W-2 wages or self-employment income</li>
    </ul>
    
    <h3>Repeal Timeline</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Status</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Before 2016</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full rate</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2017</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1% reduction begins</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2018</td>
        <td style="border: 1px solid #ddd; padding: 8px;">4%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Continued reduction</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2019</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Phase-out continues</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2020</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Nearly eliminated</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2021</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Fully Repealed</strong></td>
      </tr>
    </table>
    
    <h3>Tennessee's Current Tax Advantage</h3>
    <p>Since 2021, Tennessee is one of <strong>only 9 states with NO income tax</strong>:</p>
    <ul>
      <li>No tax on wages or salary</li>
      <li>No tax on rental income</li>
      <li>No tax on capital gains</li>
      <li>No tax on dividends or interest</li>
      <li>No tax on retirement distributions</li>
    </ul>
    
    <h3>Example: REIT Investor Before and After</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Dividend Income</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Hall Tax (2016)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Current (2024)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Modest REIT Portfolio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$525</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Substantial REIT Portfolio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$50,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,850</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Large REIT Portfolio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,850</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>
    <p><em>Note: 2016 calculations include $2,500 joint exemption at 6% rate</em></p>
    
    <h3>Tennessee Tax Benefits for Real Estate Investors Today</h3>
    <p>Tennessee remains highly attractive for real estate investors:</p>
    <ul>
      <li><strong>No Capital Gains Tax:</strong> Keep 100% of property sale profits (minus federal)</li>
      <li><strong>No Rental Income Tax:</strong> All rental income taxed only at federal level</li>
      <li><strong>Property Tax:</strong> Below national average (0.56% effective rate)</li>
      <li><strong>Sales Tax:</strong> 7% state rate (9.5% average combined with local)</li>
      <li><strong>Retiree Friendly:</strong> Social Security and pension income not taxed</li>
    </ul>
    
    <h3>States vs. Tennessee Tax Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Income Tax on Rental Income</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Capital Gains Tax</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Tennessee</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>0%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>0%</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">California</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to 13.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to 13.3%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">New York</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to 10.9%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to 10.9%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0%</td>
      </tr>
    </table>
    
    <h3>Historical Exemptions Under Hall Tax</h3>
    <p>When the Hall Tax was active, these exemptions applied:</p>
    <ul>
      <li><strong>Age 65+:</strong> Full exemption regardless of income</li>
      <li><strong>Total Disability:</strong> Complete exemption with proof</li>
      <li><strong>Low Income:</strong> $33,000 or less total income (all sources)</li>
      <li><strong>Tennessee Municipal Bonds:</strong> Interest always exempt</li>
    </ul>
    
    <h3>Why Tennessee Repealed the Hall Tax</h3>
    <p>Several factors led to repeal:</p>
    <ul>
      <li>Administrative complexity for minimal revenue (only $300-400M annually)</li>
      <li>Competitive disadvantage with neighboring no-income-tax states</li>
      <li>Retiree migration to Florida and Texas accelerating</li>
      <li>Strong state revenue growth made tax unnecessary</li>
      <li>Political momentum toward lower taxes</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'dividendIncome',
        label: 'Annual Dividend Income',
        type: 'currency',
        required: true,
        placeholder: '25000',
        helpText: 'REIT dividends and stock dividends received annually'
      },
      {
        name: 'interestIncome',
        label: 'Annual Interest Income',
        type: 'currency',
        required: true,
        placeholder: '15000',
        helpText: 'Interest from bonds, CDs, savings, seller financing'
      },
      {
        name: 'filingStatus',
        label: 'Filing Status',
        type: 'select',
        required: true,
        options: [
          { value: 'single', label: 'Single' },
          { value: 'joint', label: 'Married Filing Jointly' },
        ],
        helpText: 'Exemption amount varies by filing status'
      },
      {
        name: 'taxYear',
        label: 'Tax Year',
        type: 'select',
        required: true,
        options: [
          { value: '2016', label: '2016 (6% rate)' },
          { value: '2017', label: '2017 (5% rate)' },
          { value: '2018', label: '2018 (4% rate)' },
          { value: '2019', label: '2019 (3% rate)' },
          { value: '2020', label: '2020 (2% rate)' },
          { value: '2021', label: '2021+ (Repealed - 0%)' },
        ],
        helpText: 'Hall Tax was phased out 2017-2021'
      },
      {
        name: 'age',
        label: 'Age',
        type: 'select',
        required: true,
        options: [
          { value: 'under65', label: 'Under 65' },
          { value: '65plus', label: '65 or older' },
        ],
        helpText: 'Taxpayers 65+ were fully exempt from Hall Tax'
      }
    ],
    results: [
      {
        name: 'taxableIncome',
        label: 'Taxable Investment Income',
        type: 'currency',
        helpText: 'Total dividends + interest subject to Hall Tax'
      },
      {
        name: 'exemptionAmount',
        label: 'Exemption Amount',
        type: 'currency',
        helpText: 'Amount excluded from taxation'
      },
      {
        name: 'taxableAfterExemption',
        label: 'Income Subject to Tax',
        type: 'currency',
        helpText: 'Taxable income after exemption'
      },
      {
        name: 'hallTaxOwed',
        label: 'Hall Tax Owed',
        type: 'currency',
        helpText: 'Tennessee Hall Income Tax liability'
      },
      {
        name: 'currentTaxOwed',
        label: 'Current Tennessee Tax (2024)',
        type: 'currency',
        helpText: 'Tax owed today (Hall Tax repealed)'
      },
      {
        name: 'annualSavings',
        label: 'Annual Tax Savings Since Repeal',
        type: 'currency',
        helpText: 'How much you save now compared to 2016'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const dividendIncome = parseFloat(inputs.dividendIncome) || 0;
      const interestIncome = parseFloat(inputs.interestIncome) || 0;
      const filingStatus = inputs.filingStatus || 'single';
      const taxYear = inputs.taxYear || '2021';
      const age = inputs.age || 'under65';

      const taxableIncome = dividendIncome + interestIncome;

      const exemptionAmount = filingStatus === 'joint' ? 2500 : 1250;

      let taxRate = 0;
      if (taxYear === '2016') taxRate = 0.06;
      else if (taxYear === '2017') taxRate = 0.05;
      else if (taxYear === '2018') taxRate = 0.04;
      else if (taxYear === '2019') taxRate = 0.03;
      else if (taxYear === '2020') taxRate = 0.02;
      else taxRate = 0;

      let hallTaxOwed = 0;
      let taxableAfterExemption = 0;

      if (age === '65plus') {
        hallTaxOwed = 0;
        taxableAfterExemption = 0;
      } else {
        taxableAfterExemption = Math.max(0, taxableIncome - exemptionAmount);
        hallTaxOwed = Math.round(taxableAfterExemption * taxRate);
      }

      const currentTaxOwed = 0;

      const tax2016Rate = 0.06;
      const taxable2016 = age === '65plus' ? 0 : Math.max(0, taxableIncome - exemptionAmount);
      const hall2016Tax = Math.round(taxable2016 * tax2016Rate);
      const annualSavings = hall2016Tax;

      return {
        taxableIncome,
        exemptionAmount,
        taxableAfterExemption,
        hallTaxOwed,
        currentTaxOwed,
        annualSavings
      };
    }
  }
};
