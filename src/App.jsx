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
import clsx from 'clsx'
import { IoIosArrowBack } from "react-icons/io";
import LanguageCard from './modules/ui/side-components/LanguageCard'

function App() {

  const [ contacts, showContact ] = useState(false)
  const [ transition, setTransition ] = useState(false)
  const [ techSection, setTechSection ] = useState("Languages")
  const [ theState, newState ] = useState(null)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <>
  <div 
    className=' bg-black relative gradient-bg overflow-visible gap-3'
  >
    <div className='flex flex-col gap-20 items-center min-h-screen'>
      <Navigation />
      <div className={clsx('text-white bg-black/20 backdrop-blur-lg h-full p-4 rounded-2xl flex flex-col justify-between w-2xl gap-20 glass')}>
        <div>
          <p className='body font-bold' >Hello, I'm</p>
          <h1 className='header text-3xl'>Manav Kamdar</h1>
        </div>
        <div >
          <p className=' text-white/80 text-2xl body'>JavaScript/TypeScript FullStack Developer</p>
          <p className='text-white/70 text-xl body'>Building applications with an emphasis on AI and security</p>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className={clsx('flex flex-col justify-center items-center rounded-2xl p-3 ', !contacts && "glowing-border", contacts && "gap-5")}>
            {!contacts && 
              <button className="contact-button cursor-pointer" onClick={() => showContact(true)}>Contact Me</button>
            } 
            {contacts && 
              <>
                <div className='flex justify-between items-center w-full gap-15'>
                  <button>
                    <a href='https://github.com/Manavk2004'>
                      <img src="/gh.png" className=' grayscale size-15 opacity-70 hover:scale-105 transition-transform duration-300 ease-in-out'/>
                    </a>
                  </button>
                  <button>
                    <img src="email.png" className=' grayscale size-15 opacity-70 hover:scale-105 transition-transform duration-300 ease-in-out'/>
                  </button>
                  <button>
                    <a href='https://www.linkedin.com/in/manav-kamdar-710086264/'>
                      <img src="linkedin.png" className=' grayscale size-15 opacity-70 hover:scale-105 transition-transform duration-300 ease-in-out'/>
                    </a>
                  </button>
                </div>
                <IoIosArrowBack className='size-4 flex-start hover:scale-125 cursor-pointer' onClick={() => showContact(false)}/>
              </>
            }
          </div>
        </div>
      </div>
    </div>
    <div className=' w-full grid grid-cols-13 grid-rows-7 h-fit mb-10'>
      <h1 className='col-start-4 col-end-11 row-start-1 row-end-2 text-center mt-2 header'>Skills & Technologies</h1>
      <div className='col-start-3 col-end-12 row-start-2 row-end-3 w-full flex justify-between items-center ml-3 mr-3 bg-black/40 p-3 rounded-full mb-4'>
        <button className={clsx('body border-1 rounded p-2 text-white/80 hover:scale-105 border-gray-500/20', techSection === "Languages" && "bg-gradient-to-r from-black to-indigo-800")} onClick={() => setTechSection("Languages")}>Languages</button>
        <button className={clsx('body border-1 rounded p-2 text-white/80 hover:scale-105 border-gray-500/20 border-box', techSection === "Frontend" && "bg-gradient-to-r from-black to-indigo-800")} onClick={() => setTechSection("Frontend")}>Frontend Tech</button>
        <button className={clsx('body border-1 rounded p-2 text-white/80 hover:scale-105 border-gray-500/20 border-box', techSection === "Backend" && "bg-gradient-to-r from-black to-indigo-800")} onClick={() => setTechSection("Backend")}>Backend Tech</button>
      </div>
      { techSection === "Languages" &&
        <>
          <LanguageCard image={"/python.svg"} name={"Python"} col={"col-start-2 col-end-4"} row={"row-start-3 row-end-5"} />
          <LanguageCard image={"/js.svg"} name={"JavaScript"} col={"col-start-5 col-end-7"} row={"row-start-3 row-end-5"} />
          <LanguageCard image={"/ts.svg"} name={"Python"} col={"col-start-8 col-end-10"} row={"row-start-3 row-end-5"} />
          <LanguageCard image={"/go.svg"} name={"GoLang"} col={"col-start-11 col-end-13"} row={"row-start-3 row-end-5"} />
          <LanguageCard image={"/html.svg"} name={"HTML5"} col={"col-start-3 col-end-5"} row={"row-start-6 row-end-10"} />
          <LanguageCard image={"/css.png"} name={"CSS3"} col={"col-start-6 col-end-8"} row={"row-start-6 row-end-10"} />
          <LanguageCard image={"/sql.svg"} name={"CSS3"} col={"col-start-9 col-end-11"} row={"row-start-6 row-end-10"} />
        </>
      }
      {techSection === "Frontend" &&
        <>
          <LanguageCard image={"/react.svg"} name={"ReactJS"} col={"col-start-2 col-end-4"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/node.svg"} name={"NodeJS"} col={"col-start-5 col-end-7"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/next.svg"} name={"NextJS"} col={"col-start-8 col-end-10"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/tailwind.svg"} name={"TailWindCSS"} col={"col-start-11 col-end-13"} row={"row-start-4 row-end-6"} />
        </>
      
      }
      {techSection === "Backend" && 
        <>
          <LanguageCard image={"/next.svg"} name={"NextJS"} col={"col-start-2 col-end-4"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/express.svg"} name={"ExpressJS"} col={"col-start-5 col-end-7"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/docker.svg"} name={"Docker"} col={"col-start-8 col-end-10"} row={"row-start-4 row-end-6"} />
          <LanguageCard image={"/git.svg"} name={"Git"} col={"col-start-11 col-end-13"} row={"row-start-4 row-end-6"} />


        </>
      }

    </div>
    <div className='w-full mt-20'>
      <h1 className='text-center header'>Projects</h1>
      <Projects />
    </div>

  </div>
    </>
  )
}

export default App
