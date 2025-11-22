import { CalculatorContent } from '@/types';

export const NON_TOXIC_BUILDING_MATERIAL_FINDER_CONTENT: CalculatorContent = {
  title: 'Non-Toxic Building Material Finder',
  description: 'Find and compare costs of healthy, non-toxic building materials vs. conventional options',
  icon: 'Icon',
  category: 'Sustainability',
  slug: 'non-toxic-building-material-finder',
  article: {
    title: "Guide to Non-Toxic Building Materials",
    content: `
    <h2>Why Choose Non-Toxic Building Materials?</h2>
    <p>Conventional building materials can emit volatile organic compounds (VOCs), formaldehyde, and other harmful chemicals for years. Non-toxic alternatives create healthier indoor environments, reduce health risks, and often perform better long-term.</p>
    
    <h3>Health Impact of Toxic Building Materials</h3>
    <ul>
      <li><strong>VOCs from paints, adhesives:</strong> Headaches, respiratory issues, nausea</li>
      <li><strong>Formaldehyde in pressed wood:</strong> Cancer risk, respiratory problems</li>
      <li><strong>Flame retardants in foam:</strong> Hormone disruption, developmental issues</li>
      <li><strong>PVC (vinyl):</strong> Off-gassing of phthalates and dioxins</li>
      <li><strong>Carpet chemicals:</strong> Asthma, allergies, neurological effects</li>
    </ul>
    
    <h3>Non-Toxic Material Categories & Alternatives</h3>
    
    <h4>Flooring</h4>
    <p><strong>Avoid:</strong> Vinyl, laminate with formaldehyde, treated carpet</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Solid hardwood (FSC-certified): $8-15/sq ft</li>
      <li>Cork flooring: $6-12/sq ft</li>
      <li>Natural linoleum (marmoleum): $4-8/sq ft</li>
      <li>Bamboo (formaldehyde-free): $5-10/sq ft</li>
      <li>Ceramic or porcelain tile: $5-15/sq ft</li>
      <li>Wool carpet (natural backing): $8-20/sq ft</li>
    </ul>
    
    <h4>Paint & Finishes</h4>
    <p><strong>Avoid:</strong> High-VOC paints, polyurethane with solvents</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Zero-VOC paint: $40-70/gallon (same as regular)</li>
      <li>Natural clay paints: $60-100/gallon</li>
      <li>Milk paint: $30-50/gallon</li>
      <li>Water-based polyurethane: $35-60/gallon</li>
      <li>Natural oil finishes: $40-80/quart</li>
    </ul>
    
    <h4>Cabinetry & Furniture</h4>
    <p><strong>Avoid:</strong> Particleboard, MDF with formaldehyde</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Solid wood cabinets: 20-40% premium</li>
      <li>Formaldehyde-free plywood: 10-15% premium</li>
      <li>FSC-certified wood: Minimal to no premium</li>
      <li>CARB2 or NAF certified panels: 5-10% premium</li>
    </ul>
    
    <h4>Insulation</h4>
    <p><strong>Avoid:</strong> Fiberglass (formaldehyde binders), spray foam (isocyanates)</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Cellulose (recycled paper): $1-2/sq ft, R-3.5/inch</li>
      <li>Mineral wool: $1.50-2.50/sq ft, R-4/inch</li>
      <li>Cotton (denim): $1.80-2.50/sq ft, R-3.4/inch</li>
      <li>Hemp insulation: $2-3/sq ft, R-3.5/inch</li>
      <li>Cork board: $3-6/sq ft, R-4/inch</li>
    </ul>
    
    <h4>Countertops</h4>
    <p><strong>Avoid:</strong> Laminate with formaldehyde, some quartz (silica dust concern)</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Natural stone (granite, marble): $50-200/sq ft</li>
      <li>Soapstone: $70-120/sq ft</li>
      <li>Butcher block (sealed naturally): $40-100/sq ft</li>
      <li>Recycled glass: $50-100/sq ft</li>
      <li>Porcelain slabs: $60-150/sq ft</li>
    </ul>
    
    <h4>Adhesives & Sealants</h4>
    <p><strong>Avoid:</strong> Solvent-based adhesives, silicone with VOCs</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Low-VOC construction adhesive: 0-10% premium</li>
      <li>Water-based contact cement: 10-20% premium</li>
      <li>Natural latex caulk: $5-8/tube</li>
    </ul>
    
    <h4>Wall Materials</h4>
    <p><strong>Avoid:</strong> Vinyl wallpaper, standard drywall (in humid areas)</p>
    <p><strong>Choose:</strong></p>
    <ul>
      <li>Standard drywall (low VOC joint compound): $0.50-0.80/sq ft</li>
      <li>Paperless drywall (mold-resistant): $0.70-1.20/sq ft</li>
      <li>Natural plaster: $3-8/sq ft</li>
      <li>Wood paneling (formaldehyde-free): $4-12/sq ft</li>
    </ul>
    
    <h3>Cost Comparison: Conventional vs. Non-Toxic</h3>
    
    <h4>Typical 2,000 sq ft Home Renovation</h4>
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px;">Category</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Conventional</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Non-Toxic</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Premium</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Flooring (1,500 sf)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$6,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$9,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+$3,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Paint</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$2,200</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+$200</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Cabinets</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+$2,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Insulation</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+$500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Countertops</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$4,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">+$1,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Total</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$22,000</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>$28,700</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>+$6,700 (30%)</strong></td>
      </tr>
    </table>
    
    <h3>Value Beyond Cost</h3>
    <ul>
      <li><strong>Health Benefits:</strong> Reduced asthma, allergies, cancer risk (priceless)</li>
      <li><strong>Resale Premium:</strong> 3-8% higher for certified healthy homes</li>
      <li><strong>Durability:</strong> Many non-toxic materials last longer</li>
      <li><strong>Air Quality:</strong> Better for children, elderly, those with sensitivities</li>
      <li><strong>Lower Healthcare Costs:</strong> $500-2,000/year potential savings</li>
    </ul>
    
    <h3>Certifications to Look For</h3>
    <ul>
      <li><strong>GREENGUARD Gold:</strong> Ultra-low chemical emissions</li>
      <li><strong>FloorScore:</strong> Low-emitting flooring</li>
      <li><strong>Green Seal:</strong> Environmental and health standards</li>
      <li><strong>FSC Certified:</strong> Sustainable forestry</li>
      <li><strong>CARB2 Compliant:</strong> Ultra-low formaldehyde</li>
      <li><strong>Zero VOC:</strong> No volatile organic compounds</li>
      <li><strong>Cradle to Cradle:</strong> Circular economy certified</li>
    </ul>
    
    <h3>Budget-Friendly Strategies</h3>
    <ul>
      <li>Prioritize high-impact areas (bedrooms, nurseries)</li>
      <li>Phase improvements over time</li>
      <li>DIY where possible (painting, sealing)</li>
      <li>Choose affordable non-toxic options (zero-VOC paint costs the same)</li>
      <li>Reclaimed materials (often safer and cheaper)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "flooringSqFt",
        label: "Flooring Area (sq ft)",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "flooringConventional",
        label: "Conventional Flooring Cost ($/sq ft)",
        type: "number",
        placeholder: "4",
        defaultValue: "4",
      },
      {
        name: "flooringNonToxic",
        label: "Non-Toxic Flooring Cost ($/sq ft)",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "paintingCostConventional",
        label: "Conventional Paint Cost ($)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "paintingCostNonToxic",
        label: "Non-Toxic Paint Cost ($)",
        type: "number",
        placeholder: "2200",
        defaultValue: "2200",
      },
      {
        name: "cabinetsCostConventional",
        label: "Conventional Cabinets ($)",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "cabinetsCostNonToxic",
        label: "Non-Toxic Cabinets ($)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "otherMaterialsConventional",
        label: "Other Conventional Materials ($)",
        type: "number",
        placeholder: "6000",
        defaultValue: "6000",
      },
      {
        name: "otherMaterialsNonToxic",
        label: "Other Non-Toxic Materials ($)",
        type: "number",
        placeholder: "7500",
        defaultValue: "7500",
      },
    ],
    results: [
      { label: "Total Conventional Cost", isCurrency: true },
      { label: "Total Non-Toxic Cost", isCurrency: true },
      { label: "Premium for Non-Toxic", isCurrency: true },
      { label: "Premium Percentage", isCurrency: false },
      { label: "Estimated Health Savings (annual)", isCurrency: true },
      { label: "Payback Period (years)", isCurrency: false },
    ],
    calculate: (data: any) => {
      const floorSqFt = Number(data.flooringSqFt) || 0;
      const floorConv = Number(data.flooringConventional) || 0;
      const floorNonTox = Number(data.flooringNonToxic) || 0;
      const paintConv = Number(data.paintingCostConventional) || 0;
      const paintNonTox = Number(data.paintingCostNonToxic) || 0;
      const cabConv = Number(data.cabinetsCostConventional) || 0;
      const cabNonTox = Number(data.cabinetsCostNonToxic) || 0;
      const otherConv = Number(data.otherMaterialsConventional) || 0;
      const otherNonTox = Number(data.otherMaterialsNonToxic) || 0;
      
      const floorConvTotal = floorSqFt * floorConv;
      const floorNonToxTotal = floorSqFt * floorNonTox;
      
      const totalConventional = floorConvTotal + paintConv + cabConv + otherConv;
      const totalNonToxic = floorNonToxTotal + paintNonTox + cabNonTox + otherNonTox;
      
      const premium = totalNonToxic - totalConventional;
      const premiumPercent = totalConventional > 0 ? (premium / totalConventional * 100) : 0;
      
      // Estimated health savings (reduced allergies, asthma, sick days)
      const annualHealthSavings = 1000;
      
      const payback = annualHealthSavings > 0 ? premium / annualHealthSavings : 0;

      return [
        { label: "Total Conventional Cost", value: totalConventional.toFixed(2), isCurrency: true },
        { label: "Total Non-Toxic Cost", value: totalNonToxic.toFixed(2), isCurrency: true },
        { label: "Premium for Non-Toxic", value: premium.toFixed(2), isCurrency: true },
        { label: "Premium Percentage", value: `${premiumPercent.toFixed(1)}%`, isCurrency: false },
        { label: "Estimated Health Savings (annual)", value: annualHealthSavings.toFixed(2), isCurrency: true },
        { label: "Payback Period (years)", value: payback.toFixed(1), isCurrency: false },
      ];
    },
  },
};
