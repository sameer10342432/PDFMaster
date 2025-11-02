'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Calculator, Zap, DollarSign, TrendingUp, Leaf, Sun, Home, CheckCircle, AlertTriangle } from 'lucide-react'
import { useCallback } from 'react';

interface EnergySavings {
  currentUsage: {
    electricity: number
    gas: number
    totalCost: number
    co2Emissions: number
  }
  projectedUsage: {
    electricity: number
    gas: number
    totalCost: number
    co2Emissions: number
  }
  savings: {
    electricitySavings: number
    gasSavings: number
    totalMonthlySavings: number
    totalAnnualSavings: number
    co2Reduction: number
    percentageReduction: number
  }
  improvements: {
    solar: { cost: number, savings: number, payback: number }
    insulation: { cost: number, savings: number, payback: number }
    hvac: { cost: number, savings: number, payback: number }
    windows: { cost: number, savings: number, payback: number }
    appliances: { cost: number, savings: number, payback: number }
    lighting: { cost: number, savings: number, payback: number }
    total: { cost: number, savings: number, payback: number }
  }
  incentives: {
    federalTaxCredit: number
    stateTaxCredit: number
    utilityRebates: number
    totalIncentives: number
  }
}

interface EnergyImprovement {
  name: string
  category: string
  cost: number
  annualSavings: number
  paybackPeriod: number
  energyReduction: number
  co2Reduction: number
  description: string
}

