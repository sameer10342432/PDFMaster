
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Building, CheckCircle, MapPin, Star, Users } from "lucide-react";

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

interface SchoolDetailModalProps {
    selectedSchool: School;
    setSelectedSchool: (school: School | null) => void;
    getNaplanPerformance: (score: number) => { level: string; color: string };
    getRatingColor: (rating: number) => string;
}

export default function SchoolDetailModal({ selectedSchool, setSelectedSchool, getNaplanPerformance, getRatingColor }: SchoolDetailModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl mb-2">{selectedSchool.name}</CardTitle>
                            <div className="flex items-center space-x-4">
                                <Badge className="bg-white text-blue-600">{selectedSchool.type}</Badge>
                                <Badge className="bg-white text-blue-600">{selectedSchool.sector}</Badge>
                                <div className="flex items-center text-white">
                                    <Star className="w-4 h-4 mr-1 fill-current" />
                                    {selectedSchool.rating}
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedSchool(null)} className="text-white hover:bg-white/20">
                            ×
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="academic">Academic</TabsTrigger>
                            <TabsTrigger value="programs">Programs</TabsTrigger>
                            <TabsTrigger value="contact">Contact</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card>
                                    <CardContent className="p-4 text-center">
                                        <Users className="mx-auto h-8 w-8 text-blue-600 mb-2" />
                                        <div className="text-2xl font-bold">{selectedSchool.enrollment}</div>
                                        <div className="text-sm text-gray-500">Total Students</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4 text-center">
                                        <MapPin className="mx-auto h-8 w-8 text-green-600 mb-2" />
                                        <div className="text-2xl font-bold">{selectedSchool.distance} km</div>
                                        <div className="text-sm text-gray-500">Distance</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4 text-center">
                                        <Award className="mx-auto h-8 w-8 text-purple-600 mb-2" />
                                        <div className="text-2xl font-bold">{selectedSchool.icsea}</div>
                                        <div className="text-sm text-gray-500">ICSEA Score</div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3">School Facilities</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedSchool.facilities.map((facility, idx) => (
                                        <Badge key={idx} variant="outline">
                                            {facility}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3">Languages Offered</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedSchool.languages.map((language, idx) => (
                                        <Badge key={idx} variant="secondary">
                                            {language}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="academic" className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">NAPLAN Performance</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { subject: 'Reading', score: selectedSchool.naplanReading },
                                        { subject: 'Numeracy', score: selectedSchool.naplanNumeracy },
                                        { subject: 'Writing', score: selectedSchool.naplanWriting },
                                        { subject: 'Spelling', score: selectedSchool.naplanSpelling },
                                        { subject: 'Grammar', score: selectedSchool.naplanGrammar }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                            <span className="font-medium">{item.subject}</span>
                                            <div className="text-right">
                                                <div className={`font-bold ${getNaplanPerformance(item.score).color}`}>
                                                    {item.score}
                                                </div>
                                                <div className={`text-xs ${getNaplanPerformance(item.score).color}`}>
                                                    {getNaplanPerformance(item.score).level}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card>
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold mb-2">Teacher Qualifications</h4>
                                        <div className="flex items-center">
                                            <Progress value={selectedSchool.teacherQualifications} className="flex-1 mr-3" />
                                            <span className="font-bold">{selectedSchool.teacherQualifications}%</span>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold mb-2">Student-Teacher Ratio</h4>
                                        <div className="text-3xl font-bold text-blue-600">
                                            1:{selectedSchool.studentTeacherRatio}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="programs" className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Special Programs</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedSchool.specialPrograms.map((program, idx) => (
                                        <div key={idx} className="flex items-center p-3 bg-blue-50 rounded-lg">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                                            <span className="font-medium">{program}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="contact" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                                            <div>
                                                <div className="font-medium">Address</div>
                                                <div className="text-gray-600">{selectedSchool.address}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Building className="h-5 w-5 text-gray-400 mr-3" />
                                            <div>
                                                <div className="font-medium">Phone</div>
                                                <div className="text-gray-600">{selectedSchool.phone}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                                            <div>
                                                <div className="font-medium">Website</div>
                                                <a href={`https://${selectedSchool.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    {selectedSchool.website}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span>School Type:</span>
                                            <span className="font-medium">{selectedSchool.type}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sector:</span>
                                            <span className="font-medium">{selectedSchool.sector}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Rating:</span>
                                            <span className={`font-medium ${getRatingColor(selectedSchool.rating)}`}>
                                                {selectedSchool.rating} ★
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>ICSEA:</span>
                                            <span className="font-medium">{selectedSchool.icsea}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}