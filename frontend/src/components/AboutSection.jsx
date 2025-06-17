import React from 'react'
import About from '../assets/About.png'
import aboutin from '../assets/aboutlarge.png'
import { useMediaQuery } from './useMediaQuery';
import logo from '../assets/abouthero.png'
import rudra from "../assets/rudram.png"
import shiva from '../assets/shiva.png'

const AboutSection = () => {
    const isSmallScreen=useMediaQuery('(min-width: 940px)')
  return (
    <>
   <div className='w-auto'>
           {
               !isSmallScreen?(
                   <div
         className=" h-[450px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
         style={{ backgroundImage: `url(${About})` }}
       >
         <h1 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
           About Us
         </h1>
         
       </div>
               ):(
                   <>
                    <div
         className="h-[500px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
         style={{ backgroundImage: `url(${aboutin})` }}
       >
         <h1 className="text-3xl sm:text-5xl font-bold  px-4 py-2 rounded animate-fade-in-up delay-[0.3s] opacity-0">
           About Us
         </h1>
         
       </div>
                   </>
               )}
       
       </div>
       <div className='mt-5'>
                            <h1 className="text-5xl font-bold text-blue-500  text-center">About Us</h1>
        <section className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-white">

      <div className="md:w-1/3 mt-6 mr-10 md:mt-0 flex justify-center">
        <img
          src={logo}
          alt="Team Discussion"
          className="w-full h-auto  rounded-lg shadow-lg mt-14"
        />
      </div>
      <div className="md:w-2/3 text-gray-700 mt-4">

        <h1 className="text-3xl font-bold mb-3 text-center ">Celebrating 10 Years of Excellence in Hyderabad to Srisailam Cab Tours</h1>
        <p className="mb-4 text-lg">
         At Gagan Travels, we proudly celebrate a decade of excellence in providing reliable and comfortable cab services from Hyderabad to Srisailam. Since our inception, we've been committed to delivering seamless travel experiences backed by high-quality cab packages and exceptional customer service. Our dedication to safety, punctuality, and customer satisfaction has earned us the trust of thousands of travelers, making us a leading name in the travel industry.
        </p>
        
        <h1 className="text-3xl font-bold mb-3 text-center">Our Expertise</h1>
        <p className="mb-4 text-lg">
          With over 10 years of experience, we specialize in crafting Hyderabad to Srisailam tour packages that seamlessly blend spirituality, scenic beauty, and smooth travel. Our dedicated team carefully designs each itinerary, ensuring that travelers get the perfect mix of spiritual exploration and the awe-inspiring landscapes along the way.
        </p>
      </div>
      
    </section>
       </div>
       <div className=''>
        
        <section className="flex flex-col-reverse md:flex-row items-center p-6 md:p-12 bg-white">

     
      <div className="md:w-2/3 text-gray-700 mt-4">

        <h1 className="text-3xl font-bold mb-3 text-center ">Comfort and Quality</h1>
        <p className="mb-4 text-lg m-3">
          At Gagan Travels, comfort and quality are paramount. Our fleet consists of well-maintained vehicles equ
          ipped with modern amenities, guaranteeing a safe and pleasant ride. Our professional drivers are not only skilled in navigating the routes but also
           provide a friendly and courteous service, ensuring peace of mind throughout the journey.
        </p>
        
        <h1 className="text-3xl font-bold mb-3 text-center">Customer-Focused Service</h1>
        <p className="mb-4 text-lg">
          The cornerstone of our success is our unwavering dedication to customer satisfaction. We pride ourselves on being attentive to our clients' needs, offering flexible Hyderabad to Srisailam tour packages that can be tailored to your preferences, whether you're seeking a spiritual retreat or a relaxing getaway.
        </p>
      </div>
       <div className="md:w-1/3  mr-10 md:mt-0 flex justify-center">
        <img
          src={rudra}
          alt="Team Discussion"
          className="w-full h-auto rounded-lg shadow-lg mt-14"
        />
      </div>
      
    </section>
       </div>
        <div className='mt-5'>
                         
        <section className="flex flex-col-reverse md:flex-row items-center p-6 md:p-12 bg-white">

      <div className="md:w-1/3 mt-6 mr-10 md:mt-0 flex justify-center">
        <img
          src={shiva}
          alt="Team Discussion"
          className="w-full h-auto rounded-lg shadow-lg mt-14"
        />
      </div>
      <div className="md:w-2/3 text-gray-700 mt-4">

        <h1 className="text-3xl font-bold mb-3 text-center ">A Stress-Free Journey</h1>
        <p className="mb-4 text-lg">
          The road from Hyderabad to Srisailam offers both excitement and challenges, but with our extensive knowledge of the routes, we ensure a smooth and enjoyable trip. Our focus on punctuality, transparent pricing, and personalized
           care makes us stand out from the crowd.
        </p>
        
        <h1 className="text-3xl font-bold mb-3 text-center">Begin Your Spiritual Adventure</h1>
        <p className="mb-4 text-lg">
          With Gagan Travels, your Hyderabad to Srisailam journey is more than just a trip—it’s a life-enriching experience. Join us as you immerse yourself in the spiritual atmosphere of Srisailam while taking in the natural wonders of the journey.
        </p>
      </div>
      
    </section>
       </div>
       <div className='mt-3 text-center text-3xl font-bold mb-3'> <h1 className='text-center text-3xl'><p className='text-blue-400 font-bold'>GAGAN TRAVELS</p>Your Trusted Companion for the Hyderabad to Srisailam Journey!</h1></div>
    </>
  )
}

export default AboutSection