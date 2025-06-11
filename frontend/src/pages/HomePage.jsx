import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HeroContent from '../subcomponents/HeroContent'
import CardsSection from '../components/CardsSection'
import Footer from '../components/Footer'
export default function HomePage() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <HeroContent/>
   <CardsSection/>
   <Footer/>
   </>
  )
}
