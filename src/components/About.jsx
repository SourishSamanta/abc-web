import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import vid from '../assets/video5.mp4';

const About = () => {
  return (
    <div id='about' className=' h-[100vh] w-full flex items-center justify-center z-10  '>
        <div className=' flex h-[90%] w-[90%] max-w-[1200px] max-h-[900px]  items-center justify-center '>
          <div className=' flex h-full w-[50%] items-center justify-center flex-col gap-2 mx-10'>
            <video autoPlay muted loop className=' mix-blend-screen ' >
              <source src={vid} />
            </video>
          </div>

          <div className=' h-[80%] w-[48%]  rounded-[2rem]    flex flex-col  '>
            <h1 className=' text-[2rem] font-semibold  my-14 overflow-hidden'>About Us</h1>
            <p className=' text-lg w-[85%] overflow-hidden text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptates beatae aperiam? Et ullam laudantium impedit asperiores quaerat deserunt, eveniet voluptates, temporibus, quasi at dolor ea deleniti repellendus iste suscipit incidunt quos. Quod, saepe! Consectetur, aliquid, culpa expedita incidunt enim magni soluta excepturi reiciendis beatae tempora explicabo veritatis nemo quasi dolor libero laborum.</p>
            <button className='learnButton text-white border-white border-2 bg-blue-700 hover:bg-white hover:text-black transition-all duration-500 rounded-md m-10 px-4 py-3 text-black my-8 font-medium flex items-center justify-center overflow-hidden'>
              Learn More
              <FaAngleRight className=' ml-2 hover:ml-4 transition-all duration-200' />
            </button>
          </div>
        </div>
    </div>
  )
}

export default About