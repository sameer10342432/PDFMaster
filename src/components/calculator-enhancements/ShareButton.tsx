'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateShareLink, copyToClipboard, ExportData } from '@/lib/exportUtils';
import { ShareIcon, CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

interface ShareButtonProps {
  calculatorTitle: string;
  inputs: Record<string, any>;
  results: any[];
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  calculatorTitle,
  inputs,
  results,
}) => {
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const exportData: ExportData = {
    calculatorTitle,
    inputs,
    results,
    timestamp: Date.now(),
  };
  
  const shareLink = generateShareLink(exportData);
  
  const handleCopy = async () => {
    const success = await copyToClipboard(shareLink);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  if (!showShareDialog) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowShareDialog(true)}
        className="flex items-center gap-2"
      >
        <ShareIcon className="w-4 h-4" />
        Share Calculation
      </Button>
    );
  }
  
  return (
    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold">Share this calculation</Label>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowShareDialog(false)}
        >
          ✕
        </Button>
      </div>
      <p className="text-xs text-gray-600">
        Anyone with this link can view your calculation inputs and results.
      </p>
      <div className="flex gap-2">
        <Input
          value={shareLink}
          readOnly
          className="text-sm"
          onClick={(e) => e.currentTarget.select()}
        />
        <Button
          onClick={handleCopy}
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <DocumentDuplicateIcon className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const subject = encodeURIComponent(`Check out my ${calculatorTitle} calculation`);
            const body = encodeURIComponent(`I used Property Tools to calculate:\n\n${shareLink}`);
            window.open(`mailto:?subject=${subject}&body=${body}`);
          }}
        >
          Email Link
        </Button>
      </div>
    </div>
  );
};
