import { CalculatorContent } from '@/types';

export const MOVING_TRUCK_RENTAL_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Moving Truck Rental Cost Estimator',
  description: 'Calculate the total cost of renting a moving truck including all fees and fuel',
  icon: '🚚',
  category: 'Buyer Tools',
  slug: 'moving-truck-rental-cost-estimator',
  metaTitle: 'Moving Truck Rental Cost Estimator | Budget Your Move Accurately',
  metaDescription: 'Calculate moving truck rental costs including vehicle size, mileage, fuel, insurance, and fees. Compare U-Haul, Penske, Budget options.',
  article: {
    title: "Moving Truck Rental: Complete Cost Breakdown",
    content: `
    <h2>Understanding Moving Truck Rental Costs</h2>
    <p>Renting a moving truck seems straightforward, but hidden fees can double your expected costs. Understanding all components helps you budget accurately and avoid surprises.</p>
    
    <h3>Major Moving Truck Companies</h3>
    <ul>
      <li><strong>U-Haul:</strong> Most locations, widest availability, competitive pricing</li>
      <li><strong>Penske:</strong> Newer trucks, excellent customer service, slightly higher cost</li>
      <li><strong>Budget:</strong> Good value, reliable fleet, fewer locations</li>
      <li><strong>Enterprise:</strong> Quality trucks, competitive rates, limited locations</li>
      <li><strong>Ryder:</strong> Commercial focus, good for large moves</li>
    </ul>
    
    <h3>Truck Size Guide by Home Size</h3>
    <ul>
      <li><strong>10-12 ft:</strong> Studio or 1 bedroom (up to 400 sq ft) - $19.95-$29.95/day</li>
      <li><strong>15-16 ft:</strong> 1-2 bedroom apartment (up to 800 sq ft) - $29.95-$39.95/day</li>
      <li><strong>17 ft:</strong> 2 bedroom home (up to 1,200 sq ft) - $39.95-$49.95/day</li>
      <li><strong>20 ft:</strong> 2-3 bedroom home (up to 1,500 sq ft) - $39.95-$49.95/day</li>
      <li><strong>26 ft:</strong> 3-4 bedroom home (up to 2,000+ sq ft) - $39.95-$59.95/day</li>
    </ul>
    
    <h3>Base Rental Costs</h3>
    <ul>
      <li><strong>In-Town Move:</strong> $19.95-$59.95 base + $0.79-$0.99 per mile</li>
      <li><strong>One-Way Move:</strong> $130-$2,000+ depending on distance and size</li>
      <li><strong>Daily Rate:</strong> Includes 24 hours from pickup time</li>
      <li><strong>Weekend Rates:</strong> Often higher than weekday rentals</li>
    </ul>
    
    <h3>Mileage Charges</h3>
    <ul>
      <li><strong>Local Moves:</strong> $0.79-$0.99 per mile</li>
      <li><strong>One-Way Moves:</strong> Usually unlimited mileage included</li>
      <li><strong>Distance Calculation:</strong> Measure from pickup to drop-off</li>
      <li><strong>Extra Trips:</strong> Each return trip adds mileage costs</li>
    </ul>
    
    <h3>Fuel Costs (Often Overlooked!)</h3>
    <p>Rental trucks get poor gas mileage:</p>
    <ul>
      <li><strong>10-12 ft truck:</strong> 10-12 MPG</li>
      <li><strong>15-17 ft truck:</strong> 8-10 MPG</li>
      <li><strong>20 ft truck:</strong> 6-8 MPG</li>
      <li><strong>26 ft truck:</strong> 6-8 MPG</li>
      <li><strong>Diesel vs Gas:</strong> Check which fuel type before filling</li>
      <li><strong>Return Full:</strong> Or pay premium fuel charges ($4-$6/gallon)</li>
    </ul>
    
    <h3>Insurance Options</h3>
    <ul>
      <li><strong>Collision Damage Waiver:</strong> $14-$30/day (recommended)</li>
      <li><strong>Cargo Protection:</strong> $10-$15/day</li>
      <li><strong>Personal Auto Insurance:</strong> May cover truck (check first)</li>
      <li><strong>Credit Card Coverage:</strong> Some cards cover truck rentals</li>
      <li><strong>Deductible:</strong> Typically $500-$1,000 without insurance</li>
    </ul>
    
    <h3>Additional Fees to Expect</h3>
    <ul>
      <li><strong>Environmental Fee:</strong> $1-$5</li>
      <li><strong>Sales Tax:</strong> Varies by state (often 7-10% of total)</li>
      <li><strong>Taxes on Fees:</strong> Applied to rental, mileage, insurance</li>
      <li><strong>After-Hours Drop:</strong> $20-$50 if applicable</li>
      <li><strong>Extra Days:</strong> $40-$100 per additional day</li>
      <li><strong>Cleaning Fee:</strong> $50-$200 if returned dirty</li>
      <li><strong>Toll Charges:</strong> May bill you later</li>
    </ul>
    
    <h3>Equipment Rental</h3>
    <ul>
      <li><strong>Furniture Dolly:</strong> $10-$15</li>
      <li><strong>Appliance Dolly:</strong> $12-$15</li>
      <li><strong>Moving Blankets:</strong> $10-$15 per dozen</li>
      <li><strong>Utility Dolly:</strong> $7-$10</li>
      <li><strong>Furniture Pads:</strong> $1-$2 each</li>
      <li><strong>Tie-Down Straps:</strong> $3-$5 each</li>
    </ul>
    
    <h3>Money-Saving Tips</h3>
    <ul>
      <li>✅ Book 2-4 weeks in advance for better rates</li>
      <li>✅ Move mid-week (Tue-Thu) instead of weekends</li>
      <li>✅ Avoid month-end when demand is highest</li>
      <li>✅ Return on time to avoid late fees ($40-100)</li>
      <li>✅ Fill up gas yourself before returning</li>
      <li>✅ Use AAA or military discounts (10-20% off)</li>
      <li>✅ Right-size your truck (bigger isn't always better)</li>
      <li>✅ Check your insurance before buying coverage</li>
    </ul>
    
    <h3>Hidden Costs to Watch For</h3>
    <ul>
      <li>🚨 Premium fuel charges if not returned full</li>
      <li>🚨 Cleaning fees for dirty trucks</li>
      <li>🚨 Mileage overage charges</li>
      <li>🚨 Late return fees ($40-$100+)</li>
      <li>🚨 Damage charges without insurance</li>
      <li>🚨 Sales tax on everything (often 8-10%)</li>
    </ul>
    
    <h3>Typical Total Costs by Move Distance</h3>
    <ul>
      <li><strong>Local (under 50 miles):</strong> $150-$400 total</li>
      <li><strong>In-State (50-200 miles):</strong> $300-$800 total</li>
      <li><strong>Interstate (200-500 miles):</strong> $600-$1,500 total</li>
      <li><strong>Cross-Country (1,000+ miles):</strong> $1,500-$4,000+ total</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "truckSize",
        label: "Truck Size",
        type: "select",
        options: [
          { value: "10", label: "10-12 ft (Studio/1BR)" },
          { value: "15", label: "15-17 ft (1-2BR)" },
          { value: "20", label: "20 ft (2-3BR)" },
          { value: "26", label: "26 ft (3-4BR+)" },
        ],
        defaultValue: "20",
      },
      {
        name: "rentalDays",
        label: "Rental Days",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "baseRate",
        label: "Base Daily Rate ($)",
        type: "number",
        placeholder: "39.95",
        defaultValue: "39.95",
      },
      {
        name: "totalMiles",
        label: "Total Miles to Drive",
        type: "number",
        placeholder: "75",
        defaultValue: "75",
      },
      {
        name: "mileageRate",
        label: "Per Mile Rate ($)",
        type: "number",
        placeholder: "0.89",
        defaultValue: "0.89",
        step: "0.01",
      },
      {
        name: "fuelPrice",
        label: "Fuel Price per Gallon ($)",
        type: "number",
        placeholder: "3.50",
        defaultValue: "3.50",
        step: "0.10",
      },
      {
        name: "includeInsurance",
        label: "Add Insurance?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - Damage Waiver ($20/day)" },
          { value: "no", label: "No - I have coverage" },
        ],
        defaultValue: "yes",
      },
      {
        name: "needEquipment",
        label: "Need Moving Equipment?",
        type: "select",
        options: [
          { value: "yes", label: "Yes - Dolly & Blankets" },
          { value: "no", label: "No" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [
      { label: "Base Rental Cost", isCurrency: true },
      { label: "Mileage Charges", isCurrency: true },
      { label: "Estimated Fuel Cost", isCurrency: true },
      { label: "Insurance Cost", isCurrency: true },
      { label: "Equipment Rental", isCurrency: true },
      { label: "Subtotal Before Tax", isCurrency: true },
      { label: "Est. Tax (8%)", isCurrency: true },
      { label: "TOTAL ESTIMATED COST", isCurrency: true },
    ],
    calculate: (data: any) => {
      const truckSize = Number(data.truckSize) || 20;
      const rentalDays = Number(data.rentalDays) || 1;
      const baseRate = Number(data.baseRate) || 0;
      const totalMiles = Number(data.totalMiles) || 0;
      const mileageRate = Number(data.mileageRate) || 0;
      const fuelPrice = Number(data.fuelPrice) || 0;
      const includeInsurance = data.includeInsurance === "yes";
      const needEquipment = data.needEquipment === "yes";
      
      const baseRentalCost = baseRate * rentalDays;
      const mileageCharges = totalMiles * mileageRate;
      
      let mpg = 10;
      if (truckSize <= 12) mpg = 11;
      else if (truckSize <= 17) mpg = 9;
      else if (truckSize >= 20) mpg = 7;
      
      const gallonsNeeded = totalMiles / mpg;
      const fuelCost = gallonsNeeded * fuelPrice;
      
      const insuranceCost = includeInsurance ? (20 * rentalDays) : 0;
      
      const equipmentCost = needEquipment ? 25 : 0;
      
      const subtotal = baseRentalCost + mileageCharges + fuelCost + insuranceCost + equipmentCost;
      const tax = subtotal * 0.08;
      const total = subtotal + tax;

      return [
        { label: "Base Rental Cost", value: `${baseRentalCost.toFixed(2)} (${rentalDays} day${rentalDays > 1 ? 's' : ''})`, isCurrency: true },
        { label: "Mileage Charges", value: `${mileageCharges.toFixed(2)} (${totalMiles} mi × $${mileageRate})`, isCurrency: true },
        { label: "Estimated Fuel Cost", value: `${fuelCost.toFixed(2)} (~${gallonsNeeded.toFixed(1)} gal @ ${mpg} MPG)`, isCurrency: true },
        { label: "Insurance Cost", value: insuranceCost.toFixed(2), isCurrency: true },
        { label: "Equipment Rental", value: equipmentCost.toFixed(2), isCurrency: true },
        { label: "Subtotal Before Tax", value: subtotal.toFixed(2), isCurrency: true },
        { label: "Est. Tax (8%)", value: tax.toFixed(2), isCurrency: true },
        { label: "TOTAL ESTIMATED COST", value: total.toFixed(2), isCurrency: true },
      ];
    },
  },
};
