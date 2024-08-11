import React from 'react'

const Work = () => {
  return (
    <section className=' w-full z-10 h-auto flex flex-col items-center justify-center py-2'>
      <h1 className=' text-3xl font-semibold opacity-85 mb-20 overflow-hidden '>Our Work Plan</h1>
      <div className=' md:w-[990px]  h-[150vh] flex justify-center items-center relative overflow-hidden'>
        <hr className=' border-8 border-white/50 h-[145vh] rounded-full' />

        <div className=' absolute top-[5%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 border-2 border-[#2093ff] rounded-2xl mx-3 flex flex-col items-center justify-center'>
            <h1 className=' text-3xl text-[#2093ff] font-bold mb-2'>Join</h1>
            <p className=' font-light w-[90%]'>Users sign up to become members of the community.</p>
          </div>
          <hr  className=' w-[10vw] opacity-40 border-dotted border-[3px] border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[25%] right-[0%] flex flex-row-reverse items-center'>
          <div className=' h-36 w-72 bg-white/20 border-2 border-[#2093ff] rounded-2xl mx-3 flex flex-col items-center justify-center'>
            <h1 className=' text-3xl text-[#2093ff] font-bold mb-2'>Engage</h1>
            <p className=' font-light w-[90%]'>Participate in discussions, seek help, and connect with others.</p>
          </div>
          <hr className=' w-[10vw] opacity-40 border-dotted border-[3px] border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[45%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 border-2 border-[#2093ff] rounded-2xl mx-3 flex flex-col items-center justify-center'>
            <h1 className=' text-3xl text-[#2093ff] font-bold mb-2'>Learn</h1>
            <p className=' font-light w-[90%]'>Enroll in courses and access resources for skill development.</p>
          </div>
          <hr className=' w-[10vw] opacity-40 border-dotted border-[3px] border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[65%] right-[0%] flex flex-row-reverse items-center'>
          <div className=' h-36 w-72 bg-white/20 border-2 border-[#2093ff] rounded-2xl mx-3 flex flex-col items-center justify-center'>
            <h1 className=' text-3xl text-[#2093ff] font-bold mb-2'>Collaborate</h1>
            <p className=' font-light w-[90%]'>Form teams for hackathons and competitions.</p>
          </div>
          <hr className=' w-[10vw] opacity-40 border-dotted border-[3px] border-white/50 rounded-sm'/>
        </div>

        <div className=' absolute top-[85%] left-[0%] flex items-center'>
          <div className=' h-36 w-72 bg-white/20 border-2 border-[#2093ff] rounded-2xl mx-3 flex flex-col items-center justify-center'>
            <h1 className=' text-3xl text-[#2093ff] font-bold mb-2 ml-5'>Compete and Grow</h1>
            <p className=' font-light w-[90%]'>Take part in events, showcase skills, and receive feedback.</p>
          </div>
          <hr className=' w-[10vw] opacity-40 border-dotted border-[3px] border-white/50 rounded-sm'/>
        </div>
        
      </div>
    </section>
  )
}

export default Work