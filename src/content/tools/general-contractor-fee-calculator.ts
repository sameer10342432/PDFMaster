import { CalculatorContent } from "@/types";

export const GENERAL_CONTRACTOR_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "General Contractor Fee Calculator",
  description: "Calculate general contractor fees and markup for construction projects including overhead and profit margins.",
  icon: "👷",
  category: "Home Improvement",
  slug: "general-contractor-fee-calculator",
  article: {
    title: "Complete Guide to General Contractor Fees and Markup",
    content: `
      <h2>Understanding General Contractor Fees</h2>
      <p>
        General contractors (GCs) manage construction projects from start to finish, coordinating subcontractors, managing schedules, handling permits, purchasing materials, and ensuring quality workmanship. Understanding how contractors price their services helps homeowners and developers budget accurately and evaluate bids fairly. General contractor fees typically include overhead costs, profit margins, and sometimes markup on materials and subcontractors, representing 15-35% of total project costs.
      </p>
      <p>
        For a $100,000 construction project, expect general contractor fees of $15,000-$35,000 depending on project type, complexity, and fee structure. These fees compensate contractors for expertise, liability, project management, and business operations while ensuring professional execution of your construction project.
      </p>

      <h2>General Contractor Fee Structures</h2>

      <h3>1. Cost-Plus with Fixed Fee</h3>
      <p>
        <strong>How it works:</strong> Contractor bills actual project costs (materials, labor, permits) plus fixed management fee.
      </p>
      <p>
        <strong>Typical fees:</strong> $10,000-$50,000+ depending on project size
      </p>
      <p>
        <strong>Pros:</strong> Transparent cost breakdown, contractor focused on quality over speed, owner sees all expenditures, flexible for project changes
      </p>
      <p>
        <strong>Cons:</strong> Final cost unpredictable, requires trust and oversight, contractor less incentivized to minimize costs
      </p>
      <p>
        <strong>Best for:</strong> Custom high-end projects, projects with uncertain scope, clients who want maximum transparency
      </p>

      <h3>2. Cost-Plus with Percentage Fee (Most Common)</h3>
      <p>
        <strong>How it works:</strong> Contractor bills actual costs plus percentage markup (typically 10-20% for overhead and profit).
      </p>
      <p>
        <strong>Typical percentages:</strong>
      </p>
      <ul>
        <li>Small residential projects: 15-25%</li>
        <li>Medium projects: 12-20%</li>
        <li>Large residential: 10-18%</li>
        <li>Commercial projects: 8-15%</li>
      </ul>
      <p>
        <strong>Pros:</strong> Flexible for changes, transparent billing, scales with project size, common industry practice
      </p>
      <p>
        <strong>Cons:</strong> Can incentivize higher spending, final cost uncertain, requires detailed cost tracking
      </p>
      <p>
        <strong>Best for:</strong> Most residential and commercial projects, remodels with unknown conditions
      </p>

      <h3>3. Fixed/Lump Sum Contract</h3>
      <p>
        <strong>How it works:</strong> Contractor quotes total price for complete scope of work, regardless of actual costs.
      </p>
      <p>
        <strong>Pros:</strong> Known total cost upfront, budget certainty, contractor incentivized for efficiency, simple billing
      </p>
      <p>
        <strong>Cons:</strong> Scope changes create conflicts, contractor may cut corners if costs exceed estimate, less flexibility
      </p>
      <p>
        <strong>Best for:</strong> Well-defined projects, new construction with complete plans, clients requiring budget certainty
      </p>

      <h3>4. Time and Materials (T&M)</h3>
      <p>
        <strong>How it works:</strong> Contractor bills hourly labor rates plus materials at cost (or with markup).
      </p>
      <p>
        <strong>Typical rates:</strong>
      </p>
      <ul>
        <li>Laborer: $25-$50 per hour (plus GC markup)</li>
        <li>Skilled craftsman: $40-$80 per hour (plus GC markup)</li>
        <li>Foreman/lead: $60-$100 per hour (plus GC markup)</li>
        <li>Materials: Cost + 10-30% markup</li>
      </ul>
      <p>
        <strong>Pros:</strong> Ultimate flexibility, fair to both parties, good for undefined scope
      </p>
      <p>
        <strong>Cons:</strong> Completely unpredictable costs, can be abused, requires constant oversight
      </p>
      <p>
        <strong>Best for:</strong> Small repairs, preliminary work, projects with extremely uncertain scope
      </p>

      <h3>5. Design-Build Fixed Price</h3>
      <p>
        <strong>How it works:</strong> GC provides both design and construction services for one fixed price.
      </p>
      <p>
        <strong>Typical pricing:</strong> 20-30% above cost (includes design and construction management)
      </p>
      <p>
        <strong>Pros:</strong> Single point of responsibility, streamlined process, budget certainty, faster timelines
      </p>
      <p>
        <strong>Cons:</strong> Less oversight of design process, potential conflicts of interest, locked into one firm
      </p>
      <p>
        <strong>Best for:</strong> Clients wanting turnkey service, commercial projects, fast-track schedules
      </p>

      <h2>What's Included in GC Fees</h2>

      <h3>Overhead Costs (8-15% of project)</h3>
      <ul>
        <li><strong>Insurance:</strong> General liability, workers compensation, vehicle insurance ($5,000-$50,000+ annually)</li>
        <li><strong>Licensing and bonds:</strong> Contractor license, performance bonds, permit bonds</li>
        <li><strong>Office expenses:</strong> Rent, utilities, office staff salaries</li>
        <li><strong>Tools and equipment:</strong> Maintenance, fuel, depreciation</li>
        <li><strong>Vehicles:</strong> Trucks, maintenance, fuel</li>
        <li><strong>Marketing and sales:</strong> Advertising, estimating costs</li>
        <li><strong>Legal and accounting:</strong> Professional services, contract review</li>
        <li><strong>Warranty service:</strong> Callback visits and defect remediation</li>
      </ul>

      <h3>Profit Margin (5-15% of project)</h3>
      <ul>
        <li>Fair compensation for expertise and business risk</li>
        <li>Investment in business growth and improvement</li>
        <li>Buffer for unforeseen circumstances</li>
        <li>Owner compensation and business sustainability</li>
      </ul>

      <h3>Project Management Services</h3>
      <ul>
        <li>Project planning and scheduling</li>
        <li>Subcontractor hiring and management</li>
        <li>Material procurement and delivery coordination</li>
        <li>Permit applications and inspections</li>
        <li>Quality control and workmanship oversight</li>
        <li>Safety compliance and site management</li>
        <li>Client communication and updates</li>
        <li>Change order processing</li>
        <li>Progress billing and budget tracking</li>
        <li>Warranty administration</li>
      </ul>

      <h2>Factors Affecting GC Fees</h2>

      <h3>1. Project Size</h3>
      <p>
        Larger projects justify lower percentage markups due to economies of scale:
      </p>
      <ul>
        <li>Projects under $50k: 20-30% markup typical</li>
        <li>Projects $50k-$250k: 15-25% markup</li>
        <li>Projects $250k-$1M: 12-20% markup</li>
        <li>Projects over $1M: 10-18% markup</li>
      </ul>

      <h3>2. Project Type and Complexity</h3>
      <ul>
        <li><strong>New construction:</strong> 10-20% (more predictable)</li>
        <li><strong>Additions:</strong> 15-25% (moderate complexity)</li>
        <li><strong>Remodels:</strong> 18-30% (unknown conditions, higher risk)</li>
        <li><strong>Historic restoration:</strong> 20-35% (specialized, unpredictable)</li>
        <li><strong>Basement finishing:</strong> 15-25% (known issues)</li>
      </ul>

      <h3>3. Market Conditions</h3>
      <ul>
        <li><strong>Hot market (high demand):</strong> GCs can charge premium rates (20-30%)</li>
        <li><strong>Balanced market:</strong> Standard rates (15-20%)</li>
        <li><strong>Slow market (low demand):</strong> Competitive rates (10-18%)</li>
      </ul>

      <h3>4. Risk and Liability</h3>
      <ul>
        <li>Occupied homes (remodels): Higher fees due to disruption and liability</li>
        <li>Tight timelines: Premium for expedited work (add 10-20%)</li>
        <li>Difficult sites: Limited access, challenging conditions (add 10-25%)</li>
        <li>High-end finishes: Greater liability for expensive materials (add 5-15%)</li>
      </ul>

      <h3>5. Geographic Location</h3>
      <ul>
        <li>High-cost coastal cities: 18-30% typical</li>
        <li>Major metros: 15-25%</li>
        <li>Mid-size cities: 12-20%</li>
        <li>Rural areas: 10-18%</li>
      </ul>

      <h2>How to Evaluate GC Bids</h2>

      <h3>Don't Just Compare Bottom Lines</h3>
      <p>
        Lowest bid isn't always best. Evaluate:
      </p>
      <ul>
        <li>What's included vs. excluded in scope</li>
        <li>Quality of specified materials</li>
        <li>Contractor's experience and qualifications</li>
        <li>References and portfolio</li>
        <li>Payment schedule fairness</li>
        <li>Warranty coverage</li>
        <li>Insurance and licensing verification</li>
      </ul>

      <h3>Red Flags in GC Bids</h3>
      <ul>
        <li>Significantly lower than other bids (20%+ below)</li>
        <li>Vague scope descriptions</li>
        <li>Large upfront payment required (over 33%)</li>
        <li>No detailed breakdown provided</li>
        <li>Unwillingness to provide proof of insurance</li>
        <li>No written warranty</li>
        <li>Pressure tactics or rush to sign</li>
      </ul>

      <h3>Questions to Ask Contractors</h3>
      <ul>
        <li>What's your fee structure and what does it cover?</li>
        <li>How do you handle change orders?</li>
        <li>Who will be on-site managing the project daily?</li>
        <li>What's your payment schedule?</li>
        <li>How do you communicate progress and issues?</li>
        <li>What warranty do you provide?</li>
        <li>How do you handle cost overruns?</li>
        <li>Can I see similar completed projects?</li>
      </ul>

      <h2>Negotiating with Contractors</h2>

      <h3>What's Negotiable</h3>
      <ul>
        <li>Payment schedule (but stay fair)</li>
        <li>Scope modifications (add/remove items)</li>
        <li>Material substitutions (upgrade or downgrade)</li>
        <li>Timeline adjustments</li>
        <li>Value engineering opportunities</li>
      </ul>

      <h3>What's Generally NOT Negotiable</h3>
      <ul>
        <li>Overhead costs (these are real business expenses)</li>
        <li>Insurance and licensing requirements</li>
        <li>Building code compliance</li>
        <li>Permit fees</li>
        <li>Basic profit margin (contractors need 8-15% to sustain business)</li>
      </ul>

      <h3>Value Engineering Strategies</h3>
      <ul>
        <li>Reduce square footage while maintaining functionality</li>
        <li>Simplify architectural details</li>
        <li>Choose mid-grade instead of premium materials</li>
        <li>Phase the project over time</li>
        <li>Do non-skilled work yourself (painting, cleanup)</li>
        <li>Provide some materials yourself (if contractor agrees)</li>
      </ul>

      <h2>Contract Essentials</h2>

      <h3>Every Construction Contract Should Include</h3>
      <ul>
        <li>Complete scope of work (detailed)</li>
        <li>Specific materials and grades (or "allowances")</li>
        <li>Total price and payment schedule</li>
        <li>Start and completion dates</li>
        <li>Change order process</li>
        <li>Lien waivers and releases</li>
        <li>Warranty terms (typically 1 year)</li>
        <li>Insurance certificates</li>
        <li>Permit responsibility</li>
        <li>Cleanup requirements</li>
        <li>Dispute resolution process</li>
      </ul>

      <h3>Payment Schedule Best Practices</h3>
      <p>
        Fair payment schedules tie payments to completed work milestones:
      </p>
      <ul>
        <li>Initial deposit: 10-33% (never more than 1/3)</li>
        <li>Progress payments: 25-40% at defined milestones</li>
        <li>Final payment: 10-20% upon completion and final inspection</li>
      </ul>
      <p>
        Never pay in full before completion. Maintain 10% retainage until all punch-list items are resolved.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What's a reasonable GC markup?</h3>
      <p>
        For most residential projects, 15-25% is reasonable. This covers overhead (8-12%) and profit (7-13%). Lower percentages on very large projects, higher on small or complex ones. Geographic location affects norms significantly.
      </p>

      <h3>Should I hire the lowest bidder?</h3>
      <p>
        Not necessarily. Extremely low bids may indicate: corners will be cut, scope misunderstanding, inexperienced contractor, or financial distress. Mid-range bids from qualified contractors typically deliver best value.
      </p>

      <h3>What's the difference between GC overhead and profit?</h3>
      <p>
        Overhead covers business operating costs (insurance, office, equipment, staff). Profit is the contractor's compensation for expertise, risk-taking, and business ownership. Both are legitimate and necessary for sustainable business operations.
      </p>

      <h3>Can I act as my own general contractor?</h3>
      <p>
        Yes, but requires significant time, construction knowledge, and liability. You'll coordinate all subs, obtain permits, manage schedules, handle inspections, and assume full liability. Savings often disappear through mistakes, delays, and unfavorable sub pricing. Good for experienced individuals with time flexibility.
      </p>

      <h3>Do I need a licensed contractor?</h3>
      <p>
        Yes for any substantial work. Licensed contractors carry required insurance, understand codes, and provide legal recourse if problems arise. Unlicensed contractors void insurance coverage and may create permit/resale issues. Verify license with state board.
      </p>

      <h3>How detailed should the bid be?</h3>
      <p>
        Bids should detail all major cost categories: materials (specific types), labor breakdown, subcontractor costs, permits, overhead, profit. Vague lump-sum bids create disputes when scope questions arise. Detailed bids indicate professional approach.
      </p>

      <h2>Conclusion</h2>
      <p>
        General contractor fees represent fair compensation for expertise, project management, liability assumption, and business operations. Understanding fee structures, typical percentages, and what's included helps you evaluate bids objectively and select contractors offering best value—not merely lowest price.
      </p>
      <p>
        Use this calculator to estimate reasonable GC fees for your project type and size. Get multiple detailed bids, verify credentials and insurance, check references, and select based on total value proposition. A skilled general contractor manages your project professionally, delivering quality results on schedule while protecting your investment through proper insurance, permitting, and workmanship.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "projectCost",
        label: "Estimated Project Cost (without GC fee) ($)",
        type: "number",
        defaultValue: 100000,
      },
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        options: [
          { value: "newConstruction", label: "New Construction (10-20%)" },
          { value: "addition", label: "Addition (15-25%)" },
          { value: "remodel", label: "Remodel/Renovation (18-30%)" },
          { value: "commercial", label: "Commercial (10-18%)" },
          { value: "historic", label: "Historic Restoration (20-35%)" },
        ],
        defaultValue: "addition",
      },
      {
        name: "feeStructure",
        label: "Fee Structure",
        type: "select",
        options: [
          { value: "percentage", label: "Cost-Plus % (Most Common)" },
          { value: "fixedFee", label: "Fixed Management Fee" },
          { value: "lumpSum", label: "Lump Sum Contract" },
        ],
        defaultValue: "percentage",
      },
      {
        name: "overheadPercent",
        label: "Overhead Percentage (%)",
        type: "number",
        defaultValue: 10,
      },
      {
        name: "profitPercent",
        label: "Profit Percentage (%)",
        type: "number",
        defaultValue: 10,
      },
      {
        name: "fixedFeeAmount",
        label: "Fixed Fee Amount (if applicable) ($)",
        type: "number",
        defaultValue: 15000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { projectCost, projectType, feeStructure, overheadPercent, profitPercent, fixedFeeAmount } = values;
      
      let gcFee = 0;
      let feeBreakdown = '';
      
      if (feeStructure === 'percentage') {
        const totalPercent = overheadPercent + profitPercent;
        gcFee = (projectCost * totalPercent) / 100;
        feeBreakdown = `${totalPercent}% (${overheadPercent}% overhead + ${profitPercent}% profit)`;
      } else if (feeStructure === 'fixedFee') {
        gcFee = fixedFeeAmount;
        feeBreakdown = 'Fixed management fee';
      } else {
        let lumpSumMarkup = 20;
        if (projectType === 'newConstruction') lumpSumMarkup = 15;
        if (projectType === 'addition') lumpSumMarkup = 20;
        if (projectType === 'remodel') lumpSumMarkup = 24;
        if (projectType === 'commercial') lumpSumMarkup = 14;
        if (projectType === 'historic') lumpSumMarkup = 27.5;
        
        gcFee = (projectCost * lumpSumMarkup) / 100;
        feeBreakdown = `${lumpSumMarkup}% lump sum markup`;
      }
      
      const overheadAmount = feeStructure === 'percentage' ? (projectCost * overheadPercent) / 100 : gcFee * 0.55;
      const profitAmount = feeStructure === 'percentage' ? (projectCost * profitPercent) / 100 : gcFee * 0.45;
      
      const totalProjectCost = projectCost + gcFee;
      const gcFeeAsPercent = (gcFee / projectCost) * 100;

      return [
        { label: "Base Project Cost", value: `$${projectCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "General Contractor Fee", value: `$${gcFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Fee Structure", value: feeBreakdown },
        { label: "├─ Overhead Component", value: `$${overheadAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "└─ Profit Component", value: `$${profitAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Total Project Cost", value: `$${totalProjectCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "GC Fee as % of Base Cost", value: `${gcFeeAsPercent.toFixed(1)}%` },
      ];
    },
  },
};
