import React from 'react'
import { sliderLogos } from '../constants';

function LogoSlider() {
  return (
    <div className="flex items-center justify-center mb-[80px]" id="technologies">
        <div className="w-[200%] h-[10rem] overflow-hidden relative">
            <div className="w-[200%] flex items-center h-[10rem] justify-around absolute left-0 animate">
                {sliderLogos.map((i) => {
                return (
                    <div key={i.name} className="flex justify-center items-center w-[20rem] h-[5rem] grayscale">
                    <img className="h-[100%]" src={i.img} />
                    </div>
                );
                })}
                {sliderLogos.map((i) => {
                return (
                    <div key={i.name} className="flex justify-center items-center w-[20rem] h-[5rem] grayscale">
                    <img className="h-[100%]" src={i.img} />
                    </div>
                );
                })}
            </div>
        </div>
    </div>
  )
}

export default LogoSlider