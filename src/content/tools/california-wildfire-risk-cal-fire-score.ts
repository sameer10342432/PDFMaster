import { CalculatorContent } from '@/types';

export const CALIFORNIA_WILDFIRE_RISK_CAL_FIRE_SCORE_CONTENT: CalculatorContent = {
  title: 'California Wildfire Risk (CAL FIRE) Score',
  description: 'Calculate California wildfire risk score for your property using CAL FIRE methodology and FHSZ classifications',
  slug: 'california-wildfire-risk-cal-fire-score',
  icon: '🔥',
  category: 'Risk Assessment',
  article: {
    title: 'Understanding California Wildfire Risk and CAL FIRE Scores',
    content: `
    <h2>California Wildfire Risk Assessment Guide</h2>
    <p>California faces the highest wildfire risk of any state in the U.S., with over 25% of the state's population living in high or very high fire hazard severity zones (FHSZ). Understanding your property's wildfire risk is critical for insurance costs, property values, and safety planning.</p>
    
    <h3>What is CAL FIRE Wildfire Risk Scoring?</h3>
    <p>CAL FIRE (California Department of Forestry and Fire Protection) uses <strong>Fire Hazard Severity Zones (FHSZ)</strong> to classify wildfire risk across California. These zones consider:</p>
    <ul>
      <li><strong>Fuel Loading:</strong> Amount of burnable vegetation and materials</li>
      <li><strong>Topography:</strong> Steep slopes accelerate fire spread</li>
      <li><strong>Weather Patterns:</strong> Wind, temperature, and humidity</li>
      <li><strong>Fire History:</strong> Historical burn frequency in the area</li>
      <li><strong>Proximity to Wildland:</strong> Distance from wildland-urban interface (WUI)</li>
    </ul>
    
    <h3>Fire Hazard Severity Zones (FHSZ)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Zone</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Characteristics</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Non-Wildland/Urban</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Minimal</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Urban areas with no wildland vegetation</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Medium</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Some wildland vegetation, lower fire frequency</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Significant wildland fuels, moderate fire history</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Very High (VHFHSZ)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Extreme</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Heavy vegetation, steep slopes, high fire frequency</td>
      </tr>
    </table>
    
    <h3>Insurance Impact by Fire Zone</h3>
    <p>Wildfire risk zones dramatically affect insurance availability and cost:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fire Zone</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Insurance Premium Multiplier</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Coverage Availability</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Minimal Risk</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.0x (Baseline)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Widely Available</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.5-2.0x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Available</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.5-4.0x</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited Options</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Very High</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.0-8.0x+</td>
        <td style="border: 1px solid #ddd; padding: 8px;">FAIR Plan Often Required</td>
      </tr>
    </table>
    
    <h3>California FAIR Plan - Wildfire Insurance of Last Resort</h3>
    <p>When private insurers won't cover high-risk properties, the <strong>California FAIR Plan</strong> provides essential coverage:</p>
    <ul>
      <li>Covers properties in Very High Fire Hazard Severity Zones</li>
      <li>Basic coverage limits (typically $3 million maximum)</li>
      <li>More expensive than traditional insurance (often 2-3x cost)</li>
      <li>Can be combined with "wrap-around" policies for additional coverage</li>
      <li>Over 400,000 California homes now rely on FAIR Plan</li>
    </ul>
    
    <h3>Wildfire Risk Factors</h3>
    <p>Key factors that increase California wildfire risk:</p>
    <ul>
      <li><strong>Vegetation Density:</strong> Dense brush, chaparral, and dead trees</li>
      <li><strong>Distance from Fire Station:</strong> Response times >30 minutes increase risk</li>
      <li><strong>Road Access:</strong> Single-access roads limit evacuation and firefighting</li>
      <li><strong>Defensible Space:</strong> Lack of cleared 100-foot perimeter around home</li>
      <li><strong>Roof Material:</strong> Wood shakes vs. Class A fire-rated roofing</li>
      <li><strong>Santa Ana Winds:</strong> Seasonal high winds (September-November)</li>
    </ul>
    
    <h3>Highest Risk California Counties</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notable Fires (Last 10 Years)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Butte</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Extreme</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Camp Fire (2018) - Deadliest in state history</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Sonoma</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Very High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tubbs Fire (2017), Glass Fire (2020)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Napa</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Very High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Atlas Fire (2017), Glass Fire (2020)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Los Angeles</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High-Very High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Woolsey Fire (2018), Bobcat Fire (2020)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">San Diego</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Valley Fire (2020), Poomacha Fire</td>
      </tr>
    </table>
    
    <h3>Defensible Space Requirements (CA PRC 4291)</h3>
    <p>California law requires homeowners in fire zones to maintain defensible space:</p>
    <ul>
      <li><strong>Zone 0 (0-5 feet from home):</strong> Non-combustible materials only</li>
      <li><strong>Zone 1 (5-30 feet):</strong> Low-fuel vegetation, trimmed trees</li>
      <li><strong>Zone 2 (30-100 feet):</strong> Fuel reduction, tree spacing, removal of dead vegetation</li>
      <li><strong>Enforcement:</strong> Fines up to $500 for non-compliance</li>
      <li><strong>Insurance Requirement:</strong> Many insurers require inspections verifying compliance</li>
    </ul>
    
    <h3>Wildfire-Resistant Construction Standards</h3>
    <p>California's Chapter 7A building code requires fire-resistant construction in VHFHSZ:</p>
    <ul>
      <li><strong>Class A Fire-Rated Roof:</strong> Asphalt shingles, metal, tile, or concrete</li>
      <li><strong>Ignition-Resistant Materials:</strong> Fiber-cement siding, stucco</li>
      <li><strong>Ember-Resistant Vents:</strong> 1/8-inch mesh screens</li>
      <li><strong>Dual-Pane Windows:</strong> Tempered glass reduces ember ignition</li>
      <li><strong>Enclosed Eaves:</strong> Prevents ember intrusion</li>
    </ul>
    
    <h3>Property Value Impact</h3>
    <p>Wildfire risk affects California property values:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Value Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Near recent wildfire (0-2 years)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">-10% to -20%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">In VHFHSZ with FAIR Plan insurance only</td>
        <td style="border: 1px solid #ddd; padding: 8px;">-15% to -30%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fire-hardened home with defensible space</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+5% to +10% (premium vs. non-compliant)</td>
      </tr>
    </table>
    
    <h3>Risk Mitigation Strategies</h3>
    <p>Ways to reduce wildfire risk and insurance costs:</p>
    <ul>
      <li><strong>Professional Fuel Reduction:</strong> Hire certified arborists ($1,500-$5,000)</li>
      <li><strong>Roof Replacement:</strong> Upgrade to Class A rated materials ($12,000-$30,000)</li>
      <li><strong>Ember-Resistant Vents:</strong> Seal all attic and crawl space vents ($500-$1,500)</li>
      <li><strong>Fire-Resistant Landscaping:</strong> Replace flammable plants with succulents, rock gardens</li>
      <li><strong>Install Fire Sprinkler System:</strong> External sprinklers for roof/walls ($5,000-$15,000)</li>
      <li><strong>Join Firewise USA:</strong> Certification can reduce insurance premiums 5-20%</li>
    </ul>
    
    <h3>Finding Your Property's Fire Zone</h3>
    <p>Check your California wildfire risk zone:</p>
    <ul>
      <li><strong>CAL FIRE FHSZ Viewer:</strong> Official map viewer at osfm.fire.ca.gov/divisions/community-wildfire-preparedness-and-mitigation/wildland-hazards-building-codes/fire-hazard-severity-zones-maps/</li>
      <li><strong>County Fire Marshal:</strong> Local jurisdiction maintains detailed risk maps</li>
      <li><strong>Disclosure:</strong> Sellers must disclose VHFHSZ status in real estate transactions</li>
    </ul>
    
    <h3>California Wildfire Insurance Crisis</h3>
    <p>Recent developments affecting California homeowners:</p>
    <ul>
      <li>State Farm stopped accepting new homeowners policies in California (2023)</li>
      <li>Allstate ceased new homeowners insurance in California (2022)</li>
      <li>AIG, Chubb reducing exposure in high-risk areas</li>
      <li>FAIR Plan enrollment increased 170% (2018-2024)</li>
      <li>Average California homeowners insurance up 40% (2019-2024)</li>
      <li>Proposed legislation to stabilize insurance market (AB 2167, SB 894)</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'County',
        type: 'select',
        required: true,
        options: [
          { value: 'losAngeles', label: 'Los Angeles' },
          { value: 'sanDiego', label: 'San Diego' },
          { value: 'orange', label: 'Orange' },
          { value: 'riverside', label: 'Riverside' },
          { value: 'sanBernardino', label: 'San Bernardino' },
          { value: 'alameda', label: 'Alameda' },
          { value: 'sacramento', label: 'Sacramento' },
          { value: 'contraCostaost', label: 'Contra Costa' },
          { value: 'fresno', label: 'Fresno' },
          { value: 'ventura', label: 'Ventura' },
          { value: 'sanMateo', label: 'San Mateo' },
          { value: 'kern', label: 'Kern' },
          { value: 'santaClara', label: 'Santa Clara' },
          { value: 'sonoma', label: 'Sonoma' },
          { value: 'napa', label: 'Napa' },
          { value: 'butte', label: 'Butte' },
          { value: 'other', label: 'Other County' },
        ],
        helpText: 'Select your California county'
      },
      {
        name: 'fireZone',
        label: 'Fire Hazard Severity Zone (FHSZ)',
        type: 'select',
        required: true,
        options: [
          { value: 'minimal', label: 'Non-Wildland/Urban (Minimal Risk)' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'high', label: 'High' },
          { value: 'veryHigh', label: 'Very High (VHFHSZ)' },
        ],
        helpText: 'Check CAL FIRE FHSZ maps for your property'
      },
      {
        name: 'distanceFromStation',
        label: 'Distance from Nearest Fire Station',
        type: 'select',
        required: true,
        options: [
          { value: 'under5', label: 'Under 5 miles' },
          { value: '5to10', label: '5-10 miles' },
          { value: '10to20', label: '10-20 miles' },
          { value: 'over20', label: 'Over 20 miles' },
        ],
        helpText: 'Response time affects risk score and insurance'
      },
      {
        name: 'defensibleSpace',
        label: 'Defensible Space Compliance',
        type: 'select',
        required: true,
        options: [
          { value: 'full', label: 'Full Compliance (100ft cleared)' },
          { value: 'partial', label: 'Partial Compliance (50-99ft)' },
          { value: 'minimal', label: 'Minimal (<50ft cleared)' },
          { value: 'none', label: 'No Defensible Space' },
        ],
        helpText: 'California law requires 100 feet of defensible space'
      },
      {
        name: 'roofType',
        label: 'Roof Type',
        type: 'select',
        required: true,
        options: [
          { value: 'classA', label: 'Class A Fire-Rated (Tile, Metal, Comp)' },
          { value: 'classB', label: 'Class B Fire-Rated' },
          { value: 'classC', label: 'Class C Fire-Rated' },
          { value: 'woodShake', label: 'Wood Shake (Non-Rated)' },
        ],
        helpText: 'Roof material significantly affects fire resistance'
      },
      {
        name: 'constructionType',
        label: 'Construction Type',
        type: 'select',
        required: true,
        options: [
          { value: 'fireHardened', label: 'Fire-Hardened (Stucco, Fiber-Cement, Metal)' },
          { value: 'standard', label: 'Standard (Vinyl Siding, Wood Frame)' },
          { value: 'highRisk', label: 'High-Risk (Wood Siding, Exposed Wood)' },
        ],
        helpText: 'Ignition-resistant materials reduce wildfire risk'
      },
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'currency',
        required: true,
        placeholder: '600000',
        helpText: 'Current market value for insurance calculation'
      },
      {
        name: 'recentFire',
        label: 'Nearby Fire History (Last 5 Years)',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No fires within 10 miles' },
          { value: 'distant', label: 'Fire 5-10 miles away' },
          { value: 'close', label: 'Fire within 5 miles' },
          { value: 'veryClose', label: 'Fire within 1 mile' },
        ],
        helpText: 'Recent fire history affects insurance and risk'
      }
    ],
    results: [
      {
        name: 'riskScore',
        label: 'Wildfire Risk Score',
        type: 'number',
        helpText: 'Score from 0-100 (higher = more risk)'
      },
      {
        name: 'riskLevel',
        label: 'Risk Classification',
        type: 'text',
        helpText: 'Overall wildfire risk category'
      },
      {
        name: 'annualInsurancePremium',
        label: 'Estimated Annual Insurance Premium',
        type: 'currency',
        helpText: 'Approximate wildfire insurance cost'
      },
      {
        name: 'insuranceAvailability',
        label: 'Insurance Availability',
        type: 'text',
        helpText: 'Likelihood of obtaining private insurance'
      },
      {
        name: 'fairPlanLikelihood',
        label: 'FAIR Plan Likelihood',
        type: 'text',
        helpText: 'Probability of needing California FAIR Plan'
      },
      {
        name: 'mitigationRecommendations',
        label: 'Top Mitigation Priorities',
        type: 'text',
        helpText: 'Steps to reduce wildfire risk and insurance costs'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const propertyValue = parseFloat(inputs.propertyValue) || 0;
      const fireZone = inputs.fireZone || 'minimal';
      const county = inputs.county || 'other';
      const distanceFromStation = inputs.distanceFromStation || 'under5';
      const defensibleSpace = inputs.defensibleSpace || 'none';
      const roofType = inputs.roofType || 'woodShake';
      const constructionType = inputs.constructionType || 'highRisk';
      const recentFire = inputs.recentFire || 'none';

      let riskScore = 0;

      // Fire Zone Score (0-40 points)
      if (fireZone === 'minimal') riskScore += 5;
      else if (fireZone === 'moderate') riskScore += 15;
      else if (fireZone === 'high') riskScore += 28;
      else riskScore += 40;

      // County Risk (0-15 points)
      const highRiskCounties = ['butte', 'sonoma', 'napa', 'ventura', 'losAngeles'];
      if (highRiskCounties.includes(county)) riskScore += 12;
      else riskScore += 5;

      // Distance from Fire Station (0-10 points)
      if (distanceFromStation === 'under5') riskScore += 2;
      else if (distanceFromStation === '5to10') riskScore += 5;
      else if (distanceFromStation === '10to20') riskScore += 8;
      else riskScore += 10;

      // Defensible Space (0-15 points)
      if (defensibleSpace === 'full') riskScore += 0;
      else if (defensibleSpace === 'partial') riskScore += 5;
      else if (defensibleSpace === 'minimal') riskScore += 10;
      else riskScore += 15;

      // Roof Type (0-10 points)
      if (roofType === 'classA') riskScore += 0;
      else if (roofType === 'classB') riskScore += 3;
      else if (roofType === 'classC') riskScore += 6;
      else riskScore += 10;

      // Construction Type (0-7 points)
      if (constructionType === 'fireHardened') riskScore += 0;
      else if (constructionType === 'standard') riskScore += 4;
      else riskScore += 7;

      // Recent Fire History (0-8 points)
      if (recentFire === 'none') riskScore += 0;
      else if (recentFire === 'distant') riskScore += 3;
      else if (recentFire === 'close') riskScore += 6;
      else riskScore += 8;

      // Risk Classification
      let riskLevel = '';
      let insuranceAvailability = '';
      let fairPlanLikelihood = '';
      let insuranceMultiplier = 1.0;

      if (riskScore <= 25) {
        riskLevel = 'Low Risk';
        insuranceAvailability = 'Widely Available';
        fairPlanLikelihood = 'Very Unlikely';
        insuranceMultiplier = 1.0;
      } else if (riskScore <= 45) {
        riskLevel = 'Moderate Risk';
        insuranceAvailability = 'Available with Some Carriers';
        fairPlanLikelihood = 'Unlikely';
        insuranceMultiplier = 1.6;
      } else if (riskScore <= 65) {
        riskLevel = 'High Risk';
        insuranceAvailability = 'Limited Options';
        fairPlanLikelihood = 'Possible';
        insuranceMultiplier = 3.2;
      } else {
        riskLevel = 'Very High Risk';
        insuranceAvailability = 'Difficult to Obtain';
        fairPlanLikelihood = 'Likely or Required';
        insuranceMultiplier = 5.5;
      }

      // Insurance Premium Calculation
      const baseRate = 0.0015; // Base rate for California homeowners insurance
      const annualInsurancePremium = Math.round(propertyValue * baseRate * insuranceMultiplier);

      // Mitigation Recommendations
      const recommendations = [];
      if (defensibleSpace !== 'full') recommendations.push('Create 100ft defensible space');
      if (roofType !== 'classA') recommendations.push('Upgrade to Class A fire-rated roof');
      if (constructionType === 'highRisk') recommendations.push('Install ember-resistant vents');
      if (recommendations.length === 0) recommendations.push('Maintain current fire-hardening measures');

      const mitigationRecommendations = recommendations.join('; ');

      return {
        riskScore: Math.round(riskScore),
        riskLevel,
        annualInsurancePremium,
        insuranceAvailability,
        fairPlanLikelihood,
        mitigationRecommendations
      };
    }
  }
};
