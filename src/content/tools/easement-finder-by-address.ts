import { CalculatorContent } from '@/types';

export const EASEMENT_FINDER_BY_ADDRESS_CONTENT: CalculatorContent = {
  title: 'Easement Finder (by Address)',
  description: 'Discover potential easements affecting your property and understand their impact on ownership rights, land use, and property value',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'easement-finder-by-address',
  article: {
    title: "Understanding Property Easements",
    content: `
    <h2>What are Easements?</h2>
    <p>An easement is a legal right that allows someone else to use a portion of your property for a specific purpose. Easements "run with the land," meaning they transfer to new owners and can significantly impact property use, development potential, and value.</p>
    
    <h3>Types of Easements</h3>
    <ul>
      <li><strong>Utility Easements:</strong> Electric, gas, water, sewer, telecommunications access
        <ul>
          <li>Usually 10-20 feet wide along property lines</li>
          <li>Grants utility companies access for maintenance and repairs</li>
          <li>Restricts permanent structures in easement area</li>
        </ul>
      </li>
      <li><strong>Access Easements:</strong> Right-of-way for neighboring properties
        <ul>
          <li>Driveway access, shared roads, pathways</li>
          <li>Can significantly limit property use and privacy</li>
          <li>Often required for landlocked parcels</li>
        </ul>
      </li>
      <li><strong>Drainage Easements:</strong> Water flow and storm drainage systems
        <ul>
          <li>Prevents building in flood-prone areas</li>
          <li>May require property owner to maintain drainage</li>
          <li>Critical for flood control and water management</li>
        </ul>
      </li>
      <li><strong>Conservation Easements:</strong> Preserve land in natural state
        <ul>
          <li>Permanent restrictions on development</li>
          <li>Often voluntary with tax benefits</li>
          <li>Major impact on future development rights</li>
        </ul>
      </li>
      <li><strong>Solar Easements:</strong> Protect access to sunlight
        <ul>
          <li>Prevents neighbors from blocking solar panels</li>
          <li>Increasingly common in solar-friendly states</li>
        </ul>
      </li>
      <li><strong>View Easements:</strong> Protect scenic views
        <ul>
          <li>Restricts trees, structures that block views</li>
          <li>Common in coastal and mountain properties</li>
        </ul>
      </li>
      <li><strong>Prescriptive Easements:</strong> Established by long-term use
        <ul>
          <li>Created by 10-20 years of open, continuous use</li>
          <li>Can arise without written agreement</li>
          <li>Difficult to remove once established</li>
        </ul>
      </li>
    </ul>
    
    <h3>Where to Find Easement Information</h3>
    <ul>
      <li><strong>Property Deed:</strong> Recorded easements listed in deed</li>
      <li><strong>Title Report:</strong> Title insurance preliminary report shows easements</li>
      <li><strong>County Recorder's Office:</strong> Public records of recorded easements</li>
      <li><strong>Survey:</strong> Property survey shows easement locations and dimensions</li>
      <li><strong>Plat Maps:</strong> Subdivision plats show common easements</li>
      <li><strong>HOA Documents:</strong> Community easements and shared access rights</li>
      <li><strong>Utility Companies:</strong> Can provide maps of their easements</li>
    </ul>
    
    <h3>Impact on Property Value</h3>
    <table>
      <tr>
        <th>Easement Type</th>
        <th>Value Impact</th>
        <th>Development Impact</th>
      </tr>
      <tr>
        <td>Standard Utility</td>
        <td>Minimal (0-2%)</td>
        <td>Low - minor restrictions</td>
      </tr>
      <tr>
        <td>Drainage</td>
        <td>Low (2-5%)</td>
        <td>Moderate - no building in area</td>
      </tr>
      <tr>
        <td>Access (minor)</td>
        <td>Moderate (3-8%)</td>
        <td>Moderate - limits privacy</td>
      </tr>
      <tr>
        <td>Access (major)</td>
        <td>Significant (8-15%)</td>
        <td>High - substantial use by others</td>
      </tr>
      <tr>
        <td>Conservation</td>
        <td>Major (15-40%)</td>
        <td>Severe - no development allowed</td>
      </tr>
      <tr>
        <td>Prescriptive (established)</td>
        <td>Variable (5-20%)</td>
        <td>High - difficult to control</td>
      </tr>
    </table>
    
    <h3>Easement Rights and Responsibilities</h3>
    <p><strong>Dominant Estate (easement holder) can:</strong></p>
    <ul>
      <li>Use easement area for specified purpose</li>
      <li>Maintain and repair easement infrastructure</li>
      <li>Enter property to access easement area</li>
      <li>Prevent interference with easement use</li>
    </ul>
    <p><strong>Servient Estate (property owner) can:</strong></p>
    <ul>
      <li>Use easement area if not interfering with easement purpose</li>
      <li>Landscape and maintain easement area</li>
      <li>Seek damages for excessive easement use</li>
      <li>Cannot block or substantially interfere with easement</li>
    </ul>
    
    <h3>Removing or Modifying Easements</h3>
    <p>Easements can be terminated by:</p>
    <ul>
      <li><strong>Express Release:</strong> Written agreement from easement holder</li>
      <li><strong>Merger:</strong> Same party owns both dominant and servient estates</li>
      <li><strong>Abandonment:</strong> Long-term non-use with intent to abandon (rare)</li>
      <li><strong>Court Order:</strong> Quiet title action if easement serves no purpose</li>
      <li><strong>Expiration:</strong> Term easements automatically expire</li>
    </ul>
    <p>Modification usually requires negotiation, compensation, or legal action.</p>
    
    <h3>Disclosure Requirements</h3>
    <p>Sellers must disclose known easements in most states:</p>
    <ul>
      <li>Recorded easements appear in title report</li>
      <li>Unrecorded easements must be disclosed if known</li>
      <li>Prescriptive easements should be disclosed if suspected</li>
      <li>Failure to disclose can result in liability or rescission</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          { label: "Single Family Home", value: "single" },
          { label: "Vacant Land", value: "land" },
          { label: "Condo/Townhouse", value: "condo" },
          { label: "Commercial", value: "commercial" },
          { label: "Rural/Agricultural", value: "rural" },
        ],
        defaultValue: "single",
      },
      {
        name: "lotSize",
        label: "Lot Size (acres)",
        type: "number",
        placeholder: "0.25",
        defaultValue: "0.25",
      },
      {
        name: "utilityEasement",
        label: "Utility Easement Present?",
        type: "select",
        options: [
          { label: "Yes - Standard", value: "standard" },
          { label: "Yes - Large/Multiple", value: "large" },
          { label: "No", value: "no" },
        ],
        defaultValue: "standard",
      },
      {
        name: "accessEasement",
        label: "Access Easement?",
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Minor (occasional use)", value: "minor" },
          { label: "Major (shared driveway)", value: "major" },
        ],
        defaultValue: "none",
      },
      {
        name: "drainageEasement",
        label: "Drainage Easement?",
        type: "select",
        options: [
          { label: "None", value: "no" },
          { label: "Yes", value: "yes" },
        ],
        defaultValue: "no",
      },
      {
        name: "conservationEasement",
        label: "Conservation Easement?",
        type: "select",
        options: [
          { label: "None", value: "no" },
          { label: "Yes - Partial", value: "partial" },
          { label: "Yes - Entire Property", value: "full" },
        ],
        defaultValue: "no",
      },
      {
        name: "prescriptiveRisk",
        label: "Prescriptive Easement Risk?",
        type: "select",
        options: [
          { label: "No evidence", value: "no" },
          { label: "Possible - neighbor using path", value: "possible" },
          { label: "Likely - long-term use", value: "likely" },
        ],
        defaultValue: "no",
      },
      {
        name: "propertyValue",
        label: "Property Value ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
    ],
    results: [
      { label: "Total Easements Identified", isCurrency: false },
      { label: "Easement Impact Level", isCurrency: false },
      { label: "Estimated Value Impact", isCurrency: true },
      { label: "Buildable Area Reduction", isCurrency: false },
      { label: "Development Limitations", isCurrency: false },
      { label: "Recommended Actions", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyType = data.propertyType || "single";
      const lotSize = Number(data.lotSize) || 0;
      const utilityEasement = data.utilityEasement || "standard";
      const accessEasement = data.accessEasement || "none";
      const drainageEasement = data.drainageEasement === "yes";
      const conservationEasement = data.conservationEasement || "no";
      const prescriptiveRisk = data.prescriptiveRisk || "no";
      const propertyValue = Number(data.propertyValue) || 0;
      
      let easementCount = 0;
      let totalValueImpact = 0;
      let buildableReduction = 0;
      const limitations = [];
      const actions = [];
      
      // Utility easement
      if (utilityEasement === "standard") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.01; // 1% impact
        buildableReduction += lotSize * 0.05; // ~5% of lot
        limitations.push("Standard utility access restrictions");
        actions.push("Verify easement locations on survey");
      } else if (utilityEasement === "large") {
        easementCount += 3;
        totalValueImpact += propertyValue * 0.03; // 3% impact
        buildableReduction += lotSize * 0.15; // ~15% of lot
        limitations.push("Multiple utility easements limit building placement");
        actions.push("Obtain utility easement maps; consult with builder");
      }
      
      // Access easement
      if (accessEasement === "minor") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.05; // 5% impact
        buildableReduction += lotSize * 0.08; // ~8% of lot
        limitations.push("Shared access affects privacy");
        actions.push("Review easement terms; consider fence/landscaping");
      } else if (accessEasement === "major") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.12; // 12% impact
        buildableReduction += lotSize * 0.20; // ~20% of lot
        limitations.push("⚠️ Major access easement significantly limits use");
        actions.push("Review maintenance obligations; negotiate terms if possible");
      }
      
      // Drainage easement
      if (drainageEasement) {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.04; // 4% impact
        buildableReduction += lotSize * 0.12; // ~12% of lot
        limitations.push("No building in drainage area; potential flooding");
        actions.push("Verify drainage easement boundaries; check flood history");
      }
      
      // Conservation easement
      if (conservationEasement === "partial") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.25; // 25% impact
        buildableReduction += lotSize * 0.40; // ~40% of lot
        limitations.push("⚠️ Partial conservation easement restricts development");
        actions.push("Review conservation terms; understand building restrictions");
      } else if (conservationEasement === "full") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.40; // 40% impact
        buildableReduction += lotSize * 0.90; // ~90% of lot
        limitations.push("🚨 Full conservation easement - minimal development rights");
        actions.push("Confirm no building allowed; understand property use restrictions");
      }
      
      // Prescriptive easement risk
      if (prescriptiveRisk === "possible") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.07; // 7% impact
        limitations.push("Potential prescriptive easement - needs investigation");
        actions.push("Consult real estate attorney; consider posting no trespassing signs");
      } else if (prescriptiveRisk === "likely") {
        easementCount += 1;
        totalValueImpact += propertyValue * 0.15; // 15% impact
        buildableReduction += lotSize * 0.10; // ~10% of lot
        limitations.push("⚠️ Likely prescriptive easement - legal action may be needed");
        actions.push("URGENT: Consult attorney; obtain survey; document usage");
      }
      
      // Impact level
      let impactLevel = "";
      const impactPercent = propertyValue > 0 ? (totalValueImpact / propertyValue) * 100 : 0;
      if (impactPercent < 5) {
        impactLevel = "✓ Minimal Impact - Standard easements";
      } else if (impactPercent < 15) {
        impactLevel = "⚠️ Moderate Impact - Review carefully";
      } else if (impactPercent < 30) {
        impactLevel = "⚠️ Significant Impact - Major limitations";
      } else {
        impactLevel = "🚨 SEVERE Impact - Development severely restricted";
      }
      
      const buildablePercent = lotSize > 0 ? (buildableReduction / lotSize) * 100 : 0;
      const buildableReductionText = `${buildableReduction.toFixed(2)} acres (${buildablePercent.toFixed(1)}% of lot)`;
      
      const limitationsText = limitations.length > 0 ? limitations.join("; ") : "✓ No significant limitations identified";
      const actionsText = actions.length > 0 ? actions.join("; ") : "✓ Standard due diligence recommended";

      return [
        { label: "Total Easements Identified", value: `${easementCount} easement(s)`, isCurrency: false },
        { label: "Easement Impact Level", value: impactLevel, isCurrency: false },
        { label: "Estimated Value Impact", value: `${totalValueImpact.toFixed(2)} (${impactPercent.toFixed(1)}%)`, isCurrency: true },
        { label: "Buildable Area Reduction", value: buildableReductionText, isCurrency: false },
        { label: "Development Limitations", value: limitationsText, isCurrency: false },
        { label: "Recommended Actions", value: actionsText, isCurrency: false },
      ];
    },
  },
};
