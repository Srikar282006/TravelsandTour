import React from 'react'
import { useMediaQuery } from '../components/useMediaQuery'
import contact_small from '../assets/contact_small.jpg'
import contactimg from '../assets/contactimg.png'


const ContactSection = () => {
    const isSmallScreen=useMediaQuery('(min-width: 940px)')
  return (
   <>
     <div className='w-auto'>
              {
                  !isSmallScreen?(
                      <div
            className=" h-[450px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: `url(${contactimg})` }}
          >
            <h1 className="text-3xl text-white  sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] ">
              Contact Us
            </h1>
            
          </div>
                  ):(
                      <>
                       <div
            className="h-[500px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: `url(${contact_small})` }}
          >
            <h1 className="text-3xl  text-blue-700 sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
             Contact Us
            </h1>
            
          </div>
                      </>
                  )}
          
          </div>
          <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-8 bg-blue-700 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.35a18 18 0 0 0 6 6l.35-.7a2 2 0 0 1 2.19-1.18 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Services</h3>
                        <p className="text-center text-gray-200">Always available for your needs.</p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-blue-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-center text-gray-200 break-words">info@gagantravels.com</p>
                    </div>

                    <div className="flex flex-col items-center p-8 bg-blue-700 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                                <path d="M12 21.7c-3.2-.8-6.1-3.2-7.5-6.8a10 10 0 0 1 0-9.8c1.4-3.6 4.3-6 7.5-6.8a10 10 0 0 1 0 9.8c-1.4 3.6-4.3 6-7.5 6.8z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                        <p className="text-center text-gray-200">
                            Block 3/21, Balaji Hills, Phase-2, Near Hanuman Temple, Nizampet, Hyderabad – 500090.
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default ContactSection