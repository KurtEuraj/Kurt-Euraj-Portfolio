import React from 'react'

function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col justify-between items-start sm:mt-[100px] mt-7 mb-7">
      <h1 className="text-white sm:text-[64px] text-[32px] font-semibold" >Front End Developer</h1>
      <p className="text-[#BCBCBC] sm:text-[24px] text-[20px] sm:max-w-[760px] max-w-[460px] sm:pt-[15px] pt-[10px] font-semibold mb-[40px]" >
      Specializing in rapid front-end development and complex web solutions for companies of tomorrow
      </p>
    </section>
  )
}

export default Hero