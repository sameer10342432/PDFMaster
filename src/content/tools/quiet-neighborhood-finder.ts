import { CalculatorContent } from '@/types';

export const QUIET_NEIGHBORHOOD_FINDER_CONTENT: CalculatorContent = {
  title: 'Quiet Neighborhood Finder (Noise Pollution)',
  description: 'Assess noise pollution levels to find peaceful, quiet neighborhoods for comfortable living.',
  icon: 'Icon',
  category: 'Research & Analysis',
  slug: 'quiet-neighborhood-finder',
  article: {
    title: 'Finding a Quiet Neighborhood: Noise Pollution Assessment Guide',
    content: `
Noise pollution significantly impacts quality of life, property values, and health. This guide helps you find peaceful neighborhoods.

### Major Noise Sources

**Traffic Noise:**
- Highway proximity (noise travels 0.5-2 miles)
- Major road traffic volume
- Truck routes
- Rush hour patterns

**Aircraft Noise:**
- Airport flight paths
- Military base operations
- Helicopter routes
- Small aircraft traffic

**Rail Noise:**
- Train tracks proximity
- Freight vs passenger lines
- Horn requirements
- Crossing frequency

**Commercial/Industrial:**
- Loading docks
- Manufacturing facilities
- Restaurant ventilation
- Bars and nightlife

### Noise Level Guidelines (dBA)

- **20-30 dBA**: Very Quiet (rural areas)
- **30-40 dBA**: Quiet (suburban residential)
- **40-50 dBA**: Moderate (light traffic)
- **50-60 dBA**: Noisy (busy streets)
- **60+ dBA**: Very Noisy (avoid for residential)

## Assessment Checklist

1. Visit at different times (morning, evening, night, weekend)
2. Check flight path maps at FlightAware.com
3. Review train schedules and routes
4. Note commercial activity hours
5. Talk to current residents

## How to Use This Tool

Rate noise factors to get an overall quietness score:
- Distance from highways
- Distance from airports
- Rail line proximity
- Commercial activity
- Street traffic
`,
  },
  calculator: {
    fields: [
      {
        name: 'highwayDistance',
        label: 'Distance to Major Highway (miles)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'airportDistance',
        label: 'Distance to Airport (miles)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'trainDistance',
        label: 'Distance to Train Tracks (miles)',
        type: 'number',
        defaultValue: 1,
      },
      {
        name: 'commercialActivity',
        label: 'Commercial Activity (1-10, 1=None, 10=Heavy)',
        type: 'number',
        defaultValue: 3,
      },
    ],
    results: [
      { label: 'Quietness Score', isCurrency: false },
      { label: 'Noise Rating', isCurrency: false },
      { label: 'Recommendation', isCurrency: false },
    ],
    calculate: (data) => {
      const { highwayDistance, airportDistance, trainDistance, commercialActivity } = data;
      
      let score = 100;
      score -= Math.max(0, (2 - parseFloat(highwayDistance)) * 15);
      score -= Math.max(0, (5 - parseFloat(airportDistance)) * 5);
      score -= Math.max(0, (1 - parseFloat(trainDistance)) * 20);
      score -= parseInt(commercialActivity) * 3;
      score = Math.max(0, Math.min(100, score));
      
      let rating = 'Noisy';
      let recommendation = 'May experience significant noise pollution';
      
      if (score >= 80) {
        rating = 'Very Quiet';
        recommendation = 'Excellent choice for peaceful living';
      } else if (score >= 60) {
        rating = 'Quiet';
        recommendation = 'Generally peaceful with typical suburban noise';
      } else if (score >= 40) {
        rating = 'Moderate';
        recommendation = 'Some noise, but manageable';
      }
      
      return [
        { label: 'Quietness Score', value: `${Math.round(score)} / 100` },
        { label: 'Noise Rating', value: rating },
        { label: 'Recommendation', value: recommendation },
      ];
    },
  },
};
