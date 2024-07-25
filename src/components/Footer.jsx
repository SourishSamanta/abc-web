import React from 'react'
import icon from '../assets/icon.png'

const Footer = () => {
  return (
    <div className=' w-full h-[40vh] bg-white/5 flex p-5 z-10' >
      <div className=' h-full w-1/3'>
        <img src={icon} alt="" />
      </div>
      <div className=' h-full w-1/3'></div>
      <div className=' h-full w-1/3'></div>
    </div>
  )
}

export default Footer