import React from "react";
import logo from "../assets/image4.png";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroVideo from '../assets/video4.mp4';

const Hero = ({onGetStartedClick}) => {

    const navigate = useNavigate();

    return (
        <>
        {/* <div className=" h-[90vh] w-full flex items-end justify-center overflow-hidden z-10"> */}
        <div id="home" className="h-[100vh] w-full flex items-center overflow-hidden z-10 bg-black">

            <div className=" title pl-[10vw] w-[70vw]  flex flex-col mr-[5vw]">
                <h1 className=" main-heading text-[5vw] font-bold  overflow-hidden">Algorand</h1>
                <h1 className=" main-heading text-[5vw] font-bold -mt-10 overflow-hidden">Blockchain</h1>
                <h1 className=" main-heading text-[5vw] font-bold -mt-10 overflow-hidden">Club.</h1>

                <button 
                onClick={() => {
                    navigate('/dashboard')
                }}
                className="mainButton mb-10 border-white border-2 bg-blue-700 px-14 py-3 w-[16vw] rounded-3xl mt-8 hover:bg-white text-[1.4vw] font-semibold hover:text-black transition-all duration-500  flex items-center gap-2">
                    Get Started <FaAngleRight />
                </button>
            </div>
            <div className=" video">
                <video autoPlay muted loop className=" w-[100%] " >
                    <source src={heroVideo} />
                </video>
            </div>
            {/* <img src={logo} alt="logo" className="logo absolute" />
            <div className="flex flex-col items-center justify-end  mb-12">
                
                <h1 className=" main-heading text-[3vw] font-bold mb-2 overflow-hidden">
                    ALGORAND BLOCKCHAIN CLUB
                </h1>
                <p className=" text-[1.7vw] font-light opacity-80">
                    ADAMAS UNIVERSITY
                </p>

                <button 
                onClick={() => {
                    navigate('/dashboard')
                }}
                className=" border-white border-2 bg-white/20 px-14 py-3 rounded-3xl mt-8 hover:bg-white text-[1.3vw] font-bold hover:text-black transition-all duration-200 flex items-center gap-2">
                    Get Started <FaAngleRight />
                </button>
            </div> */}
        </div>
        
        </>
    );
};

export default Hero;
