import { CalculatorContent } from "@/types";

export const ARCHITECT_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Architect Fee Calculator",
  description: "Calculate architectural fees for residential and commercial projects based on project scope and fee structure.",
  icon: "📐",
  category: "Home Improvement",
  slug: "architect-fee-calculator",
  article: {
    title: "Complete Guide to Architect Fees and Pricing",
    content: `
      <h2>Understanding Architect Fees</h2>
      <p>
        Hiring an architect is a significant investment in your construction or renovation project. Architects provide essential services including design development, technical drawings, regulatory compliance, contractor coordination, and construction oversight. Understanding how architects structure their fees and what factors influence costs helps you budget appropriately and select the right professional for your project needs.
      </p>
      <p>
        Architect fees typically range from 5% to 20% of total construction costs, varying by project type, complexity, scope of services, and fee structure. For a $500,000 home construction project, expect architectural fees between $25,000 and $100,000 depending on these variables.
      </p>

      <h2>Executive Summary: The Value of Professional Architecture</h2>
      <p>
        According to the American Institute of Architects (AIA), professionally designed projects save owners 10-15% on construction costs through efficient designs, accurate specifications, and reduced change orders. Additionally, well-designed spaces command premium resale values and operate more efficiently, delivering long-term returns that far exceed architectural fees.
      </p>
      <p>
        Architecture is not just about aesthetics—architects ensure code compliance, structural integrity, accessibility requirements, energy efficiency, and constructability. DIY or unlicensed designer projects often encounter costly problems during permitting or construction that professional architecture prevents.
      </p>

      <h2>Architect Fee Structures</h2>

      <h3>1. Percentage of Construction Cost (Most Common)</h3>
      <p>
        <strong>How it works:</strong> Architect charges a percentage of the total construction budget. Percentage decreases as project size increases.
      </p>
      <p>
        <strong>Typical rates:</strong>
      </p>
      <ul>
        <li>Small projects (under $100k): 15-20% of construction cost</li>
        <li>Medium projects ($100k-$500k): 10-15% of construction cost</li>
        <li>Large projects ($500k-$2M): 8-12% of construction cost</li>
        <li>Very large projects (over $2M): 5-10% of construction cost</li>
      </ul>
      <p>
        <strong>Pros:</strong> Simple and understood, scales with project scope, architect incentivized to control costs
      </p>
      <p>
        <strong>Cons:</strong> Final fee unknown until construction cost is finalized, potential conflicts if owner wants expensive upgrades
      </p>
      <p>
        <strong>Best for:</strong> Traditional new construction and major renovations with well-defined scope
      </p>

      <h3>2. Fixed/Lump Sum Fee</h3>
      <p>
        <strong>How it works:</strong> Architect quotes a total fee for complete scope of work, regardless of actual time spent.
      </p>
      <p>
        <strong>Pros:</strong> Known cost from the start, good for firm budgets, incentivizes efficiency
      </p>
      <p>
        <strong>Cons:</strong> Scope changes create disputes, architect may pad estimate for safety, less flexibility
      </p>
      <p>
        <strong>Best for:</strong> Well-defined projects with minimal expected changes, commercial work, clients requiring budget certainty
      </p>

      <h3>3. Hourly Rate</h3>
      <p>
        <strong>How it works:</strong> Architect bills actual time at specified hourly rates (varies by staff level).
      </p>
      <p>
        <strong>Typical rates:</strong>
      </p>
      <ul>
        <li>Principal architect: $150-$400 per hour</li>
        <li>Project architect: $100-$250 per hour</li>
        <li>Junior architect/designer: $75-$150 per hour</li>
        <li>CAD technician: $50-$100 per hour</li>
      </ul>
      <p>
        <strong>Pros:</strong> Fair compensation for actual work, good for undefined scope, flexibility for changes
      </p>
      <p>
        <strong>Cons:</strong> Unpredictable total cost, requires trust, can create client anxiety about costs
      </p>
      <p>
        <strong>Best for:</strong> Preliminary feasibility studies, consultation work, projects with evolving scope, design-only services
      </p>

      <h3>4. Square Footage Fee</h3>
      <p>
        <strong>How it works:</strong> Architect charges per square foot of building area.
      </p>
      <p>
        <strong>Typical rates:</strong>
      </p>
      <ul>
        <li>Basic residential: $2-$5 per sq ft</li>
        <li>Custom residential: $4-$10 per sq ft</li>
        <li>Luxury residential: $8-$20 per sq ft</li>
        <li>Commercial office: $3-$8 per sq ft</li>
        <li>Complex commercial: $6-$15 per sq ft</li>
      </ul>
      <p>
        <strong>Pros:</strong> Easy to calculate, scales logically with project size
      </p>
      <p>
        <strong>Cons:</strong> Doesn't account for complexity variations, may incentivize larger designs
      </p>
      <p>
        <strong>Best for:</strong> Straightforward residential projects, commercial work with typical programs
      </p>

      <h3>5. Cost-Plus Fee</h3>
      <p>
        <strong>How it works:</strong> Architect bills actual costs (salaries, overhead, expenses) plus negotiated markup (typically 15-25%).
      </p>
      <p>
        <strong>Pros:</strong> Transparent cost breakdown, fair to both parties
      </p>
      <p>
        <strong>Cons:</strong> Requires detailed tracking and reporting, less common for residential
      </p>
      <p>
        <strong>Best for:</strong> Large institutional projects, public projects requiring transparency
      </p>

      <h2>Phases of Architectural Services</h2>

      <h3>Phase 1: Schematic Design (15% of fee)</h3>
      <p>
        Conceptual design development, preliminary drawings, basic floor plans, site planning, initial budget estimates, code review. Deliverables: concept sketches, preliminary floor plans, site plan, massing studies.
      </p>

      <h3>Phase 2: Design Development (20% of fee)</h3>
      <p>
        Refined floor plans, elevations, building systems conceptual design, material selections, detailed code compliance review. Deliverables: refined drawings, 3D renderings, material specifications, updated budget.
      </p>

      <h3>Phase 3: Construction Documents (40% of fee)</h3>
      <p>
        Complete technical drawings, detailed specifications, engineering coordination, permit documents. Deliverables: full construction drawing set, technical specifications, stamped/sealed permit documents.
      </p>

      <h3>Phase 4: Bidding/Negotiation (5% of fee)</h3>
      <p>
        Contractor bidding assistance, bid review and comparison, scope clarifications, contract negotiation support. Deliverables: bidding documents, bid analysis, contractor recommendation.
      </p>

      <h3>Phase 5: Construction Administration (20% of fee)</h3>
      <p>
        Site visits, submittal reviews, RFI responses, change order review, payment certification, punch list inspection. Deliverables: site visit reports, marked-up drawings, punch list, final completion certification.
      </p>

      <h2>Factors Affecting Architect Fees</h2>

      <h3>1. Project Complexity</h3>
      <ul>
        <li><strong>Low complexity:</strong> Simple rectangular footprint, standard construction, flat site (lower fees)</li>
        <li><strong>Medium complexity:</strong> Custom layouts, mixed materials, moderate site challenges (standard fees)</li>
        <li><strong>High complexity:</strong> Unique structural systems, difficult site, complex program, historic preservation (premium fees)</li>
      </ul>

      <h3>2. Project Type</h3>
      <ul>
        <li><strong>Residential addition:</strong> 10-20% of construction cost</li>
        <li><strong>Residential remodel:</strong> 12-20% of construction cost</li>
        <li><strong>New custom home:</strong> 8-15% of construction cost</li>
        <li><strong>Production home (modifications):</strong> $3,000-$15,000 flat fee</li>
        <li><strong>Commercial build-out:</strong> 6-12% of construction cost</li>
        <li><strong>Ground-up commercial:</strong> 8-15% of construction cost</li>
      </ul>

      <h3>3. Scope of Services</h3>
      <ul>
        <li><strong>Full services (all 5 phases):</strong> 100% of fee</li>
        <li><strong>Design only (phases 1-3):</strong> 75-80% of fee</li>
        <li><strong>Schematic design only:</strong> 15-20% of fee</li>
        <li><strong>Construction documents only:</strong> 40-50% of fee (if working from existing design)</li>
        <li><strong>Construction admin only:</strong> 20-25% of fee</li>
      </ul>

      <h3>4. Geographic Location</h3>
      <ul>
        <li><strong>Major metro areas (NYC, SF, LA):</strong> Premium fees (+30-50% above national average)</li>
        <li><strong>Mid-size cities:</strong> Average to slightly above average fees</li>
        <li><strong>Rural areas:</strong> Below average fees but limited architect availability</li>
      </ul>

      <h3>5. Architect Experience and Reputation</h3>
      <ul>
        <li><strong>Award-winning/celebrity architects:</strong> Premium fees, highly selective clients</li>
        <li><strong>Established firms (10-30 years):</strong> Standard to above-average fees</li>
        <li><strong>Young/emerging architects:</strong> Below-average fees, building portfolio</li>
      </ul>

      <h2>Additional Costs Beyond Basic Fees</h2>

      <h3>Reimbursable Expenses</h3>
      <ul>
        <li>3D renderings and visualizations ($500-$5,000)</li>
        <li>Physical models ($1,000-$10,000)</li>
        <li>Travel and mileage (if project is remote)</li>
        <li>Printing and reproduction costs</li>
        <li>Photography and documentation</li>
      </ul>

      <h3>Consultant Fees (Usually Separate)</h3>
      <ul>
        <li><strong>Structural engineer:</strong> 1-2% of construction cost or $3,000-$20,000</li>
        <li><strong>MEP engineer:</strong> 2-4% of construction cost or $5,000-$50,000</li>
        <li><strong>Civil engineer:</strong> $3,000-$15,000 for residential</li>
        <li><strong>Landscape architect:</strong> 5-10% of landscape budget</li>
        <li><strong>Interior designer:</strong> $50-$200 per hour or % of FF&E budget</li>
      </ul>

      <h3>Additional Services</h3>
      <ul>
        <li>Extensive revisions beyond normal scope</li>
        <li>Programming and feasibility studies</li>
        <li>Expedited schedule premium (10-25%)</li>
        <li>LEED or sustainable certification coordination</li>
        <li>Historic preservation consultation</li>
      </ul>

      <h2>How to Select an Architect</h2>

      <h3>1. Review Portfolios</h3>
      <p>
        Examine previous projects similar to yours. Look for design aesthetics matching your vision, experience with your building type, and evidence of successful project completion.
      </p>

      <h3>2. Check Credentials</h3>
      <ul>
        <li>Licensed architect in your state (required for most projects)</li>
        <li>AIA membership (demonstrates professional commitment)</li>
        <li>Specialty certifications (LEED AP, NCARB, etc.)</li>
        <li>Professional liability insurance</li>
      </ul>

      <h3>3. Interview Multiple Firms</h3>
      <p>
        Meet with 3-5 architects. Assess communication style, understanding of your vision, relevant experience, and personal chemistry. Architecture is a collaborative process requiring good working relationships.
      </p>

      <h3>4. Request References</h3>
      <p>
        Contact previous clients with similar projects. Ask about communication, budget control, problem-solving, and overall satisfaction. Tour completed projects if possible.
      </p>

      <h3>5. Compare Proposals Carefully</h3>
      <p>
        Don't select based solely on lowest fee. Compare scope of services, deliverables, payment schedules, and terms. Understand what is and isn't included.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Do I need an architect for a home addition?</h3>
      <p>
        Not always legally required, but highly recommended for additions over 500 sq ft or involving structural changes. Some jurisdictions require licensed architect stamps for permits. Design-build contractors may offer in-house design, but independent architects provide better client advocacy.
      </p>

      <h3>What's the difference between an architect and a designer?</h3>
      <p>
        Architects complete 5-7 years of education, pass rigorous licensing exams, maintain continuing education, and carry professional liability insurance. Only licensed architects can stamp/seal drawings required for permits. Designers may have varying education/experience but cannot provide licensed services.
      </p>

      <h3>When should I hire an architect?</h3>
      <p>
        As early as possible—ideally before purchasing property. Architects can assess site feasibility, identify regulatory constraints, and inform budget development. Early involvement prevents costly surprises.
      </p>

      <h3>Can I negotiate architect fees?</h3>
      <p>
        Yes, but understand that very low fees may result in rushed work, junior staff handling your project, or corners cut. Negotiate scope of services rather than hourly rates. Consider phased agreements starting with schematic design.
      </p>

      <h3>What if my project goes over budget?</h3>
      <p>
        If using percentage-based fees, architect earnings increase with budget (potential conflict). Discuss budget explicitly and regularly. Good architects design to budgets and help value-engineer when needed. Some contracts include budget targets with fee adjustments if exceeded.
      </p>

      <h3>Do I own the drawings?</h3>
      <p>
        Typically no—architect retains copyright and ownership of drawings/designs. You have a limited license to use for your specific project. If you want full ownership, this must be negotiated upfront (usually requires additional fee).
      </p>

      <h2>Conclusion</h2>
      <p>
        Architect fees represent a crucial investment in project success. Professional architecture delivers code compliance, constructability, budget control, and design quality that DIY or unlicensed approaches cannot match. Understanding fee structures, service phases, and selection criteria helps you make informed decisions and establish productive working relationships with your architect.
      </p>
      <p>
        Use this calculator to estimate fees for your project, then interview multiple qualified professionals. Select based on expertise, communication, and value—not lowest price alone. The modest percentage paid for professional architecture typically delivers multiples in construction savings, improved functionality, and enhanced property value.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "constructionBudget",
        label: "Estimated Construction Budget ($)",
        type: "number",
        defaultValue: 500000,
      },
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        options: [
          { value: "newHome", label: "New Custom Home (8-15%)" },
          { value: "addition", label: "Residential Addition (10-20%)" },
          { value: "remodel", label: "Major Remodel (12-20%)" },
          { value: "commercial", label: "Commercial Project (8-15%)" },
          { value: "renovation", label: "Commercial Renovation (10-18%)" },
        ],
        defaultValue: "newHome",
      },
      {
        name: "complexity",
        label: "Project Complexity",
        type: "select",
        options: [
          { value: "low", label: "Low (Simple/Standard)" },
          { value: "medium", label: "Medium (Custom/Typical)" },
          { value: "high", label: "High (Complex/Unique)" },
        ],
        defaultValue: "medium",
      },
      {
        name: "serviceScope",
        label: "Scope of Services",
        type: "select",
        options: [
          { value: "full", label: "Full Services (All 5 Phases)" },
          { value: "designOnly", label: "Design Only (75%)" },
          { value: "schematicOnly", label: "Schematic Design Only (15%)" },
        ],
        defaultValue: "full",
      },
      {
        name: "feeStructure",
        label: "Fee Structure",
        type: "select",
        options: [
          { value: "percentage", label: "Percentage of Construction Cost" },
          { value: "squareFoot", label: "Per Square Foot ($5-10/sq ft)" },
        ],
        defaultValue: "percentage",
      },
      {
        name: "buildingArea",
        label: "Building Area (sq ft) - For Per Sq Ft Calculation",
        type: "number",
        defaultValue: 3000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { constructionBudget, projectType, complexity, serviceScope, feeStructure, buildingArea } = values;
      
      let basePercentage = 10;
      if (projectType === 'newHome') basePercentage = 11.5;
      if (projectType === 'addition') basePercentage = 15;
      if (projectType === 'remodel') basePercentage = 16;
      if (projectType === 'commercial') basePercentage = 11.5;
      if (projectType === 'renovation') basePercentage = 14;
      
      if (complexity === 'low') basePercentage *= 0.85;
      if (complexity === 'high') basePercentage *= 1.15;
      
      let scopeMultiplier = 1;
      if (serviceScope === 'designOnly') scopeMultiplier = 0.75;
      if (serviceScope === 'schematicOnly') scopeMultiplier = 0.15;
      
      let architectFee = 0;
      let rateUsed = '';
      
      if (feeStructure === 'percentage') {
        const finalPercentage = basePercentage * scopeMultiplier;
        architectFee = (constructionBudget * finalPercentage) / 100;
        rateUsed = `${finalPercentage.toFixed(1)}% of construction cost`;
      } else {
        const costPerSqFt = projectType.includes('commercial') ? 6 : 7.5;
        const adjustedCostPerSqFt = costPerSqFt * (complexity === 'low' ? 0.8 : complexity === 'high' ? 1.2 : 1);
        architectFee = buildingArea * adjustedCostPerSqFt * scopeMultiplier;
        rateUsed = `$${adjustedCostPerSqFt.toFixed(2)}/sq ft`;
      }
      
      const schematicDesign = architectFee * 0.15;
      const designDevelopment = architectFee * 0.20;
      const constructionDocs = architectFee * 0.40;
      const bidding = architectFee * 0.05;
      const constructionAdmin = architectFee * 0.20;
      
      const consultantFees = constructionBudget * 0.03;
      const reimbursables = architectFee * 0.05;
      const totalProjectCost = architectFee + consultantFees + reimbursables;

      const results = [
        { label: "Base Architect Fee", value: `$${architectFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Rate Used", value: rateUsed },
      ];
      
      if (serviceScope === 'full') {
        results.push(
          { label: "├─ Schematic Design (15%)", value: `$${schematicDesign.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          { label: "├─ Design Development (20%)", value: `$${designDevelopment.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          { label: "├─ Construction Documents (40%)", value: `$${constructionDocs.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          { label: "├─ Bidding (5%)", value: `$${bidding.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          { label: "└─ Construction Admin (20%)", value: `$${constructionAdmin.toLocaleString('en-US', { maximumFractionDigits: 0 })}` }
        );
      }
      
      results.push(
        { label: "Estimated Consultant Fees", value: `$${consultantFees.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Estimated Reimbursables", value: `$${reimbursables.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Total Design Budget", value: `$${totalProjectCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` }
      );

      return results;
    },
  },
};
