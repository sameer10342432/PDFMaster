'use client';

import React, { useState } from 'react';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookmarkIcon, TrashIcon, PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ScenarioManagerProps {
  calculatorSlug: string;
  calculatorTitle: string;
  currentInputs: Record<string, any>;
  currentResults: any[];
  onLoadScenario: (inputs: Record<string, any>) => void;
}

export const ScenarioManager: React.FC<ScenarioManagerProps> = ({
  calculatorSlug,
  calculatorTitle,
  currentInputs,
  currentResults,
  onLoadScenario,
}) => {
  const { 
    scenarios, 
    saveScenario, 
    updateScenario, 
    deleteScenario, 
    getScenariosByCalculator,
    activeScenario,
    setActiveScenario 
  } = useCalculatorEnhancements();
  
  const [isAdding, setIsAdding] = useState(false);
  const [newScenarioName, setNewScenarioName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  
  const calculatorScenarios = getScenariosByCalculator(calculatorSlug);
  
  const handleSaveScenario = () => {
    if (!newScenarioName.trim()) return;
    
    const scenarioId = saveScenario({
      calculatorSlug,
      calculatorTitle,
      name: newScenarioName,
      inputs: currentInputs,
      results: currentResults,
    });
    
    setNewScenarioName('');
    setIsAdding(false);
    setActiveScenario(scenarioId);
  };
  
  const handleLoadScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      onLoadScenario(scenario.inputs);
      setActiveScenario(scenarioId);
    }
  };
  
  const handleRenameScenario = (id: string, newName: string) => {
    if (newName.trim()) {
      updateScenario(id, { name: newName });
    }
    setEditingId(null);
    setEditName('');
  };
  
  const startEdit = (id: string, currentName: string) => {
    setEditingId(id);
    setEditName(currentName);
  };
  
  if (calculatorScenarios.length === 0 && !isAdding) {
    return (
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookmarkIcon className="w-5 h-5" />
            Saved Scenarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Save different calculation scenarios to compare options later.
          </p>
          <Button onClick={() => setIsAdding(true)} className="w-full">
            Save Current Scenario
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <BookmarkIcon className="w-5 h-5" />
          Saved Scenarios ({calculatorScenarios.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {calculatorScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`p-3 border rounded-lg transition-all ${
              activeScenario === scenario.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center justify-between">
              {editingId === scenario.id ? (
                <div className="flex-1 flex items-center gap-2">
                  <Input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="h-8"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={() => handleRenameScenario(scenario.id, editName)}
                  >
                    <CheckIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      setEditName('');
                    }}
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{scenario.name}</h4>
                    <p className="text-xs text-gray-500">
                      {new Date(scenario.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleLoadScenario(scenario.id)}
                      disabled={activeScenario === scenario.id}
                    >
                      {activeScenario === scenario.id ? 'Active' : 'Load'}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => startEdit(scenario.id, scenario.name)}
                    >
                      <PencilIcon className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteScenario(scenario.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        
        {isAdding ? (
          <div className="border border-dashed border-blue-300 rounded-lg p-3 space-y-2">
            <Label htmlFor="scenario-name">Scenario Name</Label>
            <Input
              id="scenario-name"
              value={newScenarioName}
              onChange={(e) => setNewScenarioName(e.target.value)}
              placeholder="e.g., High Down Payment Option"
              autoFocus
            />
            <div className="flex gap-2">
              <Button onClick={handleSaveScenario} className="flex-1">
                Save Scenario
              </Button>
              <Button variant="outline" onClick={() => {
                setIsAdding(false);
                setNewScenarioName('');
              }}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => setIsAdding(true)} variant="outline" className="w-full">
            + Save Current Scenario
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
