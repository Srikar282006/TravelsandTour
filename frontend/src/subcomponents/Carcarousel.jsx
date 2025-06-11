import React, { useRef, useState, useEffect } from 'react';
import innova from '../assets/innova.png';
import etiga from '../assets/etiga.jpeg';
import etigo from '../assets/etigo.png';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const cars = [
  { name: "Murut Dzire", image: innova },
  { name: "Force Traveller", image: etiga },
  { name: "Force Urbania", image: etigo },
  { name: "Toyota Innova", image: innova },
];

const CarCarousel = () => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const link='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = isMobile ? carouselRef.current.offsetWidth : 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="text-center py-8 md:py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-10">
        KN Tours & Travels Car's
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 md:left-4 z-10 bg-white rounded-full shadow-lg text-2xl md:text-3xl px-3 py-1 md:px-4 md:py-2 hover:bg-gray-200 -translate-y-1/2 top-1/2"
        >
          ‹
        </button>

        <div
          ref={carouselRef}
          className={`flex ${isMobile ? 'overflow-x-auto snap-x snap-mandatory' : 'overflow-x-auto'} scroll-smooth py-4`}
          style={{ scrollbarWidth: 'none' }}
        >
          {cars.map((car, index) => (
            <div
              key={index}
              className={`${isMobile ? 'flex-shrink-0 w-[calc(100%-2rem)] mx-4 snap-center' : 'flex-shrink-0 w-96'} bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Removed blue gradient background container */}
              <div className="w-full h-64 md:h-80 bg-white flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-3 md:mb-4">
                  {car.name}
                </h3>
                <div className='flex justify-center'>
                                <Link to={link} className='w-2/3 rounded-lg  bg-blue-600 hover:bg-blue-700 text-center'>
                                <Button
                            variant="contained"
                           
                            className=" text-white py-2 "
                          >
                            Book Now
                          </Button>
                          </Link>
                               </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 md:right-4 z-10 bg-white rounded-full shadow-lg text-2xl md:text-3xl px-3 py-1 md:px-4 md:py-2 hover:bg-gray-200 -translate-y-1/2 top-1/2"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default CarCarousel;