export default function EnergySavingsCalculator() {
  // Home Details
  const [homeSize, setHomeSize] = useState<number>(2000)
  const [homeAge, setHomeAge] = useState<string>('10-20')
  const [homeType, setHomeType] = useState<string>('single-family')
  const [location, setLocation] = useState<string>('national-average')
  const [occupants, setOccupants] = useState<number>(3)
  
  // Current Energy Usage
  const [monthlyElectricBill, setMonthlyElectricBill] = useState<number>(150)
  const [monthlyGasBill, setMonthlyGasBill] = useState<number>(80)
  const [electricRate, setElectricRate] = useState<number>(0.13)
  const [gasRate, setGasRate] = useState<number>(1.20)
  
  // Current Systems
  const [hvacAge, setHvacAge] = useState<string>('5-10')
  const [insulationLevel, setInsulationLevel] = useState<string>('adequate')
  const [windowType, setWindowType] = useState<string>('double-pane')
  const [waterHeaterType, setWaterHeaterType] = useState<string>('gas-tank')
  const [lightingType, setLightingType] = useState<string>('mixed')
  
  // Planned Improvements
  const [solarInstallation, setSolarInstallation] = useState<boolean>(false)
  const [solarSize, setSolarSize] = useState<number>(8) // kW
  const [insulationUpgrade, setInsulationUpgrade] = useState<boolean>(false)
  const [hvacUpgrade, setHvacUpgrade] = useState<boolean>(false)
  const [windowUpgrade, setWindowUpgrade] = useState<boolean>(false)
  const [applianceUpgrade, setApplianceUpgrade] = useState<boolean>(false)
  const [ledUpgrade, setLedUpgrade] = useState<boolean>(false)
  const [smartThermostat, setSmartThermostat] = useState<boolean>(false)
  
  // Custom Costs
  const [customImprovementCost, setCustomImprovementCost] = useState<number>(0)
  const [customAnnualSavings, setCustomAnnualSavings] = useState<number>(0)
  
  // Results
  const [results, setResults] = useState<EnergySavings | null>(null)
  const [improvements, setImprovements] = useState<EnergyImprovement[]>([])

  const calculateEnergySavings = useCallback(() => {
    // Location multipliers for energy costs and solar potential
    const locationData: { [key: string]: { electricMultiplier: number, gasMultiplier: number, solarPotential: number } } = {
      'national-average': { electricMultiplier: 1.0, gasMultiplier: 1.0, solarPotential: 1.0 },
      'california': { electricMultiplier: 1.5, gasMultiplier: 1.2, solarPotential: 1.3 },
      'new-york': { electricMultiplier: 1.3, gasMultiplier: 1.1, solarPotential: 0.9 },
      'texas': { electricMultiplier: 0.9, gasMultiplier: 0.9, solarPotential: 1.2 },
      'florida': { electricMultiplier: 1.1, gasMultiplier: 1.0, solarPotential: 1.1 },
      'arizona': { electricMultiplier: 1.0, gasMultiplier: 0.9, solarPotential: 1.4 },
      'illinois': { electricMultiplier: 1.0, gasMultiplier: 1.0, solarPotential: 0.8 },
      'pennsylvania': { electricMultiplier: 1.1, gasMultiplier: 1.0, solarPotential: 0.9 },
      'ohio': { electricMultiplier: 1.0, gasMultiplier: 0.9, solarPotential: 0.8 },
      'georgia': { electricMultiplier: 1.0, gasMultiplier: 0.9, solarPotential: 1.0 },
      'north-carolina': { electricMultiplier: 1.0, gasMultiplier: 0.9, solarPotential: 1.0 }
    }
    
    const locationInfo = locationData[location] || locationData['national-average']
    
    // Calculate current usage
    const currentElectricityUsage = monthlyElectricBill / electricRate // kWh
    const currentGasUsage = monthlyGasBill / gasRate // therms
    const currentTotalCost = monthlyElectricBill + monthlyGasBill
    const currentCO2 = (currentElectricityUsage * 0.92) + (currentGasUsage * 11.7) // lbs CO2 per month
    
    // Calculate improvement costs and savings
    let totalImprovementCost = customImprovementCost
    let totalAnnualSavings = customAnnualSavings * 12
    
    // Solar installation
    let solarCost = 0
    let solarSavings = 0
    if (solarInstallation) {
      solarCost = solarSize * 3000 * locationInfo.electricMultiplier // $3/watt average
      const annualProduction = solarSize * 1200 * locationInfo.solarPotential // kWh/year
      solarSavings = Math.min(annualProduction * electricRate, currentElectricityUsage * 12 * electricRate)
      totalImprovementCost += solarCost
      totalAnnualSavings += solarSavings
    }
    
    // Insulation upgrade
    let insulationCost = 0
    let insulationSavings = 0
    if (insulationUpgrade) {
      insulationCost = homeSize * 2.5 // $2.50 per sq ft
      const savingsPercent = insulationLevel === 'poor' ? 0.25 : insulationLevel === 'adequate' ? 0.15 : 0.10
      insulationSavings = currentTotalCost * 12 * savingsPercent
      totalImprovementCost += insulationCost
      totalAnnualSavings += insulationSavings
    }
    
    // HVAC upgrade
    let hvacCost = 0
    let hvacSavings = 0
    if (hvacUpgrade) {
      hvacCost = homeSize * 4 // $4 per sq ft for high-efficiency system
      const currentEfficiency = hvacAge === '20+' ? 0.6 : hvacAge === '15-20' ? 0.7 : hvacAge === '10-15' ? 0.8 : 0.85
      const newEfficiency = 0.95
      const efficiencyGain = (newEfficiency - currentEfficiency) / currentEfficiency
      hvacSavings = currentTotalCost * 12 * 0.6 * efficiencyGain // 60% of energy for heating/cooling
      totalImprovementCost += hvacCost
      totalAnnualSavings += hvacSavings
    }
    
    // Window upgrade
    let windowCost = 0
    let windowSavings = 0
    if (windowUpgrade) {
      const windowCount = Math.ceil(homeSize / 150) // Estimate windows
      windowCost = windowCount * 600 // $600 per window
      const savingsPercent = windowType === 'single-pane' ? 0.15 : windowType === 'double-pane' ? 0.08 : 0.05
      windowSavings = currentTotalCost * 12 * savingsPercent
      totalImprovementCost += windowCost
      totalAnnualSavings += windowSavings
    }
    
    // Appliance upgrade
    let applianceCost = 0
    let applianceSavings = 0
    if (applianceUpgrade) {
      applianceCost = 8000 // Average for major appliances
      applianceSavings = currentElectricityUsage * 12 * 0.2 * electricRate // 20% reduction
      totalImprovementCost += applianceCost
      totalAnnualSavings += applianceSavings
    }
    
    // LED lighting upgrade
    let lightingCost = 0
    let lightingSavings = 0
    if (ledUpgrade) {
      lightingCost = homeSize * 0.5 // $0.50 per sq ft
      const currentLightingCost = currentElectricityUsage * 12 * 0.1 * electricRate // 10% of electric bill
      lightingSavings = lightingType === 'incandescent' ? currentLightingCost * 0.8 : 
                       lightingType === 'cfl' ? currentLightingCost * 0.5 : 
                       currentLightingCost * 0.2
      totalImprovementCost += lightingCost
      totalAnnualSavings += lightingSavings
    }
    
    // Smart thermostat
    if (smartThermostat) {
      totalImprovementCost += 250
      totalAnnualSavings += currentTotalCost * 12 * 0.1 // 10% savings
    }
    
    // Calculate projected usage after improvements
    const savingsPercent = totalAnnualSavings / (currentTotalCost * 12)
    const projectedElectricityUsage = currentElectricityUsage * (1 - Math.min(savingsPercent * 0.7, 0.8))
    const projectedGasUsage = currentGasUsage * (1 - Math.min(savingsPercent * 0.3, 0.5))
    const projectedTotalCost = (projectedElectricityUsage * electricRate) + (projectedGasUsage * gasRate)
    const projectedCO2 = (projectedElectricityUsage * 0.92) + (projectedGasUsage * 11.7)
    
    // Calculate incentives
    const federalTaxCredit = solarInstallation ? solarCost * 0.30 : 0 // 30% federal solar credit
    const stateTaxCredit = location === 'california' ? totalImprovementCost * 0.10 : 
                          location === 'new-york' ? totalImprovementCost * 0.05 : 0
    const utilityRebates = (insulationUpgrade ? 500 : 0) + (hvacUpgrade ? 1000 : 0) + (applianceUpgrade ? 300 : 0)
    const totalIncentives = federalTaxCredit + stateTaxCredit + utilityRebates
    
    const energySavings: EnergySavings = {
      currentUsage: {
        electricity: currentElectricityUsage,
        gas: currentGasUsage,
        totalCost: currentTotalCost,
        co2Emissions: currentCO2
      },
      projectedUsage: {
        electricity: projectedElectricityUsage,
        gas: projectedGasUsage,
        totalCost: projectedTotalCost,
        co2Emissions: projectedCO2
      },
      savings: {
        electricitySavings: currentElectricityUsage - projectedElectricityUsage,
        gasSavings: currentGasUsage - projectedGasUsage,
        totalMonthlySavings: currentTotalCost - projectedTotalCost,
        totalAnnualSavings: (currentTotalCost - projectedTotalCost) * 12,
        co2Reduction: currentCO2 - projectedCO2,
        percentageReduction: ((currentTotalCost - projectedTotalCost) / currentTotalCost) * 100
      },
      improvements: {
        solar: { 
          cost: solarCost, 
          savings: solarSavings, 
          payback: solarSavings > 0 ? (solarCost - federalTaxCredit) / solarSavings : 0 
        },
        insulation: { 
          cost: insulationCost, 
          savings: insulationSavings, 
          payback: insulationSavings > 0 ? insulationCost / insulationSavings : 0 
        },
        hvac: { 
          cost: hvacCost, 
          savings: hvacSavings, 
          payback: hvacSavings > 0 ? hvacCost / hvacSavings : 0 
        },
        windows: { 
          cost: windowCost, 
          savings: windowSavings, 
          payback: windowSavings > 0 ? windowCost / windowSavings : 0 
        },
        appliances: { 
          cost: applianceCost, 
          savings: applianceSavings, 
          payback: applianceSavings > 0 ? applianceCost / applianceSavings : 0 
        },
        lighting: { 
          cost: lightingCost, 
          savings: lightingSavings, 
          payback: lightingSavings > 0 ? lightingCost / lightingSavings : 0 
        },
        total: { 
          cost: totalImprovementCost, 
          savings: totalAnnualSavings, 
          payback: totalAnnualSavings > 0 ? (totalImprovementCost - totalIncentives) / totalAnnualSavings : 0 
        }
      },
      incentives: {
        federalTaxCredit,
        stateTaxCredit,
        utilityRebates,
        totalIncentives
      }
    }
    
    // Create improvement recommendations
    const improvementList: EnergyImprovement[] = []
    
    if (solarInstallation) {
      improvementList.push({
        name: 'Solar Panel Installation',
        category: 'Renewable Energy',
        cost: solarCost,
        annualSavings: solarSavings,
        paybackPeriod: energySavings.improvements.solar.payback,
        energyReduction: 30,
        co2Reduction: 15000,
        description: `${solarSize}kW solar system with federal tax credit`
      })
    }
    
    if (insulationUpgrade) {
      improvementList.push({
        name: 'Insulation Upgrade',
        category: 'Building Envelope',
        cost: insulationCost,
        annualSavings: insulationSavings,
        paybackPeriod: energySavings.improvements.insulation.payback,
        energyReduction: 15,
        co2Reduction: 3000,
        description: 'Attic and wall insulation improvement'
      })
    }
    
    if (hvacUpgrade) {
      improvementList.push({
        name: 'High-Efficiency HVAC',
        category: 'Heating & Cooling',
        cost: hvacCost,
        annualSavings: hvacSavings,
        paybackPeriod: energySavings.improvements.hvac.payback,
        energyReduction: 20,
        co2Reduction: 4000,
        description: 'ENERGY STAR certified heating and cooling system'
      })
    }
    
    if (windowUpgrade) {
      improvementList.push({
        name: 'Energy-Efficient Windows',
        category: 'Building Envelope',
        cost: windowCost,
        annualSavings: windowSavings,
        paybackPeriod: energySavings.improvements.windows.payback,
        energyReduction: 10,
        co2Reduction: 2000,
        description: 'Triple-pane low-E windows'
      })
    }
    
    if (applianceUpgrade) {
      improvementList.push({
        name: 'ENERGY STAR Appliances',
        category: 'Appliances',
        cost: applianceCost,
        annualSavings: applianceSavings,
        paybackPeriod: energySavings.improvements.appliances.payback,
        energyReduction: 15,
        co2Reduction: 2500,
        description: 'Refrigerator, washer, dryer, and dishwasher'
      })
    }
    
    if (ledUpgrade) {
      improvementList.push({
        name: 'LED Lighting Conversion',
        category: 'Lighting',
        cost: lightingCost,
        annualSavings: lightingSavings,
        paybackPeriod: energySavings.improvements.lighting.payback,
        energyReduction: 8,
        co2Reduction: 1200,
        description: 'Complete LED lighting retrofit'
      })
    }
    
    setResults(energySavings)
    setImprovements(improvementList)
  }, [
    monthlyElectricBill,
    electricRate,
    monthlyGasBill,
    gasRate,
    customImprovementCost,
    customAnnualSavings,
    solarInstallation,
    solarSize,
    location,
    insulationUpgrade,
    homeSize,
    insulationLevel,
    hvacUpgrade,
    hvacAge,
    windowUpgrade,
    windowType,
    applianceUpgrade,
    ledUpgrade,
    lightingType,
    smartThermostat
  ]);

  useEffect(() => {
    calculateEnergySavings();
  }, [calculateEnergySavings]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number, decimals: number = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num)
  }

  const getPaybackColor = (years: number) => {
    if (years <= 5) return 'text-green-600'
    if (years <= 10) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPaybackBadge = (years: number) => {
    if (years <= 5) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>
    if (years <= 10) return <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
    if (years <= 20) return <Badge className="bg-orange-100 text-orange-800">Fair</Badge>
    return <Badge className="bg-red-100 text-red-800">Poor</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Zap className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Energy Savings Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate potential energy savings and ROI from home efficiency improvements, solar panels, and green upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Energy Analysis
                </CardTitle>
                <CardDescription>
                  Enter your home details and current energy usage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="home" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                    <TabsTrigger value="systems">Systems</TabsTrigger>
                    <TabsTrigger value="improvements">Upgrades</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="home" className="space-y-4">
                    <div>
                      <Label htmlFor="homeSize">Home Size (sq ft)</Label>
                      <Input
                        id="homeSize"
                        type="number"
                        value={homeSize}
                        onChange={(e) => setHomeSize(Number(e.target.value))}
                        placeholder="2000"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="homeAge">Home Age</Label>
                      <Select value={homeAge} onValueChange={setHomeAge}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-5">0-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10-20">10-20 years</SelectItem>
                          <SelectItem value="20-30">20-30 years</SelectItem>
                          <SelectItem value="30+">30+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="homeType">Home Type</Label>
                      <Select value={homeType} onValueChange={setHomeType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="condo">Condo/Apartment</SelectItem>
                          <SelectItem value="mobile">Mobile Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="national-average">National Average</SelectItem>
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                          <SelectItem value="arizona">Arizona</SelectItem>
                          <SelectItem value="illinois">Illinois</SelectItem>
                          <SelectItem value="pennsylvania">Pennsylvania</SelectItem>
                          <SelectItem value="ohio">Ohio</SelectItem>
                          <SelectItem value="georgia">Georgia</SelectItem>
                          <SelectItem value="north-carolina">North Carolina</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="occupants">Number of Occupants</Label>
                      <Input
                        id="occupants"
                        type="number"
                        value={occupants}
                        onChange={(e) => setOccupants(Number(e.target.value))}
                        min="1"
                        max="10"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="usage" className="space-y-4">
                    <div>
                      <Label htmlFor="monthlyElectricBill">Monthly Electric Bill</Label>
                      <Input
                        id="monthlyElectricBill"
                        type="number"
                        value={monthlyElectricBill}
                        onChange={(e) => setMonthlyElectricBill(Number(e.target.value))}
                        placeholder="150"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="monthlyGasBill">Monthly Gas Bill</Label>
                      <Input
                        id="monthlyGasBill"
                        type="number"
                        value={monthlyGasBill}
                        onChange={(e) => setMonthlyGasBill(Number(e.target.value))}
                        placeholder="80"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="electricRate">Electric Rate ($/kWh)</Label>
                      <Input
                        id="electricRate"
                        type="number"
                        step="0.01"
                        value={electricRate}
                        onChange={(e) => setElectricRate(Number(e.target.value))}
                        placeholder="0.13"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="gasRate">Gas Rate ($/therm)</Label>
                      <Input
                        id="gasRate"
                        type="number"
                        step="0.01"
                        value={gasRate}
                        onChange={(e) => setGasRate(Number(e.target.value))}
                        placeholder="1.20"
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="systems" className="space-y-4">
                    <div>
                      <Label htmlFor="hvacAge">HVAC System Age</Label>
                      <Select value={hvacAge} onValueChange={setHvacAge}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-5">0-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10-15">10-15 years</SelectItem>
                          <SelectItem value="15-20">15-20 years</SelectItem>
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="insulationLevel">Insulation Level</Label>
                      <Select value={insulationLevel} onValueChange={setInsulationLevel}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="poor">Poor</SelectItem>
                          <SelectItem value="adequate">Adequate</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="windowType">Window Type</Label>
                      <Select value={windowType} onValueChange={setWindowType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-pane">Single Pane</SelectItem>
                          <SelectItem value="double-pane">Double Pane</SelectItem>
                          <SelectItem value="triple-pane">Triple Pane</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="waterHeaterType">Water Heater Type</Label>
                      <Select value={waterHeaterType} onValueChange={setWaterHeaterType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gas-tank">Gas Tank</SelectItem>
                          <SelectItem value="electric-tank">Electric Tank</SelectItem>
                          <SelectItem value="gas-tankless">Gas Tankless</SelectItem>
                          <SelectItem value="electric-tankless">Electric Tankless</SelectItem>
                          <SelectItem value="heat-pump">Heat Pump</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="lightingType">Primary Lighting</Label>
                      <Select value={lightingType} onValueChange={setLightingType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="incandescent">Incandescent</SelectItem>
                          <SelectItem value="cfl">CFL</SelectItem>
                          <SelectItem value="led">LED</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="improvements" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="solarInstallation"
                          checked={solarInstallation}
                          onChange={(e) => setSolarInstallation(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="solarInstallation">Solar Panel Installation</Label>
                      </div>
                      
                      {solarInstallation && (
                        <div>
                          <Label>Solar System Size: {solarSize} kW</Label>
                          <Slider
                            value={[solarSize]}
                            onValueChange={(value) => setSolarSize(value[0])}
                            max={20}
                            min={3}
                            step={1}
                            className="mt-2"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="insulationUpgrade"
                          checked={insulationUpgrade}
                          onChange={(e) => setInsulationUpgrade(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="insulationUpgrade">Insulation Upgrade</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hvacUpgrade"
                          checked={hvacUpgrade}
                          onChange={(e) => setHvacUpgrade(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="hvacUpgrade">High-Efficiency HVAC</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="windowUpgrade"
                          checked={windowUpgrade}
                          onChange={(e) => setWindowUpgrade(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="windowUpgrade">Energy-Efficient Windows</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="applianceUpgrade"
                          checked={applianceUpgrade}
                          onChange={(e) => setApplianceUpgrade(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="applianceUpgrade">ENERGY STAR Appliances</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="ledUpgrade"
                          checked={ledUpgrade}
                          onChange={(e) => setLedUpgrade(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="ledUpgrade">LED Lighting Conversion</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="smartThermostat"
                          checked={smartThermostat}
                          onChange={(e) => setSmartThermostat(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="smartThermostat">Smart Thermostat</Label>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label htmlFor="customImprovementCost">Custom Improvement Cost</Label>
                      <Input
                        id="customImprovementCost"
                        type="number"
                        value={customImprovementCost}
                        onChange={(e) => setCustomImprovementCost(Number(e.target.value))}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="customAnnualSavings">Custom Monthly Savings</Label>
                      <Input
                        id="customAnnualSavings"
                        type="number"
                        value={customAnnualSavings}
                        onChange={(e) => setCustomAnnualSavings(Number(e.target.value))}
                        placeholder="0"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button onClick={calculateEnergySavings} className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Energy Savings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {results && (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Annual Savings</p>
                          <p className="text-2xl font-bold text-green-600">
                            {formatCurrency(results.savings.totalAnnualSavings)}
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {results.savings.percentageReduction.toFixed(1)}% reduction
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Investment</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {formatCurrency(results.improvements.total.cost)}
                          </p>
                        </div>
                        <Home className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Total improvement cost
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Payback Period</p>
                          <p className={`text-2xl font-bold ${getPaybackColor(results.improvements.total.payback)}`}>
                            {results.improvements.total.payback.toFixed(1)} yr
                          </p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-orange-600" />
                      </div>
                      <div className="mt-2">
                        {getPaybackBadge(results.improvements.total.payback)}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">CO₂ Reduction</p>
                          <p className="text-2xl font-bold text-green-600">
                            {formatNumber(results.savings.co2Reduction * 12, 0)}
                          </p>
                        </div>
                        <Leaf className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        lbs CO₂ per year
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Energy Usage Comparison */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Energy Usage Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">Current Usage</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <span className="font-medium">Electricity</span>
                            <span className="font-semibold">{formatNumber(results.currentUsage.electricity, 0)} kWh/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <span className="font-medium">Natural Gas</span>
                            <span className="font-semibold">{formatNumber(results.currentUsage.gas, 0)} therms/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <span className="font-medium">Total Cost</span>
                            <span className="font-semibold">{formatCurrency(results.currentUsage.totalCost)}/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <span className="font-medium">CO₂ Emissions</span>
                            <span className="font-semibold">{formatNumber(results.currentUsage.co2Emissions, 0)} lbs/mo</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Projected Usage</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="font-medium">Electricity</span>
                            <span className="font-semibold">{formatNumber(results.projectedUsage.electricity, 0)} kWh/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="font-medium">Natural Gas</span>
                            <span className="font-semibold">{formatNumber(results.projectedUsage.gas, 0)} therms/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="font-medium">Total Cost</span>
                            <span className="font-semibold">{formatCurrency(results.projectedUsage.totalCost)}/mo</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="font-medium">CO₂ Emissions</span>
                            <span className="font-semibold">{formatNumber(results.projectedUsage.co2Emissions, 0)} lbs/mo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Improvement Breakdown */}
                {improvements.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Selected Improvements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {improvements.map((improvement, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{improvement.category}</Badge>
                                <span className="font-medium">{improvement.name}</span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{improvement.description}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm">
                                <span className="text-green-600">↓ {improvement.energyReduction}% energy</span>
                                <span className="text-blue-600">↓ {formatNumber(improvement.co2Reduction)} lbs CO₂/yr</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">{formatCurrency(improvement.cost)}</div>
                              <div className="text-sm text-green-600">{formatCurrency(improvement.annualSavings)}/yr</div>
                              <div className={`text-sm ${getPaybackColor(improvement.paybackPeriod)}`}>
                                {improvement.paybackPeriod.toFixed(1)} yr payback
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Incentives & Rebates */}
                {results.incentives.totalIncentives > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Available Incentives & Rebates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {results.incentives.federalTaxCredit > 0 && (
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800">Federal Tax Credit</h4>
                            <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.incentives.federalTaxCredit)}</p>
                            <p className="text-sm text-blue-700">30% solar investment tax credit</p>
                          </div>
                        )}
                        
                        {results.incentives.stateTaxCredit > 0 && (
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-800">State Tax Credit</h4>
                            <p className="text-2xl font-bold text-green-600">{formatCurrency(results.incentives.stateTaxCredit)}</p>
                            <p className="text-sm text-green-700">State energy efficiency incentive</p>
                          </div>
                        )}
                        
                        {results.incentives.utilityRebates > 0 && (
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h4 className="font-semibold text-purple-800">Utility Rebates</h4>
                            <p className="text-2xl font-bold text-purple-600">{formatCurrency(results.incentives.utilityRebates)}</p>
                            <p className="text-sm text-purple-700">Local utility efficiency rebates</p>
                          </div>
                        )}
                        
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-semibold text-orange-800">Total Incentives</h4>
                          <p className="text-2xl font-bold text-orange-600">{formatCurrency(results.incentives.totalIncentives)}</p>
                          <p className="text-sm text-orange-700">Net investment: {formatCurrency(results.improvements.total.cost - results.incentives.totalIncentives)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="h-5 w-5 mr-2" />
                      Energy Efficiency Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Quick Wins (Low Cost)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Install programmable or smart thermostat</li>
                          <li>• Seal air leaks around windows and doors</li>
                          <li>• Replace incandescent bulbs with LEDs</li>
                          <li>• Use power strips to eliminate phantom loads</li>
                          <li>• Install low-flow showerheads and faucets</li>
                          <li>• Add weatherstripping and caulking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Major Upgrades (High Impact)</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Solar panel installation with battery storage</li>
                          <li>• High-efficiency HVAC system upgrade</li>
                          <li>• Comprehensive insulation improvement</li>
                          <li>• Energy-efficient windows and doors</li>
                          <li>• ENERGY STAR certified appliances</li>
                          <li>• Heat pump water heater installation</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-yellow-800">Energy Audit Recommendation</h5>
                          <p className="text-sm text-yellow-700 mt-1">
                            Consider getting a professional home energy audit to identify the most cost-effective improvements for your specific home. Many utilities offer subsidized or free energy audits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Home Energy Efficiency: Complete Guide</CardTitle>
              <CardDescription>
                Everything you need to know about reducing energy costs and environmental impact
              </CardDescription>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Understanding Energy Efficiency</h3>
                  <p className="text-gray-600 mb-4">
                    Home energy efficiency involves using less energy to provide the same level of comfort and functionality. This reduces utility bills, decreases environmental impact, and often improves indoor comfort and air quality.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Energy Usage Breakdown</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><strong>Heating & Cooling (45%):</strong> HVAC systems, space heaters, fans</li>
                    <li><strong>Water Heating (18%):</strong> Hot water for showers, washing, cleaning</li>
                    <li><strong>Lighting (9%):</strong> Indoor and outdoor lighting systems</li>
                    <li><strong>Electronics (8%):</strong> TVs, computers, entertainment systems</li>
                    <li><strong>Appliances (20%):</strong> Refrigerator, washer, dryer, dishwasher</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2 mt-4">Energy Efficiency Benefits</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><strong>Cost Savings:</strong> Reduced monthly utility bills</li>
                    <li><strong>Comfort:</strong> More consistent temperatures and humidity</li>
                    <li><strong>Environmental:</strong> Lower carbon footprint and emissions</li>
                    <li><strong>Property Value:</strong> Increased home value and marketability</li>
                    <li><strong>Health:</strong> Better indoor air quality and comfort</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Solar Energy Investment</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">Solar System Components</h4>
                  <p className="text-gray-600 mb-4">
                    A typical residential solar system includes photovoltaic panels, inverters, mounting hardware, and monitoring systems. Battery storage can be added for energy independence and backup power.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Solar Financial Benefits</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li><strong>Federal Tax Credit:</strong> 30% of system cost through 2032</li>
                    <li><strong>Net Metering:</strong> Sell excess power back to utility</li>
                    <li><strong>State Incentives:</strong> Additional rebates and tax credits</li>
                    <li><strong>Property Tax Exemption:</strong> No increase in property taxes</li>
                    <li><strong>Increased Home Value:</strong> 4% average increase</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-2 mt-4">Solar Considerations</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Roof condition, age, and orientation</li>
                    <li>Shading from trees or nearby buildings</li>
                    <li>Local utility policies and net metering rates</li>
                    <li>System size based on energy usage patterns</li>
                    <li>Financing options: cash, loan, or lease</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-6">HVAC Efficiency</h3>
                  
                  <h4 className="text-lg font-semibold mb-2">High-Efficiency Systems</h4>
                  <p className="text-gray-600 mb-4">
                    Modern HVAC systems can achieve 95%+ efficiency ratings compared to 60-80% for older systems. Heat pumps can provide both heating and cooling with exceptional efficiency in moderate climates.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Maintenance & Optimization</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Regular filter changes and system maintenance</li>
                    <li>Proper ductwork sealing and insulation</li>
                    <li>Programmable or smart thermostat installation</li>
                    <li>Zoning systems for multi-level homes</li>
                  </ul>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Energy Strategies</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Building Envelope</h4>
                    <p className="text-gray-600 text-sm">
                      Improve insulation, air sealing, and windows to reduce heating and cooling loads. A tight building envelope is the foundation of energy efficiency and comfort.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Smart Home Technology</h4>
                    <p className="text-gray-600 text-sm">
                      Integrate smart thermostats, lighting controls, and energy monitoring systems to optimize usage patterns and identify additional savings opportunities.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Renewable Integration</h4>
                    <p className="text-gray-600 text-sm">
                      Combine solar panels with battery storage, electric vehicle charging, and heat pump systems for maximum energy independence and efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-800">Energy Efficiency Action Plan</h4>
                <ol className="list-decimal pl-6 space-y-1 text-green-700">
                  <li>Conduct a professional home energy audit</li>
                  <li>Implement low-cost improvements first (sealing, LED lighting)</li>
                  <li>Upgrade to high-efficiency appliances as they need replacement</li>
                  <li>Improve building envelope (insulation, windows)</li>
                  <li>Consider renewable energy systems (solar, geothermal)</li>
                  <li>Monitor and optimize energy usage with smart technology</li>
                  <li>Take advantage of available rebates and tax incentives</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}