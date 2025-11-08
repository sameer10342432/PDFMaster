'use client';

import React, { useState } from 'react';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClockIcon, TrashIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface CalculationHistoryProps {
  calculatorSlug: string;
  onLoadHistory: (inputs: Record<string, any>) => void;
}

export const CalculationHistory: React.FC<CalculationHistoryProps> = ({
  calculatorSlug,
  onLoadHistory,
}) => {
  const { getHistoryByCalculator, deleteHistoryEntry, clearHistory } = useCalculatorEnhancements();
  const [showAll, setShowAll] = useState(false);
  
  const history = getHistoryByCalculator(calculatorSlug);
  const displayHistory = showAll ? history : history.slice(0, 5);
  
  if (history.length === 0) {
    return null;
  }
  
  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          Calculation History ({history.length})
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (confirm('Are you sure you want to clear all history for this calculator?')) {
              clearHistory();
            }
          }}
          className="text-red-600 hover:text-red-700"
        >
          Clear All
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {displayHistory.map((entry) => (
          <div
            key={entry.id}
            className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs text-gray-500">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
                <div className="mt-1 text-xs text-gray-600">
                  {Object.entries(entry.inputs).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium">{key}:</span>
                      <span>{String(value)}</span>
                    </div>
                  ))}
                  {Object.keys(entry.inputs).length > 3 && (
                    <p className="text-gray-400 text-xs mt-1">
                      +{Object.keys(entry.inputs).length - 3} more fields
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-1 ml-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onLoadHistory(entry.inputs)}
                  title="Reload these values"
                >
                  <ArrowPathIcon className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteHistoryEntry(entry.id)}
                  className="text-red-600 hover:text-red-700"
                  title="Delete this entry"
                >
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {history.length > 5 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="w-full"
          >
            {showAll ? 'Show Less' : `Show All (${history.length})`}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
