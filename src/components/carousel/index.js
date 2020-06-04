import React, { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import {
  CarouselWrapper,
  CarouselSlide,
  CarouselSlides,
  CarouselButtons,
} from "./styles"

export default function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const activeSlide = children.map((slide, index) => (
    <CarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </CarouselSlide>
  ))

  const handleClickedLeft = () => {
    setCurrentSlide(
      (currentSlide - 1 + activeSlide.length) % activeSlide.length
    )
  }

  const handleClickedRight = () => {
    if(currentSlide === activeSlide.length){
      setCurrentSlide(0)
    }
    setCurrentSlide((currentSlide + 1) % activeSlide.length)
  }

  return (
    <div>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </CarouselSlides>
      </CarouselWrapper>
      <CarouselButtons onClick={handleClickedLeft}>
        <FiChevronLeft size="2rem" />
        {currentSlide}
      </CarouselButtons>
      <CarouselButtons onClick={handleClickedRight}>
        <FiChevronRight size="2rem" />
      </CarouselButtons>
    </div>
  )
}
