import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - PDF & Media Tools</title>
        <meta name="description" content="Privacy Policy for PDF & Media Tools. Learn how we protect your data and respect your privacy when using our free PDF, audio, and video tools." />
        <meta property="og:title" content="Privacy Policy - PDF & Media Tools" />
        <meta property="og:description" content="Our commitment to protecting your privacy and data security." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xl text-muted-foreground">
                  Last updated: November 15, 2025
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto max-w-4xl px-4">
              <Card className="p-8 md:p-12">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Welcome to PDF & Media Tools. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information when you use our free online PDF, audio, and video tools.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Our service is designed with privacy in mind:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>We do not require user registration or accounts</li>
                    <li>We do not collect personal information such as names, emails, or addresses</li>
                    <li>We may collect anonymous usage statistics to improve our service</li>
                    <li>We use standard web server logs that may include IP addresses and browser information</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">How We Handle Your Files</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Your file security and privacy are our top priorities:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>All PDF processing happens in your browser when possible</li>
                    <li>Files uploaded for processing are automatically deleted after processing</li>
                    <li>We do not store, share, or access the content of your PDF files</li>
                    <li>All data transmission is encrypted using industry-standard SSL/TLS</li>
                    <li>Temporary files are stored only during active processing and are immediately deleted</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Cookies and Tracking</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We use minimal cookies and tracking:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>No third-party advertising cookies</li>
                    <li>Anonymous analytics to understand usage patterns and improve our service</li>
                    <li>You can disable cookies in your browser settings, though some features may not work properly</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Data Security</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Encrypted connections (HTTPS/SSL)</li>
                    <li>Secure file processing infrastructure</li>
                    <li>Automatic deletion of uploaded files</li>
                    <li>Regular security updates and monitoring</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Third-Party Services</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We may use third-party services for analytics and service improvement. These services are carefully selected and comply with privacy regulations.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Your Rights</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Use our service without providing personal information</li>
                    <li>Request information about any data we may have collected</li>
                    <li>Opt-out of analytics tracking</li>
                    <li>Contact us with privacy concerns or questions</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Children's Privacy</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Policy</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us through our Contact Us page.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
