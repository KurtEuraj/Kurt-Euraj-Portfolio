import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'

function Projects() {
  return (
    <div id='projects' className=" sm:mb-[100px]" >
      <h2 className="text-white text-[42px] font-semibold mb-8" >Projects</h2>
      <div className="flex justify-center items-start flex-wrap gap-[60px] xs:gap-[100px]" >
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} img={project.img} description={project.description} link={project.link} tech={project.tech}/>
        ))}
      </div>
    </div>
  )
}

export default Projects