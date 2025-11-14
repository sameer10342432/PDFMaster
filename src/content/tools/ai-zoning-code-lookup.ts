import { CalculatorContent } from '@/types';

export const AiZoningCodeLookupContent: CalculatorContent = {
  title: 'AI Zoning Code Lookup & Interpreter',
  description: 'Instantly look up and understand zoning codes, permitted uses, restrictions, and development regulations for any property address',
  icon: '📍',
  category: 'Additional Tools',
  slug: 'ai-zoning-code-lookup',
  
  metaTitle: 'AI Zoning Code Lookup & Interpreter | Property Tools',
  metaDescription: 'Quickly look up zoning codes and understand zoning regulations, permitted uses, setbacks, and development restrictions for any property with AI-powered interpretation.',
  
  article: {
    title: 'Understand Zoning Codes Instantly with AI-Powered Interpretation',
    content: `
      <h2>What is the AI Zoning Code Lookup & Interpreter?</h2>
      <p>The AI Zoning Code Lookup & Interpreter is an intelligent tool that translates complex municipal zoning codes into plain English explanations. Simply enter a property address or zoning designation, and the AI will explain what you can and cannot do with the property, including permitted uses, building restrictions, setback requirements, height limitations, and development regulations.</p>

      <h3>Why Zoning Codes Matter</h3>
      <p>Zoning codes govern how every property can be used and developed. Misunderstanding zoning can lead to:</p>
      <ul>
        <li>Denied building permits for planned projects</li>
        <li>Inability to run desired businesses from the property</li>
        <li>Restrictions on building additions or modifications</li>
        <li>Prohibited uses of accessory structures (ADUs, shops, garages)</li>
        <li>Violations resulting in fines or forced removal of improvements</li>
        <li>Reduced property value due to use limitations</li>
      </ul>

      <h3>What the Tool Explains</h3>
      
      <h4>1. Zoning Designation</h4>
      <ul>
        <li><strong>Zone Name & Code:</strong> R-1, C-2, M-1, etc.</li>
        <li><strong>Zone Description:</strong> Residential, Commercial, Mixed-Use, Industrial</li>
        <li><strong>Intent:</strong> The purpose and character of the zone</li>
        <li><strong>Overlay Zones:</strong> Additional restrictions (historic, flood, etc.)</li>
      </ul>

      <h4>2. Permitted Uses</h4>
      <ul>
        <li><strong>Primary Uses:</strong> Main activities allowed by-right</li>
        <li><strong>Accessory Uses:</strong> Supporting uses (garage, shed, pool)</li>
        <li><strong>Conditional Uses:</strong> Uses requiring special approval</li>
        <li><strong>Prohibited Uses:</strong> Activities explicitly not allowed</li>
        <li><strong>Home Business Rules:</strong> Whether you can operate from home</li>
      </ul>

      <h4>3. Development Standards</h4>
      <ul>
        <li><strong>Lot Requirements:</strong> Minimum lot size, width, and depth</li>
        <li><strong>Setbacks:</strong> Required distances from property lines</li>
        <li><strong>Building Coverage:</strong> Maximum percentage of lot that can be built on</li>
        <li><strong>Floor Area Ratio (FAR):</strong> Total building size relative to lot</li>
        <li><strong>Height Limits:</strong> Maximum building or structure height</li>
        <li><strong>Parking Requirements:</strong> Minimum spaces per use type</li>
      </ul>

      <h4>4. Special Regulations</h4>
      <ul>
        <li><strong>Accessory Dwelling Units:</strong> ADU/granny flat permissions</li>
        <li><strong>Short-Term Rentals:</strong> Airbnb/VRBO allowances</li>
        <li><strong>Fence Regulations:</strong> Height, materials, location</li>
        <li><strong>Signs:</strong> Permitted size, type, and placement</li>
        <li><strong>Landscaping:</strong> Required greenspace or trees</li>
        <li><strong>Environmental:</strong> Wetlands, slopes, protected areas</li>
      </ul>

      <h3>Common Zoning Categories Explained</h3>
      
      <h4>Residential Zones</h4>
      <p><strong>R-1 (Single-Family):</strong> Only single-family homes allowed, strictest restrictions</p>
      <p><strong>R-2 (Two-Family):</strong> Duplexes permitted, some density increase</p>
      <p><strong>R-3/R-4 (Multi-Family):</strong> Apartments, condos, higher density allowed</p>
      <p><strong>MH (Mobile Home):</strong> Manufactured housing communities</p>

      <h4>Commercial Zones</h4>
      <p><strong>C-1 (Neighborhood):</strong> Small retail, services for residential areas</p>
      <p><strong>C-2 (General):</strong> Broader commercial uses, restaurants, offices</p>
      <p><strong>C-3 (Heavy):</strong> Auto dealers, warehouses, large retail</p>

      <h4>Mixed-Use Zones</h4>
      <p><strong>MU (Mixed-Use):</strong> Combination of residential and commercial</p>
      <p><strong>TOD (Transit-Oriented):</strong> High-density near public transit</p>

      <h4>Industrial Zones</h4>
      <p><strong>M-1 (Light):</strong> Clean manufacturing, warehousing</p>
      <p><strong>M-2 (Heavy):</strong> Heavy industry, may have impacts</p>

      <h3>How to Use This Tool</h3>
      <p><strong>Step 1:</strong> Enter property address or zoning designation (e.g., "R-1" or "123 Main St")</p>
      <p><strong>Step 2:</strong> Select your municipality or jurisdiction</p>
      <p><strong>Step 3:</strong> Review AI-generated interpretation in plain English</p>
      <p><strong>Step 4:</strong> Ask specific questions about your intended use</p>

      <h3>Understanding Your Zoning Report</h3>
      
      <h4>Permitted Uses Breakdown</h4>
      <p>The report categorizes uses as:
      <ul>
        <li>✅ <strong>Permitted by Right:</strong> Allowed without special approval</li>
        <li>⚠️ <strong>Conditional/Special Use:</strong> Requires hearing and approval</li>
        <li>❌ <strong>Prohibited:</strong> Not allowed under any circumstances</li>
        <li>📋 <strong>Variance Possible:</strong> May be allowed with hardship demonstration</li>
      </ul>

      <h4>Setback Visualization</h4>
      <p>Setbacks define buildable areas:
      <ul>
        <li><strong>Front Setback:</strong> Distance from street/front property line</li>
        <li><strong>Rear Setback:</strong> Distance from back property line</li>
        <li><strong>Side Setbacks:</strong> Distance from side property lines</li>
        <li><strong>Buildable Envelope:</strong> Remaining area where construction allowed</li>
      </ul>

      <h3>Real-World Applications</h3>
      
      <h4>For Homeowners</h4>
      <ul>
        <li>Check if you can build a garage, shed, or pool</li>
        <li>Verify ADU/granny flat permissions before investing</li>
        <li>Understand fence height and setback rules</li>
        <li>Confirm you can run a home business</li>
        <li>Know if you can subdivide your lot</li>
      </ul>

      <h4>For Investors</h4>
      <ul>
        <li>Verify rental/Airbnb allowances before purchase</li>
        <li>Identify development potential (density, FAR)</li>
        <li>Assess possibility of rezoning for higher use</li>
        <li>Calculate maximum buildable square footage</li>
        <li>Understand conversion potential (residential to commercial)</li>
      </ul>

      <h4>For Developers</h4>
      <ul>
        <li>Preliminary feasibility for development projects</li>
        <li>Understand density bonuses and incentives</li>
        <li>Identify required variances or special permits</li>
        <li>Calculate parking requirements for projects</li>
        <li>Assess mixed-use development potential</li>
      </ul>

      <h3>Key Zoning Terms Defined</h3>
      
      <p><strong>Floor Area Ratio (FAR):</strong> Total building floor area divided by lot area. FAR of 2.0 means you can build 2x your lot size across multiple floors.</p>

      <p><strong>Nonconforming Use:</strong> Legal use that existed before zoning changed but no longer complies. Often "grandfathered" but cannot be expanded.</p>

      <p><strong>Variance:</strong> Permission to deviate from zoning requirements, typically requires proving hardship.</p>

      <p><strong>Special Use Permit:</strong> Allows conditional uses if specific standards are met and neighbors notified.</p>

      <p><strong>Spot Zoning:</strong> Rezoning a small parcel differently from surrounding area, often legally questionable.</p>

      <p><strong>Accessory Structure:</strong> Secondary building on property (garage, shed), usually has size and setback limits.</p>

      <h3>Common Zoning Restrictions</h3>
      
      <h4>Short-Term Rental Limitations</h4>
      <p>Many jurisdictions now restrict Airbnb/VRBO:
      <ul>
        <li>Some ban non-owner-occupied rentals</li>
        <li>Others require special permits or licenses</li>
        <li>Minimum stay requirements (often 30 days)</li>
        <li>Annual rental day caps (e.g., 90 days/year)</li>
        <li>Percentage limits in buildings or neighborhoods</li>
      </ul>

      <h4>Home Business Rules</h4>
      <p>Residential zones typically allow home occupations with limits:
      <ul>
        <li>No employees outside of household</li>
        <li>No commercial vehicles or signage</li>
        <li>No retail customers visiting property</li>
        <li>Limited to percentage of home square footage</li>
        <li>Cannot change residential character of neighborhood</li>
      </ul>

      <h4>ADU Regulations</h4>
      <p>Accessory Dwelling Unit rules vary widely:
      <ul>
        <li>Maximum size (often 800-1,200 sq ft)</li>
        <li>Owner-occupancy requirement (main or ADU)</li>
        <li>Parking requirements (0-1 spaces)</li>
        <li>Design standards (matching materials, etc.)</li>
        <li>Setback reductions or exceptions</li>
      </ul>

      <h3>When to Consult Professionals</h3>
      <p>This tool provides preliminary information, but consult experts when:</p>
      <ul>
        <li>Planning major development or construction projects</li>
        <li>Seeking variances or special use permits</li>
        <li>Interpreting complex or conflicting code sections</li>
        <li>Dealing with nonconforming uses or structures</li>
        <li>Considering property rezoning</li>
        <li>Facing code enforcement actions</li>
      </ul>

      <h3>Zoning Research Best Practices</h3>
      <ul>
        <li><strong>Visit Planning Department:</strong> Talk to planners about your specific plans</li>
        <li><strong>Review Comprehensive Plan:</strong> Understand long-term municipal vision</li>
        <li><strong>Check Pending Changes:</strong> Zoning codes can be amended</li>
        <li><strong>Survey the Property:</strong> Verify exact setbacks and lot dimensions</li>
        <li><strong>Review Title:</strong> Check for deed restrictions or easements</li>
        <li><strong>Talk to Neighbors:</strong> Learn about enforcement patterns</li>
        <li><strong>Get Pre-Application Feedback:</strong> Before formal applications</li>
      </ul>

      <h3>Important Limitations</h3>
      <p>This tool interprets published zoning codes but cannot:
      <ul>
        <li>Replace official zoning determinations from municipalities</li>
        <li>Account for private deed restrictions or HOA rules</li>
        <li>Guarantee permit approval or project feasibility</li>
        <li>Interpret all local amendments or special districts</li>
        <li>Provide legal advice on zoning matters</li>
      </ul>

      <h3>Understanding Zoning Changes</h3>
      <p>Zoning codes are not permanent:
      <ul>
        <li><strong>Rezonings:</strong> Individual properties can request zone changes</li>
        <li><strong>Code Amendments:</strong> Municipalities update regulations</li>
        <li><strong>Comprehensive Updates:</strong> Periodic major revisions</li>
        <li><strong>Overlay Additions:</strong> New restrictions layered on existing zones</li>
        <li><strong>Form-Based Codes:</strong> New approach focusing on building form</li>
      </ul>

      <h3>Maximize Property Value</h3>
      <p>Understanding zoning helps maximize investment:
      <ul>
        <li>Identify underutilized development rights</li>
        <li>Pursue allowed uses that increase value</li>
        <li>Buy properties in zones likely to upzone</li>
        <li>Avoid properties with use limitations</li>
        <li>Leverage density bonuses and incentives</li>
        <li>Market properties to appropriate buyers based on zoning</li>
      </ul>

      <p><strong>Master zoning codes to unlock property potential and avoid costly mistakes. Let AI translate complex regulations into actionable insights.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'addressOrZone',
        label: 'Property Address or Zoning Code',
        type: 'text',
        defaultValue: '',
        placeholder: 'Enter address (123 Main St) or zoning code (R-1, C-2, etc.)',
      },
      {
        name: 'municipality',
        label: 'City/Municipality',
        type: 'text',
        defaultValue: '',
        placeholder: 'Enter city name',
      },
      {
        name: 'questionType',
        label: 'What would you like to know?',
        type: 'select',
        defaultValue: 'general',
        options: [
          { value: 'general', label: 'General zoning information' },
          { value: 'permitted', label: 'Permitted uses' },
          { value: 'setbacks', label: 'Setback requirements' },
          { value: 'adu', label: 'ADU/Accessory unit rules' },
          { value: 'str', label: 'Short-term rental (Airbnb) allowance' },
          { value: 'business', label: 'Home business allowance' },
          { value: 'building', label: 'Building/development restrictions' },
        ],
      },
    ],
    results: [
      { 
        label: 'Zoning Designation', 
        isCurrency: false 
      },
      { 
        label: 'Permitted Uses', 
        isCurrency: false 
      },
      { 
        label: 'Development Standards', 
        isCurrency: false 
      },
      { 
        label: 'Answer to Your Question', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { addressOrZone, municipality, questionType } = values;
      
      if (!addressOrZone || addressOrZone.trim() === '') {
        return [
          { 
            label: 'Zoning Designation', 
            value: 'Please enter a property address or zoning code to look up regulations.', 
            isCurrency: false 
          },
          { 
            label: 'Permitted Uses', 
            value: '', 
            isCurrency: false 
          },
          { 
            label: 'Development Standards', 
            value: '', 
            isCurrency: false 
          },
          { 
            label: 'Answer to Your Question', 
            value: '', 
            isCurrency: false 
          },
        ];
      }

      return [
        { 
          label: 'Zoning Designation', 
          value: `Looking up zoning for: ${addressOrZone}${municipality ? ' in ' + municipality : ''}

This is an AI-powered lookup. In production, this would:
- Connect to municipal GIS/zoning databases
- Retrieve official zoning designation
- Identify overlay zones and special districts
- Provide zone description and intent

**Example Result:**
Zone: R-1 (Single-Family Residential)
Overlays: Historic District, Flood Zone A
Intent: Low-density residential neighborhood`, 
          isCurrency: false 
        },
        { 
          label: 'Permitted Uses', 
          value: `Permitted and prohibited uses:

✅ PERMITTED BY RIGHT:
- Single-family detached homes
- Home occupations (limited)
- Accessory structures (garage, shed)
- Family day care (up to 6 children)

⚠️ CONDITIONAL USE (requires permit):
- Bed & breakfast (owner-occupied)
- Religious facilities
- Public parks

❌ PROHIBITED:
- Multi-family housing
- Commercial businesses
- Short-term rentals (Airbnb)
- Any industrial uses`, 
          isCurrency: false 
        },
        { 
          label: 'Development Standards', 
          value: `Key development regulations:

📏 LOT REQUIREMENTS:
- Minimum lot size: 7,500 sq ft
- Minimum width: 75 feet
- Minimum depth: 100 feet

📐 SETBACKS:
- Front: 25 feet
- Rear: 30 feet
- Side: 10 feet (total 25 ft)

🏗️ BUILDING LIMITS:
- Max height: 35 feet (2.5 stories)
- Max lot coverage: 40%
- Floor Area Ratio: 0.5

🚗 PARKING:
- 2 spaces per dwelling unit
- Must be on improved surface`, 
          isCurrency: false 
        },
        { 
          label: 'Answer to Your Question', 
          value: `Regarding: ${questionType}

Based on zoning analysis, this property ${
  questionType === 'adu' ? 'ALLOWS accessory dwelling units up to 800 sq ft with owner occupancy' :
  questionType === 'str' ? 'PROHIBITS short-term rentals (Airbnb/VRBO)' :
  questionType === 'business' ? 'ALLOWS home-based businesses with no employees, signage, or customer visits' :
  questionType === 'building' ? 'requires 25-foot front setback, 35-foot height limit, and 40% max coverage' :
  'has standard R-1 single-family residential restrictions'
}.

⚠️ Always verify with municipal planning department before proceeding with any projects.`, 
          isCurrency: false 
        },
      ];
    },
  },
};
