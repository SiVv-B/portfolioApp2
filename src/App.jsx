import React, {useState} from "react"
import './app.scss'
import Contact from './components/contact/Contact'
import TopBar from './components/topBar/TopBar'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Menu from "./components/menu/Menu"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
         
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
