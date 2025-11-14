import { CalculatorContent } from '@/types';

export const LandscapingBudgetCalculatorContent: CalculatorContent = {
  title: 'Landscaping Budget Calculator',
  description: 'Calculate comprehensive landscaping costs including design, plants, hardscaping, irrigation, and maintenance for residential and commercial properties',
  icon: '🌳',
  category: 'Additional Tools',
  slug: 'landscaping-budget-calculator',
  
  metaTitle: 'Landscaping Budget Calculator - Complete Project Cost Estimator | Property Tools',
  metaDescription: 'Estimate full landscaping project costs including design, plants, installation, hardscaping, and maintenance. Calculate your complete landscaping budget.',
  
  article: {
    title: 'Complete Guide to Landscaping Costs and Budgeting',
    content: `
      <h2>Landscaping Budget Calculator</h2>
      <p>Professional landscaping transforms your outdoor space and increases property value by 5-20%, but costs vary dramatically from $3,000 for basic planting to $100,000+ for complete luxury installations. Most homeowners spend $8,000-$20,000 on a comprehensive landscaping project. Understanding the components of landscaping costs helps you budget appropriately and maximize your investment return.</p>

      <h3>Landscaping Costs by Project Type</h3>
      
      <h4>Basic Landscaping - $3,000 to $8,000</h4>
      <p><strong>Typical Scope:</strong> Simple planting beds, mulch, and basic cleanup</p>
      <ul>
        <li>Lawn installation or sod: $1,500-$4,000</li>
        <li>Foundation plantings (15-20 shrubs): $800-$2,000</li>
        <li>Mulch beds: $300-$800</li>
        <li>Basic edging: $200-$600</li>
        <li>Cleanup and prep: $500-$1,200</li>
      </ul>

      <h4>Mid-Range Landscaping - $8,000 to $25,000</h4>
      <p><strong>Typical Scope:</strong> Professional design, variety of plants, basic hardscaping</p>
      <ul>
        <li>Landscape design: $500-$3,000</li>
        <li>Sod or seeding (5,000 sq ft): $2,000-$5,000</li>
        <li>Trees (3-5 medium trees): $1,000-$3,000</li>
        <li>Shrubs and perennials (30-50 plants): $1,500-$4,000</li>
        <li>Mulch and edging: $800-$2,000</li>
        <li>Basic patio (200 sq ft): $2,000-$6,000</li>
        <li>Walkways: $1,500-$4,000</li>
        <li>Irrigation system: $1,500-$3,000</li>
      </ul>

      <h4>High-End Landscaping - $25,000 to $100,000+</h4>
      <p><strong>Typical Scope:</strong> Complete outdoor living transformation</p>
      <ul>
        <li>Professional design and planning: $3,000-$10,000</li>
        <li>Full lawn installation: $5,000-$15,000</li>
        <li>Mature trees (5-10): $5,000-$20,000</li>
        <li>Extensive plantings (100+ plants): $8,000-$25,000</li>
        <li>Hardscaping (patios, walls, paths): $15,000-$50,000</li>
        <li>Outdoor kitchen or fireplace: $5,000-$25,000</li>
        <li>Water features: $3,000-$20,000</li>
        <li>Advanced irrigation and lighting: $5,000-$15,000</li>
        <li>Fencing or privacy screening: $3,000-$15,000</li>
      </ul>

      <h3>Landscaping Cost Breakdown by Element</h3>
      
      <h4>Lawn Installation</h4>
      <ul>
        <li><strong>Sod installation:</strong> $0.35-$0.85 per sq ft ($1,750-$4,250 for 5,000 sq ft)</li>
        <li><strong>Seeding:</strong> $0.10-$0.30 per sq ft ($500-$1,500 for 5,000 sq ft)</li>
        <li><strong>Hydroseeding:</strong> $0.15-$0.40 per sq ft ($750-$2,000 for 5,000 sq ft)</li>
        <li><strong>Artificial turf:</strong> $5-$20 per sq ft ($25,000-$100,000 for 5,000 sq ft)</li>
        <li><strong>Soil preparation:</strong> Add $500-$2,000</li>
      </ul>

      <h4>Trees and Large Plants</h4>
      <ul>
        <li><strong>Small trees (6-8 ft):</strong> $100-$400 each installed</li>
        <li><strong>Medium trees (10-15 ft):</strong> $300-$1,500 each installed</li>
        <li><strong>Large/mature trees (15-25 ft):</strong> $1,500-$5,000+ each installed</li>
        <li><strong>Specimen trees:</strong> $3,000-$15,000+ each</li>
        <li><strong>Delivery and planting:</strong> Included in prices above</li>
      </ul>

      <h4>Shrubs, Perennials, and Groundcover</h4>
      <ul>
        <li><strong>Small shrubs (1 gallon):</strong> $15-$50 each installed</li>
        <li><strong>Medium shrubs (3-5 gallon):</strong> $40-$150 each installed</li>
        <li><strong>Large shrubs (7-15 gallon):</strong> $100-$400 each installed</li>
        <li><strong>Perennials:</strong> $10-$40 each installed</li>
        <li><strong>Groundcover (flats):</strong> $50-$150 per flat (covers 25-50 sq ft)</li>
        <li><strong>Annuals (seasonal color):</strong> $5-$20 each installed</li>
      </ul>

      <h4>Mulch and Edging</h4>
      <ul>
        <li><strong>Mulch (wood chips):</strong> $30-$60 per cubic yard installed</li>
        <li><strong>Coverage:</strong> 1 cubic yard covers 100-150 sq ft at 3" deep</li>
        <li><strong>Decorative stone mulch:</strong> $50-$150 per cubic yard</li>
        <li><strong>Rubber mulch:</strong> $100-$200 per cubic yard</li>
        <li><strong>Plastic or metal edging:</strong> $1-$5 per linear foot</li>
        <li><strong>Stone or brick edging:</strong> $8-$25 per linear foot</li>
      </ul>

      <h3>Hardscaping Costs</h3>
      
      <h4>Patios</h4>
      <ul>
        <li><strong>Concrete patio:</strong> $6-$15 per sq ft</li>
        <li><strong>Pavers patio:</strong> $10-$30 per sq ft</li>
        <li><strong>Flagstone patio:</strong> $15-$35 per sq ft</li>
        <li><strong>Natural stone patio:</strong> $20-$50 per sq ft</li>
        <li><strong>Average patio (200 sq ft):</strong> $2,000-$10,000</li>
      </ul>

      <h4>Walkways and Paths</h4>
      <ul>
        <li><strong>Gravel path:</strong> $3-$8 per sq ft</li>
        <li><strong>Concrete walkway:</strong> $6-$12 per sq ft</li>
        <li><strong>Paver walkway:</strong> $10-$25 per sq ft</li>
        <li><strong>Natural stone:</strong> $18-$40 per sq ft</li>
        <li><strong>Stepping stones:</strong> $100-$300 installed</li>
      </ul>

      <h4>Retaining Walls</h4>
      <ul>
        <li><strong>Timber retaining wall:</strong> $10-$25 per sq ft</li>
        <li><strong>Concrete block wall:</strong> $20-$40 per sq ft</li>
        <li><strong>Natural stone wall:</strong> $25-$75 per sq ft</li>
        <li><strong>Engineered wall system:</strong> $30-$60 per sq ft</li>
        <li><strong>Average wall (50 linear ft, 3 ft high):</strong> $3,000-$11,000</li>
      </ul>

      <h3>Irrigation and Lighting</h3>
      
      <h4>Irrigation Systems</h4>
      <ul>
        <li><strong>Basic sprinkler system:</strong> $1,500-$3,000 (5,000 sq ft)</li>
        <li><strong>Advanced system with zones:</strong> $2,500-$5,000</li>
        <li><strong>Drip irrigation:</strong> $500-$2,000</li>
        <li><strong>Smart controller upgrade:</strong> $200-$500</li>
        <li><strong>Per zone:</strong> $400-$800</li>
        <li><strong>Maintenance/winterization:</strong> $75-$150 annually</li>
      </ul>

      <h4>Landscape Lighting</h4>
      <ul>
        <li><strong>Basic path lights (8-12 lights):</strong> $800-$2,000</li>
        <li><strong>Comprehensive system (20-30 lights):</strong> $2,500-$6,000</li>
        <li><strong>LED uplighting per fixture:</strong> $100-$300 installed</li>
        <li><strong>Low-voltage system:</strong> $50-$150 per light installed</li>
        <li><strong>Solar lights:</strong> $20-$100 per light (DIY friendly)</li>
        <li><strong>Smart lighting system:</strong> Add $500-$2,000</li>
      </ul>

      <h3>Outdoor Structures and Features</h3>
      
      <h4>Decks and Pergolas</h4>
      <ul>
        <li><strong>Wood deck:</strong> $15-$35 per sq ft</li>
        <li><strong>Composite deck:</strong> $25-$45 per sq ft</li>
        <li><strong>Pergola (12x12 ft):</strong> $3,000-$8,000</li>
        <li><strong>Gazebo:</strong> $5,000-$15,000</li>
        <li><strong>Arbor:</strong> $500-$3,000</li>
      </ul>

      <h4>Water Features</h4>
      <ul>
        <li><strong>Small fountain:</strong> $500-$2,000</li>
        <li><strong>Medium pond (8x10 ft):</strong> $3,000-$8,000</li>
        <li><strong>Large pond with waterfall:</strong> $10,000-$30,000</li>
        <li><strong>Pondless waterfall:</strong> $2,500-$8,000</li>
        <li><strong>Swimming pool integration:</strong> $50,000-$150,000+</li>
      </ul>

      <h4>Outdoor Kitchens and Fire Features</h4>
      <ul>
        <li><strong>Basic grill station:</strong> $3,000-$8,000</li>
        <li><strong>Full outdoor kitchen:</strong> $10,000-$40,000+</li>
        <li><strong>Fire pit (basic):</strong> $500-$3,000</li>
        <li><strong>Built-in fireplace:</strong> $3,000-$15,000</li>
        <li><strong>Gas fire feature:</strong> $2,000-$8,000</li>
      </ul>

      <h3>Professional Services</h3>
      
      <h4>Landscape Design</h4>
      <ul>
        <li><strong>Consultation (2-3 hours):</strong> $200-$800</li>
        <li><strong>Basic design plan:</strong> $500-$2,000</li>
        <li><strong>Comprehensive master plan:</strong> $2,000-$8,000</li>
        <li><strong>3D renderings:</strong> Add $500-$2,000</li>
        <li><strong>Per hour rate:</strong> $50-$200/hour</li>
      </ul>

      <h4>Installation Labor</h4>
      <ul>
        <li><strong>General landscaper:</strong> $50-$100 per hour</li>
        <li><strong>Landscape crew (3-4 people):</strong> $200-$400 per hour</li>
        <li><strong>Certified arborist:</strong> $75-$150 per hour</li>
        <li><strong>Hardscape specialist:</strong> $75-$150 per hour</li>
      </ul>

      <h3>Ongoing Maintenance Costs</h3>
      
      <h4>Weekly/Bi-Weekly Maintenance</h4>
      <ul>
        <li><strong>Basic mowing and trimming:</strong> $30-$80 per visit</li>
        <li><strong>Full-service maintenance:</strong> $50-$200 per visit</li>
        <li><strong>Monthly cost:</strong> $120-$800</li>
        <li><strong>Annual cost:</strong> $1,500-$10,000</li>
      </ul>

      <h4>Seasonal Services</h4>
      <ul>
        <li><strong>Spring cleanup:</strong> $200-$800</li>
        <li><strong>Fall cleanup and leaf removal:</strong> $300-$1,200</li>
        <li><strong>Mulch refreshment (annual):</strong> $300-$1,000</li>
        <li><strong>Fertilization (4 applications):</strong> $300-$800</li>
        <li><strong>Aeration and overseeding:</strong> $150-$500</li>
      </ul>

      <h3>Return on Investment</h3>
      
      <h4>ROI by Project Type</h4>
      <ul>
        <li><strong>Basic landscaping:</strong> 75-100% ROI</li>
        <li><strong>Mid-range landscaping:</strong> 100-150% ROI</li>
        <li><strong>High-end landscaping:</strong> 50-100% ROI</li>
        <li><strong>Curb appeal improvements:</strong> 100-200% ROI</li>
        <li><strong>Outdoor living spaces:</strong> 60-100% ROI</li>
      </ul>

      <h4>Impact on Home Value</h4>
      <ul>
        <li><strong>Professional landscaping:</strong> Increases value 5-20%</li>
        <li><strong>Mature trees:</strong> Add $1,000-$10,000 per tree to value</li>
        <li><strong>Outdoor living space:</strong> Adds $5,000-$25,000 to value</li>
        <li><strong>Irrigation system:</strong> Adds $2,000-$5,000 to value</li>
        <li><strong>Poor landscaping:</strong> Can reduce value 5-15%</li>
      </ul>

      <h3>Cost-Saving Strategies</h3>
      
      <h4>Ways to Reduce Landscaping Costs</h4>
      <ol>
        <li><strong>Phase the project:</strong> Spread costs over 2-3 years (save on interest/financing)</li>
        <li><strong>Buy smaller plants:</strong> Save 30-50% vs. mature plants</li>
        <li><strong>DIY simple tasks:</strong> Mulching, edging (save $500-$2,000)</li>
        <li><strong>Plant in fall:</strong> Plants often discounted 25-50%</li>
        <li><strong>Use native plants:</strong> Lower cost, less maintenance</li>
        <li><strong>Start from seed:</strong> Save 70-90% on annuals/perennials</li>
        <li><strong>Get multiple bids:</strong> Compare 3-5 contractors (save 15-25%)</li>
        <li><strong>Group with neighbors:</strong> Bulk pricing on materials (save 10-20%)</li>
      </ol>

      <h4>What NOT to Skimp On</h4>
      <ul>
        <li>Soil preparation and grading (foundation of success)</li>
        <li>Proper drainage solutions (prevents costly problems)</li>
        <li>Quality irrigation system (saves water and plants)</li>
        <li>Professional design for complex projects</li>
        <li>Mature trees in key focal points</li>
      </ul>

      <h3>DIY vs. Professional Installation</h3>
      
      <h4>Good DIY Projects</h4>
      <p><strong>Potential Savings: 40-60%</strong></p>
      <ul>
        <li>Planting small shrubs and perennials</li>
        <li>Mulching and edging</li>
        <li>Installing solar lights</li>
        <li>Simple flower bed creation</li>
        <li>Spreading seed or laying sod (small areas)</li>
      </ul>

      <h4>Hire Professional For</h4>
      <ul>
        <li>Grading and drainage work</li>
        <li>Irrigation system installation</li>
        <li>Hardscaping (patios, walls, paths)</li>
        <li>Large tree planting and transplanting</li>
        <li>Electrical work for lighting</li>
        <li>Complex design and planning</li>
        <li>Heavy equipment operation</li>
      </ul>

      <h3>Regional Cost Variations</h3>
      
      <h4>Higher Cost Regions (+20-50%)</h4>
      <ul>
        <li>West Coast (California, Washington)</li>
        <li>Northeast corridor (NYC, Boston)</li>
        <li>South Florida</li>
        <li>Major metropolitan areas</li>
      </ul>

      <h4>Lower Cost Regions (-10-20%)</h4>
      <ul>
        <li>Midwest states</li>
        <li>Rural areas</li>
        <li>Southern states (except Florida coast)</li>
      </ul>

      <h3>Choosing a Landscape Contractor</h3>
      
      <h4>Essential Qualifications</h4>
      <ul>
        <li>Licensed and insured</li>
        <li>3+ years experience</li>
        <li>Portfolio of completed projects</li>
        <li>References from past 12 months</li>
        <li>Written estimates and contracts</li>
        <li>Warranty on plants and labor (1 year typical)</li>
      </ul>

      <h4>Red Flags</h4>
      <ul>
        <li>No license or insurance</li>
        <li>Can't provide references or portfolio</li>
        <li>Extremely low bid (50%+ below competitors)</li>
        <li>Requires full payment upfront</li>
        <li>No written contract</li>
        <li>Pressure tactics</li>
      </ul>

      <h3>Budgeting Rules of Thumb</h3>
      
      <h4>Percent of Home Value</h4>
      <ul>
        <li><strong>Basic landscaping:</strong> 1-3% of home value</li>
        <li><strong>Mid-range landscaping:</strong> 3-7% of home value</li>
        <li><strong>High-end landscaping:</strong> 7-15% of home value</li>
        <li><strong>Example: $300,000 home:</strong> Budget $3,000-$45,000</li>
      </ul>

      <h4>Budget Allocation</h4>
      <ul>
        <li><strong>Design and planning:</strong> 10-15% of total budget</li>
        <li><strong>Hardscaping:</strong> 30-50% of total budget</li>
        <li><strong>Plants and materials:</strong> 20-30% of total budget</li>
        <li><strong>Labor and installation:</strong> 25-40% of total budget</li>
        <li><strong>Contingency:</strong> 10-15% for unexpected issues</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>Landscaping costs range from $3,000 for basic plantings to $100,000+ for complete luxury installations, with most homeowners spending $8,000-$20,000 on comprehensive projects. Professional landscaping typically returns 75-150% of its cost in added home value and dramatically improves curb appeal. Budget 5-10% of your home's value for quality landscaping that enhances both enjoyment and resale potential. Phase projects over multiple years to spread costs, get 3-5 quotes from licensed contractors, and invest in proper soil preparation and drainage for long-term success. Remember that maintenance costs $1,500-$10,000 annually, so factor ongoing expenses into your budget. Quality landscaping is one of the best investments you can make in your property, providing immediate visual impact and long-term value appreciation.</p>
    `,
  },
};
