import React from "react"
import {
  AboutContainer,
  Container,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  SessionTitle,
} from "./styles"
import Layout from "../../components/layout"
import Carousel from "../../components/carousel"
import SlideOne from "../../components/carouselSlide/SlideOne"
import SlideTwo from "../../components/carouselSlide/SlideTwo"
import SlideThree from "../../components/carouselSlide/SlideThree"

export default function About() {
  return (
    <Layout>
      <Carousel>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Carousel>
      <Container>
        <AboutContainer>
          <h1>ABOUT ME</h1>
          <p>
            Hi! I'm Andre Rocha, I am a computer engineer from Federal
            University of Itajubá. I love exploring new technologies and often
            amazed by the progress we as a human species have made so far in the
            recent years. But, for me, the most important thing is how the
            technology make the people's live better.
          </p>

          <p>
            About me at university I learned that study is never enough, learn
            is the key to be a sucessefull developer. In my previous experience
            this feeling became stronger, I had autonomy over what I was
            developing acting as a kind of PO, so I was able to use new tools
            and libraries to build a better product and collected data,
            encouraging a data-driven culture.
          </p>
        </AboutContainer>

        <SessionTitle>EXPERTISE</SessionTitle>

        <CardContainer>
          <Card borderColor="#FF0000">
            <CardTitle>Web Development</CardTitle>
            <CardDescription>
              I have experience building website and playables ads using
              Javascript, Typescript, React, HTML, CSS.
            </CardDescription>
          </Card>
          <Card borderColor="#FF0000">
            <CardTitle>Data Structures & Algorithms</CardTitle>
            <CardDescription>
              As coming from the Computer Engineer background, I have good grasp
              over fundamental concepts of DSA.
            </CardDescription>
          </Card>
          <Card borderColor="#FF0000">
            <CardTitle>Product Management</CardTitle>
            <CardDescription>
              Study about product management is my new hobbie. After 1 year
              working together with the BI team at Wildlife Studios, I figured
              out how important is study your client, your product and your
              goals to be the best in your
            </CardDescription>
          </Card>
        </CardContainer>

        <SessionTitle>TIMELINE</SessionTitle>

        <CardContainer>
          <Card borderColor="#0000FF">
            <CardTitle>
              Creative Engineer at Wildlife Studios (2018-2019)
            </CardTitle>
            <CardDescription>
              I used the game engine Cocos Creato and Typescript in the
              development of playables ads for user acquisition campaigns.
              Meanwhile, I acted as product owner of each playable developed,
              participating in decisions together with the team of art and
              business intelligence, I learned concepts like metrics and UX. I
              was also responsible for testing and submitting completed
              playables for each ad network we worked on.
            </CardDescription>
          </Card>
          <Card borderColor="#0000FF">
            <CardTitle>
              BS in Computer Engineering <br />
              (2014-2019)
            </CardTitle>
            <CardDescription>
              During my under-graduation, I participated in the Academic
              Directory of Computing as Financial Director. I was also part of
              the Microelectronics Group of the Federal University of Itajubá
              where I studied two main topics: Development of a plataform of
              integrated circuits and A Reconfigurable artificial neural network
              architecture using FGPA.
            </CardDescription>
          </Card>
        </CardContainer>

        <SessionTitle>PROJECTS</SessionTitle>

        <CardContainer>
          <Card borderColor="#00FF00">
            <CardTitle>Web Development</CardTitle>
            <CardDescription>
              I have experience building website and playables ads using
              Javascript, Typescript, React, HTML, CSS.
            </CardDescription>
          </Card>
          <Card borderColor="#00FF00">
            <CardTitle>Web Development</CardTitle>
            <CardDescription>
              I have experience building website and playables ads using
              Javascript, Typescript, React, HTML, CSS.
            </CardDescription>
          </Card>
        </CardContainer>
      </Container>
    </Layout>
  )
}
