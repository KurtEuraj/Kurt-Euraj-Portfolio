import React from 'react'
import {Navbar, Hero, Projects, Technologies, Skills, About, Footer, LogoSlider} from "./Components"

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden" >

      <div className="sm:px-16 px-6 flex justify-center items-center" >
        <div className="xl:max-w-[1280px] w-full" >
          <Navbar />
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-start" >
        <div className="xl:max-w-[1280px] w-full">
          <Hero/>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-start" >
        <div className="xl:max-w-[1280px] w-full" >
          <Projects/>
          {/* <Technologies/> */}
          {/* <Skills/> */}
          <LogoSlider/>
          <About/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App