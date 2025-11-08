'use client';

import React from 'react';
import Link from 'next/link';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartBarIcon,
  ClockIcon,
  StarIcon,
  BookmarkIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { scenarios, history, favorites, goals } = useCalculatorEnhancements();
  
  // Get recent activity
  const recentScenarios = [...scenarios]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 5);
    
  const recentHistory = [...history]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 5);
    
  const activeGoals = goals.filter(g => !g.isCompleted);
  const completedGoals = goals.filter(g => g.isCompleted);
  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Dashboard
          </h1>
          <p className="text-gray-600">
            Track your calculations, saved scenarios, and financial goals
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Calculations
              </CardTitle>
              <ClockIcon className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{history.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Saved Scenarios
              </CardTitle>
              <BookmarkIcon className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{scenarios.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Favorite Tools
              </CardTitle>
              <StarIcon className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{favorites.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Goals
              </CardTitle>
              <TrophyIcon className="w-5 h-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeGoals.length}</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookmarkIcon className="w-5 h-5" />
                Recent Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentScenarios.length > 0 ? (
                <div className="space-y-3">
                  {recentScenarios.map((scenario) => (
                    <Link
                      key={scenario.id}
                      href={`/tools/${scenario.calculatorSlug}`}
                      className="block p-3 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <div className="font-medium text-sm">{scenario.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {scenario.calculatorTitle} • {new Date(scenario.timestamp).toLocaleDateString()}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-4">No saved scenarios yet</p>
              )}
              {scenarios.length > 5 && (
                <Link href="/tools">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All Scenarios
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
          
          {/* Active Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrophyIcon className="w-5 h-5" />
                Your Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeGoals.length > 0 ? (
                <div className="space-y-4">
                  {activeGoals.map((goal) => {
                    const progress = Math.min((goal.currentValue / goal.targetValue) * 100, 100);
                    return (
                      <div key={goal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{goal.title}</span>
                          <span className="text-xs text-gray-500">
                            {progress.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-600">
                          ${goal.currentValue.toLocaleString()} / ${goal.targetValue.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-sm py-4">No active goals</p>
              )}
              {completedGoals.length > 0 && (
                <p className="text-green-600 text-sm mt-4">
                  🎉 {completedGoals.length} goal{completedGoals.length > 1 ? 's' : ''} completed!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/tools">
                <Button variant="outline" className="w-full justify-start">
                  <ChartBarIcon className="w-5 h-5 mr-2" />
                  Browse All Tools
                </Button>
              </Link>
              <Link href="/favorites">
                <Button variant="outline" className="w-full justify-start">
                  <StarIcon className="w-5 h-5 mr-2" />
                  View Favorites
                </Button>
              </Link>
              <Link href="/tools/mortgage-calculator">
                <Button variant="outline" className="w-full justify-start">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Start Calculating
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
