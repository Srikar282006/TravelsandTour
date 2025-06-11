import React from 'react'
import HerolowerContent from '../subcomponents/HerolowerContent'
import HeroBox from '../subcomponents/HeroBox'
import HeroExplorer from '../subcomponents/HeroExplorer'
import CarCarousel from '../subcomponents/Carcarousel'
import AttractionCarousel from '../subcomponents/Attractioncards'
import ImageGalleryCarousel from '../subcomponents/Imagegallerycarousel'

const CardsSection = () => {
  return (
    <>
    <HerolowerContent/>
<HeroBox/>
<HeroExplorer/>
<CarCarousel/>
<AttractionCarousel/>
<ImageGalleryCarousel/>
    </>
  )
}

export default CardsSection