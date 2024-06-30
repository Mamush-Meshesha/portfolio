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
            <div className="space-y-4 py-8">
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                {/* Me card */}
                
                  </div>
            </div>
          </div>
        )}
      </WaterWaveWrapper>
    </div>
  );
}
