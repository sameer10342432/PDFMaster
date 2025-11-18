import { CalculatorContent } from '@/types';

export const TanklessWaterHeaterROICalculatorContent: CalculatorContent = {
  title: 'Tankless Water Heater ROI Calculator',
  description: 'Compare tankless water heater costs vs. traditional tank systems including energy savings, lifespan, and return on investment',
  icon: '💧',
  category: 'Home Improvement',
  slug: 'tankless-water-heater-roi-calculator',
  
  metaTitle: 'Tankless Water Heater ROI Calculator - On-Demand vs Tank Comparison | Property Tools',
  metaDescription: 'Calculate tankless water heater costs, energy savings, and ROI vs. traditional tank heaters. Compare installation, operating costs, and payback period.',
  
  article: {
    title: 'Tankless Water Heater ROI Calculator: Complete Cost Analysis',
    content: `
      <h2>Tankless Water Heater ROI Calculator</h2>
      <p>Tankless water heaters heat water on-demand rather than storing hot water in a tank, reducing energy costs by 8-34% ($30-$150 annually) and lasting 20-30 years versus 10-15 years for tank heaters. Installation costs $1,200-$4,500 for tankless vs. $800-$2,500 for tank systems, with the $400-$2,000 premium paying back in 10-20 years through energy savings and extended lifespan. Tankless heaters provide unlimited hot water, save 12-16 square feet of floor space, and work best for households using less than 41 gallons of hot water daily or those willing to install multiple units for high-demand situations.</p>

      <h3>Tankless Water Heater Costs</h3>
      
      <h4>Gas Tankless Installation</h4>
      <p><strong>Total Cost: $1,200-$4,500</strong></p>
      <ul>
        <li><strong>Unit cost:</strong> $500-$2,000</li>
        <li><strong>Installation labor:</strong> $500-$1,500</li>
        <li><strong>Venting upgrades:</strong> $200-$800 (often required)</li>
        <li><strong>Gas line upgrade:</strong> $0-$1,000 (sometimes needed for BTU)</li>
        <li><strong>Electrical:</strong> $150-$500 (for ignition/controls)</li>
        <li><strong>Permits:</strong> $50-$200</li>
        <li><strong>Average total:</strong> $2,500-$3,500</li>
      </ul>

      <h4>Electric Tankless Installation</h4>
      <p><strong>Total Cost: $800-$3,000</strong></p>
      <ul>
        <li><strong>Unit cost:</strong> $300-$1,200</li>
        <li><strong>Installation labor:</strong> $300-$800</li>
        <li><strong>Electrical upgrades:</strong> $200-$1,500 (often required - 240V circuits)</li>
        <li><strong>Permits:</strong> $50-$150</li>
        <li><strong>Average total:</strong> $1,500-$2,200</li>
        <li><strong>Note:</strong> May require panel upgrade ($1,000-$3,000) for whole-house units</li>
      </ul>

      <h4>Point-of-Use (Single Fixture)</h4>
      <p><strong>Cost: $150-$600 per unit</strong></p>
      <ul>
        <li><strong>Small electric unit:</strong> $150-$400</li>
        <li><strong>Installation:</strong> $100-$300 (DIY-friendly)</li>
        <li><strong>Best for:</strong> Sink, shower, or distant bathroom</li>
        <li><strong>Advantage:</strong> No waiting for hot water, minimal heat loss</li>
      </ul>

      <h3>Traditional Tank Water Heater Costs</h3>
      
      <h4>Gas Tank Installation</h4>
      <p><strong>Total Cost: $900-$2,500</strong></p>
      <ul>
        <li><strong>40-50 gallon unit:</strong> $400-$1,200</li>
        <li><strong>Installation labor:</strong> $300-$800</li>
        <li><strong>Venting:</strong> $100-$400</li>
        <li><strong>Permits:</strong> $50-$150</li>
        <li><strong>Average total:</strong> $1,200-$1,800</li>
      </ul>

      <h4>Electric Tank Installation</h4>
      <p><strong>Total Cost: $800-$2,200</strong></p>
      <ul>
        <li><strong>40-50 gallon unit:</strong> $400-$1,000</li>
        <li><strong>Installation labor:</strong> $250-$600</li>
        <li><strong>Electrical:</strong> $100-$400</li>
        <li><strong>Permits:</strong> $50-$150</li>
        <li><strong>Average total:</strong> $1,000-$1,500</li>
      </ul>

      <h3>Annual Operating Costs</h3>
      
      <h4>Gas Water Heater Annual Costs</h4>
      <ul>
        <li><strong>Tank (50 gal):</strong> $200-$350/year</li>
        <li><strong>Tankless:</strong> $150-$250/year</li>
        <li><strong>Annual savings:</strong> $50-$100 (25-30% reduction)</li>
        <li><strong>Efficiency:</strong> Tank 60-70% vs. Tankless 80-98%</li>
      </ul>

      <h4>Electric Water Heater Annual Costs</h4>
      <ul>
        <li><strong>Tank (50 gal):</strong> $400-$600/year</li>
        <li><strong>Tankless:</strong> $300-$450/year</li>
        <li><strong>Annual savings:</strong> $100-$150 (25-33% reduction)</li>
        <li><strong>Note:</strong> Varies significantly by electricity rates</li>
      </ul>

      <h4>Cost Factors</h4>
      <ul>
        <li><strong>Household size:</strong> More people = more savings</li>
        <li><strong>Usage patterns:</strong> Concentrated use = better for tankless</li>
        <li><strong>Water temperature setting:</strong> Higher temp = higher cost</li>
        <li><strong>Local energy rates:</strong> Electricity $0.10-$0.30/kWh, Gas $0.80-$1.50/therm</li>
      </ul>

      <h3>Lifespan and Replacement Costs</h3>
      
      <h4>Tankless Lifespan</h4>
      <ul>
        <li><strong>Average lifespan:</strong> 20-30 years</li>
        <li><strong>Warranty:</strong> 10-15 years typical</li>
        <li><strong>Repairs:</strong> Less frequent than tank</li>
        <li><strong>Replacement parts:</strong> More expensive but less frequent</li>
      </ul>

      <h4>Tank Heater Lifespan</h4>
      <ul>
        <li><strong>Average lifespan:</strong> 10-15 years</li>
        <li><strong>Warranty:</strong> 6-12 years typical</li>
        <li><strong>Failure mode:</strong> Tank rust/leak (catastrophic)</li>
        <li><strong>Replacements needed:</strong> 2-3x during tankless lifespan</li>
      </ul>

      <h4>30-Year Ownership Cost</h4>
      <p><strong>Gas Tank Water Heater (30 years)</strong></p>
      <ul>
        <li><strong>Initial installation:</strong> $1,500</li>
        <li><strong>Replacement (year 12):</strong> $1,800</li>
        <li><strong>Replacement (year 24):</strong> $2,000</li>
        <li><strong>Total equipment:</strong> $5,300</li>
        <li><strong>Operating costs (30 years):</strong> $7,500</li>
        <li><strong>Maintenance:</strong> $1,500</li>
        <li><strong>30-year total:</strong> $14,300</li>
      </ul>

      <p><strong>Gas Tankless Water Heater (30 years)</strong></p>
      <ul>
        <li><strong>Initial installation:</strong> $3,000</li>
        <li><strong>Replacement (year 25):</strong> $2,500</li>
        <li><strong>Total equipment:</strong> $5,500</li>
        <li><strong>Operating costs (30 years):</strong> $6,000</li>
        <li><strong>Maintenance:</strong> $1,800</li>
        <li><strong>30-year total:</strong> $13,300</li>
        <li><strong>Net savings:</strong> $1,000 over 30 years</li>
      </ul>

      <h3>Tankless Advantages</h3>
      
      <h4>Unlimited Hot Water</h4>
      <ul>
        <li><strong>No tank to deplete:</strong> Continuous hot water supply</li>
        <li><strong>Flow rate:</strong> 2-8 gallons per minute depending on model</li>
        <li><strong>Ideal for:</strong> Large families, back-to-back showers</li>
        <li><strong>Limitation:</strong> Flow rate limits simultaneous use</li>
      </ul>

      <h4>Space Savings</h4>
      <ul>
        <li><strong>Tank size:</strong> 40-50 gallon tank is 24"x60" (12-16 sq ft floor space)</li>
        <li><strong>Tankless size:</strong> 20"x28" wall-mounted (no floor space)</li>
        <li><strong>Space saved:</strong> 12-16 square feet</li>
        <li><strong>Location flexibility:</strong> Mount in closet, attic, outdoors</li>
      </ul>

      <h4>Longevity</h4>
      <ul>
        <li><strong>Lifespan:</strong> 20-30 years vs. 10-15 for tank</li>
        <li><strong>Fewer replacements:</strong> 1-2 vs. 2-3 over 30 years</li>
        <li><strong>Resale value:</strong> Attractive to buyers</li>
      </ul>

      <h4>Energy Efficiency</h4>
      <ul>
        <li><strong>No standby loss:</strong> Tank loses heat 24/7 even when not in use</li>
        <li><strong>Efficiency rating:</strong> 80-99% vs. 60-70% for tank</li>
        <li><strong>ENERGY STAR:</strong> Many models qualify</li>
        <li><strong>Savings:</strong> 8-34% depending on usage</li>
      </ul>

      <h3>Tankless Disadvantages</h3>
      
      <h4>Higher Upfront Cost</h4>
      <ul>
        <li><strong>Equipment premium:</strong> $100-$800 more</li>
        <li><strong>Installation premium:</strong> $300-$1,200 more</li>
        <li><strong>Total premium:</strong> $400-$2,000</li>
        <li><strong>Infrastructure upgrades:</strong> Gas line, venting, electrical</li>
      </ul>

      <h4>Flow Rate Limitations</h4>
      <ul>
        <li><strong>Shower flow:</strong> 2.5 GPM</li>
        <li><strong>Sink flow:</strong> 1.0-1.5 GPM</li>
        <li><strong>Dishwasher:</strong> 1.0-1.5 GPM</li>
        <li><strong>Washing machine:</strong> 2.0-2.5 GPM</li>
        <li><strong>Issue:</strong> 2-3 GPM unit can't run shower + dishwasher simultaneously</li>
        <li><strong>Solution:</strong> Larger unit (5-8 GPM) or multiple units</li>
      </ul>

      <h4>Cold Water Sandwich Effect</h4>
      <ul>
        <li><strong>Issue:</strong> Brief cold water between hot water uses</li>
        <li><strong>Cause:</strong> Hot water in pipes cools, then heater fires up</li>
        <li><strong>Impact:</strong> Minor annoyance, not a deal-breaker</li>
        <li><strong>Solution:</strong> Recirculation system ($200-$600)</li>
      </ul>

      <h4>Maintenance Requirements</h4>
      <ul>
        <li><strong>Annual descaling:</strong> Required in hard water areas ($150-$300/year)</li>
        <li><strong>Filter cleaning:</strong> Every 3-6 months (DIY)</li>
        <li><strong>Higher complexity:</strong> More components to service</li>
      </ul>

      <h3>ROI Scenarios</h3>
      
      <h4>Best ROI Scenario (Electric Tankless)</h4>
      <p><strong>High-use household, expensive electricity</strong></p>
      <ul>
        <li><strong>Premium cost:</strong> $800</li>
        <li><strong>Annual savings:</strong> $150</li>
        <li><strong>Extended lifespan value:</strong> $600 (15 extra years = delayed replacement)</li>
        <li><strong>Simple payback:</strong> 5.3 years</li>
        <li><strong>20-year net benefit:</strong> $2,400</li>
      </ul>

      <h4>Average ROI Scenario (Gas Tankless)</h4>
      <p><strong>Typical family of 4</strong></p>
      <ul>
        <li><strong>Premium cost:</strong> $1,500</li>
        <li><strong>Annual savings:</strong> $75</li>
        <li><strong>Extended lifespan value:</strong> $1,000</li>
        <li><strong>Simple payback:</strong> 20 years</li>
        <li><strong>25-year net benefit:</strong> $875</li>
      </ul>

      <h4>Worst ROI Scenario (Gas Tankless, Low Use)</h4>
      <p><strong>Small household, low hot water use</strong></p>
      <ul>
        <li><strong>Premium cost:</strong> $1,800</li>
        <li><strong>Annual savings:</strong> $40</li>
        <li><strong>Extended lifespan value:</strong> $800</li>
        <li><strong>Simple payback:</strong> 45 years</li>
        <li><strong>20-year net benefit:</strong> -$200 (slight loss)</li>
      </ul>

      <h3>Sizing Guide</h3>
      
      <h4>Gas Tankless Sizing</h4>
      <p><strong>Calculate flow rate (GPM) needed</strong></p>
      <ul>
        <li><strong>Small household (1-2 people):</strong> 2-4 GPM, 140,000-180,000 BTU</li>
        <li><strong>Medium household (3-4 people):</strong> 4-6 GPM, 180,000-200,000 BTU</li>
        <li><strong>Large household (5+ people):</strong> 6-8 GPM, 199,000-380,000 BTU</li>
        <li><strong>Very large household:</strong> 8-10 GPM or multiple units</li>
      </ul>

      <h4>Electric Tankless Sizing</h4>
      <p><strong>Whole-House Units</strong></p>
      <ul>
        <li><strong>Warm climate (Florida):</strong> 15-20 kW (2-3 GPM)</li>
        <li><strong>Moderate climate:</strong> 20-27 kW (3-4 GPM)</li>
        <li><strong>Cold climate (Minnesota):</strong> 27-36 kW (3-5 GPM)</li>
        <li><strong>Challenge:</strong> High amperage (100-150 amps) requires electrical upgrades</li>
      </ul>

      <h4>Temperature Rise Calculation</h4>
      <ul>
        <li><strong>Groundwater temp (cold climates):</strong> 37-45°F</li>
        <li><strong>Groundwater temp (warm climates):</strong> 60-75°F</li>
        <li><strong>Desired hot water temp:</strong> 120°F</li>
        <li><strong>Temperature rise needed:</strong> 45-83°F</li>
        <li><strong>Higher rise = lower GPM capability</strong></li>
      </ul>

      <h3>Best Candidates for Tankless</h3>
      
      <h4>Ideal Situations</h4>
      <ol>
        <li>Large families needing back-to-back showers (unlimited hot water)</li>
        <li>Replacing failed tank heater (sunk cost already incurred)</li>
        <li>New construction (avoid infrastructure upgrade costs)</li>
        <li>Small homes needing space (12-16 sq ft savings)</li>
        <li>High hot water usage (>60 gallons per day)</li>
        <li>Long-term homeowners (15+ years to recoup premium)</li>
        <li>Natural gas available (better than electric tankless)</li>
        <li>Environmental priority (higher efficiency)</li>
        <li>Remote fixtures (point-of-use units eliminate heat loss)</li>
      </ol>

      <h4>Less Suitable Situations</h4>
      <ul>
        <li>Recently installed tank heater in good condition</li>
        <li>Very low hot water use (small household, away often)</li>
        <li>Budget-constrained ($400-$2,000 premium is significant)</li>
        <li>Electric-only with insufficient electrical panel</li>
        <li>Hard water without willingness to descale annually</li>
        <li>Simultaneous high-demand uses without multiple units</li>
      </ul>

      <h3>Hybrid/Compromise Options</h3>
      
      <h4>Heat Pump Water Heater</h4>
      <p><strong>Cost: $1,200-$2,500 | Best of both worlds</strong></p>
      <ul>
        <li><strong>Technology:</strong> Tank with heat pump (like AC in reverse)</li>
        <li><strong>Efficiency:</strong> 200-300% (2-3x input energy)</li>
        <li><strong>Energy savings:</strong> 50-65% vs. standard electric tank</li>
        <li><strong>Pros:</strong> High efficiency, familiar tank technology, no flow limits</li>
        <li><strong>Cons:</strong> Needs space (releases cool air), higher cost, slower recovery</li>
        <li><strong>Best for:</strong> Electric-only homes wanting max efficiency with tank convenience</li>
      </ul>

      <h4>Point-of-Use + Tank Combo</h4>
      <ul>
        <li><strong>Strategy:</strong> Tank for main use, point-of-use for remote fixtures</li>
        <li><strong>Cost:</strong> $1,200-$2,200 (tank + 1-2 small units)</li>
        <li><strong>Benefits:</strong> Instant hot water everywhere, no heat loss in long runs</li>
        <li><strong>Best for:</strong> Homes with distant bathrooms or additions</li>
      </ul>

      <h3>Incentives and Rebates</h3>
      
      <h4>Federal Tax Credit</h4>
      <ul>
        <li><strong>ENERGY STAR tankless:</strong> Up to $300 (part of $1,200 annual limit)</li>
        <li><strong>Energy Efficient Home Improvement Credit:</strong> 30% up to $600</li>
        <li><strong>Requirements:</strong> Must meet ENERGY STAR criteria (UEF ≥0.95)</li>
      </ul>

      <h4>Utility Rebates</h4>
      <ul>
        <li><strong>Gas utilities:</strong> $50-$500 for high-efficiency gas tankless</li>
        <li><strong>Electric utilities:</strong> $100-$800 for heat pump water heaters</li>
        <li><strong>Check:</strong> Local utility websites for current programs</li>
      </ul>

      <h3>Installation Considerations</h3>
      
      <h4>Gas Line Requirements</h4>
      <ul>
        <li><strong>BTU requirement:</strong> 140,000-380,000 BTU for tankless</li>
        <li><strong>Existing tank heater:</strong> 30,000-50,000 BTU</li>
        <li><strong>Potential upgrade:</strong> 3/4" or 1" gas line ($500-$1,500)</li>
        <li><strong>Check capacity:</strong> Gas meter must handle total house demand</li>
      </ul>

      <h4>Venting Requirements</h4>
      <ul>
        <li><strong>Condensing tankless:</strong> PVC venting (cheaper, $200-$400)</li>
        <li><strong>Non-condensing:</strong> Stainless steel (expensive, $400-$800)</li>
        <li><strong>Outdoor units:</strong> No venting needed (freeze protection required)</li>
      </ul>

      <h4>Electrical Requirements</h4>
      <ul>
        <li><strong>Gas tankless:</strong> 120V circuit for controls</li>
        <li><strong>Electric tankless:</strong> 240V, 40-200 amp dedicated circuit</li>
        <li><strong>Panel upgrade:</strong> May need 200A panel ($1,000-$3,000)</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>Tankless water heaters cost $400-$2,000 more than tank heaters ($1,200-$4,500 vs. $800-$2,500) but save 8-34% on water heating costs ($30-$150 annually) and last twice as long (20-30 years vs. 10-15 years). The financial payback period is 10-20 years through energy savings alone, but factoring in extended lifespan and avoided replacements, 30-year ownership costs are similar or slightly favor tankless ($13,300 vs. $14,300 for gas systems). Tankless heaters make most sense for large households needing unlimited hot water, homes with space constraints (saves 12-16 sq ft), when replacing failed tank heaters, or for environmentally conscious homeowners prioritizing efficiency over rapid ROI. Tank heaters remain better for budget-conscious installations, low hot water usage, or homes without infrastructure for tankless. Consider hybrid options like heat pump water heaters for electric-only homes seeking maximum efficiency, or point-of-use units for specific fixtures needing instant hot water. The decision ultimately depends on household size, hot water usage patterns, budget, available space, and length of ownership planned.</p>
    `,
  },
};
