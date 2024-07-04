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
      <div id='#' className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[1-vw] 2xl:leading-[6rem] font-medium h-[40rem] tracking-[-0.3rem]  ">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[8vw] lg:text-[6vw] 2xl:text-[5rem] uppercase ">
          <div>
            <span>I am</span>
          </div>
          <div>
            <span>Mamush Meshesha</span>
          </div>
          <div className="relative">
            <span>Full Stack Website Developer</span>
            <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal  ">
              <span></span>
              <br />
              <span></span>
              <br />
              <span>If you want to change,</span>
              <span> be the change</span>
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
