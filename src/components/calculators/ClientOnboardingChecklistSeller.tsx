'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
  date?: string;
}

interface ChecklistPhase {
  title: string;
  items: ChecklistItem[];
}

export const ClientOnboardingChecklistSeller: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [listingPrice, setListingPrice] = useState('');
  
  const [phases, setPhases] = useState<ChecklistPhase[]>([
    {
      title: 'Initial Contact (Day 1)',
      items: [
        { id: '1-1', label: 'Respond to seller inquiry within 1 hour', completed: false },
        { id: '1-2', label: 'Schedule listing consultation appointment', completed: false },
        { id: '1-3', label: 'Send welcome package and credentials', completed: false },
        { id: '1-4', label: 'Complete pre-listing research and CMA prep', completed: false },
        { id: '1-5', label: 'Review property records and history', completed: false },
      ],
    },
    {
      title: 'Listing Consultation (Day 2-4)',
      items: [
        { id: '2-1', label: 'Complete property walkthrough with seller', completed: false },
        { id: '2-2', label: 'Understand seller\'s timeline and motivation', completed: false },
        { id: '2-3', label: 'Present comprehensive CMA analysis', completed: false },
        { id: '2-4', label: 'Review marketing plan presentation', completed: false },
        { id: '2-5', label: 'Discuss pricing strategy and recommendations', completed: false },
        { id: '2-6', label: 'Provide home preparation recommendations', completed: false },
      ],
    },
    {
      title: 'Listing Agreement (Day 5-7)',
      items: [
        { id: '3-1', label: 'Sign exclusive listing agreement', completed: false },
        { id: '3-2', label: 'Complete all required disclosures', completed: false },
        { id: '3-3', label: 'Collect property information and documents', completed: false },
        { id: '3-4', label: 'Set up showing access and lockbox', completed: false },
        { id: '3-5', label: 'Obtain HOA documents and information', completed: false },
      ],
    },
    {
      title: 'Pre-Marketing Prep (Week 1-2)',
      items: [
        { id: '4-1', label: 'Schedule professional photography', completed: false },
        { id: '4-2', label: 'Coordinate home staging consultation', completed: false },
        { id: '4-3', label: 'Complete deep cleaning and decluttering', completed: false },
        { id: '4-4', label: 'Install yard sign and marketing materials', completed: false },
        { id: '4-5', label: 'Create listing description and feature sheet', completed: false },
        { id: '4-6', label: 'Set up property website and virtual tour', completed: false },
      ],
    },
    {
      title: 'Marketing Launch (Week 2)',
      items: [
        { id: '5-1', label: 'Enter and activate MLS listing', completed: false },
        { id: '5-2', label: 'Syndicate to all major listing portals', completed: false },
        { id: '5-3', label: 'Launch social media marketing campaign', completed: false },
        { id: '5-4', label: 'Send email blast to agent network', completed: false },
        { id: '5-5', label: 'Schedule broker\'s open house', completed: false },
        { id: '5-6', label: 'Schedule public open house', completed: false },
      ],
    },
    {
      title: 'Active Listing Management',
      items: [
        { id: '6-1', label: 'Weekly communication and market updates', completed: false },
        { id: '6-2', label: 'Collect and share showing feedback', completed: false },
        { id: '6-3', label: 'Track marketing performance metrics', completed: false },
        { id: '6-4', label: 'Review pricing strategy (bi-weekly)', completed: false },
        { id: '6-5', label: 'Coordinate all showing appointments', completed: false },
      ],
    },
    {
      title: 'Offer Management',
      items: [
        { id: '7-1', label: 'Present all offers promptly', completed: false },
        { id: '7-2', label: 'Review buyer qualifications', completed: false },
        { id: '7-3', label: 'Negotiate terms and conditions', completed: false },
        { id: '7-4', label: 'Execute purchase agreement', completed: false },
        { id: '7-5', label: 'Change MLS status to Pending', completed: false },
      ],
    },
    {
      title: 'Under Contract Management',
      items: [
        { id: '8-1', label: 'Coordinate home inspection', completed: false },
        { id: '8-2', label: 'Negotiate repair requests', completed: false },
        { id: '8-3', label: 'Monitor appraisal process', completed: false },
        { id: '8-4', label: 'Track all contingency deadlines', completed: false },
        { id: '8-5', label: 'Review title work and resolve issues', completed: false },
      ],
    },
    {
      title: 'Closing Preparation',
      items: [
        { id: '9-1', label: 'Schedule final walkthrough', completed: false },
        { id: '9-2', label: 'Review closing disclosure', completed: false },
        { id: '9-3', label: 'Coordinate utility transfers', completed: false },
        { id: '9-4', label: 'Confirm closing appointment', completed: false },
        { id: '9-5', label: 'Prepare closing gift', completed: false },
      ],
    },
    {
      title: 'Post-Closing Follow-Up',
      items: [
        { id: '10-1', label: 'Send congratulations and thank you', completed: false },
        { id: '10-2', label: 'Request testimonial and review', completed: false },
        { id: '10-3', label: '30-day follow-up call', completed: false },
        { id: '10-4', label: 'Add to referral marketing campaign', completed: false },
        { id: '10-5', label: 'Update CRM and client database', completed: false },
      ],
    },
  ]);

  const toggleItem = (phaseIndex: number, itemId: string) => {
    setPhases(prevPhases => {
      const newPhases = [...prevPhases];
      const item = newPhases[phaseIndex].items.find(i => i.id === itemId);
      if (item) {
        item.completed = !item.completed;
        if (item.completed) {
          item.date = new Date().toLocaleDateString();
        } else {
          item.date = undefined;
        }
      }
      return newPhases;
    });
  };

  const totalItems = phases.reduce((sum, phase) => sum + phase.items.length, 0);
  const completedItems = phases.reduce(
    (sum, phase) => sum + phase.items.filter(item => item.completed).length,
    0
  );
  const progressPercentage = Math.round((completedItems / totalItems) * 100);

  const resetChecklist = () => {
    setPhases(prevPhases => 
      prevPhases.map(phase => ({
        ...phase,
        items: phase.items.map(item => ({ ...item, completed: false, date: undefined }))
      }))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const exportData = {
      clientName,
      propertyAddress,
      listingPrice,
      progress: `${completedItems}/${totalItems} (${progressPercentage}%)`,
      phases: phases.map(phase => ({
        title: phase.title,
        items: phase.items.map(item => ({
          label: item.label,
          completed: item.completed,
          completedDate: item.date || ''
        }))
      })),
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seller-onboarding-${clientName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Client Information */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Client Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter seller name"
            />
          </div>
          <div>
            <Label htmlFor="propertyAddress">Property Address</Label>
            <Input
              id="propertyAddress"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              placeholder="Enter property address"
            />
          </div>
          <div>
            <Label htmlFor="listingPrice">Target Listing Price</Label>
            <Input
              id="listingPrice"
              value={listingPrice}
              onChange={(e) => setListingPrice(e.target.value)}
              placeholder="$0"
            />
          </div>
        </div>
      </Card>

      {/* Progress Overview */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Onboarding Progress</h3>
          <Badge variant="default" className="text-lg px-4 py-2">
            {completedItems} / {totalItems} Completed
          </Badge>
        </div>
        <Progress value={progressPercentage} className="h-3 mb-2" />
        <p className="text-sm text-gray-600 text-center">{progressPercentage}% Complete</p>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={resetChecklist} variant="outline">
          Reset All
        </Button>
        <Button onClick={handlePrint} variant="outline">
          Print Checklist
        </Button>
        <Button onClick={handleExport} variant="default">
          Export Data
        </Button>
      </div>

      {/* Checklist Phases */}
      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
          {phases.map((phase, index) => {
            const phaseCompleted = phase.items.filter(item => item.completed).length;
            const phaseTotal = phase.items.length;
            return (
              <TabsTrigger key={index} value={index.toString()} className="text-xs md:text-sm">
                Phase {index + 1}
                <Badge variant="secondary" className="ml-1">
                  {phaseCompleted}/{phaseTotal}
                </Badge>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {phases.map((phase, phaseIndex) => (
          <TabsContent key={phaseIndex} value={phaseIndex.toString()}>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
              <div className="space-y-3">
                {phase.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Checkbox
                      id={item.id}
                      checked={item.completed}
                      onCheckedChange={() => toggleItem(phaseIndex, item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={item.id}
                        className={`cursor-pointer ${
                          item.completed ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {item.label}
                      </Label>
                      {item.completed && item.date && (
                        <p className="text-xs text-green-600 mt-1">
                          Completed on {item.date}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Summary Card */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="text-lg font-semibold mb-3">Onboarding Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Phases</p>
            <p className="text-2xl font-bold text-blue-600">{phases.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Tasks</p>
            <p className="text-2xl font-bold text-blue-600">{totalItems}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-green-600">{completedItems}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Remaining</p>
            <p className="text-2xl font-bold text-orange-600">{totalItems - completedItems}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
