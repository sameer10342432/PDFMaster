'use client';

import React from 'react';
import { useCalculatorEnhancements } from '@/store/calculatorEnhancementsStore';
import { Button } from '@/components/ui/button';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

interface FavoriteButtonProps {
  slug: string;
  title: string;
  category: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  slug,
  title,
  category,
}) => {
  const { isFavorite, addFavorite, removeFavorite } = useCalculatorEnhancements();
  const favorite = isFavorite(slug);
  
  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(slug);
    } else {
      addFavorite({ slug, title, category });
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleFavorite}
      className="flex items-center gap-2"
      title={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorite ? (
        <StarSolid className="w-5 h-5 text-yellow-500" />
      ) : (
        <StarOutline className="w-5 h-5 text-gray-400" />
      )}
      {favorite ? 'Favorited' : 'Add to Favorites'}
    </Button>
  );
};
