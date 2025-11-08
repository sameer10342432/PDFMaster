'use client';

import React from 'react';
import { generateInsights, Insight } from '@/lib/smartInsights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  XCircleIcon 
} from '@heroicons/react/24/outline';

interface SmartInsightsProps {
  calculatorType: string;
  inputs: Record<string, any>;
  results: any[];
}

export const SmartInsights: React.FC<SmartInsightsProps> = ({
  calculatorType,
  inputs,
  results,
}) => {
  const insights = generateInsights(calculatorType, inputs, results);
  
  if (insights.length === 0) return null;
  
  const getIcon = (type: Insight['type']) => {
    const iconClass = 'w-6 h-6';
    switch (type) {
      case 'success':
        return <CheckCircleIcon className={`${iconClass} text-green-600`} />;
      case 'warning':
        return <ExclamationTriangleIcon className={`${iconClass} text-yellow-600`} />;
      case 'danger':
        return <XCircleIcon className={`${iconClass} text-red-600`} />;
      case 'info':
      default:
        return <InformationCircleIcon className={`${iconClass} text-blue-600`} />;
    }
  };
  
  const getBorderColor = (type: Insight['type']) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'danger':
        return 'border-red-200 bg-red-50';
      case 'info':
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };
  
  return (
    <Card className="border-purple-200">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <InformationCircleIcon className="w-5 h-5 text-purple-600" />
          Smart Insights & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 ${getBorderColor(insight.type)}`}
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                {getIcon(insight.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-700 mb-2">{insight.message}</p>
                {insight.recommendation && (
                  <div className="mt-2 pt-2 border-t border-gray-300">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      💡 Recommendation:
                    </p>
                    <p className="text-sm text-gray-700">{insight.recommendation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
