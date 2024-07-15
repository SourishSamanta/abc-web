import React from 'react'

const Gallery = () => {
  return (
    <section className=' w-full h-[100vh] flex justify-center items-center'>
      <div className='relative w-10/12 h-5/6 bg-white/20 flex justify-between'>
        <div className=' absolute left-0 h-full w-1/12 bg-black/40'></div>
        <div className=' h-full flex-1 bg-white/20 '></div>
        <div className=' absolute right-0 h-full w-1/12 bg-black/40'></div>

      </div>
    </section>
  )
}

export default Gallery