import React from 'react'
import { skills } from '../constants'

function Skills() {
  return (
    <div id="skills" className="mb-[100px]" >
      <h2 className="text-white text-[42px] font-semibold mb-8" >Additional Skills</h2>
      <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3 max-w-[1320px] m-auto" >
        {skills.map((skill) => (
          <p key={skill.name} className="text-white text-[24px] sm:text-[30px]" >{skill.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Skills