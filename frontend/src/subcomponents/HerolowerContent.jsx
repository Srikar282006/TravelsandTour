import React from 'react';
import { MdChevronRight } from "react-icons/md";
import Button from '@mui/material/Button';


const HerolowerContent = () => {
    const link='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'
    console.log(link)
  const trip1 = [
    'Mallikarjuna Temple',
    'Bramaraambika Devi Temple',
    "Saakshi Ganapathi Temple",
    "Paathala Ganga",
    "Srisailam Dam",
    "Hatkeshwar Temple",
    "Octopus View Point",
    "Paaladhara, Panchadhara"
  ];

  const trip2 = [
    'Mallikarjuna Temple',
    'Bramaraamba Temple',
    'Saakshi Ganapathi Temple',
    'Paathala Ganga',
    'Sikharam, Srisaila',
    'Srisailam Dam',
    'Octopus View Point',
    'Paaladhara, panchadhar',
    'Srisailam Tiger Reserve Safari',
    'Ropeway',
    'Srisailam Boating',
    'Akha Mahadevi Caves',
    'Chenchu Lakshmi Museum'
  ];

  return (
    <>
    <div className="py-12 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* One Day Tour */}
        <div>
          <h1 className="text-[28px] font-extrabold mb-6 leading-tight">
            Hyderabad To Srisailam <br />
            One Day Tour Package
          </h1>
          <ul className="space-y-2">
            {trip1.map((place, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-blue-700">
                <MdChevronRight className="text-lg" />
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Two Days Tour */}
        <div>
          <h1 className="text-[28px] font-extrabold mb-6 leading-tight">
            Hyderabad To Srisailam <br />
            Two Days Tour Package
          </h1>
          <ul className="space-y-2">
            {trip2.map((place, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-blue-700">
                <MdChevronRight className="text-lg" />
                <span>{place}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className=' flex justify-center'>
<Button variant="contained" href={`${link}`} className='w-2/3 bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300'>
  Book Now
</Button>
</div>


    </>
  );
};

export default HerolowerContent;
