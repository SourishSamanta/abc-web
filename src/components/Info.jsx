import React from 'react'
import img from '../assets/image8.png'
import video2 from '../assets/video2.mp4'

const Info = () => {
  return (
    <section id='info' className=' z-10 w-full h-[100vh] flex items-center justify-center'>

      <div className=' wrapper flex w-10/12 items-center justify-around'>
        <div className='img h-[40%] w-[40%] rounded-[3rem]  overflow-hidden'>
          <img src={img} alt="why Blockchain ?" className=' w-full' />
        </div>
        <div className=' text flex flex-col items-center w-[40%] '>
          <div className='  flex flex-col items-center w-full justify-between '>
            <h1 className=' uppercase text-[2.2vw] font-bold p-0'>Why Blockchain is</h1>
            <h1 className=' uppercase text-[2.2vw] font-bold p-0'>Important ?</h1>
          </div>

          <div className=' w-full mt-6'>
            <p className=' text-[1.3vw]  opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio velit, in cupiditate magnam dolor similique impedit distinctio, quo, temporibus eligendi dicta inventore nemo eaque quibusdam itaque accusamus exercitationem accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus a veritatis molestias consequatur perspiciatis nulla dolorum error quibusdam dolore corporis provident facere, hic qui est, officiis, autem temporibus harum eum fugit excepturi sed nesciunt placeat? Fugiat excepturi repellendus non. Nisi.</p>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default Info