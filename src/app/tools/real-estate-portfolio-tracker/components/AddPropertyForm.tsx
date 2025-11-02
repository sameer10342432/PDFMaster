import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Property } from './types'

interface AddPropertyFormProps {
  newProperty: Partial<Property>
  setNewProperty: (property: Partial<Property>) => void
  editingProperty: Property | null
  handleUpdateProperty: () => void
  handleAddProperty: () => void
  setShowAddForm: (show: boolean) => void
  setEditingProperty: (property: Property | null) => void
}

export default function AddPropertyForm({ 
  newProperty, 
  setNewProperty, 
  editingProperty, 
  handleUpdateProperty, 
  handleAddProperty, 
  setShowAddForm, 
  setEditingProperty 
}: AddPropertyFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{editingProperty ? 'Edit Property' : 'Add New Property'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Property Name</Label>
            <Input
              id="name"
              value={newProperty.name || ''}
              onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
              placeholder="e.g., Sunset Villa"
            />
          </div>
          <div>
            <Label htmlFor="type">Property Type</Label>
            <Select value={newProperty.type} onValueChange={(value) => setNewProperty({...newProperty, type: value as Property['type']})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single-family">Single Family</SelectItem>
                <SelectItem value="multi-family">Multi Family</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={newProperty.address || ''}
              onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
              placeholder="123 Main St, City, State"
            />
          </div>
          <div>
            <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
            <Input
              id="purchasePrice"
              type="number"
              value={newProperty.purchasePrice || ''}
              onChange={(e) => setNewProperty({...newProperty, purchasePrice: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="value">Value ($)</Label>
            <Input
              id="value"
              type="number"
              value={newProperty.value || ''}
              onChange={(e) => setNewProperty({...newProperty, value: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="purchaseDate">Purchase Date</Label>
            <Input
              id="purchaseDate"
              type="date"
              value={newProperty.purchaseDate || ''}
              onChange={(e) => setNewProperty({...newProperty, purchaseDate: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
            <Input
              id="monthlyRent"
              type="number"
              value={newProperty.monthlyRent || ''}
              onChange={(e) => setNewProperty({...newProperty, monthlyRent: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="monthlyExpenses">Monthly Expenses ($)</Label>
            <Input
              id="monthlyExpenses"
              type="number"
              value={newProperty.monthlyExpenses || ''}
              onChange={(e) => setNewProperty({...newProperty, monthlyExpenses: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="downPayment">Down Payment ($)</Label>
            <Input
              id="downPayment"
              type="number"
              value={newProperty.downPayment || ''}
              onChange={(e) => setNewProperty({...newProperty, downPayment: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="loanAmount">Loan Amount ($)</Label>
            <Input
              id="loanAmount"
              type="number"
              value={newProperty.loanAmount || ''}
              onChange={(e) => setNewProperty({...newProperty, loanAmount: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div>
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              value={newProperty.interestRate || ''}
              onChange={(e) => setNewProperty({...newProperty, interestRate: parseFloat(e.target.value) || 0})}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={newProperty.notes || ''}
              onChange={(e) => setNewProperty({...newProperty, notes: e.target.value})}
              placeholder="Additional notes about this property..."
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={editingProperty ? handleUpdateProperty : handleAddProperty}>
            {editingProperty ? 'Update Property' : 'Add Property'}
          </Button>
          <Button variant="outline" onClick={() => {
            setShowAddForm(false)
            setEditingProperty(null)
            setNewProperty({
              name: '',
              address: '',
              type: 'single-family',
              purchasePrice: 0,
              value: 0,
              purchaseDate: '',
              monthlyRent: 0,
              monthlyExpenses: 0,
              downPayment: 0,
              loanAmount: 0,
              interestRate: 0,
              loanTerm: 30,
              notes: ''
            })
          }}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}