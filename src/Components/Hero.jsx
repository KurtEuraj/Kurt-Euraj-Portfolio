import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col justify-between items-start sm:mt-[100px] mt-7 mb-[100px]">
      <h1 className="text-white sm:text-[64px] text-[32px] font-semibold" >Front End Developer</h1>
      <p className="text-[#BCBCBC] sm:text-[24px] text-[20px] sm:max-w-[760px] max-w-[460px] sm:pt-[15px] pt-[10px] font-semibold mb-[40px]" >
      Specializing in rapid, efficient solutions. From overcoming challenges to embracing innovation, let's turn your ideas into reality.
      </p>
      <Button size="med" link="projects" samePage="true" >Let's Begin!</Button>
    </section>
  )
}

export default Hero