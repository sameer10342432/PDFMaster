import { CalculatorContent } from '@/types';

export const VIRGINIA_CAR_TAX_PERSONAL_PROPERTY_HOUSING_TOOL_CONTENT: CalculatorContent = {
  title: 'Virginia Car Tax Personal Property Housing Tool',
  description: 'Calculate Virginia personal property tax on vehicles and understand car tax relief - rates, exemptions, and housing impact',
  slug: 'virginia-car-tax-personal-property-housing-tool',
  icon: '🚗',
  category: 'Tax Calculators',
  article: {
    title: 'Understanding Virginia Personal Property Tax (Car Tax)',
    content: `
    <h2>Virginia Personal Property Tax Complete Guide</h2>
    <p>Virginia's personal property tax - commonly called the "car tax" - is a local tax on vehicles and other tangible personal property. With rates varying from $1.50 to $5.00 per $100 of assessed value across Virginia localities, the car tax can add $500-$2,500+ annually to vehicle ownership costs and is a significant factor when choosing where to live in Virginia.</p>
    
    <h3>What is Virginia Personal Property Tax?</h3>
    <p>Personal property tax applies to tangible movable property:</p>
    <ul>
      <li><strong>Vehicles:</strong> Cars, trucks, motorcycles, trailers</li>
      <li><strong>Boats:</strong> Personal watercraft and boats</li>
      <li><strong>Aircraft:</strong> Private planes and helicopters</li>
      <li><strong>RVs/Campers:</strong> Recreational vehicles</li>
      <li><strong>Business Property:</strong> Equipment, furniture, computers (for businesses)</li>
      <li><strong>Annual Tax:</strong> Assessed and paid annually based on value</li>
    </ul>
    
    <h3>How Personal Property Tax is Calculated</h3>
    <p>Virginia localities use this formula:</p>
    <ol>
      <li><strong>Determine Value:</strong> Vehicle value based on pricing guides (NADA, Kelley Blue Book)</li>
      <li><strong>Apply Assessment Percentage:</strong> Most localities assess at 100% of value</li>
      <li><strong>Calculate Tax:</strong> Assessed value × (tax rate / 100)</li>
      <li><strong>Apply Relief:</strong> Subtract car tax relief (if eligible)</li>
    </ol>
    <p><strong>Example:</strong> $30,000 vehicle in Fairfax County:<br>
    $30,000 × 4.57% = $1,371<br>
    Less car tax relief: -$686<br>
    Net tax: $685</p>
    
    <h3>Virginia Personal Property Tax Rates by Locality</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Locality</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Rate per $100</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Tax on $30K Car</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">After Relief</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fairfax County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.57</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,371</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$685</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Arlington County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$750</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Alexandria City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$5.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$750</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Loudoun County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.20</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,260</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$630</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Prince William County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.70</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,110</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$555</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Richmond City</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3.60</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,080</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$540</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Virginia Beach</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Chesapeake</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4.00</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$600</td>
      </tr>
    </table>
    
    <h3>Car Tax Relief Program</h3>
    <p>Virginia's state-funded personal property tax relief:</p>
    <ul>
      <li><strong>Eligibility:</strong> Personal-use vehicles under 10,000 lbs (cars, trucks, motorcycles, etc.)</li>
      <li><strong>First $20,000:</strong> Relief applies to first $20,000 of vehicle value</li>
      <li><strong>Percentage:</strong> State reimburses localities, which provide credit to taxpayers
        <ul>
          <li>Most localities: 33-50% relief</li>
          <li>Some localities: Up to 70% relief on first $20K</li>
        </ul>
      </li>
      <li><strong>Not Available For:</strong> Business vehicles, vehicles over 10,000 lbs, RVs, boats</li>
      <li><strong>Automatic:</strong> Applied automatically if you qualify</li>
    </ul>
    
    <h3>Car Tax Relief by Locality</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Locality</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Relief Percentage</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Fairfax County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On first $20,000 of value</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Arlington County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On first $20,000 of value</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Loudoun County</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On first $20,000 of value</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Prince William</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On first $20,000 of value</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Richmond City</td>
        <td style="border: 1px solid #ddd; padding: 8px;">50%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On first $20,000 of value</td>
      </tr>
    </table>
    
    <h3>How Car Tax Affects Housing Decisions</h3>
    <p>Personal property tax is a major cost-of-living factor in Virginia:</p>
    <ul>
      <li><strong>Northern Virginia High:</strong> Combined with high housing costs, NoVA has some of highest living expenses</li>
      <li><strong>Two-Car Family:</strong> $1,000-$2,000 annual car tax for typical household</li>
      <li><strong>Luxury Vehicles:</strong> High-value vehicles can pay $3,000+ annually in car tax</li>
      <li><strong>Moving Considerations:</strong> Lower car tax localities can save $500-$1,000/year per vehicle</li>
      <li><strong>Budget Impact:</strong> Car tax often forgotten in cost-of-living calculations</li>
    </ul>
    
    <h3>Personal Property Tax on Other Items</h3>
    <p>Beyond vehicles, Virginia localities tax:</p>
    <ul>
      <li><strong>Boats and Watercraft:</strong> Taxed like vehicles (no car tax relief)</li>
      <li><strong>Aircraft:</strong> Private planes subject to personal property tax</li>
      <li><strong>Trailers:</strong> Utility and boat trailers taxable</li>
      <li><strong>Business Personal Property:</strong> Equipment, furniture, computers
        <ul>
          <li>Separate filing required for businesses</li>
          <li>Professional appraisal sometimes required</li>
          <li>Depreciation schedules applied</li>
        </ul>
      </li>
    </ul>
    
    <h3>Situs (Where to Pay Personal Property Tax)</h3>
    <p>Determining which locality gets your car tax:</p>
    <ul>
      <li><strong>Primary Rule:</strong> Vehicle taxed where it is "normally garaged"</li>
      <li><strong>January 1 Situs Date:</strong> Where vehicle located on January 1 determines jurisdiction</li>
      <li><strong>Move During Year:</strong> Must notify both old and new locality</li>
      <li><strong>Prorated:</strong> Some localities prorate for partial-year residents</li>
      <li><strong>College Students:</strong> Vehicle typically taxed at school address, not parents' home</li>
      <li><strong>Military:</strong> Active duty can claim home of record for tax purposes</li>
    </ul>
    
    <h3>Personal Property Tax Payment Deadlines</h3>
    <p>When car tax is due in Virginia:</p>
    <ul>
      <li><strong>Bills Mailed:</strong> April/May for most localities</li>
      <li><strong>Due Date:</strong> Varies by locality
        <ul>
          <li>Fairfax County: October 5</li>
          <li>Arlington: October 5</li>
          <li>Richmond: June 15 and December 15 (semi-annual)</li>
        </ul>
      </li>
      <li><strong>Penalties:</strong> 10% penalty plus 10% interest per year if late</li>
      <li><strong>Payment Options:</strong> Online, mail, in-person at treasurer's office</li>
    </ul>
    
    <h3>Qualifying for Car Tax Relief</h3>
    <p>Requirements to receive personal property tax relief:</p>
    <ul>
      <li><strong>Personal Use:</strong> Vehicle used for personal (not business) purposes</li>
      <li><strong>Weight Limit:</strong> Under 10,000 lbs gross vehicle weight</li>
      <li><strong>Registered Owner:</strong> Must be registered in your name</li>
      <li><strong>Primary Vehicle:</strong> Some localities limit relief to primary vehicle only</li>
      <li><strong>Proof of Use:</strong> May need to certify personal use</li>
    </ul>
    
    <h3>High-Value Vehicle Considerations</h3>
    <p>Luxury and expensive vehicles face higher tax burden:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Vehicle Value</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Fairfax County Tax</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Arlington County Tax</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$457 (with relief)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$500 (with relief)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$50,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,828 (relief on first $20K)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$100,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,113</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,500</td>
      </tr>
    </table>
    
    <h3>Appealing Your Vehicle Assessment</h3>
    <p>How to challenge if you believe value is too high:</p>
    <ol>
      <li><strong>Review Bill:</strong> Check assessed value against current market guides</li>
      <li><strong>Gather Evidence:</strong> Recent appraisals, dealer quotes, condition documentation</li>
      <li><strong>File Appeal:</strong> Submit appeal to commissioner of revenue within deadline</li>
      <li><strong>Provide Documentation:</strong> Photos of damage, repair records, mileage verification</li>
      <li><strong>Hearing:</strong> Present case if required</li>
      <li><strong>Timeline:</strong> Usually 30-60 days from bill date to file</li>
    </ol>
    
    <h3>Military Personnel Exemptions</h3>
    <p>Special rules for active duty military:</p>
    <ul>
      <li><strong>Home of Record:</strong> Can claim home state for tax purposes under SCRA</li>
      <li><strong>Virginia Residents:</strong> VA active duty military pay normal car tax in home locality</li>
      <li><strong>Non-VA Military:</strong> Stationed in VA but home of record elsewhere may be exempt</li>
      <li><strong>100% Disabled Veterans:</strong> Many localities exempt disabled vets from car tax</li>
      <li><strong>Documentation:</strong> Must provide military orders and home of record proof</li>
    </ul>
    
    <h3>Disabled Person Exemptions</h3>
    <p>Tax relief for disabled individuals:</p>
    <ul>
      <li><strong>100% Disabled Veterans:</strong> Full exemption in most localities</li>
      <li><strong>Specially Equipped Vehicles:</strong> Vehicles modified for disabilities may be exempt</li>
      <li><strong>Application Required:</strong> Must apply annually with disability documentation</li>
      <li><strong>Income Limits:</strong> Some localities have income restrictions</li>
    </ul>
    
    <h3>Antique Vehicle Exemptions</h3>
    <p>Special treatment for vintage cars:</p>
    <ul>
      <li><strong>Antique Registration:</strong> Vehicles 25+ years old can get antique plates</li>
      <li><strong>Lower Assessment:</strong> Fixed value assessment (typically $500-$1,000)</li>
      <li><strong>Usage Restrictions:</strong> Limited to exhibitions, parades, club events</li>
      <li><strong>Not Daily Driver:</strong> Cannot be used for regular transportation</li>
    </ul>
    
    <h3>Leased Vehicles and Car Tax</h3>
    <p>Who pays tax on leased vehicles:</p>
    <ul>
      <li><strong>Lessee Responsibility:</strong> Person leasing the vehicle pays the personal property tax</li>
      <li><strong>Full Value:</strong> Tax based on full vehicle value, not just lease amount</li>
      <li><strong>Relief Eligible:</strong> Leased personal-use vehicles qualify for car tax relief</li>
      <li><strong>Lease End:</strong> Must notify locality when lease ends to avoid continued billing</li>
    </ul>
    
    <h3>Impact on Total Cost of Vehicle Ownership</h3>
    <p>Car tax as part of total ownership costs:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Cost Component</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Annual Cost ($30K Car)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Insurance</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Personal Property Tax (Fairfax)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$685</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Gas & Maintenance</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Registration/Inspection</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$60</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Total Annual</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$4,445</strong></td>
      </tr>
    </table>
    `
  },
  calculator: {
    fields: [
      {
        name: 'vehicleValue',
        label: 'Vehicle Value',
        type: 'currency',
        required: true,
        placeholder: '30000',
        helpText: 'Current market value (NADA, Kelley Blue Book)'
      },
      {
        name: 'locality',
        label: 'Virginia Locality',
        type: 'select',
        required: true,
        options: [
          { value: 'fairfax', label: 'Fairfax County' },
          { value: 'arlington', label: 'Arlington County' },
          { value: 'alexandria', label: 'Alexandria City' },
          { value: 'loudoun', label: 'Loudoun County' },
          { value: 'princeWilliam', label: 'Prince William County' },
          { value: 'richmond', label: 'Richmond City' },
          { value: 'virginiaBeach', label: 'Virginia Beach' },
          { value: 'chesapeake', label: 'Chesapeake' },
        ],
        helpText: 'Tax rate varies significantly by locality'
      },
      {
        name: 'vehicleType',
        label: 'Vehicle Use',
        type: 'select',
        required: true,
        options: [
          { value: 'personal', label: 'Personal Use (qualifies for relief)' },
          { value: 'business', label: 'Business Use (no relief)' },
          { value: 'heavyTruck', label: 'Truck over 10,000 lbs (no relief)' },
        ],
        helpText: 'Personal use vehicles under 10,000 lbs get car tax relief'
      },
      {
        name: 'numberOfVehicles',
        label: 'Number of Vehicles',
        type: 'select',
        required: true,
        options: [
          { value: '1', label: '1 Vehicle' },
          { value: '2', label: '2 Vehicles' },
          { value: '3', label: '3 Vehicles' },
          { value: '4', label: '4+ Vehicles' },
        ],
        helpText: 'Calculate total household car tax burden'
      }
    ],
    results: [
      {
        name: 'taxBeforeRelief',
        label: 'Tax Before Relief',
        type: 'currency',
        helpText: 'Total tax without car tax relief'
      },
      {
        name: 'carTaxRelief',
        label: 'Car Tax Relief',
        type: 'currency',
        helpText: 'Amount of state car tax relief'
      },
      {
        name: 'netTaxPerVehicle',
        label: 'Net Tax Per Vehicle',
        type: 'currency',
        helpText: 'Annual tax after relief per vehicle'
      },
      {
        name: 'totalHouseholdTax',
        label: 'Total Household Car Tax',
        type: 'currency',
        helpText: 'Total annual car tax for all vehicles'
      },
      {
        name: 'effectiveRate',
        label: 'Effective Tax Rate',
        type: 'text',
        helpText: 'Actual tax rate after relief'
      },
      {
        name: 'comparisonToNearby',
        label: 'Comparison to Nearby Localities',
        type: 'text',
        helpText: 'How your locality compares to neighboring areas'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const vehicleValue = parseFloat(inputs.vehicleValue) || 0;
      const locality = inputs.locality || 'fairfax';
      const vehicleType = inputs.vehicleType || 'personal';
      const numberOfVehicles = parseInt(inputs.numberOfVehicles) || 1;

      // Tax rates per $100 of value
      let taxRate = 0.0457; // 4.57% Fairfax default
      switch (locality) {
        case 'fairfax':
          taxRate = 0.0457;
          break;
        case 'arlington':
        case 'alexandria':
          taxRate = 0.05;
          break;
        case 'loudoun':
          taxRate = 0.042;
          break;
        case 'princeWilliam':
          taxRate = 0.037;
          break;
        case 'richmond':
          taxRate = 0.036;
          break;
        case 'virginiaBeach':
        case 'chesapeake':
          taxRate = 0.04;
          break;
      }

      const taxBeforeRelief = Math.round(vehicleValue * taxRate);

      // Car tax relief - 50% on first $20,000 for personal use vehicles
      let carTaxRelief = 0;
      if (vehicleType === 'personal') {
        const reliefValue = Math.min(vehicleValue, 20000);
        carTaxRelief = Math.round((reliefValue * taxRate) * 0.50);
      }

      const netTaxPerVehicle = taxBeforeRelief - carTaxRelief;
      const totalHouseholdTax = netTaxPerVehicle * numberOfVehicles;

      const effectiveRate = vehicleValue > 0 ? 
        ((netTaxPerVehicle / vehicleValue) * 100).toFixed(2) + '%' : '0%';

      // Comparison to nearby localities
      let comparisonToNearby = '';
      const localityRates: Record<string, number> = {
        fairfax: 0.0457,
        arlington: 0.05,
        alexandria: 0.05,
        loudoun: 0.042,
        princeWilliam: 0.037,
        richmond: 0.036,
        virginiaBeach: 0.04,
        chesapeake: 0.04
      };

      const currentRate = taxRate;
      const nearbyRates = Object.entries(localityRates)
        .filter(([key]) => key !== locality)
        .sort((a, b) => a[1] - b[1]);
      
      const lowestRate = nearbyRates[0];
      const highestRate = nearbyRates[nearbyRates.length - 1];
      
      if (currentRate <= lowestRate[1]) {
        comparisonToNearby = 'Lowest rate among major VA localities';
      } else if (currentRate >= highestRate[1]) {
        comparisonToNearby = 'Highest rate among major VA localities';
      } else {
        const belowCount = nearbyRates.filter(([, rate]) => rate < currentRate).length;
        comparisonToNearby = `Middle range - lower than ${nearbyRates.length - belowCount} localities, higher than ${belowCount}`;
      }

      return {
        taxBeforeRelief,
        carTaxRelief,
        netTaxPerVehicle,
        totalHouseholdTax,
        effectiveRate,
        comparisonToNearby
      };
    }
  }
};
