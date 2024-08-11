import React from 'react'

import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const JoinUs = () => {
  const join = [{
    "icon" : <FaDiscord size={100}/>,
    "title" : "Discord"

  },
  {
    "icon" : <FaGithub size={100}/>,
    "title" : "Github"

  },
  {
    "icon" : <FaInstagram  size={100}/>,
    "title" : "Instagram"

  },
  {
    "icon" : <FaFacebook size={100}/>,
    "title" : "Facebook"

  },
  
]
  return (
    <div id='contact' className=' w-full h-[100vh] flex flex-col items-center justify-center'>
      <h1 className=' text-3xl font-semibold opacity-85 mb-20 p-1'>Join Us</h1>

      <div className='w-[92%] flex flex-wrap justify-center'>
          {
            join.map((e,i) => {
              return(
                <>
                  <div className=' min-w-[20%] h-[320px] m-6 bg-gradient-to-br from-[#272727] to-[#000] flex flex-col items-center justify-center rounded-2xl'>
                      <div> {e.icon} </div>
                      <h1 className=' text-xl mt-8 font-thin'>{e.title}</h1>
                      <p className=' text-xs mt-1 opacity-0 font-thin  hover:opacity-40'> Click To Join</p>
                  </div>
                </>
              )
            })
          }
      </div>
    </div>
  )
}

export default JoinUs