import FancyButton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffect/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="w-full flex items-center justify-center md:justify-between p-8">
        <div className="">
          <Profile />
        </div>
        <div className="hidden md:block"> 
          <MagneticWrapper>
            <FancyButton text="Let's talk" icon={<FaArrowRight />} />
          </MagneticWrapper>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
