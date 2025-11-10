'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Home, Sparkles, Copy, CheckCircle, Info, Wand2, BookOpen, DollarSign } from 'lucide-react';

interface GeneratedOfferLetter {
  subject: string;
  letter: string;
  keyTerms: string[];
  tone: string;
  wordCount: number;
}

export default function AINegotiationOfferLetterGenerator() {
  const [buyerName, setBuyerName] = useState<string>('John Smith');
  const [buyerEmail, setBuyerEmail] = useState<string>('john.smith@email.com');
  const [buyerPhone, setBuyerPhone] = useState<string>('(555) 123-4567');
  const [sellerName, setSellerName] = useState<string>('');
  const [propertyAddress, setPropertyAddress] = useState<string>('');
  const [propertyCity, setPropertyCity] = useState<string>('');
  const [propertyState, setPropertyState] = useState<string>('');
  const [listingPrice, setListingPrice] = useState<number>(450000);
  const [offerPrice, setOfferPrice] = useState<number>(440000);
  const [earnestMoney, setEarnestMoney] = useState<number>(10000);
  const [downPayment, setDownPayment] = useState<number>(90000);
  const [financingType, setFinancingType] = useState<string>('conventional');
  const [loanAmount, setLoanAmount] = useState<number>(350000);
  const [preApproved, setPreApproved] = useState<boolean>(true);
  const [cashBuyer, setCashBuyer] = useState<boolean>(false);
  const [inspectionPeriod, setInspectionPeriod] = useState<number>(10);
  const [inspectionContingency, setInspectionContingency] = useState<boolean>(true);
  const [financingContingency, setFinancingContingency] = useState<boolean>(true);
  const [appraisalContingency, setAppraisalContingency] = useState<boolean>(true);
  const [homeSellingContingency, setHomeSellingContingency] = useState<boolean>(false);
  const [closingDate, setClosingDate] = useState<string>('30');
  const [closingCostAssistance, setClosingCostAssistance] = useState<number>(0);
  const [escalationClause, setEscalationClause] = useState<boolean>(false);
  const [escalationMax, setEscalationMax] = useState<number>(460000);
  const [escalationIncrement, setEscalationIncrement] = useState<number>(2000);
  const [includePersonalLetter, setIncludePersonalLetter] = useState<boolean>(true);
  const [personalStory, setPersonalStory] = useState<string>('We fell in love with the beautiful backyard and can envision our family making wonderful memories here.');
  const [additionalTerms, setAdditionalTerms] = useState<string>('');
  const [tone, setTone] = useState<string>('professional');
  const [competitiveness, setCompetitiveness] = useState<string>('balanced');

  const [generatedLetter, setGeneratedLetter] = useState<GeneratedOfferLetter | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const generateOfferLetter = () => {
    const toneStyles: { [key: string]: { greeting: string; closing: string; style: string } } = {
      'professional': {
        greeting: 'Dear',
        closing: 'Respectfully',
        style: 'formal and professional',
      },
      'friendly': {
        greeting: 'Hello',
        closing: 'Warm regards',
        style: 'warm and approachable',
      },
      'competitive': {
        greeting: 'Dear',
        closing: 'Sincerely',
        style: 'confident and direct',
      },
    };

    const selectedStyle = toneStyles[tone] || toneStyles['professional'];

    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const offerPercentage = ((offerPrice / listingPrice) * 100).toFixed(1);
    const isFullPrice = offerPrice >= listingPrice;
    const downPaymentPercent = ((downPayment / offerPrice) * 100).toFixed(0);

    let subject = '';
    if (isFullPrice) {
      subject = `Full-Price Offer on ${propertyAddress} - ${buyerName}`;
    } else if (offerPercentage >= '98') {
      subject = `Strong Offer on ${propertyAddress} - ${buyerName}`;
    } else {
      subject = `Purchase Offer for ${propertyAddress} - ${buyerName}`;
    }

    let letterParts: string[] = [];

    letterParts.push(`${selectedStyle.greeting} ${sellerName || 'Seller'},\n`);

    const openingTemplates = {
      'professional': `I am writing to formally submit an offer to purchase the property located at ${propertyAddress}, ${propertyCity}, ${propertyState}. After careful consideration and evaluation, I am prepared to present the following terms for your review.`,
      'friendly': `I hope this letter finds you well! I am excited to submit an offer on your beautiful property at ${propertyAddress}. My family and I were truly impressed during our showing, and we would love the opportunity to make this house our home.`,
      'competitive': `I am submitting a strong offer to purchase your property at ${propertyAddress}, ${propertyCity}, ${propertyState}. I am a serious buyer ${cashBuyer ? 'with cash in hand' : 'with financing already secured'}, ready to move forward quickly and efficiently.`,
    };

    letterParts.push(openingTemplates[tone as keyof typeof openingTemplates] || openingTemplates['professional']);
    letterParts.push('\n\n**OFFER TERMS:**\n');

    letterParts.push(`**Purchase Price:** ${formatCurrency(offerPrice)}`);
    if (isFullPrice) {
      letterParts.push(' (Full asking price)');
    } else if (offerPercentage >= '98') {
      letterParts.push(` (${offerPercentage}% of asking price)`);
    }
    letterParts.push('\n');

    letterParts.push(`**Earnest Money Deposit:** ${formatCurrency(earnestMoney)}\n`);

    if (cashBuyer) {
      letterParts.push(`**Financing:** All cash offer - no financing contingency required\n`);
    } else {
      letterParts.push(`**Down Payment:** ${formatCurrency(downPayment)} (${downPaymentPercent}%)\n`);
      letterParts.push(`**Financing Type:** ${financingType.charAt(0).toUpperCase() + financingType.slice(1)} loan\n`);
      letterParts.push(`**Loan Amount:** ${formatCurrency(loanAmount)}\n`);
      if (preApproved) {
        letterParts.push(`**Pre-Approval Status:** Fully pre-approved with lender letter attached\n`);
      }
    }

    letterParts.push(`**Proposed Closing Date:** ${closingDate} days from acceptance\n`);

    if (closingCostAssistance > 0) {
      letterParts.push(`**Seller Assistance:** Requesting ${formatCurrency(closingCostAssistance)} toward closing costs\n`);
    }

    letterParts.push('\n**CONTINGENCIES:**\n');

    const contingencies: string[] = [];
    if (inspectionContingency) {
      contingencies.push(`Home Inspection (${inspectionPeriod}-day period)`);
    }
    if (appraisalContingency && !cashBuyer) {
      contingencies.push('Property Appraisal');
    }
    if (financingContingency && !cashBuyer) {
      contingencies.push('Mortgage Financing');
    }
    if (homeSellingContingency) {
      contingencies.push('Sale of Current Home');
    }

    if (contingencies.length === 0) {
      letterParts.push('This is a clean offer with no contingencies, demonstrating my commitment and readiness to proceed.\n');
    } else {
      letterParts.push(contingencies.map(c => `- ${c}`).join('\n') + '\n');
    }

    if (escalationClause) {
      letterParts.push(`\n**ESCALATION CLAUSE:**\n`);
      letterParts.push(`I am including an escalation clause to remain competitive. I will increase my offer by ${formatCurrency(escalationIncrement)} above any competing offer, up to a maximum price of ${formatCurrency(escalationMax)}.\n`);
    }

    if (additionalTerms) {
      letterParts.push(`\n**ADDITIONAL TERMS:**\n${additionalTerms}\n`);
    }

    if (includePersonalLetter && personalStory) {
      letterParts.push(`\n**A PERSONAL NOTE:**\n`);
      const personalIntros = {
        'professional': 'I wanted to share why this property is particularly meaningful to me:',
        'friendly': 'I wanted to take a moment to share what this home means to my family:',
        'competitive': 'Beyond the financial terms, I want you to know why I am the right buyer for this home:',
      };
      letterParts.push(personalIntros[tone as keyof typeof personalIntros] || personalIntros['professional']);
      letterParts.push('\n\n');
      letterParts.push(personalStory);
      letterParts.push('\n');
    }

    const closingTemplates = {
      'professional': `I believe this offer represents strong terms and demonstrates my genuine interest in your property. I am prepared to move forward promptly and work collaboratively to ensure a smooth transaction. I look forward to your favorable consideration.`,
      'friendly': `Thank you so much for considering our offer. We truly hope to have the opportunity to make this wonderful house our home. We are ready to work with you to make this process as smooth and stress-free as possible.`,
      'competitive': `This offer reflects my serious commitment to purchasing your property. I am ready to proceed immediately and can accommodate your preferred timeline. I am confident this represents a strong offer and hope we can move forward together.`,
    };

    letterParts.push('\n');
    letterParts.push(closingTemplates[tone as keyof typeof closingTemplates] || closingTemplates['professional']);

    letterParts.push(`\n\n${selectedStyle.closing},\n${buyerName}\n${buyerEmail}\n${buyerPhone}\n`);

    letterParts.push(`\n${today}`);

    const letter = letterParts.join('');

    const keyTerms = [
      `Offer: ${formatCurrency(offerPrice)}`,
      `Earnest Money: ${formatCurrency(earnestMoney)}`,
      cashBuyer ? 'All Cash Offer' : `${downPaymentPercent}% Down Payment`,
      `Close in ${closingDate} Days`,
      contingencies.length === 0 ? 'No Contingencies' : `${contingencies.length} Contingencies`,
    ];

    if (escalationClause) {
      keyTerms.push(`Escalation to ${formatCurrency(escalationMax)}`);
    }

    if (preApproved && !cashBuyer) {
      keyTerms.push('Pre-Approved');
    }

    const wordCount = letter.split(' ').length;

    const result: GeneratedOfferLetter = {
      subject,
      letter,
      keyTerms,
      tone,
      wordCount,
    };

    setGeneratedLetter(result);
    setCopied(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCashBuyerToggle = (checked: boolean) => {
    setCashBuyer(checked);
    if (checked) {
      setFinancingContingency(false);
      setAppraisalContingency(false);
      setDownPayment(offerPrice);
      setLoanAmount(0);
    } else {
      setFinancingContingency(true);
      setAppraisalContingency(true);
      const calculatedDown = Math.round(offerPrice * 0.2);
      setDownPayment(calculatedDown);
      setLoanAmount(offerPrice - calculatedDown);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-full">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Negotiation Offer Letter Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional, compelling real estate purchase offer letters instantly. Generate winning 
            offers with proper terms, contingencies, and negotiation strategies tailored to your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Offer Letter Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="details">Offer Details</TabsTrigger>
                    <TabsTrigger value="terms">Terms</TabsTrigger>
                    <TabsTrigger value="contingencies">Contingencies</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="article" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Home className="h-5 w-5" />
                          Property Information
                        </h3>
                      </div>
                      <div>
                        <Label htmlFor="propertyAddress">Property Address</Label>
                        <Input
                          id="propertyAddress"
                          value={propertyAddress}
                          onChange={(e) => setPropertyAddress(e.target.value)}
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyCity">City</Label>
                        <Input
                          id="propertyCity"
                          value={propertyCity}
                          onChange={(e) => setPropertyCity(e.target.value)}
                          placeholder="Austin"
                        />
                      </div>
                      <div>
                        <Label htmlFor="propertyState">State</Label>
                        <Input
                          id="propertyState"
                          value={propertyState}
                          onChange={(e) => setPropertyState(e.target.value)}
                          placeholder="TX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="listingPrice">Listing Price</Label>
                        <Input
                          id="listingPrice"
                          type="number"
                          value={listingPrice}
                          onChange={(e) => setListingPrice(Number(e.target.value))}
                          placeholder="450000"
                        />
                      </div>

                      <div className="md:col-span-2 mt-4">
                        <Separator />
                        <h3 className="text-lg font-semibold my-3">Buyer Information</h3>
                      </div>
                      <div>
                        <Label htmlFor="buyerName">Your Name</Label>
                        <Input
                          id="buyerName"
                          value={buyerName}
                          onChange={(e) => setBuyerName(e.target.value)}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="buyerEmail">Email Address</Label>
                        <Input
                          id="buyerEmail"
                          type="email"
                          value={buyerEmail}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                          placeholder="john.smith@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="buyerPhone">Phone Number</Label>
                        <Input
                          id="buyerPhone"
                          value={buyerPhone}
                          onChange={(e) => setBuyerPhone(e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sellerName">Seller Name (if known)</Label>
                        <Input
                          id="sellerName"
                          value={sellerName}
                          onChange={(e) => setSellerName(e.target.value)}
                          placeholder="Leave blank if unknown"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="terms" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <DollarSign className="h-5 w-5" />
                          Financial Terms
                        </h3>
                      </div>
                      <div>
                        <Label htmlFor="offerPrice">Offer Price</Label>
                        <Input
                          id="offerPrice"
                          type="number"
                          value={offerPrice}
                          onChange={(e) => setOfferPrice(Number(e.target.value))}
                          placeholder="440000"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          {((offerPrice / listingPrice) * 100).toFixed(1)}% of listing price
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="earnestMoney">Earnest Money Deposit</Label>
                        <Input
                          id="earnestMoney"
                          type="number"
                          value={earnestMoney}
                          onChange={(e) => setEarnestMoney(Number(e.target.value))}
                          placeholder="10000"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          {((earnestMoney / offerPrice) * 100).toFixed(1)}% of offer price
                        </p>
                      </div>

                      <div className="md:col-span-2 flex items-center space-x-2 p-3 bg-blue-50 rounded-md">
                        <input
                          type="checkbox"
                          id="cashBuyer"
                          checked={cashBuyer}
                          onChange={(e) => handleCashBuyerToggle(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="cashBuyer" className="font-semibold">
                          All Cash Offer (No Financing Required)
                        </Label>
                      </div>

                      {!cashBuyer && (
                        <>
                          <div>
                            <Label htmlFor="downPayment">Down Payment</Label>
                            <Input
                              id="downPayment"
                              type="number"
                              value={downPayment}
                              onChange={(e) => {
                                const down = Number(e.target.value);
                                setDownPayment(down);
                                setLoanAmount(offerPrice - down);
                              }}
                              placeholder="90000"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              {((downPayment / offerPrice) * 100).toFixed(0)}% down
                            </p>
                          </div>
                          <div>
                            <Label htmlFor="loanAmount">Loan Amount</Label>
                            <Input
                              id="loanAmount"
                              type="number"
                              value={loanAmount}
                              onChange={(e) => {
                                const loan = Number(e.target.value);
                                setLoanAmount(loan);
                                setDownPayment(offerPrice - loan);
                              }}
                              placeholder="350000"
                            />
                          </div>
                          <div>
                            <Label htmlFor="financingType">Financing Type</Label>
                            <select
                              id="financingType"
                              value={financingType}
                              onChange={(e) => setFinancingType(e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded-md"
                            >
                              <option value="conventional">Conventional</option>
                              <option value="FHA">FHA</option>
                              <option value="VA">VA</option>
                              <option value="USDA">USDA</option>
                              <option value="jumbo">Jumbo</option>
                            </select>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="preApproved"
                              checked={preApproved}
                              onChange={(e) => setPreApproved(e.target.checked)}
                              className="rounded"
                            />
                            <Label htmlFor="preApproved">Pre-Approved with Lender</Label>
                          </div>
                        </>
                      )}

                      <div className="md:col-span-2 mt-4">
                        <Separator />
                        <h3 className="text-lg font-semibold my-3">Timeline & Costs</h3>
                      </div>
                      <div>
                        <Label htmlFor="closingDate">Closing Timeline (Days)</Label>
                        <Input
                          id="closingDate"
                          value={closingDate}
                          onChange={(e) => setClosingDate(e.target.value)}
                          placeholder="30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="closingCostAssistance">Closing Cost Assistance Requested</Label>
                        <Input
                          id="closingCostAssistance"
                          type="number"
                          value={closingCostAssistance}
                          onChange={(e) => setClosingCostAssistance(Number(e.target.value))}
                          placeholder="0"
                        />
                      </div>

                      <div className="md:col-span-2 mt-4">
                        <Separator />
                        <h3 className="text-lg font-semibold my-3">Escalation Clause</h3>
                      </div>
                      <div className="md:col-span-2 flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="escalationClause"
                          checked={escalationClause}
                          onChange={(e) => setEscalationClause(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="escalationClause">Include Escalation Clause</Label>
                      </div>
                      {escalationClause && (
                        <>
                          <div>
                            <Label htmlFor="escalationMax">Maximum Price</Label>
                            <Input
                              id="escalationMax"
                              type="number"
                              value={escalationMax}
                              onChange={(e) => setEscalationMax(Number(e.target.value))}
                              placeholder="460000"
                            />
                          </div>
                          <div>
                            <Label htmlFor="escalationIncrement">Increment Amount</Label>
                            <Input
                              id="escalationIncrement"
                              type="number"
                              value={escalationIncrement}
                              onChange={(e) => setEscalationIncrement(Number(e.target.value))}
                              placeholder="2000"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="contingencies" className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Offer Contingencies</h3>
                      <p className="text-sm text-gray-600">
                        Select which contingencies to include in your offer. Fewer contingencies make your 
                        offer more competitive but provide less protection.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
                          <input
                            type="checkbox"
                            id="inspectionContingency"
                            checked={inspectionContingency}
                            onChange={(e) => setInspectionContingency(e.target.checked)}
                            className="rounded"
                          />
                          <div className="flex-1">
                            <Label htmlFor="inspectionContingency" className="font-semibold">
                              Home Inspection Contingency
                            </Label>
                            <p className="text-sm text-gray-600">
                              Allows you to inspect the property and renegotiate or withdraw if issues are found.
                            </p>
                          </div>
                        </div>
                        {inspectionContingency && (
                          <div className="ml-8">
                            <Label htmlFor="inspectionPeriod">Inspection Period (Days)</Label>
                            <Input
                              id="inspectionPeriod"
                              type="number"
                              value={inspectionPeriod}
                              onChange={(e) => setInspectionPeriod(Number(e.target.value))}
                              placeholder="10"
                              className="max-w-xs"
                            />
                          </div>
                        )}

                        {!cashBuyer && (
                          <>
                            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
                              <input
                                type="checkbox"
                                id="financingContingency"
                                checked={financingContingency}
                                onChange={(e) => setFinancingContingency(e.target.checked)}
                                className="rounded"
                              />
                              <div className="flex-1">
                                <Label htmlFor="financingContingency" className="font-semibold">
                                  Financing Contingency
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Protects you if you cannot secure mortgage financing.
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
                              <input
                                type="checkbox"
                                id="appraisalContingency"
                                checked={appraisalContingency}
                                onChange={(e) => setAppraisalContingency(e.target.checked)}
                                className="rounded"
                              />
                              <div className="flex-1">
                                <Label htmlFor="appraisalContingency" className="font-semibold">
                                  Appraisal Contingency
                                </Label>
                                <p className="text-sm text-gray-600">
                                  Allows you to renegotiate if the property appraises for less than the offer price.
                                </p>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
                          <input
                            type="checkbox"
                            id="homeSellingContingency"
                            checked={homeSellingContingency}
                            onChange={(e) => setHomeSellingContingency(e.target.checked)}
                            className="rounded"
                          />
                          <div className="flex-1">
                            <Label htmlFor="homeSellingContingency" className="font-semibold">
                              Home Sale Contingency
                            </Label>
                            <p className="text-sm text-gray-600">
                              Requires you to sell your current home before completing this purchase.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div>
                        <Label htmlFor="additionalTerms">Additional Terms or Conditions</Label>
                        <Textarea
                          id="additionalTerms"
                          value={additionalTerms}
                          onChange={(e) => setAdditionalTerms(e.target.value)}
                          placeholder="Any special terms, inclusions, or exclusions you want to specify..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="tone">Letter Tone</Label>
                        <select
                          id="tone"
                          value={tone}
                          onChange={(e) => setTone(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="professional">Professional - Formal and business-like</option>
                          <option value="friendly">Friendly - Warm and personable</option>
                          <option value="competitive">Competitive - Confident and direct</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="competitiveness">Offer Competitiveness</Label>
                        <select
                          id="competitiveness"
                          value={competitiveness}
                          onChange={(e) => setCompetitiveness(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="conservative">Conservative - Below asking with contingencies</option>
                          <option value="balanced">Balanced - Fair price with reasonable terms</option>
                          <option value="aggressive">Aggressive - Strong price with minimal contingencies</option>
                        </select>
                      </div>

                      <Separator className="my-4" />

                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Personal Touch</h3>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="includePersonalLetter"
                            checked={includePersonalLetter}
                            onChange={(e) => setIncludePersonalLetter(e.target.checked)}
                            className="rounded"
                          />
                          <Label htmlFor="includePersonalLetter">
                            Include Personal Letter to Seller
                          </Label>
                        </div>
                        {includePersonalLetter && (
                          <div>
                            <Label htmlFor="personalStory">Personal Story/Connection</Label>
                            <Textarea
                              id="personalStory"
                              value={personalStory}
                              onChange={(e) => setPersonalStory(e.target.value)}
                              placeholder="Share why you love this home and what it means to you..."
                              rows={4}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              A personal touch can help your offer stand out emotionally, especially in competitive markets.
                            </p>
                          </div>
                        )}
                      </div>

                      <Separator className="my-6" />

                      <Button 
                        onClick={generateOfferLetter} 
                        className="w-full bg-indigo-600 hover:bg-indigo-700"
                        size="lg"
                      >
                        <Wand2 className="mr-2 h-5 w-5" />
                        Generate Offer Letter
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="article" className="space-y-4">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Crafting Winning Real Estate Offer Letters</h2>
                      
                      <p className="text-gray-700 mb-4">
                        A well-crafted offer letter can be the difference between landing your dream home and losing out 
                        to competing buyers. In today's competitive real estate market, understanding how to structure 
                        and present your offer is crucial for success. This comprehensive guide will help you create 
                        compelling offer letters that stand out.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Understanding Offer Letter Components</h3>
                      
                      <p className="text-gray-700 mb-3">
                        <strong>Purchase Price:</strong> The most critical element of any offer. Research comparable sales 
                        in the area to determine a competitive yet reasonable offer price. In hot markets, offering at or 
                        above asking price may be necessary, while in slower markets, you may have room to negotiate below 
                        the listing price. Consider the property's time on market, condition, and any necessary repairs when 
                        determining your offer amount.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Earnest Money Deposit:</strong> This demonstrates your serious intent to purchase. Typically 
                        1-3% of the purchase price, a larger earnest money deposit shows stronger commitment and can make 
                        your offer more attractive. This money is held in escrow and applied to your down payment or closing 
                        costs at closing. Be aware that you may forfeit this deposit if you breach the contract.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Financing Terms:</strong> Clearly outline how you plan to pay for the property. Cash offers 
                        are most attractive as they eliminate financing risk and often close faster. If financing, specify 
                        the loan type (conventional, FHA, VA, etc.), down payment percentage, and include a pre-approval 
                        letter from your lender. Pre-approval (not just pre-qualification) significantly strengthens your 
                        offer by proving your ability to secure financing.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Closing Timeline:</strong> The period between offer acceptance and closing. Typical timelines 
                        range from 30-45 days for financed purchases, or as quick as 7-14 days for cash deals. Consider the 
                        seller's needs - some may prefer a quick close, while others need more time to find their next home. 
                        Flexibility on timing can make your offer more appealing.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Strategic Use of Contingencies</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Inspection Contingency:</strong> Allows you to hire a professional inspector to evaluate the 
                        property's condition. Standard inspection periods are 7-14 days. This contingency protects you from 
                        unknown defects but can make your offer less competitive. In hot markets, some buyers waive this 
                        contingency or agree to inspect for informational purposes only. However, this carries significant 
                        risk and should only be considered after thorough due diligence.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Financing Contingency:</strong> Protects you if you cannot secure the necessary loan. This 
                        gives you an "out" if your financing falls through, allowing you to recover your earnest money. 
                        Lenders typically require 30-45 days to process mortgage applications. While this contingency protects 
                        you, it makes your offer less appealing than a cash offer or one with financing already secured.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Appraisal Contingency:</strong> Allows renegotiation if the property appraises for less than 
                        your offer price. This is crucial protection, especially in rapidly appreciating markets where you 
                        might overpay. If the appraisal comes in low, you can either renegotiate the price, make up the 
                        difference in cash, or walk away. Some competitive buyers waive this contingency but should be prepared 
                        to cover any appraisal gap.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Home Sale Contingency:</strong> Makes your purchase dependent on selling your current home. 
                        While this protects you from owning two properties simultaneously, it's the least attractive contingency 
                        to sellers. Many sellers won't accept offers with this contingency unless the buyer's home is already 
                        under contract or in a hot market where it's expected to sell quickly.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Escalation Clauses: When and How to Use Them</h3>

                      <p className="text-gray-700 mb-4">
                        An escalation clause automatically increases your offer by a specified increment above any competing 
                        offer, up to a maximum price. For example: "I offer $440,000, but will increase my offer by $2,000 
                        above any competing offer, up to a maximum of $460,000." This strategy works well in competitive 
                        markets where multiple offers are expected. However, it reveals your maximum price to the seller, 
                        potentially costing you money if no competing offers materialize. Use escalation clauses strategically 
                        and consider whether offering your best price upfront might be more effective.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Power of Personal Letters</h3>

                      <p className="text-gray-700 mb-3">
                        Personal letters to sellers can create emotional connections that tip the scales in your favor, 
                        especially when competing offers are financially similar. Share genuine reasons why you love the 
                        home and how you envision your life there. Mention specific features that resonated with you - the 
                        beautiful garden, the reading nook, the spacious kitchen perfect for family gatherings.
                      </p>

                      <p className="text-gray-700 mb-3">
                        Keep personal letters authentic and heartfelt but professional. Avoid making assumptions about the 
                        seller's life or being overly sentimental. Focus on what makes you a good fit for the home. If the 
                        seller has made improvements or maintained the property well, acknowledge their care and express 
                        your commitment to continuing that stewardship.
                      </p>

                      <p className="text-gray-700 mb-4">
                        However, be aware that in some markets, fair housing concerns have led agents to discourage or 
                        refuse personal letters. Always check with your real estate agent about local practices before 
                        including a personal letter with your offer.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Competitive Offer Strategies</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>All-Cash Offers:</strong> The most powerful tool in competitive markets. Cash eliminates 
                        financing contingencies, speeds up closing, and provides certainty for sellers. If you have the 
                        means, consider an all-cash offer even if you plan to finance later through a cash-out refinance. 
                        This gives you maximum leverage in negotiations.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Quick Closing:</strong> Offering to close faster than typical timelines can appeal to 
                        sellers who need to move quickly. However, ensure you can actually meet this timeline - failing 
                        to close on time can result in penalties or lost earnest money.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Minimal Contingencies:</strong> The fewer contingencies, the more attractive your offer. 
                        Consider which protections you truly need versus which you can waive to strengthen your position. 
                        Always consult with your agent and potentially an attorney before waiving major contingencies.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Accommodating Seller's Timeline:</strong> If the seller needs a rent-back period to stay 
                        in the home after closing, accommodating this request costs you little but can significantly 
                        increase appeal. Similarly, offering flexible move-out dates demonstrates consideration and 
                        flexibility.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Covering Appraisal Gaps:</strong> Offering to cover some or all of any appraisal shortfall 
                        removes a major concern for sellers. You might state: "Buyer agrees to pay up to $10,000 above 
                        appraised value." This shows serious commitment while still protecting you from massive overpayment.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tone and Presentation Matters</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Professional Tone:</strong> Appropriate for most transactions. Uses formal language, proper 
                        grammar, and industry-standard terminology. Demonstrates you're a serious buyer who understands the 
                        process. Best for investment properties, higher-value homes, or when you don't know the seller 
                        personally.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Friendly Tone:</strong> Creates warmth and connection while remaining respectful. Works well 
                        when you know the property has sentimental value to the seller or when you want to emphasize your 
                        personal connection to the home. Particularly effective for primary residences where the seller 
                        cares about who will live there next.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Competitive/Confident Tone:</strong> Direct and assertive without being aggressive. 
                        Emphasizes the strength of your offer and your readiness to proceed. Best used when you have 
                        strong financial terms (cash, large down payment, pre-approval) that support your confident stance.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Common Mistakes to Avoid</h3>

                      <p className="text-gray-700 mb-3">
                        <strong>Lowball Offers:</strong> While you want a good deal, offering significantly below asking 
                        price (more than 10-15% in most markets) can offend sellers and damage your credibility. They may 
                        refuse to counter or may not take you seriously in future negotiations. Research market conditions 
                        and comparable sales before determining your offer price.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Too Many Contingencies:</strong> While contingencies protect you, loading your offer with 
                        numerous conditions makes it less attractive. Prioritize the protections you truly need and consider 
                        waiving others. Each contingency gives you an exit strategy but also makes the seller's sale less 
                        certain.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Requesting Excessive Seller Concessions:</strong> Asking the seller to pay for repairs, 
                        closing costs, and other expenses while offering below asking price weakens your position. If you 
                        need assistance with closing costs, consider whether a slightly higher offer price with seller 
                        concessions might be more palatable.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Unclear Terms:</strong> Vague or ambiguous language creates confusion and can lead to 
                        disputes later. Be specific about dates, amounts, and conditions. Have your agent or attorney 
                        review your offer for clarity and completeness.
                      </p>

                      <p className="text-gray-700 mb-3">
                        <strong>Ignoring Market Conditions:</strong> Your offer strategy should reflect current market 
                        reality. In seller's markets with multiple offers, you need competitive terms and price. In buyer's 
                        markets, you have more negotiating power for price and contingencies. Adapt your approach accordingly.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Working with Your Real Estate Agent</h3>

                      <p className="text-gray-700 mb-4">
                        Your agent is your best resource for crafting competitive offers. They understand local market 
                        conditions, typical seller expectations, and effective negotiation strategies. Share your priorities, 
                        maximum price, and must-haves with your agent so they can advocate effectively. Listen to their 
                        advice about pricing and terms, but ultimately make decisions you're comfortable with. A good agent 
                        will help you balance competitiveness with protection of your interests.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">After Submitting Your Offer</h3>

                      <p className="text-gray-700 mb-3">
                        Once submitted, be prepared for several possible outcomes: acceptance (rare without negotiation), 
                        counteroffer (most common), or rejection. Counteroffers typically address price, closing date, 
                        contingencies, or included items. Respond professionally and promptly - delays can signal lack of 
                        serious interest.
                      </p>

                      <p className="text-gray-700 mb-4">
                        If your offer is rejected, ask for feedback. Understanding why can help you improve future offers. 
                        Was your price too low? Were there better-qualified buyers? Did specific terms concern the seller? 
                        Use this information to refine your approach for the next property.
                      </p>

                      <p className="text-gray-700">
                        Remember that purchasing real estate is both a financial transaction and an emotional decision. 
                        Balance logic and emotion, protect yourself with appropriate contingencies while remaining competitive, 
                        and work closely with your real estate professional to navigate the process successfully. With 
                        preparation, research, and a well-crafted offer letter, you'll be well-positioned to secure your 
                        dream property.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {generatedLetter ? (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Generated Offer
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(generatedLetter.letter)}
                    >
                      {copied ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">Subject Line:</h3>
                    <p className="text-sm font-medium">{generatedLetter.subject}</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">Key Terms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {generatedLetter.keyTerms.map((term, index) => (
                        <Badge key={index} variant="secondary">
                          {term}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-sm text-gray-600 mb-2">Offer Letter:</h3>
                    <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap font-sans">{generatedLetter.letter}</pre>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tone: {generatedLetter.tone}</span>
                    <span>Words: {generatedLetter.wordCount}</span>
                  </div>

                  <Button
                    onClick={() => copyToClipboard(generatedLetter.letter)}
                    className="w-full"
                    variant="default"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Offer Letter
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    <Info className="inline h-3 w-3 mr-1" />
                    Review with your real estate agent before submitting
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 mt-0.5 text-indigo-600 flex-shrink-0" />
                      <p>
                        <strong>Competitive Pricing:</strong> Research comparable sales to determine a strong yet reasonable offer price.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                      <p>
                        <strong>Pre-Approval:</strong> Having mortgage pre-approval significantly strengthens your offer.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                      <p>
                        <strong>Minimal Contingencies:</strong> Fewer contingencies make your offer more attractive to sellers.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Home className="h-4 w-4 mt-0.5 text-rose-600 flex-shrink-0" />
                      <p>
                        <strong>Personal Touch:</strong> A heartfelt personal letter can help your offer stand out emotionally.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="bg-indigo-50 p-4 rounded-md">
                    <h4 className="font-semibold text-sm mb-2">What Makes an Offer Strong?</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Competitive or full-price offer</li>
                      <li>• Substantial earnest money deposit</li>
                      <li>• Cash or strong pre-approval</li>
                      <li>• Flexible closing timeline</li>
                      <li>• Limited contingencies</li>
                      <li>• Quick response time</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Fill out the form and click "Generate Offer Letter" to create your professional offer.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
