import React from "react"
import styled from "styled-components"

const SContainer = styled.div`
  align-items: center;
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
  margin: 5px 10px;
`

const SlideTwo = () => (
  <SContainer>
    <STextWrapper>
      <h1>Header 2</h1>
      <p>A short paragraph with some descriptive text.</p>
    </STextWrapper>
    <img src="https://via.placeholder.com/400/3D1D73/ffffff" />

  </SContainer>
)

export default SlideTwo
