import React, { useEffect, useState } from 'react'
import about from "../assets/kedarnad.png"
 

const HeroContent = () => {
    const [count,setCount]=useState(0)
    const [carcount,setCarcount]=useState(0)
    const [customercount,setCustomercount]=useState(0)
    const [saticount,setSaticount]=useState(0);
    const target=15
    const carget=10
    

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prev)=>{
                if(prev<target) return prev+1
                clearInterval(interval);
                return prev;
            })
        },100); //Speed of count

        return ()=> clearInterval(interval)
    },[])

    useEffect(()=>{
        const interval1=setInterval(()=>{
            setCarcount((prev1)=>{
                if(prev1<carget) return prev1+1
                clearInterval(interval1);
                return prev1;
            })
        },100); //Speed of count

        return ()=> clearInterval(interval1)
    },[])

    useEffect(()=>{
        const interval2=setInterval(()=>{
            setCustomercount((prev1)=>{
                if(prev1<carget/2) return prev1+1
                clearInterval(interval2);
                return prev1;
            })
        },100); //Speed of count

        return ()=> clearInterval(interval2)
    },[])

 useEffect(()=>{
        const interval3=setInterval(()=>{
            setSaticount((prev1)=>{
                if(prev1<carget*10) return prev1+1
                clearInterval(interval3);
                return prev1;
            })
        },18); //Speed of count

        return ()=> clearInterval(interval3)
    },[])


  return (
    <>
    <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-10  mt-5">
      
      {/* Left: Image */}
      <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:pr-8 flex justify-center">
        <img
          src={about}
          alt="about"
          className="rounded-3xl w-full max-w-md h-[500px] object-cover shadow-md"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full sm:w-1/2 wb-10">
        <p className="text-sm font-semibold text-gray-600 mb-1">--&gt; <span className="font-bold text-black text-xl">Who We Are</span></p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
          WE HAVE 15+ YEARS OF EXPERIENCE
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg">
          <li><strong>Quality Assurance:</strong> Rigorous quality checks ensure well-maintained vehicles.</li>
          <li><strong>Affordable Rates:</strong> Budget-friendly options for all types of travelers.</li>
          <li><strong>Freedom & Flexibility:</strong> Explore at your own pace.</li>
          <li><strong>Diverse Fleet:</strong> Wide range of vehicles, including SUVs, to suit your preferences.</li>
          <li><strong>Extensive Experience:</strong> Over a decade of trusted service in the cab industry.</li>
        </ul>
      </div>
      
    </div>
   <div className="h-auto bg-blue-900 mt-10 mb-10 flex flex-wrap justify-evenly text-white">
  <div className="w-full sm:w-1/2 lg:w-1/5 text-center min-h-[250px] flex items-center justify-center ">
    <div className="flex flex-col items-center">
       
    <p className="text-3xl font-bold ">{count}+</p>
    <p className="text-xl mt-2">Years of Experience</p>
  </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/5 text-center min-h-[250px] flex items-center justify-center ">
   <div className="flex flex-col items-center">
       
    <p className="text-3xl font-bold ">{carcount}+</p>
    <p className="text-xl mt-2">Cars</p>
  </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/5 text-center min-h-[250px] flex items-center justify-center ">
     <div className="flex flex-col items-center">
       
    <p className="text-3xl font-bold ">{customercount}+</p>
    <p className="text-xl mt-2">Happy Customer</p>
  </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/5 text-center min-h-[250px] flex items-center justify-center ">
    <div className="flex flex-col items-center">
       
    <p className="text-3xl font-bold ">{saticount}%</p>
    <p className="text-xl mt-2">Satisfaction</p>
  </div>
  </div>

 
  
</div>
<div className="mt-10 px-4 sm:px-10">
  <h1 className="text-xl font-bold mb-2">&rarr; Packages</h1>
  <h1 className="text-blue-400 text-4xl mb-6 text-center">Our Tour Packages</h1>

  <div className="max-w-screen-lg mx-auto text-justify text-gray-800 leading-relaxed">
    <p>
      At KN Tours & Travels, we proudly bring over 10 years of expertise, offering exceptional travel packages from Hyderabad to Srisailam.
      Our journey began with a passion for delivering unforgettable travel experiences, and today we are a trusted name in travel services.
      With our extensive experience, we’ve perfected the art of crafting trips that combine spirituality, natural beauty, and hassle-free travel.
      Each itinerary is thoughtfully designed by our experts to ensure that travelers immerse themselves in both the spiritual significance of Srisailam
      and the breathtaking landscapes along the way.
    </p>
  </div>
</div>


    </>
  )
}

export default HeroContent
