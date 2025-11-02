import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TermsHero />
      <TermsContent />
      <Footer />
    </div>
  );
}