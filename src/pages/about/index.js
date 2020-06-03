import React from "react"
// import { Container } from "./styles"
import Layout from "../../components/layout"
import Carousel from "../../components/carousel"
import SlideOne from '../../components/carouselSlide/SlideOne';

export default function About() {
  return (
    <Layout>
      <Carousel>
        <SlideOne/>
        <SlideOne/>
        <SlideOne/>
      </Carousel>
      <h1>Hello world</h1>
    </Layout>
  )
}
