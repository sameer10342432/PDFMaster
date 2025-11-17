'use client';

import { useState } from 'react';
import { FIRST_NIGHT_CHECKLIST_CONTENT } from '@/content/tools/first-night-new-home-checklist';
import { Calculator } from '@/components/calculators';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface ChecklistItem {
  id: string;
  name: string;
  category: string;
  priority: 'Essential' | 'Important' | 'Nice to Have';
}

const checklistItems: ChecklistItem[] = [
  { id: '1', name: 'Toilet paper', category: 'Bathroom', priority: 'Essential' },
  { id: '2', name: 'Hand soap & paper towels', category: 'Bathroom', priority: 'Essential' },
  { id: '3', name: 'Toothbrush & toothpaste', category: 'Bathroom', priority: 'Essential' },
  { id: '4', name: 'Shower essentials & towels', category: 'Bathroom', priority: 'Essential' },
  { id: '5', name: 'Medications', category: 'Bathroom', priority: 'Essential' },
  { id: '6', name: 'Bed sheets & pillowcases', category: 'Bedroom', priority: 'Essential' },
  { id: '7', name: 'Pillows & blankets', category: 'Bedroom', priority: 'Essential' },
  { id: '8', name: 'Pajamas', category: 'Bedroom', priority: 'Essential' },
  { id: '9', name: 'Phone chargers', category: 'Electronics', priority: 'Essential' },
  { id: '10', name: 'Flashlights & batteries', category: 'Electronics', priority: 'Essential' },
  { id: '11', name: 'Paper plates & cups', category: 'Kitchen', priority: 'Important' },
  { id: '12', name: 'Plastic utensils', category: 'Kitchen', priority: 'Important' },
  { id: '13', name: 'Coffee maker & coffee', category: 'Kitchen', priority: 'Important' },
  { id: '14', name: 'Snacks & breakfast items', category: 'Kitchen', priority: 'Important' },
  { id: '15', name: 'Trash bags', category: 'Kitchen', priority: 'Important' },
  { id: '16', name: 'Basic tools (screwdriver, hammer)', category: 'Tools', priority: 'Important' },
  { id: '17', name: 'Box cutter', category: 'Tools', priority: 'Important' },
  { id: '18', name: 'Important documents', category: 'Documents', priority: 'Essential' },
  { id: '19', name: 'First aid kit', category: 'Safety', priority: 'Important' },
  { id: '20', name: 'Pet food & supplies', category: 'Pets', priority: 'Essential' },
  { id: '21', name: 'Change of clothes', category: 'Personal', priority: 'Essential' },
  { id: '22', name: 'Cleaning supplies', category: 'Cleaning', priority: 'Important' },
  { id: '23', name: 'Laptop & charger', category: 'Electronics', priority: 'Important' },
  { id: '24', name: 'Alarm clock', category: 'Bedroom', priority: 'Nice to Have' },
];

export const FirstNightChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCheckedItems(newSet);
  };

  const categories = Array.from(new Set(checklistItems.map(item => item.category)));
  const completedCount = checkedItems.size;
  const totalItems = checklistItems.length;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="space-y-6">
      <Calculator
        title={FIRST_NIGHT_CHECKLIST_CONTENT.title}
        description={FIRST_NIGHT_CHECKLIST_CONTENT.description}
        inputs={FIRST_NIGHT_CHECKLIST_CONTENT.calculator.fields}
        results={FIRST_NIGHT_CHECKLIST_CONTENT.calculator.results}
        calculation={FIRST_NIGHT_CHECKLIST_CONTENT.calculator.calculate}
      />

      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">First Night Essentials Checklist</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Packed: {completedCount} of {totalItems} items ({completionPercentage}%)</span>
          </div>
          <div className="mt-3 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-6">
            <h4 className="font-medium text-lg mb-3 text-blue-900">{category}</h4>
            <div className="space-y-2">
              {checklistItems
                .filter(item => item.category === category)
                .map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border"
                  >
                    <Checkbox
                      id={item.id}
                      checked={checkedItems.has(item.id)}
                      onCheckedChange={() => toggleItem(item.id)}
                    />
                    <Label 
                      htmlFor={item.id}
                      className="flex-1 cursor-pointer"
                    >
                      {item.name}
                    </Label>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.priority === 'Essential' ? 'bg-red-100 text-red-700' :
                      item.priority === 'Important' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-900 mb-2">Pro Tip</h4>
          <p className="text-sm text-green-800">
            Pack your "First Night Box" in a clear plastic bin and label it on all sides. 
            Keep it in your car, not the moving truck, so you have immediate access to essentials.
          </p>
        </div>
      </Card>
    </div>
  );
};
