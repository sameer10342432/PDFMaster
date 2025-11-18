'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

export const HomeEnergyAuditDiyChecklist: React.FC = () => {
  const [audit, setAudit] = useState({
    insulation: false,
    airLeaks: false,
    windows: false,
    hvac: false,
    waterHeater: false,
    lighting: false,
    appliances: false,
    phantom: false,
  });

  const toggleItem = (key: keyof typeof audit) => {
    setAudit(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completed = Object.values(audit).filter(Boolean).length;
  const total = Object.keys(audit).length;
  const progress = Math.round((completed / total) * 100);

  const checklistItems = [
    { key: 'insulation' as const, label: 'Inspect Insulation', description: 'Check attic, walls, and basement insulation levels' },
    { key: 'airLeaks' as const, label: 'Find Air Leaks', description: 'Check windows, doors, outlets for drafts' },
    { key: 'windows' as const, label: 'Evaluate Windows & Doors', description: 'Assess condition and weatherstripping' },
    { key: 'hvac' as const, label: 'HVAC System Check', description: 'Review age, efficiency, and maintenance' },
    { key: 'waterHeater' as const, label: 'Water Heater Assessment', description: 'Check temperature, age, and insulation' },
    { key: 'lighting' as const, label: 'Lighting Audit', description: 'Count bulbs and identify LED conversion opportunities' },
    { key: 'appliances' as const, label: 'Appliance Efficiency', description: 'Review age and energy ratings of major appliances' },
    { key: 'phantom' as const, label: 'Phantom Load Check', description: 'Identify devices with standby power consumption' },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Energy Audit Progress</h3>
          <span className="text-2xl font-bold text-blue-600">{completed}/{total}</span>
        </div>
        <Progress value={progress} className="h-3 mb-2" />
        <p className="text-sm text-gray-600 text-center">{progress}% Complete</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">DIY Energy Audit Checklist</h3>
        <div className="space-y-4">
          {checklistItems.map(item => (
            <div key={item.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <Checkbox
                checked={audit[item.key]}
                onCheckedChange={() => toggleItem(item.key)}
                className="mt-1"
              />
              <div className="flex-1">
                <Label className={`font-medium cursor-pointer ${audit[item.key] ? 'line-through text-gray-500' : ''}`}>
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
            <h3 className="text-2xl font-bold text-green-700 mb-2">✅ Audit Complete!</h3>
            <p className="text-green-600">You've completed your home energy audit. Review findings and prioritize improvements.</p>
          </div>
        </Card>
      )}
    </div>
  );
};
