'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ICalculator } from '@/types/calculators';
import { useCalculator } from './hooks/useCalculator';
import { CalculatorFields } from './components/CalculatorFields';
import { CalculatorResults } from './components/CalculatorResults';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { parseShareLink } from '@/lib/exportUtils';
import {
  ScenarioManager,
  ExportButtons,
  ShareButton,
  SmartInsights,
  CalculationHistory,
  NotesPanel,
  ComparisonMatrix,
  FavoriteButton,
  WhatIfAnalysis,
} from '../calculator-enhancements';

interface EnhancedCalculatorProps extends ICalculator {
  slug: string;
  category?: string;
}

export const EnhancedCalculator: React.FC<EnhancedCalculatorProps> = ({
  title,
  description,
  inputs,
  results,
  calculation,
  slug,
  category = 'Real Estate',
}) => {
  const { values, results: displayResults, handleChange, handleCalculate, setValues } = useCalculator(
    inputs,
    results,
    calculation
  );
  const { addToHistory } = useCalculatorEnhancements();
  const [notes, setNotes] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [activeTab, setActiveTab] = useState('calculator');
  
  // Load shared calculation if present in URL (once on mount)
  useEffect(() => {
    try {
      const sharedData = parseShareLink();
      if (sharedData && sharedData.inputs && Object.keys(sharedData.inputs).length > 0) {
        setValues(sharedData.inputs);
      }
    } catch (error) {
      console.error('Failed to load shared calculation:', error);
    }
  }, []);
  
  // Auto-calculate when values change
  useEffect(() => {
    const calculateAndSave = () => {
      handleCalculate();
    };
    
    calculateAndSave();
  }, [values]);
  
  // Save to history when results are available (separate effect)
  useEffect(() => {
    if (!displayResults || displayResults.length === 0) return;
    
    // Debounce history saving
    const timeoutId = setTimeout(() => {
      addToHistory({
        calculatorSlug: slug,
        calculatorTitle: title,
        inputs: values,
        results: displayResults,
      });
    }, 1500);
    
    return () => clearTimeout(timeoutId);
  }, [displayResults, slug, title, values, addToHistory]);
  
  const handleLoadScenario = (scenarioInputs: Record<string, any>) => {
    setValues(scenarioInputs);
    setActiveTab('calculator');
  };
  
  return (
    <div className="space-y-6">
      {/* Header with Favorite Button */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-gray-600 mt-2">{description}</p>
          )}
        </div>
        <FavoriteButton slug={slug} title={title} category={category} />
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="comparison">Compare</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="space-y-6 mt-6">
          {/* Main Calculator Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl pb-8">
              <CardTitle className="text-3xl text-white">Calculator Inputs</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 pb-8 space-y-6">
              <CalculatorFields fields={inputs} values={values} handleChange={handleChange} />
              
              {/* What-If Analysis */}
              <WhatIfAnalysis inputs={inputs} values={values} onValueChange={handleChange} />
              
              <Button
                onClick={handleCalculate}
                className="mt-4 w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Calculate Now
              </Button>
            </CardContent>
          </Card>
          
          {/* Results Section */}
          {displayResults && displayResults.length > 0 && (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-xl pb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <CardTitle className="text-3xl text-white">Your Results</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <ShareButton
                      calculatorTitle={title}
                      inputs={values}
                      results={displayResults}
                    />
                    <ExportButtons
                      calculatorTitle={title}
                      inputs={values}
                      results={displayResults}
                      notes={notes}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8 pb-8">
                <CalculatorResults results={displayResults} />
              </CardContent>
            </Card>
          )}
          
          {/* Notes Panel */}
          <NotesPanel notes={notes} onNotesChange={setNotes} />
          
          {/* Calculation History */}
          <CalculationHistory
            calculatorSlug={slug}
            onLoadHistory={handleLoadScenario}
          />
        </TabsContent>
        
        <TabsContent value="scenarios" className="space-y-6 mt-6">
          <ScenarioManager
            calculatorSlug={slug}
            calculatorTitle={title}
            currentInputs={values}
            currentResults={displayResults || []}
            onLoadScenario={handleLoadScenario}
          />
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-6 mt-6">
          {displayResults && displayResults.length > 0 ? (
            <SmartInsights
              calculatorType={slug}
              inputs={values}
              results={displayResults}
            />
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-gray-500">
                Calculate first to see smart insights and recommendations.
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="comparison" className="space-y-6 mt-6">
          <ComparisonMatrix calculatorSlug={slug} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
