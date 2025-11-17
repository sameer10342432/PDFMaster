import { CalculatorContent } from '@/types';

export const AUSTIN_TX_MCMANSION_ORDINANCE_CHECKER_CONTENT: CalculatorContent = {
  title: 'Austin (TX) "McMansion" Ordinance Checker',
  description: 'Check if your Austin property or development plan complies with the 2023 residential compatibility standards',
  slug: 'austin-tx-mcmansion-ordinance-checker',
  icon: '🏘️',
  category: 'Zoning & Regulations',
  article: {
    title: 'Austin McMansion Ordinance Compliance Guide',
    content: `
    <h2>Austin's Residential Compatibility Standards</h2>
    <p>Austin's <strong>"McMansion" rules</strong>, officially called <strong>Residential Compatibility Standards</strong>, regulate the size, height, and setbacks of homes to preserve neighborhood character. Updated significantly in 2023, these rules affect virtually all residential construction and major renovations in Austin.</p>
    
    <h3>What is the McMansion Ordinance?</h3>
    <p>The McMansion ordinance limits the size of homes you can build on Austin residential lots. The goal is to prevent oversized houses that dominate smaller lots and clash with existing neighborhood character.</p>
    
    <h3>Key Regulations</h3>
    <p><strong>Maximum Floor Area Ratio (FAR):</strong></p>
    <ul>
      <li><strong>Lot under 5,750 sq ft:</strong> 0.40 FAR (40% of lot size)</li>
      <li><strong>Lot 5,750 - 6,999 sq ft:</strong> 2,300 sq ft max house</li>
      <li><strong>Lot 7,000 - 8,999 sq ft:</strong> 0.35 FAR</li>
      <li><strong>Lot 9,000 - 10,799 sq ft:</strong> 3,150 sq ft max house</li>
      <li><strong>Lot 10,800 sq ft or more:</strong> 0.29 FAR (capped at ~6,000 sq ft for very large lots)</li>
    </ul>
    
    <h3>FAR Calculation Example</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Lot Size</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">FAR</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Max House Size</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">5,000 sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.40</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2,000 sq ft</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">7,500 sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.35</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2,625 sq ft</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10,000 sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Fixed Cap</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3,150 sq ft</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">15,000 sq ft</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.29</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4,350 sq ft</td>
      </tr>
    </table>
    
    <h3>Height Restrictions</h3>
    <p>Austin limits building height based on proximity to side/rear lot lines:</p>
    <ul>
      <li><strong>Within 15 feet of side/rear:</strong> 18 feet max</li>
      <li><strong>15-25 feet from side/rear:</strong> 25 feet max (slope plane)</li>
      <li><strong>25+ feet from side/rear:</strong> 35 feet max</li>
    </ul>
    
    <h3>Setback Requirements</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Location</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Minimum Setback</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Front Yard</td>
        <td style="border: 1px solid #ddd; padding: 8px;">20-25 feet (varies by zoning)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Side Yard (Interior Lot)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5 feet minimum (10 feet combined)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Side Yard (Corner Lot)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10 feet on street side</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Rear Yard</td>
        <td style="border: 1px solid #ddd; padding: 8px;">25 feet (SF-2), varies by zone</td>
      </tr>
    </table>
    
    <h3>What Counts Toward FAR?</h3>
    <p><strong>Included in FAR calculation:</strong></p>
    <ul>
      <li>Main house square footage</li>
      <li>Attached garages</li>
      <li>Enclosed porches and patios</li>
      <li>Second stories</li>
      <li>Finished attics (if habitable)</li>
    </ul>
    
    <p><strong>Excluded from FAR:</strong></p>
    <ul>
      <li>Detached garages/ADUs under 550 sq ft</li>
      <li>Open, uncovered porches/patios</li>
      <li>Unfinished attics (not habitable)</li>
      <li>Unfinished basements (rare in Austin)</li>
    </ul>
    
    <h3>2023 Updates - What Changed</h3>
    <p>Austin updated the rules in May 2023:</p>
    <ul>
      <li><strong>Increased FAR:</strong> Slightly more square footage allowed on mid-size lots</li>
      <li><strong>Height Flexibility:</strong> Modified slope plane calculations</li>
      <li><strong>ADU Encouragement:</strong> Detached ADUs under 550 sq ft exempt from FAR</li>
      <li><strong>Tree Preservation:</strong> Enhanced protections for heritage trees</li>
      <li><strong>Impervious Cover:</strong> Stricter stormwater management requirements</li>
    </ul>
    
    <h3>Common Violations and Penalties</h3>
    <p>Violations can be costly:</p>
    <ul>
      <li><strong>Building Without Permit:</strong> $500-$2,000 per day fine</li>
      <li><strong>Exceeding FAR:</strong> Stop work order, forced demolition of excess</li>
      <li><strong>Height Violations:</strong> Reduce height or remove upper floors</li>
      <li><strong>Setback Encroachment:</strong> Variance required or removal</li>
    </ul>
    
    <h3>FAR Bonuses and Exceptions</h3>
    <p>You may qualify for additional square footage:</p>
    <ul>
      <li><strong>Universal Design:</strong> +200 sq ft for accessibility features</li>
      <li><strong>Green Building:</strong> Up to +150 sq ft for energy efficiency</li>
      <li><strong>Historic District:</strong> May have different rules (check with Historic Preservation)</li>
      <li><strong>S.M.A.R.T. Housing:</strong> Affordable housing projects get FAR bonuses</li>
    </ul>
    
    <h3>Impact on Property Values</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Compliant New Build</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full market value, easier to sell</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Non-Compliant (Grandfathered)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">May limit renovation options</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Violation Discovered</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Title issues, difficult to sell</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Small Lot with Max FAR</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Premium pricing (maximized value)</td>
      </tr>
    </table>
    
    <h3>Neighborhoods Most Affected</h3>
    <p>These Austin neighborhoods see the most McMansion enforcement:</p>
    <ul>
      <li><strong>Zilker:</strong> Small lots, high values, strict enforcement</li>
      <li><strong>Clarksville:</strong> Historic character preservation</li>
      <li><strong>Travis Heights:</strong> Teardown/rebuild hotspot</li>
      <li><strong>Hyde Park:</strong> Historic district, additional rules</li>
      <li><strong>Bouldin Creek:</strong> Gentrification tension zone</li>
      <li><strong>Barton Hills:</strong> Environmental and FAR restrictions</li>
    </ul>
    
    <h3>How to Check Compliance</h3>
    <ol>
      <li><strong>Find Your Lot Size:</strong> Check appraisal district records or survey</li>
      <li><strong>Calculate Max Square Footage:</strong> Use appropriate FAR for your lot size</li>
      <li><strong>Measure Current/Planned House:</strong> Include all FAR-counted areas</li>
      <li><strong>Check Zoning:</strong> Verify your property's zoning designation</li>
      <li><strong>Review Setbacks:</strong> Measure distances from property lines</li>
      <li><strong>Hire Surveyor:</strong> Professional survey ensures accuracy</li>
    </ol>
    
    <h3>Working with the City</h3>
    <p>Tips for navigating Austin's permitting:</p>
    <ul>
      <li><strong>Pre-Application Meeting:</strong> Free consultation with city planners</li>
      <li><strong>Hire Local Architect:</strong> Experience with Austin rules essential</li>
      <li><strong>Budget Extra Time:</strong> Permitting can take 6-12 weeks</li>
      <li><strong>Variance Applications:</strong> Difficult to obtain, require public hearing</li>
      <li><strong>Neighborhood Associations:</strong> Engage early to avoid opposition</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Austin Development Services:</strong> 512-978-4000</li>
      <li><strong>Online Permit Search:</strong> austintexas.gov/department/search-permits</li>
      <li><strong>Zoning Map:</strong> austintexas.gov/GIS/PropertyProfile</li>
      <li><strong>Land Development Code:</strong> Full text at library.municode.com</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'lotSize',
        label: 'Lot Size (sq ft)',
        type: 'number',
        required: true,
        placeholder: '7500',
        helpText: 'Total lot square footage from survey or tax records'
      },
      {
        name: 'plannedHouseSize',
        label: 'Planned/Current House Size (sq ft)',
        type: 'number',
        required: true,
        placeholder: '2500',
        helpText: 'Total square footage including all FAR-counted areas'
      },
      {
        name: 'detachedADU',
        label: 'Detached ADU/Garage Under 550 sq ft',
        type: 'select',
        required: true,
        options: [
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes (exempt from FAR)' },
        ],
        helpText: 'Detached structures under 550 sq ft are excluded from FAR'
      },
      {
        name: 'greenBuilding',
        label: 'Green Building Certification',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'None' },
          { value: 'yes', label: 'Yes (Austin Energy Green Building)' },
        ],
        helpText: 'Green building can add up to 150 sq ft FAR bonus'
      },
      {
        name: 'universalDesign',
        label: 'Universal Design Features',
        type: 'select',
        required: true,
        options: [
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes (accessibility features)' },
        ],
        helpText: 'Universal design adds 200 sq ft FAR bonus'
      }
    ],
    results: [
      {
        name: 'maxAllowedSize',
        label: 'Maximum Allowed House Size',
        type: 'text',
        helpText: 'Maximum square footage allowed under McMansion rules'
      },
      {
        name: 'appliedFAR',
        label: 'Applied FAR',
        type: 'text',
        helpText: 'Floor Area Ratio applied to your lot size'
      },
      {
        name: 'bonusSquareFeet',
        label: 'Bonus Square Footage',
        type: 'text',
        helpText: 'Additional square footage from green building/universal design'
      },
      {
        name: 'totalAllowedWithBonus',
        label: 'Total Allowed (with bonuses)',
        type: 'text',
        helpText: 'Maximum size including all applicable bonuses'
      },
      {
        name: 'yourPlannedFAR',
        label: 'Your Planned FAR',
        type: 'text',
        helpText: 'Floor Area Ratio of your planned/current house'
      },
      {
        name: 'complianceStatus',
        label: 'Compliance Status',
        type: 'text',
        helpText: 'Whether your project complies with Austin McMansion rules'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const lotSize = parseFloat(inputs.lotSize) || 0;
      const plannedHouseSize = parseFloat(inputs.plannedHouseSize) || 0;
      const detachedADU = inputs.detachedADU || 'no';
      const greenBuilding = inputs.greenBuilding || 'none';
      const universalDesign = inputs.universalDesign || 'no';

      let baseFAR = 0;
      let maxAllowedBase = 0;

      if (lotSize < 5750) {
        baseFAR = 0.40;
        maxAllowedBase = lotSize * baseFAR;
      } else if (lotSize < 7000) {
        baseFAR = 0;
        maxAllowedBase = 2300;
      } else if (lotSize < 9000) {
        baseFAR = 0.35;
        maxAllowedBase = lotSize * baseFAR;
      } else if (lotSize < 10800) {
        baseFAR = 0;
        maxAllowedBase = 3150;
      } else {
        baseFAR = 0.29;
        maxAllowedBase = lotSize * baseFAR;
      }

      let bonusSquareFeet = 0;
      if (greenBuilding === 'yes') bonusSquareFeet += 150;
      if (universalDesign === 'yes') bonusSquareFeet += 200;

      const totalAllowedWithBonus = Math.round(maxAllowedBase + bonusSquareFeet);
      const yourPlannedFAR = (plannedHouseSize / lotSize).toFixed(3);

      let complianceStatus = '';
      if (plannedHouseSize <= totalAllowedWithBonus) {
        complianceStatus = '✅ COMPLIANT - Your project meets Austin McMansion rules';
      } else {
        const excess = plannedHouseSize - totalAllowedWithBonus;
        complianceStatus = `❌ NON-COMPLIANT - Exceeds limit by ${excess.toLocaleString()} sq ft`;
      }

      const appliedFARText = baseFAR > 0 ? baseFAR.toFixed(2) : 'Fixed Cap';

      return {
        maxAllowedSize: `${Math.round(maxAllowedBase).toLocaleString()} sq ft`,
        appliedFAR: appliedFARText,
        bonusSquareFeet: `${bonusSquareFeet} sq ft`,
        totalAllowedWithBonus: `${totalAllowedWithBonus.toLocaleString()} sq ft`,
        yourPlannedFAR: yourPlannedFAR,
        complianceStatus
      };
    }
  }
};
