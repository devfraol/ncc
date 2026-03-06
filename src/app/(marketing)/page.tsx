import CTASection from '@/components/sections/CTASection';
import CoursesSection from '@/components/sections/CoursesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import LabsSection from '@/components/sections/LabsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function NccHomepagePage() {
  return (
    <main className="bg-[#030712] text-white">
      <HeroSection />
      <CoursesSection />
      <LabsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
