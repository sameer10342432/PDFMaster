'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export const ContingencyRemovalDeadlineTracker: React.FC = () => {
  const [contractDate, setContractDate] = useState('');
  const [contingencies, setContingencies] = useState({
    inspection: false,
    appraisal: false,
    financing: false,
    title: false,
    hoa: false,
  });

  const calculateDeadlines = () => {
    if (!contractDate) return null;
    const contract = new Date(contractDate);
    return {
      inspection: { deadline: new Date(contract.getTime() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString(), removed: contingencies.inspection },
      appraisal: { deadline: new Date(contract.getTime() + 21 * 24 * 60 * 60 * 1000).toLocaleDateString(), removed: contingencies.appraisal },
      financing: { deadline: new Date(contract.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), removed: contingencies.financing },
      title: { deadline: new Date(contract.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(), removed: contingencies.title },
      hoa: { deadline: new Date(contract.getTime() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString(), removed: contingencies.hoa },
    };
  };

  const deadlines = calculateDeadlines();
  const allRemoved = Object.values(contingencies).every(v => v);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contract Date</h3>
        <div>
          <Label htmlFor="contractDate">Contract Acceptance Date</Label>
          <Input
            id="contractDate"
            type="date"
            value={contractDate}
            onChange={(e) => setContractDate(e.target.value)}
          />
        </div>
      </Card>

      {deadlines && (
        <>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contingency Tracking</h3>
            <div className="space-y-4">
              {Object.entries(deadlines).map(([key, data]) => (
                <div key={key} className={`flex items-center justify-between p-4 rounded-lg ${data.removed ? 'bg-green-50' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={data.removed}
                      onCheckedChange={() => setContingencies(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                    />
                    <div>
                      <Label className="font-medium capitalize">{key} Contingency</Label>
                      <p className="text-sm text-gray-600">Deadline: {data.deadline}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${data.removed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {data.removed ? 'Removed' : 'Active'}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {allRemoved && (
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-700 mb-2">🎉 Clear to Close!</h3>
                <p className="text-green-600">All contingencies have been removed. You're ready to proceed to closing!</p>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
};
