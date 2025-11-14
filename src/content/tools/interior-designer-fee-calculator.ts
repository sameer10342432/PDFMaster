import { CalculatorContent } from "@/types";

export const INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Interior Designer Fee Calculator",
  description: "Calculate interior designer fees based on project scope, fee structure, and design complexity.",
  icon: "🛋️",
  category: "Home Improvement",
  slug: "interior-designer-fee-calculator",
  article: {
    title: "Complete Guide to Interior Designer Fees and Pricing",
    content: `
      <h2>Understanding Interior Designer Fees</h2>
      <p>
        Hiring an interior designer can transform your space from ordinary to extraordinary while potentially saving money through expert product sourcing, avoiding costly mistakes, and maximizing space functionality. Understanding how interior designers structure their fees and what factors influence costs helps you budget appropriately and select the right professional for your project.
      </p>
      <p>
        Interior designer fees vary widely based on location, designer experience, project scope, and fee structure. Expect to invest $2,000-$12,000 for a single room design, $10,000-$50,000 for whole-home design, or $50,000-$200,000+ for luxury full-service projects. These fees typically don't include furniture and furnishings (FF&E), which are budgeted separately.
      </p>

      <h2>Interior Designer Fee Structures</h2>

      <h3>1. Hourly Rate ($75-$500 per hour)</h3>
      <p>
        <strong>How it works:</strong> Designer bills actual time spent on your project at specified hourly rates.
      </p>
      <p>
        <strong>Typical rates by experience:</strong>
      </p>
      <ul>
        <li>Junior designers: $75-$125 per hour</li>
        <li>Mid-level designers: $125-$250 per hour</li>
        <li>Senior/established designers: $200-$350 per hour</li>
        <li>Celebrity/luxury designers: $350-$500+ per hour</li>
      </ul>
      <p>
        <strong>Pros:</strong> Pay only for time used, flexible for changing scope, transparent billing
      </p>
      <p>
        <strong>Cons:</strong> Unpredictable total cost, requires tracking and trust, can discourage communication
      </p>

      <h3>2. Flat/Fixed Fee ($2,000-$50,000+)</h3>
      <p>
        <strong>How it works:</strong> Designer quotes a total fee for defined scope of work.
      </p>
      <p>
        <strong>Typical fees by project:</strong>
      </p>
      <ul>
        <li>Single room design: $2,000-$8,000</li>
        <li>Kitchen design: $5,000-$15,000</li>
        <li>Master suite: $4,000-$12,000</li>
        <li>Whole home design: $15,000-$100,000+</li>
        <li>Commercial space: $10,000-$200,000+</li>
      </ul>
      <p>
        <strong>Pros:</strong> Known cost upfront, budget certainty, incentivizes efficiency
      </p>
      <p>
        <strong>Cons:</strong> Scope changes create disputes, designer may inflate for safety
      </p>

      <h3>3. Percentage of Project Cost (10-30% of FF&E budget)</h3>
      <p>
        <strong>How it works:</strong> Designer charges percentage of total furniture, furnishings, and equipment expenditures.
      </p>
      <p>
        <strong>Typical percentages:</strong>
      </p>
      <ul>
        <li>Design-only (no purchasing): 15-20%</li>
        <li>Full-service with purchasing: 25-35%</li>
        <li>High-end luxury projects: 30-40%</li>
      </ul>
      <p>
        <strong>Pros:</strong> Scales with project investment, aligns designer with quality
      </p>
      <p>
        <strong>Cons:</strong> Can incentivize higher spending, creates perceived conflict of interest
      </p>

      <h3>4. Cost-Plus (Design Trade Discount)</h3>
      <p>
        <strong>How it works:</strong> Designer purchases at trade discount (typically 20-50% off retail), passes through at cost plus markup (usually 10-30%).
      </p>
      <p>
        <strong>Example:</strong> Sofa retails for $5,000. Designer buys at $3,000 (40% trade discount), bills you $3,600 (20% markup on trade price).
      </p>
      <p>
        <strong>Pros:</strong> Access to trade pricing, transparent pricing structure, can save money vs. retail
      </p>
      <p>
        <strong>Cons:</strong> Requires trust in designer's markup, shopping around difficult
      </p>

      <h3>5. Per Square Foot ($5-$20 per sq ft)</h3>
      <p>
        <strong>How it works:</strong> Designer charges based on total square footage of space being designed.
      </p>
      <p>
        <strong>Typical rates:</strong>
      </p>
      <ul>
        <li>Basic residential: $5-$8 per sq ft</li>
        <li>Custom residential: $8-$15 per sq ft</li>
        <li>Luxury residential: $15-$25 per sq ft</li>
        <li>Commercial office: $7-$15 per sq ft</li>
      </ul>
      <p>
        <strong>Pros:</strong> Easy to calculate, scales with space size
      </p>
      <p>
        <strong>Cons:</strong> Doesn't account for complexity or budget variations
      </p>

      <h2>Scope of Interior Design Services</h2>

      <h3>Design-Only Services</h3>
      <p>
        Designer creates comprehensive design plan that you implement yourself:
      </p>
      <ul>
        <li>Space planning and floor plans</li>
        <li>Color schemes and material palettes</li>
        <li>Furniture and fixture recommendations with sources</li>
        <li>Lighting plan</li>
        <li>Mood boards and renderings</li>
        <li>Shopping list with product links</li>
      </ul>
      <p>
        <strong>Cost:</strong> Typically 50-60% of full-service fees
      </p>

      <h3>Full-Service Interior Design</h3>
      <p>
        Comprehensive design and implementation services:
      </p>
      <ul>
        <li>All design-only services</li>
        <li>Furniture and product procurement</li>
        <li>Contractor and vendor coordination</li>
        <li>Project management</li>
        <li>Installation and styling</li>
        <li>Post-installation adjustments</li>
      </ul>
      <p>
        <strong>Cost:</strong> 100% of quoted fees plus FF&E budget
      </p>

      <h3>Consultation/Advisory Services</h3>
      <p>
        Limited scope assistance:
      </p>
      <ul>
        <li>Initial consultation (1-2 hours): $150-$500</li>
        <li>Color consultation: $300-$1,000</li>
        <li>Furniture placement: $200-$800</li>
        <li>Shopping assistance: $100-$300 per hour</li>
      </ul>

      <h2>Additional Costs and Fees</h2>

      <h3>Reimbursable Expenses</h3>
      <ul>
        <li>Travel costs (if project is remote)</li>
        <li>Sample purchases and materials</li>
        <li>Professional photography</li>
        <li>CAD drafting or 3D rendering ($500-$3,000)</li>
        <li>Courier and shipping costs</li>
      </ul>

      <h3>FF&E Budget (Furniture, Furnishings, Equipment)</h3>
      <p>
        Separate from design fees. Budget varies by room:
      </p>
      <ul>
        <li>Living room: $10,000-$50,000</li>
        <li>Master bedroom: $8,000-$35,000</li>
        <li>Kitchen (non-structural): $15,000-$75,000</li>
        <li>Bathroom: $5,000-$25,000</li>
        <li>Dining room: $8,000-$40,000</li>
        <li>Home office: $5,000-$20,000</li>
      </ul>

      <h3>Related Professional Services</h3>
      <ul>
        <li>Architect (structural changes): $5,000-$50,000</li>
        <li>Contractor (construction): Varies by scope</li>
        <li>Window treatments fabrication: $2,000-$15,000</li>
        <li>Custom millwork/cabinetry: $5,000-$50,000</li>
        <li>Art consultant/curation: 10-30% of art budget</li>
      </ul>

      <h2>Factors Affecting Interior Designer Fees</h2>

      <h3>1. Designer Experience and Credentials</h3>
      <ul>
        <li><strong>Interior decorator:</strong> No formal training required ($50-$150/hour)</li>
        <li><strong>Interior designer (degree):</strong> Formal education ($100-$250/hour)</li>
        <li><strong>Certified Interior Designer (CID/NCIDQ):</strong> Licensed professional ($150-$350/hour)</li>
        <li><strong>Award-winning/celebrity designers:</strong> Premium rates ($300-$500+/hour)</li>
      </ul>

      <h3>2. Project Complexity</h3>
      <ul>
        <li><strong>Simple refresh:</strong> Paint, furniture, accessories (lower fees)</li>
        <li><strong>Standard remodel:</strong> New furniture, some custom pieces (standard fees)</li>
        <li><strong>Complex renovation:</strong> Structural changes, custom everything (premium fees)</li>
        <li><strong>Ground-up design:</strong> New construction, all custom (highest fees)</li>
      </ul>

      <h3>3. Geographic Location</h3>
      <ul>
        <li><strong>Major metros (NYC, LA, SF, Miami):</strong> $200-$500+/hour</li>
        <li><strong>Large cities:</strong> $125-$300/hour</li>
        <li><strong>Mid-size cities:</strong> $100-$200/hour</li>
        <li><strong>Small towns/rural:</strong> $75-$150/hour</li>
      </ul>

      <h3>4. Project Timeline</h3>
      <ul>
        <li>Standard timeline (3-6 months): Base fees</li>
        <li>Expedited timeline (under 3 months): 15-30% rush premium</li>
        <li>Extended timeline (over 1 year): May offer discount for steady work</li>
      </ul>

      <h2>How to Work with an Interior Designer</h2>

      <h3>Step 1: Define Your Needs and Budget</h3>
      <p>
        Determine:
      </p>
      <ul>
        <li>Which rooms/spaces need design</li>
        <li>Your design style preferences</li>
        <li>Total budget (design fees + FF&E)</li>
        <li>Timeline and any deadline constraints</li>
        <li>Level of service needed (consultation vs. full-service)</li>
      </ul>

      <h3>Step 2: Research and Interview Designers</h3>
      <ul>
        <li>Review portfolios online</li>
        <li>Check credentials (degree, NCIDQ, ASID membership)</li>
        <li>Read client reviews</li>
        <li>Interview 3-5 designers</li>
        <li>Assess chemistry and communication style</li>
      </ul>

      <h3>Step 3: Understand the Proposal</h3>
      <p>
        Designer proposal should include:
      </p>
      <ul>
        <li>Detailed scope of services</li>
        <li>Fee structure and payment schedule</li>
        <li>Timeline with milestones</li>
        <li>What is NOT included</li>
        <li>Revision policy</li>
        <li>Termination terms</li>
      </ul>

      <h3>Step 4: Sign Contract and Pay Retainer</h3>
      <p>
        Typical payment structure:
      </p>
      <ul>
        <li>Initial retainer: 25-50% of design fee</li>
        <li>Progress payments: At defined milestones</li>
        <li>Final payment: Upon installation completion</li>
        <li>FF&E purchases: Deposit (usually 50%) before ordering, balance upon delivery</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What's the difference between interior designer and decorator?</h3>
      <p>
        Interior designers typically have formal education (bachelor's degree), can make structural suggestions, understand building codes, and may be licensed. Decorators focus on aesthetics (furniture, color, accessories) without structural expertise. Designers generally command higher fees but offer more comprehensive services.
      </p>

      <h3>Can I hire a designer for just one room?</h3>
      <p>
        Yes! Many designers offer single-room services. Expect to pay $2,000-$8,000 for design-only services or $3,000-$15,000 for full-service including furniture procurement and installation.
      </p>

      <h3>Do designers require a minimum budget?</h3>
      <p>
        Many designers have minimum project fees ($5,000-$10,000) or minimum FF&E budgets ($15,000-$30,000). High-end designers may require $50,000-$100,000+ minimums. Ask about minimums during initial conversations.
      </p>

      <h3>Can I save money by implementing the design myself?</h3>
      <p>
        Yes—design-only services cost 40-50% less than full-service. However, you lose trade discounts, professional installation, project management, and designer accountability. Consider your time value and DIY comfort level.
      </p>

      <h3>How long does the design process take?</h3>
      <p>
        Single room: 6-12 weeks from contract to installation<br>
        Whole home: 3-9 months depending on scope<br>
        Ground-up new construction: 6-18 months<br>
        Custom furniture lead times can extend projects by 8-16 weeks.
      </p>

      <h3>What if I don't like the design?</h3>
      <p>
        Reputable designers include 1-2 rounds of revisions in their fees. Major redesigns may incur additional charges. Clear communication about preferences upfront minimizes this risk. Review mood boards and samples carefully before full purchase commitments.
      </p>

      <h2>Maximizing Value from Your Interior Designer</h2>

      <h3>1. Prepare Before Your First Meeting</h3>
      <ul>
        <li>Create Pinterest boards or idea files</li>
        <li>Identify what you dislike in current space</li>
        <li>List functional requirements</li>
        <li>Establish realistic budget</li>
        <li>Be honest about lifestyle and habits</li>
      </ul>

      <h3>2. Communicate Clearly and Promptly</h3>
      <ul>
        <li>Respond to designer questions quickly</li>
        <li>Be honest about budget constraints</li>
        <li>Express concerns early</li>
        <li>Provide feedback on concepts and samples</li>
      </ul>

      <h3>3. Trust the Process</h3>
      <ul>
        <li>Designers see possibilities you don't</li>
        <li>Sample before rejecting unfamiliar options</li>
        <li>Understand designer reasoning</li>
        <li>Don't micromanage the details</li>
      </ul>

      <h3>4. Be Realistic About Budget</h3>
      <ul>
        <li>Quality furnishings cost more than IKEA</li>
        <li>Custom pieces have long lead times</li>
        <li>Trade discounts don't mean "cheap"</li>
        <li>Investment pieces last decades</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Interior designers bring expertise, connections, and vision that transform spaces into functional, beautiful environments reflecting your lifestyle. Understanding fee structures, service scopes, and working relationships helps you budget appropriately and select the right professional partner. While design fees represent an investment, professional design typically saves money through avoided mistakes, trade discounts, and maximized space functionality—while delivering results that elevate your daily living experience.
      </p>
      <p>
        Use this calculator to estimate design fees for your project, then interview multiple qualified professionals. Select based on portfolio alignment, communication style, and value proposition—not lowest price alone. The right designer relationship delivers transformation that justifies the investment many times over.
      </p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        options: [
          { value: "singleRoom", label: "Single Room Design" },
          { value: "multiRoom", label: "Multiple Rooms (2-4)" },
          { value: "wholeHome", label: "Whole Home Design" },
          { value: "kitchen", label: "Kitchen Design" },
          { value: "masterSuite", label: "Master Suite" },
        ],
        defaultValue: "singleRoom",
      },
      {
        name: "serviceLevel",
        label: "Service Level",
        type: "select",
        options: [
          { value: "consultation", label: "Consultation Only (1-2 hours)" },
          { value: "designOnly", label: "Design-Only (No Purchasing)" },
          { value: "fullService", label: "Full-Service (With Purchasing)" },
        ],
        defaultValue: "designOnly",
      },
      {
        name: "feeStructure",
        label: "Fee Structure",
        type: "select",
        options: [
          { value: "hourly", label: "Hourly Rate" },
          { value: "flatFee", label: "Flat Fee" },
          { value: "percentage", label: "% of FF&E Budget" },
        ],
        defaultValue: "flatFee",
      },
      {
        name: "designerLevel",
        label: "Designer Experience Level",
        type: "select",
        options: [
          { value: "junior", label: "Junior Designer ($75-125/hr)" },
          { value: "midLevel", label: "Mid-Level Designer ($125-250/hr)" },
          { value: "senior", label: "Senior Designer ($200-350/hr)" },
          { value: "luxury", label: "Luxury/Celebrity ($350-500/hr)" },
        ],
        defaultValue: "midLevel",
      },
      {
        name: "estimatedHours",
        label: "Estimated Project Hours (for hourly)",
        type: "number",
        defaultValue: 40,
      },
      {
        name: "ffebudget",
        label: "FF&E Budget (for % structure) ($)",
        type: "number",
        defaultValue: 30000,
      },
    ],
    results: [],
    calculate: (values) => {
      const { projectType, serviceLevel, feeStructure, designerLevel, estimatedHours, ffeBudget } = values;
      
      let hourlyRate = 175;
      if (designerLevel === 'junior') hourlyRate = 100;
      if (designerLevel === 'midLevel') hourlyRate = 175;
      if (designerLevel === 'senior') hourlyRate = 275;
      if (designerLevel === 'luxury') hourlyRate = 425;
      
      let designFee = 0;
      let feeDescription = '';
      
      if (serviceLevel === 'consultation') {
        designFee = hourlyRate * 1.5;
        feeDescription = 'Consultation (1.5 hours)';
      } else if (feeStructure === 'hourly') {
        designFee = hourlyRate * estimatedHours;
        feeDescription = `${estimatedHours} hours @ $${hourlyRate}/hr`;
      } else if (feeStructure === 'flatFee') {
        if (projectType === 'singleRoom') designFee = 5000;
        if (projectType === 'multiRoom') designFee = 12000;
        if (projectType === 'wholeHome') designFee = 35000;
        if (projectType === 'kitchen') designFee = 10000;
        if (projectType === 'masterSuite') designFee = 8000;
        
        if (designerLevel === 'junior') designFee *= 0.7;
        if (designerLevel === 'senior') designFee *= 1.3;
        if (designerLevel === 'luxury') designFee *= 1.8;
        
        if (serviceLevel === 'designOnly') designFee *= 0.6;
        
        feeDescription = `Flat fee for ${projectType}`;
      } else {
        const percentage = serviceLevel === 'designOnly' ? 17.5 : 30;
        designFee = (ffeBudget * percentage) / 100;
        feeDescription = `${percentage}% of $${ffeBudget.toLocaleString()} FF&E budget`;
      }
      
      const reimbursables = designFee * 0.05;
      const totalDesignCost = designFee + reimbursables;
      const totalProjectBudget = totalDesignCost + (feeStructure === 'percentage' ? ffeBudget : 0);

      return [
        { label: "Design Fee", value: `$${designFee.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Fee Structure", value: feeDescription },
        { label: "Estimated Reimbursables", value: `$${reimbursables.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: "Total Design Cost", value: `$${totalDesignCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        ...(feeStructure === 'percentage' ? [
          { label: "FF&E Budget", value: `$${ffeBudget.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
          { label: "Total Project Budget", value: `$${totalProjectBudget.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        ] : []),
      ];
    },
  },
};
