import React from 'react'
import Projects from '../components/Carousel'
import Images from '../components/Images'

function RightSide() {
  return (
    <div className=' h-[calc(100vh-96px)]  grid grid-cols-12 grid-rows-12 flex-1 mt-9 overflow-hidden'>
      <Images className={"col-start-1 col-end-13 row-start-1 row-end-4 rounded-2xl border-4 border-black object-cover"} image="/nimbushp.png"/>
      <Images className={"col-start-7 col-end-13 row-start-4 row-end-9 rounded-2xl border-4 border-black object-cover"} image="/musai2.jpg" />
      <Images className={"col-start-1 col-end-7 row-start-4 row-end-9 rounded-2xl border-4 border-black object-cover"} image="/Three.jpg" />
      <Images className={"col-start-1 col-end-13 row-start-9 row-end-12 rounded-2xl border-4 border-black object-cover"} image="/nimbushp2.png"/>
    </div>
  )
}

export default RightSide
