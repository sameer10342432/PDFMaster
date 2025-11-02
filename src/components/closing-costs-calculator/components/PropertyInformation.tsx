
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PropertyInformationProps {
  purchasePrice: number;
  setPurchasePrice: (value: number) => void;
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  transactionType: string;
  setTransactionType: (value: string) => void;
}

export const PropertyInformation: React.FC<PropertyInformationProps> = ({ 
  purchasePrice, setPurchasePrice, 
  loanAmount, setLoanAmount, 
  propertyType, setPropertyType, 
  state, setState, 
  transactionType, setTransactionType 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="purchasePrice">Purchase Price</Label>
        <Input id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="loanAmount">Loan Amount</Label>
        <Input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
      </div>
      <div>
        <Label htmlFor="propertyType">Property Type</Label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single-family">Single Family</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="multi-family">Multi-Family</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Select value={state} onValueChange={setState}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="california">California</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="florida">Florida</SelectItem>
            <SelectItem value="texas">Texas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="transactionType">Transaction Type</Label>
        <Select value={transactionType} onValueChange={setTransactionType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="purchase">Purchase</SelectItem>
            <SelectItem value="sale">Sale</SelectItem>
            <SelectItem value="purchase-and-sale">Purchase and Sale</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};