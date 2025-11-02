
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface FiltersProps {
    schoolType: string;
    setSchoolType: (value: string) => void;
    maxDistance: number;
    setMaxDistance: (value: number) => void;
    minRating: number;
    setMinRating: (value: number) => void;
    handleFilterChange: () => void;
}

export default function Filters({ schoolType, setSchoolType, maxDistance, setMaxDistance, minRating, setMinRating, handleFilterChange }: FiltersProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Type</label>
                    <Select value={schoolType} onValueChange={setSchoolType}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="Primary">Primary</SelectItem>
                            <SelectItem value="Secondary">Secondary</SelectItem>
                            <SelectItem value="Combined">Combined</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Distance ({maxDistance}km)</label>
                    <Slider
                        value={[maxDistance]}
                        onValueChange={(value) => setMaxDistance(value[0])}
                        max={20}
                        step={1}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Rating ({minRating})</label>
                    <Slider
                        value={[minRating]}
                        onValueChange={(value) => setMinRating(value[0])}
                        max={100}
                        step={1}
                    />
                </div>
                <div className="self-end">
                    <Button onClick={handleFilterChange} className="w-full">Apply Filters</Button>
                </div>
            </div>
        </div>
    )
}