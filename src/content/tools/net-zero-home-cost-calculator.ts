import { CalculatorContent } from '@/types';

export const NetZeroHomeCostCalculatorContent: CalculatorContent = {
  title: 'Net Zero Home Cost Calculator',
  description: 'Estimate total costs to build or retrofit a net zero energy home including solar, insulation, and energy-efficient systems',
  icon: '⚡',
  category: 'Home Improvement',
  slug: 'net-zero-home-cost-calculator',
  
  metaTitle: 'Net Zero Home Cost Calculator - Zero Energy Building Analysis | Property Tools',
  metaDescription: 'Calculate costs to build or retrofit a net zero energy home. Estimate solar, insulation, HVAC, and efficiency upgrades for carbon-neutral living.',
  
  article: {
    title: 'Net Zero Home Cost Calculator: Complete Analysis',
    content: `
      <h2>Net Zero Home Cost Calculator</h2>
      <p>A net zero energy home produces as much energy as it consumes annually through superior insulation, high-efficiency systems, and renewable energy generation, resulting in near-zero utility bills ($0-$300 annually for connection fees only). Building new costs add 5-15% ($15,000-$60,000 for $300k home) over conventional construction, while retrofitting existing homes costs $30,000-$100,000+ depending on current efficiency and size. Federal and state incentives can cover 30-50% of costs ($15,000-$50,000), providing 10-25 year payback through eliminated energy bills of $1,500-$4,000 annually, with 30-year savings of $45,000-$120,000 and significantly increased property value.</p>

      <h3>Net Zero Home Components and Costs</h3>
      
      <h4>1. Superior Building Envelope</h4>
      <p><strong>Cost: $10,000-$30,000 premium over standard</strong></p>
      <ul>
        <li><strong>High-performance windows:</strong> $5,000-$15,000 (triple-pane, Low-E, gas-filled)</li>
        <li><strong>Superior insulation:</strong> $3,000-$10,000 (R-40+ walls, R-60+ attic)</li>
        <li><strong>Air sealing:</strong> $1,000-$3,000 (blower door testing, sealing)</li>
        <li><strong>Advanced framing:</strong> $1,000-$2,000 (less thermal bridging)</li>
        <li><strong>Continuous insulation:</strong> $2,000-$5,000 (exterior foam boards)</li>
      </ul>

      <h4>2. High-Efficiency HVAC</h4>
      <p><strong>Cost: $8,000-$25,000</strong></p>
      <ul>
        <li><strong>Heat pump (air-source):</strong> $8,000-$15,000</li>
        <li><strong>Geothermal heat pump:</strong> $20,000-$35,000</li>
        <li><strong>Energy Recovery Ventilator (ERV):</strong> $1,500-$3,500</li>
        <li><strong>Mini-split zones:</strong> $2,000-$10,000 (optional)</li>
        <li><strong>Radiant floor heating:</strong> $6,000-$14,000 (optional luxury)</li>
      </ul>

      <h4>3. Solar PV System</h4>
      <p><strong>Cost: $15,000-$35,000 (before incentives)</strong></p>
      <ul>
        <li><strong>System size:</strong> 6-12 kW typical for net zero</li>
        <li><strong>Cost per watt:</strong> $2.50-$3.50/watt installed</li>
        <li><strong>Average cost:</strong> $20,000-$30,000</li>
        <li><strong>Federal tax credit (30%):</strong> -$6,000-$9,000</li>
        <li><strong>Net cost:</strong> $14,000-$21,000</li>
      </ul>

      <h4>4. High-Efficiency Appliances & Systems</h4>
      <p><strong>Cost: $5,000-$12,000</strong></p>
      <ul>
        <li><strong>Heat pump water heater:</strong> $1,500-$2,500</li>
        <li><strong>ENERGY STAR appliances:</strong> $2,500-$5,000</li>
        <li><strong>LED lighting throughout:</strong> $300-$800</li>
        <li><strong>Induction cooking:</strong> $800-$2,000</li>
        <li><strong>Smart home system:</strong> $500-$1,500</li>
      </ul>

      <h4>5. Additional Features</h4>
      <ul>
        <li><strong>Battery storage:</strong> $8,000-$15,000 (optional, for energy independence)</li>
        <li><strong>Smart thermostats:</strong> $200-$500</li>
        <li><strong>Energy monitoring:</strong> $200-$800</li>
        <li><strong>Low-flow fixtures:</strong> $500-$1,500</li>
      </ul>

      <h3>New Construction vs. Retrofit Costs</h3>
      
      <h4>New Net Zero Construction</h4>
      <p><strong>Premium: 5-15% over conventional construction</strong></p>
      <ul>
        <li><strong>Conventional new home (2,000 sq ft):</strong> $300,000-$400,000</li>
        <li><strong>Net zero premium:</strong> $15,000-$60,000</li>
        <li><strong>Total net zero new build:</strong> $315,000-$460,000</li>
        <li><strong>Cost per sq ft premium:</strong> $7.50-$30/sq ft</li>
      </ul>

      <p><strong>Net Zero New Build Breakdown (2,000 sq ft)</strong></p>
      <ul>
        <li><strong>Standard construction:</strong> $350,000</li>
        <li><strong>Building envelope upgrades:</strong> +$15,000</li>
        <li><strong>HVAC premium (heat pump vs. AC+gas):</strong> +$5,000</li>
        <li><strong>Solar PV system (8 kW):</strong> +$16,000 (net after tax credit)</li>
        <li><strong>Efficient appliances premium:</strong> +$3,000</li>
        <li><strong>Total cost:</strong> $389,000 (11% premium)</li>
      </ul>

      <h4>Retrofitting Existing Home to Net Zero</h4>
      <p><strong>Total Cost: $30,000-$100,000+</strong></p>
      <ul>
        <li><strong>Depends on:</strong> Current efficiency, home age, size</li>
        <li><strong>Well-insulated newer home:</strong> $30,000-$50,000</li>
        <li><strong>Average existing home:</strong> $50,000-$75,000</li>
        <li><strong>Older poorly-insulated home:</strong> $75,000-$100,000+</li>
      </ul>

      <p><strong>Typical Retrofit Components</strong></p>
      <ul>
        <li><strong>Insulation upgrades:</strong> $5,000-$15,000</li>
        <li><strong>Window replacement:</strong> $8,000-$20,000</li>
        <li><strong>Air sealing:</strong> $1,500-$4,000</li>
        <li><strong>HVAC replacement:</strong> $10,000-$20,000</li>
        <li><strong>Solar installation:</strong> $15,000-$25,000 (net after incentives)</li>
        <li><strong>Water heater upgrade:</strong> $1,500-$3,000</li>
        <li><strong>Appliance upgrades:</strong> $2,000-$5,000</li>
        <li><strong>Total:</strong> $43,000-$92,000</li>
      </ul>

      <h3>Federal and State Incentives</h3>
      
      <h4>Federal Tax Credits (2024-2032)</h4>
      <ul>
        <li><strong>Solar PV:</strong> 30% of cost (unlimited)</li>
        <li><strong>Heat pump:</strong> 30% up to $2,000</li>
        <li><strong>Heat pump water heater:</strong> 30% up to $2,000</li>
        <li><strong>Windows/doors:</strong> 30% up to $600</li>
        <li><strong>Insulation:</strong> 30% up to $1,200</li>
        <li><strong>Energy audit:</strong> 30% up to $150</li>
        <li><strong>Maximum annual credit:</strong> $3,200 + unlimited solar</li>
      </ul>

      <h4>High-Efficiency Electric Home Rebate Act</h4>
      <p><strong>Income-Qualified Rebates (coming 2024-2025)</strong></p>
      <ul>
        <li><strong>Heat pump:</strong> Up to $8,000</li>
        <li><strong>Heat pump water heater:</strong> Up to $1,750</li>
        <li><strong>Electric panel upgrade:</strong> Up to $4,000</li>
        <li><strong>Insulation/air sealing:</strong> Up to $1,600</li>
        <li><strong>Electrical wiring:</strong> Up to $2,500</li>
        <li><strong>Maximum per household:</strong> $14,000</li>
      </ul>

      <h4>State and Utility Incentives</h4>
      <ul>
        <li><strong>State solar incentives:</strong> Vary by state, $0-$10,000+</li>
        <li><strong>Net metering:</strong> Credit for excess solar production</li>
        <li><strong>SRECs:</strong> Solar Renewable Energy Credits ($50-$300/year in some states)</li>
        <li><strong>Utility rebates:</strong> $2,000-$10,000 for comprehensive efficiency</li>
        <li><strong>Property tax exemptions:</strong> Solar value exempt in many states</li>
      </ul>

      <h4>Example: Total Incentives for Retrofit</h4>
      <p><strong>Project cost: $70,000</strong></p>
      <ul>
        <li><strong>Solar (8 kW, $24,000):</strong> -$7,200 (federal)</li>
        <li><strong>Heat pump ($10,000):</strong> -$2,000 (federal) -$1,500 (utility)</li>
        <li><strong>Heat pump water heater ($2,000):</strong> -$600 (federal) -$500 (utility)</li>
        <li><strong>Insulation/windows ($20,000):</strong> -$1,800 (federal)</li>
        <li><strong>State rebates:</strong> -$3,000</li>
        <li><strong>Total incentives:</strong> -$16,600 (24% reduction)</li>
        <li><strong>Net cost:</strong> $53,400</li>
      </ul>

      <h3>Annual Energy Savings and ROI</h3>
      
      <h4>Conventional Home Annual Energy Costs</h4>
      <ul>
        <li><strong>Electricity:</strong> $1,200-$2,400/year</li>
        <li><strong>Natural gas:</strong> $600-$1,200/year</li>
        <li><strong>Total annual energy:</strong> $1,800-$3,600/year</li>
        <li><strong>30-year cost:</strong> $54,000-$108,000 (with 3% annual increase)</li>
      </ul>

      <h4>Net Zero Home Annual Costs</h4>
      <ul>
        <li><strong>Grid connection fee:</strong> $120-$300/year</li>
        <li><strong>Energy produced:</strong> Matches energy consumed</li>
        <li><strong>Net annual cost:</strong> $120-$300</li>
        <li><strong>Annual savings:</strong> $1,680-$3,300</li>
        <li><strong>30-year savings:</strong> $50,400-$99,000</li>
      </ul>

      <h4>ROI Scenarios</h4>
      
      <p><strong>New Construction (2,000 sq ft)</strong></p>
      <ul>
        <li><strong>Net zero premium:</strong> $39,000 (after incentives)</li>
        <li><strong>Annual savings:</strong> $2,400</li>
        <li><strong>Simple payback:</strong> 16 years</li>
        <li><strong>30-year savings:</strong> $72,000</li>
        <li><strong>30-year ROI:</strong> 185%</li>
        <li><strong>Property value increase:</strong> $20,000-$40,000 (immediate)</li>
      </ul>

      <p><strong>Retrofit (Older Home)</strong></p>
      <ul>
        <li><strong>Total investment:</strong> $70,000</li>
        <li><strong>After incentives:</strong> $53,400</li>
        <li><strong>Annual savings:</strong> $3,000</li>
        <li><strong>Simple payback:</strong> 18 years</li>
        <li><strong>20-year savings:</strong> $60,000</li>
        <li><strong>Property value increase:</strong> $30,000-$50,000</li>
      </ul>

      <h3>Net Zero Performance Metrics</h3>
      
      <h4>Energy Use Intensity (EUI)</h4>
      <ul>
        <li><strong>Conventional home:</strong> 80-120 kBTU/sq ft/year</li>
        <li><strong>Energy efficient home:</strong> 40-60 kBTU/sq ft/year</li>
        <li><strong>Net zero home:</strong> 15-30 kBTU/sq ft/year (offset by solar)</li>
        <li><strong>Passive house:</strong> 10-15 kBTU/sq ft/year</li>
      </ul>

      <h4>HERS Index Score</h4>
      <ul>
        <li><strong>Standard new home:</strong> 100 (baseline)</li>
        <li><strong>Energy efficient home:</strong> 50-70</li>
        <li><strong>Net zero home:</strong> 0-10</li>
        <li><strong>Net positive (produces excess):</strong> Negative score</li>
      </ul>

      <h3>Net Zero Certification Programs</h3>
      
      <h4>Certification Options</h4>
      <ul>
        <li><strong>DOE Zero Energy Ready Home:</strong> $500-$2,000 certification</li>
        <li><strong>LEED for Homes:</strong> $1,000-$5,000 (platinum level)</li>
        <li><strong>Passive House (PHIUS):</strong> $2,000-$6,000 certification</li>
        <li><strong>Living Building Challenge:</strong> $5,000-$15,000 (most rigorous)</li>
      </ul>

      <h4>Benefits of Certification</h4>
      <ul>
        <li><strong>Marketing advantage:</strong> Verified performance for resale</li>
        <li><strong>Green mortgages:</strong> Better rates (0.25-0.5% lower)</li>
        <li><strong>Property value:</strong> 5-10% premium for certified homes</li>
        <li><strong>Assurance:</strong> Third-party verification of performance</li>
      </ul>

      <h3>Property Value Impact</h3>
      
      <h4>Appraisal Value Increase</h4>
      <ul>
        <li><strong>Typical increase:</strong> 5-10% over comparable homes</li>
        <li><strong>$300,000 home:</strong> +$15,000-$30,000 value</li>
        <li><strong>$500,000 home:</strong> +$25,000-$50,000 value</li>
        <li><strong>PV value add:</strong> $0.80-$1.20 per watt installed</li>
        <li><strong>Example:</strong> 8 kW system adds $6,400-$9,600 to value</li>
      </ul>

      <h4>Marketability Benefits</h4>
      <ul>
        <li><strong>Faster sales:</strong> 20-30% quicker than conventional</li>
        <li><strong>Premium buyers:</strong> Attracts environmentally conscious segment</li>
        <li><strong>Lower days on market:</strong> Average 10-15 fewer days</li>
        <li><strong>Multiple offers:</strong> More likely to receive competing bids</li>
      </ul>

      <h3>Step-by-Step Net Zero Retrofit</h3>
      
      <h4>Phase 1: Assessment ($500-$1,500)</h4>
      <ul>
        <li><strong>Energy audit:</strong> $400-$800</li>
        <li><strong>Blower door test:</strong> $300-$500</li>
        <li><strong>Solar site assessment:</strong> $0-$500 (often free)</li>
        <li><strong>HVAC load calculation:</strong> $200-$400</li>
      </ul>

      <h4>Phase 2: Envelope ($10,000-$35,000)</h4>
      <ol>
        <li><strong>Air sealing:</strong> Close leaks, seal penetrations ($1,500-$4,000)</li>
        <li><strong>Attic insulation:</strong> Upgrade to R-60 ($2,000-$6,000)</li>
        <li><strong>Wall insulation:</strong> Dense-pack or exterior ($3,000-$12,000)</li>
        <li><strong>Windows:</strong> Replace with triple-pane ($8,000-$20,000)</li>
        <li><strong>Basement/crawlspace:</strong> Insulation and sealing ($2,000-$6,000)</li>
      </ol>

      <h4>Phase 3: Systems ($12,000-$30,000)</h4>
      <ol>
        <li><strong>HVAC:</strong> Install heat pump system ($8,000-$20,000)</li>
        <li><strong>Water heater:</strong> Heat pump water heater ($1,500-$3,000)</li>
        <li><strong>Ventilation:</strong> ERV or HRV ($1,500-$3,500)</li>
        <li><strong>Appliances:</strong> Upgrade to ENERGY STAR ($2,000-$5,000)</li>
      </ol>

      <h4>Phase 4: Solar ($15,000-$25,000 net)</h4>
      <ol>
        <li>Size system to match annual consumption</li>
        <li>Install panels (6-12 kW typical)</li>
        <li>Add energy monitoring</li>
        <li>Apply for incentives and net metering</li>
      </ol>

      <h4>Phase 5: Optimization ($1,000-$3,000)</h4>
      <ul>
        <li><strong>Smart thermostats:</strong> Optimize HVAC usage</li>
        <li><strong>Behavior changes:</strong> Adjust usage patterns</li>
        <li><strong>Energy monitoring:</strong> Track and optimize</li>
        <li><strong>Fine-tuning:</strong> Adjust systems for peak performance</li>
      </ul>

      <h3>Best Candidates for Net Zero</h3>
      
      <h4>Ideal Situations</h4>
      <ol>
        <li>Building new custom home (integrate from design phase)</li>
        <li>Major renovation already planned (sunk costs in construction)</li>
        <li>High energy bills ($300+ monthly)</li>
        <li>Long-term homeowners (15+ year horizon)</li>
        <li>Climate with good solar potential (most of U.S.)</li>
        <li>Access to generous incentives ($15,000+)</li>
        <li>Environmental priority (beyond pure ROI)</li>
        <li>Selling in premium market (buyers value sustainability)</li>
      </ol>

      <h4>Less Suitable Situations</h4>
      <ul>
        <li>Plan to move within 10 years</li>
        <li>Budget constrained (<$30,000 available)</li>
        <li>Heavily shaded property (poor solar potential)</li>
        <li>Recently renovated/upgraded systems</li>
        <li>Rental property (tenants benefit, not owner)</li>
        <li>Historic home with preservation restrictions</li>
      </ul>

      <h3>Alternatives to Full Net Zero</h3>
      
      <h4>Near-Net-Zero (50-75% reduction)</h4>
      <p><strong>Cost: $20,000-$40,000 | Faster payback</strong></p>
      <ul>
        <li><strong>Focus on:</strong> Insulation, heat pump, solar (smaller system)</li>
        <li><strong>Energy reduction:</strong> 50-75%</li>
        <li><strong>Annual bills:</strong> $400-$900 (vs. $0-$300 for net zero)</li>
        <li><strong>Payback:</strong> 8-12 years (faster than full net zero)</li>
        <li><strong>Still significant:</strong> Major environmental and financial benefits</li>
      </ul>

      <h4>Passive House</h4>
      <p><strong>Ultra-low energy use, may not need solar</strong></p>
      <ul>
        <li><strong>Focus:</strong> Superior envelope, minimal mechanical systems</li>
        <li><strong>Energy use:</strong> 70-90% less than conventional</li>
        <li><strong>Premium:</strong> 10-25% over conventional construction</li>
        <li><strong>Annual energy:</strong> $300-$800 (very low, solar optional for net zero)</li>
      </ul>

      <h3>Common Challenges and Solutions</h3>
      
      <h4>Challenge: High Upfront Cost</h4>
      <ul>
        <li><strong>Solution:</strong> Phase the project over 3-5 years</li>
        <li><strong>Start with:</strong> Envelope (insulation, windows, air sealing)</li>
        <li><strong>Next:</strong> HVAC when existing system fails</li>
        <li><strong>Finally:</strong> Solar when ready</li>
      </ul>

      <h4>Challenge: Solar Shading</h4>
      <ul>
        <li><strong>Solution:</strong> Trim trees strategically</li>
        <li><strong>Alternative:</strong> Ground-mount system in sunny yard area</li>
        <li><strong>Community solar:</strong> Subscribe to offsite solar farm</li>
      </ul>

      <h4>Challenge: HOA Restrictions</h4>
      <ul>
        <li><strong>Solar:</strong> Many states have "solar access laws" overriding HOAs</li>
        <li><strong>Negotiate:</strong> Low-profile, color-matched panels</li>
        <li><strong>Interior focus:</strong> Insulation, HVAC, appliances (not visible)</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>Net zero energy homes eliminate energy bills (saving $1,800-$3,600 annually) through superior insulation, high-efficiency systems, and solar generation, with new construction adding 5-15% ($15,000-$60,000) and retrofits costing $30,000-$100,000 before incentives. Federal and state incentives (30% solar credit, up to $3,200 annual efficiency credits, plus utility rebates) reduce net costs by 30-50%, providing 15-25 year payback through eliminated energy costs and immediate property value increases of 5-10% ($15,000-$50,000 for typical homes). Net zero makes most financial sense for new construction (design-stage integration), high-energy-use homes ($300+ monthly bills), long-term owners (15+ years), and those with access to generous incentive programs ($15,000+). While upfront investment is substantial, 30-year savings of $50,000-$120,000, coupled with property value increases and energy independence, make net zero increasingly attractive as energy costs rise and technology costs fall. For those unable to justify full net zero investment, near-net-zero approaches (50-75% reduction for $20,000-$40,000) offer faster payback while still providing major environmental and financial benefits.</p>
    `,
  },
};
