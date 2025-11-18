'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

export const ClosingGiftIdeaGenerator: React.FC = () => {
  const [budget, setBudget] = useState('');
  const [homeType, setHomeType] = useState('first-time');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const giftIdeas: Record<string, Record<string, string[]>> = {
    'first-time': {
      low: ['Tool Kit Essentials ($75-$100)', 'Welcome Door Mat ($30-$50)', 'Home Emergency Kit ($60-$80)', 'Herb Garden Starter Kit ($35-$50)'],
      medium: ['Smart Home Starter Kit ($100-$150)', 'Home Security Camera ($120-$180)', 'Professional House Cleaning ($150-$250)'],
      high: ['Smart Thermostat Installed ($300-$400)', 'Robot Vacuum ($300-$500)', 'Fire Pit ($250-$400)'],
    },
    'family': {
      low: ['Board Game Collection ($50-$100)', 'Backyard Toys Bundle ($75-$150)', 'Safety Gate Package ($100-$150)'],
      medium: ['Outdoor Play Equipment ($200-$400)', 'Meal Delivery Service ($200-$300)', 'Family Movie Night Package ($150-$250)'],
      high: ['Swing Set or Playset ($500-$1,500)', 'Trampoline with Safety Net ($400-$800)'],
    },
    'luxury': {
      low: ['Premium Wine Collection ($150-$300)', 'Luxury Candle Set ($100-$200)', 'Designer Home Decor Item ($200-$400)'],
      medium: ['Wine Cellar Starter Collection ($500-$1,000)', 'Private Chef Dinner ($600-$1,200)', 'Luxury Spa Day Package ($400-$800)'],
      high: ['Outdoor Kitchen Installation ($2,000-$5,000)', 'Custom Artwork ($1,000-$3,000)', 'Home Theater System ($2,000-$5,000)'],
    },
  };

  const generateIdeas = () => {
    const budgetLevel = parseInt(budget) < 150 ? 'low' : parseInt(budget) < 500 ? 'medium' : 'high';
    const ideas = giftIdeas[homeType]?.[budgetLevel] || [];
    setSuggestions(ideas);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Gift Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="budget">Budget ($)</Label>
            <Input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter budget amount"
            />
          </div>
          <div>
            <Label htmlFor="homeType">Home Type</Label>
            <select
              id="homeType"
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="first-time">First-Time Homebuyer</option>
              <option value="family">Family Home</option>
              <option value="luxury">Luxury Home</option>
            </select>
          </div>
        </div>
        <Button onClick={generateIdeas} className="mt-4 w-full">
          Generate Gift Ideas
        </Button>
      </Card>

      {suggestions.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recommended Closing Gifts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((gift, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <p className="font-medium text-gray-800">{gift}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
