import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './modules/ui/components/NavBar'
import LeftSide from './modules/ui/HomePage/Left-side'
import RightSide from './modules/ui/HomePage/Right-side'
import LanguageBar from './modules/ui/components/LanguageBar'
import Projects from './modules/ui/Projects/Projects'
import TechnologyBar from './modules/ui/components/TechnologyBar'
import Skills from './modules/ui/components/Skills'
import ToolsBar from './modules/ui/components/ToolsBar'
import { useEffect, useState, useRef } from 'react'

function App() {

  const [background, setBackground] = useState("/musai.png")

  const index = useRef(1)

  const images = ["/musai.png", "musai2.png", "nimbus.png", "nimbushp.png", "nimbushp2.png"]

  useEffect(() => {
    setInterval(() => {
      if(index.current === 5){
        index.current = 1
        setBackground(images[index.current])
      }else{
        index.current += 1
        setBackground(images[index.current])
      }
    }, 3000)
  }, [background])


  return (
    <>
  <div 
    className=' -z-1 w-full h-screen bg-[#1a1823]/99 bg-[url(/musai2.png)]'
  >
    <main className="bg-[#1a1823]/93 h-full w-screen flex flex-col ">
      <Navigation/>
      <div className='flex  items-center ml-15 mr-10 justify-between h-screen z-1 gap-50'>
        <LeftSide />
        <RightSide />
      </div>
      <div className='bg-[#1a1823]/97 '>
        <LanguageBar />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <TechnologyBar />
      </div>
      <div className='bg-[#1a1823]/97 '>
        <Skills />
      </div>
      <div>
        <ToolsBar />
      </div>
    </main>
  </div>
    </>
  )
}

export default App
