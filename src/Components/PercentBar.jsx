import React from 'react'

function PercentBar({name, percent, level}) {
    const percentWidth = {
        "10%": "w-[10%]",
        "20%": "w-[20%]",
        "30%": "w-[30%]",
        "40%": "w-[40%]",
        "50%": "w-[50%]",
        "60%": "w-[60%]",
        "70%": "w-[70%]",
        "80%": "w-[80%]",
        "90%": "w-[90%]",
        "100%": "w-full",
    }
  return (
    <div className="max-w-[1320px] m-auto mb-6 xs:mb-[55px]" >
        <div className="flex justify-between items-baseline mx-1 xs:mx-6 mb-1 xs:mb-0">
            <h3 className="text-white text-[18px] xs:text-[30px] font-semibold" >{name}</h3>
            <p className="text-white text-[16px] xs:text-[24px] font-semibold sm:mr-8" >{level}</p>
        </div>
        <div className="bg-[#162950] h-[10px] xs:h-[20px] sm:h-[32px] rounded-[83px]" >
            <div className={`${percentWidth[percent]} bg-gradient h-full rounded-[83px]`}></div>
        </div>
    </div>
  )
}

export default PercentBar