import React from 'react'

const Work = () => {
  return (
    <section className=' w-full z-10 h-auto flex flex-col items-center justify-center py-2'>
      <h1 className=' text-3xl font-semibold opacity-85 mb-20 overflow-hidden '>Our Work Plan</h1>
      <div className=' md:w-[990px]  h-[150vh] flex justify-center items-center relative overflow-hidden'>
        <hr className=' border-8 border-white/50 h-[145vh] rounded-full' />

        <div className=' absolute top-[5%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 rounded-2xl mx-3'></div>
          <hr  className=' w-[10vw] border-dotted border-4 border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[25%] right-[0%] flex flex-row-reverse items-center'>
          <div className=' h-36 w-72 bg-white/20 rounded-2xl mx-3'></div>
          <hr className=' w-[10vw] border-dotted border-4 border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[45%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 rounded-2xl mx-3'></div>
          <hr className=' w-[10vw] border-dotted border-4 border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[65%] right-[0%] flex flex-row-reverse items-center'>
          <div className=' h-36 w-72 bg-white/20 rounded-2xl mx-3'></div>
          <hr className=' w-[10vw] border-dotted border-4 border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[85%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 rounded-2xl mx-3'></div>
          <hr className=' w-[10vw] border-dotted border-4 border-white/50 rounded-sm'/>
        </div>
        
      </div>
    </section>
  )
}

export default Work