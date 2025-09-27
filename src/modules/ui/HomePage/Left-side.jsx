import React from 'react'
import Button from 'react-bootstrap/Button'
import "./left-side.css"

function LeftSide() {
  return (
    <div className='text-white flex flex-col flex-1 gap-10'>
      <h1 className='slide-in-left1'>Manav Kamdar</h1>
      <p className='text-white/70 slide-in-left2'>JavaScript FullStack Developer</p>
      <p className='text-white/70 slide-in-left3'>AI | Security | Efficiency</p>
      <Button className='bg-[#a995c9]! text-white w-xs hover:bg-[#e0ddef]/90! hover:text-black/80! hover:scale-105! transform transition-all duration-1000 ease-in-out border-0!'>
        Contact Me
      </Button>
    </div>
  )
}

export default LeftSide
