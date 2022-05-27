import React, {useState} from "react"
import './app.scss'
import TopBar from './components/topBar/TopBar'
import Menu from "./components/menu/Menu"
import IndexRoutes from "./components/routes/IndexRoutes.jsx"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
         
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">

         <IndexRoutes/>
      </div>
    </div>
  )
}

export default App
