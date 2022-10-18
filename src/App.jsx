import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "../src/components/Navbar";
import AboutMe from './components/AboutMe';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Curriculums from './components/Curriculums';


function App() {

  return (
    <div className="bg-white">
      <Navbar />
      <AboutMe />
      <Stack />
      <Projects />
      <Curriculums />
      <Contacts />
    </div>
  )
}

export default App

//bg-green-outer-space
