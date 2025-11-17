import { CalculatorContent } from '@/types';

export const MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Maryland "Rain Tax" (Stormwater Fee) Estimator',
  description: 'Calculate Maryland stormwater management fees (commonly called "rain tax") based on property size, impervious surfaces, and county. Estimate annual fees and understand reduction strategies.',
  slug: 'maryland-rain-tax-stormwater-fee-estimator',
  icon: '🌧️',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Maryland Stormwater Management Fees ("Rain Tax")',
    content: `
    <h2>Maryland Stormwater Management Fee Guide</h2>
    <p>Maryland's <strong>"Rain Tax"</strong> (officially the Stormwater Remediation Fee) is a controversial fee charged to property owners in the Chesapeake Bay watershed based on <strong>impervious surfaces</strong> on their property. Implemented in 2013, this fee funds stormwater management infrastructure to reduce pollution runoff into the Chesapeake Bay.</p>
    
    <h3>What is the Maryland Rain Tax?</h3>
    <p>The stormwater fee is based on how much impervious surface (roofs, driveways, patios) your property has:</p>
    <ul>
      <li><strong>Official Name:</strong> Stormwater Remediation Fee / Stormwater Management Fee</li>
      <li><strong>Basis:</strong> Square footage of impervious surfaces (surfaces that don't absorb rainwater)</li>
      <li><strong>Who Pays:</strong> Residential and commercial property owners in 9 Maryland counties + Baltimore City</li>
      <li><strong>Purpose:</strong> Fund stormwater infrastructure to meet EPA Chesapeake Bay cleanup requirements</li>
      <li><strong>Typical Cost:</strong> $50-$300 annually for residential properties</li>
    </ul>
    
    <h3>Which Maryland Counties Have the Rain Tax?</h3>
    <p>The fee applies to the 10 jurisdictions in the Chesapeake Bay watershed:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Jurisdiction</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Avg Residential Fee</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fee Structure</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Anne Arundel County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$120/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Baltimore City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$162/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tiered by impervious area</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Baltimore County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$75/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Carroll County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">REPEALED 2014</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No longer charged</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Charles County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$65/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flat rate residential</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Frederick County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$110/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Harford County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$90/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Howard County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$125/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tiered by impervious area</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$102/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Prince George's County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$95/year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on impervious area</td>
      </tr>
    </table>
    
    <h3>What are Impervious Surfaces?</h3>
    <p>Impervious surfaces are hard surfaces that prevent rainwater from soaking into the ground:</p>
    <ul>
      <li><strong>Rooftops:</strong> Home, garage, shed roofs</li>
      <li><strong>Driveways:</strong> Concrete or asphalt driveways</li>
      <li><strong>Patios:</strong> Concrete, brick, or stone patios</li>
      <li><strong>Parking Areas:</strong> Paved parking pads</li>
      <li><strong>Pool Decks:</strong> Concrete pool surrounds</li>
      <li><strong>Walkways:</strong> Paved sidewalks and paths</li>
    </ul>
    
    <p><strong>Pervious (Not Taxed):</strong></p>
    <ul>
      <li>Lawns and grass areas</li>
      <li>Garden beds and landscaping</li>
      <li>Gravel driveways (water permeable)</li>
      <li>Permeable pavers</li>
    </ul>
    
    <h3>How the Fee is Calculated</h3>
    <p>Most counties use an Equivalent Residential Unit (ERU) system:</p>
    <ul>
      <li><strong>ERU Standard:</strong> ~2,500-3,000 sq ft of impervious surface = 1 ERU</li>
      <li><strong>Base Fee:</strong> Each county sets a dollar amount per ERU</li>
      <li><strong>Your Fee:</strong> (Your impervious sq ft ÷ ERU size) × Base fee per ERU</li>
    </ul>
    
    <p><strong>Example (Montgomery County):</strong></p>
    <ul>
      <li>Your home: 2,000 sq ft roof + 600 sq ft driveway + 400 sq ft patio = 3,000 sq ft impervious</li>
      <li>ERU Standard: 2,940 sq ft</li>
      <li>Your ERUs: 3,000 ÷ 2,940 = 1.02 ERUs</li>
      <li>Fee per ERU: $100</li>
      <li><strong>Annual Fee:</strong> 1.02 × $100 = <strong>$102</strong></li>
    </ul>
    
    <h3>Typical Residential Property Breakdown</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Impervious Sq Ft</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">ERUs</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Est. Annual Fee</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Small Townhouse</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1,800</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.6</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$60-$75</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Average Single-Family Home</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.1</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$110-$135</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Large Home with Pool</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">5,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">1.8</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$180-$220</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">McMansion with Extensive Hardscaping</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">2.7</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$270-$330</td>
      </tr>
    </table>
    
    <h3>How to Reduce Your Rain Tax</h3>
    <p>Many counties offer fee credits for stormwater management improvements:</p>
    <ul>
      <li><strong>Rain Barrels:</strong> 5-10% reduction (collect roof runoff)</li>
      <li><strong>Rain Gardens:</strong> 10-25% reduction (native plants absorb runoff)</li>
      <li><strong>Permeable Pavers:</strong> 20-40% reduction (replace concrete with permeable surfaces)</li>
      <li><strong>Green Roofs:</strong> 30-50% reduction (vegetated roofs absorb water)</li>
      <li><strong>Cisterns:</strong> 15-30% reduction (underground water storage)</li>
      <li><strong>Disconnect Downspouts:</strong> 5-15% reduction (direct to pervious areas instead of storm drains)</li>
    </ul>
    
    <h3>Stormwater Credit Programs by County</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Max Residential Credit</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Application Required</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Anne Arundel</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50% reduction</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes - with site inspection</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Baltimore City</td>
        <td style="border: 1px solid #ddd; padding: 8px;">75% reduction</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes - detailed stormwater plan</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Howard</td>
        <td style="border: 1px solid #ddd; padding: 8px;">60% reduction</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes - engineered plan required</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Montgomery</td>
        <td style="border: 1px solid #ddd; padding: 8px;">100% waiver possible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes - comprehensive management plan</td>
      </tr>
    </table>
    
    <h3>Commercial Properties Pay Much More</h3>
    <p>Commercial properties with large parking lots face substantial fees:</p>
    <ul>
      <li><strong>Small Strip Mall:</strong> $2,000-$5,000 annually</li>
      <li><strong>Large Shopping Center:</strong> $15,000-$50,000 annually</li>
      <li><strong>Office Park:</strong> $10,000-$30,000 annually</li>
      <li><strong>Industrial Facility:</strong> $25,000-$100,000+ annually</li>
    </ul>
    
    <h3>History and Controversy</h3>
    <p>The Maryland rain tax has been politically contentious since its inception:</p>
    <ul>
      <li><strong>2012:</strong> Maryland General Assembly passes Stormwater Management – Watershed Protection and Restoration Program</li>
      <li><strong>2013:</strong> All 10 jurisdictions implement fees</li>
      <li><strong>2014:</strong> Carroll County repeals its fee under political pressure</li>
      <li><strong>2015:</strong> Harford County reduces fees substantially</li>
      <li><strong>2016-Present:</strong> Ongoing debates about repeal vs. modification</li>
    </ul>
    
    <h3>Why Maryland Implemented the Rain Tax</h3>
    <p>Federal and state mandates drove the creation of this fee:</p>
    <ul>
      <li><strong>EPA Requirements:</strong> Clean Water Act mandates to clean up Chesapeake Bay</li>
      <li><strong>Pollution Reduction Targets:</strong> Must reduce nitrogen, phosphorus, sediment runoff</li>
      <li><strong>Funding Shortfall:</strong> Estimated $15 billion needed for stormwater infrastructure</li>
      <li><strong>Fee-Based Funding:</strong> User-pays model rather than general tax increase</li>
    </ul>
    
    <h3>How the Fee is Billed and Collected</h3>
    <p>Collection methods vary by county:</p>
    <ul>
      <li><strong>Property Tax Bill:</strong> Most counties include it on annual property tax bill</li>
      <li><strong>Separate Bill:</strong> Some counties send standalone stormwater bill</li>
      <li><strong>Quarterly Billing:</strong> A few jurisdictions bill quarterly</li>
      <li><strong>Penalties:</strong> Late fees and interest similar to property taxes</li>
    </ul>
    
    <h3>Exemptions and Hardship Relief</h3>
    <p>Limited exemptions available:</p>
    <ul>
      <li><strong>Low-Income Exemption:</strong> Some counties waive fees for seniors/disabled with income under thresholds</li>
      <li><strong>Agricultural Land:</strong> Working farms may be exempt</li>
      <li><strong>Non-Profit Organizations:</strong> Some counties exempt religious/charitable properties</li>
      <li><strong>Government Property:</strong> State/federal buildings generally exempt</li>
    </ul>
    
    <h3>Impact on Home Values</h3>
    <p>The rain tax's effect on Maryland real estate:</p>
    <ul>
      <li><strong>Modest Impact:</strong> $50-$150 annual fee has minimal effect on property values</li>
      <li><strong>Disclosure:</strong> Not typically disclosed in home sales (part of general taxes/fees)</li>
      <li><strong>Commercial Impact:</strong> More significant for commercial buyers evaluating operating costs</li>
      <li><strong>Green Infrastructure Premium:</strong> Homes with rain gardens/permeable surfaces may attract eco-conscious buyers</li>
    </ul>
    
    <h3>DIY Rain Tax Reduction Projects</h3>
    
    <p><strong>Rain Barrel Installation ($100-$200 cost, 5-10% reduction):</strong></p>
    <ol>
      <li>Purchase 50-80 gallon rain barrel</li>
      <li>Install under downspout</li>
      <li>Use collected water for garden irrigation</li>
      <li>Apply for credit with photos and receipts</li>
      <li><strong>ROI:</strong> Payback in 2-4 years</li>
    </ol>
    
    <p><strong>Rain Garden Creation ($500-$1,500 cost, 15-25% reduction):</strong></p>
    <ol>
      <li>Identify low-lying area in yard</li>
      <li>Dig shallow depression (6-12 inches)</li>
      <li>Add native plants that tolerate wet/dry cycles</li>
      <li>Direct downspouts to rain garden</li>
      <li><strong>ROI:</strong> Payback in 5-10 years + landscaping benefit</li>
    </ol>
    
    <h3>Appealing Your Fee Assessment</h3>
    <p>If you believe your impervious surface calculation is wrong:</p>
    <ol>
      <li><strong>Request Documentation:</strong> Ask county for their impervious surface calculation</li>
      <li><strong>Get Survey:</strong> Hire surveyor to measure actual impervious surfaces</li>
      <li><strong>File Appeal:</strong> Submit appeal with supporting documentation</li>
      <li><strong>Timeline:</strong> Most counties allow 60-90 days to appeal</li>
      <li><strong>Success Rate:</strong> ~30% of appeals result in fee reduction</li>
    </ol>
    
    <h3>Future of Maryland Rain Tax</h3>
    <p>Outlook for the stormwater fee:</p>
    <ul>
      <li><strong>Unlikely Repeal:</strong> EPA mandates require continued funding</li>
      <li><strong>Possible Rate Increases:</strong> Infrastructure costs rising</li>
      <li><strong>Expanded Credits:</strong> More counties offering green infrastructure incentives</li>
      <li><strong>Political Pressure:</strong> Remains contentious election issue</li>
    </ul>
    
    <h3>Comparison to Other States</h3>
    <p>Maryland isn't alone in charging stormwater fees:</p>
    <ul>
      <li><strong>Pennsylvania:</strong> Philadelphia charges $13.95/month stormwater fee</li>
      <li><strong>Virginia:</strong> Multiple jurisdictions have stormwater utilities</li>
      <li><strong>Washington:</strong> Seattle charges ~$500/year for average home</li>
      <li><strong>Oregon:</strong> Portland area stormwater fees ~$300/year</li>
    </ul>
    
    <h3>Resources</h3>
    <ul>
      <li><strong>Maryland Department of the Environment:</strong> mde.maryland.gov - Stormwater program information</li>
      <li><strong>County Stormwater Offices:</strong> Contact for fee calculations and credit applications</li>
      <li><strong>Chesapeake Bay Foundation:</strong> cbf.org - Educational resources on stormwater management</li>
      <li><strong>Rain Garden Guide:</strong> Free design templates and plant lists</li>
      <li><strong>Fee Credit Applications:</strong> Available through county stormwater management offices</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'county',
        label: 'Maryland County',
        type: 'select',
        required: true,
        options: [
          { value: 'anne-arundel', label: 'Anne Arundel County' },
          { value: 'baltimore-city', label: 'Baltimore City' },
          { value: 'baltimore-county', label: 'Baltimore County' },
          { value: 'charles', label: 'Charles County' },
          { value: 'frederick', label: 'Frederick County' },
          { value: 'harford', label: 'Harford County' },
          { value: 'howard', label: 'Howard County' },
          { value: 'montgomery', label: 'Montgomery County' },
          { value: 'prince-georges', label: "Prince George's County" },
        ],
        helpText: 'Select your Maryland county'
      },
      {
        name: 'roofArea',
        label: 'Roof Area (sq ft)',
        type: 'number',
        required: true,
        placeholder: '2000',
        helpText: 'Total square footage of all roofs (house, garage, sheds)'
      },
      {
        name: 'drivewayArea',
        label: 'Driveway/Parking Area (sq ft)',
        type: 'number',
        required: true,
        placeholder: '600',
        helpText: 'Paved driveway and parking areas'
      },
      {
        name: 'patioArea',
        label: 'Patio/Deck Area (sq ft)',
        type: 'number',
        required: false,
        placeholder: '400',
        helpText: 'Concrete, brick, or stone patios and decks'
      },
      {
        name: 'walkwayArea',
        label: 'Walkway/Sidewalk Area (sq ft)',
        type: 'number',
        required: false,
        placeholder: '200',
        helpText: 'Paved walkways and sidewalks'
      },
      {
        name: 'poolArea',
        label: 'Pool/Pool Deck Area (sq ft)',
        type: 'number',
        required: false,
        placeholder: '0',
        helpText: 'Pool and surrounding hardscape'
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        required: true,
        options: [
          { value: 'residential', label: 'Residential' },
          { value: 'commercial', label: 'Commercial' },
        ],
        helpText: 'Is this a residential or commercial property?'
      },
      {
        name: 'rainBarrels',
        label: 'Rain Barrels Installed',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'None' },
          { value: '1-2', label: '1-2 Rain Barrels' },
          { value: '3+', label: '3+ Rain Barrels' },
        ],
        helpText: 'Number of rain barrels collecting roof runoff'
      },
      {
        name: 'rainGarden',
        label: 'Rain Garden',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Rain Garden' },
          { value: 'small', label: 'Small Rain Garden (<100 sq ft)' },
          { value: 'large', label: 'Large Rain Garden (100+ sq ft)' },
        ],
        helpText: 'Do you have a rain garden installed?'
      },
      {
        name: 'permeablePavers',
        label: 'Permeable Pavers/Surfaces',
        type: 'select',
        required: false,
        options: [
          { value: 'none', label: 'No Permeable Surfaces' },
          { value: 'partial', label: 'Some Permeable Pavers (driveway/patio)' },
          { value: 'extensive', label: 'Extensive Permeable Hardscaping' },
        ],
        helpText: 'Do you have permeable pavers instead of concrete?'
      }
    ],
    results: [
      {
        name: 'totalImperviousArea',
        label: 'Total Impervious Surface Area',
        type: 'text',
        helpText: 'Total square footage of non-permeable surfaces'
      },
      {
        name: 'eruCalculation',
        label: 'Equivalent Residential Units (ERUs)',
        type: 'text',
        helpText: 'Your property size in ERUs (billing units)'
      },
      {
        name: 'baseFee',
        label: 'Base Annual Stormwater Fee',
        type: 'currency',
        helpText: 'Annual fee before any credits or reductions'
      },
      {
        name: 'creditAmount',
        label: 'Credit from Green Infrastructure',
        type: 'currency',
        helpText: 'Fee reduction from rain barrels, gardens, etc.'
      },
      {
        name: 'netAnnualFee',
        label: 'Net Annual Stormwater Fee',
        type: 'currency',
        helpText: 'Your actual annual fee after credits'
      },
      {
        name: 'monthlyFee',
        label: 'Monthly Fee',
        type: 'currency',
        helpText: 'Monthly portion of stormwater fee'
      },
      {
        name: 'tenYearCost',
        label: '10-Year Total Cost',
        type: 'currency',
        helpText: 'Total cost over 10 years (assuming 3% annual increase)'
      },
      {
        name: 'recommendation',
        label: 'Fee Reduction Recommendation',
        type: 'text',
        helpText: 'Suggested improvements to reduce your rain tax'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const county = inputs.county || 'montgomery';
      const roofArea = parseFloat(inputs.roofArea) || 0;
      const drivewayArea = parseFloat(inputs.drivewayArea) || 0;
      const patioArea = parseFloat(inputs.patioArea) || 0;
      const walkwayArea = parseFloat(inputs.walkwayArea) || 0;
      const poolArea = parseFloat(inputs.poolArea) || 0;
      const propertyType = inputs.propertyType || 'residential';
      const rainBarrels = inputs.rainBarrels || 'none';
      const rainGarden = inputs.rainGarden || 'none';
      const permeablePavers = inputs.permeablePavers || 'none';

      const eruSizes: Record<string, number> = {
        'anne-arundel': 2900,
        'baltimore-city': 2940,
        'baltimore-county': 2900,
        'charles': 2500,
        'frederick': 3000,
        'harford': 2850,
        'howard': 2940,
        'montgomery': 2940,
        'prince-georges': 2800,
      };

      const feePerERU: Record<string, number> = {
        'anne-arundel': 120,
        'baltimore-city': 162,
        'baltimore-county': 75,
        'charles': 65,
        'frederick': 110,
        'harford': 90,
        'howard': 125,
        'montgomery': 102,
        'prince-georges': 95,
      };

      const totalImperviousArea = roofArea + drivewayArea + patioArea + walkwayArea + poolArea;
      
      const eruSize = eruSizes[county] || 2940;
      const eruCalculation = totalImperviousArea / eruSize;
      
      const feeRate = feePerERU[county] || 100;
      let baseFee = eruCalculation * feeRate;
      
      if (propertyType === 'commercial') {
        baseFee = baseFee * 1.5;
      }

      let creditPercent = 0;
      if (rainBarrels === '1-2') creditPercent += 5;
      if (rainBarrels === '3+') creditPercent += 10;
      if (rainGarden === 'small') creditPercent += 15;
      if (rainGarden === 'large') creditPercent += 25;
      if (permeablePavers === 'partial') creditPercent += 20;
      if (permeablePavers === 'extensive') creditPercent += 40;

      creditPercent = Math.min(creditPercent, 75);

      const creditAmount = (baseFee * creditPercent) / 100;
      const netAnnualFee = baseFee - creditAmount;
      const monthlyFee = netAnnualFee / 12;

      let tenYearCost = 0;
      for (let year = 0; year < 10; year++) {
        tenYearCost += netAnnualFee * Math.pow(1.03, year);
      }

      let recommendation = '';
      if (creditPercent === 0) {
        recommendation = `Consider installing rain barrels (5-10% reduction) or a rain garden (15-25% reduction) to reduce your fee by $${Math.round((baseFee * 0.15)).toLocaleString()}-$${Math.round((baseFee * 0.35)).toLocaleString()} annually.`;
      } else if (creditPercent < 30) {
        recommendation = `Good start! You're receiving ${creditPercent}% reduction. Add more green infrastructure (permeable pavers, larger rain garden) to increase credits up to 75%.`;
      } else {
        recommendation = `Excellent! You're receiving ${creditPercent}% reduction ($${Math.round(creditAmount).toLocaleString()}/year savings). You're maximizing available credits.`;
      }

      return {
        totalImperviousArea: `${Math.round(totalImperviousArea).toLocaleString()} sq ft`,
        eruCalculation: eruCalculation.toFixed(2),
        baseFee: Math.round(baseFee),
        creditAmount: Math.round(creditAmount),
        netAnnualFee: Math.round(netAnnualFee),
        monthlyFee: Math.round(monthlyFee),
        tenYearCost: Math.round(tenYearCost),
        recommendation,
      };
    }
  }
};
