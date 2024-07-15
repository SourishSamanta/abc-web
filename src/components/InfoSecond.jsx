import React from 'react'

const InfoSecond = () => {
  return (
    <div className=' w-full h-[100vh] flex flex-col items-center justify-center'>
      <h1 className=' text-3xl font-semibold opacity-85 mb-20 p-1'>Why Join Us ?</h1>

      <div className='w-10/12 flex flex-wrap justify-between'>
          {
            [1,2,3,4].map(() => {
              return(
                <>
                  <div className=' w-[250px] h-[350px] bg-white/20 rounded-2xl'></div>
                </>
              )
            })
          }
      </div>
    </div>
  )
}

export default InfoSecond