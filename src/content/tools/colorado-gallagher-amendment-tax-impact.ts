import { CalculatorContent } from '@/types';

export const COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT: CalculatorContent = {
  title: 'Colorado "Gallagher Amendment" Tax Impact Calculator',
  description: 'Calculate the impact of Colorado\'s former Gallagher Amendment on property taxes and understand the new flat residential assessment rate',
  slug: 'colorado-gallagher-amendment-tax-impact',
  icon: '🏔️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Colorado Gallagher Amendment Tax Impact',
    content: `
    <h2>Colorado Gallagher Amendment History & Impact</h2>
    <p>The Gallagher Amendment, a constitutional provision in place from 1982 to 2020, dramatically shaped Colorado property taxes for nearly 40 years. Though <strong>repealed in November 2020</strong>, its effects still influence property tax discussions today.</p>
    
    <h3>What Was the Gallagher Amendment?</h3>
    <p>The Gallagher Amendment required that <strong>residential property taxes remain at 45%</strong> of total statewide property tax revenue, while <strong>commercial properties paid 55%</strong>. To maintain this ratio as home values rose faster than commercial values, the residential assessment rate was repeatedly lowered.</p>
    
    <h3>Historical Assessment Rates</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Residential Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Commercial Rate</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">1982</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">21.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">29.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2003</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">7.96%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">29.0%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2019</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">7.15%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">29.0%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2021+ (Post-Repeal)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">7.15% (frozen)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">29.0%</td>
      </tr>
    </table>
    
    <h3>Why Was Gallagher Repealed?</h3>
    <p>The amendment created severe problems for rural Colorado:</p>
    <ul>
      <li><strong>Rural Revenue Crisis:</strong> As residential rates fell, rural areas (with more residential property than commercial) saw tax revenue plummet</li>
      <li><strong>School Funding Cuts:</strong> Rural school districts faced budget shortfalls as property tax income declined</li>
      <li><strong>Fire and Emergency Services:</strong> Fire districts couldn't afford equipment and staffing</li>
      <li><strong>Unpredictable Rates:</strong> Biennial reassessment rate changes made budgeting impossible</li>
    </ul>
    <p><strong>Voters repealed Gallagher in November 2020 with 57% approval (Proposition 120)</strong>, freezing the residential assessment rate at 7.15%.</p>
    
    <h3>Current Colorado Property Tax System (Post-Gallagher)</h3>
    <p>Since 2021, Colorado uses <strong>flat assessment rates</strong>:</p>
    <ul>
      <li><strong>Residential Property:</strong> 7.15% of actual value</li>
      <li><strong>Commercial Property:</strong> 29% of actual value</li>
      <li><strong>Agricultural Land:</strong> 29% of actual value</li>
      <li><strong>Renewable Energy:</strong> 29% of actual value</li>
    </ul>
    <p>These rates are now set by the legislature and can be adjusted through voter-approved measures.</p>
    
    <h3>How Property Taxes Are Calculated in Colorado</h3>
    <p>Colorado property taxes use a two-step process:</p>
    <ol>
      <li><strong>Actual Value:</strong> County assessor determines market value (reassessed every 2 years)</li>
      <li><strong>Assessed Value:</strong> Actual value × Assessment Rate (7.15% residential, 29% commercial)</li>
      <li><strong>Tax Owed:</strong> Assessed value × Local mill levy</li>
    </ol>
    <p><strong>Example:</strong> A $500,000 home in an area with 75 mill levy:</p>
    <ul>
      <li>Assessed Value: $500,000 × 7.15% = $35,750</li>
      <li>Annual Tax: $35,750 × 0.075 = $2,681</li>
    </ul>
    
    <h3>Impact on Different Colorado Regions</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Gallagher Impact</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Post-Repeal Effect</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Urban (Denver, Boulder)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Benefited from falling residential rates</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Taxes will rise with home values</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rural (Eastern Plains, Western Slope)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Lost revenue as rates fell</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Stable revenue base restored</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Mountain Resorts (Aspen, Vail)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Mixed - high values but low rates</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate tax increases likely</td>
      </tr>
    </table>
    
    <h3>TABOR and Property Tax Increases</h3>
    <p>Colorado's <strong>Taxpayer Bill of Rights (TABOR)</strong> limits government revenue growth. When combined with Gallagher repeal:</p>
    <ul>
      <li>Local governments can't automatically raise mill levies above TABOR limits</li>
      <li>Tax increases require voter approval</li>
      <li>TABOR refunds may occur in high-revenue years</li>
      <li>School districts particularly affected by combined TABOR + assessment rate changes</li>
    </ul>
    
    <h3>Future Outlook</h3>
    <p>Without Gallagher, Colorado property taxes face new dynamics:</p>
    <ul>
      <li><strong>Predictability:</strong> Frozen assessment rate provides budget stability</li>
      <li><strong>Urban Tax Increases:</strong> Metro areas will see higher effective tax bills as home values rise</li>
      <li><strong>Rural Stability:</strong> Rural districts gain reliable revenue sources</li>
      <li><strong>Legislative Control:</strong> Future changes require legislative action or ballot measures</li>
    </ul>
    
    <h3>How to Calculate Your Gallagher Impact</h3>
    <p>To understand how Gallagher affected your property taxes:</p>
    <ol>
      <li>Find your home's assessed value from your county assessor</li>
      <li>Identify your local mill levy (on your property tax bill)</li>
      <li>Calculate what you would have paid at different assessment rates</li>
      <li>Compare to current frozen 7.15% rate</li>
    </ol>
    
    <h3>Proposition 120 (2021) - Temporary Rate Reduction</h3>
    <p>In 2021, voters approved <strong>Proposition 120</strong>, temporarily reducing assessment rates for 2022-2023:</p>
    <ul>
      <li><strong>Residential:</strong> Reduced from 7.15% to 6.95% (2022-2023 only)</li>
      <li><strong>Commercial:</strong> Reduced to 27.9%</li>
      <li><strong>Reverted to 7.15%/29%</strong> in 2024</li>
    </ul>
    
    <h3>Regional Tax Burden Comparison</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical Mill Levy</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $500K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Denver County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">75-85 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,680 - $3,040</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Boulder County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">70-80 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500 - $2,860</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">El Paso County (Colorado Springs)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">65-75 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,325 - $2,680</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Pitkin County (Aspen)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">8-12 mills</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$286 - $430</td>
      </tr>
    </table>
    <p><strong>Note:</strong> Aspen's mill levies are extremely low due to very high property values, not Gallagher.</p>
    `
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Value',
        type: 'currency',
        required: true,
        placeholder: '500000',
        helpText: 'Current assessed value of your home'
      },
      {
        name: 'millLevy',
        label: 'Local Mill Levy',
        type: 'number',
        required: true,
        placeholder: '75',
        helpText: 'Your total local mill levy (find on property tax bill)'
      },
      {
        name: 'assessmentYear',
        label: 'Compare Assessment Year',
        type: 'select',
        required: true,
        options: [
          { value: '1982', label: '1982 (Original - 21%)' },
          { value: '2003', label: '2003 (7.96%)' },
          { value: '2019', label: '2019 (7.15%)' },
          { value: '2021', label: '2021+ (Post-Repeal - 7.15%)' },
          { value: '2022', label: '2022-2023 (Prop 120 - 6.95%)' },
        ],
        helpText: 'Select year to compare historical rates'
      }
    ],
    results: [
      {
        name: 'currentTax',
        label: 'Current Annual Tax (7.15%)',
        type: 'currency',
        helpText: 'Your property tax at current rate'
      },
      {
        name: 'historicalTax',
        label: 'Tax at Selected Historical Rate',
        type: 'currency',
        helpText: 'What you would have paid at the selected rate'
      },
      {
        name: 'difference',
        label: 'Difference',
        type: 'currency',
        helpText: 'Savings (+) or increase (-) compared to historical rate'
      },
      {
        name: 'percentChange',
        label: 'Percentage Change',
        type: 'text',
        helpText: 'Percent difference from historical rate'
      },
      {
        name: 'assessedValue',
        label: 'Assessed Value',
        type: 'currency',
        helpText: 'Taxable value after assessment rate applied'
      },
      {
        name: 'impact',
        label: 'Gallagher Impact Summary',
        type: 'text',
        helpText: 'How Gallagher affected your property taxes'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const millLevy = parseFloat(inputs.millLevy) || 0;
      const assessmentYear = inputs.assessmentYear || '2021';

      const currentRate = 0.0715;
      let historicalRate = 0.0715;
      let rateLabel = '';

      switch(assessmentYear) {
        case '1982':
          historicalRate = 0.21;
          rateLabel = '21.0%';
          break;
        case '2003':
          historicalRate = 0.0796;
          rateLabel = '7.96%';
          break;
        case '2019':
          historicalRate = 0.0715;
          rateLabel = '7.15%';
          break;
        case '2021':
          historicalRate = 0.0715;
          rateLabel = '7.15%';
          break;
        case '2022':
          historicalRate = 0.0695;
          rateLabel = '6.95%';
          break;
      }

      const assessedValue = Math.round(homeValue * currentRate);
      const currentTax = Math.round(assessedValue * (millLevy / 1000));
      
      const historicalAssessedValue = Math.round(homeValue * historicalRate);
      const historicalTax = Math.round(historicalAssessedValue * (millLevy / 1000));
      
      const difference = currentTax - historicalTax;
      const percentChange = historicalTax !== 0 
        ? `${((difference / historicalTax) * 100).toFixed(2)}%`
        : '0%';

      let impact = '';
      if (assessmentYear === '1982') {
        impact = `Gallagher reduced your tax bill by ${Math.abs(difference).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} compared to the original 1982 rate. Homeowners benefited significantly from falling rates over 38 years.`;
      } else if (assessmentYear === '2022') {
        impact = `Proposition 120 (2022-2023) temporarily reduced your taxes by ${Math.abs(difference).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. This rate reverted to 7.15% in 2024.`;
      } else if (difference === 0) {
        impact = `No change - this is the current frozen assessment rate after Gallagher repeal. Future changes require legislative action or ballot measures.`;
      } else {
        impact = `The selected rate would have resulted in a ${difference > 0 ? 'higher' : 'lower'} tax bill of ${Math.abs(difference).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`;
      }

      return {
        currentTax,
        historicalTax,
        difference,
        percentChange,
        assessedValue,
        impact
      };
    }
  }
};
