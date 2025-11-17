import { CalculatorContent } from '@/types';

export const MASSACHUSETTS_TITLE_5_SEPTIC_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Massachusetts Title 5 Septic Cost Estimator',
  description: 'Calculate Massachusetts Title 5 septic system inspection and repair costs - compliance requirements and pricing',
  slug: 'massachusetts-title-5-septic-cost-estimator',
  icon: '🚰',
  category: 'Home Maintenance',
  article: {
    title: 'Understanding Massachusetts Title 5 Septic System Requirements',
    content: `
    <h2>Massachusetts Title 5 Septic System Guide</h2>
    <p>Massachusetts Title 5 is the state regulation governing septic system design, construction, inspection, and maintenance. For the approximately 400,000 Massachusetts homes with septic systems, Title 5 compliance is a critical and potentially expensive requirement, especially during property sales.</p>
    
    <h3>What is Title 5?</h3>
    <p>Title 5 (310 CMR 15.000) is Massachusetts' septic system code that:</p>
    <ul>
      <li><strong>Mandates Inspections:</strong> Required at property sale and certain other triggers</li>
      <li><strong>Sets Standards:</strong> Defines what makes a septic system "passing" or "failing"</li>
      <li><strong>Protects Environment:</strong> Prevents groundwater contamination from failed systems</li>
      <li><strong>Requires Repairs:</strong> Failing systems must be repaired before property transfer</li>
      <li><strong>Certified Inspectors:</strong> Only licensed inspectors can conduct Title 5 inspections</li>
    </ul>
    
    <h3>When is Title 5 Inspection Required?</h3>
    <p>Massachusetts law requires Title 5 inspections in these situations:</p>
    <ul>
      <li><strong>Property Sale:</strong> Must pass within 2 years of closing (most common trigger)</li>
      <li><strong>Property Expansion:</strong> Adding bedrooms or increasing wastewater flow >110 gallons/day</li>
      <li><strong>Failed System:</strong> Obvious signs of failure (sewage surfacing, odors)</li>
      <li><strong>Local Requirements:</strong> Some towns require periodic inspections (every 3-5 years)</li>
      <li><strong>Refinancing:</strong> Some lenders require current Title 5 for cash-out refinancing</li>
      <li><strong>Change of Use:</strong> Converting seasonal to year-round residence</li>
    </ul>
    
    <h3>Title 5 Inspection Costs</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical Inspection Cost</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Single Family Home (2-3 bedroom)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $750</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Standard inspection</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Larger Home (4+ bedrooms)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$750 - $1,200</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Larger system to inspect</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Difficult Access System</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800 - $1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Buried/hard-to-locate components</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Multi-Family Property</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,000 - $2,500+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Depends on units and complexity</td>
      </tr>
    </table>
    
    <h3>Common Title 5 Failure Reasons</h3>
    <p>Why septic systems fail Title 5 inspections:</p>
    <ul>
      <li><strong>Failed Leaching Field (Leach Field):</strong> 60% of failures - saturated soil, system overload</li>
      <li><strong>Inadequate Tank Size:</strong> Tank too small for current bedroom count</li>
      <li><strong>Missing or Broken Baffles:</strong> Septic tank inlet/outlet baffles damaged</li>
      <li><strong>Tank Structural Damage:</strong> Cracks, deterioration in concrete tanks</li>
      <li><strong>Groundwater Too High:</strong> Seasonal high water table above system</li>
      <li><strong>Setback Violations:</strong> System too close to well, property line, or water body</li>
      <li><strong>System Age:</strong> Systems >30 years old more likely to fail</li>
    </ul>
    
    <h3>Title 5 Repair Costs by Type</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Repair Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Cost Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Timeline</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tank Pumping (Routine)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $600</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1 day</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Baffle Repair/Replacement</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 - $1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-2 days</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Distribution Box Replacement</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500 - $3,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-3 days</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Septic Tank Replacement</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000 - $8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3-5 days</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Leach Field Repair (Partial)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,000 - $15,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-2 weeks</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Complete System Replacement</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000 - $50,000+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-4 weeks</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Alternative System (I/A)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000 - $40,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3-4 weeks</td>
      </tr>
    </table>
    
    <h3>Title 5 Inspection Process</h3>
    <p>What happens during a Title 5 inspection:</p>
    <ol>
      <li><strong>Tank Location:</strong> Inspector locates septic tank (may require excavation)</li>
      <li><strong>Tank Opening:</strong> Remove covers to access tank interior</li>
      <li><strong>Pumping:</strong> Tank must be pumped for interior inspection</li>
      <li><strong>Tank Inspection:</strong> Check baffles, walls, bottom for damage</li>
      <li><strong>Distribution Box:</strong> Locate and inspect D-box</li>
      <li><strong>Leach Field Assessment:</strong> Check for saturation, odors, surfacing wastewater</li>
      <li><strong>Measurements:</strong> Verify setbacks from well, property lines, water bodies</li>
      <li><strong>Report:</strong> Inspector provides pass/fail report within 14 days</li>
    </ol>
    
    <h3>Alternative/Innovative (I/A) Septic Systems</h3>
    <p>When conventional systems can't work, Massachusetts allows I/A systems:</p>
    <ul>
      <li><strong>When Required:</strong> Poor soil, high groundwater, small lots</li>
      <li><strong>Types:</strong> Aerobic treatment units, recirculating sand filters, nitrogen removal</li>
      <li><strong>Higher Cost:</strong> $20,000-$40,000 installed</li>
      <li><strong>Ongoing Maintenance:</strong> Requires annual service contract ($200-$500/year)</li>
      <li><strong>Electricity Required:</strong> Most I/A systems need power for pumps/aerators</li>
      <li><strong>Technology Approval:</strong> Must be Massachusetts-approved system</li>
    </ul>
    
    <h3>Massachusetts Septic Loan Programs</h3>
    <p>Financial assistance available for septic repairs:</p>
    <ul>
      <li><strong>MassDEP Septic Loan Program:</strong> 0% interest loans up to $40,000
        <ul>
          <li>No income restrictions</li>
          <li>15-year repayment term</li>
          <li>Offered through participating banks</li>
          <li>Covers repair or replacement costs</li>
        </ul>
      </li>
      <li><strong>Municipal Programs:</strong> Some towns offer additional assistance</li>
      <li><strong>Tax Deduction:</strong> Septic repairs may be tax-deductible as home improvement</li>
    </ul>
    
    <h3>Who Pays for Title 5 Repairs in Home Sale?</h3>
    <p>Negotiating Title 5 costs between buyer and seller:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typical Responsibility</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Inspection Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Seller pays (pre-listing or during sale)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Passing System</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No repairs needed</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Minor Repairs (<$2,000)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Usually seller pays</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Major Repairs ($5,000-$20,000)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Negotiable - often seller pays or credits buyer</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Full Replacement ($20,000+)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Negotiable - may reduce sale price or seller finances</td>
      </tr>
    </table>
    
    <h3>Title 5 "Conditional Pass"</h3>
    <p>Some systems receive conditional approval:</p>
    <ul>
      <li><strong>What It Means:</strong> System passes but has minor deficiencies</li>
      <li><strong>Valid for 2 Years:</strong> Same as full pass for property transfer</li>
      <li><strong>Common Conditions:</strong> Tank needs pumping, vegetation trimming, access improvement</li>
      <li><strong>Must Correct:</strong> Conditions must be addressed before next inspection</li>
      <li><strong>Example Costs:</strong> Typically $300-$1,500 to resolve conditions</li>
    </ul>
    
    <h3>Septic System Lifespan by Type</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">System Component</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Average Lifespan</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Replacement Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Concrete Septic Tank</td>
        <td style="border: 1px solid #ddd; padding: 8px;">40+ years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000-$8,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Steel Septic Tank</td>
        <td style="border: 1px solid #ddd; padding: 8px;">15-20 years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000-$8,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Leach Field</td>
        <td style="border: 1px solid #ddd; padding: 8px;">25-30 years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000-$25,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Distribution Box</td>
        <td style="border: 1px solid #ddd; padding: 8px;">20-30 years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,500-$3,500</td>
      </tr>
    </table>
    
    <h3>Title 5 Pre-Listing Strategy</h3>
    <p>Smart approach for sellers:</p>
    <ul>
      <li><strong>Inspect Early:</strong> Get Title 5 inspection 6-12 months before listing</li>
      <li><strong>Time for Repairs:</strong> If it fails, you have time to shop for contractors</li>
      <li><strong>Avoid Surprises:</strong> Know your costs before setting asking price</li>
      <li><strong>Marketing Advantage:</strong> "Passing Title 5" is valuable selling point</li>
      <li><strong>Negotiating Power:</strong> Pre-done Title 5 removes buyer objection</li>
    </ul>
    
    <h3>Title 5 Impact on Property Value</h3>
    <p>How septic status affects Massachusetts home values:</p>
    <ul>
      <li><strong>Passing Title 5:</strong> No impact (expected baseline)</li>
      <li><strong>Failed Title 5 (Minor Repair):</strong> Typically reduces value $2,000-$5,000</li>
      <li><strong>Failed Title 5 (Major Repair):</strong> Reduces value by repair cost + 10-20% hassle factor</li>
      <li><strong>Unknown Status:</strong> Buyers demand inspection contingency, may walk if fails</li>
      <li><strong>New Septic System:</strong> Can add $5,000-$15,000 value vs. old passing system</li>
    </ul>
    
    <h3>Preventive Maintenance to Avoid Failure</h3>
    <p>How to keep your septic system passing Title 5:</p>
    <ul>
      <li><strong>Regular Pumping:</strong> Every 2-3 years (costs $300-$600)</li>
      <li><strong>Water Conservation:</strong> Reduce wastewater volume (fix leaks, efficient fixtures)</li>
      <li><strong>Avoid Flushing:</strong> No wipes, feminine products, grease down drains</li>
      <li><strong>Protect Leach Field:</strong> No driving/parking over it, plant only grass</li>
      <li><strong>Divert Roof Runoff:</strong> Keep rainwater away from leach field</li>
      <li><strong>Annual Inspection:</strong> Check for wet spots, odors, slow drains</li>
      <li><strong>Records:</strong> Keep pumping/maintenance records for Title 5 inspector</li>
    </ul>
    
    <h3>Title 5 Regional Variations</h3>
    <p>Cost differences across Massachusetts:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typical Cost Multiplier</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Greater Boston</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.2-1.4x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Higher labor costs</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Cape Cod/Islands</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.3-1.6x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High groundwater, stricter nitrogen rules</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Western MA</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.9-1.1x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Lower labor costs</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South Shore</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1.0-1.2x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Baseline pricing</td>
      </tr>
    </table>
    
    <h3>Common Title 5 Misconceptions</h3>
    <ul>
      <li><strong>Myth:</strong> "I pump my tank regularly, so I'll definitely pass."
        <ul>
          <li><strong>Reality:</strong> Pumping helps but doesn't address leach field failure or structural issues</li>
        </ul>
      </li>
      <li><strong>Myth:</strong> "Title 5 is just a formality."
        <ul>
          <li><strong>Reality:</strong> 20-40% of systems fail initial inspection</li>
        </ul>
      </li>
      <li><strong>Myth:</strong> "I can skip Title 5 if buyer waives it."
        <ul>
          <li><strong>Reality:</strong> Massachusetts law requires passing Title 5 for property transfer - buyer can't waive</li>
        </ul>
      </li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'systemAge',
        label: 'Septic System Age',
        type: 'select',
        required: true,
        options: [
          { value: 'under10', label: 'Under 10 years' },
          { value: '10to20', label: '10-20 years' },
          { value: '20to30', label: '20-30 years' },
          { value: 'over30', label: 'Over 30 years' },
          { value: 'unknown', label: 'Unknown' },
        ],
        helpText: 'Age affects likelihood of failure'
      },
      {
        name: 'bedrooms',
        label: 'Number of Bedrooms',
        type: 'select',
        required: true,
        options: [
          { value: '2', label: '2 bedrooms' },
          { value: '3', label: '3 bedrooms' },
          { value: '4', label: '4 bedrooms' },
          { value: '5plus', label: '5+ bedrooms' },
        ],
        helpText: 'More bedrooms require larger septic capacity'
      },
      {
        name: 'lastPumping',
        label: 'Last Pumping',
        type: 'select',
        required: true,
        options: [
          { value: 'within2', label: 'Within 2 years' },
          { value: '2to5', label: '2-5 years ago' },
          { value: 'over5', label: 'Over 5 years ago' },
          { value: 'never', label: 'Never/Unknown' },
        ],
        helpText: 'Regular pumping reduces failure risk'
      },
      {
        name: 'knownIssues',
        label: 'Known Issues',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Known Issues' },
          { value: 'slowDrains', label: 'Slow Drains' },
          { value: 'odors', label: 'Odors or Wet Spots' },
          { value: 'surfacing', label: 'Sewage Surfacing' },
        ],
        helpText: 'Current problems indicate likely failure'
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'singleFamily', label: 'Single Family Home' },
          { value: 'multiFamily', label: 'Multi-Family' },
          { value: 'difficult', label: 'Difficult Access System' },
        ],
        helpText: 'Property type affects inspection and repair costs'
      },
      {
        name: 'region',
        label: 'Massachusetts Region',
        type: 'select',
        required: true,
        options: [
          { value: 'boston', label: 'Greater Boston' },
          { value: 'capeCod', label: 'Cape Cod/Islands' },
          { value: 'western', label: 'Western MA' },
          { value: 'southShore', label: 'South Shore' },
          { value: 'other', label: 'Other MA' },
        ],
        helpText: 'Region affects labor costs'
      }
    ],
    results: [
      {
        name: 'inspectionCost',
        label: 'Title 5 Inspection Cost',
        type: 'currency',
        helpText: 'Cost for Title 5 inspection including pumping'
      },
      {
        name: 'passLikelihood',
        label: 'Likelihood of Passing',
        type: 'text',
        helpText: 'Estimated probability system passes inspection'
      },
      {
        name: 'estimatedRepairCost',
        label: 'Estimated Repair Cost (if fails)',
        type: 'currency',
        helpText: 'Average cost if repairs are needed'
      },
      {
        name: 'worstCaseScenario',
        label: 'Worst Case (Full Replacement)',
        type: 'currency',
        helpText: 'Cost for complete system replacement if necessary'
      },
      {
        name: 'totalBudget',
        label: 'Recommended Budget',
        type: 'currency',
        helpText: 'Total amount to budget for Title 5 compliance'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const systemAge = inputs.systemAge || 'unknown';
      const bedrooms = inputs.bedrooms || '3';
      const lastPumping = inputs.lastPumping || 'never';
      const knownIssues = inputs.knownIssues || 'none';
      const propertyType = inputs.propertyType || 'singleFamily';
      const region = inputs.region || 'other';

      // Base inspection cost
      let inspectionCost = 650;
      
      if (propertyType === 'multiFamily') {
        inspectionCost = 1500;
      } else if (propertyType === 'difficult') {
        inspectionCost = 1000;
      }
      
      if (bedrooms === '5plus') {
        inspectionCost += 200;
      }

      // Regional multiplier
      let regionalMultiplier = 1.0;
      switch (region) {
        case 'boston':
          regionalMultiplier = 1.3;
          break;
        case 'capeCod':
          regionalMultiplier = 1.5;
          break;
        case 'western':
          regionalMultiplier = 0.95;
          break;
        case 'southShore':
          regionalMultiplier = 1.1;
          break;
      }

      inspectionCost = Math.round(inspectionCost * regionalMultiplier);

      // Calculate pass likelihood
      let passScore = 70;
      
      if (systemAge === 'under10') passScore += 20;
      else if (systemAge === '10to20') passScore += 10;
      else if (systemAge === '20to30') passScore -= 10;
      else if (systemAge === 'over30') passScore -= 25;
      else passScore -= 15;
      
      if (lastPumping === 'within2') passScore += 10;
      else if (lastPumping === '2to5') passScore += 5;
      else passScore -= 15;
      
      if (knownIssues === 'none') passScore += 15;
      else if (knownIssues === 'slowDrains') passScore -= 20;
      else if (knownIssues === 'odors') passScore -= 35;
      else passScore -= 50;
      
      passScore = Math.max(5, Math.min(95, passScore));
      
      let passLikelihood = '';
      if (passScore >= 80) passLikelihood = 'Very High (80%+)';
      else if (passScore >= 60) passLikelihood = 'Moderate (60-80%)';
      else if (passScore >= 40) passLikelihood = 'Low (40-60%)';
      else passLikelihood = 'Very Low (<40%)';

      // Estimated repair cost (if fails)
      let estimatedRepairCost = 8000;
      
      if (systemAge === 'over30' || systemAge === 'unknown') {
        estimatedRepairCost = 15000;
      }
      
      if (knownIssues === 'surfacing' || knownIssues === 'odors') {
        estimatedRepairCost = 18000;
      }
      
      estimatedRepairCost = Math.round(estimatedRepairCost * regionalMultiplier);

      // Worst case - full replacement
      let worstCaseScenario = 25000;
      if (bedrooms === '5plus') worstCaseScenario = 35000;
      if (region === 'capeCod') worstCaseScenario = 40000; // Often requires I/A systems
      
      worstCaseScenario = Math.round(worstCaseScenario * regionalMultiplier);

      // Recommended budget (weighted by pass likelihood)
      const failProbability = (100 - passScore) / 100;
      const totalBudget = Math.round(inspectionCost + (estimatedRepairCost * failProbability));

      return {
        inspectionCost,
        passLikelihood,
        estimatedRepairCost,
        worstCaseScenario,
        totalBudget
      };
    }
  }
};
