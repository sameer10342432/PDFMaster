import { CalculatorContent } from '@/types';

export const PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Property Line (Encroachment) Analyzer',
  description: 'Identify and assess potential property line encroachment issues including fences, structures, driveways, and trees that cross boundary lines',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'property-line-encroachment-analyzer',
  article: {
    title: "Understanding Property Line Encroachments",
    content: `
    <h2>What is an Encroachment?</h2>
    <p>An encroachment occurs when a structure, improvement, or vegetation from one property physically crosses onto a neighboring property. Encroachments can cause legal disputes, affect property values, complicate sales, and even result in loss of property through adverse possession.</p>
    
    <h3>Common Types of Encroachments</h3>
    <ul>
      <li><strong>Fence Encroachments:</strong> Most common; fence built beyond property line
        <ul>
          <li>Often discovered during property survey</li>
          <li>Can establish adverse possession claims over time</li>
          <li>Resolution: Move fence, negotiate easement, or quit claim</li>
        </ul>
      </li>
      <li><strong>Building Encroachments:</strong> Structure extends onto neighbor's property
        <ul>
          <li>Severe issue; may require demolition or purchase of encroached land</li>
          <li>Common with garages, sheds, deck overhangs, eaves</li>
          <li>Title insurance often excludes known encroachments</li>
        </ul>
      </li>
      <li><strong>Driveway/Parking Encroachments:</strong> Paved areas crossing property lines
        <ul>
          <li>Expensive to remedy (removal and replacement)</li>
          <li>Often requires formal easement agreement</li>
          <li>Can affect property access and parking</li>
        </ul>
      </li>
      <li><strong>Landscaping Encroachments:</strong> Trees, bushes, garden beds
        <ul>
          <li>Tree roots and overhanging branches</li>
          <li>Generally easier to resolve than structural issues</li>
          <li>Some states allow neighbor to trim encroaching vegetation</li>
        </ul>
      </li>
      <li><strong>Utility Encroachments:</strong> Private utilities crossing property
        <ul>
          <li>Septic systems, wells, underground lines</li>
          <li>May require utility easement documentation</li>
          <li>Can limit development of both properties</li>
        </ul>
      </li>
    </ul>
    
    <h3>How Encroachments Are Discovered</h3>
    <ul>
      <li><strong>Property Survey:</strong> Professional land survey reveals exact boundaries
        <ul>
          <li>Highly recommended before purchase</li>
          <li>Cost: $400-$1,500 for residential property</li>
          <li>Shows structures, fences, and encroachments</li>
        </ul>
      </li>
      <li><strong>Title Search:</strong> May reveal recorded easements or disputes</li>
      <li><strong>Visual Inspection:</strong> Obvious misalignment of structures</li>
      <li><strong>Neighbor Disclosure:</strong> Previous disputes or awareness</li>
      <li><strong>Property Deed:</strong> Legal description and metes/bounds</li>
    </ul>
    
    <h3>Legal Implications</h3>
    <table>
      <tr>
        <th>Encroachment Type</th>
        <th>Severity</th>
        <th>Resolution Cost</th>
        <th>Legal Risk</th>
      </tr>
      <tr>
        <td>Minor Fence (< 6 inches)</td>
        <td>Low</td>
        <td>$500-$2,000</td>
        <td>Low - usually negotiable</td>
      </tr>
      <tr>
        <td>Major Fence (> 2 feet)</td>
        <td>Medium</td>
        <td>$1,500-$5,000</td>
        <td>Medium - adverse possession risk</td>
      </tr>
      <tr>
        <td>Driveway</td>
        <td>Medium-High</td>
        <td>$5,000-$20,000</td>
        <td>High - expensive to resolve</td>
      </tr>
      <tr>
        <td>Building (minor overhang)</td>
        <td>High</td>
        <td>$10,000-$50,000</td>
        <td>Very High - may block sale</td>
      </tr>
      <tr>
        <td>Building (major structure)</td>
        <td>Critical</td>
        <td>$25,000-$150,000+</td>
        <td>Critical - litigation likely</td>
      </tr>
      <tr>
        <td>Vegetation</td>
        <td>Low</td>
        <td>$200-$2,000</td>
        <td>Low - usually trimmed</td>
      </tr>
    </table>
    
    <h3>Resolution Options</h3>
    <ol>
      <li><strong>Mutual Agreement:</strong> Neighbors agree to accept encroachment
        <ul>
          <li>Document in writing (signed agreement)</li>
          <li>May require quit claim deed or easement</li>
          <li>Cheapest option if neighbor cooperates</li>
        </ul>
      </li>
      <li><strong>Purchase Encroached Land:</strong> Buy the affected strip from neighbor
        <ul>
          <li>Cost: Market value + legal fees ($2,000-$10,000+)</li>
          <li>Requires boundary line adjustment/lot line revision</li>
          <li>Permanent solution</li>
        </ul>
      </li>
      <li><strong>Grant Easement:</strong> Formalize encroachment with recorded easement
        <ul>
          <li>Allows structure to remain legally</li>
          <li>May require compensation to neighbor</li>
          <li>Recorded with property deed</li>
        </ul>
      </li>
      <li><strong>Remove/Relocate:</strong> Remove or move encroaching structure
        <ul>
          <li>Most expensive option</li>
          <li>Required if neighbor demands or for sale</li>
          <li>May be only option for major encroachments</li>
        </ul>
      </li>
      <li><strong>Litigation:</strong> Court action if no agreement possible
        <ul>
          <li>Last resort; expensive ($10,000-$100,000+)</li>
          <li>May result in forced removal or damages</li>
          <li>Can take 1-3 years to resolve</li>
        </ul>
      </li>
    </ol>
    
    <h3>Adverse Possession Risk</h3>
    <p>If an encroachment remains unchallenged for the statutory period (typically 7-20 years depending on state), the encroaching party may claim adverse possession and legally acquire the land. Requirements:</p>
    <ul>
      <li><strong>Open and Notorious:</strong> Visible and obvious use</li>
      <li><strong>Continuous:</strong> Uninterrupted for statutory period</li>
      <li><strong>Hostile:</strong> Without permission of true owner</li>
      <li><strong>Exclusive:</strong> Sole possession by claimant</li>
      <li><strong>Actual:</strong> Physical occupation/use of land</li>
    </ul>
    
    <h3>Impact on Property Transactions</h3>
    <ul>
      <li><strong>Title Insurance:</strong> Known encroachments are excluded from coverage</li>
      <li><strong>Lender Requirements:</strong> May refuse financing until resolved</li>
      <li><strong>Marketability:</strong> Reduces buyer pool and property value</li>
      <li><strong>Disclosure:</strong> Seller must disclose known encroachments (legal liability)</li>
      <li><strong>Sale Timeline:</strong> Can delay closing 30-90+ days for resolution</li>
    </ul>
    
    <h3>Prevention Strategies</h3>
    <ul>
      <li>Always get a professional survey before building</li>
      <li>Locate property pins/markers before installing fences</li>
      <li>Maintain good neighbor relations and communication</li>
      <li>Address encroachments immediately when discovered</li>
      <li>Keep property corners clearly marked</li>
      <li>Review surveys when purchasing property</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "encroachmentType",
        label: "Type of Encroachment",
        type: "select",
        options: [
          { label: "Fence (minor < 6 in)", value: "fence_minor" },
          { label: "Fence (major > 2 ft)", value: "fence_major" },
          { label: "Driveway/Paved Area", value: "driveway" },
          { label: "Building (eaves/overhang)", value: "building_minor" },
          { label: "Building (structure)", value: "building_major" },
          { label: "Landscaping/Vegetation", value: "vegetation" },
        ],
        defaultValue: "fence_minor",
      },
      {
        name: "encroachmentSize",
        label: "Encroachment Distance (feet)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "encroachmentLength",
        label: "Encroachment Length (feet)",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "yearsExisting",
        label: "Years Encroachment Has Existed",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "neighborAwareness",
        label: "Neighbor Awareness",
        type: "select",
        options: [
          { label: "Neighbor Unaware", value: "unaware" },
          { label: "Neighbor Aware - Friendly", value: "friendly" },
          { label: "Neighbor Aware - Disputes", value: "dispute" },
        ],
        defaultValue: "friendly",
      },
      {
        name: "propertyValue",
        label: "Property Value ($)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "landValuePerSqFt",
        label: "Land Value ($/sq ft)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "planningToSell",
        label: "Planning to Sell Soon?",
        type: "select",
        options: [
          { label: "No - Long-term Hold", value: "no" },
          { label: "Yes - Within 2 Years", value: "soon" },
          { label: "Yes - Actively Listing", value: "active" },
        ],
        defaultValue: "no",
      },
    ],
    results: [
      { label: "Encroachment Severity", isCurrency: false },
      { label: "Encroached Area", isCurrency: false },
      { label: "Land Value of Encroached Area", isCurrency: true },
      { label: "Estimated Resolution Cost", isCurrency: true },
      { label: "Adverse Possession Risk", isCurrency: false },
      { label: "Recommended Action", isCurrency: false },
      { label: "Timeline to Resolve", isCurrency: false },
    ],
    calculate: (data: any) => {
      const encroachmentType = data.encroachmentType || "fence_minor";
      const encroachmentSize = Number(data.encroachmentSize) || 0;
      const encroachmentLength = Number(data.encroachmentLength) || 0;
      const yearsExisting = Number(data.yearsExisting) || 0;
      const neighborAwareness = data.neighborAwareness || "friendly";
      const propertyValue = Number(data.propertyValue) || 0;
      const landValuePerSqFt = Number(data.landValuePerSqFt) || 0;
      const planningToSell = data.planningToSell || "no";
      
      // Calculate encroached area
      const encroachedAreaSqFt = encroachmentSize * encroachmentLength;
      const encroachedAreaAcres = encroachedAreaSqFt / 43560;
      const landValue = encroachedAreaSqFt * landValuePerSqFt;
      
      // Severity assessment
      let severity = "";
      let baseCost = 0;
      let timelineMonths = 0;
      
      if (encroachmentType === "fence_minor") {
        severity = "Low Severity";
        baseCost = 1500;
        timelineMonths = 1;
      } else if (encroachmentType === "fence_major") {
        severity = "Medium Severity";
        baseCost = 3500;
        timelineMonths = 2;
      } else if (encroachmentType === "driveway") {
        severity = "⚠️ High Severity";
        baseCost = 12000;
        timelineMonths = 3;
      } else if (encroachmentType === "building_minor") {
        severity = "⚠️ High Severity";
        baseCost = 25000;
        timelineMonths = 6;
      } else if (encroachmentType === "building_major") {
        severity = "🚨 CRITICAL";
        baseCost = 75000;
        timelineMonths = 12;
      } else if (encroachmentType === "vegetation") {
        severity = "Low Severity";
        baseCost = 800;
        timelineMonths = 0.5;
      }
      
      // Adjust cost based on neighbor relationship
      let resolutionCost = baseCost;
      if (neighborAwareness === "dispute") {
        resolutionCost = baseCost * 2; // Double cost for legal fees
        timelineMonths *= 2;
      } else if (neighborAwareness === "unaware") {
        resolutionCost = baseCost * 1.3; // 30% more for survey/notification
      }
      
      // Add land purchase cost if applicable
      if (encroachmentType.includes("building") || encroachmentType === "driveway") {
        resolutionCost += landValue + 3000; // land + legal fees for boundary adjustment
      }
      
      // Adverse possession risk
      let adversePossessionRisk = "";
      const statutoryPeriod = 15; // Average across states
      
      if (yearsExisting >= statutoryPeriod) {
        adversePossessionRisk = "🚨 HIGH - Statutory period met; immediate action required";
      } else if (yearsExisting >= statutoryPeriod * 0.7) {
        adversePossessionRisk = "⚠️ ELEVATED - Approaching statutory period";
      } else if (yearsExisting >= 5) {
        adversePossessionRisk = "⚠️ MODERATE - Document and address soon";
      } else {
        adversePossessionRisk = "✓ Low - Recent encroachment";
      }
      
      // Recommended action
      let recommendedAction = "";
      if (planningToSell === "active") {
        if (encroachmentType.includes("building") || encroachmentType === "driveway") {
          recommendedAction = "🚨 URGENT: Must resolve before closing; may need price reduction or easement";
        } else {
          recommendedAction = "Obtain neighbor's written agreement or resolve before listing";
        }
      } else if (planningToSell === "soon") {
        recommendedAction = "Begin resolution process now; survey and negotiate with neighbor";
      } else {
        if (neighborAwareness === "dispute") {
          recommendedAction = "Consult real estate attorney; consider litigation or boundary adjustment";
        } else if (yearsExisting >= statutoryPeriod * 0.7) {
          recommendedAction = "URGENT: Address before adverse possession claim; document agreement";
        } else {
          recommendedAction = "Obtain survey; negotiate friendly resolution with neighbor";
        }
      }
      
      // Timeline
      const timelineText = timelineMonths < 1 
        ? `${Math.ceil(timelineMonths * 4)} weeks` 
        : `${timelineMonths}-${timelineMonths + 2} months`;

      return [
        { label: "Encroachment Severity", value: severity, isCurrency: false },
        { label: "Encroached Area", value: `${encroachedAreaSqFt.toFixed(0)} sq ft (${encroachedAreaAcres.toFixed(3)} acres)`, isCurrency: false },
        { label: "Land Value of Encroached Area", value: landValue.toFixed(2), isCurrency: true },
        { label: "Estimated Resolution Cost", value: resolutionCost.toFixed(2), isCurrency: true },
        { label: "Adverse Possession Risk", value: adversePossessionRisk, isCurrency: false },
        { label: "Recommended Action", value: recommendedAction, isCurrency: false },
        { label: "Timeline to Resolve", value: timelineText, isCurrency: false },
      ];
    },
  },
};
