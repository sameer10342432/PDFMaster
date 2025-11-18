'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function ClientOnboardingChecklistBuyer() {
  const [daysInProcess, setDaysInProcess] = useState('5');
  const [preApprovalComplete, setPreApprovalComplete] = useState('1');
  const [showingsAttended, setShowingsAttended] = useState('8');
  const [targetBudget, setTargetBudget] = useState('425000');
  const [daysToDesiredClose, setDaysToDesiredClose] = useState('75');

  const calculate = () => {
    let completionPercent = 10;
    if (parseFloat(preApprovalComplete) === 1) completionPercent += 20;
    if (parseFloat(showingsAttended) > 0) completionPercent += 20;
    if (parseFloat(showingsAttended) > 5) completionPercent += 15;
    
    const daysRemaining = parseFloat(daysToDesiredClose) - parseFloat(daysInProcess);
    const closingCosts = parseFloat(targetBudget) * 0.03;
    
    let status = "Early Stage - Building Search";
    if (parseFloat(showingsAttended) > 10) {
      status = "Active Search - Ready to Offer";
    } else if (parseFloat(showingsAttended) > 5) {
      status = "Active Search - Narrowing Options";
    }
    
    return {
      completionPercent,
      daysRemaining,
      closingCosts,
      status,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Buyer Onboarding Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Days Since Initial Contact</label>
            <input
              type="number"
              value={daysInProcess}
              onChange={(e) => setDaysInProcess(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pre-Approval Obtained? (1=Yes, 0=No)</label>
            <input
              type="number"
              value={preApprovalComplete}
              onChange={(e) => setPreApprovalComplete(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              min="0"
              max="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Showings Attended</label>
            <input
              type="number"
              value={showingsAttended}
              onChange={(e) => setShowingsAttended(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Target Home Budget ($)</label>
            <input
              type="number"
              value={targetBudget}
              onChange={(e) => setTargetBudget(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Days Until Desired Closing</label>
            <input
              type="number"
              value={daysToDesiredClose}
              onChange={(e) => setDaysToDesiredClose(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Progress Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Onboarding Completion</div>
            <div className="text-2xl font-bold text-blue-600">{results.completionPercent}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: `${results.completionPercent}%`}}></div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Expected Timeline Remaining</div>
            <div className="text-2xl font-bold text-green-600">{results.daysRemaining} days</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">Estimated Closing Costs</div>
            <div className="text-2xl font-bold text-purple-600">
              ${results.closingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">Process Status</div>
            <div className="text-xl font-bold text-indigo-600">{results.status}</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Onboarding Checklist Phases</h3>
        <div className="space-y-2 text-sm">
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Phase 1: Initial Contact</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Phase 2: Initial Consultation</div>
          <div className="p-2 bg-blue-50 rounded flex items-center"><span className="text-blue-600 mr-2">→</span>Phase 3: Formal Agreement</div>
          <div className="p-2 bg-gray-50 rounded flex items-center"><span className="text-gray-400 mr-2">○</span>Phase 4: Financing Setup</div>
          <div className="p-2 bg-gray-50 rounded flex items-center"><span className="text-gray-400 mr-2">○</span>Phase 5: Home Search</div>
          <div className="p-2 bg-gray-50 rounded flex items-center"><span className="text-gray-400 mr-2">○</span>Phase 6: Making Offer</div>
          <div className="p-2 bg-gray-50 rounded flex items-center"><span className="text-gray-400 mr-2">○</span>Phase 7: Under Contract</div>
          <div className="p-2 bg-gray-50 rounded flex items-center"><span className="text-gray-400 mr-2">○</span>Phase 8: Closing</div>
        </div>
      </Card>
    </div>
  );
}
