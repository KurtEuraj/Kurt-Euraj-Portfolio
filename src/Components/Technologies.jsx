import React from 'react'
import PercentBar from './PercentBar'
import { technologies } from '../constants'

function Technologies() {
  return (
    <div id="technologies" className="mb-[100px]" >
      <h2 className="text-white text-[42px] font-semibold mb-8" >Technologies</h2>
      <div>
        {technologies.map((tech) => (
          <PercentBar key={tech.name} name={tech.name} percent={tech.percent} level={tech.level}/>
        ))}
      </div>
    </div>
  )
}

export default Technologies