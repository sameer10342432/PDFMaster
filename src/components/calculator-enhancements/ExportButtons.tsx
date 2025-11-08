'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { exportToCSV, exportToJSON, exportToPDF, ExportData } from '@/lib/exportUtils';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface ExportButtonsProps {
  calculatorTitle: string;
  inputs: Record<string, any>;
  results: any[];
  notes?: string;
}

export const ExportButtons: React.FC<ExportButtonsProps> = ({
  calculatorTitle,
  inputs,
  results,
  notes,
}) => {
  const exportData: ExportData = {
    calculatorTitle,
    inputs,
    results,
    timestamp: Date.now(),
    notes,
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => exportToCSV(exportData)}
        className="flex items-center gap-2"
      >
        <ArrowDownTrayIcon className="w-4 h-4" />
        Export CSV
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => exportToJSON(exportData)}
        className="flex items-center gap-2"
      >
        <ArrowDownTrayIcon className="w-4 h-4" />
        Export JSON
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => exportToPDF(exportData, {
          brandingText: 'Property Tools - Professional Real Estate Calculators'
        })}
        className="flex items-center gap-2"
      >
        <ArrowDownTrayIcon className="w-4 h-4" />
        Export PDF
      </Button>
    </div>
  );
};
