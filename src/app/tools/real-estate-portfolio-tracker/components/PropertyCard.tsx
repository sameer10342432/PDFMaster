import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Edit, Trash2, MapPin } from 'lucide-react'
import { Property } from './types'

interface PropertyCardProps {
  property: Property
  handleEditProperty: (property: Property) => void
  handleDeleteProperty: (id: string) => void
}

export default function PropertyCard({ property, handleEditProperty, handleDeleteProperty }: PropertyCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              {property.name}
              <Badge variant="secondary">{property.type}</Badge>
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {property.address}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => handleEditProperty(property)}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleDeleteProperty(property.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Value</p>
            <p className="font-semibold">${property.value.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Equity</p>
            <p className="font-semibold">${property.equity.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Monthly Rent</p>
            <p className="font-semibold">${property.monthlyRent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Monthly Expenses</p>
            <p className="font-semibold">${property.monthlyExpenses.toLocaleString()}</p>
          </div>
          <div>
            <p className={`font-semibold ${(property.monthlyRent - property.monthlyExpenses) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${(property.monthlyRent - property.monthlyExpenses).toLocaleString()}
            </p>
          </div>
        </div>
        {property.notes && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Notes</p>
            <p className="text-sm">{property.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}