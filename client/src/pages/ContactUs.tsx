import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us - PDF & Media Tools</title>
        <meta name="description" content="Contact PDF & Media Tools for support, questions, or feedback. We're here to help you with all your PDF, audio, and video needs." />
        <meta property="og:title" content="Contact Us - PDF & Media Tools" />
        <meta property="og:description" content="Get in touch with us for support and inquiries." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Contact Us
                </h1>
                <p className="text-xl text-muted-foreground">
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <a href="mailto:support@pdftools.com" className="text-primary hover:underline text-sm">
                    support@pdftools.com
                  </a>
                </Card>

                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Feedback</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Share your thoughts and help us improve our service
                  </p>
                  <a href="mailto:feedback@pdftools.com" className="text-primary hover:underline text-sm">
                    feedback@pdftools.com
                  </a>
                </Card>

                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <HelpCircle className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Help Center</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Browse our articles and guides for quick answers
                  </p>
                  <a href="/articles" className="text-primary hover:underline text-sm">
                    Visit Articles
                  </a>
                </Card>
              </div>

              <Card className="p-8 md:p-12">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Have questions, feedback, or need assistance? We're here to help! Whether you're experiencing technical issues, have suggestions for new features, or just want to share your experience, we'd love to hear from you.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">General Inquiries</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    For general questions about our services, features, or how to use specific tools, please email us at <a href="mailto:support@pdftools.com" className="text-primary hover:underline">support@pdftools.com</a>. We typically respond within 24 hours during business days.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Technical Support</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    If you're experiencing technical issues or errors while using our tools, please include the following information in your email:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Which tool you were using when the issue occurred</li>
                    <li>Your browser and operating system</li>
                    <li>A description of what happened and any error messages</li>
                    <li>Steps to reproduce the issue, if possible</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Feature Requests</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We're always looking to improve and add new features. If you have ideas for new PDF tools or enhancements to existing ones, send us your suggestions at <a href="mailto:feedback@pdftools.com" className="text-primary hover:underline">feedback@pdftools.com</a>.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Business Inquiries</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    For partnership opportunities, business collaborations, or enterprise solutions, please contact us at <a href="mailto:business@pdftools.com" className="text-primary hover:underline">business@pdftools.com</a>.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Privacy and Security Concerns</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Your privacy and security are our top priorities. If you have questions or concerns about how we handle your data, please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> or contact us directly at <a href="mailto:privacy@pdftools.com" className="text-primary hover:underline">privacy@pdftools.com</a>.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 mt-8">Response Time</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    We strive to respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent technical issues, please mark your email as "Urgent" in the subject line.
                  </p>

                  <div className="bg-muted/30 p-6 rounded-lg mt-8">
                    <h4 className="text-lg font-semibold mb-2">Quick Tips</h4>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Check our <a href="/articles" className="text-primary hover:underline">Articles page</a> for guides and tutorials</li>
                      <li>Many common questions are answered in our tool-specific articles</li>
                      <li>Make sure to check your spam folder for our response</li>
                      <li>Include as much detail as possible in your message for faster resolution</li>
                    </ul>
                  </div>
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
