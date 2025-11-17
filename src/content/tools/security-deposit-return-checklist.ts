import { CalculatorContent } from '@/types';

export const SECURITY_DEPOSIT_RETURN_CHECKLIST_CONTENT: CalculatorContent = {
  title: 'Security Deposit Return Checklist',
  description: 'Comprehensive move-out checklist to maximize your security deposit return with cleaning and repair guidelines',
  icon: '✅',
  category: 'Renter Tools',
  slug: 'security-deposit-return-checklist',
  article: {
    title: "How to Get Your Full Security Deposit Back",
    content: `
    <h2>Maximizing Your Security Deposit Return</h2>
    <p>Getting your full security deposit back requires careful attention to detail when moving out. This comprehensive guide helps you understand what landlords look for and how to leave your rental in perfect condition.</p>
    
    <h3>Know Your Rights</h3>
    <ul>
      <li><strong>State Laws:</strong> Each state has different rules for security deposits</li>
      <li><strong>Timeline:</strong> Most states require return within 14-30 days</li>
      <li><strong>Itemized Deductions:</strong> Landlords must provide detailed list of charges</li>
      <li><strong>Normal Wear and Tear:</strong> Cannot be charged for reasonable aging</li>
      <li><strong>Interest:</strong> Some states require landlords to pay interest on deposits</li>
      <li><strong>Walk-Through Rights:</strong> Many states allow pre-move-out inspection</li>
    </ul>
    
    <h3>Normal Wear and Tear vs. Damage</h3>
    <p>You CANNOT be charged for:</p>
    <ul>
      <li>Faded paint or wallpaper</li>
      <li>Minor scuffs on walls from hanging pictures</li>
      <li>Worn carpet in high-traffic areas</li>
      <li>Loose door handles or hinges from normal use</li>
      <li>Faded curtains or window treatments</li>
      <li>Minor scratches on hardwood floors</li>
    </ul>
    <p>You CAN be charged for:</p>
    <ul>
      <li>Large holes in walls</li>
      <li>Pet damage (stains, scratches, odors)</li>
      <li>Broken windows or fixtures</li>
      <li>Excessive dirt or stains</li>
      <li>Missing or broken appliances</li>
      <li>Carpet burns or large stains</li>
    </ul>
    
    <h3>Kitchen Cleaning Checklist</h3>
    <ul>
      <li>Clean inside and outside of all appliances (refrigerator, oven, microwave, dishwasher)</li>
      <li>Degrease stovetop and range hood</li>
      <li>Clean inside all cabinets and drawers</li>
      <li>Wipe down all countertops and backsplash</li>
      <li>Clean sink and faucet (remove mineral deposits)</li>
      <li>Sweep and mop floors</li>
      <li>Replace or clean range hood filter</li>
      <li>Clean under and behind appliances if possible</li>
    </ul>
    
    <h3>Bathroom Cleaning Checklist</h3>
    <ul>
      <li>Scrub toilet, sink, and bathtub/shower thoroughly</li>
      <li>Remove mold and mildew from grout and caulking</li>
      <li>Clean mirrors and any glass surfaces</li>
      <li>Polish faucets and fixtures</li>
      <li>Clean inside cabinets and drawers</li>
      <li>Replace shower curtain if damaged</li>
      <li>Clean exhaust fan cover</li>
      <li>Sweep and mop floors</li>
    </ul>
    
    <h3>Living Areas and Bedrooms</h3>
    <ul>
      <li>Vacuum all carpets and rugs</li>
      <li>Sweep and mop hard floors</li>
      <li>Dust all surfaces, including ceiling fans and light fixtures</li>
      <li>Clean windows inside and out if accessible</li>
      <li>Wipe down baseboards and window sills</li>
      <li>Clean inside all closets</li>
      <li>Touch up paint where needed (ask landlord first)</li>
      <li>Remove all nails and fill holes with spackle</li>
      <li>Clean air vents and replace HVAC filters</li>
    </ul>
    
    <h3>Common Areas and Outdoor Spaces</h3>
    <ul>
      <li>Clean entryway and hallways</li>
      <li>Wipe down light switches and doorknobs</li>
      <li>Clean balcony or patio</li>
      <li>Remove all personal items from storage areas</li>
      <li>Sweep garage or carport if included</li>
      <li>Dispose of all trash properly</li>
    </ul>
    
    <h3>Documentation is Critical</h3>
    <ul>
      <li><strong>Move-In Photos:</strong> Compare to move-out condition</li>
      <li><strong>Move-Out Photos:</strong> Document every room from multiple angles</li>
      <li><strong>Video Walkthrough:</strong> Record a video tour showing cleanliness</li>
      <li><strong>Date-Stamped Evidence:</strong> Use photos with metadata</li>
      <li><strong>Pre-Move-Out Inspection:</strong> Request this 2 weeks before moving</li>
      <li><strong>Receipts:</strong> Keep receipts for any cleaning or repairs you do</li>
    </ul>
    
    <h3>Timeline for Move-Out</h3>
    <ul>
      <li><strong>30 Days Before:</strong> Review lease, notify landlord, schedule inspection</li>
      <li><strong>2 Weeks Before:</strong> Begin deep cleaning process</li>
      <li><strong>1 Week Before:</strong> Complete repairs, final cleaning</li>
      <li><strong>Moving Day:</strong> Final walkthrough, photos, return keys</li>
      <li><strong>After Move-Out:</strong> Follow up on deposit return</li>
    </ul>
    
    <h3>Professional Cleaning Worth It?</h3>
    <p>Professional cleaning costs $200-$400 but may be worth it if:</p>
    <ul>
      <li>Your deposit is large ($2,000+)</li>
      <li>You have limited time</li>
      <li>The unit needs deep cleaning</li>
      <li>Lease requires professional cleaning receipt</li>
    </ul>
    
    <h3>What to Do If Deposit Not Returned</h3>
    <ul>
      <li>Send written demand letter via certified mail</li>
      <li>Review itemized deduction list for improper charges</li>
      <li>File complaint with local housing authority</li>
      <li>Consider small claims court if amount is significant</li>
      <li>Document all communication with landlord</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "depositAmount",
        label: "Security Deposit Amount",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "itemsCompleted",
        label: "Checklist Items Completed (%)",
        type: "number",
        placeholder: "85",
        defaultValue: "85",
      },
      {
        name: "visibleDamage",
        label: "Visible Damage?",
        type: "select",
        options: [{ value: "None", label: "None" }, { value: "Minor", label: "Minor" }, { value: "Moderate", label: "Moderate" }, { value: "Significant", label: "Significant" }],
        defaultValue: "Minor",
      },
      {
        name: "professionalCleaning",
        label: "Professional Cleaning Done?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "No",
      },
      {
        name: "petDamage",
        label: "Pet Damage Present?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "No",
      },
      {
        name: "documentationComplete",
        label: "Documentation Complete?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "Yes",
      },
    ],
    results: [
      { label: "Estimated Deposit Return", isCurrency: true },
      { label: "Potential Deductions", isCurrency: true },
      { label: "Return Probability", isCurrency: false },
      { label: "Recommended Actions", isCurrency: false },
      { label: "Professional Cleaning Investment", isCurrency: false },
    ],
    calculate: (data: any) => {
      const depositAmount = Number(data.depositAmount) || 0;
      const itemsCompleted = Number(data.itemsCompleted) || 0;
      const visibleDamage = data.visibleDamage || "None";
      const professionalCleaning = data.professionalCleaning === "Yes";
      const petDamage = data.petDamage === "Yes";
      const documentationComplete = data.documentationComplete === "Yes";
      
      // Calculate base return percentage
      let returnPercentage = itemsCompleted;
      
      // Adjust for damage
      if (visibleDamage === "Significant") returnPercentage -= 40;
      else if (visibleDamage === "Moderate") returnPercentage -= 25;
      else if (visibleDamage === "Minor") returnPercentage -= 10;
      
      // Pet damage impact
      if (petDamage) returnPercentage -= 20;
      
      // Professional cleaning boost
      if (professionalCleaning) returnPercentage += 10;
      
      // Documentation boost
      if (documentationComplete) returnPercentage += 5;
      
      // Ensure within bounds
      returnPercentage = Math.max(0, Math.min(100, returnPercentage));
      
      const estimatedReturn = depositAmount * (returnPercentage / 100);
      const potentialDeductions = depositAmount - estimatedReturn;
      
      // Determine probability category
      let probability = "";
      if (returnPercentage >= 90) probability = "🟢 Very High (90%+)";
      else if (returnPercentage >= 75) probability = "🟡 High (75-90%)";
      else if (returnPercentage >= 50) probability = "🟠 Medium (50-75%)";
      else probability = "🔴 Low (<50%)";
      
      // Recommended actions
      let actions = "";
      if (itemsCompleted < 90) actions += "Complete remaining checklist items, ";
      if (visibleDamage !== "None") actions += "Repair visible damage, ";
      if (!professionalCleaning && depositAmount > 1500) actions += "Consider professional cleaning, ";
      if (!documentationComplete) actions += "Take comprehensive photos/video, ";
      if (petDamage) actions += "Professional carpet cleaning required, ";
      
      if (actions) actions = actions.slice(0, -2);
      else actions = "✅ You're in great shape!";
      
      // Professional cleaning recommendation
      const cleaningCost = 300;
      const cleaningROI = professionalCleaning ? "Already done ✅" : 
        depositAmount > 1500 ? `Worth it! ($${cleaningCost} could save $${(depositAmount * 0.15).toFixed(0)})` : 
        "Optional for smaller deposits";

      return [
        { label: "Estimated Deposit Return", value: `${estimatedReturn.toFixed(2)}`, isCurrency: true },
        { label: "Potential Deductions", value: `${potentialDeductions.toFixed(2)}`, isCurrency: true },
        { label: "Return Probability", value: probability, isCurrency: false },
        { label: "Recommended Actions", value: actions, isCurrency: false },
        { label: "Professional Cleaning Investment", value: cleaningROI, isCurrency: false },
      ];
    },
  },
};
