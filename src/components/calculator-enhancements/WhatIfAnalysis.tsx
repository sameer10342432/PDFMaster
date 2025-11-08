'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { CalculatorInput } from '@/types/calculators';

interface WhatIfAnalysisProps {
  inputs: CalculatorInput[];
  values: Record<string, any>;
  onValueChange: (name: string, value: any) => void;
}

export const WhatIfAnalysis: React.FC<WhatIfAnalysisProps> = ({
  inputs,
  values,
  onValueChange,
}) => {
  const [selectedField, setSelectedField] = useState<string>(inputs[0]?.name || '');
  const [rangePercent, setRangePercent] = useState<number>(20);
  
  // Filter to only numeric inputs
  const numericInputs = inputs.filter(
    input => input.type === 'number' && values[input.name]
  );
  
  if (numericInputs.length === 0) return null;
  
  const currentInput = numericInputs.find(i => i.name === selectedField) || numericInputs[0];
  const currentValue = parseFloat(values[currentInput.name] || 0);
  const minValue = currentValue * (1 - rangePercent / 100);
  const maxValue = currentValue * (1 + rangePercent / 100);
  
  const scenarios = [
    { label: `-${rangePercent}%`, value: minValue },
    { label: `-${rangePercent / 2}%`, value: currentValue * (1 - rangePercent / 200) },
    { label: 'Current', value: currentValue },
    { label: `+${rangePercent / 2}%`, value: currentValue * (1 + rangePercent / 200) },
    { label: `+${rangePercent}%`, value: maxValue },
  ];
  
  return (
    <Card className="border-indigo-200">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
          What-If Sensitivity Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Select Variable to Analyze</Label>
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {numericInputs.map((input) => (
                  <SelectItem key={input.name} value={input.name}>
                    {input.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Analysis Range: ±{rangePercent}%</Label>
            <Slider
              value={[rangePercent]}
              onValueChange={(vals) => setRangePercent(vals[0])}
              min={5}
              max={50}
              step={5}
              className="py-4"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Test Different Scenarios</Label>
          <div className="grid grid-cols-5 gap-2">
            {scenarios.map((scenario, index) => {
              const isActive = Math.abs(scenario.value - currentValue) < 0.01;
              return (
                <button
                  key={index}
                  onClick={() => onValueChange(currentInput.name, scenario.value.toFixed(2))}
                  className={`p-3 border rounded-lg text-center transition-all ${
                    isActive
                      ? 'border-indigo-500 bg-indigo-100 font-semibold'
                      : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <div className="text-xs text-gray-600 mb-1">{scenario.label}</div>
                  <div className="text-sm font-medium">
                    {scenario.value.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
          <p className="text-xs text-gray-700">
            <strong>Tip:</strong> Click any scenario to instantly update {currentInput.label} and see
            how it affects your results. This helps you understand which variables have the biggest impact on your outcome.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
