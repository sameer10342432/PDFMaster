import { CalculatorContent } from '@/types';

export const AIR_RIGHTS_VALUE_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Air Rights Value Estimator',
  description: 'Estimate the value of air rights, calculate transferable development rights (TDR), and analyze vertical development opportunities.',
  slug: 'air-rights-value-estimator',
  icon: '🏙️',
  category: 'Property Valuation',
  metaTitle: 'Air Rights Value Calculator - Estimate TDR & Development Rights Value',
  metaDescription: 'Free air rights calculator. Estimate air rights value, transferable development rights (TDR), unused FAR, and vertical development opportunity value.',
  article: {
    title: 'Understanding Air Rights and Transferable Development Rights',
    content: `
    <h2>Understanding Air Rights and Transferable Development Rights</h2>
    <p>Air rights are the property rights to use the vertical space above a piece of land or building. They represent the owner's ability to build upward and can be sold, leased, or transferred separately from the land itself. Air rights are increasingly valuable in dense urban markets where land is scarce and zoning allows high-rise development.</p>
    
    <h3>What Are Air Rights?</h3>
    <p>Air rights are the development rights to the airspace above a property. Key concepts include:</p>
    <ul>
      <li><strong>Unused FAR (Floor Area Ratio):</strong> The difference between maximum allowable density and current building density</li>
      <li><strong>Transferable Development Rights (TDR):</strong> Air rights that can be sold or transferred to adjacent or nearby properties</li>
      <li><strong>Zoning Envelope:</strong> Maximum height and bulk allowed by zoning regulations</li>
      <li><strong>As-of-Right:</strong> Development rights available without special permits or variances</li>
      <li><strong>Bonus Density:</strong> Additional development rights granted for public amenities or affordable housing</li>
    </ul>

    <h3>How Air Rights Are Valued</h3>
    <p>Several factors determine air rights value:</p>
    <ul>
      <li><strong>Location:</strong> Prime locations (Manhattan, downtown cores) command highest prices</li>
      <li><strong>Zoning:</strong> Commercial and residential zoning impacts value differently</li>
      <li><strong>Market Conditions:</strong> Strong real estate markets increase air rights demand</li>
      <li><strong>Development Costs:</strong> High construction costs reduce net value of additional floors</li>
      <li><strong>Adjacent Properties:</strong> Nearby development opportunities affect marketability</li>
      <li><strong>Regulatory Environment:</strong> Ease of transfer process and restrictions</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information to estimate air rights value:</p>
    <ul>
      <li><strong>Lot Size:</strong> Total square footage of the land parcel</li>
      <li><strong>Maximum FAR:</strong> Maximum floor area ratio allowed by zoning</li>
      <li><strong>Current FAR:</strong> Current building's floor area ratio</li>
      <li><strong>Market Value Per SF:</strong> Average sale price per square foot of buildable area</li>
      <li><strong>Development Cost Per SF:</strong> Cost to construct each additional square foot</li>
      <li><strong>Discount Rate:</strong> Percentage discount applied to air rights value (typically 20-40%)</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Maximum Buildable SF:</strong> Total square feet allowed under zoning</li>
      <li><strong>Current Building SF:</strong> Existing building square footage</li>
      <li><strong>Unused Air Rights:</strong> Available development potential in square feet</li>
      <li><strong>Gross Air Rights Value:</strong> Market value before development costs</li>
      <li><strong>Net Air Rights Value:</strong> Value after subtracting construction costs</li>
      <li><strong>Discounted Market Value:</strong> Adjusted value accounting for transfer restrictions and market friction</li>
    </ul>

    <h3>Transferable Development Rights (TDR) Programs</h3>
    <p>TDR programs allow property owners to sell unused development rights:</p>
    <ul>
      <li><strong>Sending Sites:</strong> Properties with excess development rights (often historic buildings)</li>
      <li><strong>Receiving Sites:</strong> Properties that can use transferred rights to build larger</li>
      <li><strong>Transfer Mechanisms:</strong> Direct private transfers or TDR bank/exchange programs</li>
      <li><strong>Preservation Goals:</strong> Protects historic buildings and open spaces by providing economic value</li>
      <li><strong>Geographic Restrictions:</strong> Transfers typically limited to same zoning district or adjacent lots</li>
    </ul>

    <h3>Cities with Active TDR Markets</h3>
    <ul>
      <li><strong>New York City:</strong> Most active air rights market, particularly Manhattan ($200-$400+ per SF)</li>
      <li><strong>Chicago:</strong> Strong downtown TDR program for historic preservation</li>
      <li><strong>Seattle:</strong> TDR program protects farmland and environmentally sensitive areas</li>
      <li><strong>San Francisco:</strong> Active market in downtown and South of Market areas</li>
      <li><strong>Washington, D.C.:</strong> Limited but valuable air rights in downtown core</li>
      <li><strong>Miami:</strong> Growing market in Brickell and downtown areas</li>
    </ul>

    <h3>Air Rights Transaction Structures</h3>
    <ul>
      <li><strong>Outright Purchase:</strong> Buyer acquires air rights permanently for lump sum</li>
      <li><strong>Ground Lease with Air Rights:</strong> Lessee builds upward on leased land and air space</li>
      <li><strong>Development Agreement:</strong> Joint venture where air rights owner participates in development</li>
      <li><strong>Zoning Lot Merger:</strong> Combining adjacent lots to pool development rights</li>
      <li><strong>Restrictive Covenant:</strong> Permanent restriction limiting building height to preserve air rights value</li>
    </ul>

    <h3>Advantages of Air Rights Sales</h3>
    <ul>
      <li>Monetizes unused development potential without construction</li>
      <li>Provides capital for property improvements or debt payoff</li>
      <li>Preserves historic buildings by making preservation economically viable</li>
      <li>Generates income without losing underlying land ownership</li>
      <li>Can be structured as installment sale for tax benefits</li>
    </ul>

    <h3>Challenges and Risks</h3>
    <ul>
      <li>Limited market liquidity compared to real property</li>
      <li>Complex zoning and transfer regulations</li>
      <li>Finding suitable receiving sites within transfer zones</li>
      <li>Uncertainty in valuation due to market fluctuations</li>
      <li>Potential for zoning changes to reduce or eliminate value</li>
      <li>Title and legal complexity in documenting transfers</li>
    </ul>

    <h3>Valuation Methods</h3>
    <p>Professional appraisers use several approaches:</p>
    <ul>
      <li><strong>Residual Land Value Method:</strong> Net development value minus all costs = air rights value</li>
      <li><strong>Sales Comparison:</strong> Recent air rights sales in comparable locations</li>
      <li><strong>Income Approach:</strong> Capitalized rental income from additional floors</li>
      <li><strong>Percentage of Developed Value:</strong> Air rights valued at 15-30% of finished construction value</li>
      <li><strong>Cost Approach:</strong> Replacement cost of equivalent development capacity</li>
    </ul>

    <h3>Legal and Regulatory Considerations</h3>
    <ul>
      <li>Zoning must explicitly allow air rights transfers</li>
      <li>Transfer typically requires zoning lot merger or TDR agreement</li>
      <li>Building Department approval needed for combined development</li>
      <li>Title insurance coverage for air rights can be limited</li>
      <li>Environmental review may be required for large transfers</li>
      <li>Landmarks Preservation approvals if historic buildings involved</li>
    </ul>

    <h3>Tax Implications</h3>
    <ul>
      <li>Air rights sales typically taxed as capital gains</li>
      <li>Installment sale treatment can defer tax liability</li>
      <li>1031 exchange generally not available for air rights alone</li>
      <li>Basis allocation between land, building, and air rights can be complex</li>
      <li>Depreciation recapture may apply if air rights previously depreciated</li>
    </ul>

    <h3>Air Rights Above Infrastructure</h3>
    <p>Unique opportunities exist above transportation facilities:</p>
    <ul>
      <li><strong>Railroad Yards:</strong> Major development projects (Hudson Yards, Atlantic Yards)</li>
      <li><strong>Highways:</strong> Platform development above roadways (Big Dig in Boston)</li>
      <li><strong>Tunnels:</strong> Building rights above subway and vehicle tunnels</li>
      <li><strong>Parking Structures:</strong> Adding residential/office towers above garages</li>
      <li><strong>Government Land:</strong> Air rights over public schools, parks, and facilities</li>
    </ul>

    <h3>Historic Examples of Air Rights Deals</h3>
    <ul>
      <li><strong>Grand Central Terminal (NYC):</strong> Penn Central sold air rights to build MetLife Building and other towers</li>
      <li><strong>St. Patrick's Cathedral (NYC):</strong> Sold air rights to adjacent Rockefeller Center</li>
      <li><strong>Union Station (Washington DC):</strong> Air rights developed into office buildings</li>
      <li><strong>South Street Seaport (NYC):</strong> Historic buildings sold rights to enable tower construction</li>
    </ul>

    <h3>Best Practices for Air Rights Analysis</h3>
    <ul>
      <li>Engage experienced real estate attorney familiar with local zoning</li>
      <li>Obtain professional appraisal for significant transactions</li>
      <li>Verify zoning allows air rights transfer before negotiations</li>
      <li>Identify potential receiving sites early in process</li>
      <li>Model multiple development scenarios to test value assumptions</li>
      <li>Factor in time value of money for phased developments</li>
      <li>Consider opportunity cost of alternative uses of excess FAR</li>
      <li>Review market trends and recent comparable transactions</li>
    </ul>

    <h3>Market Conditions Affecting Value</h3>
    <ul>
      <li><strong>Strong Markets:</strong> High demand for development increases air rights prices</li>
      <li><strong>Construction Costs:</strong> Rising costs reduce net value of additional floors</li>
      <li><strong>Interest Rates:</strong> Higher rates decrease present value of future income</li>
      <li><strong>Zoning Changes:</strong> Upzoning reduces air rights scarcity and value</li>
      <li><strong>Economic Cycles:</strong> Recessions significantly impact air rights demand</li>
    </ul>

    <h3>Due Diligence Checklist</h3>
    <ul>
      <li>Confirm zoning allows contemplated use and transfer</li>
      <li>Review title for encumbrances affecting air rights</li>
      <li>Verify no deed restrictions limiting vertical development</li>
      <li>Check for pending zoning changes that could affect value</li>
      <li>Assess receiving site's ability to use transferred rights</li>
      <li>Evaluate structural capacity to support additional floors</li>
      <li>Review existing building systems (elevators, utilities)</li>
      <li>Confirm no easements or rights that would block development</li>
    </ul>

    <h3>Future Trends</h3>
    <ul>
      <li>Increasing sophistication of TDR programs in growing cities</li>
      <li>Climate change driving air rights value in low-risk flood zones</li>
      <li>Remote work reducing demand for office air rights</li>
      <li>Affordable housing bonuses creating new value opportunities</li>
      <li>Technology enabling more efficient TDR marketplaces</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'lotSize',
        label: 'Lot Size (SF)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'maxFAR',
        label: 'Maximum FAR (Floor Area Ratio)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'currentFAR',
        label: 'Current FAR',
        type: 'number',
        defaultValue: 4,
      },
      {
        name: 'marketValuePerSF',
        label: 'Market Value Per SF',
        type: 'number',
        defaultValue: 800,
      },
      {
        name: 'developmentCostPerSF',
        label: 'Development Cost Per SF',
        type: 'number',
        defaultValue: 400,
      },
      {
        name: 'discountRate',
        label: 'Discount Rate (%)',
        type: 'number',
        defaultValue: 30,
      },
    ],
    results: [
      { label: 'Maximum Buildable SF', isCurrency: false },
      { label: 'Current Building SF', isCurrency: false },
      { label: 'Unused Air Rights (SF)', isCurrency: false },
      { label: 'Gross Air Rights Value', isCurrency: true },
      { label: 'Less: Development Costs', isCurrency: true },
      { label: 'Net Air Rights Value', isCurrency: true },
      { label: 'Discounted Market Value', isCurrency: true },
      { label: 'Value Per SF of Unused FAR', isCurrency: true },
    ],
    calculate: (values) => {
      const { lotSize, maxFAR, currentFAR, marketValuePerSF, developmentCostPerSF, discountRate } = values;
      
      const maxBuildable = lotSize * maxFAR;
      const currentBuilding = lotSize * currentFAR;
      const unusedAirRights = maxBuildable - currentBuilding;
      
      const grossValue = unusedAirRights * marketValuePerSF;
      const developmentCosts = unusedAirRights * developmentCostPerSF;
      const netValue = grossValue - developmentCosts;
      const discountedValue = netValue * (1 - discountRate / 100);
      const valuePerSF = unusedAirRights > 0 ? discountedValue / unusedAirRights : 0;

      return [
        { label: 'Maximum Buildable SF', value: maxBuildable.toFixed(0) + ' SF', isCurrency: false },
        { label: 'Current Building SF', value: currentBuilding.toFixed(0) + ' SF', isCurrency: false },
        { label: 'Unused Air Rights (SF)', value: unusedAirRights.toFixed(0) + ' SF', isCurrency: false },
        { label: 'Gross Air Rights Value', value: grossValue.toFixed(2), isCurrency: true },
        { label: 'Less: Development Costs', value: developmentCosts.toFixed(2), isCurrency: true },
        { label: 'Net Air Rights Value', value: netValue.toFixed(2), isCurrency: true },
        { label: 'Discounted Market Value', value: discountedValue.toFixed(2), isCurrency: true },
        { label: 'Value Per SF of Unused FAR', value: valuePerSF.toFixed(2), isCurrency: true },
      ];
    },
  },
};
