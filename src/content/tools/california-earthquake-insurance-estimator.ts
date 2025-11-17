import { CalculatorContent } from '@/types';

export const CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'California Earthquake Insurance Estimator',
  description: 'Calculate California earthquake insurance costs based on location, construction type, and coverage options',
  slug: 'california-earthquake-insurance-estimator',
  icon: '🏚️',
  category: 'Insurance Tools',
  article: {
    title: 'Understanding California Earthquake Insurance Costs',
    content: `
    <h2>California Earthquake Insurance Guide</h2>
    <p>California sits on the Pacific Ring of Fire with over 500 active fault lines, making earthquake insurance a critical consideration for homeowners. Despite the high risk, only 13% of California homeowners carry earthquake insurance, largely due to high costs and misconceptions about coverage.</p>
    
    <h3>What is Earthquake Insurance?</h3>
    <p>Standard homeowners insurance <strong>does not cover earthquake damage</strong>. Earthquake insurance is a separate policy that covers:</p>
    <ul>
      <li><strong>Structural Damage:</strong> Damage to your home's foundation, walls, and roof</li>
      <li><strong>Personal Property:</strong> Damage to belongings inside your home</li>
      <li><strong>Additional Living Expenses (ALE):</strong> Temporary housing if your home is uninhabitable</li>
      <li><strong>Loss of Use:</strong> Coverage for displacement during repairs</li>
    </ul>
    <p><strong>Important:</strong> Earthquake insurance typically does NOT cover pools, fences, detached garages, or landscaping unless specifically added.</p>
    
    <h3>Average Earthquake Insurance Costs in California</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Premium Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Bay Area (San Francisco, Oakland)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800 - $3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Very High (San Andreas, Hayward faults)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Los Angeles Area</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600 - $2,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High (San Andreas, Newport-Inglewood faults)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">San Diego County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$400 - $1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate (Rose Canyon fault)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Central Valley (Sacramento, Fresno)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$200 - $800</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Low-Moderate</td>
      </tr>
    </table>
    
    <h3>California Earthquake Authority (CEA)</h3>
    <p>The <strong>California Earthquake Authority (CEA)</strong> provides the majority of earthquake insurance in California:</p>
    <ul>
      <li>Covers over 70% of California's earthquake insurance market</li>
      <li>Policies sold through participating insurance companies (State Farm, Farmers, Allstate, etc.)</li>
      <li>Non-profit, publicly managed organization</li>
      <li>Standard deductibles: 10%, 15%, 20%, or 25% of dwelling coverage</li>
      <li>Lower premiums than most private insurers</li>
      <li>Standardized coverage options across all providers</li>
    </ul>
    
    <h3>Earthquake Insurance Cost Factors</h3>
    <p>Several key factors determine your earthquake insurance premium:</p>
    <ul>
      <li><strong>Distance from Fault Lines:</strong> Within 1 mile = highest premiums</li>
      <li><strong>Construction Type:</strong> Wood frame costs 40-60% less than unreinforced masonry</li>
      <li><strong>Year Built:</strong> Homes built before 1940 or after 2000 cost more/less respectively</li>
      <li><strong>Foundation Type:</strong> Bolted foundations reduce premiums by 10-20%</li>
      <li><strong>Number of Stories:</strong> Multi-story homes cost more to insure</li>
      <li><strong>Home Value:</strong> Higher replacement cost = higher premium</li>
      <li><strong>Deductible Amount:</strong> 25% deductible costs 50-70% less than 10% deductible</li>
      <li><strong>Retrofitting:</strong> Seismic retrofits can reduce premiums by 5-25%</li>
    </ul>
    
    <h3>Understanding Earthquake Deductibles</h3>
    <p>Earthquake insurance deductibles are <strong>significantly higher</strong> than standard homeowners deductibles:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Deductible</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">$500K Home Example</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Premium Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10% (Lowest)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$50,000 out-of-pocket</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Highest premium</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">15% (Common)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$75,000 out-of-pocket</td>
        <td style="border: 1px solid #ddd; padding: 8px;">20-30% lower premium</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">20% (Standard)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000 out-of-pocket</td>
        <td style="border: 1px solid #ddd; padding: 8px;">40-50% lower premium</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">25% (Highest)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$125,000 out-of-pocket</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50-70% lower premium</td>
      </tr>
    </table>
    
    <h3>Major California Fault Lines</h3>
    <p>Understanding proximity to major fault lines helps assess earthquake risk:</p>
    <ul>
      <li><strong>San Andreas Fault:</strong> 800-mile fault, "Big One" potential (magnitude 8.0+)</li>
      <li><strong>Hayward Fault:</strong> East Bay, 33% chance of magnitude 6.7+ by 2043</li>
      <li><strong>Calaveras Fault:</strong> East Bay, historically produces magnitude 6.0-6.5 earthquakes</li>
      <li><strong>San Jacinto Fault:</strong> Southern California, most active fault in SoCal</li>
      <li><strong>Newport-Inglewood Fault:</strong> Los Angeles/Orange County coastal areas</li>
      <li><strong>Puente Hills Thrust:</strong> Directly under downtown Los Angeles</li>
    </ul>
    
    <h3>CEA Coverage Options</h3>
    <p>California Earthquake Authority offers customizable coverage:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Coverage Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Basic</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Enhanced</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Dwelling Coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to policy limit</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to policy limit + extra coverage</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Personal Property</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000 min ($100K max)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$25,000 min ($200K max)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Additional Living Expenses</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,500 min ($100K max)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$10,000 min ($200K max)</td>
      </tr>
    </table>
    
    <h3>Seismic Retrofitting Benefits</h3>
    <p>Retrofitting your home reduces earthquake damage and insurance costs:</p>
    <ul>
      <li><strong>Foundation Bolting:</strong> Secures home to foundation ($1,500-$3,500) - saves 5-15% on premiums</li>
      <li><strong>Cripple Wall Bracing:</strong> Reinforces short walls between foundation and first floor ($2,000-$5,000) - saves 10-20%</li>
      <li><strong>Automatic Gas Shutoff Valve:</strong> Prevents post-earthquake fires ($400-$800) - may qualify for discount</li>
      <li><strong>Water Heater Strapping:</strong> Required by California law ($50-$150 DIY)</li>
    </ul>
    <p>California's <strong>Earthquake Brace + Bolt (EBB)</strong> program offers up to $3,000 in grants for retrofitting.</p>
    
    <h3>When Earthquake Insurance May Not Be Worth It</h3>
    <p>Consider skipping earthquake insurance if:</p>
    <ul>
      <li>Your home is in a very low-risk area (far from fault lines)</li>
      <li>You have substantial savings to cover repairs (6+ months of living expenses + rebuild costs)</li>
      <li>Your home has low replacement value (under $200,000)</li>
      <li>You plan to sell within 1-2 years</li>
      <li>Your mortgage is nearly paid off and you could afford to rebuild</li>
    </ul>
    
    <h3>When Earthquake Insurance is Essential</h3>
    <p>Strongly consider earthquake insurance if:</p>
    <ul>
      <li>You live within 10 miles of a major fault line</li>
      <li>Your home has unreinforced masonry or weak foundation</li>
      <li>You have a large mortgage and couldn't afford to pay it while rebuilding</li>
      <li>Your home replacement cost exceeds $500,000</li>
      <li>You lack emergency savings for a major disaster</li>
      <li>You live in a multi-unit building (condos especially vulnerable)</li>
    </ul>
    
    <h3>Historical California Earthquakes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Earthquake</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Magnitude</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Damage</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">San Francisco</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1906</td>
        <td style="border: 1px solid #ddd; padding: 8px;">7.9</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$524M (1906 dollars) - 80% of city destroyed</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Loma Prieta</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1989</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6.9</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$6B - 63 deaths</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Northridge</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1994</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6.7</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$25B - Most expensive US earthquake</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ridgecrest</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2019</td>
        <td style="border: 1px solid #ddd; padding: 8px;">7.1</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$5B - Largest in 20 years</td>
      </tr>
    </table>
    
    <h3>Earthquake Insurance vs. Self-Insurance</h3>
    <p>Compare the cost-benefit of purchasing insurance versus saving money:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Earthquake Insurance</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Self-Insurance</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Annual Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$800-$3,000/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Save $800-$3,000/year</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">After Major Earthquake</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Pay deductible (10-25%), insurance covers rest</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Pay full repair costs out-of-pocket</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10 Years No Earthquake</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Spent $8,000-$30,000 in premiums</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Saved $8,000-$30,000</td>
      </tr>
    </table>
    
    <h3>Filing an Earthquake Insurance Claim</h3>
    <p>What to know when filing a claim:</p>
    <ul>
      <li><strong>Immediate Reporting:</strong> Report damage within days of earthquake</li>
      <li><strong>Documentation:</strong> Photo/video all damage before repairs</li>
      <li><strong>Temporary Repairs:</strong> Make emergency repairs to prevent further damage (covered)</li>
      <li><strong>Claims Process:</strong> Adjuster inspection typically within 7-14 days</li>
      <li><strong>Payment Timeline:</strong> Initial payment often within 30 days for ALE, full settlement 60-120 days</li>
      <li><strong>Dispute Resolution:</strong> CEA offers appraisal process for disputed claims</li>
    </ul>
    
    <h3>Cost-Saving Strategies</h3>
    <p>Ways to reduce earthquake insurance premiums:</p>
    <ul>
      <li><strong>Increase Deductible:</strong> 25% deductible vs. 10% can save 50-70% on premium</li>
      <li><strong>Seismic Retrofit:</strong> Foundation bolting and cripple wall bracing earn discounts</li>
      <li><strong>Bundle Policies:</strong> Purchase through your homeowners insurance provider for bundle discount</li>
      <li><strong>Reduce Coverage Limits:</strong> Lower personal property or ALE coverage if you have fewer belongings</li>
      <li><strong>Annual Payment:</strong> Pay annually instead of monthly to avoid installment fees</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'homeValue',
        label: 'Home Replacement Value',
        type: 'currency',
        required: true,
        placeholder: '500000',
        helpText: 'Estimated cost to rebuild your home (not market value)'
      },
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        required: true,
        options: [
          { value: 'bayArea', label: 'Bay Area (San Francisco, Oakland, San Jose)' },
          { value: 'losAngeles', label: 'Los Angeles Area' },
          { value: 'sanDiego', label: 'San Diego County' },
          { value: 'centralValley', label: 'Central Valley (Sacramento, Fresno)' },
          { value: 'otherCalifornia', label: 'Other California' },
        ],
        helpText: 'Your region affects earthquake risk and premium'
      },
      {
        name: 'distanceFromFault',
        label: 'Distance from Major Fault Line',
        type: 'select',
        required: true,
        options: [
          { value: 'under1', label: 'Under 1 mile' },
          { value: '1to5', label: '1-5 miles' },
          { value: '5to15', label: '5-15 miles' },
          { value: 'over15', label: 'Over 15 miles' },
        ],
        helpText: 'Proximity to fault lines significantly impacts premiums'
      },
      {
        name: 'constructionType',
        label: 'Construction Type',
        type: 'select',
        required: true,
        options: [
          { value: 'woodFrame', label: 'Wood Frame (Most Common)' },
          { value: 'steelFrame', label: 'Steel Frame' },
          { value: 'reinforcedMasonry', label: 'Reinforced Masonry/Concrete' },
          { value: 'unreinforcedMasonry', label: 'Unreinforced Masonry (High Risk)' },
        ],
        helpText: 'Wood frame homes typically have lowest premiums'
      },
      {
        name: 'yearBuilt',
        label: 'Year Built',
        type: 'select',
        required: true,
        options: [
          { value: 'pre1940', label: 'Before 1940' },
          { value: '1940to1979', label: '1940-1979' },
          { value: '1980to1999', label: '1980-1999' },
          { value: '2000plus', label: '2000 or newer' },
        ],
        helpText: 'Newer homes meet stricter seismic building codes'
      },
      {
        name: 'retrofitted',
        label: 'Seismic Retrofitting',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Retrofitting' },
          { value: 'partial', label: 'Partial (Foundation Bolting OR Cripple Wall)' },
          { value: 'full', label: 'Full Retrofit (Bolting AND Cripple Wall)' },
        ],
        helpText: 'Retrofitting can reduce premiums by 5-25%'
      },
      {
        name: 'deductible',
        label: 'Deductible Percentage',
        type: 'select',
        required: true,
        options: [
          { value: '10', label: '10% (Lowest Deductible, Highest Premium)' },
          { value: '15', label: '15%' },
          { value: '20', label: '20%' },
          { value: '25', label: '25% (Highest Deductible, Lowest Premium)' },
        ],
        helpText: 'Deductible is a percentage of your dwelling coverage'
      },
      {
        name: 'personalProperty',
        label: 'Personal Property Coverage',
        type: 'currency',
        required: true,
        placeholder: '100000',
        helpText: 'Coverage for belongings damaged in earthquake'
      }
    ],
    results: [
      {
        name: 'annualPremium',
        label: 'Estimated Annual Premium',
        type: 'currency',
        helpText: 'Total yearly cost for earthquake insurance'
      },
      {
        name: 'monthlyPremium',
        label: 'Monthly Premium',
        type: 'currency',
        helpText: 'Approximate monthly payment (if paying in installments)'
      },
      {
        name: 'deductibleAmount',
        label: 'Earthquake Deductible Amount',
        type: 'currency',
        helpText: 'Out-of-pocket cost before insurance coverage begins'
      },
      {
        name: 'totalCoverage',
        label: 'Total Coverage Limit',
        type: 'currency',
        helpText: 'Maximum payout for dwelling + personal property'
      },
      {
        name: 'savingsWithHigherDeductible',
        label: 'Annual Savings with 25% Deductible',
        type: 'currency',
        helpText: 'How much you could save annually by choosing highest deductible'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const homeValue = parseFloat(inputs.homeValue) || 0;
      const location = inputs.location || 'otherCalifornia';
      const distanceFromFault = inputs.distanceFromFault || 'over15';
      const constructionType = inputs.constructionType || 'woodFrame';
      const yearBuilt = inputs.yearBuilt || '2000plus';
      const retrofitted = inputs.retrofitted || 'none';
      const deductiblePct = parseFloat(inputs.deductible) || 15;
      const personalProperty = parseFloat(inputs.personalProperty) || 0;

      // Base rate per $1000 of coverage by location
      let baseRate = 0;
      switch (location) {
        case 'bayArea':
          baseRate = 4.5;
          break;
        case 'losAngeles':
          baseRate = 3.8;
          break;
        case 'sanDiego':
          baseRate = 2.5;
          break;
        case 'centralValley':
          baseRate = 1.5;
          break;
        default:
          baseRate = 2.0;
      }

      // Distance from fault multiplier
      let faultMultiplier = 1.0;
      switch (distanceFromFault) {
        case 'under1':
          faultMultiplier = 1.8;
          break;
        case '1to5':
          faultMultiplier = 1.4;
          break;
        case '5to15':
          faultMultiplier = 1.1;
          break;
        default:
          faultMultiplier = 1.0;
      }

      // Construction type multiplier
      let constructionMultiplier = 1.0;
      switch (constructionType) {
        case 'woodFrame':
          constructionMultiplier = 1.0;
          break;
        case 'steelFrame':
          constructionMultiplier = 0.9;
          break;
        case 'reinforcedMasonry':
          constructionMultiplier = 1.3;
          break;
        case 'unreinforcedMasonry':
          constructionMultiplier = 2.2;
          break;
      }

      // Year built multiplier
      let yearMultiplier = 1.0;
      switch (yearBuilt) {
        case 'pre1940':
          yearMultiplier = 1.5;
          break;
        case '1940to1979':
          yearMultiplier = 1.2;
          break;
        case '1980to1999':
          yearMultiplier = 1.0;
          break;
        default:
          yearMultiplier = 0.85;
      }

      // Retrofit discount
      let retrofitDiscount = 1.0;
      switch (retrofitted) {
        case 'none':
          retrofitDiscount = 1.0;
          break;
        case 'partial':
          retrofitDiscount = 0.9;
          break;
        case 'full':
          retrofitDiscount = 0.8;
          break;
      }

      // Deductible multiplier
      let deductibleMultiplier = 1.0;
      switch (deductiblePct) {
        case 10:
          deductibleMultiplier = 1.0;
          break;
        case 15:
          deductibleMultiplier = 0.75;
          break;
        case 20:
          deductibleMultiplier = 0.55;
          break;
        case 25:
          deductibleMultiplier = 0.4;
          break;
      }

      // Calculate dwelling premium
      const dwellingPremium = (homeValue / 1000) * baseRate * faultMultiplier * 
                              constructionMultiplier * yearMultiplier * retrofitDiscount * 
                              deductibleMultiplier;

      // Personal property premium (typically 50% of dwelling rate)
      const personalPropertyPremium = (personalProperty / 1000) * (baseRate * 0.5) * 
                                      deductibleMultiplier;

      const annualPremium = Math.round(dwellingPremium + personalPropertyPremium);
      const monthlyPremium = Math.round(annualPremium / 12);
      const deductibleAmount = Math.round((homeValue * deductiblePct) / 100);
      const totalCoverage = homeValue + personalProperty;

      // Calculate savings with 25% deductible
      const premium25Deductible = (homeValue / 1000) * baseRate * faultMultiplier * 
                                  constructionMultiplier * yearMultiplier * retrofitDiscount * 0.4 +
                                  (personalProperty / 1000) * (baseRate * 0.5) * 0.4;
      const savingsWithHigherDeductible = Math.max(0, Math.round(annualPremium - premium25Deductible));

      return {
        annualPremium,
        monthlyPremium,
        deductibleAmount,
        totalCoverage,
        savingsWithHigherDeductible
      };
    }
  }
};
