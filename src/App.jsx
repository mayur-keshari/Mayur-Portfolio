import './App.css'
import About from './sections/About'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Tape from './sections/Tape'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ContactCard from './components/ContactCard'
import { useState } from 'react'


function App() {

  return (
    <>
     <div className='bg-gray-900 text-white overflow-hidden'>
      <Header/>
      <Hero/>
      <Projects/>
      <Tape/>
      <About/>
      <Contact/>
      <ContactCard/>
      <Footer/>
     </div>
    </>
  )
}

export default App