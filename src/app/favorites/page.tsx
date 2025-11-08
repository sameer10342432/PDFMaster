'use client';

import React from 'react';
import Link from 'next/link';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { Button } from '@/components/ui/button';
import { StarIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useCalculatorEnhancements();
  
  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <StarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Favorite Tools
            </h1>
            <p className="text-gray-600 mb-8">
              You haven't added any favorite tools yet. Browse our tools and click the star icon to save your favorites.
            </p>
            <Link href="/tools">
              <Button size="lg">Browse All Tools</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <StarIcon className="w-10 h-10 text-yellow-500" />
            Your Favorite Tools
          </h1>
          <p className="text-gray-600">
            Quick access to your {favorites.length} most-used calculators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => (
            <div
              key={favorite.slug}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-yellow-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {favorite.title}
                  </h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    {favorite.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFavorite(favorite.slug)}
                  className="text-gray-400 hover:text-red-600"
                  title="Remove from favorites"
                >
                  <TrashIcon className="w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                Added {new Date(favorite.addedAt).toLocaleDateString()}
              </p>
              
              <Link href={`/tools/${favorite.slug}`}>
                <Button className="w-full">
                  Open Calculator
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
