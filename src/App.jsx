import React, { useState } from 'react'
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
import Main from './dashboard/Main'
import JoinUs from './components/Join'
import { useNavigate } from 'react-router-dom'



const App = () => {

  const navigate = useNavigate();
  
  const [dashboard, setDashboard] = useState(false)

  const handleClick = () => {
    console.log('cilick')
    navigate('/dashboard')
  }

  return (
    <>

      
      <div className=" top-[-30vw] opacity-50 left-[-10vw] absolute w-[50vw] h-[50vw] bg-[#3A8CA6] rounded-full glowBlue "></div>
      <div className=" top-[-30vw] opacity-50 right-[-14vw] absolute w-[50vw] h-[50vw] bg-[#3A8CA6] rounded-full glowBlue "></div>

      {/* <div className=" top-[40vw] left-[5vw] absolute w-[90vw] opacity-40 h-[60vw] bg-[#0ED984] rounded-full glowGreen "></div> */}
      <div className=" top-[40vw] left-[5vw] absolute w-[90vw] opacity-60 h-[60vw] bg-[#2ac3ff] rounded-full glowBlue "></div>


      {/* <div className=" top-[140vw] left-[5vw] absolute w-[50vw] opacity-40 h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div> */}
      <div className=" top-[140vw] left-[5vw] absolute w-[50vw] opacity-40 h-[50vw] bg-[#2ac3ff] rounded-full glowBlue "></div>

      <div className=" top-[160vw] left-[60vw] absolute w-[30vw] opacity-60 h-[30vw] bg-[#3A8CA6] rounded-full glowBlue "></div>

      

      <div className=" top-[240vw] left-[10vw] absolute w-[30vw] opacity-60 h-[30vw] bg-[#3A8CA6] rounded-full glowBlue "></div>
      {/* <div className=" top-[260vw] right-[-55vw] absolute w-[80vw] opacity-40 h-[50vw] bg-[#0ED984] rounded-full glowGreen "></div> */}
      <div className=" top-[260vw] right-[-55vw] absolute w-[80vw] opacity-40 h-[50vw] bg-[#2a98ff] rounded-full glowBlue "></div>


      <div className=" top-[320vw] right-[0vw] absolute w-[100vw] opacity-[.2] h-[50vw] bg-[#2a98ff] rounded-full glowBlue "></div>

      <div className=' w-screen h-auto min-h-screen bg-black -z-20 flex flex-col text-white overflow-x-hidden scroll-smooth'>

        <Nav />
        <Hero onGetStartedClick={handleClick} />
        <VideoSection />
        <Info />
        <InfoSecond />
        <Gallery />
        <Work />
        <JoinUs />
        <About />
        <Footer />

      </div>

      
          
      

      

    </>
  )
}

export default App
