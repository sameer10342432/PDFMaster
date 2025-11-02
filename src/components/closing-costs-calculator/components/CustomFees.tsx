
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomFeesProps {
  customOriginationFee: number;
  setCustomOriginationFee: (value: number) => void;
  customAppraisalFee: number;
  setCustomAppraisalFee: (value: number) => void;
  customInspectionFee: number;
  setCustomInspectionFee: (value: number) => void;
  customTitleInsurance: number;
  setCustomTitleInsurance: (value: number) => void;
  customAttorneyFees: number;
  setCustomAttorneyFees: (value: number) => void;
  customCommissionRate: number;
  setCustomCommissionRate: (value: number) => void;
}

export const CustomFees: React.FC<CustomFeesProps> = ({ 
  customOriginationFee, setCustomOriginationFee, 
  customAppraisalFee, setCustomAppraisalFee, 
  customInspectionFee, setCustomInspectionFee, 
  customTitleInsurance, setCustomTitleInsurance, 
  customAttorneyFees, setCustomAttorneyFees, 
  customCommissionRate, setCustomCommissionRate 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="customOriginationFee">Custom Origination Fee</Label>
        <Input id="customOriginationFee" type="number" value={customOriginationFee} onChange={(e) => setCustomOriginationFee(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="customAppraisalFee">Custom Appraisal Fee</Label>
        <Input id="customAppraisalFee" type="number" value={customAppraisalFee} onChange={(e) => setCustomAppraisalFee(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="customInspectionFee">Custom Inspection Fee</Label>
        <Input id="customInspectionFee" type="number" value={customInspectionFee} onChange={(e) => setCustomInspectionFee(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="customTitleInsurance">Custom Title Insurance</Label>
        <Input id="customTitleInsurance" type="number" value={customTitleInsurance} onChange={(e) => setCustomTitleInsurance(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="customAttorneyFees">Custom Attorney Fees</Label>
        <Input id="customAttorneyFees" type="number" value={customAttorneyFees} onChange={(e) => setCustomAttorneyFees(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="customCommissionRate">Custom Commission Rate (%)</Label>
        <Input id="customCommissionRate" type="number" value={customCommissionRate} onChange={(e) => setCustomCommissionRate(Number(e.target.value))} />
      </div>
    </div>
  );
};