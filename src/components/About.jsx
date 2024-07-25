import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import img from '../assets/image6.png'

const About = () => {
  return (
    <div className=' h-[100vh] w-full flex items-center justify-center z-10  '>
        <div className=' flex h-[90%] w-[90%] max-w-[1000px] max-h-[900px]  items-center justify-center '>
          <div className=' flex h-full w-[50%] items-center justify-center flex-col gap-2'>
            <div className=' bg-white/20 rounded-md w-[80%] h-[32%]'></div>
            <div className='  rounded-md w-[80%] h-[32%] object-cover overflow-hidden'>
              <img src={img} alt="" />
            </div>
          </div>

          <div className=' h-[80%] w-[48%] bg-[#B8FDCE] rounded-[2rem] border-4 border-white bg-opacity-45 flex flex-col items-center '>
            <h1 className=' text-[2rem] font-semibold  my-14 overflow-hidden'>About Us</h1>
            <p className=' text-lg w-[85%] text-center overflow-hidden text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptates beatae aperiam? Et ullam laudantium impedit asperiores quaerat deserunt, eveniet voluptates, temporibus, quasi at dolor ea deleniti repellendus iste suscipit incidunt quos. Quod, saepe! Consectetur, aliquid, culpa expedita incidunt enim magni soluta excepturi reiciendis beatae tempora explicabo veritatis nemo quasi dolor libero laborum.</p>
            <button className=' bg-white rounded-md px-4 py-3 text-black m-8 font-medium flex items-center overflow-hidden'>
              Learn More
              <FaAngleRight className=' ml-2 hover:ml-4 transition-all duration-200' />
            </button>
          </div>
        </div>
    </div>
  )
}

export default About