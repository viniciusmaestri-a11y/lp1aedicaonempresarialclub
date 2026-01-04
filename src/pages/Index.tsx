import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AudienceSection from '@/components/AudienceSection';
import BenefitsSection from '@/components/BenefitsSection';
import SpeakerSection from '@/components/SpeakerSection';
import EventInfoSection from '@/components/EventInfoSection';
import SocialProofSection from '@/components/SocialProofSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <BenefitsSection />
      <SpeakerSection />
      <EventInfoSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
