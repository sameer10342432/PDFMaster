import { CalculatorContent } from '@/types';

export const APARTMENT_HUNTING_CHECKLIST_GENERATOR_CONTENT: CalculatorContent = {
  title: 'Apartment Hunting Checklist Generator',
  description: 'Generate a personalized apartment hunting checklist based on your priorities, lifestyle, and must-have features',
  icon: 'Icon',
  category: 'Renter Tools',
  slug: 'apartment-hunting-checklist-generator',
  article: {
    title: "Complete Apartment Hunting Guide and Checklist",
    content: `
    <h2>Master Guide to Apartment Hunting</h2>
    <p>Finding the perfect apartment requires systematic evaluation of many factors. This guide helps you create a personalized checklist to ensure you don't miss critical details during your search.</p>
    
    <h3>Before You Start: Budget Planning</h3>
    <ul>
      <li><strong>30% Rule:</strong> Rent should be no more than 30% of gross income</li>
      <li><strong>Include All Costs:</strong> Utilities, parking, pet fees, renter's insurance</li>
      <li><strong>Upfront Costs:</strong> First month, last month, security deposit, broker fee</li>
      <li><strong>Emergency Fund:</strong> Keep 3-6 months expenses saved</li>
    </ul>
    
    <h3>Essential Location Factors</h3>
    <ul>
      <li><strong>Commute Time:</strong> How far from work/school?</li>
      <li><strong>Public Transportation:</strong> Access to buses, trains, subway</li>
      <li><strong>Parking Availability:</strong> Street parking or included spot?</li>
      <li><strong>Walkability Score:</strong> Grocery stores, restaurants, amenities nearby</li>
      <li><strong>Safety:</strong> Crime statistics and neighborhood feel</li>
      <li><strong>Noise Levels:</strong> Traffic, nightlife, airports</li>
    </ul>
    
    <h3>Building and Unit Features</h3>
    <ul>
      <li><strong>Bedrooms/Bathrooms:</strong> Adequate for your needs?</li>
      <li><strong>Square Footage:</strong> Enough space for furniture and lifestyle?</li>
      <li><strong>Natural Light:</strong> Window placement and orientation</li>
      <li><strong>Storage:</strong> Closet space, garage, basement access</li>
      <li><strong>Layout:</strong> Open vs. closed floor plan</li>
      <li><strong>Kitchen:</strong> Appliances, counter space, pantry</li>
      <li><strong>Laundry:</strong> In-unit, building, or off-site?</li>
      <li><strong>HVAC:</strong> Heating and cooling systems</li>
      <li><strong>Windows:</strong> Quality, screens, energy efficiency</li>
    </ul>
    
    <h3>Building Amenities</h3>
    <ul>
      <li>Fitness center or gym</li>
      <li>Pool, hot tub, or sauna</li>
      <li>Rooftop deck or common areas</li>
      <li>Package room or concierge</li>
      <li>Bike storage</li>
      <li>Pet facilities (dog park, washing station)</li>
      <li>Business center or coworking space</li>
      <li>Guest parking</li>
    </ul>
    
    <h3>Critical Safety and Security</h3>
    <ul>
      <li>Secure entry system</li>
      <li>Cameras in common areas</li>
      <li>Quality door locks (deadbolts)</li>
      <li>Window locks</li>
      <li>Fire escapes and exits</li>
      <li>Smoke and carbon monoxide detectors</li>
      <li>Sprinkler system</li>
      <li>On-site security or management</li>
    </ul>
    
    <h3>Questions to Ask During Tour</h3>
    <ul>
      <li>What utilities are included in rent?</li>
      <li>What is the average utility cost per month?</li>
      <li>Is renter's insurance required?</li>
      <li>What is the pet policy and associated fees?</li>
      <li>What is the parking situation and cost?</li>
      <li>How long is the lease term?</li>
      <li>Are there any move-in specials?</li>
      <li>What is the guest policy?</li>
      <li>Who handles maintenance and what's the response time?</li>
      <li>Can I paint or make modifications?</li>
      <li>What is the noise policy?</li>
      <li>Are there any planned rent increases?</li>
      <li>What is the move-out notice requirement?</li>
    </ul>
    
    <h3>Red Flags to Watch For</h3>
    <ul>
      <li><strong>Pressure to Sign Immediately:</strong> Legitimate landlords allow time to decide</li>
      <li><strong>Sketchy Payment Methods:</strong> Wire transfers, cash-only, no receipts</li>
      <li><strong>No Lease Agreement:</strong> Always get everything in writing</li>
      <li><strong>Landlord Won't Show Unit:</strong> Could be a scam</li>
      <li><strong>Price Too Good to Be True:</strong> Significantly below market rate</li>
      <li><strong>Poor Maintenance:</strong> Visible issues not addressed</li>
      <li><strong>Unfair Lease Terms:</strong> Unreasonable penalties or restrictions</li>
      <li><strong>Security Deposit Issues:</strong> Excessive or vague terms</li>
    </ul>
    
    <h3>Documentation to Bring</h3>
    <ul>
      <li>Photo ID</li>
      <li>Proof of income (pay stubs, tax returns)</li>
      <li>Employment verification letter</li>
      <li>Credit report</li>
      <li>References from previous landlords</li>
      <li>Bank statements</li>
      <li>Pet vaccination records (if applicable)</li>
    </ul>
    
    <h3>Move-In Inspection Checklist</h3>
    <ul>
      <li>Document ALL existing damage with photos</li>
      <li>Test all appliances</li>
      <li>Check all outlets and light switches</li>
      <li>Run water in all faucets and flush toilets</li>
      <li>Test HVAC system</li>
      <li>Check for pest evidence</li>
      <li>Inspect walls, floors, and ceilings</li>
      <li>Test windows and locks</li>
      <li>Note any stains or odors</li>
    </ul>
    
    <h3>Best Times to Apartment Hunt</h3>
    <ul>
      <li><strong>Off-Season (Winter):</strong> Less competition, better deals</li>
      <li><strong>Mid-Month:</strong> More availability than beginning/end</li>
      <li><strong>Weekdays:</strong> More time with leasing agents</li>
      <li><strong>2-3 Months Before:</strong> Ideal lead time for most markets</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "lifestyle",
        label: "Lifestyle Priority",
        type: "select",
        options: ["Urban/Walkable", "Suburban/Quiet", "Commuter-Focused", "Nightlife/Social"],
        defaultValue: "Urban/Walkable",
      },
      {
        name: "hasPets",
        label: "Have Pets?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No",
      },
      {
        name: "workFromHome",
        label: "Work from Home?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No",
      },
      {
        name: "hasVehicle",
        label: "Have Vehicle?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "Yes",
      },
      {
        name: "budgetPriority",
        label: "Budget Priority",
        type: "select",
        options: ["Budget-Friendly", "Mid-Range", "Luxury"],
        defaultValue: "Mid-Range",
      },
      {
        name: "amenityImportance",
        label: "Amenities Importance",
        type: "select",
        options: ["Not Important", "Somewhat Important", "Very Important"],
        defaultValue: "Somewhat Important",
      },
    ],
    results: [
      { label: "Top Priority Features", isCurrency: false },
      { label: "Essential Questions to Ask", isCurrency: false },
      { label: "Red Flags to Watch", isCurrency: false },
      { label: "Recommended Tour Checklist", isCurrency: false },
      { label: "Personalized Score Weighting", isCurrency: false },
    ],
    calculate: (data: any) => {
      const lifestyle = data.lifestyle || "Urban/Walkable";
      const hasPets = data.hasPets === "Yes";
      const workFromHome = data.workFromHome === "Yes";
      const hasVehicle = data.hasVehicle === "Yes";
      const budgetPriority = data.budgetPriority || "Mid-Range";
      const amenityImportance = data.amenityImportance || "Somewhat Important";
      
      // Generate personalized top priorities
      let priorities = [];
      
      if (lifestyle === "Urban/Walkable") {
        priorities.push("Walkability score 70+");
        priorities.push("Public transit access");
        priorities.push("Grocery stores within 0.5 miles");
      } else if (lifestyle === "Suburban/Quiet") {
        priorities.push("Low noise levels");
        priorities.push("Outdoor space");
        priorities.push("Safe neighborhood");
      } else if (lifestyle === "Commuter-Focused") {
        priorities.push("Commute time under 30 min");
        priorities.push("Highway access");
        priorities.push("Parking included");
      } else {
        priorities.push("Nightlife proximity");
        priorities.push("Restaurant density");
        priorities.push("Entertainment options");
      }
      
      if (workFromHome) priorities.push("Quiet hours enforcement", "Good internet speed");
      if (hasPets) priorities.push("Pet-friendly policy", "Outdoor space/dog park");
      if (hasVehicle) priorities.push("Parking availability", "Garage option");
      
      const topPriorities = priorities.slice(0, 5).join(", ");
      
      // Generate essential questions
      let questions = ["What utilities are included?", "Average monthly utility cost?"];
      
      if (hasPets) questions.push("Pet deposit and monthly fee?", "Breed restrictions?");
      if (hasVehicle) questions.push("Parking cost and availability?", "Guest parking options?");
      if (workFromHome) questions.push("Internet speed available?", "Noise policy?");
      if (budgetPriority === "Budget-Friendly") questions.push("Any move-in specials?", "Negotiable on rent?");
      
      const essentialQuestions = questions.slice(0, 4).join(" | ");
      
      // Generate red flags based on profile
      let redFlags = ["Pressure to sign immediately", "No written lease"];
      
      if (budgetPriority === "Budget-Friendly") redFlags.push("Hidden fees in lease");
      if (hasPets) redFlags.push("Vague pet policy");
      if (amenityImportance === "Very Important") redFlags.push("Broken amenities");
      
      const redFlagsList = redFlags.slice(0, 3).join(", ");
      
      // Generate tour checklist
      let tourItems = ["Test all appliances", "Check water pressure", "Inspect for pests"];
      
      if (workFromHome) tourItems.push("Test internet connection", "Check noise from neighbors");
      if (hasPets) tourItems.push("Check outdoor access", "Note pet areas");
      if (hasVehicle) tourItems.push("Inspect parking area", "Check security");
      
      const tourChecklist = tourItems.slice(0, 5).join(", ");
      
      // Generate scoring weights
      let scoreWeights = [];
      if (lifestyle === "Urban/Walkable") scoreWeights.push("Location 35%");
      else if (lifestyle === "Commuter-Focused") scoreWeights.push("Commute 35%");
      else scoreWeights.push("Neighborhood 30%");
      
      if (budgetPriority === "Budget-Friendly") scoreWeights.push("Price 30%");
      else if (budgetPriority === "Luxury") scoreWeights.push("Amenities 30%");
      else scoreWeights.push("Value 25%");
      
      scoreWeights.push("Unit Quality 25%", "Safety 20%");
      
      const scoringSystem = scoreWeights.join(", ");

      return [
        { label: "Top Priority Features", value: topPriorities, isCurrency: false },
        { label: "Essential Questions to Ask", value: essentialQuestions, isCurrency: false },
        { label: "Red Flags to Watch", value: redFlagsList, isCurrency: false },
        { label: "Recommended Tour Checklist", value: tourChecklist, isCurrency: false },
        { label: "Personalized Score Weighting", value: scoringSystem, isCurrency: false },
      ];
    },
  },
};
