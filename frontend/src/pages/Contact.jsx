import React from 'react'
import Navbar from '../components/Navbar'
import ContactSection from '../subcomponents/ContactSection'
import ContactForm from '../subcomponents/Contactform'
import Footer from '../components/Footer.jsx'
const Contact = () => {
  return (
   <>
   <Navbar/>
   <ContactSection/>
   <ContactForm/>
   <Footer/>
   </>
  )
}

export default Contact