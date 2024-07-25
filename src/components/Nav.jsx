import React from 'react'
import icon from '../assets/icon.png'

const Nav = () => {
  return (
    <header className=' w-full h-[10vh] z-10'>
      <nav className=' w-full h-full bg-black/40 border border-black flex items-center justify-between'>
        <img src={icon}  alt="" />
        <div className=' flex items-center gap-3 mr-8'>
          {
            ["Home","About","Contact"].map((item) => {
              return(
                <div className='p-2 '>{item}</div>
              )
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Nav