
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ValuationForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="address">Property Address</Label>
            <Input id="address" placeholder="e.g., 123 Main St, Anytown, USA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-type">Property Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single-family">Single-Family Home</SelectItem>
                <SelectItem value="condo">Condominium</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="multi-family">Multi-Family</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Input id="bedrooms" type="number" placeholder="e.g., 3" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Input id="bathrooms" type="number" placeholder="e.g., 2" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sqft">Square Footage</Label>
            <Input id="sqft" type="number" placeholder="e.g., 1,800" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year-built">Year Built</Label>
            <Input id="year-built" type="number" placeholder="e.g., 1995" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea id="notes" placeholder="e.g., recent renovations, unique features, etc." />
        </div>

        <Button type="submit" className="w-full">
          Calculate Property Value
        </Button>
      </CardContent>
    </Card>
  )
}