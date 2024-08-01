import React from 'react'

const JoinUs = () => {
  return (
    <div className=' w-full h-[100vh] flex flex-col items-center justify-center'>
      <h1 className=' text-3xl font-semibold opacity-85 mb-20 p-1'>Join Us</h1>

      <div className='w-[92%] flex flex-wrap justify-center'>
          {
            [1,2,3,4].map((e,i) => {
              return(
                <>
                  <div className=' min-w-[20%] h-[320px] m-6 bg-white/20 rounded-2xl'></div>
                </>
              )
            })
          }
      </div>
    </div>
  )
}

export default JoinUs