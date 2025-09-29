import React from 'react'
import ProjectCard from '../components/Card'

function Projects() {
  return (
    <div className='bg-[#1a1823]/97 h-fit w-full grid grid-cols-13 auto-rows p-4'>
      <ProjectCard title="AI SaaS " description="AI Powered Customer Support Application " class="border-0! col-start-6 col-end-9 row-start-2 row-end-7" image="/nimbus.png" name="Echo"/>
      <ProjectCard title="MUSAI" description="AI Powered Music Recommendation App" class="border-0! col-start-2 col-end-5 row-start-2 row-end-7" image="/musai.png" name="MUSAI"/>
      <ProjectCard title="Nimbus KeyBoards" description="3D E-Commerce Website" class="border-0! col-start-10 col-end-13 row-start-2 row-end-7" image="/nimbus.png" name="Nimbus" url="https://3-d-keyboard-xqgl.vercel.app/"/>
    </div>
  )
}

export default Projects
