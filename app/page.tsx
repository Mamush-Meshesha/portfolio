"use client";
import Header from "@/components/navigation/header/header";
import WaterWaveWrapper from "@/components/visualEffect/water-wave";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";

import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <div className="h-screen">
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="2"
        resolution="2048"
      >
        {() => (
          <div>
            <LandingSection />
            <FeaturedSection />
            <AboutSection />
            <ContactSection />

          </div>
        )}
      </WaterWaveWrapper>
    </div>
  );
}
