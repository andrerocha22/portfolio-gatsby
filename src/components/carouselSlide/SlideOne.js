import React from "react"
import styled from "styled-components"
import { DiCode, DiCoffeescript } from "react-icons/di"
import { FiPlus } from "react-icons/fi"

const SContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #2b2b2b;
  border-bottom: 2px solid #ff0000;
`

const STextWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <Title>Welcome!</Title>
      <IconWrapper>
        <DiCode size="7rem" />
        <FiPlus size="2rem" />
        <DiCoffeescript size="6rem" />
      </IconWrapper>
    </STextWrapper>
  </SContainer>
)

export default SlideOne
