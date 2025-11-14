import { CalculatorContent } from "@/types";

export const SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Subcontractor Markup Calculator",
  description: "Calculate appropriate markup on subcontractor labor and materials for general contractors and construction managers.",
  icon: "🔧",
  category: "Home Improvement",
  slug: "subcontractor-markup-calculator",
  article: {
    title: "Complete Guide to Subcontractor Markup Pricing",
    content: `
      <h2>Understanding Subcontractor Markup</h2>
      <p>
        When general contractors (GCs) hire subcontractors, they typically add a markup to subcontractor bids before presenting costs to clients. This markup compensates GCs for coordination, supervision, liability, warranty obligations, payment risk, and administrative overhead associated with managing subcontractors. Understanding standard markup practices helps both general contractors price competitively and property owners evaluate bids fairly.
      </p>
      <p>
        Typical subcontractor markups range from 10% to 35%, varying by trade, project type, and risk level. For example, a $10,000 plumbing subcontractor bid might be billed to the client at $11,500-$13,500 depending on markup applied. These markups are industry-standard and necessary for sustainable general contracting businesses.
      </p>

      <h2>Why General Contractors Mark Up Subcontractor Work</h2>

      <h3>1. Project Management and Coordination (5-8%)</h3>
      <p>
        GCs spend significant time managing subcontractors:
      </p>
      <ul>
        <li>Soliciting and reviewing subcontractor bids</li>
        <li>Verifying licensing, insurance, and qualifications</li>
        <li>Scheduling and coordinating multiple trades</li>
        <li>Resolving conflicts between trades</li>
        <li>Managing workflow to prevent delays</li>
        <li>Conducting quality inspections</li>
        <li>Ensuring code compliance</li>
      </ul>

      <h3>2. Payment and Financial Risk (2-5%)</h3>
      <p>
        GCs assume payment risk and cash flow burden:
      </p>
      <ul>
        <li>GC typically pays subs before receiving client payment</li>
        <li>Risk of non-payment from client</li>
        <li>Risk of subcontractor non-performance requiring replacement</li>
        <li>Administrative costs of invoicing and payment processing</li>
        <li>Bond and insurance costs to protect against sub defaults</li>
      </ul>

      <h3>3. Warranty and Liability (3-7%)</h3>
      <p>
        GCs provide warranties and assume liability:
      </p>
      <ul>
        <li>GC legally responsible for all work even if performed by subs</li>
        <li>Must handle warranty calls and defect remediation</li>
        <li>Coordinates comeback work for multiple trades</li>
        <li>Risk that subcontractor is unavailable or out of business for warranty service</li>
        <li>Insurance coverage for subcontractor work</li>
      </ul>

      <h3>4. Supervision and Quality Control (2-5%)</h3>
      <p>
        GCs oversee subcontractor work quality:
      </p>
      <ul>
        <li>Daily site visits and progress monitoring</li>
        <li>Ensuring workmanship meets standards</li>
        <li>Correcting deficiencies</li>
        <li>Punch list management</li>
        <li>Client communication about sub work</li>
      </ul>

      <h3>5. Profit Margin (5-15%)</h3>
      <p>
        GCs deserve reasonable profit for business sustainability:
      </p>
      <ul>
        <li>Compensation for expertise and business operations</li>
        <li>Investment in tools, equipment, and training</li>
        <li>Business growth and development</li>
        <li>Risk compensation for project uncertainties</li>
      </ul>

      <h2>Standard Markup Ranges by Trade</h2>

      <h3>Lower Risk Trades (10-20% markup)</h3>
      <p>
        Well-established, low-complexity trades with predictable outcomes:
      </p>
      <ul>
        <li><strong>Framing:</strong> 10-18% - Straightforward work, easy to inspect</li>
        <li><strong>Drywall:</strong> 12-18% - Commodity service, competitive pricing</li>
        <li><strong>Painting:</strong> 15-20% - Lower liability, easy to fix issues</li>
        <li><strong>Flooring:</strong> 12-20% - Clear specifications, visible quality</li>
        <li><strong>Landscaping:</strong> 15-20% - Lower technical complexity</li>
      </ul>

      <h3>Medium Risk Trades (15-25% markup)</h3>
      <p>
        Trades requiring more coordination, technical expertise, or carrying moderate liability:
      </p>
      <ul>
        <li><strong>Electrical:</strong> 15-25% - Code-critical, requires licensing, moderate liability</li>
        <li><strong>Plumbing:</strong> 15-25% - Code-critical, water damage risk</li>
        <li><strong>HVAC:</strong> 18-25% - Complex systems, ongoing performance obligations</li>
        <li><strong>Roofing:</strong> 18-25% - Weather-dependent, warranty concerns, leak liability</li>
        <li><strong>Siding:</strong> 15-22% - Weather exposure, appearance-critical</li>
        <li><strong>Windows/Doors:</strong> 18-25% - Precision installation, energy performance</li>
      </ul>

      <h3>Higher Risk Trades (20-35% markup)</h3>
      <p>
        Specialized trades with higher liability, complexity, or coordination requirements:
      </p>
      <ul>
        <li><strong>Foundation:</strong> 20-30% - Critical structural work, soil uncertainties</li>
        <li><strong>Concrete:</strong> 20-28% - Weather-dependent, difficult to fix if problems</li>
        <li><strong>Tile/stone:</strong> 20-30% - High material costs, aesthetic-critical</li>
        <li><strong>Custom cabinetry:</strong> 25-35% - High-end finishes, precise measurements</li>
        <li><strong>Masonry:</strong> 22-30% - Specialized skills, appearance-critical</li>
        <li><strong>Specialty trades:</strong> 25-35% - Limited availability, unique expertise</li>
      </ul>

      <h2>Markup on Materials vs. Labor</h2>

      <h3>Labor-Only Markup (Standard)</h3>
      <p>
        When subcontractor provides labor only and GC supplies materials:
      </p>
      <ul>
        <li>Typical markup: 15-25% on labor</li>
        <li>GC marks up materials separately (see below)</li>
        <li>Common for painting, drywall, flooring installation</li>
      </ul>

      <h3>Material Markup</h3>
      <p>
        When GC purchases and provides materials:
      </p>
      <ul>
        <li>Small orders (under $1,000): 20-40% markup</li>
        <li>Medium orders ($1,000-$10,000): 15-30% markup</li>
        <li>Large orders (over $10,000): 10-25% markup</li>
      </ul>
      <p>
        Markup covers procurement time, delivery coordination, storage, damage risk, and payment float.
      </p>

      <h3>Labor + Materials Package Markup</h3>
      <p>
        When subcontractor provides turnkey service (labor and materials):
      </p>
      <ul>
        <li>Typical markup: 15-25% on total package price</li>
        <li>Lower than labor-only because sub handles material procurement</li>
        <li>Common for HVAC, plumbing, electrical, roofing</li>
      </ul>

      <h2>Factors Affecting Markup Percentage</h2>

      <h3>1. Project Size</h3>
      <ul>
        <li>Small projects (under $50k total): 20-35% markup justified</li>
        <li>Medium projects ($50k-$250k): 15-25% markup</li>
        <li>Large projects (over $250k): 12-20% markup</li>
      </ul>
      <p>
        Larger projects allow lower percentage markups because fixed coordination costs are spread over larger base.
      </p>

      <h3>2. Project Complexity</h3>
      <ul>
        <li>Simple projects: Standard markups (15-20%)</li>
        <li>Complex coordination: Higher markups (20-30%)</li>
        <li>Fast-track schedules: Premium markups (25-35%)</li>
        <li>Occupied buildings: Higher markups (20-30%)</li>
      </ul>

      <h3>3. Subcontractor Reliability</h3>
      <ul>
        <li>Proven, reliable subs: Lower markup (12-18%)</li>
        <li>New or unknown subs: Higher markup (20-30%)</li>
        <li>Specialty one-time subs: Higher markup (25-35%)</li>
      </ul>

      <h3>4. Market Conditions</h3>
      <ul>
        <li>High demand (busy market): Can command higher markups</li>
        <li>Competitive bidding: Pressure to reduce markups</li>
        <li>Negotiated work: More flexibility in pricing</li>
      </ul>

      <h3>5. Scope of GC Services</h3>
      <ul>
        <li>Full-service GC (design, permits, etc.): Higher markup justified</li>
        <li>Construction management only: Lower markup (10-15%)</li>
        <li>Owner managing some trades: Lower GC markup on remaining work</li>
      </ul>

      <h2>Calculating Markup: Formulas and Examples</h2>

      <h3>Method 1: Simple Percentage Markup</h3>
      <p>
        <strong>Formula:</strong> Marked-Up Price = Subcontractor Cost × (1 + Markup %)
      </p>
      <p>
        <strong>Example:</strong> Plumber bids $8,000, GC applies 20% markup<br>
        Client Price = $8,000 × 1.20 = $9,600<br>
        GC receives $1,600 for managing plumbing work
      </p>

      <h3>Method 2: Margin-Based Pricing</h3>
      <p>
        <strong>Formula:</strong> Marked-Up Price = Subcontractor Cost ÷ (1 - Desired Margin %)
      </p>
      <p>
        <strong>Example:</strong> GC wants 20% margin on electrician's $10,000 bid<br>
        Client Price = $10,000 ÷ 0.80 = $12,500<br>
        Margin = $2,500 (which is 20% of $12,500)
      </p>
      <p>
        <em>Note: 20% markup ≠ 20% margin. 20% markup = 16.7% margin.</em>
      </p>

      <h3>Method 3: Tiered Markup Structure</h3>
      <p>
        Some GCs use varying markups based on cost tiers:
      </p>
      <ul>
        <li>First $10,000: 25% markup</li>
        <li>$10,000-$50,000: 20% markup</li>
        <li>Over $50,000: 15% markup</li>
      </ul>
      <p>
        <strong>Example:</strong> $60,000 HVAC subcontractor bid<br>
        First $10k: $10,000 × 1.25 = $12,500<br>
        Next $40k: $40,000 × 1.20 = $48,000<br>
        Final $10k: $10,000 × 1.15 = $11,500<br>
        Total client price: $72,000 (20% effective markup)
      </p>

      <h2>Ethical Considerations and Transparency</h2>

      <h3>Should GCs Disclose Markups?</h3>
      <p>
        Two schools of thought exist:
      </p>
      <p>
        <strong>Open-book approach:</strong> Show subcontractor costs and markup separately. Provides transparency but may lead clients to question markup legitimacy or shop subs directly.
      </p>
      <p>
        <strong>Lump-sum approach:</strong> Present all-inclusive pricing without breaking out markup. Industry standard for most residential work. Avoids markup debates but reduces transparency.
      </p>
      <p>
        Best practice: Disclose approach in contract. Cost-plus contracts show markups explicitly. Lump-sum contracts include markup in overall pricing.
      </p>

      <h3>Avoiding Excessive Markup</h3>
      <p>
        While markup is justified, excessive rates damage trust:
      </p>
      <ul>
        <li>Markups over 40% appear opportunistic (except tiny jobs)</li>
        <li>Wildly inconsistent markups across trades raise red flags</li>
        <li>Hidden markups on change orders create disputes</li>
      </ul>
      <p>
        Fair markup reflects actual risk, complexity, and value-added services provided.
      </p>

      <h2>Special Situations</h2>

      <h3>Owner-Supplied Subcontractors</h3>
      <p>
        When owners want to hire certain subs directly:
      </p>
      <ul>
        <li>GC should charge supervision fee (10-15% of sub's invoice)</li>
        <li>GC still responsible for coordination and schedule integration</li>
        <li>Written agreement clarifying liability and warranty responsibility</li>
        <li>Not recommended for critical trades (foundation, framing, roofing)</li>
      </ul>

      <h3>Change Orders and Extra Work</h3>
      <p>
        Markup on change order subcontractor work:
      </p>
      <ul>
        <li>Small changes (under $1,000): 25-40% markup justified</li>
        <li>Medium changes ($1,000-$10,000): 20-30% markup</li>
        <li>Large changes (over $10,000): 15-25% markup</li>
      </ul>
      <p>
        Higher markups reflect administrative burden and schedule disruption from changes.
      </p>

      <h3>Emergency or After-Hours Work</h3>
      <p>
        When subs charge emergency rates:
      </p>
      <ul>
        <li>Apply standard markup to emergency rate, or</li>
        <li>Pass through at cost and charge fixed coordination fee</li>
        <li>Document emergency nature to justify higher cost to client</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Is 20% markup on subcontractors reasonable?</h3>
      <p>
        Yes, 20% is well within industry standards for most trades. This typically covers GC overhead (8-12%) and profit (8-12%). Clients receive value through professional coordination, quality control, warranty service, and liability protection.
      </p>

      <h3>Can I hire subcontractors directly to avoid GC markup?</h3>
      <p>
        You can, but you assume all coordination, scheduling, quality control, warranty, and liability responsibilities. Most homeowners lack expertise to manage multiple trades effectively. Mistakes and delays often cost more than GC markup savings. Consider this only if you have construction experience and significant time availability.
      </p>

      <h3>Should markup be the same for all subcontractors?</h3>
      <p>
        No. Markup should reflect actual risk and management requirements. High-risk or complex trades (foundation, tile) justify higher markups than commodity trades (drywall). Consistent markup policies within trade categories are appropriate.
      </p>

      <h3>What if I find out my GC marked up subs by 50%?</h3>
      <p>
        Evaluate total project pricing rather than isolated markup percentages. If overall price is competitive and work quality is high, the total value may be fair even with high markup. If total price seems excessive, get competing bids. For cost-plus contracts, review contract terms about allowed markups.
      </p>

      <h3>Do commercial projects have different markup standards?</h3>
      <p>
        Yes. Commercial projects typically have lower markups (10-18%) due to larger project sizes, more sophisticated clients, and competitive bidding. However, complex or fast-track commercial work may command higher markups (20-25%).
      </p>

      <h2>Best Practices for General Contractors</h2>

      <h3>Setting Your Markup Policy</h3>
      <ul>
        <li>Develop consistent markup schedule by trade</li>
        <li>Document justification for markup rates</li>
        <li>Review and adjust annually based on actual costs</li>
        <li>Be prepared to explain value provided</li>
        <li>Ensure markup covers actual management costs plus fair profit</li>
      </ul>

      <h3>Maintaining Subcontractor Relationships</h3>
      <ul>
        <li>Pay subs promptly (builds goodwill and priority scheduling)</li>
        <li>Don't squeeze sub prices excessively (quality suffers)</li>
        <li>Cultivate reliable sub network (reduces risk, allows lower markup)</li>
        <li>Protect subs from client non-payment when possible</li>
        <li>Provide clear scopes to minimize pricing disputes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Subcontractor markup is a standard, necessary component of general contracting business. Fair markups (typically 15-25% for most trades) compensate GCs for real management services, financial risk, liability, and business sustainability. Understanding markup norms helps general contractors price competitively while ensuring profitability, and helps clients evaluate bids objectively without unfairly questioning legitimate business practices.
      </p>
      <p>
        Use this calculator to determine appropriate markup for different subcontractor trades and project scenarios. Balance competitive pricing with sustainable business operations, ensuring you're fairly compensated for the value you provide while maintaining client trust through reasonable, justifiable pricing.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "subCost",
        label: "Subcontractor Cost ($)",
        type: "number",
        defaultValue: 10000,
      },
      {
        name: "tradeType",
        label: "Trade Type",
        type: "select",
        options: [
          { value: "lowRisk", label: "Low Risk (Drywall, Painting, Flooring)" },
          { value: "mediumRisk", label: "Medium Risk (Electrical, Plumbing, HVAC)" },
          { value: "highRisk", label: "High Risk (Foundation, Tile, Custom Work)" },
        ],
        defaultValue: "mediumRisk",
      },
      {
        name: "markupMethod",
        label: "Markup Method",
        type: "select",
        options: [
          { value: "percentage", label: "Percentage Markup" },
          { value: "margin", label: "Target Margin" },
        ],
        defaultValue: "percentage",
      },
      {
        name: "markupPercent",
        label: "Markup Percentage (%)",
        type: "number",
        defaultValue: 20,
      },
      {
        name: "targetMargin",
        label: "Target Margin (%) - For margin method",
        type: "number",
        defaultValue: 20,
      },
      {
        name: "projectSize",
        label: "Project Size Multiplier",
        type: "select",
        options: [
          { value: "small", label: "Small Project (<$50k) - Higher markup" },
          { value: "medium", label: "Medium Project ($50k-250k) - Standard" },
          { value: "large", label: "Large Project (>$250k) - Lower markup" },
        ],
        defaultValue: "medium",
      },
    ],
    results: [],
    calculate: (values) => {
      const { subCost, tradeType, markupMethod, markupPercent, targetMargin, projectSize } = values;
      
      let baseMarkup = markupPercent;
      
      if (tradeType === 'lowRisk') baseMarkup = Math.min(baseMarkup, 18);
      if (tradeType === 'highRisk') baseMarkup = Math.max(baseMarkup, 22);
      
      if (projectSize === 'small') baseMarkup *= 1.15;
      if (projectSize === 'large') baseMarkup *= 0.85;
      
      let clientPrice = 0;
      let gcEarnings = 0;
      let effectiveMargin = 0;
      let methodUsed = '';
      
      if (markupMethod === 'percentage') {
        clientPrice = subCost * (1 + baseMarkup / 100);
        gcEarnings = clientPrice - subCost;
        effectiveMargin = (gcEarnings / clientPrice) * 100;
        methodUsed = `${baseMarkup.toFixed(1)}% markup`;
      } else {
        clientPrice = subCost / (1 - targetMargin / 100);
        gcEarnings = clientPrice - subCost;
        effectiveMargin = targetMargin;
        methodUsed = `${targetMargin}% target margin`;
      }
      
      const estimatedOverhead = gcEarnings * 0.50;
      const estimatedProfit = gcEarnings * 0.50;
      const effectiveMarkupPercent = (gcEarnings / subCost) * 100;

      return [
        { label: "Subcontractor Cost", value: `$${subCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Method Used", value: methodUsed },
        { label: "Client Price", value: `$${clientPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "GC Earnings", value: `$${gcEarnings.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "├─ Est. Overhead (50%)", value: `$${estimatedOverhead.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "└─ Est. Profit (50%)", value: `$${estimatedProfit.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Effective Markup %", value: `${effectiveMarkupPercent.toFixed(1)}%` },
        { label: "Effective Margin %", value: `${effectiveMargin.toFixed(1)}%` },
      ];
    },
  },
};
