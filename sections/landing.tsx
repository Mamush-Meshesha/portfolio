import Header from '@/components/navigation/header/header'
import ScrollDown from '@/components/ui/7.1 scroll-down'
import FancyButton from '@/components/ui/fancy-button'
import LiveClock from '@/components/ui/live-clock'
import MagneticWreapper from '@/components/visualEffect/magnetic-wrapper'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      {/* {header} */}
      <Header />
      {/* show magnetic button in small screeen */}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWreapper>
          <FancyButton text="lets talk" icon={<FaArrowRight />} />
        </MagneticWreapper>
      </div>
      {/* live clock */}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Africa/Addis Ababa" />
      </div>
      {/* slogan */}
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[1-vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]  ">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase ">
          <div>
            <span>code</span>
          </div>
          <div>
            <span>crafting</span>
          </div>
          <div className="relative">
            <span>brillience</span>
            <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal  ">
              <span>empowering innovation</span>
              <br />
              <span>througn inspired design</span>
              <br />
              <span>where challlenges spark creativity</span>
              <span>and solution redefine possibilities</span>
            </div>
          </div>
        </div>
        {/* magnetic scroll down */}
        <MagneticWreapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10 ">
          <ScrollDown />
        </MagneticWreapper>
      </div>
    </div>
  );
}

export default LandingSection
