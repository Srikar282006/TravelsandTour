import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@headlessui/react'
const attractions = [
  {
    title: "Salar Jung Museum",
    description: "The Salar Jung Museum is an art museum located at Dar-ul-shifa, on the southern bank of the Musi River in the city of Hyderabad, Telangana, India. It is one of the notable National Museums of India.",
    image: "https://example.com/salar-jung.jpg"
  },
  {
    title: "Chowmahalla Palace",
    description: "Chowmahalla Palace or Chowmahalat is the palace of the Nizams of Hyderabad State located in Hyderabad, Telangana, India. It was the seat of power of the Asaf Jahi dynasty (1720–1848).",
    image: "https://example.com/chowmahalla.jpg"
  },
  {
    title: "BM Birla Science Museum",
    description: "B. M. Birla Science Museum is an Indian science museum located in Hyderabad, India. Constructed by civil engineer P. A. Singaravelu, it comprises a planetarium, museum, and science centre.",
    image: "https://example.com/birla-science.jpg"
  },
  {
    title: "Jagannath Temple",
    description: "The Jagannath Temple in Hyderabad, India, Telangana, is a modern temple built by the Cala community of the city of Hyderabad dedicated to the Hindu God Jagannath.",
    image: "https://example.com/jagannath.jpg"
  }
];

const AttractionCarousel = () => {
  const link='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile ? carouselRef.current.clientWidth : 320; // Full width on mobile, 320px on desktop
      const gap = isMobile ? 0 : 32;
      const scrollPosition = index * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = isMobile ? carouselRef.current.clientWidth : 320;
      const gap = isMobile ? 0 : 32;
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setCurrentIndex(Math.min(Math.max(newIndex, 0), attractions.length - 1));
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Hyderabad Attractions
        </h1>
        
        <div className="relative">
          <div
            ref={carouselRef}
            className={`flex overflow-x-auto scroll-smooth py-4 ${isMobile ? 'snap-x snap-mandatory' : 'gap-8'}`}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {attractions.map((attraction, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden transition-transform flex flex-col ${
                  isMobile 
                    ? 'w-full snap-center px-2' 
                    : 'w-80'
                }`}
              >
                <div className="h-48 md:h-56 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDMyMCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgMTEySDEwNFY3Mkg4NEMxMDEgNzIgMTE0IDg1IDExNCA5NlY5NkMxMTQgMTAxIDExNiAxMDYgMTE5IDEwOUwxNDQgMTEyWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {attraction.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">
                    {attraction.description}
                  </p>
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

          {/* Navigation arrows for desktop */}
          {!isMobile && (
            <>
              <button
                onClick={() => scrollTo(Math.max(currentIndex - 1, 0))}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo(Math.min(currentIndex + 1, attractions.length - 1))}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={currentIndex === attractions.length - 1}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {attractions.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to ${attractions[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionCarousel;