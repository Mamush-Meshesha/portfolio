"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffect/water-wave";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWreapper from "@/components/visualEffect/magnetic-wrapper";
import ScrollDown from "@/components/ui/7.1 scroll-down";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured"

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
            <FeaturedSection />
          </div>
        )}
      </WaterWaveWrapper>
    </div>
  );
}
