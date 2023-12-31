import React, { useEffect } from 'react'
import { sliderLogos } from '../constants';

function LogoSlider() {

  return (
    <div className="flex items-center justify-center sm:mb-[80px]" id="technologies">
        <div className="w-[200%] h-[10rem] overflow-hidden relative">
            <div className="w-[200%] flex items-center h-[10rem] justify-around absolute left-0 animate">
                {sliderLogos.map((i) => {
                return (
                    <div key={i.name} className="flex justify-center items-center w-[20rem] h-[5rem]">
                    <img className="h-[2rem] xs:h-[2.5rem] ss:h-[3rem] sm:h-[4rem] md:h-[100%]" src={i.img} />
                    </div>
                );
                })}
                {sliderLogos.map((i) => {
                return (
                    <div key={i.name} className="flex justify-center items-center w-[20rem] h-[5rem]">
                    <img className="h-[2rem] xs:h-[2.5rem] ss:h-[3rem] sm:h-[4rem] md:h-[100%]" src={i.img} />
                    </div>
                );
                })}
            </div>
        </div>
    </div>
  )
}

export default LogoSlider