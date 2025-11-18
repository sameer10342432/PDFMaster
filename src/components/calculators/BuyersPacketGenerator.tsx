'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function BuyersPacketGenerator() {
  const [buyerType, setBuyerType] = useState('First-Time Buyer');
  const [avgHomePrice, setAvgHomePrice] = useState('400000');
  const [avgDownPayment, setAvgDownPayment] = useState('10');
  const [avgClosingDays, setAvgClosingDays] = useState('40');
  const [marketType, setMarketType] = useState('Balanced Market');

  const calculate = () => {
    const homePrice = parseFloat(avgHomePrice);
    const downPaymentPercent = parseFloat(avgDownPayment) / 100;
    const downPaymentAmount = homePrice * downPaymentPercent;
    const closingCostsPercent = 0.03;
    const closingCosts = homePrice * closingCostsPercent;
    const totalCashNeeded = downPaymentAmount + closingCosts;
    const timeline = parseFloat(avgClosingDays);
    
    return {
      downPaymentAmount,
      closingCosts,
      totalCashNeeded,
      timeline,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Buyer Packet Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Primary Buyer Type
            </label>
            <input
              type="text"
              value={buyerType}
              onChange={(e) => setBuyerType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Home Price in Your Market ($)
            </label>
            <input
              type="number"
              value={avgHomePrice}
              onChange={(e) => setAvgHomePrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Typical Down Payment Percentage (%)
            </label>
            <input
              type="number"
              value={avgDownPayment}
              onChange={(e) => setAvgDownPayment(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Days from Offer to Close
            </label>
            <input
              type="number"
              value={avgClosingDays}
              onChange={(e) => setAvgClosingDays(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Market Type
            </label>
            <input
              type="text"
              value={marketType}
              onChange={(e) => setMarketType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Buyer Financial Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Estimated Down Payment Needed</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.downPaymentAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Estimated Closing Costs</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.closingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg col-span-1 md:col-span-2">
            <div className="text-sm text-gray-600">Total Cash Needed at Closing</div>
            <div className="text-2xl font-bold text-purple-600">
              ${results.totalCashNeeded.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Expected timeline: {results.timeline} days from offer to close
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Packet Components Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Welcome Letter & Introduction</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Home Buying Process Overview</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Financing Information Guide</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Home Search Strategy</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Making an Offer Guide</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Under Contract Process</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Closing Day Information</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Market Information</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>Local Area Information</span>
          </div>
          <div className="p-2 bg-green-50 rounded flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            <span>FAQs & Important Contacts</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
