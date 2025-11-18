import { CalculatorContent } from '@/types';

export const HERSIndexScoreCalculatorContent: CalculatorContent = {
  title: 'HERS Index Score Calculator',
  description: 'Calculate your home energy rating (HERS) score and estimate energy efficiency improvements needed for better ratings',
  icon: '📊',
  category: 'Home Improvement',
  slug: 'hers-index-score-calculator',
  
  metaTitle: 'HERS Index Score Calculator - Home Energy Rating System | Property Tools',
  metaDescription: 'Calculate your HERS Index score and energy efficiency. Estimate improvements needed, costs, and energy savings for better home energy ratings.',
  
  article: {
    title: 'HERS Index Score Calculator: Complete Energy Rating Guide',
    content: `
      <h2>HERS Index Score Calculator</h2>
      <p>The HERS (Home Energy Rating System) Index scores homes on energy efficiency from 0-150+, with 100 representing a standard new home, lower scores indicating better efficiency, and 0 representing net zero energy homes. The average existing home scores 130-140, while ENERGY STAR certified homes score 85 or lower. Each 1-point HERS reduction saves 1% on energy bills ($20-$40 annually), making a 30-point improvement ($30,000-$60,000 investment) worth $600-$1,200 annually in energy savings with 10-year ROI of 100-200% when including property value increases of 5-15%.</p>

      <h3>Understanding HERS Index Scores</h3>
      
      <h4>HERS Score Scale</h4>
      <ul>
        <li><strong>0 - Net Zero Energy:</strong> Home produces as much energy as it uses</li>
        <li><strong>1-30 - Ultra-Efficient:</strong> Passive house, near net zero performance</li>
        <li><strong>31-50 - Exceptionally Efficient:</strong> High-performance green homes</li>
        <li><strong>51-70 - Very Efficient:</strong> LEED Gold/Platinum, advanced green building</li>
        <li><strong>71-85 - Efficient:</strong> ENERGY STAR certified (required for new homes)</li>
        <li><strong>86-100 - Standard New Home:</strong> Code minimum (baseline)</li>
        <li><strong>101-130 - Below Code:</strong> Homes built 2000-2020</li>
        <li><strong>131-150 - Inefficient:</strong> Average existing homes (1980s-1990s)</li>
        <li><strong>151-200+ - Very Inefficient:</strong> Older homes (pre-1980s)</li>
      </ul>

      <h4>Energy Savings Per HERS Point</h4>
      <ul>
        <li><strong>Each 1 point reduction:</strong> ~1% energy savings</li>
        <li><strong>Typical annual energy bill:</strong> $2,000-$4,000</li>
        <li><strong>1 point improvement:</strong> $20-$40/year savings</li>
        <li><strong>10 point improvement (140→130):</strong> $200-$400/year</li>
        <li><strong>30 point improvement (140→110):</strong> $600-$1,200/year</li>
        <li><strong>50 point improvement (140→90):</strong> $1,000-$2,000/year</li>
      </ul>

      <h3>Official HERS Rating Cost</h3>
      
      <h4>HERS Rating Inspection</h4>
      <p><strong>Cost: $400-$1,000</strong></p>
      <ul>
        <li><strong>New construction:</strong> $400-$600</li>
        <li><strong>Existing home:</strong> $500-$800</li>
        <li><strong>Large home (>4,000 sq ft):</strong> $700-$1,000</li>
        <li><strong>Includes:</strong> Blower door test, duct leakage test, insulation inspection, HVAC analysis</li>
        <li><strong>Deliverable:</strong> Official HERS Index Certificate</li>
      </ul>

      <h4>What's Included in HERS Rating</h4>
      <ul>
        <li><strong>Blower door test:</strong> Measures air leakage</li>
        <li><strong>Duct blaster test:</strong> Detects duct leakage</li>
        <li><strong>Insulation inspection:</strong> Verifies R-values</li>
        <li><strong>HVAC assessment:</strong> Equipment efficiency ratings</li>
        <li><strong>Windows/doors evaluation:</strong> U-factors, air leakage</li>
        <li><strong>Hot water system:</strong> Efficiency rating</li>
        <li><strong>Computer modeling:</strong> Energy use simulation</li>
        <li><strong>Improvement recommendations:</strong> Cost-effective upgrades</li>
      </ul>

      <h4>When HERS Rating Required</h4>
      <ul>
        <li><strong>New construction:</strong> Many jurisdictions require HERS 85 or lower</li>
        <li><strong>ENERGY STAR certification:</strong> HERS 85 or lower required</li>
        <li><strong>Green certifications:</strong> LEED, NGBS require HERS rating</li>
        <li><strong>Energy-efficient mortgages:</strong> HERS rating often required</li>
        <li><strong>Resale marketing:</strong> Voluntary to demonstrate efficiency</li>
      </ul>

      <h3>Improving Your HERS Score</h3>
      
      <h4>Cost to Improve HERS by 10 Points</h4>
      <p><strong>Investment: $3,000-$15,000</strong></p>
      <ul>
        <li><strong>Basic improvements:</strong> $3,000-$7,000</li>
        <li><strong>Air sealing + insulation:</strong> $2,000-$5,000</li>
        <li><strong>Duct sealing:</strong> $500-$1,500</li>
        <li><strong>Programmable thermostat:</strong> $200-$500</li>
        <li><strong>LED lighting upgrade:</strong> $300-$800</li>
        <li><strong>Typical 10-point improvement:</strong> $5,000-$8,000</li>
      </ul>

      <h4>Cost to Improve HERS by 20 Points</h4>
      <p><strong>Investment: $10,000-$25,000</strong></p>
      <ul>
        <li><strong>All basic improvements above</strong></li>
        <li><strong>Window upgrades:</strong> $5,000-$12,000 (key windows)</li>
        <li><strong>Water heater upgrade:</strong> $1,500-$3,000</li>
        <li><strong>HVAC tune-up/upgrades:</strong> $500-$3,000</li>
        <li><strong>Typical 20-point improvement:</strong> $15,000-$20,000</li>
      </ul>

      <h4>Cost to Improve HERS by 30-40 Points</h4>
      <p><strong>Investment: $30,000-$60,000</strong></p>
      <ul>
        <li><strong>All above improvements</strong></li>
        <li><strong>HVAC replacement:</strong> $8,000-$20,000 (heat pump)</li>
        <li><strong>All windows replaced:</strong> $8,000-$20,000</li>
        <li><strong>Complete insulation upgrade:</strong> $5,000-$15,000</li>
        <li><strong>Solar PV (small system):</strong> $10,000-$18,000 (net after tax credit)</li>
        <li><strong>Typical 30-40 point improvement:</strong> $40,000-$55,000</li>
      </ul>

      <h3>HERS Improvement Strategies by Component</h3>
      
      <h4>1. Air Sealing (5-15 point improvement)</h4>
      <p><strong>Cost: $1,500-$4,000 | Best ROI</strong></p>
      <ul>
        <li><strong>Blower door-guided sealing:</strong> $1,500-$3,000</li>
        <li><strong>Typical air leakage reduction:</strong> 30-50%</li>
        <li><strong>HERS improvement:</strong> 5-15 points</li>
        <li><strong>Annual savings:</strong> $200-$600</li>
        <li><strong>Payback:</strong> 3-8 years</li>
        <li><strong>Best bang for buck:</strong> Highest ROI per dollar spent</li>
      </ul>

      <h4>2. Insulation Upgrades (5-20 point improvement)</h4>
      <p><strong>Cost: $3,000-$15,000</strong></p>
      <ul>
        <li><strong>Attic insulation (R-30 to R-60):</strong> $1,500-$3,500</li>
        <li><strong>Wall insulation (dense-pack):</strong> $2,500-$8,000</li>
        <li><strong>Basement/crawlspace:</strong> $1,500-$4,000</li>
        <li><strong>HERS improvement:</strong> 5-20 points</li>
        <li><strong>Annual savings:</strong> $300-$800</li>
        <li><strong>Payback:</strong> 5-12 years</li>
      </ul>

      <h4>3. Window Replacement (3-12 point improvement)</h4>
      <p><strong>Cost: $8,000-$20,000</strong></p>
      <ul>
        <li><strong>Double-pane to triple-pane:</strong> $8,000-$15,000 (full house)</li>
        <li><strong>Single-pane to double-pane:</strong> $10,000-$20,000</li>
        <li><strong>Strategic replacement (worst windows):</strong> $3,000-$8,000</li>
        <li><strong>HERS improvement:</strong> 3-12 points</li>
        <li><strong>Annual savings:</strong> $150-$600</li>
        <li><strong>Payback:</strong> 15-40 years (consider comfort + aesthetics)</li>
      </ul>

      <h4>4. HVAC Upgrade (5-20 point improvement)</h4>
      <p><strong>Cost: $5,000-$20,000</strong></p>
      <ul>
        <li><strong>Standard AC to high-efficiency:</strong> $5,000-$8,000 (3-5 points)</li>
        <li><strong>Gas furnace to heat pump:</strong> $10,000-$20,000 (10-20 points)</li>
        <li><strong>Duct sealing/insulation:</strong> $1,000-$3,000 (2-5 points)</li>
        <li><strong>HERS improvement:</strong> 5-20 points total</li>
        <li><strong>Annual savings:</strong> $300-$1,200</li>
        <li><strong>Payback:</strong> 5-15 years</li>
      </ul>

      <h4>5. Water Heating (2-8 point improvement)</h4>
      <p><strong>Cost: $1,000-$3,000</strong></p>
      <ul>
        <li><strong>Tank to heat pump water heater:</strong> $1,500-$2,500</li>
        <li><strong>Tank to tankless:</strong> $2,500-$4,500</li>
        <li><strong>Insulation blanket + pipe insulation:</strong> $100-$300</li>
        <li><strong>HERS improvement:</strong> 2-8 points</li>
        <li><strong>Annual savings:</strong> $100-$400</li>
        <li><strong>Payback:</strong> 5-10 years</li>
      </ul>

      <h4>6. Solar PV (10-50+ point improvement)</h4>
      <p><strong>Cost: $15,000-$30,000 (net after tax credit)</strong></p>
      <ul>
        <li><strong>Small system (4-6 kW):</strong> $12,000-$18,000 net (10-20 points)</li>
        <li><strong>Medium system (6-10 kW):</strong> $18,000-$25,000 net (20-40 points)</li>
        <li><strong>Large system (10-14 kW):</strong> $25,000-$35,000 net (40-60 points)</li>
        <li><strong>Can achieve net zero (HERS 0)</strong></li>
        <li><strong>Annual savings:</strong> $800-$2,400</li>
        <li><strong>Payback:</strong> 6-12 years</li>
      </ul>

      <h3>Typical HERS Improvement Packages</h3>
      
      <h4>Package 1: Quick Wins (HERS 140 → 125)</h4>
      <p><strong>Cost: $5,000-$8,000 | Savings: $300-$600/year</strong></p>
      <ul>
        <li><strong>Air sealing:</strong> $1,500-$3,000</li>
        <li><strong>Attic insulation boost:</strong> $1,500-$2,500</li>
        <li><strong>Duct sealing:</strong> $800-$1,500</li>
        <li><strong>LED lighting:</strong> $300-$500</li>
        <li><strong>Programmable thermostat:</strong> $200-$400</li>
        <li><strong>Water heater insulation:</strong> $100-$200</li>
        <li><strong>Total investment:</strong> $6,400</li>
        <li><strong>Payback:</strong> 11-21 years</li>
      </ul>

      <h4>Package 2: Major Upgrade (HERS 140 → 110)</h4>
      <p><strong>Cost: $25,000-$40,000 | Savings: $600-$1,200/year</strong></p>
      <ul>
        <li><strong>All Package 1 items</strong></li>
        <li><strong>Heat pump HVAC:</strong> $12,000-$18,000</li>
        <li><strong>Heat pump water heater:</strong> $2,000-$3,000</li>
        <li><strong>Strategic window replacement:</strong> $5,000-$10,000</li>
        <li><strong>Wall insulation (key walls):</strong> $3,000-$6,000</li>
        <li><strong>Total investment:</strong> $32,000</li>
        <li><strong>Payback:</strong> 27-53 years (pure energy savings)</li>
        <li><strong>Property value increase:</strong> $15,000-$30,000 (improves ROI)</li>
      </ul>

      <h4>Package 3: Net Zero (HERS 140 → 0-10)</h4>
      <p><strong>Cost: $60,000-$100,000 | Utility bills near $0</strong></p>
      <ul>
        <li><strong>All Package 2 items</strong></li>
        <li><strong>All windows replaced (triple-pane):</strong> $15,000-$25,000</li>
        <li><strong>Complete insulation upgrade:</strong> $8,000-$15,000</li>
        <li><strong>Solar PV (10-12 kW):</strong> $22,000-$30,000 (net)</li>
        <li><strong>Battery storage (optional):</strong> $10,000-$15,000</li>
        <li><strong>Total investment:</strong> $80,000</li>
        <li><strong>Annual savings:</strong> $2,500-$4,000 (total energy cost)</li>
        <li><strong>Payback:</strong> 20-32 years</li>
        <li><strong>Property value increase:</strong> $40,000-$80,000</li>
      </ul>

      <h3>Property Value Impact by HERS Score</h3>
      
      <h4>Appraisal Value Adjustments</h4>
      <ul>
        <li><strong>HERS 120-140:</strong> Baseline (no adjustment)</li>
        <li><strong>HERS 100-119:</strong> +2-5% value ($6,000-$15,000 for $300k home)</li>
        <li><strong>HERS 85-99:</strong> +5-8% value ($15,000-$24,000)</li>
        <li><strong>HERS 70-84:</strong> +8-12% value ($24,000-$36,000)</li>
        <li><strong>HERS 50-69:</strong> +10-15% value ($30,000-$45,000)</li>
        <li><strong>HERS 0-49:</strong> +15-25% value ($45,000-$75,000)</li>
      </ul>

      <h4>Marketability Benefits</h4>
      <ul>
        <li><strong>HERS below 100:</strong> "Energy efficient" marketing claim</li>
        <li><strong>HERS 85 or lower:</strong> ENERGY STAR certification eligible</li>
        <li><strong>HERS below 70:</strong> "High-performance home" status</li>
        <li><strong>HERS 0-30:</strong> "Net zero" or "near net zero" marketing</li>
        <li><strong>Faster sales:</strong> 10-25% quicker with documented efficiency</li>
      </ul>

      <h3>HERS Score Requirements</h3>
      
      <h4>Energy Codes and Standards</h4>
      <ul>
        <li><strong>2021 IECC:</strong> HERS 100 or code compliance</li>
        <li><strong>ENERGY STAR v3.2:</strong> HERS 85 or lower required</li>
        <li><strong>DOE Zero Energy Ready Home:</strong> HERS 55 or lower (without solar)</li>
        <li><strong>Passive House (PHIUS):</strong> Roughly HERS 20-40 equivalent</li>
        <li><strong>LEED for Homes:</strong> Points awarded for HERS below 100</li>
      </ul>

      <h4>Mortgage and Financing Benefits</h4>
      <ul>
        <li><strong>Energy-efficient mortgage (EEM):</strong> HERS rating often required</li>
        <li><strong>Better rates:</strong> 0.125-0.5% lower with HERS <85</li>
        <li><strong>Higher loan amount:</strong> Qualify for more based on energy savings</li>
        <li><strong>FHA, VA, conventional:</strong> All offer EEM programs</li>
      </ul>

      <h3>Estimated HERS Score by Home Type</h3>
      
      <h4>By Construction Era</h4>
      <ul>
        <li><strong>Pre-1950:</strong> HERS 150-200+ (minimal insulation, single-pane windows)</li>
        <li><strong>1950-1980:</strong> HERS 130-160 (some insulation, inefficient HVAC)</li>
        <li><strong>1980-2000:</strong> HERS 110-140 (basic insulation, older HVAC)</li>
        <li><strong>2000-2015:</strong> HERS 90-120 (code-built, moderate efficiency)</li>
        <li><strong>2015-present:</strong> HERS 80-100 (current code, better efficiency)</li>
        <li><strong>ENERGY STAR new:</strong> HERS 65-85</li>
        <li><strong>High-performance new:</strong> HERS 40-70</li>
        <li><strong>Net zero new:</strong> HERS 0-20</li>
      </ul>

      <h3>ROI Analysis</h3>
      
      <h4>10-Point HERS Improvement ROI</h4>
      <p><strong>Investment: $5,000-$8,000</strong></p>
      <ul>
        <li><strong>Annual savings (10% energy reduction):</strong> $300-$400</li>
        <li><strong>10-year savings:</strong> $3,000-$4,000</li>
        <li><strong>Property value increase:</strong> $6,000-$12,000 (2-4%)</li>
        <li><strong>Total 10-year benefit:</strong> $9,000-$16,000</li>
        <li><strong>ROI:</strong> 80-200%</li>
      </ul>

      <h4>30-Point HERS Improvement ROI</h4>
      <p><strong>Investment: $30,000-$40,000</strong></p>
      <ul>
        <li><strong>Annual savings (30% energy reduction):</strong> $900-$1,200</li>
        <li><strong>15-year savings:</strong> $13,500-$18,000</li>
        <li><strong>Property value increase:</strong> $18,000-$36,000 (6-12%)</li>
        <li><strong>Total 15-year benefit:</strong> $31,500-$54,000</li>
        <li><strong>ROI:</strong> 5-80%</li>
      </ul>

      <h3>Best Candidates for HERS Improvement</h3>
      
      <h4>Ideal Situations</h4>
      <ol>
        <li>Older homes (pre-2000) with HERS 130+ (biggest improvement potential)</li>
        <li>High energy bills ($300+ monthly)</li>
        <li>Planning to stay 10+ years (realize savings)</li>
        <li>Major renovation underway (combine efficiency upgrades)</li>
        <li>Preparing to sell (HERS rating boosts value and marketability)</li>
        <li>Applying for green mortgage (HERS rating required)</li>
        <li>Uncomfortable home (drafts, hot/cold rooms)</li>
        <li>Seeking ENERGY STAR or LEED certification</li>
      </ol>

      <h4>Lower Priority Situations</h4>
      <ul>
        <li>New efficient homes (HERS already <100)</li>
        <li>Recent major upgrades (HVAC, windows, insulation)</li>
        <li>Low energy bills (<$150 monthly)</li>
        <li>Plan to move within 5 years</li>
        <li>Rental property (tenants benefit from savings, not owner)</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>HERS Index scores rate home energy efficiency on a 0-150+ scale where lower is better, with each 1-point reduction saving approximately 1% on energy bills ($20-$40 annually for typical homes). Official HERS ratings cost $400-$1,000 but provide valuable third-party verification, improvement recommendations, and qualification for energy-efficient mortgages and certifications. Improving HERS scores costs $3,000-$15,000 per 10 points through air sealing, insulation, and equipment upgrades, with the most cost-effective improvements being air sealing (5-15 points for $1,500-$4,000) and attic insulation (5-10 points for $1,500-$3,500). A 30-point improvement ($30,000-$40,000 investment) reduces energy bills by 30% ($900-$1,200 annually) and increases property value by 6-12% ($18,000-$36,000 for $300,000 home), providing positive ROI when including property appreciation. HERS improvements make most financial sense for older, inefficient homes (HERS 130+) with high energy bills, long-term homeowners, and those seeking green certifications or energy-efficient financing. While pure energy savings alone may take 10-30 years to recover investment, combining energy savings with property value increases and improved comfort typically provides compelling 5-15 year ROI for comprehensive efficiency packages.</p>
    `,
  },
};
