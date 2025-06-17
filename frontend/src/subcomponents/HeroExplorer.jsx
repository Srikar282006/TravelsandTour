import React, { useState, useEffect } from 'react';
import pathalaganga from '../assets/pathalaganga.png'
import sriliam from '../assets/srisilamdam.jpg'
import akkamdevi from '../assets/akkamadevi.jpg'
import palapanthandra from '../assets/palapanthandra.jpg'
import boatride from '../assets/boatridesriliam.jpg'
import tiger from '../assets/tigersriliam.jpeg'
import exterior from '../assets/exteriorsriliam.jpg'
import interior from '../assets/sriliamtempleinterior.jpg'
import octupus from '../assets/octupusviewpoint.jpeg'
import forest from '../assets/sriliamforest.jpg'
import dam from '../assets/srisilamdam.jpg'
import temple from '../assets/sriliamtempleinterior.jpg'
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (event) => setMatches(event.matches);

        setMatches(mediaQueryList.matches);
        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [query]);

    return matches;
};

const ImageCard = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div
                className="relative w-full h-72 md:h-80 lg:h-96 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover object-center transition-all duration-500 ease-in-out
                                ${isHovered ? 'filter blur-sm scale-105' : 'scale-100'}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`;
                    }}
                />

                <div
                    className={`absolute inset-0 flex items-center justify-center p-4 text-center
                                bg-black bg-opacity-70 text-white transition-opacity duration-300 ease-in-out
                                ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
                        {image.title}
                    </h3>
                </div>
            </div>
        </>
    );
};


const HeroExplorer = () => {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)'); // lg breakpoint
    const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)'); // md breakpoint
    
    let itemsPerPage;
    if (isLargeScreen) {
        itemsPerPage = 3;
    } else if (isMediumScreen) {
        itemsPerPage = 2;
    } else {
        itemsPerPage = 1;
    }

    const [currentGroupStartIndex, setCurrentGroupStartIndex] = useState(0);

    // Using placeholder images for image1 array as local assets were not provided
    const image1 = [
        { title: 'Srisailam Dam', src: `${sriliam}`},
        { title: 'Pathala Ganga', src: `${pathalaganga}` },
        { title: 'Paaladhara Panchadhara', src:`${palapanthandra}` },
        { title: 'Akkamahadevi Temple', src: `${akkamdevi}` }
    ];

    const link = 'https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website';

    const images = [
        {
            src: `${interior}`,
            title: 'Temple Interior View',
            alt: 'Image of temple interior with sculptures'
        },
        {
            src: `${exterior}`,
            title: 'Shrine Exterior View',
            alt: 'Image of an exterior shrine or temple structure'
        },
        {
            src: `${tiger}`,
            title: 'Wildlife: Tiger',
            alt: 'Image of a tiger'
        },
        {
            src: `${temple}`,
            title: 'SriSailam Temple',
            alt: 'Image of SriSailam Temple'
        },
        {
            src: `${octupus}`,
            title: 'Octopus View Point',
            alt: 'Image of Octopus View Point'
        },
        {
            src: `${boatride}`,
            title: 'Boat Ride',
            alt: 'Image of a boat ride'
        },
        {
            src: `${dam}`,
            title: 'Dam View',
            alt: 'Image of Srisailam Dam'
        },
        {
            src: `${forest}`,
            title: 'Forest Path',
            alt: 'Image of a forest path'
        }
    ];

    const goToPrevious = () => {
        setCurrentGroupStartIndex((prevIndex) => {
            const newIndex = prevIndex - itemsPerPage;
            return (newIndex < 0 ? images.length + newIndex : newIndex) % images.length;
        });
    };

    const goToNext = () => {
        setCurrentGroupStartIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
    };

    const getImagesToDisplay = () => {
        const displayed = [];
        for (let i = 0; i < itemsPerPage; i++) {
            displayed.push(images[(currentGroupStartIndex + i) % images.length]);
        }
        return displayed;
    };

    const displayedImages = getImagesToDisplay();

    return (
        <>
            <div className="min-h-screen flex flex-col items-center p-4 font-sans antialiased ">
                <h1 className="text-4xl text-blue-600 md:text-5xl font-extrabold text-center mb-8 mt-6 px-4 py-3 rounded-xl tracking-tight">
                    SriSailam Explored Views
                </h1>

                <div className="relative w-full max-w-7xl rounded-2xl shadow-xl overflow-hidden group p-6 flex flex-col items-center border border-gray-200">
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10 transition-all duration-300 ease-in-out transform group-hover:scale-110 opacity-90 hover:opacity-100"
                        aria-label="Previous images"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10 transition-all duration-300 ease-in-out transform group-hover:scale-110 opacity-90 hover:opacity-100"
                        aria-label="Next images"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="grid w-full px-4 py-2"
                         style={{
                             gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                             gap: '1.5rem' // Corresponds to Tailwind's gap-6
                         }}>
                        {displayedImages.map((image, index) => (
                            <ImageCard key={index} image={image} />
                        ))}
                    </div>
                </div>

            </div>
            {/* Reduced mt-10 to mt-6 for smaller screens, keeping mt-10 for medium and larger */}
            <div className="mt-6 md:mt-6 px-6">
                <h2 className="text-3xl text-center font-bold mb-6 text-blue-600">Top Attractions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {image1.map((image, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full object-cover rounded-lg mb-4"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`;
                                }}
                            />
                            <h1 className="text-center text-2xl font-bold mb-4">{image.title}</h1>
                            <a
                                href={link}
                                className="w-full bg-blue-600 text-white py-2 px-4 text-center rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroExplorer;
