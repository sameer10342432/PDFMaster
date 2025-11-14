import { CalculatorContent } from "@/types";

export const HOME_DEMOLITION_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: "Home Demolition Cost Estimator",
  description: "Estimate the cost of demolishing a house or structure including permits, labor, and disposal fees.",
  icon: "🏚️",
  category: "Home Improvement",
  slug: "home-demolition-cost-estimator",
  article: {
    title: "Complete Guide to Home Demolition Costs",
    content: `
      <h2>Understanding Home Demolition Costs</h2>
      <p>
        Home demolition is often the first step in new construction, major renovation, or land development projects. Whether you're tearing down an unsafe structure, clearing land for a new build, or removing a house beyond reasonable repair, understanding demolition costs is crucial for accurate project budgeting. This calculator helps property owners and developers estimate the complete investment required for residential demolition projects.
      </p>
      <p>
        National average home demolition costs range from $4,000 to $18,000 for a typical single-family home, with costs varying significantly based on home size, construction type, site access, hazardous materials, and regional factors. These costs represent only the demolition itself—site preparation for new construction adds additional expenses.
      </p>

      <h2>Executive Summary: Why Demolition Costs Vary Widely</h2>
      <p>
        Unlike many construction projects where materials drive costs, demolition expenses primarily reflect labor, equipment rental, disposal fees, and regulatory compliance. A 1,200 sq ft wood-frame ranch house in a rural area might cost $6,000 to demolish, while a 2,500 sq ft brick home in a dense urban neighborhood could cost $25,000+ for the same work due to access limitations, utility disconnections, and stricter safety requirements.
      </p>
      <p>
        Hazardous material abatement (asbestos, lead paint) can add $1,000-$15,000 to demolition costs and must be completed by licensed specialists before general demolition begins. Homes built before 1980 almost certainly contain asbestos in various components, requiring professional testing and abatement.
      </p>

      <h2>Complete Demolition Cost Breakdown</h2>

      <h3>1. Demolition Labor and Equipment ($3-7 per sq ft)</h3>
      <ul>
        <li><strong>Excavator rental:</strong> $200-400 per day (1-3 days typical)</li>
        <li><strong>Demolition crew labor:</strong> 2-4 workers for 1-3 days ($2,000-$6,000)</li>
        <li><strong>Dump truck rental:</strong> $200-500 per day</li>
        <li><strong>Additional equipment:</strong> Bobcat, compactor, tools ($300-$800)</li>
        <li><strong>Site protection:</strong> Dust control, safety barriers ($200-$600)</li>
      </ul>

      <h3>2. Permits and Inspections ($200-$800)</h3>
      <ul>
        <li><strong>Demolition permit:</strong> Required in virtually all jurisdictions ($100-$500)</li>
        <li><strong>Asbestos survey:</strong> Required for homes pre-1980 ($300-$800)</li>
        <li><strong>Utility disconnection fees:</strong> Electric, gas, water, sewer ($100-$400 total)</li>
        <li><strong>Final inspection:</strong> Post-demolition clearance ($0-$150)</li>
      </ul>

      <h3>3. Hazardous Material Abatement ($1,000-$15,000)</h3>
      <ul>
        <li><strong>Asbestos removal:</strong> $10-$30 per sq ft of affected material</li>
        <li><strong>Lead paint abatement:</strong> $8-$20 per sq ft of painted surface</li>
        <li><strong>Mold remediation:</strong> $500-$6,000 depending on extent</li>
        <li><strong>Underground fuel tanks:</strong> $1,500-$5,000 for removal</li>
        <li><strong>PCB transformers:</strong> Specialized removal if present ($1,000-$3,000)</li>
      </ul>

      <h3>4. Debris Removal and Disposal ($2,000-$8,000)</h3>
      <ul>
        <li><strong>Standard debris:</strong> $50-$100 per ton (typical home generates 50-150 tons)</li>
        <li><strong>Landfill tipping fees:</strong> $25-$90 per ton depending on location</li>
        <li><strong>Recycling fees:</strong> Lower for metal and recyclable materials</li>
        <li><strong>Hazardous waste disposal:</strong> Special handling fees ($200-$2,000)</li>
        <li><strong>Multiple dump runs:</strong> Hauling labor and fuel ($500-$2,000)</li>
      </ul>

      <h3>5. Site Restoration ($1,000-$5,000)</h3>
      <ul>
        <li><strong>Foundation removal:</strong> Breaking up and removing concrete ($2-$6 per sq ft)</li>
        <li><strong>Backfill and grading:</strong> Leveling the site ($500-$2,000)</li>
        <li><strong>Soil compaction:</strong> Preparing for new construction ($300-$1,000)</li>
        <li><strong>Utility capping:</strong> Properly sealing sewer, water, gas lines ($200-$800)</li>
        <li><strong>Erosion control:</strong> Temporary measures during transition ($200-$600)</li>
      </ul>

      <h2>Types of Demolition Methods</h2>

      <h3>1. Mechanical Demolition ($3-5 per sq ft)</h3>
      <p>
        Most common method using excavators with hydraulic attachments. Fast, efficient, and cost-effective for most residential projects. Typical timeline: 1-3 days for average home. Best for complete teardowns where material salvage isn't a priority.
      </p>

      <h3>2. Deconstruction/Selective Demolition ($5-12 per sq ft)</h3>
      <p>
        Carefully dismantling structure to salvage reusable materials (lumber, fixtures, architectural elements). Much slower (1-3 weeks) but recovers valuable materials offsetting higher labor costs. May qualify for tax deductions through material donation. Best for historic homes or when sustainability is a priority.
      </p>

      <h3>3. Partial Demolition ($4-8 per sq ft)</h3>
      <p>
        Removing portions of structure while preserving others. Common for major renovations. Requires engineering analysis to ensure remaining structure integrity. More complex than full demolition due to precision requirements.
      </p>

      <h3>4. Interior Demolition Only ($1-4 per sq ft)</h3>
      <p>
        Gutting interior while maintaining shell. Commonly called "gut rehab." Removes all interior finishes, fixtures, and non-structural elements. Much less expensive than full demolition but still requires proper permitting and waste disposal.
      </p>

      <h2>Factors Affecting Demolition Costs</h2>

      <h3>1. Home Size</h3>
      <p>
        Larger homes cost more in absolute terms but less per square foot due to economies of scale:
      </p>
      <ul>
        <li>Small home (under 1,500 sq ft): $4-7 per sq ft</li>
        <li>Medium home (1,500-2,500 sq ft): $3-5 per sq ft</li>
        <li>Large home (over 2,500 sq ft): $2.50-4 per sq ft</li>
      </ul>

      <h3>2. Construction Type</h3>
      <ul>
        <li><strong>Wood frame:</strong> Easiest and cheapest to demolish</li>
        <li><strong>Brick veneer:</strong> Moderate difficulty, valuable salvage potential</li>
        <li><strong>Solid brick/masonry:</strong> More difficult, higher disposal costs</li>
        <li><strong>Concrete block:</strong> Heavy debris, expensive disposal</li>
        <li><strong>Steel frame:</strong> Requires cutting equipment but metal has salvage value</li>
      </ul>

      <h3>3. Foundation Type</h3>
      <ul>
        <li><strong>Slab on grade:</strong> $2-4 per sq ft to remove</li>
        <li><strong>Crawlspace:</strong> $2-3 per sq ft to remove</li>
        <li><strong>Full basement:</strong> $4-6 per sq ft to remove (most expensive)</li>
        <li><strong>Pier and beam:</strong> $1.50-3 per sq ft to remove</li>
      </ul>

      <h3>4. Site Access and Location</h3>
      <ul>
        <li><strong>Urban/dense neighborhoods:</strong> Limited equipment access, may require hand demolition in parts (+30-50%)</li>
        <li><strong>Suburban with good access:</strong> Standard pricing</li>
        <li><strong>Rural/wide-open:</strong> May save on labor but increase hauling distances</li>
        <li><strong>Hillside/difficult terrain:</strong> Specialized equipment needed (+20-40%)</li>
      </ul>

      <h3>5. Additional Structures</h3>
      <p>
        Garages, sheds, pools, and other structures add to costs:
      </p>
      <ul>
        <li>Detached garage: $1,500-$4,000</li>
        <li>Shed: $300-$1,500</li>
        <li>In-ground pool: $4,000-$10,000</li>
        <li>Above-ground pool: $500-$2,000</li>
        <li>Deck: $500-$2,000</li>
        <li>Concrete patio/driveway: $2-6 per sq ft</li>
      </ul>

      <h2>Step-by-Step Cost Estimation Guide</h2>

      <h3>Step 1: Determine Your Demolition Scope</h3>
      <p>
        Clearly define what needs demolition: entire structure, partial demolition, interior only, or selective deconstruction. Include all outbuildings, hardscaping, and site features.
      </p>

      <h3>Step 2: Obtain Required Testing</h3>
      <p>
        For homes built before 1980, hire licensed asbestos inspector ($300-$800). Test for lead paint if planning to salvage materials. Identify any underground fuel tanks or other hazardous materials.
      </p>

      <h3>Step 3: Get Multiple Quotes</h3>
      <p>
        Contact 3-5 licensed demolition contractors. Ensure quotes include:
      </p>
      <ul>
        <li>All labor and equipment</li>
        <li>Debris removal and disposal</li>
        <li>Utility disconnections</li>
        <li>Permits and fees</li>
        <li>Site cleanup and restoration</li>
        <li>Insurance and liability coverage</li>
      </ul>

      <h3>Step 4: Budget for Hazardous Material Abatement</h3>
      <p>
        If testing reveals asbestos or lead, obtain separate quotes from certified abatement contractors. This work must be completed before general demolition begins.
      </p>

      <h3>Step 5: Add Contingency</h3>
      <p>
        Include 10-20% contingency for unexpected issues: unknown underground utilities, additional hazardous materials, weather delays, or hidden structural complexities.
      </p>

      <h2>Legal and Regulatory Requirements</h2>

      <h3>Permits and Approvals</h3>
      <ul>
        <li>Demolition permit from local building department</li>
        <li>Asbestos removal permit if applicable</li>
        <li>Environmental assessment for commercial properties</li>
        <li>Neighbor notification in many jurisdictions</li>
        <li>Historical preservation review in designated districts</li>
      </ul>

      <h3>Utility Disconnections</h3>
      <p>
        Contact utility companies 1-2 weeks before demolition:
      </p>
      <ul>
        <li>Electric company (disconnect at pole)</li>
        <li>Gas company (cap at meter or street)</li>
        <li>Water/sewer department (cap at property line)</li>
        <li>Cable/internet providers</li>
      </ul>

      <h3>Environmental Compliance</h3>
      <ul>
        <li>Proper hazardous material handling and disposal</li>
        <li>Dust control measures during demolition</li>
        <li>Stormwater runoff management</li>
        <li>Disposal manifests for tracked materials</li>
        <li>Final site inspection and clearance</li>
      </ul>

      <h2>Pro Tips for Demolition Projects</h2>

      <h3>1. Salvage Valuable Materials</h3>
      <p>
        Before demolition, remove and sell valuable items:
      </p>
      <ul>
        <li>Kitchen cabinets and appliances ($500-$3,000)</li>
        <li>Bathroom fixtures ($200-$1,000)</li>
        <li>Doors, windows, trim ($500-$2,000)</li>
        <li>Light fixtures and hardware ($200-$800)</li>
        <li>Hardwood flooring ($1-3 per sq ft if salvageable)</li>
      </ul>
      <p>
        Salvage can offset $2,000-$10,000 of demolition costs.
      </p>

      <h3>2. Consider Deconstruction for Tax Benefits</h3>
      <p>
        Donating salvaged materials to nonprofits like Habitat for Humanity may qualify for tax deductions. Requires appraisal and documentation. Can offset higher deconstruction costs.
      </p>

      <h3>3. Time Your Project Strategically</h3>
      <p>
        Demolition contractors may offer better rates during slow seasons (winter in many regions). However, balance cost savings against weather delays and difficulty of working in adverse conditions.
      </p>

      <h3>4. Verify Contractor Insurance and Licensing</h3>
      <p>
        Demolition is hazardous work. Verify:
      </p>
      <ul>
        <li>Demolition contractor license</li>
        <li>Workers compensation insurance</li>
        <li>General liability coverage ($1M minimum)</li>
        <li>Proof of landfill accounts and proper disposal permits</li>
      </ul>

      <h3>5. Protect Your Property</h3>
      <p>
        If demolishing one structure while preserving others on your property:
      </p>
      <ul>
        <li>Clearly mark utilities serving remaining structures</li>
        <li>Install protective barriers around trees and landscaping</li>
        <li>Document property conditions before demolition</li>
        <li>Establish equipment access routes avoiding sensitive areas</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>How long does home demolition take?</h3>
      <p>
        Mechanical demolition of average single-family home: 1-3 days. Add 1-2 weeks for permits and utility disconnections beforehand. Add 1-3 weeks if asbestos abatement is required. Deconstruction can take 2-4 weeks.
      </p>

      <h3>Do I need a permit to demolish my own house?</h3>
      <p>
        Yes, virtually all jurisdictions require demolition permits for residential structures. DIY demolition is legal in some areas but still requires permits, utility disconnections, proper disposal, and compliance with environmental regulations.
      </p>

      <h3>What happens to the debris?</h3>
      <p>
        Most debris goes to construction and demolition (C&D) landfills. Metals are typically separated and recycled. Hazardous materials go to specialized disposal facilities. Clean concrete and masonry may be crushed for road base or fill material.
      </p>

      <h3>Can I demolish a house with an outstanding mortgage?</h3>
      <p>
        Technically yes, but you must notify your lender. Most mortgages prohibit demolition without lender consent. Lender may require immediate loan payoff if collateral (house) is destroyed. Consult your mortgage documents and lender before proceeding.
      </p>

      <h3>Will demolition affect my property taxes?</h3>
      <p>
        Yes, removal of structures reduces assessed value and property taxes. However, if you're building a new, larger home, taxes will increase once construction completes. During the interim period (demolished but not yet rebuilt), taxes decrease.
      </p>

      <h3>What about asbestos in my 1960s home?</h3>
      <p>
        Homes built before 1980 almost certainly contain asbestos in various forms (insulation, tile, roofing, siding). Federal law requires testing and certified abatement before demolition. Costs range $1,000-$15,000 depending on extent. Never attempt DIY asbestos removal.
      </p>

      <h2>Conclusion</h2>
      <p>
        Home demolition represents a significant investment that must be carefully planned and professionally executed. While costs vary widely based on home characteristics and local factors, understanding the components of demolition pricing helps property owners budget accurately and avoid costly surprises.
      </p>
      <p>
        Use this calculator to estimate demolition costs for your specific project. Always obtain multiple quotes from licensed, insured contractors. Factor in all ancillary costs including permits, hazardous material abatement, and site restoration. Proper planning ensures your demolition proceeds safely, legally, and within budget, setting the stage for your next property development phase.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "number",
        defaultValue: 2000,
      },
      {
        name: "stories",
        label: "Number of Stories",
        type: "number",
        defaultValue: 1,
      },
      {
        name: "constructionType",
        label: "Construction Type",
        type: "select",
        options: [
          { value: "woodFrame", label: "Wood Frame (Easiest)" },
          { value: "brickVeneer", label: "Brick Veneer" },
          { value: "solidMasonry", label: "Solid Brick/Masonry" },
          { value: "concreteBlock", label: "Concrete Block" },
        ],
        defaultValue: "woodFrame",
      },
      {
        name: "foundationType",
        label: "Foundation Type",
        type: "select",
        options: [
          { value: "slab", label: "Slab on Grade" },
          { value: "crawlspace", label: "Crawlspace" },
          { value: "basement", label: "Full Basement" },
          { value: "pierBeam", label: "Pier and Beam" },
        ],
        defaultValue: "slab",
      },
      {
        name: "asbestosAbatement",
        label: "Asbestos Abatement Required",
        type: "select",
        options: [
          { value: "none", label: "No (post-1980 home)" },
          { value: "minor", label: "Minor ($2,000-5,000)" },
          { value: "moderate", label: "Moderate ($5,000-10,000)" },
          { value: "extensive", label: "Extensive ($10,000-15,000)" },
        ],
        defaultValue: "none",
      },
      {
        name: "siteAccess",
        label: "Site Access",
        type: "select",
        options: [
          { value: "excellent", label: "Excellent (Rural/Open)" },
          { value: "good", label: "Good (Suburban)" },
          { value: "limited", label: "Limited (Urban)" },
        ],
        defaultValue: "good",
      },
      {
        name: "removeFoundation",
        label: "Remove Foundation",
        type: "select",
        options: [
          { value: "yes", label: "Yes (Complete Removal)" },
          { value: "no", label: "No (Leave in Place)" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [],
    calculate: (values) => {
      const { homeSize, stories, constructionType, foundationType, asbestosAbatement, siteAccess, removeFoundation } = values;
      
      let baseCostPerSqFt = 4;
      if (constructionType === 'brickVeneer') baseCostPerSqFt = 4.5;
      if (constructionType === 'solidMasonry') baseCostPerSqFt = 5.5;
      if (constructionType === 'concreteBlock') baseCostPerSqFt = 5;
      
      let siteMultiplier = 1;
      if (siteAccess === 'excellent') siteMultiplier = 0.9;
      if (siteAccess === 'limited') siteMultiplier = 1.3;
      
      const storyMultiplier = 1 + ((stories - 1) * 0.15);
      
      const demolitionLabor = homeSize * baseCostPerSqFt * siteMultiplier * storyMultiplier;
      
      let foundationCost = 0;
      if (removeFoundation === 'yes') {
        if (foundationType === 'slab') foundationCost = homeSize * 3;
        if (foundationType === 'crawlspace') foundationCost = homeSize * 2.5;
        if (foundationType === 'basement') foundationCost = homeSize * 5;
        if (foundationType === 'pierBeam') foundationCost = homeSize * 2;
      }
      
      let asbestosCost = 0;
      if (asbestosAbatement === 'minor') asbestosCost = 3500;
      if (asbestosAbatement === 'moderate') asbestosCost = 7500;
      if (asbestosAbatement === 'extensive') asbestosCost = 12500;
      
      const permits = 500;
      const utilityDisconnection = 300;
      
      const debrisWeight = homeSize * 0.08;
      const debrisCost = debrisWeight * 75;
      
      const subtotal = demolitionLabor + foundationCost + asbestosCost + permits + utilityDisconnection + debrisCost;
      const contingency = subtotal * 0.15;
      const totalCost = subtotal + contingency;
      
      const costPerSqFt = totalCost / homeSize;

      return [
        { label: "Demolition Labor & Equipment", value: `$${demolitionLabor.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Foundation Removal", value: `$${foundationCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Asbestos Abatement", value: `$${asbestosCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Permits & Inspections", value: `$${permits.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Utility Disconnection", value: `$${utilityDisconnection.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: `Debris Removal (${debrisWeight.toFixed(0)} tons)`, value: `$${debrisCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Contingency (15%)", value: `$${contingency.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Total Estimated Cost", value: `$${totalCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Cost Per Square Foot", value: `$${costPerSqFt.toFixed(2)}/sq ft` },
      ];
    },
  },
};
