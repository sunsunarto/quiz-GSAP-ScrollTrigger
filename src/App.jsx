import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Project from './Components/Project.jsx'
import ButtonDonate from './Components/ButtonDonate.jsx'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <Project/>
      <ButtonDonate/>
    </>
  )
}

export default App
