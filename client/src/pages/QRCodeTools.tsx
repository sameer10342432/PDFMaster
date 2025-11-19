import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Download, QrCode, Wifi, User, Mail, Phone, Calendar, Image as ImageIcon, Loader2 } from "lucide-react";

export default function QRCodeTools() {
  const [activeTab, setActiveTab] = useState("url");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [qrCodeImage, setQrCodeImage] = useState<string>("");
  const [qrReadResult, setQrReadResult] = useState<string>("");
  const { toast } = useToast();

  // URL/Text QR Code
  const [textInput, setTextInput] = useState("");
  const [qrSize, setQrSize] = useState("256");
  const [errorCorrection, setErrorCorrection] = useState("M");

  // WiFi QR Code
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiEncryption, setWifiEncryption] = useState("WPA");
  const [wifiHidden, setWifiHidden] = useState(false);

  // vCard QR Code
  const [vcardName, setVcardName] = useState("");
  const [vcardPhone, setVcardPhone] = useState("");
  const [vcardEmail, setVcardEmail] = useState("");
  const [vcardOrg, setVcardOrg] = useState("");
  const [vcardUrl, setVcardUrl] = useState("");

  // Email QR Code
  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  // Phone QR Code
  const [phoneNumber, setPhoneNumber] = useState("");

  // Event QR Code
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const generateURLQRCode = async () => {
    if (!textInput.trim()) {
      toast({ title: "Error", description: "Please enter text or URL", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("text", textInput);
      formData.append("size", qrSize);
      formData.append("errorCorrection", errorCorrection);

      const res = await fetch("/api/qr/generate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateWiFiQRCode = async () => {
    if (!wifiSSID.trim()) {
      toast({ title: "Error", description: "Please enter WiFi SSID", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("ssid", wifiSSID);
      formData.append("password", wifiPassword);
      formData.append("encryption", wifiEncryption);
      formData.append("hidden", wifiHidden.toString());
      formData.append("size", qrSize);

      const res = await fetch("/api/qr/generate-wifi", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate WiFi QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "WiFi QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate WiFi QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateVCardQRCode = async () => {
    if (!vcardName.trim()) {
      toast({ title: "Error", description: "Please enter a name", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("name", vcardName);
      formData.append("phone", vcardPhone);
      formData.append("email", vcardEmail);
      formData.append("organization", vcardOrg);
      formData.append("url", vcardUrl);
      formData.append("size", qrSize);

      const res = await fetch("/api/qr/generate-vcard", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate vCard QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "vCard QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate vCard QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateEmailQRCode = async () => {
    if (!emailTo.trim()) {
      toast({ title: "Error", description: "Please enter email address", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("email", emailTo);
      formData.append("subject", emailSubject);
      formData.append("body", emailBody);
      formData.append("size", qrSize);

      const res = await fetch("/api/qr/generate-email", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate email QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "Email QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate email QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const generatePhoneQRCode = async () => {
    if (!phoneNumber.trim()) {
      toast({ title: "Error", description: "Please enter phone number", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("phoneNumber", phoneNumber);
      formData.append("size", qrSize);

      const res = await fetch("/api/qr/generate-phone", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate phone QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "Phone QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate phone QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateEventQRCode = async () => {
    if (!eventTitle.trim() || !eventStart) {
      toast({ title: "Error", description: "Please enter event title and start date", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("title", eventTitle);
      formData.append("location", eventLocation);
      formData.append("start", eventStart);
      formData.append("end", eventEnd);
      formData.append("description", eventDescription);
      formData.append("size", qrSize);

      const res = await fetch("/api/qr/generate-event", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate event QR code");
      }

      const response = await res.json();
      setQrCodeImage(response.qrCode);
      toast({ title: "Success", description: "Event QR Code generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate event QR code", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const readQRCode = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsReading(true);
    setQrReadResult("");
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/qr/read", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to read QR code");
      }

      const response = await res.json();
      setQrReadResult(response.data);
      toast({ title: "Success", description: "QR Code read successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to read QR code", variant: "destructive" });
    } finally {
      setIsReading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCodeImage) return;
    
    const link = document.createElement("a");
    link.href = qrCodeImage;
    link.download = `qrcode-${activeTab}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({ title: "Success", description: "QR Code downloaded!" });
  };

  return (
    <>
      <Helmet>
        <title>QR Code Generator & Reader - Create WiFi, vCard, Email QR Codes Free</title>
        <meta name="description" content="Free online QR code generator and reader. Create QR codes for URLs, WiFi, vCard, email, phone, and calendar events. Scan and decode QR codes from images. Fast, secure, and easy to use." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center space-y-4 mb-8">
                <div className="flex justify-center mb-4">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <QrCode className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  QR Code Generator & Reader
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Create and scan QR codes for URLs, WiFi networks, contact cards, emails, and more. Free, fast, and secure.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create QR Code</CardTitle>
                      <CardDescription>Choose the type of QR code you want to generate</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-1">
                          <TabsTrigger value="url" className="gap-2" data-testid="tab-url">
                            <QrCode className="h-4 w-4" />
                            <span className="hidden sm:inline">URL</span>
                          </TabsTrigger>
                          <TabsTrigger value="wifi" className="gap-2" data-testid="tab-wifi">
                            <Wifi className="h-4 w-4" />
                            <span className="hidden sm:inline">WiFi</span>
                          </TabsTrigger>
                          <TabsTrigger value="vcard" className="gap-2" data-testid="tab-vcard">
                            <User className="h-4 w-4" />
                            <span className="hidden sm:inline">vCard</span>
                          </TabsTrigger>
                          <TabsTrigger value="email" className="gap-2" data-testid="tab-email">
                            <Mail className="h-4 w-4" />
                            <span className="hidden sm:inline">Email</span>
                          </TabsTrigger>
                          <TabsTrigger value="phone" className="gap-2" data-testid="tab-phone">
                            <Phone className="h-4 w-4" />
                            <span className="hidden sm:inline">Phone</span>
                          </TabsTrigger>
                          <TabsTrigger value="event" className="gap-2" data-testid="tab-event">
                            <Calendar className="h-4 w-4" />
                            <span className="hidden sm:inline">Event</span>
                          </TabsTrigger>
                          <TabsTrigger value="read" className="gap-2" data-testid="tab-read">
                            <ImageIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">Read</span>
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="url" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="text-input">Text or URL</Label>
                            <Textarea
                              id="text-input"
                              placeholder="Enter text or URL..."
                              value={textInput}
                              onChange={(e) => setTextInput(e.target.value)}
                              data-testid="input-text"
                              className="min-h-[100px]"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="size">Size (px)</Label>
                              <Select value={qrSize} onValueChange={setQrSize}>
                                <SelectTrigger id="size" data-testid="select-size">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="128">128x128</SelectItem>
                                  <SelectItem value="256">256x256</SelectItem>
                                  <SelectItem value="512">512x512</SelectItem>
                                  <SelectItem value="1000">1000x1000</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="error-correction">Error Correction</Label>
                              <Select value={errorCorrection} onValueChange={setErrorCorrection}>
                                <SelectTrigger id="error-correction" data-testid="select-error-correction">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="L">Low (7%)</SelectItem>
                                  <SelectItem value="M">Medium (15%)</SelectItem>
                                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                                  <SelectItem value="H">High (30%)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button onClick={generateURLQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-url">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="wifi" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="wifi-ssid">Network Name (SSID) *</Label>
                            <Input
                              id="wifi-ssid"
                              placeholder="My WiFi Network"
                              value={wifiSSID}
                              onChange={(e) => setWifiSSID(e.target.value)}
                              data-testid="input-wifi-ssid"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="wifi-password">Password</Label>
                            <Input
                              id="wifi-password"
                              type="password"
                              placeholder="Enter password"
                              value={wifiPassword}
                              onChange={(e) => setWifiPassword(e.target.value)}
                              data-testid="input-wifi-password"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="wifi-encryption">Encryption</Label>
                            <Select value={wifiEncryption} onValueChange={setWifiEncryption}>
                              <SelectTrigger id="wifi-encryption" data-testid="select-wifi-encryption">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="WPA">WPA/WPA2</SelectItem>
                                <SelectItem value="WEP">WEP</SelectItem>
                                <SelectItem value="nopass">No Encryption</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="wifi-hidden"
                              checked={wifiHidden}
                              onCheckedChange={setWifiHidden}
                              data-testid="switch-wifi-hidden"
                            />
                            <Label htmlFor="wifi-hidden">Hidden Network</Label>
                          </div>
                          <Button onClick={generateWiFiQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-wifi">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate WiFi QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="vcard" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="vcard-name">Name *</Label>
                            <Input
                              id="vcard-name"
                              placeholder="John Doe"
                              value={vcardName}
                              onChange={(e) => setVcardName(e.target.value)}
                              data-testid="input-vcard-name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vcard-phone">Phone</Label>
                            <Input
                              id="vcard-phone"
                              placeholder="+1234567890"
                              value={vcardPhone}
                              onChange={(e) => setVcardPhone(e.target.value)}
                              data-testid="input-vcard-phone"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vcard-email">Email</Label>
                            <Input
                              id="vcard-email"
                              type="email"
                              placeholder="john@example.com"
                              value={vcardEmail}
                              onChange={(e) => setVcardEmail(e.target.value)}
                              data-testid="input-vcard-email"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vcard-org">Organization</Label>
                            <Input
                              id="vcard-org"
                              placeholder="Company Name"
                              value={vcardOrg}
                              onChange={(e) => setVcardOrg(e.target.value)}
                              data-testid="input-vcard-org"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vcard-url">Website</Label>
                            <Input
                              id="vcard-url"
                              placeholder="https://example.com"
                              value={vcardUrl}
                              onChange={(e) => setVcardUrl(e.target.value)}
                              data-testid="input-vcard-url"
                            />
                          </div>
                          <Button onClick={generateVCardQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-vcard">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate vCard QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="email" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="email-to">Email Address *</Label>
                            <Input
                              id="email-to"
                              type="email"
                              placeholder="contact@example.com"
                              value={emailTo}
                              onChange={(e) => setEmailTo(e.target.value)}
                              data-testid="input-email-to"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-subject">Subject</Label>
                            <Input
                              id="email-subject"
                              placeholder="Email subject"
                              value={emailSubject}
                              onChange={(e) => setEmailSubject(e.target.value)}
                              data-testid="input-email-subject"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-body">Message</Label>
                            <Textarea
                              id="email-body"
                              placeholder="Email message"
                              value={emailBody}
                              onChange={(e) => setEmailBody(e.target.value)}
                              data-testid="input-email-body"
                              className="min-h-[100px]"
                            />
                          </div>
                          <Button onClick={generateEmailQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-email">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate Email QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="phone" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone-number">Phone Number *</Label>
                            <Input
                              id="phone-number"
                              placeholder="+1234567890"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              data-testid="input-phone-number"
                            />
                          </div>
                          <Button onClick={generatePhoneQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-phone">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate Phone QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="event" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="event-title">Event Title *</Label>
                            <Input
                              id="event-title"
                              placeholder="Meeting with Team"
                              value={eventTitle}
                              onChange={(e) => setEventTitle(e.target.value)}
                              data-testid="input-event-title"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-location">Location</Label>
                            <Input
                              id="event-location"
                              placeholder="Conference Room A"
                              value={eventLocation}
                              onChange={(e) => setEventLocation(e.target.value)}
                              data-testid="input-event-location"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="event-start">Start Date & Time *</Label>
                              <Input
                                id="event-start"
                                type="datetime-local"
                                value={eventStart}
                                onChange={(e) => setEventStart(e.target.value)}
                                data-testid="input-event-start"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="event-end">End Date & Time</Label>
                              <Input
                                id="event-end"
                                type="datetime-local"
                                value={eventEnd}
                                onChange={(e) => setEventEnd(e.target.value)}
                                data-testid="input-event-end"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-description">Description</Label>
                            <Textarea
                              id="event-description"
                              placeholder="Event details"
                              value={eventDescription}
                              onChange={(e) => setEventDescription(e.target.value)}
                              data-testid="input-event-description"
                              className="min-h-[80px]"
                            />
                          </div>
                          <Button onClick={generateEventQRCode} disabled={isGenerating} className="w-full" data-testid="button-generate-event">
                            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Generate Event QR Code
                          </Button>
                        </TabsContent>

                        <TabsContent value="read" className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="qr-image">Upload QR Code Image</Label>
                            <Input
                              id="qr-image"
                              type="file"
                              accept="image/*"
                              onChange={readQRCode}
                              disabled={isReading}
                              data-testid="input-qr-image"
                            />
                          </div>
                          {isReading && (
                            <div className="flex items-center justify-center p-8">
                              <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            </div>
                          )}
                          {qrReadResult && (
                            <Card>
                              <CardHeader>
                                <CardTitle>QR Code Content</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm break-all" data-testid="text-qr-result">{qrReadResult}</p>
                              </CardContent>
                            </Card>
                          )}
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle>QR Code Preview</CardTitle>
                      <CardDescription>Your generated QR code will appear here</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {qrCodeImage ? (
                        <>
                          <div className="flex justify-center p-4 bg-muted rounded-md">
                            <img src={qrCodeImage} alt="Generated QR Code" className="max-w-full h-auto" data-testid="img-qr-preview" />
                          </div>
                          <Button onClick={downloadQRCode} className="w-full" variant="outline" data-testid="button-download-qr">
                            <Download className="h-4 w-4 mr-2" />
                            Download QR Code
                          </Button>
                        </>
                      ) : (
                        <div className="flex items-center justify-center p-12 bg-muted rounded-md text-muted-foreground">
                          <div className="text-center">
                            <QrCode className="h-16 w-16 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No QR code generated yet</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
