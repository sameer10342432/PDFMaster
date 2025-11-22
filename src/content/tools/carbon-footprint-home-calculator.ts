import { CalculatorContent } from '@/types';

export const CARBON_FOOTPRINT_HOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Home Carbon Footprint Calculator - Calculate Your Property\'s CO2 Emissions',
  description: 'Calculate your home\'s carbon footprint from energy use, heating, cooling, and identify opportunities to reduce greenhouse gas emissions',
  icon: 'Icon',
  slug: 'carbon-footprint-home-calculator',
  category: 'Green & Sustainable',
  article: {
    title: 'How to Calculate and Reduce Your Home\'s Carbon Footprint - Complete Guide',
    content: `
    <h2>Understanding Your Home's Carbon Footprint</h2>
    <p>The average US home produces about 7.5 tons of CO2 per year from energy use alone - equivalent to driving 18,000 miles. Understanding your home's carbon footprint is the first step toward reducing environmental impact, lowering energy costs, and increasing property value through sustainable improvements.</p>

    <h3>Major Sources of Home Carbon Emissions</h3>
    <ul>
      <li><strong>Heating & Cooling (41%):</strong> Largest source - 3.1 tons CO2/year for average home.</li>
      <li><strong>Water Heating (18%):</strong> 1.4 tons CO2/year from heating water.</li>
      <li><strong>Lighting & Appliances (23%):</strong> 1.7 tons CO2/year from electricity use.</li>
      <li><strong>Other Electric (18%):</strong> 1.3 tons CO2/year from electronics, cooking, etc.</li>
    </ul>

    <h3>Electricity Grid Carbon Intensity by State</h3>
    <ul>
      <li><strong>Cleanest States:</strong> Vermont (0.01 lbs CO2/kWh), Washington (0.22), Idaho (0.12) - hydro/nuclear/renewable heavy.</li>
      <li><strong>National Average:</strong> 0.92 lbs CO2/kWh (down from 1.2 in 2005 as grid gets cleaner).</li>
      <li><strong>Highest Emissions:</strong> Wyoming (1.94 lbs CO2/kWh), West Virginia (1.83), Kentucky (1.78) - coal heavy.</li>
      <li><strong>Trend:</strong> Grid carbon intensity declining 3% annually as renewables increase.</li>
    </ul>

    <h3>Natural Gas vs Electric Heating</h3>
    <ul>
      <li><strong>Natural Gas Heating:</strong> 117 lbs CO2 per million BTU - cheaper but fossil fuel.</li>
      <li><strong>Electric Resistance Heating:</strong> 270 lbs CO2 per million BTU (at national grid average) - highest emissions.</li>
      <li><strong>Heat Pump Heating:</strong> 90 lbs CO2 per million BTU (300% efficient) - lowest carbon, electric.</li>
      <li><strong>Oil Heating:</strong> 160 lbs CO2 per million BTU - higher emissions than gas.</li>
      <li><strong>Propane:</strong> 139 lbs CO2 per million BTU - middle ground.</li>
    </ul>

    <h3>Carbon Reduction Strategies</h3>
    <ul>
      <li><strong>Solar Panels:</strong> Reduce home emissions 50-100% (3.8-7.5 tons CO2/year).</li>
      <li><strong>Heat Pump Upgrade:</strong> Cut heating emissions 60% vs gas furnace (1.8 tons/year).</li>
      <li><strong>Insulation & Air Sealing:</strong> Reduce emissions 15-30% (1.1-2.3 tons/year).</li>
      <li><strong>Energy Efficient Windows:</strong> Save 0.5-1.0 tons CO2/year.</li>
      <li><strong>LED Lighting:</strong> Reduce lighting emissions 75% (0.3 tons/year).</li>
      <li><strong>ENERGY STAR Appliances:</strong> Save 0.4-0.8 tons CO2/year.</li>
      <li><strong>Smart Thermostat:</strong> Reduce HVAC emissions 10-15% (0.3-0.5 tons/year).</li>
    </ul>

    <h3>Renewable Energy Options</h3>
    <ul>
      <li><strong>Rooftop Solar:</strong> Offset 100% of electricity emissions - typical 6kW system prevents 5 tons CO2/year.</li>
      <li><strong>Community Solar:</strong> Subscribe to solar farm if rooftop not suitable - same carbon benefits.</li>
      <li><strong>Green Power Plans:</strong> Buy renewable energy from utility - $10-30/month premium, offset 4 tons/year.</li>
      <li><strong>Renewable Energy Certificates (RECs):</strong> Support clean energy - $20-50/year offsets typical home.</li>
    </ul>

    <h3>Carbon Offset Equivalencies</h3>
    <ul>
      <li><strong>1 Ton CO2 Saved =</strong> Not driving 2,400 miles, planting 17 trees, recycling 3,600 lbs waste.</li>
      <li><strong>Average Home Solar System =</strong> Equivalent to planting 125 trees per year.</li>
      <li><strong>Heat Pump Upgrade =</strong> Equivalent to taking 0.4 cars off the road.</li>
      <li><strong>Full Home Weatherization =</strong> Prevents 2 tons CO2/year = 34 trees planted annually.</li>
    </ul>

    <h3>Green Home Certifications</h3>
    <ul>
      <li><strong>LEED for Homes:</strong> Leadership in Energy & Environmental Design certification.</li>
      <li><strong>ENERGY STAR Certified Homes:</strong> 10% more efficient than code minimum.</li>
      <li><strong>Passive House (Passivhaus):</strong> Ultra-low energy standard - 75% less heating/cooling.</li>
      <li><strong>Net Zero Energy:</strong> Home produces as much energy as it consumes annually.</li>
      <li><strong>Net Zero Carbon:</strong> Home produces no net carbon emissions.</li>
    </ul>

    <h3>Financial Benefits of Carbon Reduction</h3>
    <ul>
      <li><strong>Energy Bill Savings:</strong> $500-$2,000/year from efficiency upgrades.</li>
      <li><strong>Property Value Increase:</strong> Green homes sell for 3-5% premium.</li>
      <li><strong>Tax Credits & Rebates:</strong> 30% federal credit + state/utility incentives.</li>
      <li><strong>Carbon Pricing:</strong> Some states offer carbon credits for residential reductions.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your home's square footage, monthly energy bills, heating/cooling fuel types, and state location. The calculator estimates your annual carbon footprint, identifies reduction opportunities, and calculates potential carbon savings from various green upgrades.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'squareFeet',
        label: 'Home Size (Square Feet)',
        type: 'number',
        defaultValue: 2000,
      },
      {
        name: 'electricityBill',
        label: 'Monthly Electricity Bill ($)',
        type: 'number',
        defaultValue: 120,
      },
      {
        name: 'gasBill',
        label: 'Monthly Natural Gas Bill ($)',
        type: 'number',
        defaultValue: 60,
      },
      {
        name: 'gridCarbon',
        label: 'Grid Carbon Intensity (lbs CO2/kWh)',
        type: 'number',
        defaultValue: 0.92,
      },
      {
        name: 'hasSolar',
        label: 'Have Solar Panels?',
        type: 'select',
        options: [{ value: 'No', label: 'No' }, { value: 'Yes', label: 'Yes' }],
        defaultValue: 'No',
      },
      {
        name: 'solarSize',
        label: 'Solar System Size (kW) if Yes',
        type: 'number',
        defaultValue: 0,
      },
    ],
    results: [],
    calculate: (values) => {
      const { squareFeet, electricityBill, gasBill, gridCarbon, hasSolar, solarSize } = values;
      
      const avgElectricRate = 0.14;
      const annualElectricityKWh = (electricityBill / avgElectricRate) * 12;
      const electricityCO2Tons = (annualElectricityKWh * gridCarbon) / 2000;
      
      const avgGasRate = 1.2;
      const annualGasTherms = (gasBill / avgGasRate) * 12;
      const gasCO2Tons = (annualGasTherms * 11.7) / 2000;
      
      let solarOffsetTons = 0;
      if (hasSolar === 'Yes' && solarSize > 0) {
        const solarKWhPerYear = solarSize * 1400;
        solarOffsetTons = (solarKWhPerYear * gridCarbon) / 2000;
      }
      
      const totalCO2Tons = electricityCO2Tons + gasCO2Tons - solarOffsetTons;
      const perSqFtEmissions = (totalCO2Tons / squareFeet) * 1000;
      const nationalAvg = 7.5;
      const vsAverage = ((totalCO2Tons - nationalAvg) / nationalAvg) * 100;
      
      const treesEquivalent = totalCO2Tons * 17;
      const milesEquivalent = totalCO2Tons * 2400;
      
      const solarPotential = electricityCO2Tons * 0.9;
      const heatPumpPotential = gasCO2Tons * 0.6;
      const efficiencyPotential = totalCO2Tons * 0.25;

      return [
        { label: 'Annual Electricity Emissions', value: `${electricityCO2Tons.toFixed(2)} tons CO2` },
        { label: 'Annual Gas Emissions', value: `${gasCO2Tons.toFixed(2)} tons CO2` },
        { label: 'Solar Offset (if applicable)', value: `${solarOffsetTons.toFixed(2)} tons CO2` },
        { label: 'Total Annual CO2 Emissions', value: `${totalCO2Tons.toFixed(2)} tons CO2` },
        { label: 'Emissions per Square Foot', value: `${perSqFtEmissions.toFixed(1)} lbs CO2/sq ft` },
        { label: 'vs National Average (7.5 tons)', value: `${vsAverage > 0 ? '+' : ''}${vsAverage.toFixed(1)}%` },
        { label: 'Equivalent Trees to Plant', value: `${treesEquivalent.toFixed(0)} trees/year` },
        { label: 'Equivalent Miles Driven', value: `${milesEquivalent.toFixed(0)} miles/year` },
        { label: 'Solar Reduction Potential', value: `${solarPotential.toFixed(2)} tons/year` },
        { label: 'Heat Pump Reduction Potential', value: `${heatPumpPotential.toFixed(2)} tons/year` },
        { label: 'Efficiency Improvement Potential', value: `${efficiencyPotential.toFixed(2)} tons/year` },
      ];
    },
  },
};
