import styled from "styled-components"

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
`
export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`

export const CarouselSlides = styled.div`
  display: flex;
  transform: translateX(-${props => props.currentSlide * 100}%);
  transition: all 0.5s ease;
`
