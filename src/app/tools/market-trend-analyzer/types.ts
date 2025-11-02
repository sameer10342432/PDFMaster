export interface CurrentConditions {
  marketType: string;
  competitiveness: string;
  priceDirection: string;
  inventory: string;
}

export interface PriceMetrics {
  medianPrice: number;
  priceChange: number;
  yearOverYear: number;
  pricePerSqFt: number;
}

export interface MarketActivity {
  daysOnMarket: number;
  salesVolume: number;
  newListings: number;
  pendingSales: number;
}

export interface Forecast {
  nextQuarter: number;
  nextYear: number;
  confidence: number;
}

export interface MarketAnalysis {
  currentConditions: CurrentConditions;
  priceMetrics: PriceMetrics;
  marketActivity: MarketActivity;
  forecast: Forecast;
  recommendations: string[];
}

export interface MarketData {
  location: string;
  propertyType: string;
  timeframe: string;
  medianPrice: number;
  priceChange: number;
  daysOnMarket: number;
  inventoryLevel: number;
  salesVolume: number;
  pricePerSqFt: number;
  marketScore: number;
  trend: 'bullish' | 'bearish' | 'neutral';
}