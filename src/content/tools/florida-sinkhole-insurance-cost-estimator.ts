import { CalculatorContent } from '@/types';

export const FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Florida Sinkhole Insurance Cost Estimator',
  description: 'Calculate the cost of sinkhole insurance in Florida based on property value, location, and coverage options',
  slug: 'florida-sinkhole-insurance-cost-estimator',
  icon: '🕳️',
  category: 'Insurance Tools',
  article: {
    title: 'Understanding Florida Sinkhole Insurance Costs',
    content: `
    <h2>Florida Sinkhole Insurance Guide</h2>
    <p>Florida is known as the <strong>"sinkhole capital" of the United States</strong>, with thousands of sinkholes reported annually. This unique geological risk makes sinkhole insurance a critical consideration for Florida homeowners, especially in high-risk counties.</p>
    
    <h3>What is Sinkhole Insurance?</h3>
    <p>Sinkhole insurance (officially called "catastrophic ground cover collapse" coverage in Florida) protects homeowners from structural damage caused by sinkholes. Standard homeowners insurance policies in Florida DO NOT cover sinkhole damage unless you purchase additional coverage.</p>
    
    <h3>Florida Sinkhole Insurance Requirements</h3>
    <p>Since 2011, Florida law requires insurance companies to offer sinkhole coverage, but homeowners can decline it in writing. The coverage comes in two forms:</p>
    <ul>
      <li><strong>Catastrophic Ground Cover Collapse (CGCC):</strong> Included in most policies at no extra cost, covers only severe structural damage</li>
      <li><strong>Full Sinkhole Coverage:</strong> Optional add-on that covers a broader range of sinkhole-related damage, including smaller sinkholes and land depression</li>
    </ul>
    
    <h3>Cost Factors for Sinkhole Insurance</h3>
    <p>Several factors influence your sinkhole insurance premium:</p>
    <ul>
      <li><strong>Location:</strong> High-risk counties (Pasco, Hernando, Hillsborough) pay significantly more</li>
      <li><strong>Property Value:</strong> Higher home values mean higher coverage limits and premiums</li>
      <li><strong>Soil Type:</strong> Properties on limestone bedrock face higher risks</li>
      <li><strong>Coverage Type:</strong> Full coverage costs much more than basic CGCC</li>
      <li><strong>Deductible:</strong> Higher deductibles reduce premiums</li>
      <li><strong>Previous Claims:</strong> History of sinkhole claims increases costs dramatically</li>
    </ul>
    
    <h3>Average Sinkhole Insurance Costs in Florida</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Risk Level</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Premium Range</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Low Risk Areas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$300 - $800</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate Risk Areas</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$800 - $2,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High Risk Areas (Sinkhole Alley)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500 - $10,000+</td>
      </tr>
    </table>
    
    <h3>Florida's "Sinkhole Alley"</h3>
    <p><strong>Highest-risk counties for sinkholes:</strong></p>
    <ul>
      <li><strong>Pasco County:</strong> Highest claim frequency in Florida</li>
      <li><strong>Hernando County:</strong> Second-highest risk area</li>
      <li><strong>Hillsborough County:</strong> Includes Tampa, significant sinkhole activity</li>
      <li><strong>Pinellas County:</strong> Coastal but still prone to sinkholes</li>
      <li><strong>Marion County:</strong> Central Florida sinkhole zone</li>
    </ul>
    <p>Properties in these counties often pay <strong>5-10 times more</strong> for sinkhole coverage than low-risk areas.</p>
    
    <h3>Deductible Options</h3>
    <p>Sinkhole insurance deductibles are typically higher than standard homeowners deductibles:</p>
    <ul>
      <li><strong>Standard:</strong> 10% of dwelling coverage ($30,000 on a $300,000 home)</li>
      <li><strong>Lower Deductible (2-5%):</strong> Significantly higher premiums</li>
      <li><strong>Higher Deductible (15-25%):</strong> Lower premiums but more out-of-pocket risk</li>
    </ul>
    
    <h3>What Sinkhole Coverage Includes</h3>
    <p><strong>Full sinkhole coverage typically covers:</strong></p>
    <ul>
      <li>Structural repairs to foundation, walls, and roof</li>
      <li>Testing and investigation costs (geological surveys)</li>
      <li>Ground stabilization and filling</li>
      <li>Contents damage from sinkhole collapse</li>
      <li>Temporary housing during repairs</li>
      <li>Landscaping and outdoor structures</li>
    </ul>
    
    <h3>CGCC vs. Full Sinkhole Coverage</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">CGCC (Free)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Full Coverage (Extra Cost)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Coverage Scope</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Only catastrophic collapse</td>
        <td style="border: 1px solid #ddd; padding: 8px;">All sinkhole activity</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Damage Threshold</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Home must be condemned</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Any structural damage</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Testing Covered</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Annual Cost</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$300 - $10,000+</td>
      </tr>
    </table>
    
    <h3>Cost-Saving Strategies</h3>
    <p>Ways to reduce your sinkhole insurance costs:</p>
    <ul>
      <li><strong>Higher Deductibles:</strong> Increase deductible to 15-20% to lower premiums</li>
      <li><strong>Bundle Policies:</strong> Combine with home and auto insurance for discounts</li>
      <li><strong>Home Improvements:</strong> Foundation reinforcement may qualify for discounts</li>
      <li><strong>Shop Around:</strong> Premiums vary dramatically between insurers (up to 400% difference)</li>
      <li><strong>Consider Self-Insurance:</strong> In low-risk areas, may be cheaper to save premium costs</li>
    </ul>
    
    <h3>Is Sinkhole Insurance Worth It?</h3>
    <p><strong>Recommended if you're in:</strong></p>
    <ul>
      <li>Pasco, Hernando, or Hillsborough counties</li>
      <li>Areas with prior sinkhole activity nearby</li>
      <li>Homes on limestone bedrock</li>
      <li>Properties over $300,000 where repair costs would be devastating</li>
    </ul>
    <p><strong>May skip if:</strong></p>
    <ul>
      <li>South Florida coastal areas with low sinkhole risk</li>
      <li>New construction with engineered foundations</li>
      <li>Areas with no historical sinkhole activity</li>
      <li>You have substantial savings to cover potential repairs</li>
    </ul>
    
    <h3>Sinkhole Insurance Claims Process</h3>
    <p>If you suspect sinkhole activity:</p>
    <ol>
      <li><strong>Document Everything:</strong> Photos, videos, measurements of cracks/damage</li>
      <li><strong>Contact Your Insurer:</strong> Report claim immediately</li>
      <li><strong>Professional Inspection:</strong> Insurer will hire structural engineer and geologist</li>
      <li><strong>Testing Phase:</strong> Ground-penetrating radar, soil borings, foundation survey</li>
      <li><strong>Claim Decision:</strong> Typically takes 60-120 days</li>
      <li><strong>Repair Work:</strong> If approved, contractor performs stabilization and repairs</li>
    </ol>
    <p><strong>Important:</strong> Do not begin repairs until insurer approves the claim, or you may void coverage.</p>
    
    <h3>Recent Changes to Florida Sinkhole Coverage</h3>
    <p>Florida's sinkhole insurance market has evolved significantly:</p>
    <ul>
      <li><strong>2011 Reform:</strong> Created distinction between CGCC and full coverage</li>
      <li><strong>Higher Deductibles:</strong> Minimum 10% deductible now standard</li>
      <li><strong>Stricter Claims:</strong> Must prove "actual sinkhole" vs. soil settlement</li>
      <li><strong>Neutral Evaluator Program:</strong> Mediates disputes between homeowners and insurers</li>
    </ul>
    
    <h3>Warning Signs of Sinkhole Activity</h3>
    <p>Contact your insurer if you notice:</p>
    <ul>
      <li>Cracks in walls, floors, or foundation (especially diagonal cracks)</li>
      <li>Doors or windows that stick or won't close properly</li>
      <li>Depressions or circular areas in your yard</li>
      <li>Cloudy well water or sudden water loss</li>
      <li>Trees or fence posts tilting</li>
      <li>Gaps between walls and ceiling or floor</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Home Value',
        type: 'currency',
        required: true,
        placeholder: '350000',
        helpText: 'Current market value or insured value of your home'
      },
      {
        name: 'county',
        label: 'County',
        type: 'select',
        required: true,
        options: [
          { value: 'low', label: 'Low Risk (South Florida, Panhandle)' },
          { value: 'moderate', label: 'Moderate Risk (Central FL, Jacksonville)' },
          { value: 'high', label: 'High Risk (Pasco, Hernando, Hillsborough)' },
        ],
        helpText: 'Select your county risk level for sinkholes'
      },
      {
        name: 'coverageType',
        label: 'Coverage Type',
        type: 'select',
        required: true,
        options: [
          { value: 'cgcc', label: 'CGCC Only (Free - Catastrophic Collapse Only)' },
          { value: 'full', label: 'Full Sinkhole Coverage' },
        ],
        helpText: 'Choose between basic CGCC or comprehensive sinkhole coverage'
      },
      {
        name: 'deductible',
        label: 'Deductible Percentage',
        type: 'select',
        required: true,
        options: [
          { value: '2', label: '2% (Lower Premium Impact)' },
          { value: '5', label: '5%' },
          { value: '10', label: '10% (Standard)' },
          { value: '15', label: '15%' },
          { value: '25', label: '25% (Highest Savings)' },
        ],
        helpText: 'Higher deductible = lower premium but more out-of-pocket cost if you claim'
      },
      {
        name: 'previousClaims',
        label: 'Previous Sinkhole Claims',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'No Previous Claims' },
          { value: 'one', label: '1 Claim in Past 5 Years' },
          { value: 'multiple', label: '2+ Claims in Past 5 Years' },
        ],
        helpText: 'Claims history significantly impacts premium costs'
      }
    ],
    results: [
      {
        name: 'annualPremium',
        label: 'Estimated Annual Premium',
        type: 'currency',
        helpText: 'Your estimated yearly sinkhole insurance cost'
      },
      {
        name: 'monthlyPremium',
        label: 'Monthly Premium',
        type: 'currency',
        helpText: 'Monthly cost if paying in installments'
      },
      {
        name: 'deductibleAmount',
        label: 'Deductible Amount',
        type: 'currency',
        helpText: 'Out-of-pocket cost you pay before insurance kicks in'
      },
      {
        name: 'coverageLimit',
        label: 'Coverage Limit',
        type: 'currency',
        helpText: 'Maximum amount insurer will pay for sinkhole damage'
      },
      {
        name: 'riskLevel',
        label: 'Sinkhole Risk Assessment',
        type: 'text',
        helpText: 'Your area\'s sinkhole risk level'
      },
      {
        name: 'recommendation',
        label: 'Coverage Recommendation',
        type: 'text',
        helpText: 'Whether sinkhole insurance is recommended for your situation'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const propertyValue = parseFloat(inputs.propertyValue) || 0;
      const county = inputs.county || 'low';
      const coverageType = inputs.coverageType || 'cgcc';
      const deductiblePct = parseFloat(inputs.deductible) || 10;
      const previousClaims = inputs.previousClaims || 'none';

      if (coverageType === 'cgcc') {
        return {
          annualPremium: 0,
          monthlyPremium: 0,
          deductibleAmount: 0,
          coverageLimit: propertyValue,
          riskLevel: county === 'high' ? 'High Risk - Sinkhole Alley' : county === 'moderate' ? 'Moderate Risk' : 'Low Risk',
          recommendation: 'CGCC provides minimal coverage. Consider upgrading to full coverage in high-risk areas.'
        };
      }

      let baseRate = 0;
      let riskLevel = '';

      if (county === 'low') {
        baseRate = 0.0015;
        riskLevel = 'Low Risk Area';
      } else if (county === 'moderate') {
        baseRate = 0.004;
        riskLevel = 'Moderate Risk Area';
      } else {
        baseRate = 0.012;
        riskLevel = 'High Risk - Sinkhole Alley';
      }

      const deductibleMultiplier = deductiblePct <= 2 ? 1.8 : deductiblePct <= 5 ? 1.4 : deductiblePct <= 10 ? 1.0 : deductiblePct <= 15 ? 0.75 : 0.55;
      
      const claimsMultiplier = previousClaims === 'none' ? 1.0 : previousClaims === 'one' ? 2.5 : 4.0;

      let annualPremium = propertyValue * baseRate * deductibleMultiplier * claimsMultiplier;
      annualPremium = Math.round(annualPremium);

      const monthlyPremium = Math.round(annualPremium / 12);
      const deductibleAmount = Math.round((propertyValue * deductiblePct) / 100);
      const coverageLimit = propertyValue;

      let recommendation = '';
      if (county === 'high') {
        recommendation = 'STRONGLY RECOMMENDED - You are in Florida\'s highest-risk sinkhole zone. Full coverage is essential.';
      } else if (county === 'moderate') {
        recommendation = 'RECOMMENDED - Moderate sinkhole risk justifies the cost of coverage for most homeowners.';
      } else {
        recommendation = 'OPTIONAL - Low sinkhole risk. Consider your financial ability to self-insure vs. premium costs.';
      }

      if (previousClaims !== 'none') {
        recommendation += ' Note: Previous claims significantly increase your premium.';
      }

      return {
        annualPremium,
        monthlyPremium,
        deductibleAmount,
        coverageLimit,
        riskLevel,
        recommendation
      };
    }
  }
};
