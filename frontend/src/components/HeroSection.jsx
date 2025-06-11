import React from 'react'
import imggg from "../assets/kntours.png"
import shivan1 from "../assets/shivan1.png"
import { useMediaQuery } from './useMediaQuery';

const HeroSection = () => {
    const isSmallScreen=useMediaQuery('(min-width: 940px)')
    
  return (
    <>
    <div className='w-auto'>
        {
            isSmallScreen?(
                <div>
                    <img src={imggg}/>
                </div>
            ):(
                <>
                 <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: `url(${shivan1})` }}
    >
      <h1 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
        Welcome to
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded mt-2 animate-fade-in-up delay-[1.2s] opacity-0">
        KN TOURS & TRAVELS
      </h2>
      <p className="mt-4 text-lg sm:text-xl italic animate-fade-in-up delay-[2.1s] opacity-0">
        "Your Trusted Partner for Memorable Journeys"
      </p>
      <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded animate-fade-in-up delay-[3s] opacity-0">
        CONTACT NOW
      </button>
    </div>
                </>
            )}
    
    </div>
    
    </>
  )
}

export default HeroSection