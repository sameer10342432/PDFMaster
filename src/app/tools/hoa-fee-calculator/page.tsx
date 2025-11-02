'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Building, DollarSign, TrendingUp, Info, FileText, PieChart } from 'lucide-react';

interface Comparison {
  low: number;
  average: number;
  high: number;
}

interface HOAData {
  monthlyDues: number;
  specialAssessments: number;
  initiation: number;
  transfer: number;
  propertyType: string;
  unitSize: number;
  amenityLevel: string;
  managementType: string;
  reserveFund: number;
  insurance: number;
  utilities: number;
  maintenance: number;
  landscaping: number;
  security: number;
  administration: number;
}

interface HOACalculation {
  monthlyTotal: number;
  annualTotal: number;
  costPerSqFt: number;
  fiveYearProjection: number;
  breakdown: {
    dues: number;
    assessments: number;
    fees: number;
  };
  comparison: {
    low: number;
    average: number;
    high: number;
  };
  recommendations: string[];
}

export default function HOAFeeCalculator() {
  const [hoaData, setHOAData] = useState<HOAData>({
    monthlyDues: 250,
    specialAssessments: 0,
    initiation: 0,
    transfer: 0,
    propertyType: 'condo',
    unitSize: 1200,
    amenityLevel: 'moderate',
    managementType: 'professional',
    reserveFund: 15,
    insurance: 8,
    utilities: 12,
    maintenance: 25,
    landscaping: 15,
    security: 10,
    administration: 15
  });

  const [calculation, setCalculation] = useState<HOACalculation | null>(null);

  const calculateHOAFees = () => {
    const monthlyTotal = hoaData.monthlyDues + (hoaData.specialAssessments / 12);
    const annualTotal = monthlyTotal * 12;
    const costPerSqFt = hoaData.unitSize > 0 ? annualTotal / hoaData.unitSize : 0;
    const fiveYearProjection = annualTotal * 5 * 1.15; // Assuming 3% annual increase

    // Comparison ranges based on property type and amenity level
    const getComparison = () => {
      const baseRanges = {
        condo: { low: 200, average: 350, high: 600 },
        townhouse: { low: 150, average: 250, high: 450 },
        singleFamily: { low: 50, average: 150, high: 300 }
      };
      
      const multiplier = hoaData.amenityLevel === 'luxury' ? 1.5 : 
                         hoaData.amenityLevel === 'moderate' ? 1.0 : 0.7;
      
      const base = baseRanges[hoaData.propertyType as keyof typeof baseRanges] || baseRanges.condo;
      
      return {
        low: base.low * multiplier,
        average: base.average * multiplier,
        high: base.high * multiplier
      };
    };

    const recommendations = [];
    
    if (monthlyTotal > getComparison().high) {
      recommendations.push("HOA fees are above market average - review fee breakdown and amenities");
    }
    if (hoaData.reserveFund < 10) {
      recommendations.push("Reserve fund percentage is low - may indicate future special assessments");
    }
    if (hoaData.specialAssessments > hoaData.monthlyDues * 6) {
      recommendations.push("High special assessments - investigate HOA financial health");
    }
    if (monthlyTotal < getComparison().low) {
      recommendations.push("Low HOA fees may indicate deferred maintenance or limited amenities");
    }

    setCalculation({
      monthlyTotal,
      annualTotal,
      costPerSqFt,
      fiveYearProjection,
      breakdown: {
        dues: hoaData.monthlyDues * 12,
        assessments: hoaData.specialAssessments,
        fees: hoaData.initiation + hoaData.transfer
      },
      comparison: getComparison(),
      recommendations
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getHOALevel = (monthlyFee: number, comparison: Comparison) => {
    if (monthlyFee <= comparison.low) return { level: 'Low', color: 'bg-green-500' };
    if (monthlyFee <= comparison.average) return { level: 'Average', color: 'bg-yellow-500' };
    if (monthlyFee <= comparison.high) return { level: 'High', color: 'bg-orange-500' };
    return { level: 'Very High', color: 'bg-red-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <Building className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HOA Fee Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate and analyze homeowners association fees, special assessments, and total community living costs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  HOA Fee Calculator
                </CardTitle>
                <CardDescription>
                  Enter your HOA details and community information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="fees">Fees</TabsTrigger>
                    <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                    <TabsTrigger value="calculate">Calculate</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select value={hoaData.propertyType} onValueChange={(value) => setHOAData({...hoaData, propertyType: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="condo">Condominium</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="singleFamily">Single Family Home</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="unitSize">Unit Size (sq ft)</Label>
                        <Input
                          id="unitSize"
                          type="number"
                          value={hoaData.unitSize || ''}
                          onChange={(e) => setHOAData({...hoaData, unitSize: Number(e.target.value)})}
                          placeholder="1200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="amenityLevel">Amenity Level</Label>
                        <Select value={hoaData.amenityLevel} onValueChange={(value) => setHOAData({...hoaData, amenityLevel: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="managementType">Management Type</Label>
                        <Select value={hoaData.managementType} onValueChange={(value) => setHOAData({...hoaData, managementType: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self">Self-Managed</SelectItem>
                            <SelectItem value="professional">Professional</SelectItem>
                            <SelectItem value="onsite">On-Site Manager</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="fees" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="monthlyDues">Monthly HOA Dues ($)</Label>
                        <Input
                          id="monthlyDues"
                          type="number"
                          value={hoaData.monthlyDues || ''}
                          onChange={(e) => setHOAData({...hoaData, monthlyDues: Number(e.target.value)})}
                          placeholder="250"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialAssessments">Annual Special Assessments ($)</Label>
                        <Input
                          id="specialAssessments"
                          type="number"
                          value={hoaData.specialAssessments || ''}
                          onChange={(e) => setHOAData({...hoaData, specialAssessments: Number(e.target.value)})}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="initiation">Initiation Fee ($)</Label>
                        <Input
                          id="initiation"
                          type="number"
                          value={hoaData.initiation || ''}
                          onChange={(e) => setHOAData({...hoaData, initiation: Number(e.target.value)})}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label htmlFor="transfer">Transfer Fee ($)</Label>
                        <Input
                          id="transfer"
                          type="number"
                          value={hoaData.transfer || ''}
                          onChange={(e) => setHOAData({...hoaData, transfer: Number(e.target.value)})}
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Special assessments are one-time fees for major repairs or improvements
                      </AlertDescription>
                    </Alert>
                  </TabsContent>

                  <TabsContent value="breakdown" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reserveFund">Reserve Fund (%)</Label>
                        <Input
                          id="reserveFund"
                          type="number"
                          value={hoaData.reserveFund}
                          onChange={(e) => setHOAData({...hoaData, reserveFund: Number(e.target.value)})}
                          placeholder="15"
                        />
                      </div>
                      <div>
                        <Label htmlFor="insurance">Insurance (%)</Label>
                        <Input
                          id="insurance"
                          type="number"
                          value={hoaData.insurance}
                          onChange={(e) => setHOAData({...hoaData, insurance: Number(e.target.value)})}
                          placeholder="8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="utilities">Utilities (%)</Label>
                        <Input
                          id="utilities"
                          type="number"
                          value={hoaData.utilities}
                          onChange={(e) => setHOAData({...hoaData, utilities: Number(e.target.value)})}
                          placeholder="12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maintenance">Maintenance (%)</Label>
                        <Input
                          id="maintenance"
                          type="number"
                          value={hoaData.maintenance}
                          onChange={(e) => setHOAData({...hoaData, maintenance: Number(e.target.value)})}
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <Label htmlFor="landscaping">Landscaping (%)</Label>
                        <Input
                          id="landscaping"
                          type="number"
                          value={hoaData.landscaping}
                          onChange={(e) => setHOAData({...hoaData, landscaping: Number(e.target.value)})}
                          placeholder="15"
                        />
                      </div>
                      <div>
                        <Label htmlFor="administration">Administration (%)</Label>
                        <Input
                          id="administration"
                          type="number"
                          value={hoaData.administration}
                          onChange={(e) => setHOAData({...hoaData, administration: Number(e.target.value)})}
                          placeholder="15"
                        />
                      </div>
                    </div>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Percentages show how HOA dues are allocated across different expense categories
                      </AlertDescription>
                    </Alert>
                  </TabsContent>

                  <TabsContent value="calculate" className="space-y-4">
                    <Button 
                      onClick={calculateHOAFees} 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      size="lg"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate HOA Costs
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {calculation && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      HOA Cost Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {formatCurrency(calculation.monthlyTotal)}
                      </div>
                      <div className="text-sm text-gray-500">Monthly Total</div>
                      <div className="text-lg font-semibold text-gray-700 mt-2">
                        {formatCurrency(calculation.annualTotal)}/year
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Cost per Sq Ft:</span>
                        <span>{calculation.costPerSqFt.toFixed(2)}/sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5-Year Projection:</span>
                        <span>{formatCurrency(calculation.fiveYearProjection)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fee Level:</span>
                        <Badge className={getHOALevel(calculation.monthlyTotal, calculation.comparison).color}>
                          {getHOALevel(calculation.monthlyTotal, calculation.comparison).level}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Cost Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Annual Dues:</span>
                      <span>{formatCurrency(calculation.breakdown.dues)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Special Assessments:</span>
                      <span>{formatCurrency(calculation.breakdown.assessments)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>One-time Fees:</span>
                      <span>{formatCurrency(calculation.breakdown.fees)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Market Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Low Range:</span>
                      <span>{formatCurrency(calculation.comparison.low)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average:</span>
                      <span>{formatCurrency(calculation.comparison.average)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>High Range:</span>
                      <span>{formatCurrency(calculation.comparison.high)}</span>
                    </div>
                  </CardContent>
                </Card>

                {calculation.recommendations.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {calculation.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </div>
        </div>

        {/* Educational Article */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Complete Guide to HOA Fees and Community Living
              </CardTitle>
              <CardDescription>
                Understanding homeowners association fees, what they cover, and how to evaluate HOA value
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Understanding HOA Fees</h3>
                  <p className="text-gray-600 mb-4">
                    Homeowners Association (HOA) fees are monthly or annual payments that property owners make to maintain 
                    common areas, amenities, and services in planned communities, condominiums, and townhouse developments.
                  </p>
                  
                  <h4 className="font-semibold mb-2">What HOA Fees Typically Cover:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Common area maintenance and landscaping</li>
                    <li>Building exterior maintenance and repairs</li>
                    <li>Amenity upkeep (pools, gyms, clubhouses)</li>
                    <li>Insurance for common areas</li>
                    <li>Utilities for shared spaces</li>
                    <li>Security services and systems</li>
                    <li>Snow removal and trash collection</li>
                    <li>Administrative and management costs</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-6">Types of HOA Fees</h3>
                  
                  <h4 className="font-semibold mb-2">Regular Monthly/Annual Dues:</h4>
                  <p className="text-gray-600 mb-3">
                    Predictable recurring fees that cover ongoing operational expenses and contribute to reserve funds.
                  </p>

                  <h4 className="font-semibold mb-2">Special Assessments:</h4>
                  <p className="text-gray-600 mb-3">
                    One-time fees levied for major repairs, improvements, or unexpected expenses not covered by regular dues or reserves.
                  </p>

                  <h4 className="font-semibold mb-2">Transfer and Initiation Fees:</h4>
                  <p className="text-gray-600 mb-3">
                    One-time charges when buying or selling property, covering administrative costs and document preparation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Evaluating HOA Value</h3>
                  <p className="text-gray-600 mb-4">
                    Not all HOA fees are created equal. Understanding what you're paying for and comparing value 
                    is crucial for making informed property decisions.
                  </p>

                  <h4 className="font-semibold mb-2">Key Evaluation Factors:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li><strong>Amenity Quality:</strong> Pool, fitness center, clubhouse condition</li>
                    <li><strong>Maintenance Standards:</strong> Landscaping and building upkeep</li>
                    <li><strong>Financial Health:</strong> Reserve fund adequacy and budget management</li>
                    <li><strong>Management Quality:</strong> Responsiveness and professionalism</li>
                    <li><strong>Rules and Restrictions:</strong> Architectural guidelines and policies</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-6">HOA Financial Health Indicators</h3>
                  
                  <h4 className="font-semibold mb-2">Reserve Fund Adequacy:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Should be 10-25% of annual budget</li>
                    <li>Covers major repairs and replacements</li>
                    <li>Prevents need for large special assessments</li>
                  </ul>

                  <h4 className="font-semibold mb-2 mt-4">Budget Transparency:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Annual budget should be available to owners</li>
                    <li>Clear breakdown of expense categories</li>
                    <li>Regular financial reporting and audits</li>
                  </ul>

                  <h4 className="font-semibold mb-2 mt-4">Warning Signs:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Frequent special assessments</li>
                    <li>Deferred maintenance issues</li>
                    <li>Low reserve fund balances</li>
                    <li>Significant fee increases without explanation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">HOA Fee Ranges by Property Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Condominiums</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Basic:</strong> $200-400/month</li>
                      <li><strong>Moderate:</strong> $400-600/month</li>
                      <li><strong>Luxury:</strong> $600-1,200+/month</li>
                      <li>Includes: Building maintenance, insurance, amenities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Townhouses</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Basic:</strong> $100-250/month</li>
                      <li><strong>Moderate:</strong> $250-400/month</li>
                      <li><strong>Luxury:</strong> $400-700+/month</li>
                      <li>Includes: Common areas, exterior maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Single Family</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Basic:</strong> $50-150/month</li>
                      <li><strong>Moderate:</strong> $150-300/month</li>
                      <li><strong>Luxury:</strong> $300-600+/month</li>
                      <li>Includes: Amenities, landscaping, security</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Investment Property Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Rental Property Impact:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>HOA fees reduce net rental income</li>
                      <li>Factor into cash flow calculations</li>
                      <li>Consider fee increases in projections</li>
                      <li>Some HOAs restrict rentals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resale Considerations:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>High fees may deter buyers</li>
                      <li>Well-maintained communities command premiums</li>
                      <li>Amenities can justify higher fees</li>
                      <li>Financial stability affects property values</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Questions to Ask Before Buying</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Financial Questions:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>What is the current reserve fund balance?</li>
                      <li>When was the last special assessment?</li>
                      <li>Are any major projects planned?</li>
                      <li>What is the fee increase history?</li>
                      <li>Are there any pending lawsuits?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operational Questions:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>What services are included in fees?</li>
                      <li>Are there rental restrictions?</li>
                      <li>What are the architectural guidelines?</li>
                      <li>How is the HOA managed?</li>
                      <li>What is the complaint resolution process?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}