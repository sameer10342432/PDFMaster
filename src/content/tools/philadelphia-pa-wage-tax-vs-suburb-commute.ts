import { CalculatorContent } from '@/types';

export const PHILADELPHIA_PA_WAGE_TAX_VS_SUBURB_COMMUTE_CONTENT: CalculatorContent = {
  title: 'Philadelphia (PA) Wage Tax vs. Suburb Commute',
  description: 'Compare Philadelphia wage tax costs against suburb commuting expenses to determine the most financially advantageous living location in the Greater Philadelphia area',
  slug: 'philadelphia-pa-wage-tax-vs-suburb-commute',
  icon: '🚂',
  category: 'Tax Calculators',
  article: {
    title: 'Philadelphia Wage Tax vs. Suburb Living Cost Analysis',
    content: `
    <h2>Philadelphia Wage Tax vs. Suburb Commute Guide</h2>
    <p>Philadelphia has one of the <strong>highest municipal wage taxes in the United States</strong> at 3.79% for residents (2024). This creates a critical financial decision for workers: live in Philadelphia and pay the wage tax, or live in the suburbs and bear commuting costs?</p>
    
    <h3>What is the Philadelphia Wage Tax?</h3>
    <p>The Philadelphia Wage Tax (officially "City of Philadelphia Earnings Tax") taxes all income earned by Philadelphia residents and non-residents who work in the city:</p>
    <ul>
      <li><strong>Resident Rate (2024):</strong> 3.79% of all earned income</li>
      <li><strong>Non-Resident Rate (2024):</strong> 3.44% of income earned in Philadelphia</li>
      <li><strong>Who Pays:</strong> All wage earners - W-2 employees and self-employed</li>
      <li><strong>Tax Base:</strong> Gross wages, salaries, commissions, bonuses, tips</li>
    </ul>
    
    <h3>2024 Philadelphia Wage Tax Rates</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Taxpayer Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Tax on $75K</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Tax on $125K</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Philadelphia Resident</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.79%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,843</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,738</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Suburb Resident (works in Philly)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,580</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,300</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Suburb Resident (works in suburb)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$0</td>
      </tr>
    </table>
    
    <h3>Wage Tax Burden by Income Level</h3>
    <p>Annual Philadelphia wage tax paid by residents:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Annual Income</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Resident Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Non-Resident Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Resident Penalty</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$50,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,895</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,720</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$175</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$75,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,843</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,580</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$263</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,790</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,440</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$350</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$150,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,685</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,160</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$525</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,580</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,880</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$700</td>
      </tr>
    </table>
    
    <h3>Commuting Costs from Philadelphia Suburbs</h3>
    <p>Average annual commuting costs by suburb:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Suburb</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Distance</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Driving Cost</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">SEPTA Regional Rail</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Main Line (Ardmore, Bryn Mawr)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">12 miles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,840</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,640</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Delaware County (Media, Springfield)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">15 miles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,880</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery County (Conshohocken)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">18 miles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,680</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,120</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Bucks County (Yardley, Newtown)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">25 miles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5,850</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,600</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">South Jersey (Cherry Hill)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">10 miles</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,480</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,400</td>
      </tr>
    </table>
    <p><strong>Driving costs</strong> include: fuel ($0.67/gallon/mile), parking ($150-250/month Center City), tolls, wear/tear, insurance increase.</p>
    
    <h3>Break-Even Analysis: When Suburbs Make Financial Sense</h3>
    <p>The wage tax savings from living in the suburbs must exceed commuting costs to make financial sense:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Annual Income</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Wage Tax Saved (Resident→Non-Res)</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Break-Even Commute Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$60,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$210/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Too low - must work in suburbs to benefit</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$350/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Breakeven only if no commute or remote</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$150,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$525/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Still doesn't cover most commutes</td>
      </tr>
    </table>
    <p><strong>Key Insight:</strong> The 0.35% rate difference ($350/year per $100K income) rarely justifies commuting costs. The big savings come from avoiding Philadelphia wage tax entirely by working in the suburbs.</p>
    
    <h3>The Real Savings: Working AND Living in Suburbs</h3>
    <p>The maximum financial benefit occurs when you both live AND work in the suburbs:</p>
    <ul>
      <li><strong>No Wage Tax:</strong> $0 Philadelphia wage tax (vs. $3,790 for $100K earner)</li>
      <li><strong>No Commute:</strong> $0 commuting costs to Center City</li>
      <li><strong>Total Annual Savings:</strong> $3,790 + $3,000-$5,000 = $6,790 - $8,790</li>
      <li><strong>Lower Housing Costs:</strong> Suburban homes often cost 20-30% less than comparable Philadelphia properties</li>
    </ul>
    
    <h3>Historical Philadelphia Wage Tax Rates</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Resident Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Non-Resident Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Rate Trend</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2020</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.8712%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.5019%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">⬇️ Decreasing</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2021</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.8398%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.4481%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">⬇️ Decreasing</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2022</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.8398%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.4481%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">→ Flat</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2023</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.79%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">⬇️ Decreasing</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2024</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.79%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.44%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">→ Flat</td>
      </tr>
    </table>
    <p>Philadelphia has committed to <strong>gradual wage tax reductions</strong>, but the rate remains among the nation's highest municipal wage taxes.</p>
    
    <h3>Non-Financial Factors to Consider</h3>
    <p>Beyond the wage tax calculation, consider these quality-of-life factors:</p>
    
    <p><strong>Advantages of Living in Philadelphia:</strong></p>
    <ul>
      <li><strong>Walkability:</strong> No car needed in many neighborhoods</li>
      <li><strong>Culture & Amenities:</strong> Museums, restaurants, nightlife, events</li>
      <li><strong>Time Savings:</strong> No commute for city workers</li>
      <li><strong>Property Appreciation:</strong> Some Philadelphia neighborhoods outperforming suburbs</li>
      <li><strong>Younger Demographics:</strong> More social opportunities for young professionals</li>
    </ul>
    
    <p><strong>Advantages of Suburban Living:</strong></p>
    <ul>
      <li><strong>School Quality:</strong> Suburban school districts often higher-rated</li>
      <li><strong>Lower Crime:</strong> Suburban areas generally safer</li>
      <li><strong>More Space:</strong> Larger homes and yards for similar price</li>
      <li><strong>Lower Property Taxes:</strong> Many PA suburbs have lower property tax rates than Philadelphia</li>
      <li><strong>Parking:</strong> Free parking at home and work</li>
    </ul>
    
    <h3>Case Studies: Real-World Examples</h3>
    
    <p><strong>Case 1: Young Professional ($85K, Single, Works Downtown)</strong></p>
    <ul>
      <li><strong>Option A - Philadelphia (Fishtown):</strong> Wage tax $3,222, no commute, walkable lifestyle = <strong>WINNER</strong></li>
      <li><strong>Option B - Suburb (Ardmore):</strong> Wage tax $2,924, SEPTA $2,640/yr, car needed = More expensive</li>
      <li><strong>Verdict:</strong> Live in Philadelphia for lifestyle and financial reasons</li>
    </ul>
    
    <p><strong>Case 2: Family ($180K household, Works in King of Prussia)</strong></p>
    <ul>
      <li><strong>Option A - Philadelphia (Mt. Airy):</strong> Wage tax $6,822, reverse commute $4,200/yr = Total $11,022</li>
      <li><strong>Option B - Suburb (Conshohocken):</strong> No wage tax, no commute, better schools = <strong>WINNER</strong></li>
      <li><strong>Savings:</strong> $11,000+ annually by living and working in suburbs</li>
    </ul>
    
    <p><strong>Case 3: Remote Worker ($120K, Fully Remote)</strong></p>
    <ul>
      <li><strong>Option A - Philadelphia:</strong> Wage tax $4,548 (taxes all income even if work is remote)</li>
      <li><strong>Option B - Suburb:</strong> No wage tax, suburban amenities = <strong>WINNER</strong></li>
      <li><strong>Savings:</strong> $4,548 annually + potential housing savings</li>
    </ul>
    
    <h3>SEPTA Regional Rail Monthly Passes (2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Zone</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Stations</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Monthly Pass</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Cost</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">CCP (Center City)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">30th St, Suburban, Jefferson</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$102</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,224</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Zone 1</td>
        <td style="border: 1px solid #ddd; padding: 8px;">University City, Manayunk</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$137</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,644</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Zone 2</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Ardmore, Glenside</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$177</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,124</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Zone 3</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Bryn Mawr, Media</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$220</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,640</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Zone 4</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Wayne, Chestnut Hill</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$260</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,120</td>
      </tr>
    </table>
    
    <h3>Tax Strategies to Minimize Wage Tax Burden</h3>
    <ul>
      <li><strong>Work Remotely from Suburbs:</strong> If employer allows, work from home in PA suburb (no wage tax on remote work days outside Philly)</li>
      <li><strong>Negotiate Remote Work:</strong> Even 2-3 days remote saves proportional wage tax</li>
      <li><strong>Suburban Office Locations:</strong> Find jobs in King of Prussia, Conshohocken, or other suburban job centers</li>
      <li><strong>Self-Employment Outside City:</strong> Set up business in suburbs to avoid wage tax on self-employment income</li>
      <li><strong>Maximize Pre-Tax Deductions:</strong> 401(k), HSA, FSA reduce taxable wages for wage tax purposes</li>
    </ul>
    
    <h3>Philadelphia vs. Other High-Wage-Tax Cities</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">City</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Resident Rate</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $100K</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Philadelphia, PA</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.79%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,790</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Detroit, MI</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.4%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,400</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Louisville, KY</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.2%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Kansas City, MO</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Columbus, OH</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.5%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500</td>
      </tr>
    </table>
    <p>Philadelphia's 3.79% wage tax is the <strong>highest among major US cities</strong>.</p>
    
    <h3>Economic Impact of Wage Tax</h3>
    <p>The wage tax's effects on Philadelphia's economy:</p>
    <ul>
      <li><strong>Business Flight:</strong> Companies relocate to suburbs to attract talent</li>
      <li><strong>Talent Drain:</strong> High earners choose suburban employers</li>
      <li><strong>Revenue Dependence:</strong> Wage tax provides ~38% of Philadelphia's general fund</li>
      <li><strong>Reduction Efforts:</strong> City committed to gradual reductions but progress is slow</li>
      <li><strong>Competitive Disadvantage:</strong> Neighboring suburbs (no wage tax) attract businesses</li>
    </ul>
    
    <h3>Future Outlook</h3>
    <p>Factors affecting the wage tax calculation going forward:</p>
    <ul>
      <li><strong>Remote Work Trend:</strong> Post-pandemic remote work makes suburban living more attractive</li>
      <li><strong>Gradual Rate Reduction:</strong> City plans to reduce rate 0.05% annually (very slow)</li>
      <li><strong>Suburban Job Growth:</strong> King of Prussia, Conshohocken becoming major employment centers</li>
      <li><strong>Transit Improvements:</strong> SEPTA expansions may make suburbs more accessible</li>
    </ul>
    
    <h3>Decision Framework</h3>
    <p>Use this framework to decide where to live:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Your Situation</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Best Option</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Work in Center City, No kids, Age <35</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Live in Philadelphia</strong> - Lifestyle benefits outweigh wage tax</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Work in suburbs, Have kids</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Live in suburbs</strong> - No wage tax + better schools</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fully remote, Flexible location</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Live in suburbs</strong> - Avoid wage tax entirely</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">High earner ($200K+), Work downtown</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Consider suburbs</strong> - $7,580 wage tax is substantial</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hybrid schedule (2-3 days office)</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Live on city border</strong> - Short commute, some wage tax savings</td>
      </tr>
    </table>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Philadelphia Department of Revenue:</strong> phila.gov/revenue - Wage tax information and filing</li>
      <li><strong>SEPTA:</strong> septa.org - Transit schedules and pass pricing</li>
      <li><strong>Wage Tax Calculator:</strong> Official city wage tax estimator</li>
      <li><strong>Regional Rail Map:</strong> Plan commute routes and costs</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'annualIncome',
        label: 'Annual Gross Income',
        type: 'currency',
        required: true,
        placeholder: '100000',
        helpText: 'Your annual gross wages/salary before taxes'
      },
      {
        name: 'residenceChoice',
        label: 'Residence Location',
        type: 'select',
        required: true,
        options: [
          { value: 'philadelphia', label: 'Philadelphia (City Resident)' },
          { value: 'suburb', label: 'Suburb (Non-Resident)' },
        ],
        helpText: 'Where do you live or plan to live?'
      },
      {
        name: 'workLocation',
        label: 'Work Location',
        type: 'select',
        required: true,
        options: [
          { value: 'center-city', label: 'Center City Philadelphia' },
          { value: 'philadelphia-other', label: 'Philadelphia (Outside Center City)' },
          { value: 'suburb', label: 'Suburb (No Philly wage tax)' },
          { value: 'remote', label: 'Fully Remote' },
        ],
        helpText: 'Where is your primary work location?'
      },
      {
        name: 'commuteMethod',
        label: 'Commute Method (if applicable)',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Commute / Work in City' },
          { value: 'septa', label: 'SEPTA Regional Rail' },
          { value: 'drive', label: 'Drive + Parking' },
          { value: 'hybrid', label: 'Hybrid (2-3 days/week in office)' },
        ],
        helpText: 'How would you commute if living in suburbs?'
      },
      {
        name: 'commuteDistance',
        label: 'One-Way Commute Distance (miles)',
        type: 'number',
        required: false,
        placeholder: '15',
        helpText: 'Distance from suburb to workplace (if applicable)'
      },
      {
        name: 'parkingCost',
        label: 'Monthly Parking Cost',
        type: 'currency',
        required: false,
        placeholder: '200',
        helpText: 'Monthly parking cost in Center City (if driving)'
      },
      {
        name: 'septaZone',
        label: 'SEPTA Zone (if using Regional Rail)',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'Not Using SEPTA' },
          { value: 'zone1', label: 'Zone 1 - $137/month' },
          { value: 'zone2', label: 'Zone 2 - $177/month' },
          { value: 'zone3', label: 'Zone 3 - $220/month' },
          { value: 'zone4', label: 'Zone 4 - $260/month' },
        ],
        helpText: 'Select your SEPTA zone for accurate transit costs'
      },
      {
        name: 'householdSize',
        label: 'Household Size',
        type: 'select',
        required: false,
        options: [
          { value: '1', label: 'Single / 1 person' },
          { value: '2', label: '2 people (couple, no kids)' },
          { value: '3-4', label: '3-4 people (family with kids)' },
          { value: '5+', label: '5+ people (large family)' },
        ],
        helpText: 'Helps estimate lifestyle and housing needs'
      }
    ],
    results: [
      {
        name: 'philadelphiaWageTax',
        label: 'Annual Philadelphia Wage Tax',
        type: 'currency',
        helpText: 'Wage tax you would pay based on residence and work location'
      },
      {
        name: 'annualCommuteCost',
        label: 'Annual Commute Cost',
        type: 'currency',
        helpText: 'Estimated total annual commuting expenses'
      },
      {
        name: 'totalCostPhiladelphia',
        label: 'Total Annual Cost (Living in Philadelphia)',
        type: 'currency',
        helpText: 'Wage tax + commute costs if living in Philadelphia'
      },
      {
        name: 'totalCostSuburb',
        label: 'Total Annual Cost (Living in Suburb)',
        type: 'currency',
        helpText: 'Wage tax + commute costs if living in suburb'
      },
      {
        name: 'annualSavings',
        label: 'Annual Savings (Best Option)',
        type: 'currency',
        helpText: 'Annual financial advantage of the better option'
      },
      {
        name: 'monthlySavings',
        label: 'Monthly Savings',
        type: 'currency',
        helpText: 'Monthly financial difference between options'
      },
      {
        name: 'fiveYearSavings',
        label: '5-Year Total Savings',
        type: 'currency',
        helpText: 'Cumulative savings over 5 years'
      },
      {
        name: 'recommendation',
        label: 'Financial Recommendation',
        type: 'text',
        helpText: 'Best financial option based on your situation'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const annualIncome = parseFloat(inputs.annualIncome) || 0;
      const residenceChoice = inputs.residenceChoice || 'philadelphia';
      const workLocation = inputs.workLocation || 'center-city';
      const commuteMethod = inputs.commuteMethod || 'none';
      const commuteDistance = parseFloat(inputs.commuteDistance) || 0;
      const parkingCost = parseFloat(inputs.parkingCost) || 0;
      const septaZone = inputs.septaZone || 'none';

      const residentRate = 0.0379;
      const nonResidentRate = 0.0344;

      const septaCosts: Record<string, number> = {
        none: 0,
        zone1: 137 * 12,
        zone2: 177 * 12,
        zone3: 220 * 12,
        zone4: 260 * 12,
      };

      let philadelphiaWageTax = 0;
      if (workLocation === 'suburb' || workLocation === 'remote') {
        philadelphiaWageTax = residenceChoice === 'philadelphia' && workLocation === 'remote' ? annualIncome * residentRate : 0;
      } else {
        philadelphiaWageTax = residenceChoice === 'philadelphia' ? annualIncome * residentRate : annualIncome * nonResidentRate;
      }

      let annualCommuteCost = 0;
      if (residenceChoice === 'suburb' && workLocation !== 'suburb' && workLocation !== 'remote') {
        if (commuteMethod === 'septa') {
          annualCommuteCost = septaCosts[septaZone] || 0;
        } else if (commuteMethod === 'drive') {
          const drivingCostPerMile = 0.67;
          const annualMileage = commuteDistance * 2 * 250;
          const annualFuelCost = annualMileage * drivingCostPerMile;
          const annualParkingCost = parkingCost * 12;
          annualCommuteCost = annualFuelCost + annualParkingCost;
        } else if (commuteMethod === 'hybrid') {
          const daysPerYear = 125;
          const drivingCostPerMile = 0.67;
          const annualMileage = commuteDistance * 2 * daysPerYear;
          const annualFuelCost = annualMileage * drivingCostPerMile;
          const annualParkingCost = (parkingCost * 12) / 2;
          annualCommuteCost = annualFuelCost + annualParkingCost;
        }
      }

      const totalCostPhiladelphia = Math.round(annualIncome * residentRate);
      
      let totalCostSuburb = 0;
      if (workLocation === 'suburb' || workLocation === 'remote') {
        totalCostSuburb = 0;
      } else {
        totalCostSuburb = Math.round(annualIncome * nonResidentRate + annualCommuteCost);
      }

      const annualSavings = Math.abs(totalCostPhiladelphia - totalCostSuburb);
      const monthlySavings = Math.round(annualSavings / 12);
      const fiveYearSavings = Math.round(annualSavings * 5);

      let recommendation = '';
      if (totalCostPhiladelphia < totalCostSuburb) {
        recommendation = `Live in Philadelphia - Save $${annualSavings.toLocaleString()}/year. Wage tax is offset by zero commute costs and urban lifestyle benefits.`;
      } else if (totalCostSuburb < totalCostPhiladelphia) {
        recommendation = `Live in Suburbs - Save $${annualSavings.toLocaleString()}/year. ${workLocation === 'suburb' || workLocation === 'remote' ? 'Working in suburbs/remote eliminates wage tax entirely.' : 'Lower wage tax rate and commute costs make suburbs more affordable.'}`;
      } else {
        recommendation = 'Financial tie - Base decision on lifestyle preferences, schools, and non-financial factors.';
      }

      return {
        philadelphiaWageTax: Math.round(philadelphiaWageTax),
        annualCommuteCost: Math.round(annualCommuteCost),
        totalCostPhiladelphia,
        totalCostSuburb,
        annualSavings: Math.round(annualSavings),
        monthlySavings,
        fiveYearSavings,
        recommendation,
      };
    }
  }
};
