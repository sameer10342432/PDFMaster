import { CalculatorContent } from '@/types';

export const OPEN_HOUSE_FEEDBACK_TRACKER_CONTENT: CalculatorContent = {
  title: 'Open House Feedback Tracker',
  description: 'Track and analyze feedback from open house visits to make better buying decisions',
  icon: '🏠',
  category: 'Buyer Tools',
  slug: 'open-house-feedback-tracker',
  metaTitle: 'Open House Feedback Tracker | Compare Properties You\'ve Visited',
  metaDescription: 'Track your open house visits, rate properties, and compare homes side-by-side. Make data-driven decisions with organized feedback and scores.',
  article: {
    title: "Tracking Open House Visits: A Systematic Approach",
    content: `
    <h2>Why Track Open House Feedback?</h2>
    <p>When viewing multiple properties, details blur together. A systematic feedback tracker helps you remember key details, compare properties objectively, and make informed decisions.</p>
    
    <h3>What to Evaluate at Every Open House</h3>
    <p>Rate these key aspects on a scale of 1-10:</p>
    <ul>
      <li><strong>Location & Neighborhood:</strong> Proximity to work, schools, amenities, safety</li>
      <li><strong>Condition & Maintenance:</strong> Overall state, needed repairs, age of systems</li>
      <li><strong>Layout & Flow:</strong> Room arrangement, traffic patterns, functionality</li>
      <li><strong>Natural Light:</strong> Windows, brightness, orientation</li>
      <li><strong>Storage & Space:</strong> Closets, garage, basement, attic</li>
      <li><strong>Kitchen & Bathrooms:</strong> Condition, size, updates needed</li>
      <li><strong>Outdoor Space:</strong> Yard size, condition, privacy, maintenance</li>
      <li><strong>Noise Levels:</strong> Street noise, neighbors, ambient sounds</li>
    </ul>
    
    <h3>Questions to Ask at Open Houses</h3>
    <ul>
      <li>How long has the property been on the market?</li>
      <li>Why is the seller moving?</li>
      <li>Have there been any price reductions?</li>
      <li>What's included in the sale?</li>
      <li>What are the average utility costs?</li>
      <li>When were major systems last updated? (HVAC, roof, water heater)</li>
      <li>Any known issues or needed repairs?</li>
      <li>HOA fees and restrictions?</li>
      <li>Property tax amount?</li>
    </ul>
    
    <h3>Red Flags to Note</h3>
    <ul>
      <li>Musty odors (possible mold or water damage)</li>
      <li>Fresh paint covering issues</li>
      <li>Uneven floors (foundation problems)</li>
      <li>Water stains on ceilings/walls</li>
      <li>Cracks in walls or foundation</li>
      <li>Overgrown landscaping (deferred maintenance)</li>
      <li>Excessive air fresheners (masking odors)</li>
    </ul>
    
    <h3>Take Photos and Notes</h3>
    <p>Document each property with:</p>
    <ul>
      <li>Photos of each room and any concerns</li>
      <li>Video walkthrough for later review</li>
      <li>Notes on measurements for furniture</li>
      <li>Nearby amenities and drive times</li>
      <li>Gut feeling and emotional response</li>
    </ul>
    
    <h3>Compare Properties Objectively</h3>
    <p>Use this tracker to create a scorecard for each property, making it easier to compare apples-to-apples and identify your top choices.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyAddress",
        label: "Property Address",
        type: "text",
        placeholder: "123 Main St, City, State",
        defaultValue: "",
      },
      {
        name: "listPrice",
        label: "List Price ($)",
        type: "number",
        placeholder: "425000",
        defaultValue: "425000",
      },
      {
        name: "locationScore",
        label: "Location & Neighborhood (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "conditionScore",
        label: "Condition & Maintenance (1-10)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
        min: "1",
        max: "10",
      },
      {
        name: "layoutScore",
        label: "Layout & Flow (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "lightScore",
        label: "Natural Light (1-10)",
        type: "number",
        placeholder: "9",
        defaultValue: "9",
        min: "1",
        max: "10",
      },
      {
        name: "storageScore",
        label: "Storage & Space (1-10)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
        min: "1",
        max: "10",
      },
      {
        name: "kitchenBathScore",
        label: "Kitchen & Bathrooms (1-10)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
        min: "1",
        max: "10",
      },
      {
        name: "outdoorScore",
        label: "Outdoor Space (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
      {
        name: "noiseScore",
        label: "Noise Levels (1-10, 10=quiet)",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
        min: "1",
        max: "10",
      },
      {
        name: "gutFeeling",
        label: "Gut Feeling (1-10)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
        min: "1",
        max: "10",
      },
    ],
    results: [
      { label: "Overall Score", isCurrency: false },
      { label: "Category Rating", isCurrency: false },
      { label: "Price per Point", isCurrency: true },
      { label: "Top Strength", isCurrency: false },
      { label: "Biggest Weakness", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const listPrice = Number(data.listPrice) || 0;
      const locationScore = Number(data.locationScore) || 0;
      const conditionScore = Number(data.conditionScore) || 0;
      const layoutScore = Number(data.layoutScore) || 0;
      const lightScore = Number(data.lightScore) || 0;
      const storageScore = Number(data.storageScore) || 0;
      const kitchenBathScore = Number(data.kitchenBathScore) || 0;
      const outdoorScore = Number(data.outdoorScore) || 0;
      const noiseScore = Number(data.noiseScore) || 0;
      const gutFeeling = Number(data.gutFeeling) || 0;
      
      const totalScore = locationScore + conditionScore + layoutScore + lightScore + 
                        storageScore + kitchenBathScore + outdoorScore + noiseScore + gutFeeling;
      const averageScore = (totalScore / 9).toFixed(1);
      const percentageScore = ((totalScore / 90) * 100).toFixed(1);
      
      let category = "";
      if (totalScore >= 80) category = "🌟 EXCELLENT - Top-tier property";
      else if (totalScore >= 70) category = "✅ VERY GOOD - Strong contender";
      else if (totalScore >= 60) category = "👍 GOOD - Worth considering";
      else if (totalScore >= 50) category = "⚠️ FAIR - Has significant drawbacks";
      else category = "❌ POOR - Not recommended";
      
      const pricePerPoint = listPrice > 0 ? (listPrice / totalScore).toFixed(2) : "0";
      
      const scores = {
        "Location": locationScore,
        "Condition": conditionScore,
        "Layout": layoutScore,
        "Natural Light": lightScore,
        "Storage": storageScore,
        "Kitchen/Bath": kitchenBathScore,
        "Outdoor": outdoorScore,
        "Noise": noiseScore,
        "Gut Feeling": gutFeeling,
      };
      
      const maxScore = Math.max(...Object.values(scores));
      const minScore = Math.min(...Object.values(scores));
      
      const topStrength = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore) || "";
      const biggestWeakness = Object.keys(scores).find(key => scores[key as keyof typeof scores] === minScore) || "";
      
      let recommendation = "";
      if (totalScore >= 80) {
        recommendation = "🎯 HIGHLY RECOMMENDED - Schedule second viewing immediately";
      } else if (totalScore >= 70) {
        recommendation = "✅ RECOMMENDED - Add to shortlist for comparison";
      } else if (totalScore >= 60) {
        recommendation = "💭 CONSIDER - Compare with other options carefully";
      } else {
        recommendation = "🚫 PASS - Keep looking for better matches";
      }

      return [
        { label: "Overall Score", value: `${totalScore}/90 (${percentageScore}%) - ${category}`, isCurrency: false },
        { label: "Category Rating", value: `Average ${averageScore}/10 per category`, isCurrency: false },
        { label: "Price per Point", value: pricePerPoint, isCurrency: true },
        { label: "Top Strength", value: `${topStrength} (${maxScore}/10)`, isCurrency: false },
        { label: "Biggest Weakness", value: `${biggestWeakness} (${minScore}/10)`, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
