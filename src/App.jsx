import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Project from './Components/Project.jsx'
import HelpShelter from './Components/HelpShelter.jsx'
import Teams from './Components/Teams.jsx'
import ButtonDonate from './Components/ButtonDonate.jsx'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <Project/>
      <HelpShelter/>
      <Teams/>
      <ButtonDonate/>
    </>
  )
}

export default App
