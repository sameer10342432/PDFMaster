import { CalculatorContent } from '@/types';

export const BasementFinishingROICalculatorContent: CalculatorContent = {
  title: 'Basement Finishing ROI Calculator',
  description: 'Calculate return on investment for finishing your basement including bedrooms, bathrooms, rec rooms, and rental units',
  icon: '🏚️',
  category: 'Seller Tools',
  slug: 'basement-finishing-roi-calculator',
  
  metaTitle: 'Basement Finishing ROI Calculator - Remodeling Return | Property Tools',
  metaDescription: 'Calculate ROI for basement finishing projects. Estimate costs, value added, and returns for rec rooms, bedrooms, bathrooms, and basement apartments.',
  
  article: {
    title: 'Maximize Your Basement Finishing ROI',
    content: `
      <h2>Basement Finishing ROI Calculator</h2>
      <p>Finishing a basement is one of the most cost-effective ways to add living space to your home. With typical costs of $50-$100 per square foot (vs. $200+ for home additions), basement finishing offers excellent value. Understanding your potential ROI helps you decide whether to finish your basement and how to optimize your investment.</p>

      <h3>Why Finish Your Basement?</h3>
      <ul>
        <li>Add 500-1,500+ square feet of living space</li>
        <li>Increase home value by $20K-$75K+</li>
        <li>Lower cost per square foot than additions</li>
        <li>Create rental income potential (ADU/in-law suite)</li>
        <li>Add bedroom(s) and bathroom(s)</li>
        <li>Create dedicated entertainment or hobby space</li>
        <li>Improve home marketability and appeal</li>
      </ul>

      <h3>Types of Basement Finishing Projects</h3>
      
      <h4>Basic Finish ($25,000 - $40,000)</h4>
      <p><strong>Typical ROI: 60-75%</strong></p>
      <p>Simple finishing for recreational space:</p>
      <ul>
        <li>Framing and drywall</li>
        <li>Basic flooring (carpet or luxury vinyl)</li>
        <li>Standard lighting</li>
        <li>Basic electrical outlets</li>
        <li>Paint</li>
        <li>Simple ceiling (drywall or drop ceiling)</li>
        <li>No bathroom or kitchen</li>
      </ul>

      <h4>Mid-Range Finish ($40,000 - $70,000)</h4>
      <p><strong>Typical ROI: 65-80%</strong></p>
      <p>Full living space with bedroom and bathroom:</p>
      <ul>
        <li>Finished rec room or family room</li>
        <li>One bedroom (with egress window)</li>
        <li>Full bathroom</li>
        <li>Quality flooring throughout</li>
        <li>Recessed lighting</li>
        <li>Built-in storage or shelving</li>
        <li>Upgraded finishes</li>
      </ul>

      <h4>High-End Finish ($70,000 - $100,000+)</h4>
      <p><strong>Typical ROI: 55-70%</strong></p>
      <p>Luxury basement with multiple rooms:</p>
      <ul>
        <li>Multiple bedrooms (2-3)</li>
        <li>Full bathroom plus powder room</li>
        <li>Kitchenette or wet bar</li>
        <li>Home theater or gym</li>
        <li>Custom built-ins and cabinetry</li>
        <li>High-end finishes and fixtures</li>
        <li>Heated floors</li>
      </ul>

      <h4>Apartment/ADU Conversion ($50,000 - $85,000)</h4>
      <p><strong>Typical ROI: 70-90%+ (with rental income)</strong></p>
      <p>Separate living unit for rental or in-laws:</p>
      <ul>
        <li>Separate entrance</li>
        <li>Full kitchen</li>
        <li>1-2 bedrooms with egress</li>
        <li>Full bathroom</li>
        <li>Living area</li>
        <li>Separate utilities (if possible)</li>
        <li>Code-compliant for occupancy</li>
      </ul>

      <h3>Cost Breakdown for Typical Basement Finish</h3>
      <p>For a 1,000 sq ft basement at $60,000 total:</p>
      <ul>
        <li><strong>Framing & Drywall:</strong> $8,000-$12,000 (13-20%)</li>
        <li><strong>Flooring:</strong> $4,000-$8,000 (7-13%)</li>
        <li><strong>Bathroom:</strong> $8,000-$15,000 (13-25%)</li>
        <li><strong>Electrical:</strong> $4,000-$7,000 (7-12%)</li>
        <li><strong>HVAC:</strong> $3,000-$5,000 (5-8%)</li>
        <li><strong>Plumbing:</strong> $3,000-$6,000 (5-10%)</li>
        <li><strong>Windows/Egress:</strong> $3,000-$6,000 (5-10%)</li>
        <li><strong>Ceiling:</strong> $2,500-$5,000 (4-8%)</li>
        <li><strong>Doors & Trim:</strong> $2,000-$4,000 (3-7%)</li>
        <li><strong>Paint:</strong> $1,500-$3,000 (2-5%)</li>
        <li><strong>Permits:</strong> $500-$1,500 (1-2%)</li>
      </ul>

      <h3>Factors Affecting Basement Finishing ROI</h3>
      
      <h4>Ceiling Height</h4>
      <ul>
        <li><strong>8'+ ceiling:</strong> Good ROI, feels like main floor</li>
        <li><strong>7'-8' ceiling:</strong> Acceptable ROI, slightly limited</li>
        <li><strong>Under 7' ceiling:</strong> Lower ROI, feels cramped</li>
        <li><em>Minimum code: 7 feet for living space, 6'8" for bathrooms</em></li>
      </ul>

      <h4>Moisture & Foundation Issues</h4>
      <ul>
        <li>Active water problems = address first ($3K-$15K+)</li>
        <li>French drain system ($5K-$15K if needed)</li>
        <li>Sump pump installation ($1K-$3K)</li>
        <li>Waterproofing ($3K-$8K)</li>
        <li>Foundation repairs ($3K-$30K+)</li>
      </ul>

      <h4>Market Factors</h4>
      <ul>
        <li><strong>Cold climates:</strong> Higher ROI (winter living space valued)</li>
        <li><strong>Warm climates:</strong> Lower ROI (outdoor space preferred)</li>
        <li><strong>Urban/suburban:</strong> Higher ROI (space is premium)</li>
        <li><strong>Rural:</strong> Moderate ROI (less space constraint)</li>
      </ul>

      <h3>Adding Bedrooms & Bathrooms</h3>
      
      <h4>Bedroom Requirements</h4>
      <p>To count as legal bedroom, must have:</p>
      <ul>
        <li>Minimum 70 square feet (some jurisdictions 80)</li>
        <li>Egress window (minimum 5.7 sq ft opening)</li>
        <li>Closet (in most jurisdictions)</li>
        <li>Two forms of egress (window + door to stairs)</li>
        <li>Minimum 7' ceiling height</li>
      </ul>
      <p><strong>Value Added:</strong> $10K-$30K per bedroom depending on market</p>

      <h4>Bathroom Addition</h4>
      <p>Adding bathroom to basement typically costs:</p>
      <ul>
        <li><strong>Full bath:</strong> $10K-$20K (if plumbing nearby)</li>
        <li><strong>Full bath:</strong> $15K-$25K (if major plumbing work needed)</li>
        <li><strong>Half bath:</strong> $6K-$12K</li>
      </ul>
      <p><strong>Value Added:</strong> $8K-$20K depending on necessity and market</p>

      <h3>Highest ROI Basement Features</h3>
      
      <h4>Best Value Additions</h4>
      <ol>
        <li><strong>Full Bathroom (70-90% ROI):</strong> Essential for usability</li>
        <li><strong>Bedroom with Egress (65-85% ROI):</strong> Increases bedroom count</li>
        <li><strong>Second Entrance (75-100%+ ROI):</strong> Enables rental income</li>
        <li><strong>Quality Flooring (70-90% ROI):</strong> Vinyl plank or engineered wood</li>
        <li><strong>Good Lighting (80-110% ROI):</strong> Makes space feel larger</li>
        <li><strong>Adequate Ceiling Height (60-80% ROI):</strong> Opens up space</li>
      </ol>

      <h4>Features That Add Value</h4>
      <ul>
        <li>Wet bar or kitchenette (50-70% ROI)</li>
        <li>Built-in storage (60-80% ROI)</li>
        <li>Home theater room (40-60% ROI)</li>
        <li>Home gym area (35-55% ROI)</li>
        <li>Game room/rec room (55-70% ROI)</li>
      </ul>

      <h3>Rental Income Potential</h3>
      
      <h4>Basement Apartment Rental ROI</h4>
      <p>With separate entrance and full amenities:</p>
      <ul>
        <li>Rental income: $800-$1,800/month typical</li>
        <li>Annual income: $9,600-$21,600</li>
        <li>5-year income: $48,000-$108,000</li>
        <li>Payback period: Often 3-5 years</li>
        <li>Long-term ROI: Can exceed 150-250%</li>
      </ul>

      <h4>Rental Considerations</h4>
      <ul>
        <li>Check local zoning for ADU/rental legality</li>
        <li>Separate utilities for easier rent calculation</li>
        <li>Include laundry if possible</li>
        <li>Ensure two means of egress for safety</li>
        <li>Get proper permits for rental occupancy</li>
        <li>Consider parking requirements</li>
      </ul>

      <h3>Common Basement Finishing Mistakes</h3>
      
      <h4>Critical Errors to Avoid</h4>
      <ul>
        <li><strong>Skipping Permits:</strong> Can void insurance, hurt resale</li>
        <li><strong>Ignoring Moisture:</strong> Leads to mold, damage, health issues</li>
        <li><strong>Inadequate Insulation:</strong> Cold, uncomfortable space</li>
        <li><strong>Poor Lighting:</strong> Basement feels dark and unwelcoming</li>
        <li><strong>Low Ceilings:</strong> Can't legally count as living space</li>
        <li><strong>No Egress Windows:</strong> Can't count bedrooms, safety hazard</li>
        <li><strong>Cheap Materials:</strong> Doesn't match home quality</li>
        <li><strong>Over-Improving:</strong> $100K basement in $250K house</li>
      </ul>

      <h3>Maximizing Basement Finishing ROI</h3>
      
      <h4>Smart Investment Strategies</h4>
      <ul>
        <li><strong>Solve moisture first:</strong> Dry basement is essential foundation</li>
        <li><strong>Add bedroom + bath:</strong> Most impactful for ROI</li>
        <li><strong>Ensure egress windows:</strong> Required for legal bedrooms</li>
        <li><strong>Use moisture-resistant materials:</strong> Vinyl, tile, mold-resistant drywall</li>
        <li><strong>Maximize ceiling height:</strong> Open ceilings or higher-grade ceiling</li>
        <li><strong>Good lighting plan:</strong> Recessed + task + accent lighting</li>
        <li><strong>Plan for rental potential:</strong> Even if not immediate</li>
      </ul>

      <h4>Cost-Saving Tips</h4>
      <ul>
        <li>DIY paint, flooring, basic trim work (save 20-30%)</li>
        <li>Use luxury vinyl plank vs. hardwood (save $3-$7/sq ft)</li>
        <li>Open ceiling vs. drywall (save $2-$4/sq ft)</li>
        <li>Standard fixtures vs. high-end (save $2K-$8K)</li>
        <li>Strategic finishing (do rec room now, bedrooms later)</li>
      </ul>

      <h3>Basement Finishing Timeline</h3>
      <ul>
        <li><strong>Basic Finish:</strong> 4-8 weeks</li>
        <li><strong>Mid-Range with Bath/Bedroom:</strong> 8-12 weeks</li>
        <li><strong>High-End Multi-Room:</strong> 12-20 weeks</li>
        <li><strong>Full Apartment Conversion:</strong> 12-24 weeks</li>
      </ul>
      <p><em>Add time for permits, waterproofing, or foundation work</em></p>

      <h3>Regional ROI Variations</h3>
      <ul>
        <li><strong>Midwest/Northeast:</strong> 70-85% ROI (cold weather = indoor space valued)</li>
        <li><strong>Northwest:</strong> 65-80% ROI</li>
        <li><strong>Southwest/Southeast:</strong> 55-70% ROI (outdoor living preferred)</li>
        <li><strong>Mountain:</strong> 65-80% ROI</li>
        <li><strong>Pacific:</strong> 60-75% ROI</li>
      </ul>

      <h3>When Basement Finishing Makes Sense</h3>
      
      <h4>Finish Your Basement If:</h4>
      <ul>
        <li>Basement is dry or moisture is addressable</li>
        <li>Ceiling height is 7'+ (ideally 8'+)</li>
        <li>You need more living space</li>
        <li>You want rental income potential</li>
        <li>Comparable homes have finished basements</li>
        <li>You plan to stay 5+ years</li>
        <li>Foundation is solid with no major issues</li>
      </ul>

      <h4>Reconsider or Delay If:</h4>
      <ul>
        <li>Active water intrusion problems</li>
        <li>Ceiling height under 7 feet</li>
        <li>Major foundation cracks or settling</li>
        <li>You're selling within 1-2 years</li>
        <li>Budget is very limited (do it right or wait)</li>
        <li>Local market doesn't value finished basements</li>
      </ul>

      <h3>Permits & Code Requirements</h3>
      <p>Nearly all basement finishes require permits for:</p>
      <ul>
        <li>Electrical work</li>
        <li>Plumbing (bathroom addition)</li>
        <li>Egress windows</li>
        <li>HVAC modifications</li>
        <li>Structural changes</li>
      </ul>
      <p><strong>Cost:</strong> $500-$2,000 depending on scope</p>
      <p><strong>Value:</strong> Protection, insurance coverage, legal bedrooms, easier resale</p>

      <p><strong>Finishing your basement is one of the best value-per-square-foot home improvements. Use this calculator to estimate your ROI and make informed finishing decisions.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'currentHomeValue',
        label: 'Current Home Value',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'basementSize',
        label: 'Basement Square Footage',
        type: 'number',
        defaultValue: 1000,
      },
      {
        name: 'renovationCost',
        label: 'Total Finishing Cost',
        type: 'number',
        defaultValue: 60000,
      },
      {
        name: 'finishType',
        label: 'Finish Level',
        type: 'select',
        defaultValue: 'midRange',
        options: [
          { value: 'basic', label: 'Basic Rec Room ($25K-$40K)' },
          { value: 'midRange', label: 'Mid-Range with Bath/Bedroom ($40K-$70K)' },
          { value: 'highEnd', label: 'High-End Multi-Room ($70K-$100K)' },
          { value: 'apartment', label: 'Apartment/ADU Conversion ($50K-$85K)' },
        ],
      },
      {
        name: 'bedroomsAdded',
        label: 'Bedrooms Added (with egress)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'bathroomsAdded',
        label: 'Bathrooms Added',
        type: 'number',
        defaultValue: 1,
      },
    ],
    results: [
      { 
        label: 'ROI Analysis', 
        isCurrency: false 
      },
      { 
        label: 'Value Added', 
        isCurrency: false 
      },
      { 
        label: 'Recommendation', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { currentHomeValue, basementSize, renovationCost, finishType, bedroomsAdded, bathroomsAdded } = values;
      
      const roiRates: Record<string, number> = {
        'basic': 0.675,      // 67.5%
        'midRange': 0.725,   // 72.5% (best ROI)
        'highEnd': 0.625,    // 62.5%
        'apartment': 0.80    // 80% (before rental income)
      };
      
      const baseROI = roiRates[finishType] || 0.70;
      const valueAdded = renovationCost * baseROI;
      
      // Additional value from bedrooms/bathrooms
      const bedroomValue = bedroomsAdded * 15000;  // $15K average per bedroom
      const bathroomValue = bathroomsAdded * 12000; // $12K average per bathroom
      const totalValueAdded = valueAdded + bedroomValue + bathroomValue;
      
      const newHomeValue = currentHomeValue + totalValueAdded;
      const totalROI = (totalValueAdded / renovationCost) * 100;
      const costPerSqFt = renovationCost / basementSize;
      
      // Estimate rental income for apartment type
      const monthlyRent = finishType === 'apartment' ? basementSize * 1.2 : 0; // $1.20/sq ft average
      const annualRentIncome = monthlyRent * 12;
      const paybackYears = annualRentIncome > 0 ? renovationCost / annualRentIncome : 0;
      
      return [
        { 
          label: 'ROI Analysis', 
          value: `💰 RETURN ON INVESTMENT

Total Investment: $${renovationCost.toLocaleString()}
Cost per Sq Ft: $${costPerSqFt.toFixed(2)}

Estimated Value Added:
• Base finish value: $${valueAdded.toLocaleString()}
${bedroomsAdded > 0 ? `• ${bedroomsAdded} bedroom(s): +$${bedroomValue.toLocaleString()}\n` : ''}${bathroomsAdded > 0 ? `• ${bathroomsAdded} bathroom(s): +$${bathroomValue.toLocaleString()}\n` : ''}• Total Value Added: $${totalValueAdded.toLocaleString()}

ROI Percentage: ${totalROI.toFixed(1)}%
${totalROI >= 80 ? '✅ EXCELLENT ROI' : totalROI >= 65 ? '✓ GOOD ROI' : totalROI >= 50 ? '⚠️ MODERATE ROI' : '❌ LOW ROI'}

${finishType === 'apartment' && annualRentIncome > 0 ?
  `\n🏠 RENTAL INCOME POTENTIAL:\nEstimated Rent: $${monthlyRent.toLocaleString()}/month\nAnnual Income: $${annualRentIncome.toLocaleString()}\nPayback Period: ${paybackYears.toFixed(1)} years\n5-Year Income: $${(annualRentIncome * 5).toLocaleString()}` : ''}`, 
          isCurrency: false 
        },
        { 
          label: 'Value Added', 
          value: `🏠 HOME VALUE IMPACT

Current Home Value: $${currentHomeValue.toLocaleString()}
Estimated New Value: $${newHomeValue.toLocaleString()}
Value Increase: $${totalValueAdded.toLocaleString()}

Basement Size: ${basementSize.toLocaleString()} sq ft
${bedroomsAdded > 0 ? `Bedrooms Added: ${bedroomsAdded} (legal with egress)\n` : ''}${bathroomsAdded > 0 ? `Bathrooms Added: ${bathroomsAdded}\n` : ''}
${finishType === 'basic' ? 'Basic finish: Good ROI for recreational space' :
  finishType === 'midRange' ? 'Mid-range finish: BEST ROI in basement category' :
  finishType === 'highEnd' ? 'High-end finish: Luxury appeal, moderate ROI' :
  'Apartment conversion: Best ROI with rental income potential'}

Cost Comparison:
• Basement finish: $${costPerSqFt.toFixed(0)}/sq ft
• Home addition: $200-$400/sq ft
• ✅ Basement is ${((300 - costPerSqFt) / 300 * 100).toFixed(0)}% cheaper than building addition!`, 
          isCurrency: false 
        },
        { 
          label: 'Recommendation', 
          value: `💡 RECOMMENDATION

${totalROI >= 70 ?
  '✅ EXCELLENT INVESTMENT\nStrong ROI with significant value added. Basement finishing is one of the best $/sq ft home improvements.' :
  totalROI >= 55 ?
  '✓ GOOD INVESTMENT\nSolid returns expected. Proceed with confidence, especially if you need the space.' :
  totalROI >= 40 ?
  '⚠️ MODERATE INVESTMENT\nAcceptable ROI. Proceed if:\n• You need the space for your family\n• Comparable homes have finished basements\n• You plan to stay 5+ years' :
  '⚠️ RECONSIDER SCOPE\nLow ROI for investment. Consider:\n• Scaling back finish level\n• Phased approach (finish over time)\n• Whether space is truly needed'}

Critical Success Factors:
${finishType === 'apartment' ? 
  '✅ ADD RENTAL INCOME:\n• Separate entrance is key\n• Full kitchen + bath required\n• Check local zoning/permits\n• Can dramatically improve total ROI\n\n' : ''}✅ MUST-HAVES:
• Solve any moisture issues FIRST
• Ensure 7'+ ceiling height (8'+ ideal)
• Add egress windows for bedrooms
• Include bathroom (essential for ROI)
• Use moisture-resistant materials
• Get proper permits

Maximize Your ROI:
• Focus on bedroom + bath additions
• Good lighting makes space feel larger
• Quality flooring (luxury vinyl plank)
• Keep finishes consistent with home
• Consider future rental potential
• Don't over-improve for neighborhood

${bedroomsAdded === 0 ? '💡 TIP: Adding a legal bedroom can increase ROI by 10-15%\n' : ''}${bathroomsAdded === 0 ? '💡 TIP: Bathroom is essential for basement usability and ROI\n' : ''}${costPerSqFt > 100 ? '⚠️ WARNING: Cost per sq ft is high. Shop contractors and materials\n' : ''}`, 
          isCurrency: false 
        },
      ];
    },
  },
};
