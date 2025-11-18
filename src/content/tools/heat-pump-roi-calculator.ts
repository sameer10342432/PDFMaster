import { CalculatorContent } from '@/types';

export const HeatPumpROICalculatorContent: CalculatorContent = {
  title: 'Heat Pump ROI Calculator',
  description: 'Calculate costs, energy savings, and ROI for heat pump installation vs. traditional HVAC systems with utility rebate analysis',
  icon: '♨️',
  category: 'Home Improvement',
  slug: 'heat-pump-roi-calculator',
  
  metaTitle: 'Heat Pump ROI Calculator - Air-Source HVAC Savings Analysis | Property Tools',
  metaDescription: 'Calculate heat pump costs, energy savings, and ROI vs. traditional furnace and AC. Includes federal tax credits, utility rebates, and payback analysis.',
  
  article: {
    title: 'Heat Pump ROI Calculator: Complete Cost-Benefit Analysis',
    content: `
      <h2>Heat Pump ROI Calculator</h2>
      <p>Heat pumps provide both heating and cooling from a single system, reducing energy costs by 30-50% ($400-$1,600 annually) compared to electric resistance heat or separate furnace and AC systems. Installation costs $5,000-$12,000 with 30% federal tax credit (up to $2,000) bringing net cost to $3,500-$10,000, offering payback in 3-10 years depending on climate and replaced system. Modern heat pumps work efficiently down to 5°F with some models operating to -13°F, making them viable in cold climates, especially when replacing electric or propane heat. With 15-20 year lifespan and combined heating/cooling functionality, heat pumps offer 15-year savings of $6,000-$24,000 versus conventional HVAC.</p>

      <h3>Heat Pump Installation Costs</h3>
      
      <h4>Air-Source Heat Pump (Complete System)</h4>
      <p><strong>Total Cost: $5,000-$12,000</strong></p>
      <ul>
        <li><strong>Equipment cost:</strong> $3,000-$7,000</li>
        <li><strong>Installation labor:</strong> $1,500-$3,500</li>
        <li><strong>Ductwork modifications:</strong> $500-$2,500 (if needed)</li>
        <li><strong>Electrical work:</strong> $300-$1,000</li>
        <li><strong>Thermostat:</strong> $150-$500 (smart thermostat)</li>
        <li><strong>Permits:</strong> $100-$300</li>
        <li><strong>Average total:</strong> $7,500-$9,000</li>
      </ul>

      <h4>Mini-Split Heat Pump (Ductless)</h4>
      <p><strong>Single Zone: $2,000-$5,000 | Multi-Zone: $4,000-$14,000</strong></p>
      <ul>
        <li><strong>Single zone (1 room):</strong> $2,000-$5,000</li>
        <li><strong>Dual zone (2 rooms):</strong> $4,000-$8,000</li>
        <li><strong>Tri-zone (3 rooms):</strong> $5,500-$10,000</li>
        <li><strong>Quad zone (4 rooms):</strong> $7,000-$14,000</li>
        <li><strong>Advantage:</strong> No ductwork needed, zone control</li>
        <li><strong>Best for:</strong> Older homes without ducts, additions, specific rooms</li>
      </ul>

      <h4>Cost by Size (Ducted System)</h4>
      <ul>
        <li><strong>1.5-2 ton (900-1,200 sq ft):</strong> $5,000-$8,000</li>
        <li><strong>2.5-3 ton (1,200-1,800 sq ft):</strong> $6,000-$9,500</li>
        <li><strong>3.5-4 ton (1,800-2,400 sq ft):</strong> $7,000-$11,000</li>
        <li><strong>5 ton (2,400-3,000 sq ft):</strong> $8,000-$12,000</li>
      </ul>

      <h3>Federal Tax Credits and Rebates</h3>
      
      <h4>Federal Energy Efficient Home Improvement Credit</h4>
      <ul>
        <li><strong>Credit amount:</strong> 30% of cost</li>
        <li><strong>Maximum:</strong> $2,000 for heat pumps</li>
        <li><strong>Example:</strong> $8,000 system = $2,000 credit (capped)</li>
        <li><strong>Requirements:</strong> Must meet ENERGY STAR Most Efficient criteria</li>
        <li><strong>HSPF requirement:</strong> ≥ 8.0 HSPF2 (heating)</li>
        <li><strong>SEER requirement:</strong> ≥ 16.0 SEER2 (cooling)</li>
        <li><strong>Valid through:</strong> 2032</li>
      </ul>

      <h4>High-Efficiency Electric Home Rebate Act (HEEHRA)</h4>
      <p><strong>Coming soon - Income-qualified rebates</strong></p>
      <ul>
        <li><strong>Heat pump rebate:</strong> Up to $8,000 (low/moderate income)</li>
        <li><strong>Electrical upgrades:</strong> Up to $4,000 additional</li>
        <li><strong>Total potential:</strong> Up to $14,000 for qualified households</li>
        <li><strong>Status:</strong> Funding approved, state programs rolling out 2024-2025</li>
      </ul>

      <h4>State and Utility Rebates</h4>
      <ul>
        <li><strong>Utility rebates:</strong> $300-$2,500 (varies by utility)</li>
        <li><strong>State rebates:</strong> Additional $500-$2,000 in some states</li>
        <li><strong>Examples:</strong></li>
        <li>- Massachusetts: Up to $2,500</li>
        <li>- Maine: Up to $2,400</li>
        <li>- Connecticut: $500-$2,000</li>
        <li>- California: Varies by utility, $500-$3,000</li>
      </ul>

      <h4>Example: Total Cost After Incentives</h4>
      <ul>
        <li><strong>System cost:</strong> $8,000</li>
        <li><strong>Federal tax credit:</strong> -$2,000</li>
        <li><strong>Utility rebate:</strong> -$1,200</li>
        <li><strong>Net cost:</strong> $4,800 (40% reduction)</li>
      </ul>

      <h3>Annual Energy Savings</h3>
      
      <h4>Heat Pump vs. Electric Resistance Heat</h4>
      <p><strong>Annual Savings: $800-$2,000 (50-70% reduction)</strong></p>
      <ul>
        <li><strong>Electric resistance heat:</strong> $1,500-$3,000/year</li>
        <li><strong>Heat pump:</strong> $600-$1,200/year</li>
        <li><strong>Savings:</strong> $900-$1,800/year</li>
        <li><strong>Efficiency gain:</strong> 200-400% vs. 100% for resistance</li>
      </ul>

      <h4>Heat Pump vs. Natural Gas Furnace + AC</h4>
      <p><strong>Savings: Varies by gas prices</strong></p>
      <ul>
        <li><strong>Gas furnace + AC:</strong> $800-$1,800/year</li>
        <li><strong>Heat pump:</strong> $700-$1,400/year</li>
        <li><strong>Savings:</strong> $100-$600/year (depends on gas vs. electric rates)</li>
        <li><strong>Note:</strong> Savings higher when gas is expensive</li>
      </ul>

      <h4>Heat Pump vs. Propane or Oil Heat</h4>
      <p><strong>Annual Savings: $1,000-$2,500 (60-75% reduction)</strong></p>
      <ul>
        <li><strong>Propane heat + AC:</strong> $2,000-$3,500/year</li>
        <li><strong>Oil heat + AC:</strong> $2,200-$4,000/year</li>
        <li><strong>Heat pump:</strong> $800-$1,500/year</li>
        <li><strong>Savings:</strong> $1,200-$2,500/year</li>
        <li><strong>Best ROI scenario</strong></li>
      </ul>

      <h4>Savings by Climate Zone</h4>
      <ul>
        <li><strong>Cold climates (heating dominant):</strong> $600-$1,800/year (vs. electric)</li>
        <li><strong>Mixed climates:</strong> $400-$1,200/year</li>
        <li><strong>Hot climates (cooling dominant):</strong> $200-$600/year</li>
      </ul>

      <h3>ROI Analysis by Scenario</h3>
      
      <h4>Best ROI: Replacing Electric or Propane Heat</h4>
      <p><strong>System: $8,000 | Net Cost: $4,800 (after incentives)</strong></p>
      <ul>
        <li><strong>Annual savings:</strong> $1,500</li>
        <li><strong>Simple payback:</strong> 3.2 years</li>
        <li><strong>15-year savings:</strong> $22,500</li>
        <li><strong>15-year ROI:</strong> 469%</li>
        <li><strong>Breakeven:</strong> Year 3-4</li>
      </ul>

      <h4>Good ROI: Replacing AC + Old Furnace</h4>
      <p><strong>Both systems due for replacement</strong></p>
      <ul>
        <li><strong>Heat pump cost:</strong> $8,000</li>
        <li><strong>Gas furnace + AC cost:</strong> $7,000</li>
        <li><strong>Incremental cost:</strong> $1,000</li>
        <li><strong>After tax credit:</strong> -$1,000 (heat pump cheaper!)</li>
        <li><strong>Annual savings:</strong> $300</li>
        <li><strong>Result:</strong> Immediate positive ROI</li>
      </ul>

      <h4>Moderate ROI: Cheap Natural Gas Area</h4>
      <p><strong>Net cost: $5,500 (after incentives)</strong></p>
      <ul>
        <li><strong>Annual savings:</strong> $200-$400</li>
        <li><strong>Simple payback:</strong> 14-28 years</li>
        <li><strong>15-year savings:</strong> $3,000-$6,000</li>
        <li><strong>Environmental benefit:</strong> Primary driver</li>
      </ul>

      <h3>Cold Climate Performance</h3>
      
      <h4>Modern Cold Climate Heat Pumps</h4>
      <ul>
        <li><strong>Effective to:</strong> -13°F to 5°F depending on model</li>
        <li><strong>Full capacity to:</strong> 5°F to 17°F</li>
        <li><strong>Reduced capacity:</strong> 17°F to -13°F (still heats, less efficiently)</li>
        <li><strong>Backup heat:</strong> Automatic below threshold</li>
        <li><strong>Brands excelling:</strong> Mitsubishi, Fujitsu, LG, Carrier Infinity</li>
      </ul>

      <h4>Backup Heat Options</h4>
      <ul>
        <li><strong>Dual fuel:</strong> Heat pump + gas furnace backup (best comfort)</li>
        <li><strong>Electric resistance strips:</strong> Built-in backup ($300-$800)</li>
        <li><strong>Keep existing furnace:</strong> Use as backup (if compatible)</li>
        <li><strong>Backup activation:</strong> Typically <25°F (adjustable)</li>
      </ul>

      <h4>Cold Climate Efficiency</h4>
      <ul>
        <li><strong>At 47°F:</strong> 300-400% efficiency (HSPF rating condition)</li>
        <li><strong>At 17°F:</strong> 200-300% efficiency</li>
        <li><strong>At 5°F:</strong> 150-200% efficiency</li>
        <li><strong>Below 5°F:</strong> May use backup (100% efficiency)</li>
        <li><strong>Still better:</strong> Than resistance heat alone in most conditions</li>
      </ul>

      <h3>Heat Pump Types Compared</h3>
      
      <h4>Ducted Air-Source (Central System)</h4>
      <p><strong>Cost: $5,000-$12,000</strong></p>
      <ul>
        <li><strong>Best for:</strong> Whole-house heating/cooling, existing ductwork</li>
        <li><strong>Pros:</strong> Heats/cools entire home, familiar operation, hidden equipment</li>
        <li><strong>Cons:</strong> Requires ductwork, single-zone control</li>
        <li><strong>Efficiency:</strong> 14-21 SEER2, 7.5-13 HSPF2</li>
      </ul>

      <h4>Mini-Split (Ductless)</h4>
      <p><strong>Cost: $2,000-$14,000</strong></p>
      <ul>
        <li><strong>Best for:</strong> Homes without ducts, additions, room-by-room control</li>
        <li><strong>Pros:</strong> No ductwork, zone control, highest efficiency</li>
        <li><strong>Cons:</strong> Indoor units visible, higher cost for whole-house</li>
        <li><strong>Efficiency:</strong> 16-30+ SEER2, 9-14 HSPF2 (highest available)</li>
      </ul>

      <h4>Packaged Terminal (PTHP - through-wall)</h4>
      <p><strong>Cost: $600-$2,000 per unit</strong></p>
      <ul>
        <li><strong>Best for:</strong> Single rooms, motels, apartments</li>
        <li><strong>Pros:</strong> Cheap, easy to replace, independent zones</li>
        <li><strong>Cons:</strong> Lower efficiency, visible, louder</li>
        <li><strong>Efficiency:</strong> 9-12 SEER2, 6-8 HSPF2</li>
      </ul>

      <h3>Efficiency Ratings Explained</h3>
      
      <h4>SEER2 (Cooling Efficiency)</h4>
      <ul>
        <li><strong>Minimum (2023+):</strong> 14 SEER2</li>
        <li><strong>ENERGY STAR:</strong> 15+ SEER2</li>
        <li><strong>High efficiency:</strong> 18-21 SEER2</li>
        <li><strong>Ultra-high:</strong> 22-30+ SEER2 (mini-splits)</li>
        <li><strong>Each point:</strong> ~5-7% more efficient</li>
      </ul>

      <h4>HSPF2 (Heating Efficiency)</h4>
      <ul>
        <li><strong>Minimum (2023+):</strong> 7.5 HSPF2</li>
        <li><strong>ENERGY STAR:</strong> 8.1+ HSPF2</li>
        <li><strong>High efficiency:</strong> 9-11 HSPF2</li>
        <li><strong>Cold climate:</strong> 10-14 HSPF2</li>
      </ul>

      <h4>COP (Coefficient of Performance)</h4>
      <ul>
        <li><strong>Meaning:</strong> Units of heat per unit of electricity</li>
        <li><strong>At 47°F:</strong> COP 3.0-4.5 (300-450% efficiency)</li>
        <li><strong>At 17°F:</strong> COP 2.0-3.0 (200-300%)</li>
        <li><strong>At 5°F:</strong> COP 1.5-2.2 (150-220%)</li>
      </ul>

      <h3>Maintenance and Lifespan</h3>
      
      <h4>Heat Pump Lifespan</h4>
      <ul>
        <li><strong>Average lifespan:</strong> 15-20 years</li>
        <li><strong>Mini-splits:</strong> 20-25 years (less mechanical stress)</li>
        <li><strong>Compressor warranty:</strong> 10 years typical</li>
        <li><strong>Parts warranty:</strong> 5-10 years</li>
      </ul>

      <h4>Annual Maintenance</h4>
      <p><strong>Cost: $150-$350 per year</strong></p>
      <ul>
        <li><strong>Spring tune-up:</strong> $100-$175 (before cooling season)</li>
        <li><strong>Fall tune-up:</strong> $100-$175 (before heating season)</li>
        <li><strong>Filter changes:</strong> $20-$60 (DIY, 3-4 per year)</li>
        <li><strong>Coil cleaning:</strong> Included in tune-ups</li>
        <li><strong>Refrigerant check:</strong> Every 2-3 years</li>
      </ul>

      <h4>DIY Maintenance</h4>
      <ul>
        <li><strong>Monthly:</strong> Check/clean air filter</li>
        <li><strong>Quarterly:</strong> Clear outdoor unit of debris</li>
        <li><strong>Annually:</strong> Clean outdoor coils (spray with hose)</li>
        <li><strong>Winter:</strong> Keep outdoor unit clear of snow/ice</li>
      </ul>

      <h3>Installation Considerations</h3>
      
      <h4>Sizing (Critical for Efficiency)</h4>
      <ul>
        <li><strong>Manual J calculation:</strong> Required for proper sizing</li>
        <li><strong>Too large:</strong> Short-cycling, poor dehumidification, lower efficiency</li>
        <li><strong>Too small:</strong> Inadequate heating/cooling, constant running</li>
        <li><strong>Cold climate:</strong> Size for heating load (priority)</li>
        <li><strong>Hot climate:</strong> Size for cooling load</li>
      </ul>

      <h4>Ductwork Assessment</h4>
      <ul>
        <li><strong>Existing ducts:</strong> Inspect for leaks, insulation</li>
        <li><strong>Duct sealing:</strong> $300-$1,000 (improves efficiency 20-30%)</li>
        <li><strong>Duct insulation:</strong> $400-$1,500</li>
        <li><strong>No ducts:</strong> Consider mini-splits (avoid ductwork cost)</li>
      </ul>

      <h4>Electrical Requirements</h4>
      <ul>
        <li><strong>Typical:</strong> 240V, 30-60 amp circuit</li>
        <li><strong>Panel upgrade:</strong> Rarely needed (unlike geothermal)</li>
        <li><strong>Backup heat strips:</strong> Additional 30-60 amps if added</li>
      </ul>

      <h3>Best Candidates for Heat Pumps</h3>
      
      <h4>Ideal Situations</h4>
      <ol>
        <li>Replacing electric resistance heat (biggest savings)</li>
        <li>Replacing propane or oil heat (high ROI)</li>
        <li>Replacing both failed AC and furnace (incremental cost minimal)</li>
        <li>New construction (no existing system to replace)</li>
        <li>Homes without natural gas service</li>
        <li>Moderate to hot climates (year-round benefit)</li>
        <li>Access to generous utility rebates ($1,000+)</li>
        <li>Environmentally focused (electrification goal)</li>
        <li>Homes without ductwork (mini-splits avoid duct installation)</li>
      </ol>

      <h4>Less Suitable Situations</h4>
      <ul>
        <li>Recently installed efficient gas furnace + AC</li>
        <li>Extremely cold climate without cold-climate model</li>
        <li>Very cheap natural gas (<$0.70/therm)</li>
        <li>Insufficient electrical panel capacity (rare)</li>
        <li>Rental property (tenant won't benefit from savings)</li>
      </ul>

      <h3>Common Concerns Addressed</h3>
      
      <h4>"Heat Pumps Don't Work in Cold Weather"</h4>
      <ul>
        <li><strong>MYTH:</strong> Old models (pre-2015) struggled below 25°F</li>
        <li><strong>REALITY:</strong> Modern cold-climate heat pumps work to -13°F</li>
        <li><strong>Widespread use:</strong> Common in Maine, Minnesota, Canada</li>
        <li><strong>Backup available:</strong> For extreme cold snaps</li>
      </ul>

      <h4>"Too Expensive to Run"</h4>
      <ul>
        <li><strong>All-electric bill:</strong> Yes, but total cost lower</li>
        <li><strong>Efficiency:</strong> 200-400% vs. 95% for gas furnace</li>
        <li><strong>Compare total cost:</strong> Not just electricity bill</li>
        <li><strong>Savings proven:</strong> Documented in multiple studies</li>
      </ul>

      <h4>"Don't Last as Long"</h4>
      <ul>
        <li><strong>Lifespan:</strong> 15-20 years (same as AC + furnace combined)</li>
        <li><strong>Single system:</strong> One system vs. two (furnace + AC)</li>
        <li><strong>Year-round use:</strong> More usage, but designed for it</li>
        <li><strong>Mini-splits:</strong> Often last 20-25 years</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>Heat pumps cost $5,000-$12,000 installed but net $3,500-$10,000 after 30% federal tax credit (up to $2,000) and utility rebates ($300-$2,500), providing annual savings of $400-$2,000 depending on replaced system and climate. ROI is best when replacing electric resistance heat (3-5 year payback), propane/oil heat (4-7 years), or when both AC and furnace need simultaneous replacement (immediate positive ROI with tax credit). Modern cold-climate heat pumps work effectively to -13°F, making them viable in all U.S. climates with 15-year total savings of $6,000-$30,000 versus conventional HVAC. Heat pumps make most financial sense for homes with electric, propane, or oil heat, properties without natural gas, or when both heating and cooling systems need replacement. Mini-split systems ($2,000-$14,000) offer highest efficiency and avoid ductwork costs in homes without existing ducts. While cheaper natural gas may reduce savings to $100-$400 annually (longer payback), heat pumps provide environmental benefits through electrification and future-proof homes as the grid becomes greener and electricity potentially becomes cheaper relative to fossil fuels.</p>
    `,
  },
};
