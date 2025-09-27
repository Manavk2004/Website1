import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function Skills() {
    let bars = document.getElementsByClassName("progress-bar")
    for(let bar of bars){
        bar.style.backgroundColor = "#5a5370"
    }

  return (
    <div className='bg-[#1a1823]/97 text-white h-full mt-10 p-5 flex w-full'>
        <div className='flex flex-col gap-3 basis-1/2'>
            <h1 className='font-serif'>Languages</h1>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={90} className='w-[50%]'/>
                <p className='text-center mb-0'>JavaScript</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={50} className='w-[50%]'/>
                <p className='text-center mb-0'>Python</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={70} className='w-[50%]'/>
                <p className='text-center mb-0'>TypeScript</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={95} className='w-[50%]'/>
                <p className='text-center mb-0'>HTML</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={95} className='w-[50%]'/>
                <p className='text-center mb-0'>CSS</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={40} className='w-[50%]'/>
                <p className='text-center mb-0'>GoLang</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={70} className='w-[50%]'/>
                <p className='text-center mb-0'>SQL</p>
            </div>
        </div>
        <div className='flex flex-col flex-1 gap-3 font-serif'>
            <h1>Technologies</h1>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={90} className='w-[55%] '/>
                <p className='text-center mb-0'>React</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={60} className='w-[55%]'/>
                <p className='text-center mb-0'>Next.JS</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={80} className='w-[55%]'/>
                <p className='text-center mb-0'>Express.JS</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={40} className='w-[55%]'/>
                <p className='text-center mb-0'>FastAPI</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={90} className='w-[55%]'/>
                <p className='text-center mb-0'>Node.JS</p>
            </div>
            <div className='flex justify-start items-center ml-2 gap-10'>
                <ProgressBar now={70} className='w-[55%]'/>
                <p className='text-center mb-0'>Tailwind</p>
            </div>
            
        </div>
    </div>
  )
}

export default Skills
