import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DisclaimerHero from "@/components/disclaimer/DisclaimerHero";
import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DisclaimerHero />
      <DisclaimerContent />
      <Footer />
    </div>
  );
}