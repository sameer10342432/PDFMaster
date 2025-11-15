import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - PDF Tools</title>
        <meta name="description" content="Terms of Service for PDF Tools. Read our terms and conditions for using our free online PDF manipulation tools." />
        <meta property="og:title" content="Terms of Service - PDF Tools" />
        <meta property="og:description" content="Terms and conditions for using our PDF tools service." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Terms of Service
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
                  <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    By accessing and using PDF Tools, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Use License</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Permission is granted to use PDF Tools for personal and commercial purposes under the following conditions:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>The service is provided "as is" for PDF file manipulation</li>
                    <li>You may use the tools for legitimate business and personal purposes</li>
                    <li>You must not attempt to reverse engineer, decompile, or disassemble the service</li>
                    <li>You must not use the service for any illegal or unauthorized purpose</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">User Responsibilities</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    When using our service, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Only upload PDF files that you own or have the right to modify</li>
                    <li>Not upload files containing malicious code, viruses, or harmful content</li>
                    <li>Not use the service to process illegal, offensive, or copyrighted content without authorization</li>
                    <li>Not attempt to overload or disrupt the service infrastructure</li>
                    <li>Respect the intellectual property rights of others</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Service Availability</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We strive to provide reliable service, but we do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Uninterrupted or error-free service operation</li>
                    <li>That the service will meet all your specific requirements</li>
                    <li>That results will be 100% accurate in all cases</li>
                    <li>That the service will be available at all times</li>
                  </ul>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue the service at any time without prior notice.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">File Processing and Storage</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    When you upload files to our service:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Files are processed temporarily and automatically deleted after processing</li>
                    <li>We do not claim ownership of your files or their content</li>
                    <li>You are responsible for maintaining backup copies of your original files</li>
                    <li>We are not liable for any loss of data or files</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Intellectual Property</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    The service, including its design, functionality, and features, is owned by PDF Tools and is protected by copyright and intellectual property laws. You may not copy, modify, or distribute any part of the service without explicit permission.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Limitation of Liability</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    PDF Tools and its operators shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Any direct, indirect, incidental, or consequential damages</li>
                    <li>Loss of data, profits, or business opportunities</li>
                    <li>Damages resulting from service interruptions or errors</li>
                    <li>Any damages arising from your use or inability to use the service</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Disclaimer</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    The service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Acceptable Use</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Use the service for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to the service or its systems</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Use automated systems to access the service without permission</li>
                    <li>Impersonate others or provide false information</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Modifications to Terms</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes constitutes acceptance of the modified terms.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Governing Law</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    These terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Information</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us through our Contact Us page.
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
