'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface NotesPanelProps {
  notes: string;
  onNotesChange: (notes: string) => void;
}

export const NotesPanel: React.FC<NotesPanelProps> = ({ notes, onNotesChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <PencilSquareIcon className="w-5 h-5" />
          Notes & Annotations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-sm">
            Add your notes about this calculation:
          </Label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="e.g., Scenario for Property A on Main Street, client prefers 30-year term..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
            rows={isExpanded ? 8 : 3}
          />
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {notes.length} characters
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
