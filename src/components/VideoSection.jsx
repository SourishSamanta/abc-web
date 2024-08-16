import React from 'react'
import gif from '../assets/LCPT.gif'

const VideoSection = () => {
  return (
    <section id='video' className=' w-full h-[100vh] bg-black z-10 flex items-center overflow-hidden object-center relative'>
      <img src={gif} alt="" className=' h-full' />
      <h1 className=' text-[2.8rem]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap font-semibold text-white'>United by blockchain, empowered by <span className='text-blue-400'>community.</span></h1>
    </section>
  )
}

export default VideoSection