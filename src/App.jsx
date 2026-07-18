import React from 'react'
import AmbientShell from './components/ambient/AmbientShell'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsDashboard from './components/ProjectsDashboard'
import SkillsMatrix from './components/SkillsMatrix'
import Hero from './pages/Hero'

function App() {
  return (
    <AmbientShell>
      <Navbar />
      <main>
        <Hero />
        <SkillsMatrix />
        <ProjectsDashboard />
      </main>
      <Footer />
    </AmbientShell>
  )
}

export default App
