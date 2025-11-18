'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

export const ClearToCloseChecklist: React.FC = () => {
  const [items, setItems] = useState({
    loanApproval: false,
    closingDisclosure: false,
    titleClear: false,
    insuranceBound: false,
    finalWalkthrough: false,
    fundsReady: false,
  });

  const toggleItem = (key: keyof typeof items) => {
    setItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completed = Object.values(items).filter(Boolean).length;
  const total = Object.keys(items).length;
  const progress = Math.round((completed / total) * 100);

  const checklistItems = [
    { key: 'loanApproval' as const, label: 'Final Loan Approval Received', description: 'Lender has issued clear to close' },
    { key: 'closingDisclosure' as const, label: 'Closing Disclosure Reviewed', description: 'Received 3 business days before closing' },
    { key: 'titleClear' as const, label: 'Title is Clear', description: 'No liens or title issues' },
    { key: 'insuranceBound' as const, label: 'Homeowners Insurance Bound', description: 'Policy active on closing day' },
    { key: 'finalWalkthrough' as const, label: 'Final Walkthrough Complete', description: 'Property condition verified' },
    { key: 'fundsReady' as const, label: 'Closing Funds Ready', description: 'Wire transfer or cashiers check prepared' },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Clear to Close Progress</h3>
          <span className="text-2xl font-bold text-blue-600">{completed}/{total}</span>
        </div>
        <Progress value={progress} className="h-3 mb-2" />
        <p className="text-sm text-gray-600 text-center">{progress}% Complete</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Requirements Checklist</h3>
        <div className="space-y-4">
          {checklistItems.map(item => (
            <div key={item.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <Checkbox
                checked={items[item.key]}
                onCheckedChange={() => toggleItem(item.key)}
                className="mt-1"
              />
              <div className="flex-1">
                <Label className={`font-medium cursor-pointer ${items[item.key] ? 'line-through text-gray-500' : ''}`}>
                  {item.label}
                </Label>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {progress === 100 && (
        <Card className="p-6 bg-green-50 border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">✅ Clear to Close!</h3>
            <p className="text-green-600">All requirements met. Ready for closing day!</p>
          </div>
        </Card>
      )}
    </div>
  );
};
