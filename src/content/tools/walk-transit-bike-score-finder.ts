import { CalculatorContent } from '@/types';

export const WALK_SCORE_FINDER_CONTENT: CalculatorContent = {
  title: 'Walk Score, Transit Score & Bike Score Finder',
  description: 'Evaluate neighborhood walkability, public transportation access, and bike-friendliness for any address.',
  icon: 'Icon',
  category: 'Research & Analysis',
  slug: 'walk-transit-bike-score-finder',
  article: {
    title: 'Understanding Walk Score, Transit Score & Bike Score',
    content: `
Walk Score, Transit Score, and Bike Score are objective measures of how walkable, transit-friendly, and bikeable a location is. These scores help you evaluate neighborhood accessibility before buying or renting.

### Walk Score (0-100)
- **90-100**: Daily errands do not require a car (Walker's Paradise)
- **70-89**: Most errands can be accomplished on foot (Very Walkable)
- **50-69**: Some errands can be accomplished on foot (Somewhat Walkable)
- **25-49**: Most errands require a car (Car-Dependent)
- **0-24**: Almost all errands require a car (Car-Dependent)

### Transit Score (0-100)
Measures public transportation quality:
- **90-100**: World-class public transportation
- **70-89**: Excellent transit
- **50-69**: Good transit
- **25-49**: Some transit
- **0-24**: Minimal transit

### Bike Score (0-100)
Evaluates bikeability based on bike lanes, hills, destinations, and road connectivity.

## How to Use This Tool

Enter an address to estimate walkability scores based on:
1. Distance to amenities
2. Pedestrian friendliness
3. Public transit access
4. Bike infrastructure

This tool provides estimates; visit walkscore.com for official scores.
`,
  },
  calculator: {
    fields: [
      {
        name: 'address',
        label: 'Address or Neighborhood',
        type: 'text',
        defaultValue: '',
      },
      {
        name: 'groceryDistance',
        label: 'Distance to Grocery Store (miles)',
        type: 'number',
        defaultValue: 0.5,
      },
      {
        name: 'transitStops',
        label: 'Number of Transit Stops Within 0.5 Miles',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'bikeLanes',
        label: 'Miles of Bike Lanes Within 2 Miles',
        type: 'number',
        defaultValue: 3,
      },
    ],
    results: [
      { label: 'Estimated Walk Score', isCurrency: false },
      { label: 'Estimated Transit Score', isCurrency: false },
      { label: 'Estimated Bike Score', isCurrency: false },
    ],
    calculate: (data) => {
      const { groceryDistance, transitStops, bikeLanes } = data;
      
      const walkScore = Math.min(100, Math.max(0, 100 - (parseFloat(groceryDistance) * 30)));
      const transitScore = Math.min(100, parseInt(transitStops) * 15);
      const bikeScore = Math.min(100, parseInt(bikeLanes) * 25);
      
      return [
        { label: 'Estimated Walk Score', value: `${Math.round(walkScore)} / 100` },
        { label: 'Estimated Transit Score', value: `${Math.round(transitScore)} / 100` },
        { label: 'Estimated Bike Score', value: `${Math.round(bikeScore)} / 100` },
      ];
    },
  },
};
