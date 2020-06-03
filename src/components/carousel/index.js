import React, { useState } from "react"
import { CarouselWrapper, CarouselSlide, CarouselSlides} from "./styles"

export default function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const activeSlide = children.map((slide, index) => (
    <CarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </CarouselSlide>
  ))

  return (
    <div>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </CarouselSlides>
      </CarouselWrapper>
      <button
        onClick={() => {
          setCurrentSlide(
            (currentSlide - 1 + activeSlide.length) % activeSlide.length
          )
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length)
        }}
      >
        Right
      </button>
    </div>
  )
}
