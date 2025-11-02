
import { Star } from "lucide-react";

interface School {
    name: string;
    type: 'Primary' | 'Secondary' | 'Combined';
    sector: 'Government' | 'Catholic' | 'Independent';
    rating: number;
    enrollment: number;
    distance: number;
    address: string;
    phone: string;
    website: string;
    naplanReading: number;
    naplanNumeracy: number;
    naplanWriting: number;
    naplanSpelling: number;
    naplanGrammar: number;
    icsea: number;
    teacherQualifications: number;
    studentTeacherRatio: number;
    specialPrograms: string[];
    facilities: string[];
    languages: string[];
    lat: number;
    lng: number;
}

interface SchoolListProps {
    schools: School[];
    selectedSchool: School | null;
    setSelectedSchool: (school: School) => void;
    getRatingColor: (rating: number) => string;
}

export default function SchoolList({ schools, selectedSchool, setSelectedSchool, getRatingColor }: SchoolListProps) {
    return (
        <div className="h-full overflow-y-auto bg-white rounded-lg shadow-lg">
            <div className="p-4 sticky top-0 bg-white z-10 border-b">
                <h2 className="text-xl font-bold">Schools Near You</h2>
                <p className="text-sm text-gray-500">Showing {schools.length} schools</p>
            </div>
            <div className="divide-y">
                {schools.map((school) => (
                    <div
                        key={school.name}
                        className={`p-4 cursor-pointer hover:bg-gray-50 ${
                            selectedSchool?.name === school.name ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                        onClick={() => setSelectedSchool(school)}
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-lg mb-1">{school.name}</h3>
                            <div className={`flex items-center font-bold text-lg ${getRatingColor(school.rating)}`}>
                                <Star className="w-4 h-4 mr-1 fill-current" />
                                {school.rating}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                            {school.type} • {school.sector} • {school.enrollment} students
                        </div>
                        <div className="text-sm text-gray-800">
                            {school.distance.toFixed(1)} km away
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}