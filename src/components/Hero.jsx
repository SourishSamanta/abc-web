import React from "react";
import logo from "../assets/image4.png";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = ({onGetStartedClick}) => {

    const navigate = useNavigate();

    return (
        <>
        <div className=" h-[90vh] w-full flex items-end justify-center overflow-hidden z-10">
            <img src={logo} alt="logo" className="logo absolute" />
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
            </div>
        </div>
        
        </>
    );
};

export default Hero;
