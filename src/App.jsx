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
import './App.css'

const App = () => {
  return (
    <>

      <div className=" top-[-30vw] left-[-10vw] absolute w-[50vw] h-[50vw] bg-[#3A8CA6] rounded-full glowBlue "></div>
      <div className=" top-[-30vw] right-[-14vw] absolute w-[50vw] h-[50vw] bg-[#3A8CA6] rounded-full glowBlue "></div>

      <div className=" top-[40vw] left-[5vw] absolute w-[90vw] opacity-[.7] h-[60vw] bg-[#0ED984] rounded-full glowGreen "></div>

      <div className=" top-[140vw] left-[5vw] absolute w-[50vw] opacity-[.6] h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div>
      <div className=" top-[160vw] left-[60vw] absolute w-[30vw] h-[30vw] bg-[#3A8CA6] rounded-full glowBlue "></div>

      <div className=" top-[160vw] left-[60vw] absolute w-[30vw] h-[30vw] opacity-[.4] bg-[#3A8CA6] rounded-full glowBlue "></div>
      <div className=" top-[140vw] left-[5vw] absolute w-[50vw] opacity-[.4] h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div>

      <div className=" top-[240vw] left-[10vw] absolute w-[30vw] opacity-[.6] h-[30vw] bg-[#3A8CA6] rounded-full glowBlue "></div>
      <div className=" top-[260vw] right-[-55vw] absolute w-[80vw] opacity-[.6] h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div>

      <div className=" top-[320vw] right-[0vw] absolute w-[100vw] opacity-[.3] h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div>

      <div className=' w-screen h-auto min-h-screen bg-black -z-20 flex flex-col text-white overflow-x-hidden scroll-smooth'>

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
