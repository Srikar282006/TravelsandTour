import React from 'react'
import { MdChevronRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import facebook from '../assets/facebook.jpg' // Assuming this JPG has a white background
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.jpeg"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 py-10">
      <aside>
        <svg
          width="500"
          height="150"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className=' flex justify-content mr-3'>
          "At KN Tours & Travels, we are
          proud of our decade-long history of delivering exceptional cab services and tour packages from Hyderabad to Srisailam. Our journey started with a deep commitment to providing travelers with smooth and memorable experiences. Over the years, we've grown into a trusted and reliable name in the travel industry."
        </p>
        <div className="flex flex-row items-center">
          <div>
            <Link to='http://localhost:3000/'>
              <img src={instagram} className="h-7 w-auto mix-blend-multiply" alt="Instagram" />
            </Link>
          </div>
          <div>
            <Link to='https://api.whatsapp.com/send?phone=+91%206302362628&text=Hi,%20I%20got%20your%20number%20from%20your%20website'>
              <img src={whatsapp} className="h-10 w-auto mix-blend-multiply" alt="WhatsApp" />
            </Link>
          </div>
          <div>
            <Link to='http://localhost:3000/'>
              {/* Added mix-blend-mode-multiply here */}
              <img src={facebook} className="h-5 w-auto mix-blend-multiply" alt="Facebook" />
            </Link>
          </div>
        </div>
      </aside>
      <nav>
        <h2 className="footer-title text-blue-600">Services</h2>
        <a className="link link-hover flex items-center gap-1">
          <MdChevronRight className="text-lg" />
          Home
        </a>
        <a className="link link-hover flex items-center gap-1">
          <MdChevronRight className="text-lg" />
          About Us
        </a>
        <a className="link link-hover flex items-center gap-1">
          <MdChevronRight className="text-lg" />
          Our Car's
        </a>
        <a className="link link-hover flex items-center gap-1">
          <MdChevronRight className="text-lg" />
          Contact
        </a>
      </nav>
      <nav>
        <h2 className="footer-title ml-4 text-blue-600 gap-3">Contact info</h2>
        <a className="link link-hover flex items-center gap-1">
          <FaLocationDot className="text-3xl mr-2" />
          Block 3/21, Balaji Hills, Phase-2,Near Hanuman Temple, Nizampet, Hyderabad - 500090.
        </a>
        <a className="link link-hover flex items-center gap-1">
          <IoCall className="text-2xl mr-2" />
          +91 63023 62628
          <br/>
          +91 62816 30537
        </a>
        <a className="link link-hover flex items-center gap-1">
          <IoMdMail className="text-xl mr-2" />
          info@kntourstravels.com
        </a>
      </nav>
     
    </footer>
     <div className='bg-base-300 text-base-content text-center text-sm py-4'>@kntourstravels.com. All Rights Reversed.</div>
    </>
  )
}

export default Footer;