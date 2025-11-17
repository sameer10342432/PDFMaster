import { CalculatorContent } from '@/types';

export const PROP_19_CALIFORNIA_TAX_BASIS_TRANSFER_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Prop 19 (California) Tax Basis Transfer Calculator',
  description: 'Calculate property tax impact when transferring California property to children under Proposition 19',
  slug: 'prop-19-california-tax-basis-transfer-calculator',
  icon: '🏠',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding California Proposition 19 Property Tax Transfers',
    content: `
    <h2>California Proposition 19 Guide</h2>
    <p><strong>Proposition 19</strong>, passed in November 2020 and effective February 16, 2021, dramatically changed California's property tax inheritance rules. For families transferring property to children, the tax implications can be severe and costly.</p>
    
    <h3>What is Proposition 19?</h3>
    <p>Prop 19 made TWO major changes to California property tax law:</p>
    <ul>
      <li><strong>Parent-Child Transfers (THIS CALCULATOR):</strong> Limited the property tax exclusion when parents transfer property to children</li>
      <li><strong>Over-55 Portability:</strong> Expanded ability for seniors 55+ to transfer tax base to replacement home anywhere in California (up to 3 times)</li>
    </ul>
    
    <h3>The New Parent-Child Transfer Rules</h3>
    <p>Under <strong>old law (Prop 13 + Prop 58)</strong>:</p>
    <ul>
      <li>Parents could transfer ANY property to children with no property tax increase</li>
      <li>Primary residence: unlimited value, tax base transferred</li>
      <li>Other properties: up to $1M combined assessed value</li>
      <li>Result: Children inherited parents' low Prop 13 tax basis</li>
    </ul>
    
    <p>Under <strong>new law (Prop 19)</strong> - effective Feb 16, 2021:</p>
    <ul>
      <li><strong>Primary Residence Only:</strong> Tax base transfer ONLY for primary residence</li>
      <li><strong>Child Must Move In:</strong> Child must use it as their own primary residence within 1 year</li>
      <li><strong>$1 Million Cap:</strong> Tax base transfer limited to current market value MINUS $1M</li>
      <li><strong>All Other Properties:</strong> Reassessed to full market value (massive tax increases)</li>
    </ul>
    
    <h3>Example: The $500K Tax Increase</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Before Prop 19</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">After Prop 19</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Beach House (Not Primary)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Transfer at parent's basis</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Reassessed to market value</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Parent's Purchase Price (1980)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Current Assessed Value (with 2%/yr increases)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$220,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$220,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Current Market Value</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>New Assessed Value</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$220,000</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$3,000,000</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Annual Property Tax (1.1%)</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$2,420</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$33,000</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Annual Tax Increase</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">—</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>+$30,580</strong></td>
      </tr>
    </table>
    
    <h3>Primary Residence Transfer Example</h3>
    <p>Even primary residences face new limits:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Factor</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Details</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Parent's Assessed Value</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$400,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Current Market Value</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,500,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Market Value Minus $1M</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,500,000 ($2.5M - $1M)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Child Moves In (Primary)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes, within 1 year</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>New Assessed Value</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$1,500,000</strong> (higher of parent's basis + $1M or market - $1M)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Tax Increase</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$12,100/year</strong> (from $4,400 to $16,500)</td>
      </tr>
    </table>
    
    <h3>Who Pays the Price?</h3>
    <p>Prop 19 disproportionately affects:</p>
    <ul>
      <li><strong>Beach Property Families:</strong> Second homes worth millions with low tax bases</li>
      <li><strong>Rental Property Portfolios:</strong> Multi-generational real estate businesses</li>
      <li><strong>Farm Families:</strong> Agricultural land held for decades</li>
      <li><strong>Middle-Class Families:</strong> Los Angeles, San Francisco, San Diego homes bought 30-40 years ago</li>
    </ul>
    
    <h3>Prop 19 Loopholes and Strategies</h3>
    <p>Limited planning options remain:</p>
    <ul>
      <li><strong>Transfer Before Death:</strong> Parents could gift property before passing (but lose step-up in basis for federal capital gains)</li>
      <li><strong>LLC/Trust Structures:</strong> Complex strategies (consult attorney - IRS may challenge)</li>
      <li><strong>Child Moves In:</strong> If child makes it primary residence, $1M cushion applies</li>
      <li><strong>Sell Before Transfer:</strong> Parent sells at capital gains rates vs. child paying annual property tax</li>
      <li><strong>Keep in Parents' Name:</strong> Delay transfer, let child inherit (same rules apply)</li>
    </ul>
    
    <h3>Critical Deadlines</h3>
    <ul>
      <li><strong>Effective Date:</strong> February 16, 2021</li>
      <li><strong>Transfers Before Feb 16, 2021:</strong> Old rules apply (Prop 13 + Prop 58)</li>
      <li><strong>Transfers After Feb 16, 2021:</strong> New Prop 19 rules apply</li>
      <li><strong>Child Must Claim Homeowner's Exemption:</strong> Within 1 year to qualify for $1M cushion</li>
    </ul>
    
    <h3>Real-World Impact Stories</h3>
    <p>California families have faced devastating consequences:</p>
    <ul>
      <li><strong>Malibu Family:</strong> $4M beach house, $200K assessed value → $44,000 annual tax vs. $2,200</li>
      <li><strong>Agricultural Family:</strong> Forced to sell 100-year family farm due to $80K annual tax increase</li>
      <li><strong>San Francisco Duplex:</strong> Rental property, child must pay $25K/year more in taxes</li>
    </ul>
    
    <h3>Comparison: Before and After Prop 19</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Before Prop 19</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">After Prop 19</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Primary Residence (Child Moves In)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full transfer of tax base</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited to market value minus $1M</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Primary Residence (Child Rents It)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full transfer of tax base</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Reassessed to market value</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Vacation/Second Home</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to $1M combined (Prop 58)</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Reassessed to market value</strong></td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rental Properties</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to $1M combined</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Reassessed to market value</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Commercial Property</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to $1M combined</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Reassessed to market value</strong></td>
      </tr>
    </table>
    
    <h3>What to Do Now</h3>
    <p>If you own California property and plan to pass it to children:</p>
    <ol>
      <li><strong>Consult a Tax Attorney:</strong> Prop 19 planning requires expert guidance</li>
      <li><strong>Calculate the Impact:</strong> Use this calculator to understand future tax burden</li>
      <li><strong>Consider Selling:</strong> In some cases, selling and gifting cash is better</li>
      <li><strong>Evaluate Trust Strategies:</strong> Irrevocable trusts may offer limited benefits</li>
      <li><strong>Review Estate Plan:</strong> Adjust your plan based on Prop 19 realities</li>
    </ol>
    `
  },
  calculator: {
    fields: [
      {
        name: 'currentAssessedValue',
        label: 'Current Assessed Value',
        type: 'currency',
        required: true,
        placeholder: '300000',
        helpText: "Parent's current property tax assessed value (on tax bill)"
      },
      {
        name: 'currentMarketValue',
        label: 'Current Market Value',
        type: 'currency',
        required: true,
        placeholder: '2000000',
        helpText: 'Current fair market value of the property'
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'primary_child_moves', label: 'Primary Residence - Child Will Live There' },
          { value: 'primary_child_rents', label: 'Primary Residence - Child Will Rent It Out' },
          { value: 'second_home', label: 'Second Home / Vacation Property' },
          { value: 'rental', label: 'Rental Property' },
          { value: 'commercial', label: 'Commercial Property' },
        ],
        helpText: 'Type of property being transferred'
      },
      {
        name: 'propertyTaxRate',
        label: 'Total Property Tax Rate',
        type: 'percentage',
        required: true,
        placeholder: '1.1',
        helpText: 'Total rate including base 1% + local bonds/assessments'
      }
    ],
    results: [
      {
        name: 'beforeProp19Tax',
        label: 'Annual Tax Before Prop 19 (Old Rules)',
        type: 'currency',
        helpText: 'Annual property tax if transferred before Feb 16, 2021'
      },
      {
        name: 'afterProp19AssessedValue',
        label: 'New Assessed Value Under Prop 19',
        type: 'currency',
        helpText: 'Assessed value after transfer under Prop 19'
      },
      {
        name: 'afterProp19Tax',
        label: 'Annual Tax After Prop 19 (New Rules)',
        type: 'currency',
        helpText: 'Annual property tax under current Prop 19 rules'
      },
      {
        name: 'annualTaxIncrease',
        label: 'Annual Tax Increase',
        type: 'currency',
        helpText: 'Additional annual property tax due to Prop 19'
      },
      {
        name: 'tenYearCost',
        label: '10-Year Additional Cost',
        type: 'currency',
        helpText: 'Total extra tax paid over 10 years'
      },
      {
        name: 'monthlyIncrease',
        label: 'Monthly Tax Increase',
        type: 'currency',
        helpText: 'Additional monthly property tax burden'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const currentAssessedValue = parseFloat(inputs.currentAssessedValue) || 0;
      const currentMarketValue = parseFloat(inputs.currentMarketValue) || 0;
      const propertyType = inputs.propertyType || 'second_home';
      const propertyTaxRate = (parseFloat(inputs.propertyTaxRate) || 1.1) / 100;

      const beforeProp19Tax = Math.round(currentAssessedValue * propertyTaxRate);

      let afterProp19AssessedValue = currentMarketValue;

      if (propertyType === 'primary_child_moves') {
        const marketMinusOneMillion = currentMarketValue - 1000000;
        const basisPlusOneMillion = currentAssessedValue + 1000000;
        afterProp19AssessedValue = Math.max(marketMinusOneMillion, basisPlusOneMillion);
        
        if (afterProp19AssessedValue < currentAssessedValue) {
          afterProp19AssessedValue = currentAssessedValue;
        }
      } else {
        afterProp19AssessedValue = currentMarketValue;
      }

      const afterProp19Tax = Math.round(afterProp19AssessedValue * propertyTaxRate);
      const annualTaxIncrease = afterProp19Tax - beforeProp19Tax;
      const monthlyIncrease = Math.round(annualTaxIncrease / 12);
      const tenYearCost = Math.round(annualTaxIncrease * 10);

      return {
        beforeProp19Tax,
        afterProp19AssessedValue,
        afterProp19Tax,
        annualTaxIncrease,
        tenYearCost,
        monthlyIncrease
      };
    }
  }
};
