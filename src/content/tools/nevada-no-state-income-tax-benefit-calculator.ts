import { CalculatorContent } from '@/types';

export const NEVADA_NO_STATE_INCOME_TAX_BENEFIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Nevada No-State-Income-Tax Benefit Calculator',
  description: 'Calculate your tax savings from living in Nevada with no state income tax compared to high-tax states',
  slug: 'nevada-no-state-income-tax-benefit-calculator',
  icon: '🎰',
  category: 'Tax Calculators',
  article: {
    title: 'Nevada No State Income Tax Benefits Guide',
    content: `
    <h2>Nevada's No State Income Tax Advantage</h2>
    <p>Nevada is one of <strong>only 9 states with NO state income tax</strong>, making it a prime destination for high earners, retirees, and real estate investors. Understanding the financial impact can help you make informed residency and investment decisions.</p>
    
    <h3>What Nevada Doesn't Tax</h3>
    <p>Nevada has <strong>no tax on</strong>:</p>
    <ul>
      <li><strong>Wages and Salaries:</strong> W-2 income completely tax-free at state level</li>
      <li><strong>Rental Income:</strong> Real estate rental profits keep more in your pocket</li>
      <li><strong>Capital Gains:</strong> Property sales, stock sales - no state tax</li>
      <li><strong>Retirement Income:</strong> Social Security, pensions, 401(k) withdrawals</li>
      <li><strong>Business Income:</strong> Self-employment and LLC/S-Corp distributions</li>
      <li><strong>Dividends & Interest:</strong> Investment income untaxed</li>
    </ul>
    
    <h3>The 9 No-Income-Tax States</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sales Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Best For</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Nevada</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.53% (Low)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">8.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Entrepreneurs, retirees</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.80%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Retirees, investors</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Texas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.60% (High)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">8.25%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Business owners</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.84%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">9.29%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tech workers</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tennessee</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.56%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">9.55%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Low cost of living</td>
      </tr>
    </table>
    
    <h3>Nevada vs. High-Tax States Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Income Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Nevada Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">California Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$75,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$4,500</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$150,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12,750</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$12,750</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$32,850</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$32,850</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$133,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$133,000</strong></td>
      </tr>
    </table>
    
    <h3>Real Estate Investment Benefits</h3>
    <p>For real estate investors, Nevada offers powerful advantages:</p>
    <ul>
      <li><strong>Rental Income:</strong> All rental profit taxed only at federal level</li>
      <li><strong>Capital Gains:</strong> Property flip profits - no state tax on gains</li>
      <li><strong>1031 Exchange:</strong> Still useful for federal deferral, state benefit automatic</li>
      <li><strong>Out-of-State Properties:</strong> Nevada residents pay no NV tax even on properties elsewhere (but may owe tax in property's state)</li>
    </ul>
    
    <h3>Example: Real Estate Investor Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Profit</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">NV Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">CA Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Property Flip</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,300</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13,300</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rental Portfolio</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$60,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,700</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,700</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">REIT Dividends</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,320</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,320</td>
      </tr>
    </table>
    
    <h3>What Nevada DOES Tax</h3>
    <p>Nevada generates revenue through other means:</p>
    <ul>
      <li><strong>Sales Tax:</strong> 6.85% state + local (avg 8.25% combined)</li>
      <li><strong>Gaming Taxes:</strong> Casinos pay significant state revenue</li>
      <li><strong>Property Tax:</strong> 0.53% effective rate (below national average)</li>
      <li><strong>Modified Business Tax:</strong> Small tax on wages paid by businesses</li>
      <li><strong>Commerce Tax:</strong> On businesses with $4M+ revenue</li>
    </ul>
    
    <h3>Retiree Tax Benefits</h3>
    <p>Nevada is exceptionally retiree-friendly:</p>
    <ul>
      <li><strong>Social Security:</strong> Not taxed (vs. 12 states that tax it)</li>
      <li><strong>Pension Income:</strong> No state tax on government or private pensions</li>
      <li><strong>401(k)/IRA Withdrawals:</strong> Take distributions tax-free at state level</li>
      <li><strong>Estate Tax:</strong> No state estate or inheritance tax</li>
    </ul>
    
    <h3>10-Year Savings Comparison</h3>
    <p>Long-term benefit of Nevada residency vs. California (assuming $200K annual income):</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Years</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Nevada Total Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">California Total Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cumulative Savings</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">1 Year</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$18,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$18,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">5 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$92,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$92,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$185,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$185,000</strong></td>
      </tr>
    </table>
    
    <h3>Establishing Nevada Residency</h3>
    <p>To qualify for Nevada tax benefits:</p>
    <ul>
      <li><strong>Physical Presence:</strong> Spend majority of year in Nevada (183+ days ideal)</li>
      <li><strong>Nevada Driver's License:</strong> Obtain within 30 days of residency</li>
      <li><strong>Voter Registration:</strong> Register to vote in Nevada</li>
      <li><strong>Primary Residence:</strong> Own or rent property as primary home</li>
      <li><strong>Intent to Stay:</strong> Demonstrable intent to remain (community ties, local bank accounts)</li>
    </ul>
    
    <h3>Domicile Audits - Be Prepared</h3>
    <p>High-tax states aggressively audit Nevada residents who previously lived there:</p>
    <ul>
      <li><strong>California FTB:</strong> Audits former residents claiming Nevada domicile</li>
      <li><strong>Proof Required:</strong> Cell phone records, credit card statements, utility bills</li>
      <li><strong>Safe Harbor:</strong> Own Nevada home, sell California home, change all documents</li>
      <li><strong>Consulting:</strong> Tax professional guidance essential for high earners</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'annualIncome',
        label: 'Annual Income',
        type: 'currency',
        required: true,
        placeholder: '150000',
        helpText: 'Total income from all sources (wages, business, investments)'
      },
      {
        name: 'rentalIncome',
        label: 'Annual Rental Income',
        type: 'currency',
        required: false,
        placeholder: '30000',
        helpText: 'Net rental income from investment properties'
      },
      {
        name: 'capitalGains',
        label: 'Annual Capital Gains',
        type: 'currency',
        required: false,
        placeholder: '50000',
        helpText: 'Gains from property sales, stock sales, etc.'
      },
      {
        name: 'comparisonState',
        label: 'Compare to State',
        type: 'select',
        required: true,
        options: [
          { value: 'california', label: 'California (13.3% top rate)' },
          { value: 'newyork', label: 'New York (10.9% top rate)' },
          { value: 'newjersey', label: 'New Jersey (10.75% top rate)' },
          { value: 'oregon', label: 'Oregon (9.9% top rate)' },
          { value: 'minnesota', label: 'Minnesota (9.85% top rate)' },
          { value: 'hawaii', label: 'Hawaii (11% top rate)' },
        ],
        helpText: 'Compare Nevada to your current or former state'
      },
      {
        name: 'yearsProjection',
        label: 'Years to Project',
        type: 'number',
        required: true,
        placeholder: '10',
        helpText: 'Calculate cumulative savings over multiple years'
      }
    ],
    results: [
      {
        name: 'nevadaTax',
        label: 'Nevada State Tax',
        type: 'currency',
        helpText: 'Annual state income tax in Nevada (always $0)'
      },
      {
        name: 'otherStateTax',
        label: 'Other State Tax',
        type: 'currency',
        helpText: 'Annual tax in comparison state'
      },
      {
        name: 'annualSavings',
        label: 'Annual Tax Savings',
        type: 'currency',
        helpText: 'How much you save annually by living in Nevada'
      },
      {
        name: 'monthlySavings',
        label: 'Monthly Savings',
        type: 'currency',
        helpText: 'Monthly tax savings from Nevada residency'
      },
      {
        name: 'cumulativeSavings',
        label: 'Cumulative Savings',
        type: 'currency',
        helpText: 'Total tax savings over projection period'
      },
      {
        name: 'lifetimeSavings',
        label: '30-Year Lifetime Savings',
        type: 'currency',
        helpText: 'Estimated lifetime savings over 30 years'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const annualIncome = parseFloat(inputs.annualIncome) || 0;
      const rentalIncome = parseFloat(inputs.rentalIncome) || 0;
      const capitalGains = parseFloat(inputs.capitalGains) || 0;
      const comparisonState = inputs.comparisonState || 'california';
      const yearsProjection = parseFloat(inputs.yearsProjection) || 10;

      const totalIncome = annualIncome + rentalIncome + capitalGains;

      const nevadaTax = 0;

      let stateTaxRate = 0;
      if (comparisonState === 'california') {
        if (totalIncome <= 10000) stateTaxRate = 0.01;
        else if (totalIncome <= 23000) stateTaxRate = 0.02;
        else if (totalIncome <= 38000) stateTaxRate = 0.04;
        else if (totalIncome <= 53000) stateTaxRate = 0.06;
        else if (totalIncome <= 68000) stateTaxRate = 0.08;
        else if (totalIncome <= 350000) stateTaxRate = 0.093;
        else if (totalIncome <= 590000) stateTaxRate = 0.103;
        else if (totalIncome <= 1000000) stateTaxRate = 0.113;
        else stateTaxRate = 0.133;
      } else if (comparisonState === 'newyork') {
        stateTaxRate = totalIncome > 25000000 ? 0.109 : totalIncome > 5000000 ? 0.103 : totalIncome > 2000000 ? 0.0965 : totalIncome > 1000000 ? 0.0882 : totalIncome > 215400 ? 0.0685 : 0.055;
      } else if (comparisonState === 'newjersey') {
        stateTaxRate = totalIncome > 1000000 ? 0.1075 : totalIncome > 500000 ? 0.0897 : totalIncome > 75000 ? 0.0637 : 0.035;
      } else if (comparisonState === 'oregon') {
        stateTaxRate = totalIncome > 125000 ? 0.099 : totalIncome > 10200 ? 0.09 : 0.05;
      } else if (comparisonState === 'minnesota') {
        stateTaxRate = totalIncome > 183340 ? 0.0985 : totalIncome > 98760 ? 0.0785 : totalIncome > 37850 ? 0.0685 : 0.0535;
      } else if (comparisonState === 'hawaii') {
        stateTaxRate = totalIncome > 200000 ? 0.11 : totalIncome > 150000 ? 0.10 : totalIncome > 96000 ? 0.09 : 0.065;
      }

      const otherStateTax = Math.round(totalIncome * stateTaxRate);

      const annualSavings = otherStateTax - nevadaTax;
      const monthlySavings = Math.round(annualSavings / 12);
      const cumulativeSavings = Math.round(annualSavings * yearsProjection);
      const lifetimeSavings = Math.round(annualSavings * 30);

      return {
        nevadaTax,
        otherStateTax,
        annualSavings,
        monthlySavings,
        cumulativeSavings,
        lifetimeSavings
      };
    }
  }
};
