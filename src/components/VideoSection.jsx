import React from 'react'
import video from '../assets/video.mp4'

const VideoSection = () => {
  return (
    <section className=' w-full h-[100vh] z-10 bg-white/20 overflow-hidden object-center relative'>
      <video autoPlay muted loop className=' w-full' >
        <source src={video} />
        
      </video>
      <h1 className=' text-[2.8rem]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-white'>United by blockchain, empowered by community.</h1>
    </section>
  )
}

export default VideoSection