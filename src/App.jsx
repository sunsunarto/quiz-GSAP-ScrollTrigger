import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Project from './Components/Project.jsx'
import HelpShelter from './Components/HelpShelter.jsx'
import Teams from './Components/Teams.jsx'
import SupportUs from './Components/SupportUs.jsx'
import Partners from './Components/Partners.jsx'
import Footer from './Components/Footer.jsx'
import ButtonDonate from './Components/ButtonDonate.jsx'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <Project/>
      <HelpShelter/>
      <Teams/>
      <br/>
      <SupportUs/>
      <br/>
      <Partners/>
      <Footer/>
      <ButtonDonate/>
    </>
  )
}

export default App
