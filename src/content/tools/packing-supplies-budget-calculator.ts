import { CalculatorContent } from '@/types';

export const PACKING_SUPPLIES_BUDGET_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Packing Supplies Budget Calculator',
  description: 'Calculate the cost and quantity of moving boxes and packing supplies needed',
  icon: '📦',
  category: 'Buyer Tools',
  slug: 'packing-supplies-budget-calculator',
  metaTitle: 'Packing Supplies Budget Calculator | Estimate Moving Materials Cost',
  metaDescription: 'Calculate how many boxes and packing supplies you need for your move. Get accurate cost estimates for tape, bubble wrap, labels, and more.',
  article: {
    title: "Complete Guide to Packing Supplies for Your Move",
    content: `
    <h2>Essential Packing Supplies for Moving</h2>
    <p>Proper packing supplies protect your belongings and make moving more efficient. Underestimating supplies leads to last-minute runs and overspending, while buying too much wastes money.</p>
    
    <h3>Box Sizes and Uses</h3>
    <ul>
      <li><strong>Small Boxes (1.5 cu ft):</strong> Books, CDs, DVDs, small electronics - $1.50-$2.00 each</li>
      <li><strong>Medium Boxes (3.0 cu ft):</strong> Kitchen items, toys, small appliances - $2.00-$3.00 each</li>
      <li><strong>Large Boxes (4.5 cu ft):</strong> Linens, pillows, lampshades, lightweight items - $2.50-$4.00 each</li>
      <li><strong>Extra Large (6.0 cu ft):</strong> Comforters, blankets, large lightweight items - $3.50-$5.00 each</li>
      <li><strong>Wardrobe Boxes:</strong> Hanging clothes - $8.00-$15.00 each</li>
      <li><strong>Dish Pack Boxes:</strong> Dishes, glassware with dividers - $5.00-$8.00 each</li>
      <li><strong>Mirror/Picture Boxes:</strong> Framed art, mirrors - $10.00-$20.00 each</li>
      <li><strong>TV/Electronics Boxes:</strong> Flat screens, monitors - $15.00-$30.00 each</li>
    </ul>
    
    <h3>Box Quantity by Home Size</h3>
    <ul>
      <li><strong>Studio Apartment:</strong> 15-25 boxes</li>
      <li><strong>1 Bedroom Apartment:</strong> 20-35 boxes</li>
      <li><strong>2 Bedroom Home:</strong> 35-50 boxes</li>
      <li><strong>3 Bedroom Home:</strong> 50-75 boxes</li>
      <li><strong>4 Bedroom Home:</strong> 75-100 boxes</li>
      <li><strong>5+ Bedroom Home:</strong> 100-150+ boxes</li>
    </ul>
    
    <h3>Packing Materials Needed</h3>
    
    <h4>Tape & Adhesives:</h4>
    <ul>
      <li><strong>Packing Tape (2" wide):</strong> 1 roll per 3-5 boxes - $3-$5 per roll</li>
      <li><strong>Fragile/Caution Tape:</strong> 1-2 rolls - $4-$6 each</li>
      <li><strong>Masking Tape:</strong> For labeling - $2-$4 per roll</li>
    </ul>
    
    <h4>Protection Materials:</h4>
    <ul>
      <li><strong>Bubble Wrap:</strong> $15-$25 per 100 ft roll (need 2-4 rolls)</li>
      <li><strong>Packing Paper:</strong> $20-$35 per 25 lb bundle (need 1-3 bundles)</li>
      <li><strong>Moving Blankets:</strong> $8-$15 each (6-12 needed)</li>
      <li><strong>Furniture Pads:</strong> $1-$3 each (12-24 needed)</li>
      <li><strong>Stretch Wrap:</strong> $10-$15 per roll (2-3 rolls)</li>
      <li><strong>Foam Pouches:</strong> For dishes - $0.50-$1.00 each (24-48 needed)</li>
    </ul>
    
    <h4>Labeling & Organization:</h4>
    <ul>
      <li><strong>Permanent Markers:</strong> 4-6 markers - $1-$2 each</li>
      <li><strong>Color-Coded Labels:</strong> By room - $5-$10 per set</li>
      <li><strong>Fragile Stickers:</strong> $3-$5 per sheet</li>
      <li><strong>Inventory Sheets:</strong> Free printables or $5-$10</li>
    </ul>
    
    <h3>Where to Get Boxes</h3>
    
    <h4>Free Sources:</h4>
    <ul>
      <li>Liquor stores (small, sturdy boxes)</li>
      <li>Grocery stores (ask at customer service)</li>
      <li>Bookstores (perfect for books)</li>
      <li>Facebook Marketplace or Craigslist</li>
      <li>Freecycle or Buy Nothing groups</li>
      <li>Office buildings (copy paper boxes)</li>
    </ul>
    
    <h4>Purchase Sources:</h4>
    <ul>
      <li><strong>U-Haul/Home Depot/Lowe's:</strong> Individual boxes, convenient</li>
      <li><strong>Amazon/Walmart:</strong> Box kits, bulk pricing</li>
      <li><strong>Moving Companies:</strong> Packages, delivery available</li>
      <li><strong>Office Supply Stores:</strong> Various sizes, quality</li>
      <li><strong>U-Line:</strong> Bulk orders, commercial grade</li>
    </ul>
    
    <h3>Money-Saving Tips</h3>
    <ul>
      <li>✅ Start collecting free boxes 6-8 weeks before moving</li>
      <li>✅ Use towels, blankets, clothes as packing material</li>
      <li>✅ Rent plastic moving bins instead of buying boxes</li>
      <li>✅ Buy bundle packs (often 30-40% cheaper)</li>
      <li>✅ Use newspaper instead of packing paper</li>
      <li>✅ Keep boxes for resale or give away after move</li>
      <li>✅ Use suitcases and duffel bags for clothes</li>
    </ul>
    
    <h3>Professional Packing Kits</h3>
    <p>Many companies offer pre-assembled kits:</p>
    <ul>
      <li><strong>Studio Kit:</strong> 15-20 boxes + supplies - $60-$100</li>
      <li><strong>1BR Kit:</strong> 20-30 boxes + supplies - $100-$150</li>
      <li><strong>2BR Kit:</strong> 35-50 boxes + supplies - $150-$250</li>
      <li><strong>3BR Kit:</strong> 50-75 boxes + supplies - $250-$400</li>
      <li><strong>4BR+ Kit:</strong> 75-100 boxes + supplies - $400-$600</li>
    </ul>
    
    <h3>Typical Budget Ranges</h3>
    <ul>
      <li><strong>Budget Move (mostly free boxes):</strong> $50-$100</li>
      <li><strong>Standard Move (mix of free/purchased):</strong> $150-$300</li>
      <li><strong>Premium Move (all new supplies):</strong> $300-$600</li>
      <li><strong>Full-Service Pack (company provides all):</strong> $500-$1,500+</li>
    </ul>
    
    <h3>Don't Forget These Items</h3>
    <ul>
      <li>Scissors and box cutters (2-3 each)</li>
      <li>Gloves for packing (3-4 pairs)</li>
      <li>Mattress bags (1 per bed)</li>
      <li>Sofa/furniture covers</li>
      <li>"First Night" box supplies</li>
      <li>Ziplock bags for hardware</li>
      <li>Rope or bungee cords</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homeSize",
        label: "Home Size",
        type: "select",
        options: [
          { value: "studio", label: "Studio Apartment" },
          { value: "1br", label: "1 Bedroom" },
          { value: "2br", label: "2 Bedroom" },
          { value: "3br", label: "3 Bedroom" },
          { value: "4br", label: "4 Bedroom" },
          { value: "5br", label: "5+ Bedroom" },
        ],
        defaultValue: "3br",
      },
      {
        name: "packingLevel",
        label: "Packing Level",
        type: "select",
        options: [
          { value: "minimal", label: "Minimal - I have most items" },
          { value: "standard", label: "Standard - Average household" },
          { value: "heavy", label: "Heavy - Lots of belongings" },
        ],
        defaultValue: "standard",
      },
      {
        name: "hasFragiles",
        label: "Lots of Fragile Items?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - Dishes, art, electronics" },
          { value: "no", label: "No - Mostly furniture & clothes" },
        ],
        defaultValue: "yes",
      },
      {
        name: "buyingMethod",
        label: "Box Acquisition",
        type: "select",
        options: [
          { value: "free", label: "Free boxes (collected)" },
          { value: "mixed", label: "Mix of free & purchased" },
          { value: "new", label: "All new boxes purchased" },
        ],
        defaultValue: "mixed",
      },
    ],
    results: [
      { label: "Estimated Box Quantity", isCurrency: false },
      { label: "Box Breakdown", isCurrency: false },
      { label: "Boxes Cost", isCurrency: true },
      { label: "Packing Materials Cost", isCurrency: true },
      { label: "Optional Supplies Cost", isCurrency: true },
      { label: "TOTAL ESTIMATED COST", isCurrency: true },
      { label: "Cost-Saving Tips", isCurrency: false },
    ],
    calculate: (data: any) => {
      const homeSize = data.homeSize;
      const packingLevel = data.packingLevel;
      const hasFragiles = data.hasFragiles === "yes";
      const buyingMethod = data.buyingMethod;
      
      let baseBoxes = 0;
      if (homeSize === "studio") baseBoxes = 20;
      else if (homeSize === "1br") baseBoxes = 30;
      else if (homeSize === "2br") baseBoxes = 45;
      else if (homeSize === "3br") baseBoxes = 65;
      else if (homeSize === "4br") baseBoxes = 90;
      else if (homeSize === "5br") baseBoxes = 125;
      
      if (packingLevel === "minimal") baseBoxes *= 0.8;
      else if (packingLevel === "heavy") baseBoxes *= 1.3;
      
      const totalBoxes = Math.round(baseBoxes);
      const smallBoxes = Math.round(totalBoxes * 0.3);
      const mediumBoxes = Math.round(totalBoxes * 0.4);
      const largeBoxes = Math.round(totalBoxes * 0.2);
      const wardrobeBoxes = homeSize === "studio" ? 2 : homeSize === "5br" ? 6 : 4;
      const dishPackBoxes = hasFragiles ? (homeSize === "studio" ? 2 : 4) : 0;
      
      let boxCost = 0;
      if (buyingMethod === "new") {
        boxCost = (smallBoxes * 1.75) + (mediumBoxes * 2.50) + 
                  (largeBoxes * 3.50) + (wardrobeBoxes * 12) + (dishPackBoxes * 6.50);
      } else if (buyingMethod === "mixed") {
        boxCost = ((smallBoxes * 1.75) + (mediumBoxes * 2.50) + 
                   (largeBoxes * 3.50)) * 0.5 + (wardrobeBoxes * 12) + (dishPackBoxes * 6.50);
      } else {
        boxCost = (wardrobeBoxes * 12) + (dishPackBoxes * 6.50);
      }
      
      const tapeRolls = Math.ceil(totalBoxes / 4);
      const bubbleWrapRolls = hasFragiles ? 3 : 1;
      const packingPaperBundles = hasFragiles ? 2 : 1;
      const movingBlankets = homeSize === "studio" ? 6 : homeSize === "5br" ? 12 : 8;
      const markers = 5;
      
      const materialsCost = (tapeRolls * 4) + (bubbleWrapRolls * 20) + 
                           (packingPaperBundles * 27) + (movingBlankets * 10) + 
                           (markers * 2);
      
      const optionalCost = 45;
      
      const totalCost = boxCost + materialsCost + optionalCost;
      
      const boxBreakdown = `
${smallBoxes} Small boxes (books, kitchen)
${mediumBoxes} Medium boxes (general items)
${largeBoxes} Large boxes (linens, lightweight)
${wardrobeBoxes} Wardrobe boxes (hanging clothes)${dishPackBoxes > 0 ? `\n${dishPackBoxes} Dish pack boxes (fragile items)` : ''}
Total: ${totalBoxes + wardrobeBoxes + dishPackBoxes} boxes
      `.trim();
      
      const savingTips = `
💡 Save $100-200 by collecting free boxes 6-8 weeks early
💡 Use towels/clothes as packing material instead of bubble wrap
💡 Buy bundle kits (30-40% cheaper than individual boxes)
💡 Consider renting reusable plastic bins ($50-150, eco-friendly)
💡 Sell/donate boxes after move to recoup 30-50% of cost
      `.trim();

      return [
        { label: "Estimated Box Quantity", value: `${totalBoxes + wardrobeBoxes + dishPackBoxes} total boxes needed`, isCurrency: false },
        { label: "Box Breakdown", value: boxBreakdown, isCurrency: false },
        { label: "Boxes Cost", value: boxCost.toFixed(2), isCurrency: true },
        { label: "Packing Materials Cost", value: `${materialsCost.toFixed(2)} (tape, wrap, blankets, markers)`, isCurrency: true },
        { label: "Optional Supplies Cost", value: `${optionalCost.toFixed(2)} (labels, stretch wrap, misc)`, isCurrency: true },
        { label: "TOTAL ESTIMATED COST", value: totalCost.toFixed(2), isCurrency: true },
        { label: "Cost-Saving Tips", value: savingTips, isCurrency: false },
      ];
    },
  },
};
