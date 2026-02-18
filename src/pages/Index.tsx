import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import PromoSection from "@/components/PromoSection";
import GiveawaySection from "@/components/GiveawaySection";
import ExploreSection from "@/components/ExploreSection";
import TVCSection from "@/components/TVCSection";
import ReelsGallery from "@/components/ReelsGallery";
import AppDownloadSection from "@/components/AppDownloadSection";
import FooterCTA from "@/components/FooterCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSlider />
      <div id="promo"><PromoSection /></div>
      <div id="tvc"><TVCSection /></div>
      <div id="program"><ReelsGallery /></div>
      <div id="explore"><ExploreSection /></div>
      <div id="app-download"><AppDownloadSection /></div>
    </main>
    <FooterCTA />
    <WhatsAppButton />
  </div>
);

export default Index;
