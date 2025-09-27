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

function App() {
  return (
    <>
  <div className='bg-[url("/texture.jpg")] -z-1 w-full h-screen bg-[#1a1823]/97'>
    <main className="bg-[#1a1823]/97 h-full w-screen flex flex-col ">
      <Navigation/>
      <div className='flex  items-center ml-15 mr-10 justify-between h-screen z-1'>
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
