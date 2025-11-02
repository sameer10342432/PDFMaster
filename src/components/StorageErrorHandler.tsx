'use client';

import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';

interface StorageStats {
  usage: { used: number; available: number; percentage: number };
  itemCount: number;
  largestItems: Array<{ key: string; size: number }>;
}

export default function StorageErrorHandler() {
  const [showWarning, setShowWarning] = useState(false);
  const [storageStats, setStorageStats] = useState<StorageStats | null>(null);

  useEffect(() => {
    const checkStorage = () => {
      const stats = storage.getStorageStats();
      setStorageStats(stats);
      
      // Show warning if storage is over 80% full
      if (stats.usage.percentage > 80) {
        setShowWarning(true);
      }
    };

    // Check storage on mount
    checkStorage();

    // Check storage periodically
    const interval = setInterval(checkStorage, 30000); // Every 30 seconds

    // Listen for storage events
    const handleStorageError = () => {
      setShowWarning(true);
      checkStorage();
    };

    window.addEventListener('storageQuotaExceeded', handleStorageError as EventListener);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storageQuotaExceeded', handleStorageError as EventListener);
    };
  }, []);

  const handleCleanup = () => {
    // Trigger manual cleanup
    const adminBlogs = storage.getItem('adminBlogs');
    if (adminBlogs) {
      try {
        const blogs = JSON.parse(adminBlogs);
        const recentBlogs = blogs.slice(0, 20); // Keep only 20 most recent
        storage.saveBlogsWithCleanup(recentBlogs);
        
        // Update stats
        const newStats = storage.getStorageStats();
        setStorageStats(newStats);
        
        if (newStats.usage.percentage < 80) {
          setShowWarning(false);
        }
        
        alert(`Cleanup completed! Kept ${recentBlogs.length} most recent blogs. Storage usage: ${newStats.usage.percentage.toFixed(1)}%`);
      } catch (error) {
        console.error('Manual cleanup failed:', error);
        alert('Cleanup failed. Please try refreshing the page.');
      }
    }
  };

  if (!showWarning || !storageStats) return null;

  return (
    <div className="fixed top-4 right-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg z-50 max-w-md">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Storage Almost Full
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Your browser storage is {storageStats.usage.percentage.toFixed(1)}% full 
              ({Math.round(storageStats.usage.used / 1024)} KB used).
            </p>
            <p className="mt-1">
              Consider cleaning up old blog posts to free up space.
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={handleCleanup}
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Clean Up Now
            </button>
            <button
              onClick={() => setShowWarning(false)}
              className="text-yellow-600 hover:text-yellow-800 px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}