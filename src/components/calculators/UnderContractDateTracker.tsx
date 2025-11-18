'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const UnderContractDateTracker: React.FC = () => {
  const [contractDate, setContractDate] = useState('');
  const [closingDate, setClosingDate] = useState('');

  const calculateDates = () => {
    if (!contractDate) return null;
    const contract = new Date(contractDate);
    return {
      earnestMoney: new Date(contract.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      inspection: new Date(contract.getTime() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      appraisal: new Date(contract.getTime() + 21 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      financing: new Date(contract.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      finalWalkthrough: closingDate ? new Date(new Date(closingDate).getTime() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString() : 'TBD',
    };
  };

  const dates = calculateDates();

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contract Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contractDate">Contract Acceptance Date</Label>
            <Input
              id="contractDate"
              type="date"
              value={contractDate}
              onChange={(e) => setContractDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="closingDate">Expected Closing Date</Label>
            <Input
              id="closingDate"
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
            />
          </div>
        </div>
      </Card>

      {dates && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Critical Deadlines</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Earnest Money Deposit</span>
              <span className="text-blue-600 font-semibold">{dates.earnestMoney}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Inspection Contingency</span>
              <span className="text-blue-600 font-semibold">{dates.inspection}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Appraisal Contingency</span>
              <span className="text-blue-600 font-semibold">{dates.appraisal}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Financing Contingency</span>
              <span className="text-blue-600 font-semibold">{dates.financing}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Final Walkthrough</span>
              <span className="text-blue-600 font-semibold">{dates.finalWalkthrough}</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
