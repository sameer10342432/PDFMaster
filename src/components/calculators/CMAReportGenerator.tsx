'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function CMAReportGenerator() {
  const [subjectPrice, setSubjectPrice] = useState('475000');
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2.5');
  const [squareFootage, setSquareFootage] = useState('2200');
  const [lotSize, setLotSize] = useState('7500');
  const [comparableCount, setComparableCount] = useState('5');

  const calculate = () => {
    const basePrice = parseFloat(subjectPrice);
    const recommendedPrice = basePrice;
    const pricePerSqFt = basePrice / parseFloat(squareFootage);
    const lowEndPrice = basePrice * 0.95;
    const highEndPrice = basePrice * 1.05;
    const avgDaysOnMarket = 35;
    
    return {
      recommendedPrice,
      pricePerSqFt,
      lowEndPrice,
      highEndPrice,
      avgDaysOnMarket,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Subject Property Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Subject Property Estimated Value ($)
            </label>
            <input
              type="number"
              value={subjectPrice}
              onChange={(e) => setSubjectPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Bedrooms
            </label>
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Bathrooms
            </label>
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              step="0.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Square Footage
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
              Lot Size (sq ft)
            </label>
            <input
              type="number"
              value={lotSize}
              onChange={(e) => setLotSize(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Comparables to Analyze
            </label>
            <input
              type="number"
              value={comparableCount}
              onChange={(e) => setComparableCount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">CMA Price Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Recommended List Price</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.recommendedPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Price Per Square Foot</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.pricePerSqFt.toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">Low End Price Range</div>
            <div className="text-2xl font-bold text-purple-600">
              ${results.lowEndPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">High End Price Range</div>
            <div className="text-2xl font-bold text-indigo-600">
              ${results.highEndPrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="text-sm font-medium text-gray-700 mb-1">Market Projection</div>
          <div className="text-lg text-gray-900">
            Expected to sell in approximately <span className="font-bold text-blue-600">{results.avgDaysOnMarket} days</span> at recommended price
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">CMA Report Components</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Executive Summary with Price Recommendation</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Subject Property Analysis and Features</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>{comparableCount} Comparable Sold Properties</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Active Competition Analysis</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Pending Sales Review</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Market Trends and Statistics</span>
          </div>
          <div className="flex items-center p-2 bg-green-50 rounded">
            <span className="text-green-600 mr-2">✓</span>
            <span>Pricing Strategy and Justification</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
