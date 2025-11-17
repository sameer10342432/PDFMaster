'use client';

import { useState } from 'react';
import { UTILITY_TRANSFER_COORDINATOR_CONTENT } from '@/content/tools/utility-transfer-coordinator';
import { Calculator } from '@/components/calculators';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Utility {
  id: string;
  name: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  recommendedDays: number;
}

const utilities: Utility[] = [
  { id: 'electricity', name: 'Electricity', description: 'Power service connection', priority: 'High', recommendedDays: 21 },
  { id: 'gas', name: 'Natural Gas', description: 'Gas service for heating/cooking', priority: 'High', recommendedDays: 21 },
  { id: 'water', name: 'Water & Sewer', description: 'Municipal water service', priority: 'High', recommendedDays: 21 },
  { id: 'internet', name: 'Internet Service', description: 'High-speed internet connection', priority: 'High', recommendedDays: 28 },
  { id: 'cable', name: 'Cable/Streaming', description: 'TV and streaming services', priority: 'Medium', recommendedDays: 21 },
  { id: 'trash', name: 'Trash & Recycling', description: 'Waste management service', priority: 'Medium', recommendedDays: 14 },
  { id: 'security', name: 'Security System', description: 'Home security monitoring', priority: 'Medium', recommendedDays: 21 },
  { id: 'phone', name: 'Phone Service', description: 'Landline or VoIP service', priority: 'Low', recommendedDays: 14 },
  { id: 'hoa', name: 'HOA/Condo Fees', description: 'Association fee setup', priority: 'Medium', recommendedDays: 30 },
];

export const UtilityTransferCoordinator = () => {
  const [checkedUtilities, setCheckedUtilities] = useState<Set<string>>(new Set());
  const [contactedUtilities, setContactedUtilities] = useState<Set<string>>(new Set());

  const toggleUtility = (id: string) => {
    const newSet = new Set(checkedUtilities);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCheckedUtilities(newSet);
  };

  const toggleContacted = (id: string) => {
    const newSet = new Set(contactedUtilities);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setContactedUtilities(newSet);
  };

  const completedCount = checkedUtilities.size;
  const contactedCount = contactedUtilities.size;
  const totalUtilities = utilities.length;
  const completionPercentage = Math.round((completedCount / totalUtilities) * 100);

  return (
    <div className="space-y-6">
      <Calculator
        title={UTILITY_TRANSFER_COORDINATOR_CONTENT.title}
        description={UTILITY_TRANSFER_COORDINATOR_CONTENT.description}
        inputs={UTILITY_TRANSFER_COORDINATOR_CONTENT.calculator.fields}
        results={UTILITY_TRANSFER_COORDINATOR_CONTENT.calculator.results}
        calculation={UTILITY_TRANSFER_COORDINATOR_CONTENT.calculator.calculate}
      />

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Utility Transfer Checklist</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Progress: {completedCount} of {totalUtilities} completed ({completionPercentage}%)</span>
            <span>•</span>
            <span>Contacted: {contactedCount} of {totalUtilities}</span>
          </div>
          <div className="mt-3 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {utilities.map((utility) => (
            <div 
              key={utility.id}
              className="border rounded-lg p-4 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-2 pt-1">
                  <Checkbox
                    id={`complete-${utility.id}`}
                    checked={checkedUtilities.has(utility.id)}
                    onCheckedChange={() => toggleUtility(utility.id)}
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Label 
                        htmlFor={`complete-${utility.id}`}
                        className="text-base font-medium cursor-pointer"
                      >
                        {utility.name}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {utility.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        utility.priority === 'High' ? 'bg-red-100 text-red-700' :
                        utility.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {utility.priority}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {utility.recommendedDays}d before
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-2">
                    <Checkbox
                      id={`contacted-${utility.id}`}
                      checked={contactedUtilities.has(utility.id)}
                      onCheckedChange={() => toggleContacted(utility.id)}
                    />
                    <Label 
                      htmlFor={`contacted-${utility.id}`}
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      Provider contacted
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">Quick Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Start with high-priority utilities 3-4 weeks before your move</li>
            <li>• Keep all confirmation numbers and service dates in one place</li>
            <li>• Schedule installations for different days to avoid conflicts</li>
            <li>• Budget for activation fees and deposits (typically $50-$200 per utility)</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
