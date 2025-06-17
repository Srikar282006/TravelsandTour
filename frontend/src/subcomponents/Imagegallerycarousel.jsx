import React, { useRef, useState, useEffect } from 'react';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import {Link} from 'react-router-dom'
import spiritual from '../assets/spiritual.jpg'
import anicent from '../assets/ancientarch.jpg'

// Using a generic X icon for close button as Heroicons ExclamationTriangleIcon is not appropriate here
// For demonstration, a simple SVG close icon will be used.

// Your provided galleryImages data

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
    title: "Traditional Temple",
    category: "Architecture",
    tourPackage: {
      name: "Traditional Temple Tour Package",
      duration: "2 Nights, 3 Days",
      kilometers: "800 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  },
  {
    id: 2,
    src: `${spiritual}`,
    title: "Spiritual Deity",
    category: "Religious",
    tourPackage: {
      name: "Shirdi Tour Package",
      duration: "3 Nights, 4 Days",
      kilometers: "1600 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
    title: "Golden Temple",
    category: "Heritage",
    tourPackage: {
      name: "Golden Temple Tour Package",
      duration: "4 Nights, 5 Days",
      kilometers: "2200 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    title: "Historic Monument",
    category: "Heritage",
    tourPackage: {
      name: "Historic Monument Tour Package",
      duration: "3 Nights, 4 Days",
      kilometers: "1200 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    title: "Cultural Site",
    category: "Culture",
    tourPackage: {
      name: "Cultural Site Tour Package",
      duration: "2 Nights, 3 Days",
      kilometers: "900 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  },
  {
    id: 6,
    src:`${anicent}`,
    title: "Ancient Architecture",
    category: "Architecture",
    tourPackage: {
      name: "Ancient Architecture Tour Package",
      duration: "5 Nights, 6 Days",
      kilometers: "2800 kms",
      vehicles: [
        "Swift DZire: 4 Seats",
        "Maruti Ertiga: 6 Seats",
        "Innova: 7 Seats",
        "Innova Crysta: 7 Seats",
        "Tempo Traveller: 12 Seats"
      ],
      included: [
        "Comfortable Ride: Equipped with modern amenities for an enjoyable journey.",
        "Professional Driver: Experienced and knowledgeable driver to ensure your safety.",
        "All Taxes: No hidden charges"
      ],
      notIncluded: [
        "Food & Accommodation",
        "Tourist Guides (Guests need to arrange guide - if needed)",
        "Entry Tickets/Darshan Tickets"
      ]
    }
  }
];


// Main App component (renamed to App as it's the default export)
export default function App() {
  const link='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'
  const carouselRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourPackage, setSelectedTourPackage] = useState(null); // State to hold the package details for the modal

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 450; // Card width + gap
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Function to open the modal with specific tour package data
  const openTourDetailsModal = (tourPackageData) => {
    setSelectedTourPackage(tourPackageData);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeTourDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedTourPackage(null); // Clear selected package when closing
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 min-h-screen font-sans">
      {/* Main Gallery Container */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sacred Heritage Gallery</h1>
          <p className="text-gray-600 text-lg">Discover the beauty of ancient temples and cultural landmarks</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-6 py-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/*
            Removed the <style jsx> block as it was causing the "non-boolean attribute" warning.
            The scrollbar hiding for Webkit browsers is typically handled by the 'scrollbar-hide'
            Tailwind class, or can be managed via global CSS if needed.
          */}

          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0 relative group cursor-pointer"
              style={{ width: '420px', height: '500px' }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">

                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/A0A0A0/FFFFFF?text=Image+${image.id}+Not+Found`; }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Explore the magnificent architecture and rich cultural heritage of this sacred destination.
                    </p>
                  </div>

                  <div className="pt-2">
                    {/* Updated button to open the custom tour details modal */}
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      onClick={() => openTourDetailsModal(image.tourPackage)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Tour Package Details Modal */}
      <Dialog open={isModalOpen} onClose={closeTourDetailsModal} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {/* Modal Header with Close Button */}
              <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                <DialogTitle as="h3" className="text-xl font-semibold text-gray-900">
                  {selectedTourPackage?.name || "Tour Package Details"}
                </DialogTitle>
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={closeTourDetailsModal}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body - Tour Package Details */}
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {selectedTourPackage && (
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Section (Optional, can add if modal also shows a specific image) */}
                    {/* For now, just showing details */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">{selectedTourPackage.name}</h2>

                      {/* Vehicles and No. of Seats */}
                      <div className="mb-6">
                        <h3 className="text-xl font-medium text-gray-600 mb-2">Vehicles/No. of Seats:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {selectedTourPackage.vehicles.map((vehicle, index) => (
                            <li key={index}>{vehicle}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration */}
                      <div className="mb-6">
                        <h3 className="text-xl font-medium text-gray-600 mb-2">Duration</h3>
                        <p className="text-gray-600">{selectedTourPackage.duration}</p>
                      </div>

                      {/* Kilometers Limit */}
                      <div className="mb-6">
                        <h3 className="text-xl font-medium text-gray-600 mb-2">Kilometers Limit</h3>
                        <p className="text-gray-600">{selectedTourPackage.kilometers}</p>
                      </div>
                    </div>

                    {/* What's Included / What's Not Included Section */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                      {/* What's Included */}
                      <div>
                        <h3 className="text-xl font-medium text-gray-600 mb-3">What's Included</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {selectedTourPackage.included.map((item, index) => (
                            <li key={index}>
                              {/* Attempt to parse bold text if present, otherwise display as-is */}
                              {item.includes(':') ? (
                                <>
                                  <span className="font-semibold">{item.split(':')[0]}:</span>
                                  <span className="block text-sm ml-4">{item.split(':')[1]}</span>
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What's Not Included */}
                      <div className="mt-6 md:mt-0">
                        <h3 className="text-xl font-medium text-gray-600 mb-3">What's Not Included</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {selectedTourPackage.notIncluded.map((item, index) => (
                            <li key={index}>
                              {item.includes('(') ? (
                                <>
                                  <span className="font-semibold">{item.split('(')[0].trim()}</span>
                                  <span className="block text-sm ml-4">({item.split('(')[1]})</span>
                                </>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
