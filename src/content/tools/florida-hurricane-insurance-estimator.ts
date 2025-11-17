import { CalculatorContent } from '@/types';

export const FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Florida Hurricane Insurance Estimator',
  description: 'Calculate Florida hurricane insurance costs including wind, flood, and comprehensive coverage premiums',
  slug: 'florida-hurricane-insurance-estimator',
  icon: '🌀',
  category: 'Insurance Tools',
  article: {
    title: 'Understanding Florida Hurricane Insurance Costs',
    content: `
    <h2>Florida Hurricane Insurance Guide</h2>
    <p>Florida's location makes it the most hurricane-prone state in the U.S., with homeowners facing unique and expensive insurance requirements. Understanding hurricane insurance costs is essential for Florida homeowners, as premiums can range from $2,000 to over $15,000 annually depending on location and coverage.</p>
    
    <h3>What is Hurricane Insurance in Florida?</h3>
    <p>There's no single "hurricane insurance" policy. Complete hurricane protection requires <strong>three separate coverages</strong>:</p>
    <ul>
      <li><strong>Homeowners Insurance with Windstorm Coverage:</strong> Covers wind damage from hurricanes</li>
      <li><strong>Flood Insurance:</strong> Covers water damage (standard policies exclude flood damage)</li>
      <li><strong>Hurricane Deductible:</strong> Separate, higher deductible for hurricane-related claims</li>
    </ul>
    
    <h3>Hurricane Insurance Cost Factors</h3>
    <p>Several key factors determine your hurricane insurance premium:</p>
    <ul>
      <li><strong>Distance from Coast:</strong> Coastal properties pay 3-5x more than inland</li>
      <li><strong>Wind Speed Zone:</strong> Based on historical wind data, affects windstorm premiums</li>
      <li><strong>Flood Zone:</strong> FEMA flood zones A/V pay highest flood insurance rates</li>
      <li><strong>Home Value & Construction:</strong> Newer homes with hurricane-resistant features cost less</li>
      <li><strong>Roof Age & Type:</strong> Hip roofs and impact-resistant shingles reduce premiums</li>
      <li><strong>Hurricane Shutters:</strong> Can reduce windstorm premium by 10-45%</li>
      <li><strong>Deductible Amount:</strong> Hurricane deductibles are typically 2-10% of dwelling coverage</li>
    </ul>
    
    <h3>Average Hurricane Insurance Costs by Region</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Premium Range</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Coastal (Miami, Tampa, Key West)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000 - $15,000+</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Near-Coastal (10-30 miles inland)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000 - $7,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Inland (Central FL, North FL)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800 - $4,000</td>
      </tr>
    </table>
    
    <h3>Citizens Property Insurance - Florida's Insurer of Last Resort</h3>
    <p>When private insurers won't cover you or charge extreme rates, <strong>Citizens Property Insurance Corporation</strong> steps in as the state-backed insurer of last resort. However:</p>
    <ul>
      <li>Citizens premiums are rising rapidly (20-40% annual increases common)</li>
      <li>Claims may face delays during major hurricane events</li>
      <li>Citizens can "depopulate" policies by forcing customers to private insurers</li>
      <li>Coverage limits may be lower than private market</li>
    </ul>
    
    <h3>Hurricane Deductibles Explained</h3>
    <p>Unlike standard homeowners deductibles (typically $500-$2,500), hurricane deductibles are much higher:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Deductible Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Example on $400K Home</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2% Hurricane Deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2% of dwelling coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$8,000 out-of-pocket</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">5% Hurricane Deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5% of dwelling coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$20,000 out-of-pocket</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10% Hurricane Deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10% of dwelling coverage</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$40,000 out-of-pocket</td>
      </tr>
    </table>
    <p><strong>Important:</strong> The hurricane deductible only applies when a hurricane is officially declared. For non-hurricane wind damage, your standard deductible applies.</p>
    
    <h3>Flood Insurance - National Flood Insurance Program (NFIP)</h3>
    <p>Most Florida flood insurance comes through NFIP, a federal program:</p>
    <ul>
      <li><strong>Average Cost:</strong> $600-$2,000/year</li>
      <li><strong>High-Risk Zones (A, V, VE):</strong> $2,000-$8,000+/year</li>
      <li><strong>Coverage Limit:</strong> Maximum $250,000 for structure, $100,000 for contents</li>
      <li><strong>30-Day Waiting Period:</strong> Purchase before hurricane season starts</li>
    </ul>
    <p>Private flood insurance is also available and may be cheaper or offer higher limits than NFIP.</p>
    
    <h3>Wind Mitigation Discounts</h3>
    <p>Florida law requires insurers to offer discounts for hurricane-resistant features:</p>
    <ul>
      <li><strong>Hurricane Shutters or Impact Windows:</strong> 10-45% discount</li>
      <li><strong>Hip Roof:</strong> Up to 40% discount vs. gable roof</li>
      <li><strong>Roof-to-Wall Attachments (clips/straps):</strong> 20-35% discount</li>
      <li><strong>Roof Deck Attachment:</strong> 10-20% discount</li>
      <li><strong>Secondary Water Resistance:</strong> 5-15% discount</li>
      <li><strong>Opening Protection:</strong> 15-45% discount</li>
    </ul>
    <p>A professional <strong>wind mitigation inspection</strong> ($75-$200) can save you hundreds to thousands annually.</p>
    
    <h3>Recent Florida Insurance Crisis</h3>
    <p>Florida's insurance market has faced severe challenges since 2021:</p>
    <ul>
      <li>Multiple major insurers exited Florida (United, Farmers, AAA)</li>
      <li>6+ insurers declared insolvency in 2021-2023</li>
      <li>Average premiums increased 40-60% (2021-2024)</li>
      <li>Coastal premiums now among highest in U.S.</li>
      <li>Citizens Property Insurance enrollment surged to 1.2 million policies</li>
    </ul>
    
    <h3>Cost-Saving Strategies</h3>
    <p>Ways to reduce Florida hurricane insurance costs:</p>
    <ul>
      <li><strong>Increase Deductible:</strong> Going from 2% to 5% can save 15-25% on premium</li>
      <li><strong>Wind Mitigation Upgrades:</strong> ROI typically 2-3 years on major improvements</li>
      <li><strong>Roof Replacement:</strong> Roofs over 15 years old face surcharges or denial</li>
      <li><strong>Bundle Policies:</strong> Combine home and auto for 10-20% discount</li>
      <li><strong>Shop Annually:</strong> Market volatility means rates change dramatically year-to-year</li>
      <li><strong>4-Point Inspection:</strong> Shows good condition to qualify for better rates ($50-$150)</li>
    </ul>
    
    <h3>When Hurricane Deductible Applies</h3>
    <p>Your hurricane deductible triggers when:</p>
    <ul>
      <li>National Weather Service issues hurricane warning for your county</li>
      <li>Named tropical storm approaches within specific timeframe (varies by insurer)</li>
      <li>Damage occurs during official hurricane declaration period</li>
    </ul>
    <p><strong>Example:</strong> If a named hurricane passes and causes damage 3 days later when downgraded to tropical storm, you may still pay hurricane deductible depending on policy language.</p>
    
    <h3>Required Coverage for Mortgages</h3>
    <p>If you have a mortgage, lenders require:</p>
    <ul>
      <li><strong>Homeowners Insurance:</strong> With dwelling coverage at least equal to loan amount</li>
      <li><strong>Flood Insurance:</strong> Required if in FEMA flood zone A or V</li>
      <li><strong>Windstorm Coverage:</strong> Must be included (can't exclude to save money)</li>
    </ul>
    
    <h3>Florida Hurricane Catastrophe Fund</h3>
    <p>Florida created the Hurricane Catastrophe Fund (Cat Fund) to help insurers pay claims after major hurricanes. This backstop helps keep some insurers in the market, but:</p>
    <ul>
      <li>Homeowners pay into Cat Fund via premium surcharge (typically included in your bill)</li>
      <li>Cat Fund has limits and may not cover all claims in mega-catastrophe</li>
      <li>Some insurers over-rely on Cat Fund, creating solvency risks</li>
    </ul>
    
    <h3>Coastal vs. Inland Florida</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Factor</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Coastal</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Inland</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Wind Premium</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Very High</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Moderate</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Flood Premium</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000-$8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$400-$800</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Typical Deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-10%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-5%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Market Availability</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Limited (Citizens common)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">More options</td>
      </tr>
    </table>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Home Value',
        type: 'currency',
        required: true,
        placeholder: '400000',
        helpText: 'Current market value or insured value of your home'
      },
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        required: true,
        options: [
          { value: 'coastal', label: 'Coastal (0-10 miles from coast)' },
          { value: 'nearCoastal', label: 'Near-Coastal (10-30 miles)' },
          { value: 'inland', label: 'Inland (30+ miles from coast)' },
        ],
        helpText: 'Distance from coastline affects wind and flood premiums'
      },
      {
        name: 'floodZone',
        label: 'FEMA Flood Zone',
        type: 'select',
        required: true,
        options: [
          { value: 'x', label: 'X (Minimal Flood Risk)' },
          { value: 'b', label: 'B/C (Moderate Risk)' },
          { value: 'a', label: 'A/AE (High Risk - 1% annual flood chance)' },
          { value: 'v', label: 'V/VE (Very High Risk - Coastal Flooding)' },
        ],
        helpText: 'Check your FEMA flood zone on Flood Map Service Center'
      },
      {
        name: 'roofAge',
        label: 'Roof Age',
        type: 'select',
        required: true,
        options: [
          { value: 'new', label: '0-5 years old' },
          { value: 'good', label: '6-10 years old' },
          { value: 'moderate', label: '11-15 years old' },
          { value: 'old', label: '16-20 years old' },
          { value: 'veryOld', label: '20+ years old' },
        ],
        helpText: 'Roof age significantly impacts premiums and insurability'
      },
      {
        name: 'windMitigation',
        label: 'Wind Mitigation Features',
        type: 'select',
        required: true,
        options: [
          { value: 'none', label: 'None' },
          { value: 'basic', label: 'Basic (Shutters or Impact Windows)' },
          { value: 'moderate', label: 'Moderate (Shutters + Hip Roof)' },
          { value: 'full', label: 'Full (All Wind Mitigation Features)' },
        ],
        helpText: 'Wind mitigation features can reduce premiums by 30-60%'
      },
      {
        name: 'hurricaneDeductible',
        label: 'Hurricane Deductible',
        type: 'select',
        required: true,
        options: [
          { value: '2', label: '2% (Lower Premium, Lower Out-of-Pocket)' },
          { value: '5', label: '5% (Standard)' },
          { value: '10', label: '10% (Higher Savings)' },
        ],
        helpText: 'Percentage of dwelling coverage you pay before insurance kicks in'
      }
    ],
    results: [
      {
        name: 'totalAnnualPremium',
        label: 'Total Annual Premium',
        type: 'currency',
        helpText: 'Combined cost for homeowners + flood insurance'
      },
      {
        name: 'windstormPremium',
        label: 'Windstorm Premium',
        type: 'currency',
        helpText: 'Annual cost for hurricane wind coverage'
      },
      {
        name: 'floodPremium',
        label: 'Flood Insurance Premium',
        type: 'currency',
        helpText: 'Annual cost for flood coverage (NFIP or private)'
      },
      {
        name: 'monthlyPayment',
        label: 'Monthly Payment',
        type: 'currency',
        helpText: 'Combined monthly insurance cost'
      },
      {
        name: 'hurricaneDeductibleAmount',
        label: 'Hurricane Deductible Amount',
        type: 'currency',
        helpText: 'Out-of-pocket cost before hurricane claim coverage begins'
      },
      {
        name: 'potentialSavings',
        label: 'Potential Annual Savings with Full Mitigation',
        type: 'currency',
        helpText: 'How much you could save with complete wind mitigation upgrades'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const propertyValue = parseFloat(inputs.propertyValue) || 0;
      const location = inputs.location || 'inland';
      const floodZone = inputs.floodZone || 'x';
      const roofAge = inputs.roofAge || 'new';
      const windMitigation = inputs.windMitigation || 'none';
      const hurricaneDeductiblePct = parseFloat(inputs.hurricaneDeductible) || 5;

      let windBaseRate = 0;
      if (location === 'coastal') windBaseRate = 0.025;
      else if (location === 'nearCoastal') windBaseRate = 0.015;
      else windBaseRate = 0.008;

      const roofMultiplier = roofAge === 'new' ? 0.9 : roofAge === 'good' ? 1.0 : roofAge === 'moderate' ? 1.25 : roofAge === 'old' ? 1.6 : 2.0;

      const mitigationDiscount = windMitigation === 'none' ? 1.0 : windMitigation === 'basic' ? 0.75 : windMitigation === 'moderate' ? 0.55 : 0.4;

      const deductibleMultiplier = hurricaneDeductiblePct <= 2 ? 1.15 : hurricaneDeductiblePct <= 5 ? 1.0 : 0.85;

      let windstormPremium = propertyValue * windBaseRate * roofMultiplier * mitigationDiscount * deductibleMultiplier;
      windstormPremium = Math.round(windstormPremium);

      let floodPremium = 0;
      if (floodZone === 'x') floodPremium = 450;
      else if (floodZone === 'b') floodPremium = 800;
      else if (floodZone === 'a') floodPremium = Math.min(2500 + (propertyValue / 1000), 8000);
      else floodPremium = Math.min(4000 + (propertyValue / 500), 12000);

      floodPremium = Math.round(floodPremium);

      const totalAnnualPremium = windstormPremium + floodPremium;
      const monthlyPayment = Math.round(totalAnnualPremium / 12);
      const hurricaneDeductibleAmount = Math.round((propertyValue * hurricaneDeductiblePct) / 100);

      const fullMitigationWindPremium = Math.round(propertyValue * windBaseRate * roofMultiplier * 0.4 * deductibleMultiplier);
      const potentialSavings = windstormPremium - fullMitigationWindPremium;

      return {
        totalAnnualPremium,
        windstormPremium,
        floodPremium,
        monthlyPayment,
        hurricaneDeductibleAmount,
        potentialSavings: Math.max(0, potentialSavings)
      };
    }
  }
};
