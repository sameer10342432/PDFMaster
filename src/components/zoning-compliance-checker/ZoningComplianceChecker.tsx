
"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import ZoningGuide from "./ZoningGuide";
import { zoningRegulations } from "@/lib/zoningRegulations";
import { useZoningCompliance } from "./useZoningCompliance";

type ZoneKey = keyof typeof zoningRegulations;

export default function ZoningComplianceChecker() {
  const {
    propertyDetails,
    complianceResult,
    handleInputChange,
    handleSelectChange,
    handleCheckCompliance,
  } = useZoningCompliance();

  const getComplianceStatus = (score: number) => {
    if (score === 100) return "Fully Compliant"
    if (score > 70) return "Likely Compliant with Minor Issues"
    if (score > 40) return "Potentially Non-Compliant"
    return "Non-Compliant"
  }

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Zoning Compliance Checker
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          Navigate complex zoning regulations with confidence.
        </p>
      </header>

      <Tabs defaultValue="checker" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="checker">Compliance Checker</TabsTrigger>
          <TabsTrigger value="guide">Zoning Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="checker">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-700">
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="zone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zoning District
                  </label>
                  <Select
                    onValueChange={value => handleSelectChange("zone", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(zoningRegulations).map(key => (
                        <SelectItem key={key} value={key}>
                          {zoningRegulations[key as ZoneKey].name} ({key})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="proposed-use"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Proposed Use
                  </label>
                  <Select
                    onValueChange={value =>
                      handleSelectChange("proposedUse", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select proposed use" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">
                        Single-Family Home
                      </SelectItem>
                      <SelectItem value="two-family">
                        Two-Family Residence
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial Building
                      </SelectItem>
                      <SelectItem value="industrial">
                        Industrial Facility
                      </SelectItem>
                      <SelectItem value="mixed-use">
                        Mixed-Use Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="buildingHeight"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Building Height (ft)
                  </label>
                  <Input
                    id="buildingHeight"
                    name="buildingHeight"
                    type="number"
                    placeholder="e.g., 30"
                    value={propertyDetails.buildingHeight}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lotSize"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Lot Size (sqft)
                  </label>
                  <Input
                    id="lotSize"
                    name="lotSize"
                    type="number"
                    placeholder="e.g., 6000"
                    value={propertyDetails.lotSize}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <Button
                onClick={handleCheckCompliance}
                className="w-full md:w-auto"
              >
                Check Compliance
              </Button>
              {complianceResult && (
                <Alert
                  className={
                    complianceResult.score === 100
                      ? "bg-green-100 border-green-400 text-green-800"
                      : complianceResult.score > 70
                      ? "bg-yellow-100 border-yellow-400 text-yellow-800"
                      : "bg-red-100 border-red-400 text-red-800"
                  }
                >
                  <AlertTitle className="font-bold">
                    {getComplianceStatus(complianceResult.score)}
                  </AlertTitle>
                  <AlertDescription>
                    <p>
                      Your project has a compliance score of{" "}
                      {complianceResult.score}%.
                    </p>
                    <Progress
                      value={complianceResult.score}
                      className="mt-2"
                    />
                    {complianceResult.issues.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold">Issues Found:</h4>
                        <ul className="list-disc list-inside mt-2">
                          {complianceResult.issues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-700">
                Zoning Guide
              </CardTitle>
            </CardHeader>
            <CardContent style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
              <ZoningGuide regulations={zoningRegulations} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}