"use client";
import WaterWaveWrapper from "@/components/visualEffect/water-wave";
import AboutSection from "@/sections/about";

import FeaturedSection from "@/sections/featured";

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
            {/* <LandingSection /> */}
            <AboutSection />

          </div>
        )}
      </WaterWaveWrapper>
    </div>
  );
}
