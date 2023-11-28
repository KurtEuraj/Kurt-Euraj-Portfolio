import React, { useState } from 'react'
import Button from './Button'

function ProjectCard({img, name, link, description, tech}) {
    const [showMore, setShowMore] =  useState(false);
  return (
    <div className="flex flex-col items-center max-w-[450px] gap-[25px] p-[25px] rounded-md project-card" >
        <img className='xs:w-[400px] xs:h-[266px] rounded-md' src={img} alt={name} />
        <h3 className='text-white text-[26px] xs:text-[30px] font-semibold uppercase' >{name}</h3>
        <div className="flex gap-2" >
            {tech.map((tech) => (
                <img key={tech.name} className="w-[30px] h-[30px] " src={tech.img} alt={`${tech.name} icon`} />
            ))}
        </div>
        <div className="horizontal-divider h-[4px] w-[100%] xs:w-[300px]"></div>
        <div className={`${!showMore ? "h-[200px] overflow-hidden" : "h-[auto]"} flex flex-col items-start gap-[8px]`}>
            <p className={`${!showMore ? "h-[150px] overflow-hidden" : "h-[auto]"} text-white text-[16px]`} >{description}</p>
            <button className='py-1 px-4 transition-all text-white rounded-full bg-[#333] cursor-pointer self-end hover:bg-[#444]' onClick={() => setShowMore(showMore => !showMore)} >{!showMore ? "More" : "Less"}</button>
        </div>
        <div className="self-start mb-[20px]" >
            <Button size="sm" link={link} target="_blank" rel="noopener noreferrer">Check it out!</Button>
        </div>
    </div>
  )
}

export default ProjectCard