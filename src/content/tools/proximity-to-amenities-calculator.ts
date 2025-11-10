import { CalculatorContent } from '@/types';

export const PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Proximity to Amenities Calculator',
  description: 'Evaluate property location score based on proximity to key amenities including transit, schools, shopping, parks, and employment centers.',
  icon: 'Icon',
  category: 'Market Analysis',
  slug: 'proximity-to-amenities-calculator',
  article: {
    title: "Location Score: How Amenities Impact Property Value",
    content: `
    <h2>Location, Location, Location</h2>
    <p>Proximity to amenities is a primary driver of property values and rental demand. Properties near desirable amenities command premium prices and lower vacancy rates.</p>
    
    <h3>Critical Amenities by Property Type</h3>
    <p><strong>Urban Apartments (Young Professionals):</strong></p>
    <ul>
      <li><strong>Transit Access:</strong> Within 0.5 miles of metro/train (+15-25% value)</li>
      <li><strong>Restaurants & Entertainment:</strong> Walkable nightlife, cafes, bars (+10-15%)</li>
      <li><strong>Grocery Stores:</strong> Within 1 mile, especially Whole Foods/Trader Joe's (+8-12%)</li>
      <li><strong>Gyms & Parks:</strong> Fitness centers, green spaces within 0.5 miles (+5-10%)</li>
    </ul>
    
    <p><strong>Family Homes (Suburban):</strong></p>
    <ul>
      <li><strong>Top-Rated Schools:</strong> Within district boundaries (+20-30% value)</li>
      <li><strong>Parks & Playgrounds:</strong> Within 0.5 miles (+8-15%)</li>
      <li><strong>Shopping Centers:</strong> Within 2-3 miles for convenience (+5-10%)</li>
      <li><strong>Safe Neighborhoods:</strong> Low crime, family-friendly atmosphere (priceless)</li>
    </ul>
    
    <p><strong>Workforce Housing (Middle-Income):</strong></p>
    <ul>
      <li><strong>Job Centers:</strong> Under 30-min commute to major employment hubs (+10-20%)</li>
      <li><strong>Public Transit:</strong> Bus routes, highway access (+8-15%)</li>
      <li><strong>Affordable Retail:</strong> Walmart, Target, discount grocers (+5-8%)</li>
      <li><strong>Healthcare:</strong> Clinics, urgent care within 3-5 miles (+3-5%)</li>
    </ul>
    
    <h3>Walkability & Transit Premium</h3>
    <ul>
      <li><strong>Walk Score 90-100:</strong> Walker's Paradise - 20-40% premium over car-dependent areas</li>
      <li><strong>Walk Score 70-89:</strong> Very Walkable - 10-20% premium</li>
      <li><strong>Walk Score 50-69:</strong> Somewhat Walkable - 0-10% premium</li>
      <li><strong>Walk Score <50:</strong> Car-Dependent - Baseline pricing</li>
    </ul>
    
    <h3>Distance Impact on Value</h3>
    <ul>
      <li><strong>0-0.25 miles:</strong> Maximum premium, "on-site" proximity</li>
      <li><strong>0.25-0.5 miles:</strong> Excellent, 5-10 minute walk</li>
      <li><strong>0.5-1 mile:</strong> Good, 10-20 minute walk or quick drive</li>
      <li><strong>1-3 miles:</strong> Moderate, requires car or longer walk</li>
      <li><strong>3+ miles:</strong> Minimal impact on value</li>
    </ul>
    
    <h3>Negative Amenities (Detractors)</h3>
    <p>Some "amenities" reduce property values:</p>
    <ul>
      <li><strong>Highways/Major Roads:</strong> Noise, air quality (-5-15% within 500 feet)</li>
      <li><strong>Industrial Areas:</strong> Pollution, truck traffic (-10-20%)</li>
      <li><strong>Airports:</strong> Noise pollution (-10-30% in flight paths)</li>
      <li><strong>Landfills/Waste Facilities:</strong> Odor, perception (-15-25%)</li>
      <li><strong>Power Lines:</strong> Visual blight, health concerns (-5-10%)</li>
    </ul>
    
    <h3>Emerging Amenity Trends (2024-2025)</h3>
    <ul>
      <li><strong>EV Charging Stations:</strong> Growing importance (+3-5%)</li>
      <li><strong>Coworking Spaces:</strong> Remote work support (+5-8% in urban areas)</li>
      <li><strong>Bike Lanes/Infrastructure:</strong> Especially valued by younger buyers (+5-10%)</li>
      <li><strong>Green Spaces:</strong> Post-pandemic priority (+10-15%)</li>
    </ul>
    
    <h3>Using Amenity Data</h3>
    <ul>
      <li>Use Google Maps to measure walking distances</li>
      <li>Check Walk Score (walkscore.com) for comprehensive ratings</li>
      <li>Visit at different times (rush hour, evenings, weekends)</li>
      <li>Talk to neighbors about what they value most</li>
      <li>Review local development plans for new amenities coming</li>
    </ul>
    
    <p><em>Note: This is a demonstration tool. For detailed amenity mapping, use Google Maps, Walk Score, or commercial real estate platforms.</em></p>
  `,
  },
  calculator: {
    results: [
      { label: 'Overall Location Score', isCurrency: false },
      { label: 'Walkability Rating', isCurrency: false },
      { label: 'Transit Access Score', isCurrency: false },
      { label: 'School Quality Proximity', isCurrency: false },
      { label: 'Retail & Services', isCurrency: false },
      { label: 'Estimated Value Premium', isCurrency: false },
      { label: 'Target Market Suitability', isCurrency: false },
    ],
    fields: [
      {
        name: 'address',
        label: 'Property Address',
        type: 'text',
        defaultValue: '100 Main Street, Portland, OR 97201',
      },
      {
        name: 'demoLocation',
        label: 'Demo Location Type (Select for Testing)',
        type: 'select',
        options: [
          { label: 'Prime Urban Core (Walkable)', value: 'urban_prime' },
          { label: 'Transit-Adjacent Suburban', value: 'suburban_transit' },
          { label: 'Car-Dependent Suburban', value: 'suburban_car' },
          { label: 'Rural/Remote', value: 'rural' },
        ],
        defaultValue: 'urban_prime',
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select',
        options: [
          { label: 'Urban Apartment/Condo', value: 'urban_apt' },
          { label: 'Family Home', value: 'family' },
          { label: 'Multi-Family (Small)', value: 'multifamily' },
        ],
        defaultValue: 'urban_apt',
      },
    ],
    calculate: (data) => {
      const { address, demoLocation, propertyType } = data;
      
      let locationScore = '';
      let walkability = '';
      let transit = '';
      let schools = '';
      let retail = '';
      let valuePremium = '';
      let targetMarket = '';
      
      switch (demoLocation) {
        case 'urban_prime':
          locationScore = '★★★★★ 95/100 - Excellent Urban Location';
          walkability = '★★★★★ Walk Score 95 - Walker\'s Paradise';
          transit = '★★★★★ Excellent - Metro 0.2 mi, multiple bus routes';
          schools = propertyType === 'family' ? '★★★☆☆ Average - Urban schools nearby' : 'N/A - Not priority for target market';
          retail = '★★★★★ Outstanding - Grocery 0.3 mi, restaurants/shops walkable';
          valuePremium = '+25-35% vs. car-dependent areas';
          targetMarket = propertyType === 'urban_apt' ? 
            '✓ Perfect - Young professionals, DINK couples, premium rents $2,800-$5,000/mo' : 
            '⚖️ Good - Urban families value walkability despite school trade-offs';
          break;
        case 'suburban_transit':
          locationScore = '★★★★☆ 78/100 - Good Transit-Oriented Development';
          walkability = '★★★★☆ Walk Score 72 - Very Walkable';
          transit = '★★★★☆ Good - Light rail 0.6 mi, park-and-ride nearby';
          schools = propertyType === 'family' ? '★★★★☆ Good - Above-average schools within 1 mile' : '★★★☆☆ Adequate for families';
          retail = '★★★★☆ Good - Grocery 0.8 mi, shopping center 1.5 mi';
          valuePremium = '+12-18% vs. car-dependent suburbs';
          targetMarket = propertyType === 'family' ? 
            '✓ Excellent - Families who commute, balance of schools + transit, $2,200-$3,500/mo' : 
            '✓ Good - Mix of professionals and families';
          break;
        case 'suburban_car':
          locationScore = '★★★☆☆ 52/100 - Typical Car-Dependent Suburb';
          walkability = '★★☆☆☆ Walk Score 35 - Car-Dependent';
          transit = '★★☆☆☆ Limited - Bus route 1.2 mi, infrequent service';
          schools = propertyType === 'family' ? '★★★★★ Excellent - Top-rated schools, main draw' : '★★★★☆ Good local schools';
          retail = '★★★☆☆ Adequate - Grocery 2.5 mi, strip malls require driving';
          valuePremium = propertyType === 'family' && schools.includes('Excellent') ? 
            '+8-15% premium for school quality' : 
            'Baseline pricing (no walkability premium)';
          targetMarket = propertyType === 'family' ? 
            '✓ Good - Families prioritizing schools over walkability, $1,600-$2,800/mo' : 
            '⚖️ Moderate - Limited appeal to young professionals, solid family market';
          break;
        case 'rural':
          locationScore = '★★☆☆☆ 28/100 - Remote/Rural Location';
          walkability = '★☆☆☆☆ Walk Score 15 - Car-Dependent';
          transit = '★☆☆☆☆ None - No public transportation';
          schools = '★★☆☆☆ Limited - Rural schools, longer bus rides';
          retail = '★★☆☆☆ Limited - Grocery 8+ mi, limited services';
          valuePremium = '-15-25% vs. suburban areas (lower demand, limited amenities)';
          targetMarket = '⚖️ Niche - Acreage buyers, retirees, farm/ranch, lower rents $900-$1,800/mo';
          break;
      }
      
      return [
        { label: 'Overall Location Score', value: locationScore, isCurrency: false },
        { label: 'Walkability Rating', value: walkability, isCurrency: false },
        { label: 'Transit Access Score', value: transit, isCurrency: false },
        { label: 'School Quality Proximity', value: schools, isCurrency: false },
        { label: 'Retail & Services', value: retail, isCurrency: false },
        { label: 'Estimated Value Premium', value: valuePremium, isCurrency: false },
        { label: 'Target Market Suitability', value: targetMarket, isCurrency: false },
      ];
    },
  },
};
