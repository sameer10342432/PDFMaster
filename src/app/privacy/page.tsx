import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </div>
  );
}