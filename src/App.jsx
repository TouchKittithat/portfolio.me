import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <div id='home'><Home/></div>
      <div id='skill'><Skill/></div>
      <div id='project'><Project/></div>
    </main>
  )
}

export default App
