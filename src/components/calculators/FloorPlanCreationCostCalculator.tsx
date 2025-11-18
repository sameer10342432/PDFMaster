'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function FloorPlanCreationCostCalculator() {
  const [squareFootage, setSquareFootage] = useState('2500');
  const [floors, setFloors] = useState('2');
  const [floorPlanType, setFloorPlanType] = useState('175');
  const [listingsPerYear, setListingsPerYear] = useState('15');
  const [avgListingPrice, setAvgListingPrice] = useState('425000');
  const [viewIncrease, setViewIncrease] = useState('52');

  const calculate = () => {
    const costPerProperty = parseFloat(floorPlanType) * parseFloat(floors);
    const annualInvestment = costPerProperty * parseFloat(listingsPerYear);
    const costPerSqFt = costPerProperty / parseFloat(squareFootage);
    const viewIncreaseDisplay = parseFloat(viewIncrease);
    const timeSavedPerListing = 3;
    const totalTimeSaved = timeSavedPerListing * parseFloat(listingsPerYear);
    const marketingContentValue = 300;
    const totalMarketingValue = marketingContentValue * parseFloat(listingsPerYear);
    
    return {
      costPerProperty,
      annualInvestment,
      costPerSqFt,
      viewIncreaseDisplay,
      totalTimeSaved,
      totalMarketingValue,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Floor Plan Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Property Square Footage
            </label>
            <input
              type="number"
              value={squareFootage}
              onChange={(e) => setSquareFootage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Floors/Levels
            </label>
            <input
              type="number"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Floor Plan Type Cost ($)
            </label>
            <input
              type="number"
              value={floorPlanType}
              onChange={(e) => setFloorPlanType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            <div className="text-xs text-gray-500 mt-1">
              Basic 2D: $50-150, Enhanced 2D: $100-250, 3D: $150-400
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Listings with Floor Plans Per Year
            </label>
            <input
              type="number"
              value={listingsPerYear}
              onChange={(e) => setListingsPerYear(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Listing Price ($)
            </label>
            <input
              type="number"
              value={avgListingPrice}
              onChange={(e) => setAvgListingPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Expected View Increase (%)
            </label>
            <input
              type="number"
              value={viewIncrease}
              onChange={(e) => setViewIncrease(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Cost Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Cost Per Property</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.costPerProperty.toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Annual Investment</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.annualInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">Cost Per Sq Ft</div>
            <div className="text-2xl font-bold text-purple-600">
              ${results.costPerSqFt.toFixed(3)}
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">Expected View Increase</div>
            <div className="text-2xl font-bold text-indigo-600">
              {results.viewIncreaseDisplay.toFixed(0)}%
            </div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="text-sm text-gray-600">Time Saved vs DIY</div>
            <div className="text-2xl font-bold text-emerald-600">
              {results.totalTimeSaved} hrs
            </div>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-sm text-gray-600">Marketing Content Value</div>
            <div className="text-2xl font-bold text-yellow-600">
              ${results.totalMarketingValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Floor Plan Type Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Type</th>
                <th className="text-right py-2">Cost Range</th>
                <th className="text-left py-2 pl-4">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">2D Basic B&W</td>
                <td className="text-right">$50-$150</td>
                <td className="pl-4">Standard residential, budget listings</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2D Enhanced Color</td>
                <td className="text-right">$100-$250</td>
                <td className="pl-4">Mid-range properties, competitive markets</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">3D Isometric</td>
                <td className="text-right">$150-$400</td>
                <td className="pl-4">Luxury properties, complex layouts</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Interactive 3D</td>
                <td className="text-right">$300-$800</td>
                <td className="pl-4">Luxury estates, new developments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
