import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
// import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Footer/>
    </>
  )
}

export default App
