// Storage utility with error handling and quota management
export class StorageManager {
  private static readonly MAX_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB limit
  private static readonly STORAGE_KEYS = {
    ADMIN_BLOGS: 'adminBlogs',
    BLOG_POSTS: 'blogPosts',
    ADMIN_AUTH: 'adminAuth'
  };

  // Check available storage space
  static getStorageUsage(): { used: number; available: number; percentage: number } {
    let used = 0;
    try {
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          used += (localStorage[key] as string).length + key.length;
        }
      }
    } catch (error) {
      console.warn('Could not calculate storage usage:', error);
    }

    const available = this.MAX_STORAGE_SIZE - used;
    const percentage = (used / this.MAX_STORAGE_SIZE) * 100;

    return { used, available, percentage };
  }

  // Safe localStorage setItem with error handling
  static setItem(key: string, value: string): boolean {
    try {
      // Check if we're approaching storage limit
      const usage = this.getStorageUsage();
      const newDataSize = value.length + key.length;
      
      if (usage.used + newDataSize > this.MAX_STORAGE_SIZE) {
        console.warn('Storage quota approaching limit. Attempting cleanup...');
        this.cleanupOldData();
      }

      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      if (error instanceof DOMException && error.code === 22) {
        console.error('Storage quota exceeded. Attempting emergency cleanup...');
        
        // Dispatch custom event to notify UI components
        window.dispatchEvent(new CustomEvent('storageQuotaExceeded', {
          detail: { error: error.message }
        }));
        
        this.emergencyCleanup();
        
        // Try again after cleanup
        try {
          localStorage.setItem(key, value);
          return true;
        } catch (retryError) {
          console.error('Failed to save data even after cleanup:', retryError);
          this.showStorageError();
          return false;
        }
      } else {
        console.error('Storage error:', error);
        return false;
      }
    }
  }

  // Safe localStorage getItem
  static getItem(key: string): string | null {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return null;
      }
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  }

  // Safe localStorage removeItem
  static removeItem(key: string): boolean {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false;
      }
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from storage:', error);
      return false;
    }
  }

  // Regular cleanup of old data
  private static cleanupOldData(): void {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }
      
      console.log('Performing storage cleanup...');
      
      // Clean up admin blogs - keep only 25 most recent
      const adminBlogs = localStorage.getItem(this.STORAGE_KEYS.ADMIN_BLOGS);
      if (adminBlogs) {
        try {
          const blogs: { id: string }[] = JSON.parse(adminBlogs);
          if (blogs.length > 25) {
            const recentBlogs = blogs.slice(0, 25);
            localStorage.setItem(this.STORAGE_KEYS.ADMIN_BLOGS, JSON.stringify(recentBlogs));
            localStorage.setItem(this.STORAGE_KEYS.BLOG_POSTS, JSON.stringify(recentBlogs));
            console.log(`Cleaned up blogs: kept ${recentBlogs.length} out of ${blogs.length}`);
          }
        } catch (parseError) {
          console.error('Error parsing blogs during cleanup:', parseError);
        }
      }

      // Clean up any other large items
      const itemsToCheck: { key: string; size: number }[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !Object.values(this.STORAGE_KEYS).includes(key)) {
          const value = localStorage.getItem(key);
          if (value && value.length > 10000) { // Items larger than 10KB
            itemsToCheck.push({ key, size: value.length });
          }
        }
      }

      // Remove largest non-essential items
      itemsToCheck.sort((a, b) => b.size - a.size);
      itemsToCheck.slice(0, 3).forEach(item => {
        localStorage.removeItem(item.key);
        console.log(`Removed large item: ${item.key} (${item.size} bytes)`);
      });

    } catch (error) {
      console.error('Cleanup failed:', error);
    }
  }

  // Emergency cleanup when storage is full
  private static emergencyCleanup(): void {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }
      
      console.warn('Performing emergency storage cleanup...');
      
      // Keep only essential data
      const essentialData: { [key: string]: string } = {};
      
      // Preserve admin auth
      const adminAuth = localStorage.getItem(this.STORAGE_KEYS.ADMIN_AUTH);
      if (adminAuth) {
        essentialData[this.STORAGE_KEYS.ADMIN_AUTH] = adminAuth;
      }

      // Preserve most recent blogs (limit to 10)
      const adminBlogs = localStorage.getItem(this.STORAGE_KEYS.ADMIN_BLOGS);
      if (adminBlogs) {
        try {
          const blogs: { id: string }[] = JSON.parse(adminBlogs);
          const recentBlogs = blogs.slice(0, 10); // Keep only 10 most recent
          essentialData[this.STORAGE_KEYS.ADMIN_BLOGS] = JSON.stringify(recentBlogs);
          essentialData[this.STORAGE_KEYS.BLOG_POSTS] = JSON.stringify(recentBlogs);
        } catch (parseError) {
          console.error('Error parsing blogs during emergency cleanup:', parseError);
        }
      }

      // Clear all storage
      localStorage.clear();

      // Restore essential data
      Object.entries(essentialData).forEach(([key, value]) => {
        try {
          localStorage.setItem(key, value);
        } catch (error) {
          console.error(`Failed to restore ${key}:`, error);
        }
      });

      console.log('Emergency cleanup completed');
    } catch (error) {
      console.error('Emergency cleanup failed:', error);
    }
  }

  // Show user-friendly error message
  private static showStorageError(): void {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 400px;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    
    notification.innerHTML = `
      <div style="font-weight: 600; margin-bottom: 8px;">Storage Full</div>
      <div style="font-size: 14px; opacity: 0.9;">
        Your browser storage is full. Some data may not be saved. 
        Please clear some space or contact support.
      </div>
      <button onclick="this.parentElement.remove()" style="
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        margin-top: 8px;
        cursor: pointer;
      ">Dismiss</button>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 10000);
  }

  // Utility method to save blogs with automatic cleanup
  static saveBlogsWithCleanup(blogs: { id: string; title: string; content: string; date: string }[]): boolean {
    const blogsJson = JSON.stringify(blogs);
    
    // Try to save to both keys
    const adminSuccess = this.setItem(this.STORAGE_KEYS.ADMIN_BLOGS, blogsJson);
    const postsSuccess = this.setItem(this.STORAGE_KEYS.BLOG_POSTS, blogsJson);
    
    return adminSuccess && postsSuccess;
  }

  // Get storage statistics for admin dashboard
  static getStorageStats(): {
    usage: { used: number; available: number; percentage: number };
    itemCount: number;
    largestItems: Array<{ key: string; size: number }>;
  } {
    const usage = this.getStorageUsage();
    let itemCount = 0;
    const items: Array<{ key: string; size: number }> = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          const value = localStorage.getItem(key) || '';
          items.push({ key, size: key.length + value.length });
          itemCount++;
        }
      }
    } catch (error) {
      console.error('Error getting storage stats:', error);
    }

    // Sort by size, largest first
    const largestItems = items.sort((a, b) => b.size - a.size).slice(0, 5);

    return { usage, itemCount, largestItems };
  }
}

// Export convenience functions
export const storage = {
  setItem: StorageManager.setItem.bind(StorageManager),
  getItem: StorageManager.getItem.bind(StorageManager),
  removeItem: StorageManager.removeItem.bind(StorageManager),
  saveBlogsWithCleanup: StorageManager.saveBlogsWithCleanup.bind(StorageManager),
  getStorageStats: StorageManager.getStorageStats.bind(StorageManager),
  getStorageUsage: StorageManager.getStorageUsage.bind(StorageManager)
};