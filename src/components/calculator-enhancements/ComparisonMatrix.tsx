'use client';

import React from 'react';
import { useCalculatorEnhancements, SavedScenario } from '@/store/calculatorEnhancementsStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartBarIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ComparisonMatrixProps {
  calculatorSlug: string;
  onClose?: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  calculatorSlug,
  onClose,
}) => {
  const { getScenariosByCalculator } = useCalculatorEnhancements();
  const scenarios = getScenariosByCalculator(calculatorSlug).slice(0, 5);
  
  if (scenarios.length < 2) {
    return (
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5" />
            Scenario Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Save at least 2 scenarios to compare them side-by-side.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  // Get all unique result labels
  const allResultLabels = Array.from(
    new Set(scenarios.flatMap(s => s.results.map(r => r.label)))
  );
  
  // Helper to get result value for a specific scenario and label
  const getResultValue = (scenario: SavedScenario, label: string): string => {
    const result = scenario.results.find(r => r.label === label);
    return result?.value || '-';
  };
  
  // Helper to parse numeric value from formatted string
  const parseNumericValue = (value: string): number | null => {
    const cleaned = String(value).replace(/[^0-9.-]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  };
  
  // Find best (highest) and worst (lowest) for each metric
  const getBestAndWorst = (label: string) => {
    const values = scenarios.map(s => {
      const val = getResultValue(s, label);
      return parseNumericValue(val);
    });
    
    const validValues = values.filter(v => v !== null) as number[];
    if (validValues.length === 0) return { best: null, worst: null };
    
    const max = Math.max(...validValues);
    const min = Math.min(...validValues);
    
    return { best: max, worst: min };
  };
  
  const getCellStyle = (scenario: SavedScenario, label: string): string => {
    const value = getResultValue(scenario, label);
    const numValue = parseNumericValue(value);
    if (numValue === null) return '';
    
    const { best, worst } = getBestAndWorst(label);
    if (best === null || worst === null) return '';
    
    if (numValue === best) {
      return 'bg-green-100 border-green-300 font-semibold';
    } else if (numValue === worst) {
      return 'bg-red-100 border-red-300';
    }
    return '';
  };
  
  return (
    <Card className="border-orange-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <ChartBarIcon className="w-5 h-5" />
          Scenario Comparison Matrix
        </CardTitle>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <XMarkIcon className="w-5 h-5" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left font-semibold">
                  Metric
                </th>
                {scenarios.map((scenario) => (
                  <th
                    key={scenario.id}
                    className="border border-gray-300 p-2 text-left font-semibold min-w-[150px]"
                  >
                    <div className="flex flex-col">
                      <span>{scenario.name}</span>
                      <span className="text-xs text-gray-500 font-normal">
                        {new Date(scenario.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allResultLabels.map((label) => (
                <tr key={label} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 font-medium">
                    {label}
                  </td>
                  {scenarios.map((scenario) => (
                    <td
                      key={scenario.id}
                      className={`border border-gray-300 p-2 ${getCellStyle(
                        scenario,
                        label
                      )}`}
                    >
                      {getResultValue(scenario, label)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded" />
            <span>Best Value</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border border-red-300 rounded" />
            <span>Worst Value</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
