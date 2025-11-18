import { CalculatorContent } from '@/types';

export const GeothermalHeatingCoolingROICalculatorContent: CalculatorContent = {
  title: 'Geothermal Heating/Cooling ROI Calculator',
  description: 'Calculate installation costs and long-term savings of geothermal HVAC systems with payback period and lifetime energy savings analysis',
  icon: '🌍',
  category: 'Home Improvement',
  slug: 'geothermal-heating-cooling-roi-calculator',
  
  metaTitle: 'Geothermal HVAC ROI Calculator - Heat Pump Savings Analysis | Property Tools',
  metaDescription: 'Calculate geothermal heat pump installation costs, energy savings, and ROI. Analyze ground-source HVAC systems with payback period and federal tax credits.',
  
  article: {
    title: 'Geothermal Heating/Cooling ROI Calculator: Complete Analysis',
    content: `
      <h2>Geothermal Heating/Cooling ROI Calculator</h2>
      <p>Geothermal heat pumps (ground-source heat pumps) use the earth's constant underground temperature to provide highly efficient heating and cooling, reducing energy costs by 40-70% compared to conventional HVAC systems. Installation costs $20,000-$45,000 for residential systems, with federal tax credits covering 30% ($6,000-$13,500), making net cost $14,000-$31,500. Annual savings of $800-$2,400 provide payback in 5-15 years, with 25-year total savings of $20,000-$60,000 and system lifespan of 25-50 years (double conventional HVAC). Geothermal systems work in any climate, operate quietly, require minimal maintenance, and can provide free hot water during summer operation.</p>

      <h3>Geothermal Installation Costs</h3>
      
      <h4>Complete System Cost Breakdown</h4>
      <p><strong>Total Cost: $20,000-$45,000 (before incentives)</strong></p>
      <ul>
        <li><strong>Ground loop installation:</strong> $10,000-$30,000 (largest expense)</li>
        <li><strong>Heat pump unit (indoor):</strong> $3,000-$8,000</li>
        <li><strong>Ductwork modifications:</strong> $2,000-$5,000 (if needed)</li>
        <li><strong>Desuperheater (hot water):</strong> $500-$1,500 (optional)</li>
        <li><strong>Labor and installation:</strong> $3,000-$7,000</li>
        <li><strong>Permits and engineering:</strong> $500-$1,500</li>
      </ul>

      <h4>Ground Loop System Types and Costs</h4>
      
      <p><strong>Vertical Loop (Most Common)</strong></p>
      <ul>
        <li><strong>Cost:</strong> $12,000-$25,000</li>
        <li><strong>Drilling depth:</strong> 150-400 feet per borehole</li>
        <li><strong>Number of boreholes:</strong> 2-6 for typical home</li>
        <li><strong>Drilling cost:</strong> $15-$30 per foot</li>
        <li><strong>Land required:</strong> Minimal (20x20 ft area)</li>
        <li><strong>Best for:</strong> Limited yard space, any soil type</li>
        <li><strong>Installation time:</strong> 2-4 days</li>
      </ul>

      <p><strong>Horizontal Loop</strong></p>
      <ul>
        <li><strong>Cost:</strong> $10,000-$18,000 (cheapest)</li>
        <li><strong>Trench depth:</strong> 4-10 feet deep</li>
        <li><strong>Trench length:</strong> 400-600 feet for typical home</li>
        <li><strong>Land required:</strong> 0.25-0.5 acres minimum</li>
        <li><strong>Best for:</strong> Large lots, new construction</li>
        <li><strong>Installation time:</strong> 3-5 days</li>
      </ul>

      <p><strong>Pond/Lake Loop</strong></p>
      <ul>
        <li><strong>Cost:</strong> $8,000-$15,000 (lowest cost if available)</li>
        <li><strong>Requirements:</strong> Body of water 8+ feet deep, within 200 ft</li>
        <li><strong>Coil installation:</strong> Submerged at bottom</li>
        <li><strong>Best for:</strong> Waterfront properties</li>
        <li><strong>Installation time:</strong> 1-2 days</li>
      </ul>

      <p><strong>Open Loop (Well Water)</strong></p>
      <ul>
        <li><strong>Cost:</strong> $10,000-$20,000</li>
        <li><strong>Requirements:</strong> Adequate groundwater supply and quality</li>
        <li><strong>Two wells:</strong> Supply well and discharge/return well</li>
        <li><strong>Considerations:</strong> Water quality, local regulations</li>
        <li><strong>Best for:</strong> Properties with excellent groundwater</li>
      </ul>

      <h3>Federal Tax Credits and Incentives</h3>
      
      <h4>Federal Tax Credit (30%)</h4>
      <ul>
        <li><strong>Credit amount:</strong> 30% of total cost (through 2032)</li>
        <li><strong>Maximum:</strong> No cap (unlimited)</li>
        <li><strong>Example:</strong> $30,000 system = $9,000 credit</li>
        <li><strong>Schedule:</strong> 30% through 2032, 26% in 2033, 22% in 2034</li>
        <li><strong>Eligibility:</strong> ENERGY STAR certified systems</li>
        <li><strong>Important:</strong> Must have tax liability to use credit</li>
      </ul>

      <h4>State and Local Incentives</h4>
      <ul>
        <li><strong>State tax credits:</strong> Additional 10-25% in some states</li>
        <li><strong>Utility rebates:</strong> $500-$3,000 (varies by utility)</li>
        <li><strong>Low-interest loans:</strong> 0-3% financing available in some areas</li>
        <li><strong>Combined incentives:</strong> Can reduce cost by 40-50%</li>
      </ul>

      <h4>Example: Net Cost After Incentives</h4>
      <ul>
        <li><strong>Total installation cost:</strong> $28,000</li>
        <li><strong>Federal tax credit (30%):</strong> -$8,400</li>
        <li><strong>State rebate:</strong> -$2,000</li>
        <li><strong>Utility rebate:</strong> -$1,500</li>
        <li><strong>Net cost:</strong> $16,100 (42% reduction)</li>
      </ul>

      <h3>Annual Energy Savings</h3>
      
      <h4>HVAC Cost Comparison</h4>
      <p><strong>Annual Savings: $800-$2,400 (40-70% reduction)</strong></p>
      
      <p><strong>Conventional HVAC Annual Costs</strong></p>
      <ul>
        <li><strong>Natural gas furnace + AC:</strong> $1,200-$2,400/year</li>
        <li><strong>Electric heat + AC:</strong> $1,800-$3,600/year</li>
        <li><strong>Oil heat + AC:</strong> $2,000-$4,000/year</li>
      </ul>

      <p><strong>Geothermal HVAC Annual Costs</strong></p>
      <ul>
        <li><strong>All-electric geothermal:</strong> $600-$1,200/year</li>
        <li><strong>Savings vs. gas furnace:</strong> $600-$1,200/year (50%)</li>
        <li><strong>Savings vs. electric heat:</strong> $1,200-$2,400/year (67%)</li>
        <li><strong>Savings vs. oil heat:</strong> $1,400-$2,800/year (70%)</li>
      </ul>

      <h4>Energy Savings by Climate</h4>
      <ul>
        <li><strong>Cold climates (heating dominant):</strong> $1,200-$2,400/year</li>
        <li><strong>Mixed climates:</strong> $800-$1,600/year</li>
        <li><strong>Hot climates (cooling dominant):</strong> $600-$1,200/year</li>
        <li><strong>Efficiency:</strong> 300-600% efficiency vs. 90-98% for conventional</li>
      </ul>

      <h4>Hot Water Savings (with Desuperheater)</h4>
      <ul>
        <li><strong>Free hot water:</strong> During cooling season (summer)</li>
        <li><strong>Supplemental hot water:</strong> Year-round</li>
        <li><strong>Annual savings:</strong> $200-$600</li>
        <li><strong>Desuperheater cost:</strong> $500-$1,500 (highly recommended)</li>
        <li><strong>Payback:</strong> 1-3 years for desuperheater</li>
      </ul>

      <h3>ROI and Payback Analysis</h3>
      
      <h4>Typical ROI Scenario (Cold Climate)</h4>
      <p><strong>Replacing Natural Gas Furnace + AC</strong></p>
      <ul>
        <li><strong>Geothermal installation:</strong> $28,000</li>
        <li><strong>Federal tax credit (30%):</strong> -$8,400</li>
        <li><strong>State/utility rebates:</strong> -$2,000</li>
        <li><strong>Net cost:</strong> $17,600</li>
        <li><strong>Annual HVAC savings:</strong> $1,200</li>
        <li><strong>Hot water savings:</strong> $400</li>
        <li><strong>Total annual savings:</strong> $1,600</li>
        <li><strong>Simple payback:</strong> 11 years</li>
        <li><strong>25-year total savings:</strong> $40,000</li>
        <li><strong>25-year ROI:</strong> 227%</li>
      </ul>

      <h4>Best-Case Scenario (Electric Heat)</h4>
      <p><strong>Replacing Electric Resistance Heat + AC</strong></p>
      <ul>
        <li><strong>Net installation cost:</strong> $18,000 (after incentives)</li>
        <li><strong>Annual energy savings:</strong> $2,000</li>
        <li><strong>Hot water savings:</strong> $500</li>
        <li><strong>Total annual savings:</strong> $2,500</li>
        <li><strong>Simple payback:</strong> 7.2 years</li>
        <li><strong>25-year total savings:</strong> $62,500</li>
        <li><strong>25-year ROI:</strong> 347%</li>
      </ul>

      <h4>Modest Scenario (Mild Climate, Gas Heat)</h4>
      <ul>
        <li><strong>Net installation cost:</strong> $16,000</li>
        <li><strong>Annual savings:</strong> $800</li>
        <li><strong>Simple payback:</strong> 20 years</li>
        <li><strong>25-year total savings:</strong> $20,000</li>
        <li><strong>25-year ROI:</strong> 125%</li>
      </ul>

      <h3>System Lifespan and Maintenance</h3>
      
      <h4>Equipment Lifespan</h4>
      <ul>
        <li><strong>Ground loop:</strong> 50-100+ years (permanent infrastructure)</li>
        <li><strong>Heat pump (indoor unit):</strong> 20-25 years</li>
        <li><strong>Compressor warranty:</strong> 5-10 years standard</li>
        <li><strong>Total system:</strong> 25-50 years effective life</li>
        <li><strong>Conventional HVAC:</strong> 10-15 years (for comparison)</li>
      </ul>

      <h4>Maintenance Costs</h4>
      <p><strong>Annual Cost: $100-$300</strong></p>
      <ul>
        <li><strong>Annual inspection:</strong> $100-$200</li>
        <li><strong>Filter changes:</strong> $20-$60 (3-4 per year)</li>
        <li><strong>Refrigerant check:</strong> Every 3-5 years ($150-$300)</li>
        <li><strong>Coil cleaning:</strong> Every 2-3 years ($100-$200)</li>
        <li><strong>Pump replacement (25-30 years):</strong> $3,500-$7,000</li>
        <li><strong>Conventional HVAC maintenance:</strong> $200-$500/year (for comparison)</li>
      </ul>

      <h3>Performance Benefits</h3>
      
      <h4>Heating Performance</h4>
      <ul>
        <li><strong>Efficiency:</strong> 300-500% (3-5 units heat per 1 unit electricity)</li>
        <li><strong>Consistent heat:</strong> No temperature fluctuations</li>
        <li><strong>Works in extreme cold:</strong> Effective to -20°F and below</li>
        <li><strong>No backup needed:</strong> Sized to handle coldest days</li>
        <li><strong>Even distribution:</strong> Better comfort than forced air</li>
      </ul>

      <h4>Cooling Performance</h4>
      <ul>
        <li><strong>Efficiency:</strong> 400-600% (more efficient than air conditioners)</li>
        <li><strong>Dehumidification:</strong> Superior moisture removal</li>
        <li><strong>Quiet operation:</strong> No outdoor condenser noise</li>
        <li><strong>Consistent cooling:</strong> Stable temperatures</li>
      </ul>

      <h4>Comfort and Quality of Life</h4>
      <ul>
        <li><strong>Quiet operation:</strong> No outdoor compressor noise</li>
        <li><strong>Even temperatures:</strong> Minimal hot/cold spots</li>
        <li><strong>Excellent dehumidification:</strong> Better indoor air quality</li>
        <li><strong>No fossil fuels:</strong> No carbon monoxide risk</li>
        <li><strong>Compatible with radiant floors:</strong> Superior comfort</li>
      </ul>

      <h3>Installation Considerations</h3>
      
      <h4>Property Requirements</h4>
      <ul>
        <li><strong>Vertical loop:</strong> Small drilling area (20x20 ft minimum)</li>
        <li><strong>Horizontal loop:</strong> 0.25-0.5 acres yard space</li>
        <li><strong>Pond loop:</strong> Nearby water body 8+ feet deep</li>
        <li><strong>All systems:</strong> No specific soil requirements</li>
        <li><strong>Urban viable:</strong> Yes, with vertical loops</li>
      </ul>

      <h4>Installation Timeline</h4>
      <ul>
        <li><strong>Site assessment:</strong> 1-2 days</li>
        <li><strong>System design:</strong> 1-2 weeks</li>
        <li><strong>Permits:</strong> 2-6 weeks</li>
        <li><strong>Loop installation:</strong> 1-5 days (depends on type)</li>
        <li><strong>Indoor equipment:</strong> 1-2 days</li>
        <li><strong>Total timeline:</strong> 4-10 weeks from start to finish</li>
      </ul>

      <h4>Best Time to Install</h4>
      <ul>
        <li><strong>New construction:</strong> Ideal (integrate with site work)</li>
        <li><strong>HVAC replacement:</strong> When existing system fails</li>
        <li><strong>Major renovation:</strong> Good opportunity</li>
        <li><strong>Season:</strong> Spring or fall (moderate weather)</li>
      </ul>

      <h3>Comparison: Geothermal vs. Alternatives</h3>
      
      <h4>Geothermal vs. Air-Source Heat Pump</h4>
      <p><strong>Air-Source Heat Pump Cost: $5,000-$12,000</strong></p>
      <ul>
        <li><strong>Installation cost:</strong> Air-source 60-70% cheaper</li>
        <li><strong>Efficiency:</strong> Geothermal 30-40% more efficient</li>
        <li><strong>Cold weather:</strong> Geothermal much better below 20°F</li>
        <li><strong>Lifespan:</strong> Geothermal lasts 2x longer</li>
        <li><strong>Noise:</strong> Geothermal much quieter (no outdoor unit)</li>
        <li><strong>Best choice:</strong> Geothermal for long-term, air-source for lower budget</li>
      </ul>

      <h4>Geothermal vs. High-Efficiency Gas Furnace + AC</h4>
      <p><strong>Gas Furnace + AC Cost: $8,000-$15,000</strong></p>
      <ul>
        <li><strong>Installation cost:</strong> Gas system 40-60% cheaper</li>
        <li><strong>Annual costs:</strong> Geothermal 50% lower</li>
        <li><strong>Payback period:</strong> 8-15 years for geothermal premium</li>
        <li><strong>Environmental:</strong> Geothermal zero emissions</li>
        <li><strong>Maintenance:</strong> Similar costs</li>
        <li><strong>Best choice:</strong> Geothermal if staying 10+ years</li>
      </ul>

      <h4>Geothermal vs. Solar + Standard HVAC</h4>
      <ul>
        <li><strong>Solar + HVAC cost:</strong> $20,000-$35,000 (similar)</li>
        <li><strong>Both eligible:</strong> Can combine geothermal + solar for maximum efficiency</li>
        <li><strong>Geothermal advantage:</strong> Works 24/7, any weather</li>
        <li><strong>Solar advantage:</strong> Can sell excess power back</li>
        <li><strong>Best choice:</strong> Consider both (geothermal + solar is ideal)</li>
      </ul>

      <h3>Best Candidates for Geothermal</h3>
      
      <h4>Ideal Properties and Situations</h4>
      <ol>
        <li>Replacing failed HVAC system (costs already sunk)</li>
        <li>New construction (integrate loop with excavation)</li>
        <li>High energy costs ($200+ monthly HVAC bills)</li>
        <li>Electric heat or oil heat (highest savings)</li>
        <li>Plan to stay in home 10+ years</li>
        <li>Cold climates (biggest heating savings)</li>
        <li>Environmentally conscious homeowners</li>
        <li>Properties with adequate land or drilling access</li>
        <li>Want quiet HVAC system</li>
        <li>Seeking maximum efficiency</li>
      </ol>

      <h4>Less Suitable Situations</h4>
      <ul>
        <li>Recently installed efficient gas furnace + AC</li>
        <li>Plan to move within 5 years</li>
        <li>Very low energy costs (cheap natural gas)</li>
        <li><strong>Insufficient tax liability for credit</strong></li>
        <li>Urban lot with no drilling access</li>
        <li>Budget under $20,000</li>
        <li>Mild climate with low HVAC usage</li>
      </ul>

      <h3>Environmental Impact</h3>
      
      <h4>Carbon Footprint Reduction</h4>
      <ul>
        <li><strong>CO2 reduction:</strong> 3-6 tons per year vs. gas furnace</li>
        <li><strong>Equivalent:</strong> Removing 1 car from road</li>
        <li><strong>Zero direct emissions:</strong> No combustion on-site</li>
        <li><strong>Renewable:</strong> Uses earth's constant temperature</li>
      </ul>

      <h4>Sustainability Benefits</h4>
      <ul>
        <li><strong>Grid independence:</strong> Works with solar for full self-sufficiency</li>
        <li><strong>No fossil fuels:</strong> Electric-only operation</li>
        <li><strong>Long lifespan:</strong> Less waste, fewer replacements</li>
        <li><strong>Refrigerant:</strong> Minimal amount, sealed system</li>
      </ul>

      <h3>Common Concerns Addressed</h3>
      
      <h4>"Too Expensive"</h4>
      <ul>
        <li>30% federal credit reduces cost significantly</li>
        <li>Double lifespan means lower lifetime cost</li>
        <li>Energy savings compound over decades</li>
        <li>Property value increase offsets cost</li>
        <li>Consider cost per year of use ($700-$1,400 vs. $500-$1,000 for gas HVAC)</li>
      </ul>

      <h4>"Works Only in Certain Climates"</h4>
      <ul>
        <li>FALSE - works in all climates</li>
        <li>Ground temperature constant year-round</li>
        <li>Tested in Alaska to Florida</li>
        <li>Actually more efficient in extreme climates</li>
      </ul>

      <h4>"Underground Pipes Will Leak"</h4>
      <ul>
        <li>Welded polyethylene pipes - extremely durable</li>
        <li>Pressure tested before burial</li>
        <li>50-100 year lifespan typical</li>
        <li>Leak rate: <1% over 30 years</li>
        <li>Warranty: 25-50 years on ground loop</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>Geothermal heat pumps reduce HVAC costs by 40-70% ($800-$2,400 annually) through highly efficient ground-source heating and cooling, with installation costs of $20,000-$45,000 reduced to $14,000-$31,500 after 30% federal tax credit. Payback periods range from 5-15 years depending on climate and existing system, with 25-year total savings of $20,000-$60,000 and system lifespan of 25-50 years (double conventional HVAC). Geothermal makes most financial sense when replacing electric or oil heat (highest savings), in cold climates with significant heating needs, for homeowners planning to stay 10+ years, and when combined with available incentives. The system works in any climate, operates quietly with no outdoor equipment, requires minimal maintenance, and provides superior comfort with even temperatures and excellent dehumidification. While upfront costs are higher than conventional HVAC, the combination of energy savings, extended lifespan, 30% tax credit, and environmental benefits make geothermal an excellent long-term investment for properties with adequate space and homeowners committed to efficiency.</p>
    `,
  },
};
