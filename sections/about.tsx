import BackgroundCard from "@/components/card/background";
import CerteficateCard from "@/components/card/certefication";
import EducationCard from "@/components/card/education";
import ExperienceCard from "@/components/card/exprience";
import MeCard from "@/components/card/me";
import ResumeCard from "@/components/card/resume";
import StackCard from "@/components/card/stakc";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import Gallery from "@/components/ui/gallery";
import React from "react";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          {/* Me card */}
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <Card title="Instructor">Instractor</Card>
            <CerteficateCard />
          </div>
          <div className="space-y-4">
           <StackCard />
            <ExperienceCard />
           <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
           <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
