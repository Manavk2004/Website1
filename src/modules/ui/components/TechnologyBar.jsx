import React from 'react'
import node from "/node.svg"
import next from "/next.svg"
import express from "/express.svg"
import react from "/react.svg"
import sql from "/sql.svg"
import fastapi from "/fastapi.svg"

function TechnologyBar() {
  return (
      <div className='w-full bg-[#1a1823] text-white  h-64 flex justify-center items-center'>
        <img src={node} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={next} className=' grayscale opacity-20 size-2/5 transition-opacity hover:opacity-60 ease-out duration-300'/>
        <img src={express} className=' grayscale opacity-30 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={react} className=' grayscale opacity-30 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={sql} className=' grayscale opacity-30 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={fastapi} className=' grayscale opacity-30 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
      </div>
  )
}

export default TechnologyBar
