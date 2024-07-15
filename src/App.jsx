import React from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Info from './components/Info'
import InfoSecond from './components/InfoSecond'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import Work from './components/Work'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <>
      <div className=' w-screen h-auto min-h-screen bg-black flex flex-col text-white overflow-x-hidden'>
        <Nav />
        <Hero />
        <VideoSection />
        <Info />
        <InfoSecond />
        <Gallery />
        <Work />
        <About />
        <Footer />

      </div>
      
    </>
  )
}

export default App
