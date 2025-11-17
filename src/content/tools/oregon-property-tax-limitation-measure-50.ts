import { CalculatorContent } from '@/types';

export const OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT: CalculatorContent = {
  title: 'Oregon Property Tax Limitation (Measure 50)',
  description: 'Calculate Oregon property taxes under Measure 50 limitations with 3% annual growth cap and understand maximum assessed value vs real market value',
  slug: 'oregon-property-tax-limitation-measure-50',
  icon: '🏔️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Oregon Property Tax Limitation (Measure 50)',
    content: `
    <h2>Oregon Measure 50 Property Tax Guide</h2>
    <p>Oregon's <strong>Measure 50</strong>, passed in 1997, fundamentally changed how property taxes work in Oregon by creating a dual-value assessment system. Unlike most states, Oregon limits annual property tax increases to <strong>3% per year</strong>, regardless of how much your home's market value increases.</p>
    
    <h3>What is Measure 50?</h3>
    <p>Measure 50 is a constitutional amendment that:</p>
    <ul>
      <li><strong>Caps Annual Growth:</strong> Limits Maximum Assessed Value (MAV) increases to 3% per year</li>
      <li><strong>Separates Values:</strong> Creates distinction between Real Market Value (RMV) and Maximum Assessed Value (MAV)</li>
      <li><strong>Limits Tax Rates:</strong> Restricts permanent tax rates to $5 per $1,000 of assessed value for schools, $10 per $1,000 total</li>
      <li><strong>Protects Homeowners:</strong> Prevents dramatic tax increases during housing booms</li>
    </ul>
    
    <h3>Real Market Value (RMV) vs. Maximum Assessed Value (MAV)</h3>
    <p>Oregon uses two distinct property values:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Definition</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Use</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Real Market Value (RMV)</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Estimated market value determined by county assessor</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Used for comparison only, not for taxes</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Maximum Assessed Value (MAV)</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax value capped at 3% annual growth</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Actual value used to calculate property taxes</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Assessed Value (AV)</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Lower of RMV or MAV</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Final value taxes are calculated on</td>
      </tr>
    </table>
    
    <h3>How the 3% Cap Works</h3>
    <p>Each year, your Maximum Assessed Value can increase by a maximum of 3%, regardless of market conditions:</p>
    <ul>
      <li><strong>Year 1 MAV:</strong> $300,000</li>
      <li><strong>Year 2 MAV:</strong> $309,000 (3% increase)</li>
      <li><strong>Year 3 MAV:</strong> $318,270 (3% increase)</li>
      <li><strong>Year 4 MAV:</strong> $327,818 (3% increase)</li>
    </ul>
    <p>Even if your RMV jumps from $300,000 to $500,000 in one year, your MAV only increases by 3%.</p>
    
    <h3>Compression: When MAV Exceeds RMV Limits</h3>
    <p>Compression occurs when tax levies would exceed constitutional limits. Oregon law limits:</p>
    <ul>
      <li><strong>Education Permanent Rate:</strong> Maximum $5 per $1,000 of AV</li>
      <li><strong>General Government Permanent Rate:</strong> Maximum $10 per $1,000 of AV</li>
    </ul>
    <p>When compression occurs, <strong>local option levies are reduced first</strong>, potentially saving homeowners money but reducing funding for schools and local services.</p>
    
    <h3>Oregon Property Tax Rates by County (2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Avg Rate per $1,000</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $400K MAV</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Multnomah (Portland)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$17.89</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,156</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Washington (Beaverton, Hillsboro)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15.24</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,096</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Clackamas (Oregon City)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$14.67</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,868</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Lane (Eugene)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$13.82</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,528</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Deschutes (Bend)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$12.95</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,180</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Marion (Salem)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$14.23</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,692</td>
      </tr>
    </table>
    
    <h3>Exception Events That Reset MAV</h3>
    <p>Certain events can reset or change your Maximum Assessed Value:</p>
    <ul>
      <li><strong>New Construction:</strong> Additions over $10,000 add to MAV immediately</li>
      <li><strong>Major Remodeling:</strong> Substantial improvements increase MAV</li>
      <li><strong>Property Division:</strong> Subdividing land can reset MAV</li>
      <li><strong>Change in Use:</strong> Converting residential to commercial resets MAV</li>
      <li><strong>Disqualification Events:</strong> Loss of special assessment (farmland, historic)</li>
    </ul>
    <p><strong>Important:</strong> Regular repairs and maintenance do NOT increase MAV.</p>
    
    <h3>Impact of Measure 50 on Home Buyers</h3>
    <p>New homeowners face a significant tax reset:</p>
    <ul>
      <li><strong>Seller's MAV (2024):</strong> $250,000 (owned since 2000)</li>
      <li><strong>Sale Price / New RMV:</strong> $600,000</li>
      <li><strong>Buyer's New MAV:</strong> $600,000 (reset to purchase price)</li>
      <li><strong>Tax Impact:</strong> Buyer pays 2.4x more in property taxes than seller did</li>
    </ul>
    <p>This creates a <strong>"tax penalty" for new buyers</strong> compared to long-term homeowners.</p>
    
    <h3>Example: Long-Term Homeowner vs. New Buyer</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">RMV</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">MAV</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Tax ($15/$1K)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Homeowner (bought 1998)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$650,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$310,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,650</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">New Buyer (bought 2024)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$650,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$650,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$9,750</td>
      </tr>
    </table>
    <p>The new buyer pays <strong>$5,100 more per year</strong> for the same house!</p>
    
    <h3>Homestead Exemptions in Oregon</h3>
    <p>Oregon offers limited property tax relief programs:</p>
    <ul>
      <li><strong>Senior and Disabled Citizen Deferral:</strong> Defer taxes for homeowners 62+ or disabled with income under $53,000</li>
      <li><strong>Disabled Veterans Exemption:</strong> Up to $28,070 reduction in AV for 40%+ disabled vets</li>
      <li><strong>Working Family Household and Dependent Care Credit:</strong> Limited property tax relief for low-income families</li>
    </ul>
    <p><strong>Note:</strong> Oregon does NOT have a general homestead exemption like many other states.</p>
    
    <h3>How to Calculate Your Oregon Property Tax</h3>
    <p>Follow these steps:</p>
    <ol>
      <li><strong>Find Your MAV:</strong> Check your property tax statement or county assessor website</li>
      <li><strong>Find Your Tax Rate:</strong> Varies by location, typically $12-$18 per $1,000</li>
      <li><strong>Calculate:</strong> (MAV ÷ 1,000) × Tax Rate = Annual Tax</li>
      <li><strong>Example:</strong> ($350,000 ÷ 1,000) × $15.50 = $5,425 annual tax</li>
    </ol>
    
    <h3>MAV Growth Over Time (3% Annual Cap)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Years Owned</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Starting MAV: $300K</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Starting MAV: $500K</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">0 (Purchase)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">5 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$347,782</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$579,637</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$403,175</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$671,958</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">15 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$467,377</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$778,961</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">20 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$541,838</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$903,063</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">25 Years</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$628,279</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,047,132</td>
      </tr>
    </table>
    
    <h3>Investment Property Implications</h3>
    <p>Measure 50 significantly impacts real estate investors:</p>
    <ul>
      <li><strong>Cash Flow Hit:</strong> Property taxes reset to full market value when you buy</li>
      <li><strong>Cap Rate Impact:</strong> Must calculate taxes on purchase price, not seller's MAV</li>
      <li><strong>Long-Term Hold Advantage:</strong> 3% cap protects from runaway tax increases</li>
      <li><strong>Flip Disadvantage:</strong> Each sale resets MAV, penalizing frequent transactions</li>
    </ul>
    
    <h3>Criticisms of Measure 50</h3>
    <p>The measure has several controversial aspects:</p>
    <ul>
      <li><strong>Inequity:</strong> Identical neighbors pay vastly different taxes based on purchase timing</li>
      <li><strong>School Funding Crisis:</strong> Limited revenue growth starves public schools</li>
      <li><strong>Favors Wealthy:</strong> Benefits long-term homeowners in expensive homes most</li>
      <li><strong>Discourages Moving:</strong> Creates tax penalty for selling and buying</li>
      <li><strong>Commercial Advantage:</strong> Businesses holding property long-term pay less than new businesses</li>
    </ul>
    
    <h3>Measure 50 vs. California Proposition 13</h3>
    <p>Oregon's Measure 50 was modeled after California's famous Prop 13:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Oregon Measure 50</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">California Prop 13</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Annual Cap</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Base Year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1995-1997</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1975-1976</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax Rate Limit</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$15 per $1,000 (varies)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1% of assessed value</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Transferability</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes (over 55, some transfers)</td>
      </tr>
    </table>
    
    <h3>Appealing Your Oregon Property Assessment</h3>
    <p>You can appeal if you believe your RMV is too high:</p>
    <ol>
      <li><strong>Timing:</strong> File appeal by December 31st of tax year</li>
      <li><strong>Evidence:</strong> Provide comparable sales, appraisal, or damage documentation</li>
      <li><strong>File With:</strong> County Board of Property Tax Appeals (BOPTA)</li>
      <li><strong>Important:</strong> Appealing RMV only matters if RMV < MAV (rare in hot markets)</li>
    </ol>
    <p><strong>Note:</strong> You CANNOT appeal your MAV - it's set by the 3% formula.</p>
    
    <h3>How New Construction Affects MAV</h3>
    <p>Adding value to your property increases MAV outside the 3% cap:</p>
    <ul>
      <li><strong>Example:</strong> $400,000 MAV + $100,000 addition = $500,000 new MAV immediately</li>
      <li><strong>Minor Improvements:</strong> Under $10,000 may not trigger reassessment</li>
      <li><strong>Repairs:</strong> Fixing existing features doesn't increase MAV</li>
      <li><strong>Documentation:</strong> Keep receipts to prove maintenance vs. improvement</li>
    </ul>
    
    <h3>Future of Measure 50</h3>
    <p>Debate continues over potential reforms:</p>
    <ul>
      <li><strong>School Funding Crisis:</strong> Oregon schools consistently underfunded due to revenue limits</li>
      <li><strong>Reform Proposals:</strong> Various bills to increase cap from 3% to 5%</li>
      <li><strong>Split Roll Proposals:</strong> Tax commercial property differently than residential</li>
      <li><strong>Political Reality:</strong> Measure 50 is constitutional and very difficult to change</li>
    </ul>
    
    <h3>Strategic Considerations for Homeowners</h3>
    <p>How to work with Measure 50:</p>
    <ul>
      <li><strong>Buy and Hold:</strong> The longer you own, the bigger your tax advantage</li>
      <li><strong>Time Your Purchase:</strong> Buying in a market peak sets high MAV forever</li>
      <li><strong>Major Renovations:</strong> Do before buying (seller pays MAV reset) or wait until long-term hold</li>
      <li><strong>Inheritance Strategy:</strong> Heirs get to keep parents' low MAV (unlike California)</li>
      <li><strong>Check MAV Before Buying:</strong> Ask seller for tax statement to see their current MAV vs. your purchase price</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Oregon Department of Revenue:</strong> www.oregon.gov/dor - Official property tax information</li>
      <li><strong>County Assessor Offices:</strong> Find your property's RMV and MAV</li>
      <li><strong>Tax Statements:</strong> Mailed in October, due November 15th</li>
      <li><strong>BOPTA Appeals:</strong> File through county assessor's office</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price / Current RMV',
        type: 'currency',
        required: true,
        placeholder: '450000',
        helpText: 'Your purchase price or current Real Market Value'
      },
      {
        name: 'currentMAV',
        label: 'Current Maximum Assessed Value (MAV)',
        type: 'currency',
        required: true,
        placeholder: '350000',
        helpText: 'Found on your property tax statement. For new buyers, same as purchase price'
      },
      {
        name: 'county',
        label: 'County',
        type: 'select',
        required: true,
        options: [
          { value: 'multnomah', label: 'Multnomah (Portland) - $17.89/$1K' },
          { value: 'washington', label: 'Washington (Beaverton) - $15.24/$1K' },
          { value: 'clackamas', label: 'Clackamas (Oregon City) - $14.67/$1K' },
          { value: 'lane', label: 'Lane (Eugene) - $13.82/$1K' },
          { value: 'deschutes', label: 'Deschutes (Bend) - $12.95/$1K' },
          { value: 'marion', label: 'Marion (Salem) - $14.23/$1K' },
          { value: 'jackson', label: 'Jackson (Medford) - $13.56/$1K' },
        ],
        helpText: 'Select your county for accurate tax rate'
      },
      {
        name: 'yearsOwned',
        label: 'Years Owned (or Planning to Own)',
        type: 'number',
        required: true,
        placeholder: '5',
        helpText: 'Years you have owned or plan to own the property'
      },
      {
        name: 'newConstruction',
        label: 'New Construction / Addition Value',
        type: 'currency',
        required: false,
        placeholder: '0',
        helpText: 'Value of any additions or new construction (adds to MAV immediately)'
      },
      {
        name: 'exemptionType',
        label: 'Exemption Type',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Exemption' },
          { value: 'veteran', label: 'Disabled Veteran (40%+)' },
          { value: 'senior', label: 'Senior/Disabled Deferral (62+)' },
        ],
        helpText: 'Select if you qualify for property tax exemptions'
      }
    ],
    results: [
      {
        name: 'currentTaxableValue',
        label: 'Current Assessed Value (AV)',
        type: 'currency',
        helpText: 'The lower of your MAV or RMV - what taxes are calculated on'
      },
      {
        name: 'annualPropertyTax',
        label: 'Annual Property Tax',
        type: 'currency',
        helpText: 'Your estimated annual property tax bill'
      },
      {
        name: 'monthlyPropertyTax',
        label: 'Monthly Property Tax',
        type: 'currency',
        helpText: 'Monthly property tax (for mortgage escrow budgeting)'
      },
      {
        name: 'futureMAV',
        label: 'MAV After Ownership Period',
        type: 'currency',
        helpText: 'Your Maximum Assessed Value after the ownership period (3% annual growth)'
      },
      {
        name: 'futureTax',
        label: 'Projected Future Annual Tax',
        type: 'currency',
        helpText: 'Estimated tax after ownership period (assumes same tax rate)'
      },
      {
        name: 'totalTaxesPaid',
        label: 'Total Taxes Over Period',
        type: 'currency',
        helpText: 'Total property taxes paid over ownership period'
      },
      {
        name: 'mavGap',
        label: 'MAV vs RMV Gap',
        type: 'currency',
        helpText: 'Difference between Real Market Value and Maximum Assessed Value'
      },
      {
        name: 'taxSavings',
        label: 'Tax Savings from Measure 50',
        type: 'currency',
        helpText: 'Annual tax savings compared to paying on full market value'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const purchasePrice = parseFloat(inputs.purchasePrice) || 0;
      const currentMAV = parseFloat(inputs.currentMAV) || purchasePrice;
      const county = inputs.county || 'multnomah';
      const yearsOwned = parseInt(inputs.yearsOwned) || 0;
      const newConstruction = parseFloat(inputs.newConstruction) || 0;
      const exemptionType = inputs.exemptionType || 'none';

      const taxRates: Record<string, number> = {
        multnomah: 17.89,
        washington: 15.24,
        clackamas: 14.67,
        lane: 13.82,
        deschutes: 12.95,
        marion: 14.23,
        jackson: 13.56,
      };

      const taxRate = taxRates[county] || 15.00;

      let adjustedMAV = currentMAV + newConstruction;
      
      const futureMAV = adjustedMAV * Math.pow(1.03, yearsOwned);
      
      const currentTaxableValue = Math.min(adjustedMAV, purchasePrice);
      
      let baseAnnualTax = (currentTaxableValue / 1000) * taxRate;
      
      if (exemptionType === 'veteran') {
        const veteranReduction = (28070 / 1000) * taxRate;
        baseAnnualTax = Math.max(0, baseAnnualTax - veteranReduction);
      }
      
      const annualPropertyTax = Math.round(baseAnnualTax);
      const monthlyPropertyTax = Math.round(annualPropertyTax / 12);
      
      const futureTaxableValue = Math.min(futureMAV, purchasePrice);
      let futureTax = (futureTaxableValue / 1000) * taxRate;
      
      if (exemptionType === 'veteran') {
        const veteranReduction = (28070 / 1000) * taxRate;
        futureTax = Math.max(0, futureTax - veteranReduction);
      }
      
      futureTax = Math.round(futureTax);
      
      let totalTaxesPaid = 0;
      for (let year = 0; year < yearsOwned; year++) {
        const yearMAV = adjustedMAV * Math.pow(1.03, year);
        const yearTaxableValue = Math.min(yearMAV, purchasePrice);
        let yearTax = (yearTaxableValue / 1000) * taxRate;
        
        if (exemptionType === 'veteran') {
          const veteranReduction = (28070 / 1000) * taxRate;
          yearTax = Math.max(0, yearTax - veteranReduction);
        }
        
        totalTaxesPaid += yearTax;
      }
      
      totalTaxesPaid = Math.round(totalTaxesPaid);
      
      const mavGap = purchasePrice - currentTaxableValue;
      
      const taxWithoutMeasure50 = (purchasePrice / 1000) * taxRate;
      const taxSavings = Math.max(0, Math.round(taxWithoutMeasure50 - baseAnnualTax));

      return {
        currentTaxableValue: Math.round(currentTaxableValue),
        annualPropertyTax,
        monthlyPropertyTax,
        futureMAV: Math.round(futureMAV),
        futureTax,
        totalTaxesPaid,
        mavGap: Math.round(mavGap),
        taxSavings,
      };
    }
  }
};
