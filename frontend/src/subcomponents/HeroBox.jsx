import React from 'react';
import Button from '@mui/material/Button';

const HeroBox = () => {
    const link='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'
  const inclusions = [
    "Cab for round trip from Hyderabad - Srisailam - Hyderabad with 500 Kms limit",
    "State Permit (Approx ₹500 to ₹1000)",
    "GST @ 5%",
    "Toll Gate Charges",
    "Parking Charges",
    "Driver Allowance / Batta",
    "Pickup & Drop from your Hotel / Home",
  ];

  const exclusions = [
    "Entry Fee for tourist attractions",
    "Lodging / Accommodation",
    "Breakfast, Lunch or any meal",
    "Guides Payment (If required, guests need to bring a guide on their own)",
    "Extra Charges",
    "One day means one calendar day (12 AM - 11:59 PM)",
    "Multiple pickups",
    "Driver Food Not Included",
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div className="flex flex-col justify-between h-full rounded-xl shadow-lg border p-6">
          <div>
            <h2 className="bg-blue-900 text-white text-center py-4 rounded-t-xl text-xl font-extrabold">
              Srisailam Tour Package <br /> Inclusions
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              {inclusions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="contained" href={`${link}`}  className='w-2/3 bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300'>
  Book Now
</Button>
          </div>
        </div>

        {/* Exclusions */}
        <div className="flex flex-col justify-between h-full rounded-xl shadow-lg border p-6">
          <div>
            <h2 className="bg-blue-900 text-white text-center py-4 rounded-t-xl text-xl font-extrabold">
              Srisailam Tour Package <br /> Exclusions
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              {exclusions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-6">
           <Button variant="contained" href={`${link}`}  className='w-2/3 bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300'>
  Book Now
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
