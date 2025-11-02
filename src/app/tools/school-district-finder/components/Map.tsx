
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with webpack
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

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

interface MapProps {
    schools: School[];
    selectedSchool: School | null;
    setSelectedSchool: (school: School) => void;
}

export default function Map({ schools, selectedSchool, setSelectedSchool }: MapProps) {
    const position: [number, number] = schools.length > 0 ? [schools[0].lat, schools[0].lng] : [-33.8688, 151.2093]; // Default to Sydney

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded-lg shadow-lg z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {schools.map(school => (
                <Marker 
                    key={school.name} 
                    position={[school.lat, school.lng]}
                    eventHandlers={{
                        click: () => {
                            setSelectedSchool(school);
                        },
                    }}
                >
                    <Tooltip permanent direction="top" offset={[0, -10]} opacity={1} className={`leaflet-tooltip-school ${selectedSchool?.name === school.name ? 'selected' : ''}`}>
                        <div>{school.name}</div>
                        <div>★ {school.rating}</div>
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
}