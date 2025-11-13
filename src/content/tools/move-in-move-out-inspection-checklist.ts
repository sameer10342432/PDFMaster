import { CalculatorContent } from '@/types';

export const MOVE_IN_MOVE_OUT_INSPECTION_CHECKLIST_CONTENT: CalculatorContent = {
  title: 'Move-In/Move-Out Inspection Checklist Generator',
  description: 'Generate comprehensive property inspection checklists, document condition, protect security deposits, and prevent tenant disputes.',
  slug: 'move-in-move-out-inspection-checklist',
  icon: '📋',
  category: 'Rental & Income',
  metaTitle: 'Move-In/Move-Out Inspection Checklist - Rental Property Documentation',
  metaDescription: 'Free inspection checklist generator. Create detailed move-in and move-out reports, document property condition, and protect security deposits.',
  article: {
    title: 'Complete Guide to Move-In/Move-Out Inspections',
    content: `
    <h2>Complete Guide to Move-In/Move-Out Inspections</h2>
    <p>Thorough move-in and move-out inspections are the landlord's primary defense against deposit disputes and false damage claims. Detailed documentation at both ends of the tenancy establishes a clear record of property condition, protects security deposits, and resolves disagreements with objective evidence.</p>
    
    <h3>Why Inspection Checklists are Critical</h3>
    <p>Comprehensive inspections provide essential protection:</p>
    <ul>
      <li><strong>Deposit Protection:</strong> Documented proof of damages justifies deposit deductions</li>
      <li><strong>Dispute Prevention:</strong> Clear records eliminate "he said, she said" arguments</li>
      <li><strong>Legal Evidence:</strong> Admissible in court to support damage claims</li>
      <li><strong>Tenant Accountability:</strong> Deters careless behavior when tenants know inspections occur</li>
      <li><strong>Maintenance Tracking:</strong> Documents property deterioration over time</li>
      <li><strong>Fair Assessment:</strong> Distinguishes tenant damage from normal wear and tear</li>
    </ul>

    <h3>Move-In Inspection Purpose</h3>
    <p>Document baseline condition at tenancy start:</p>
    <ul>
      <li>Record existing damage and wear before tenant occupancy</li>
      <li>Establish "starting point" for condition comparison</li>
      <li>Protect landlord from claims of pre-existing issues</li>
      <li>Inform tenant of property's current state</li>
      <li>Create shared understanding of expectations</li>
      <li>Identify repairs needed before tenant moves in</li>
    </ul>

    <h3>Move-Out Inspection Purpose</h3>
    <p>Compare final condition to move-in baseline:</p>
    <ul>
      <li>Identify new damage caused during tenancy</li>
      <li>Determine legitimate deposit deductions</li>
      <li>Document normal wear and tear (not chargeable)</li>
      <li>Create repair list for turnover</li>
      <li>Prepare itemized deduction statement if needed</li>
      <li>Establish cleaning and repair costs</li>
    </ul>

    <h3>Essential Checklist Components</h3>
    <p>Every inspection should document:</p>
    <ul>
      <li><strong>Property Address:</strong> Full address including unit number</li>
      <li><strong>Date & Time:</strong> When inspection occurred</li>
      <li><strong>Attendees:</strong> Who was present (landlord, tenant, witnesses)</li>
      <li><strong>Room-by-Room:</strong> Systematic coverage of entire property</li>
      <li><strong>Condition Ratings:</strong> Excellent, Good, Fair, Poor, Damaged</li>
      <li><strong>Photos/Video:</strong> Visual evidence with timestamps</li>
      <li><strong>Signatures:</strong> Both parties sign to acknowledge accuracy</li>
      <li><strong>Notes:</strong> Specific details about issues found</li>
    </ul>

    <h3>Room-by-Room Inspection Areas</h3>
    <p><strong>Living Room:</strong></p>
    <ul>
      <li>Walls, ceiling, and paint condition</li>
      <li>Flooring (carpet, hardwood, tile)</li>
      <li>Windows, screens, and locks</li>
      <li>Window treatments (blinds, curtains)</li>
      <li>Doors and hardware</li>
      <li>Light fixtures and switches</li>
      <li>Electrical outlets</li>
      <li>HVAC vents and registers</li>
      <li>Smoke detector functionality</li>
    </ul>

    <p><strong>Kitchen:</strong></p>
    <ul>
      <li>Appliances (refrigerator, stove, oven, dishwasher, microwave)</li>
      <li>Cabinets and drawers (interior and exterior)</li>
      <li>Countertops and backsplash</li>
      <li>Sink and faucet</li>
      <li>Flooring</li>
      <li>Walls and paint</li>
      <li>Light fixtures</li>
      <li>Garbage disposal</li>
      <li>Pantry or storage areas</li>
    </ul>

    <p><strong>Bathrooms:</strong></p>
    <ul>
      <li>Toilet (function, seat, tank, leaks)</li>
      <li>Sink, faucet, and drain</li>
      <li>Tub/shower (tiles, grout, caulking, fixtures)</li>
      <li>Vanity and cabinets</li>
      <li>Mirror and medicine cabinet</li>
      <li>Towel bars and toilet paper holder</li>
      <li>Flooring</li>
      <li>Exhaust fan</li>
      <li>Light fixtures</li>
    </ul>

    <p><strong>Bedrooms:</strong></p>
    <ul>
      <li>Walls and ceiling</li>
      <li>Flooring and carpet</li>
      <li>Closet (doors, shelving, rods)</li>
      <li>Windows and screens</li>
      <li>Window treatments</li>
      <li>Doors and hardware</li>
      <li>Light fixtures and ceiling fan</li>
      <li>Electrical outlets and switches</li>
    </ul>

    <p><strong>Exterior:</strong></p>
    <ul>
      <li>Entry door and locks</li>
      <li>Porch or patio condition</li>
      <li>Yard and landscaping</li>
      <li>Fence and gates</li>
      <li>Driveway and walkways</li>
      <li>Garage or carport</li>
      <li>Exterior lighting</li>
      <li>Mailbox</li>
    </ul>

    <p><strong>Mechanical Systems:</strong></p>
    <ul>
      <li>HVAC system operation and cleanliness</li>
      <li>Water heater</li>
      <li>Thermostat</li>
      <li>Smoke detectors (test all)</li>
      <li>Carbon monoxide detectors</li>
      <li>Plumbing (check for leaks)</li>
      <li>Electrical panel</li>
    </ul>

    <h3>Photographic Documentation Best Practices</h3>
    <ul>
      <li><strong>Comprehensive Coverage:</strong> Photo every room from multiple angles</li>
      <li><strong>Close-Ups:</strong> Detail shots of damage, stains, scratches</li>
      <li><strong>Timestamps:</strong> Enable camera timestamp or use dated photos</li>
      <li><strong>Video Walkthrough:</strong> Narrated video tour of entire property</li>
      <li><strong>Before/After:</strong> Same angle shots for move-in and move-out comparison</li>
      <li><strong>Storage:</strong> Cloud backup of all photos (multiple copies)</li>
      <li><strong>Organization:</strong> Label by room and date</li>
      <li><strong>Include Tenant:</strong> Optional photo with tenant holding date sign</li>
    </ul>

    <h3>Condition Rating Scales</h3>
    <p>Use consistent terminology:</p>
    <ul>
      <li><strong>Excellent:</strong> Like new, no visible wear</li>
      <li><strong>Good:</strong> Minor wear consistent with normal use</li>
      <li><strong>Fair:</strong> Noticeable wear but functional</li>
      <li><strong>Poor:</strong> Significant wear requiring attention soon</li>
      <li><strong>Damaged:</strong> Broken, non-functional, or needing immediate repair</li>
      <li><strong>Not Applicable (N/A):</strong> Item not present in unit</li>
    </ul>

    <h3>Normal Wear and Tear vs. Damage</h3>
    <p><strong>Normal Wear and Tear (NOT Chargeable):</strong></p>
    <ul>
      <li>Faded paint or wallpaper</li>
      <li>Minor carpet wear in traffic areas</li>
      <li>Small nail holes from picture hanging</li>
      <li>Loose door handles from normal use</li>
      <li>Faded window treatments</li>
      <li>Minor scratches on flooring</li>
      <li>Worn cabinet finish from daily use</li>
      <li>Dirty grout (cleanable)</li>
    </ul>

    <p><strong>Tenant Damage (Chargeable):</strong></p>
    <ul>
      <li>Large holes in walls</li>
      <li>Burns, stains, or tears in carpet</li>
      <li>Broken windows or doors</li>
      <li>Pet damage (scratches, odors, stains)</li>
      <li>Missing fixtures or appliances</li>
      <li>Broken tiles or countertops</li>
      <li>Crayon or paint on walls</li>
      <li>Broken blinds or missing parts</li>
      <li>Extreme filth requiring professional cleaning</li>
    </ul>

    <h3>Legal Requirements by State</h3>
    <p>Many states mandate specific inspection procedures:</p>
    <ul>
      <li><strong>Joint Inspection:</strong> Some require landlord and tenant inspect together</li>
      <li><strong>Tenant Copy:</strong> Must provide tenant with copy of inspection report</li>
      <li><strong>Opportunity to Inspect:</strong> Tenant must be given chance to participate</li>
      <li><strong>Time Limits:</strong> Inspection must occur within X days of move-in/out</li>
      <li><strong>Documentation Requirements:</strong> Photos or specific written details required</li>
      <li><strong>Disclosure:</strong> Landlord must disclose any pre-existing damage</li>
    </ul>

    <h3>Timing of Inspections</h3>
    <ul>
      <li><strong>Move-In:</strong> Before tenant takes possession or within 48 hours of move-in</li>
      <li><strong>Move-Out:</strong> Immediately upon tenant surrender of keys</li>
      <li><strong>Pre-Move-Out:</strong> Optional inspection 2 weeks before lease end to identify issues</li>
      <li><strong>Periodic:</strong> Some landlords conduct annual inspections (with notice)</li>
      <li><strong>Scheduling:</strong> Coordinate with tenant for joint inspection</li>
    </ul>

    <h3>Conducting the Move-In Inspection</h3>
    <ol>
      <li>Schedule inspection before or immediately after tenant moves in</li>
      <li>Walk through property systematically, room by room</li>
      <li>Note every existing issue, no matter how small</li>
      <li>Take comprehensive photos and video</li>
      <li>Review checklist with tenant present if possible</li>
      <li>Allow tenant to add their own observations</li>
      <li>Both parties sign and date the report</li>
      <li>Provide tenant with copy of completed inspection</li>
      <li>Keep original in tenant file</li>
    </ol>

    <h3>Conducting the Move-Out Inspection</h3>
    <ol>
      <li>Schedule within 24-48 hours of tenant departure</li>
      <li>Bring move-in inspection report for comparison</li>
      <li>Use same checklist format as move-in</li>
      <li>Note all changes from move-in condition</li>
      <li>Take photos matching move-in photo angles</li>
      <li>Document cleaning issues and damages</li>
      <li>Note any items left behind</li>
      <li>Check all keys, remotes, access devices returned</li>
      <li>Verify utilities are still on for inspection</li>
      <li>Calculate estimated repair costs</li>
    </ol>

    <h3>Pre-Move-Out Inspection Benefits</h3>
    <p>Optional inspection 2-3 weeks before lease end:</p>
    <ul>
      <li>Gives tenant chance to fix issues and avoid charges</li>
      <li>Identifies items tenant may not be aware of</li>
      <li>Reduces final deposit deductions</li>
      <li>Improves tenant relations</li>
      <li>Some states require offer of pre-move-out inspection</li>
      <li>Not binding - final inspection still controls deposit</li>
    </ul>

    <h3>Handling Disputes</h3>
    <p>When tenant disagrees with findings:</p>
    <ul>
      <li>Refer to signed move-in inspection</li>
      <li>Show photo evidence from both inspections</li>
      <li>Explain difference between wear and damage</li>
      <li>Provide receipts for repair costs</li>
      <li>Offer mediation before legal action</li>
      <li>Small claims court: good documentation usually wins</li>
    </ul>

    <h3>Deduction Documentation</h3>
    <p>If withholding deposit for damages:</p>
    <ul>
      <li>Itemized statement of each deduction</li>
      <li>Reference to specific items on move-out inspection</li>
      <li>Copies of invoices or receipts for repairs</li>
      <li>Photos showing damage</li>
      <li>Comparison to move-in condition</li>
      <li>Explanation of normal wear vs. damage</li>
      <li>Send within state deadline (typically 14-30 days)</li>
    </ul>

    <h3>Digital Tools and Apps</h3>
    <ul>
      <li><strong>Property Management Software:</strong> Buildium, AppFolio, TenantCloud (built-in inspections)</li>
      <li><strong>Inspection Apps:</strong> Happy Inspector, Zillow Rental Manager, Cozy</li>
      <li><strong>Photo Apps:</strong> Timestamp Camera, Photo Time Stamp</li>
      <li><strong>Cloud Storage:</strong> Google Drive, Dropbox, OneDrive (backup photos)</li>
      <li><strong>PDF Forms:</strong> Digital fillable inspection checklists</li>
      <li><strong>E-Signature:</strong> DocuSign, Adobe Sign (remote tenant signatures)</li>
    </ul>

    <h3>Record Retention</h3>
    <ul>
      <li>Keep all inspection reports for minimum 3 years after tenancy</li>
      <li>Many states require 5-7 years for potential lawsuits</li>
      <li>Store photos digitally with multiple backups</li>
      <li>Organize by property and tenant</li>
      <li>Include in tenant file with lease and correspondence</li>
      <li>May be subpoenaed in legal proceedings</li>
    </ul>

    <h3>Common Inspection Mistakes to Avoid</h3>
    <ul>
      <li>Skipping move-in inspection (can't prove pre-existing damage)</li>
      <li>Not taking enough photos</li>
      <li>Vague descriptions ("some damage" vs. "2-inch hole in wall")</li>
      <li>Not having tenant sign inspection report</li>
      <li>Failing to provide tenant with copy</li>
      <li>Not comparing move-in to move-out</li>
      <li>Charging for normal wear and tear</li>
      <li>Missing small details that add up</li>
      <li>Conducting inspection without tenant present (if state requires)</li>
    </ul>

    <h3>Best Practices Summary</h3>
    <ul>
      <li>Use standardized checklist for consistency</li>
      <li>Conduct both move-in and move-out inspections always</li>
      <li>Be thorough - document everything</li>
      <li>Take extensive photos and video</li>
      <li>Include tenant in process when possible</li>
      <li>Both parties sign and date report</li>
      <li>Provide copy to tenant immediately</li>
      <li>Store securely with multiple backups</li>
      <li>Compare move-in to move-out side-by-side</li>
      <li>Be fair in distinguishing damage from wear</li>
    </ul>

    <h3>Sample Checklist Format</h3>
    <p>Effective inspection report structure:</p>
    <ul>
      <li><strong>Header:</strong> Property address, date, attendees</li>
      <li><strong>Room Sections:</strong> Each room listed separately</li>
      <li><strong>Item Columns:</strong> Item | Condition | Notes | Photo #</li>
      <li><strong>Condition Codes:</strong> E=Excellent, G=Good, F=Fair, P=Poor, D=Damaged</li>
      <li><strong>Notes Field:</strong> Space for detailed descriptions</li>
      <li><strong>Photo Reference:</strong> Number linking to specific photos</li>
      <li><strong>Tenant Comments:</strong> Section for tenant observations</li>
      <li><strong>Signature Block:</strong> Both parties sign and date</li>
    </ul>

    <h3>Professional Inspection Services</h3>
    <p>When to consider professional inspectors:</p>
    <ul>
      <li>High-value properties or luxury rentals</li>
      <li>Contentious tenant relationships</li>
      <li>Complex damage assessment needed</li>
      <li>Expert testimony for litigation</li>
      <li>Large multi-unit properties</li>
      <li>Cost: $100-$300 per inspection typically</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { value: 'apartment', label: 'Apartment' },
          { value: 'house', label: 'Single-Family House' },
          { value: 'condo', label: 'Condo/Townhouse' },
          { value: 'studio', label: 'Studio' },
        ],
        defaultValue: 'apartment',
      },
      {
        name: 'bedrooms',
        label: 'Number of Bedrooms',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'bathrooms',
        label: 'Number of Bathrooms',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'hasGarage',
        label: 'Has Garage/Parking',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'hasYard',
        label: 'Has Yard/Outdoor Space',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
        defaultValue: 'yes',
      },
      {
        name: 'inspectionType',
        label: 'Inspection Type',
        type: 'select',
        options: [
          { value: 'movein', label: 'Move-In Inspection' },
          { value: 'moveout', label: 'Move-Out Inspection' },
        ],
        defaultValue: 'movein',
      },
    ],
    results: [
      { label: 'Inspection Type', isCurrency: false },
      { label: 'Total Rooms to Inspect', isCurrency: false },
      { label: 'Estimated Inspection Time', isCurrency: false },
      { label: 'Minimum Photos Recommended', isCurrency: false },
      { label: 'Checklist Items to Review', isCurrency: false },
    ],
    calculate: (values) => {
      const { propertyType, bedrooms, bathrooms, hasGarage, hasYard, inspectionType } = values;
      
      const commonRooms = ['Living Room', 'Kitchen', 'Entry/Hallway'];
      const roomCount = Number(bedrooms) + Number(bathrooms) + commonRooms.length;
      let totalRooms = roomCount;
      
      if (hasGarage === 'yes') totalRooms += 1;
      if (hasYard === 'yes') totalRooms += 1;
      
      const estimatedMinutes = totalRooms * 10;
      const estimatedTime = `${estimatedMinutes} minutes (${Math.round(estimatedMinutes / 60 * 10) / 10} hours)`;
      
      const photosPerRoom = 8;
      const minPhotos = totalRooms * photosPerRoom;
      
      const itemsPerRoom = 15;
      const totalItems = totalRooms * itemsPerRoom;
      
      const inspectionLabel = inspectionType === 'movein' ? 'Move-In Baseline' : 'Move-Out Comparison';

      return [
        { label: 'Inspection Type', value: inspectionLabel, isCurrency: false },
        { label: 'Total Rooms to Inspect', value: `${totalRooms} rooms/areas`, isCurrency: false },
        { label: 'Estimated Inspection Time', value: estimatedTime, isCurrency: false },
        { label: 'Minimum Photos Recommended', value: `${minPhotos} photos`, isCurrency: false },
        { label: 'Checklist Items to Review', value: `~${totalItems} items`, isCurrency: false },
      ];
    },
  },
};
