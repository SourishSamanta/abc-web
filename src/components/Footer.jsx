import React from 'react'
import icon from '../assets/icon.png'
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaDiscord, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=' w-full h-[50vh] bg-white/5 flex p-11 z-10' >
      <div className=' flex flex-col h-full flex-1'>
        <h1 className=' text-2xl text-bold mb-5'>ABOUT <span className=' text-blue-400'>US</span></h1>
        <p className=' w-[80%] mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae eveniet sint?</p>
        <u className='flex list-none gap-4'>
          <li><FaFacebook size={30}/></li>
          <li><FaInstagram size={30}/></li>
          <li><FaDiscord size={30}/></li>
        </u>
      </div>
      <div className=' flex flex-col h-full flex-1'>
        <h1 className=' text-2xl mb-5'>OUR <span className=' text-blue-400'>LOCATIONS</span></h1>
        <ul className='list-disc list-inside'>
          <li >Kolkata</li>
          <li>Barasat</li>
          <li>Mumbai</li>
        </ul>
      </div>
      <div className=' flex flex-col h-full flex-1'>
        <h1 className=' text-2xl mb-5'>OUR <span className=' text-blue-400'>FEATURES</span></h1>
        <ul className='list-disc list-inside'>
          <li >nothing</li>
          <li>nothing</li>
          <li>nothing</li>
        </ul>
      </div>
      <div className=' flex flex-col h-full flex-1'>
        <h1 className=' text-2xl mb-5'>CONTACT <span className=' text-blue-400'>US</span></h1>
        <ul className=' flex flex-col gap-y-5'>
          <li className=' flex gap-2'>
            <FaLocationDot size={25}/>
            <p>
              Adamas Blockchain Club,<br />
              Adamas University, Barasat.
            </p>
          </li>
          <li className=' flex gap-2'>
            <FaPhoneAlt size={25}/>
            <p>+91 90628 34016</p>
          </li>
          <li className=' flex gap-2'>
            <IoIosMail size={30}/>

            <p>abc@gmail.com</p>
          </li>
        </ul>
      </div>
     
    </div>
  )
}

export default Footer