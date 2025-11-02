
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LoanDetailsProps {
  loanType: string;
  setLoanType: (value: string) => void;
  downPaymentPercent: number;
  setDownPaymentPercent: (value: number) => void;
  interestRate: number;
  setInterestRate: (value: number) => void;
  loanTerm: number;
  setLoanTerm: (value: number) => void;
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({ 
  loanType, setLoanType, 
  downPaymentPercent, setDownPaymentPercent, 
  interestRate, setInterestRate, 
  loanTerm, setLoanTerm 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="loanType">Loan Type</Label>
        <Select value={loanType} onValueChange={setLoanType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="conventional">Conventional</SelectItem>
            <SelectItem value="fha">FHA</SelectItem>
            <SelectItem value="va">VA</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="downPaymentPercent">Down Payment (%)</Label>
        <Input id="downPaymentPercent" type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="interestRate">Interest Rate (%)</Label>
        <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="loanTerm">Loan Term (Years)</Label>
        <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
      </div>
    </div>
  );
};