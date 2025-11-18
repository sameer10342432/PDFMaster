'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function PropertyShowingFeedbackForm() {
  const [totalShowings, setTotalShowings] = useState('8');
  const [feedbackReceived, setFeedbackReceived] = useState('6');
  const [avgRating, setAvgRating] = useState('3.5');
  const [priceOverpriced, setPriceOverpriced] = useState('4');
  const [highInterest, setHighInterest] = useState('2');

  const calculate = () => {
    const responseRate = (parseFloat(feedbackReceived) / parseFloat(totalShowings)) * 100;
    const rating = parseFloat(avgRating);
    const priceConcernPercent = (parseFloat(priceOverpriced) / parseFloat(feedbackReceived)) * 100;
    const interestPercent = (parseFloat(highInterest) / parseFloat(feedbackReceived)) * 100;
    
    let recommendation = "Continue current strategy";
    if (priceConcernPercent > 60) {
      recommendation = "Consider price reduction";
    } else if (interestPercent > 40) {
      recommendation = "Strong interest - expect offer soon";
    } else if (rating < 3) {
      recommendation = "Address condition/presentation issues";
    }
    
    return {
      responseRate,
      rating,
      priceConcernPercent,
      interestPercent,
      recommendation,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Showing Feedback Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Total Showings This Week</label>
            <input
              type="number"
              value={totalShowings}
              onChange={(e) => setTotalShowings(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Feedback Responses Received</label>
            <input
              type="number"
              value={feedbackReceived}
              onChange={(e) => setFeedbackReceived(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Average Property Rating (1-5)</label>
            <input
              type="number"
              value={avgRating}
              onChange={(e) => setAvgRating(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number Saying "Overpriced"</label>
            <input
              type="number"
              value={priceOverpriced}
              onChange={(e) => setPriceOverpriced(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number with High Interest</label>
            <input
              type="number"
              value={highInterest}
              onChange={(e) => setHighInterest(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Feedback Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Feedback Response Rate</div>
            <div className="text-2xl font-bold text-blue-600">{results.responseRate.toFixed(1)}%</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Average Property Rating</div>
            <div className="text-2xl font-bold text-green-600">{results.rating.toFixed(1)}/5.0</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-sm text-gray-600">Price Concern Percentage</div>
            <div className="text-2xl font-bold text-orange-600">{results.priceConcernPercent.toFixed(1)}%</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">High Interest Percentage</div>
            <div className="text-2xl font-bold text-purple-600">{results.interestPercent.toFixed(1)}%</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
          <div className="text-sm font-medium text-gray-700 mb-1">Recommendation</div>
          <div className="text-lg font-bold text-gray-900">{results.recommendation}</div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Feedback Form Questions</h3>
        <div className="space-y-2 text-sm">
          <div className="p-2 bg-gray-50 rounded">1. Overall property rating (1-5 scale)</div>
          <div className="p-2 bg-gray-50 rounded">2. Price perception (Below/Fair/Over market)</div>
          <div className="p-2 bg-gray-50 rounded">3. Property condition assessment</div>
          <div className="p-2 bg-gray-50 rounded">4. Layout and floor plan feedback</div>
          <div className="p-2 bg-gray-50 rounded">5. Location evaluation</div>
          <div className="p-2 bg-gray-50 rounded">6. Interest level and timing</div>
          <div className="p-2 bg-gray-50 rounded">7. Additional comments and concerns</div>
        </div>
      </Card>
    </div>
  );
}
