import React from 'react'
import python from "/python.svg"
import js from "/js.svg"
import ts from "/ts.svg"
import html from "/html.svg"
import tailwind from "/tailwind.svg"
import go from "/go.svg"

function LanguageBar() {
  return (
    <div className='w-full bg-[#1a1823] text-white  h-64 flex justify-center items-center'>
        <img src={python} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>
        <img src={js} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>
        <img src={ts} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>
        <img src={html} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>
        <img src={tailwind} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>
        <img src={go} className='grayscale opacity-20 size-2/5 hover:opacity-40 transition-opacity ease-out duration-300'/>

    </div>
  )
}

export default LanguageBar
