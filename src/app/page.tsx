import HeroSection from '@/components/sections/HeroSection';
import MissionVision from '@/components/sections/MissionVision';
import AboutUs from '@/components/sections/AboutUs';
import ClientTestimonials from '@/components/sections/ClientTestimonials';
import Factory from '@/components/sections/Factory';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MissionVision />
            <Factory />
             <AboutUs />
      <ClientTestimonials />
    </main>
  );
}
