import { CalculatorContent } from '@/types';

export const PROPERTY_VIEWING_SCORECARD_CONTENT: CalculatorContent = {
  title: 'Property Viewing Scorecard',
  description: 'Rate and score properties during viewings with a comprehensive evaluation system',
  icon: '📋',
  category: 'Buyer Tools',
  slug: 'property-viewing-scorecard',
  metaTitle: 'Property Viewing Scorecard | Rate Homes Like a Pro',
  metaDescription: 'Comprehensive property evaluation scorecard for home viewings. Rate location, structure, systems, and features to make objective buying decisions.',
  article: {
    title: "The Ultimate Property Viewing Scorecard",
    content: `
    <h2>Why Use a Property Scorecard?</h2>
    <p>A structured scorecard eliminates emotion-driven decisions and ensures you evaluate every property against the same criteria. This systematic approach helps you compare properties objectively and avoid buyer's remorse.</p>
    
    <h3>Core Evaluation Categories</h3>
    
    <h4>1. Location (Weight: 25%)</h4>
    <p>The three most important words in real estate remain: location, location, location.</p>
    <ul>
      <li>School district quality and ratings</li>
      <li>Commute time to work</li>
      <li>Proximity to amenities (groceries, shopping, parks)</li>
      <li>Neighborhood safety and crime statistics</li>
      <li>Future development plans</li>
      <li>Property value trends</li>
    </ul>
    
    <h4>2. Structural & Systems (Weight: 25%)</h4>
    <p>These expensive components determine long-term maintenance costs:</p>
    <ul>
      <li>Foundation condition (cracks, settling, water damage)</li>
      <li>Roof age and condition (typical lifespan: 15-25 years)</li>
      <li>HVAC system age and efficiency (lifespan: 15-20 years)</li>
      <li>Plumbing condition (materials, pressure, leaks)</li>
      <li>Electrical system (capacity, panel age, wiring type)</li>
      <li>Windows and insulation quality</li>
    </ul>
    
    <h4>3. Interior Features (Weight: 20%)</h4>
    <ul>
      <li>Floor plan and layout efficiency</li>
      <li>Kitchen size, condition, and appliances</li>
      <li>Bathroom count and quality</li>
      <li>Bedroom sizes and closet space</li>
      <li>Flooring condition (carpet, hardwood, tile)</li>
      <li>Natural light and window placement</li>
    </ul>
    
    <h4>4. Exterior Features (Weight: 15%)</h4>
    <ul>
      <li>Curb appeal and landscaping</li>
      <li>Yard size and privacy</li>
      <li>Driveway and parking</li>
      <li>Outdoor living spaces (deck, patio)</li>
      <li>Fence and gate condition</li>
      <li>Drainage and grading</li>
    </ul>
    
    <h4>5. Value & Condition (Weight: 15%)</h4>
    <ul>
      <li>Price compared to comparable sales</li>
      <li>Overall maintenance level</li>
      <li>Needed repairs and estimated costs</li>
      <li>Updates and renovations</li>
      <li>Inclusions (appliances, fixtures)</li>
      <li>Resale potential</li>
    </ul>
    
    <h3>Critical Questions During Viewings</h3>
    <ul>
      <li>What is your best and final price? (gauge seller flexibility)</li>
      <li>Why is the seller moving? (reveals motivation)</li>
      <li>How long has it been listed? (indicates market reception)</li>
      <li>Any offers received? (competitive interest level)</li>
      <li>Disclosure of repairs or issues?</li>
      <li>What conveys with the property?</li>
      <li>Average utility costs per month?</li>
      <li>Any planned developments nearby?</li>
    </ul>
    
    <h3>Red Flags to Document</h3>
    <ul>
      <li>Water stains (roof or plumbing leaks)</li>
      <li>Musty smells (mold or moisture issues)</li>
      <li>Sloping floors (foundation problems)</li>
      <li>Fresh paint or repairs (covering issues)</li>
      <li>Excess furniture (hiding space problems)</li>
      <li>Deferred maintenance (gutters, paint, landscaping)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyName",
        label: "Property Name/Address",
        type: "text",
        placeholder: "456 Oak Avenue",
        defaultValue: "",
      },
      {
        name: "listPrice",
        label: "List Price ($)",
        type: "number",
        placeholder: "375000",
        defaultValue: "375000",
      },
      {
        name: "locationScore",
        label: "Location Score (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "structuralScore",
        label: "Structural & Systems (1-10)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
        min: "1",
        max: "10",
      },
      {
        name: "interiorScore",
        label: "Interior Features (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "exteriorScore",
        label: "Exterior Features (1-10)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
        min: "1",
        max: "10",
      },
      {
        name: "valueScore",
        label: "Value & Condition (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "estimatedRepairs",
        label: "Estimated Repair Costs ($)",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
    ],
    results: [
      { label: "Weighted Score", isCurrency: false },
      { label: "Overall Rating", isCurrency: false },
      { label: "True Cost (Price + Repairs)", isCurrency: true },
      { label: "Value Assessment", isCurrency: false },
      { label: "Strongest Category", isCurrency: false },
      { label: "Weakest Category", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const listPrice = Number(data.listPrice) || 0;
      const locationScore = Number(data.locationScore) || 0;
      const structuralScore = Number(data.structuralScore) || 0;
      const interiorScore = Number(data.interiorScore) || 0;
      const exteriorScore = Number(data.exteriorScore) || 0;
      const valueScore = Number(data.valueScore) || 0;
      const estimatedRepairs = Number(data.estimatedRepairs) || 0;
      
      const weightedScore = (
        (locationScore * 0.25) +
        (structuralScore * 0.25) +
        (interiorScore * 0.20) +
        (exteriorScore * 0.15) +
        (valueScore * 0.15)
      ).toFixed(2);
      
      const weightedPercentage = ((Number(weightedScore) / 10) * 100).toFixed(1);
      
      let rating = "";
      if (Number(weightedScore) >= 9.0) rating = "🌟 EXCEPTIONAL - Dream home quality";
      else if (Number(weightedScore) >= 8.0) rating = "⭐ EXCELLENT - Top-tier property";
      else if (Number(weightedScore) >= 7.0) rating = "✅ VERY GOOD - Strong candidate";
      else if (Number(weightedScore) >= 6.0) rating = "👍 GOOD - Worth considering";
      else if (Number(weightedScore) >= 5.0) rating = "⚠️ FAIR - Significant concerns";
      else rating = "❌ POOR - Not recommended";
      
      const trueCost = listPrice + estimatedRepairs;
      const repairPercentage = listPrice > 0 ? ((estimatedRepairs / listPrice) * 100).toFixed(1) : "0";
      
      let valueAssessment = "";
      if (Number(weightedScore) >= 8.0 && Number(repairPercentage) < 5) {
        valueAssessment = "💎 EXCELLENT VALUE - High quality, low repairs";
      } else if (Number(weightedScore) >= 7.0 && Number(repairPercentage) < 10) {
        valueAssessment = "👍 GOOD VALUE - Solid property, manageable repairs";
      } else if (Number(repairPercentage) > 15) {
        valueAssessment = "⚠️ HIGH REPAIR COSTS - Negotiate aggressively";
      } else {
        valueAssessment = "💭 AVERAGE VALUE - Compare with other options";
      }
      
      const categories = {
        "Location": locationScore,
        "Structural & Systems": structuralScore,
        "Interior": interiorScore,
        "Exterior": exteriorScore,
        "Value": valueScore,
      };
      
      const maxScore = Math.max(...Object.values(categories));
      const minScore = Math.min(...Object.values(categories));
      
      const strongest = Object.keys(categories).find(key => categories[key as keyof typeof categories] === maxScore) || "";
      const weakest = Object.keys(categories).find(key => categories[key as keyof typeof categories] === minScore) || "";
      
      let recommendation = "";
      if (Number(weightedScore) >= 8.5 && Number(repairPercentage) < 10) {
        recommendation = "🎯 MAKE AN OFFER - Excellent property, move quickly";
      } else if (Number(weightedScore) >= 7.5) {
        recommendation = "✅ STRONG CONSIDERATION - Add to top 3 shortlist";
      } else if (Number(weightedScore) >= 6.5) {
        recommendation = "💭 MAYBE - Compare closely with alternatives";
      } else if (Number(weightedScore) >= 5.5) {
        recommendation = "⚠️ PROCEED WITH CAUTION - Significant issues present";
      } else {
        recommendation = "🚫 PASS - Continue your search";
      }

      return [
        { label: "Weighted Score", value: `${weightedScore}/10 (${weightedPercentage}%)`, isCurrency: false },
        { label: "Overall Rating", value: rating, isCurrency: false },
        { label: "True Cost (Price + Repairs)", value: `${trueCost.toFixed(2)} (+${repairPercentage}% repairs)`, isCurrency: true },
        { label: "Value Assessment", value: valueAssessment, isCurrency: false },
        { label: "Strongest Category", value: `${strongest} (${maxScore}/10)`, isCurrency: false },
        { label: "Weakest Category", value: `${weakest} (${minScore}/10)`, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
