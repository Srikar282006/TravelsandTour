import React from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from './useMediaQuery';
import car_small from '../assets/car_small.png'
import carpic from '../assets/carpic.png'
import etiga from '../assets/etiga.jpeg'


const CarSection = () => {
       const isSmallScreen=useMediaQuery('(min-width: 940px)')
       const car_images=[{src:etiga,name:"etiga"},{src:etiga,name:"etiga"},
        {src:etiga,name:"etiga"},{src:etiga,name:"etiga"},
        {src:etiga,name:"etiga"},{src:etiga,name:"etiga"},
        {src:etiga,name:"etiga"},
        {src:etiga,name:"etiga"},{src:etiga,name:"etiga"}
       ]
  return (
   <>
  <div className='w-auto'>
             {
                 !isSmallScreen?(
                     <div
           className=" h-[450px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
           style={{ backgroundImage: `url(${car_small})` }}
         >
           <h1 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
             Our Car's
           </h1>
           
         </div>
                 ):(
                     <>
                      <div
           className="h-[500px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
           style={{ backgroundImage: `url(${carpic})` }}
         >
           <h1 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
             Our Car's
           </h1>
           
         </div>
                     </>
                 )}
         
         </div>

    <div className='mt-8 text-center text-4xl text-blue-500 font-bold'>
        <h1>KN Tours & Travels Car's</h1>
    </div>
    <div className="mt-5 py-3 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                    {car_images.map((image, index) => (
                        // Individual car card
                        <div
                            key={index} // Added key for list rendering
                            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full md:max-w-md lg:max-w-lg mx-auto my-8" // Adjusted max-width for wider cards
                        >
                            {/* Car image */}
                            <div className="w-full mb-4 transition-all duration-300 ease-in-out hover:scale-105">
                                <img
                                    src={image.src}
                                    alt={image.name} // Use image name for alt text
                                    className="w-full h-64 object-cover rounded-lg" // Increased height to h-64 for taller images
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/600x350/FF0000/FFFFFF?text=Image+Load+Error"; // Updated placeholder size
                                    }}
                                />
                            </div>

                            {/* Car Name */}
                            <h2 className="text-xl sm:text-2xl  text-gray-800 mb-6 text-center">
                                {image.name}
                            </h2>

                            {/* BOOK NOW Button */}
                            <Link to='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'>
                            <button
                                className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                            >
                                BOOK NOW
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
   
   </>
  )
}

export default CarSection