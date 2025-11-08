import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SavedScenario {
  id: string;
  calculatorSlug: string;
  calculatorTitle: string;
  name: string;
  inputs: Record<string, any>;
  results: any[];
  timestamp: number;
  notes?: string;
  tags?: string[];
  isFavorite?: boolean;
}

export interface CalculationHistory {
  id: string;
  calculatorSlug: string;
  calculatorTitle: string;
  inputs: Record<string, any>;
  results: any[];
  timestamp: number;
}

export interface FavoriteTool {
  slug: string;
  title: string;
  category: string;
  addedAt: number;
}

export interface Goal {
  id: string;
  title: string;
  targetValue: number;
  currentValue: number;
  deadline?: number;
  relatedCalculator?: string;
  createdAt: number;
  updatedAt: number;
  isCompleted: boolean;
  milestones?: { value: number; label: string; achieved: boolean }[];
}

interface EnhancementsStore {
  scenarios: SavedScenario[];
  history: CalculationHistory[];
  favorites: FavoriteTool[];
  goals: Goal[];
  activeScenario: string | null;
  
  // Scenario Methods
  saveScenario: (scenario: Omit<SavedScenario, 'id' | 'timestamp'>) => string;
  updateScenario: (id: string, updates: Partial<SavedScenario>) => void;
  deleteScenario: (id: string) => void;
  getScenariosByCalculator: (slug: string) => SavedScenario[];
  setActiveScenario: (id: string | null) => void;
  
  // History Methods
  addToHistory: (entry: Omit<CalculationHistory, 'id' | 'timestamp'>) => void;
  getHistoryByCalculator: (slug: string) => CalculationHistory[];
  clearHistory: () => void;
  deleteHistoryEntry: (id: string) => void;
  
  // Favorites Methods
  addFavorite: (tool: Omit<FavoriteTool, 'addedAt'>) => void;
  removeFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  
  // Goals Methods
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt' | 'isCompleted'>) => string;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  markGoalComplete: (id: string) => void;
  updateGoalProgress: (id: string, currentValue: number) => void;
}

export const useCalculatorEnhancements = create<EnhancementsStore>()(
  persist(
    (set, get) => ({
      scenarios: [],
      history: [],
      favorites: [],
      goals: [],
      activeScenario: null,

      // Scenario Methods
      saveScenario: (scenario) => {
        const id = `scenario_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newScenario: SavedScenario = {
          ...scenario,
          id,
          timestamp: Date.now(),
        };
        set((state) => ({ scenarios: [...state.scenarios, newScenario] }));
        return id;
      },

      updateScenario: (id, updates) => {
        set((state) => ({
          scenarios: state.scenarios.map((s) =>
            s.id === id ? { ...s, ...updates } : s
          ),
        }));
      },

      deleteScenario: (id) => {
        set((state) => ({
          scenarios: state.scenarios.filter((s) => s.id !== id),
          activeScenario: state.activeScenario === id ? null : state.activeScenario,
        }));
      },

      getScenariosByCalculator: (slug) => {
        return get().scenarios.filter((s) => s.calculatorSlug === slug);
      },

      setActiveScenario: (id) => {
        set({ activeScenario: id });
      },

      // History Methods
      addToHistory: (entry) => {
        const id = `history_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newEntry: CalculationHistory = {
          ...entry,
          id,
          timestamp: Date.now(),
        };
        set((state) => {
          // Keep only last 50 entries per calculator
          const existingHistory = state.history.filter(h => h.calculatorSlug === entry.calculatorSlug);
          const otherHistory = state.history.filter(h => h.calculatorSlug !== entry.calculatorSlug);
          const limitedHistory = existingHistory.length >= 50 
            ? existingHistory.slice(-49) 
            : existingHistory;
          return { history: [...otherHistory, ...limitedHistory, newEntry] };
        });
      },

      getHistoryByCalculator: (slug) => {
        return get().history.filter((h) => h.calculatorSlug === slug)
          .sort((a, b) => b.timestamp - a.timestamp);
      },

      clearHistory: () => {
        set({ history: [] });
      },

      deleteHistoryEntry: (id) => {
        set((state) => ({
          history: state.history.filter((h) => h.id !== id),
        }));
      },

      // Favorites Methods
      addFavorite: (tool) => {
        const newFavorite: FavoriteTool = {
          ...tool,
          addedAt: Date.now(),
        };
        set((state) => ({ favorites: [...state.favorites, newFavorite] }));
      },

      removeFavorite: (slug) => {
        set((state) => ({
          favorites: state.favorites.filter((f) => f.slug !== slug),
        }));
      },

      isFavorite: (slug) => {
        return get().favorites.some((f) => f.slug === slug);
      },

      // Goals Methods
      addGoal: (goal) => {
        const id = `goal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newGoal: Goal = {
          ...goal,
          id,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          isCompleted: false,
        };
        set((state) => ({ goals: [...state.goals, newGoal] }));
        return id;
      },

      updateGoal: (id, updates) => {
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === id ? { ...g, ...updates, updatedAt: Date.now() } : g
          ),
        }));
      },

      deleteGoal: (id) => {
        set((state) => ({
          goals: state.goals.filter((g) => g.id !== id),
        }));
      },

      markGoalComplete: (id) => {
        set((state) => ({
          goals: state.goals.map((g) =>
            g.id === id ? { ...g, isCompleted: true, updatedAt: Date.now() } : g
          ),
        }));
      },

      updateGoalProgress: (id, currentValue) => {
        set((state) => ({
          goals: state.goals.map((g) => {
            if (g.id === id) {
              const updated = { ...g, currentValue, updatedAt: Date.now() };
              // Check if goal is completed
              if (currentValue >= g.targetValue) {
                updated.isCompleted = true;
              }
              return updated;
            }
            return g;
          }),
        }));
      },
    }),
    {
      name: 'calculator-enhancements-storage',
    }
  )
);
