'use client';

import { useState } from 'react';
import { NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT } from '@/content/tools/neighborhood-safety-checklist';
import { Calculator } from '@/components/calculators';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface SafetyFactor {
  id: string;
  name: string;
  description: string;
  weight: number;
}

const safetyFactors: SafetyFactor[] = [
  { id: 'crime', name: 'Crime Statistics', description: 'Overall crime rate and trends', weight: 0.3 },
  { id: 'lighting', name: 'Street Lighting', description: 'Quality and coverage of street lights', weight: 0.15 },
  { id: 'maintenance', name: 'Property Maintenance', description: 'Condition of homes and landscaping', weight: 0.15 },
  { id: 'community', name: 'Community Engagement', description: 'Active neighborhood watch and involvement', weight: 0.15 },
  { id: 'traffic', name: 'Traffic Safety', description: 'Speed limits, crosswalks, traffic calming', weight: 0.10 },
  { id: 'emergency', name: 'Emergency Services', description: 'Proximity to police, fire, hospital', weight: 0.15 },
];

export const NeighborhoodSafetyChecklist = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({
    crime: 5,
    lighting: 5,
    maintenance: 5,
    community: 5,
    traffic: 5,
    emergency: 5,
  });

  const updateRating = (id: string, value: number) => {
    setRatings(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    safetyFactors.forEach(factor => {
      totalScore += (ratings[factor.id] || 5) * factor.weight;
    });
    return totalScore.toFixed(1);
  };

  const score = parseFloat(calculateScore());
  const getSafetyRating = () => {
    if (score >= 8) return { text: 'Excellent', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' };
    if (score >= 6.5) return { text: 'Good', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' };
    if (score >= 5) return { text: 'Fair', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200' };
    return { text: 'Poor', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const rating = getSafetyRating();

  return (
    <div className="space-y-6">
      <Calculator
        title={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT.title}
        description={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT.description}
        inputs={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT.calculator.fields}
        results={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT.calculator.results}
        calculation={NEIGHBORHOOD_SAFETY_CHECKLIST_CONTENT.calculator.calculate}
      />

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Detailed Safety Assessment</h3>
        
        <div className={`mb-6 p-4 rounded-lg border ${rating.bg} ${rating.border}`}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`text-2xl font-bold ${rating.color}`}>{score} / 10</h4>
              <p className={`text-sm ${rating.color}`}>Overall Safety Score</p>
            </div>
            <div className={`text-lg font-semibold ${rating.color}`}>
              {rating.text}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {safetyFactors.map((factor) => (
            <div key={factor.id} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Label className="text-base font-medium">{factor.name}</Label>
                  <p className="text-sm text-muted-foreground mt-1">{factor.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-lg font-semibold">{ratings[factor.id]}</span>
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
              </div>
              <Slider
                value={[ratings[factor.id]]}
                onValueChange={(value) => updateRating(factor.id, value[0])}
                min={1}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Unsafe</span>
                <span>Very Safe</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">Assessment Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Visit the neighborhood at different times (morning, evening, weekend)</li>
            <li>• Check online crime statistics on NeighborhoodScout or local police websites</li>
            <li>• Talk to potential neighbors about their experiences</li>
            <li>• Look for signs of community engagement (neighborhood watch signs, well-maintained common areas)</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
