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

export default function Home() {
  return (
    <div>
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {() => (
          <div className="w-full pt-20">
            <div className="max-w-2xl mx-auto">
              <Card title="ui components">
                <div className="grid grid-cols-4">
                  <Button>Basic button</Button>
                  <Button>
                    <GoHomeFill />
                    Basic button
                  </Button>
                  <Button isIcon>
                    <FaUser />
                  </Button>
                  <Button link="https://www.google.com">google</Button>
                </div>
                <Input type="text" placeholder="Full Name" />
                <Input type="text" placeholder="mamush" icon={<FaUser />} />
                <TextArea placeholder="descroption" icon={<FaUser />} />
                <Profile />
                <FancyButton text="contact us" icon={<FaArrowRight />} />
                <LiveClock timeZone="Africa/Casablanca "/>
              </Card>
            </div>
          </div>
        )}
      </WaterWaveWrapper>
    </div>
  );
}
