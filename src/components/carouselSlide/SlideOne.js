import React from "react"
import styled from "styled-components"

const SContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`

const STextWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
`

const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <h1>Header 1</h1>
      <p>A short paragraph with some descriptive text.</p>
    </STextWrapper>
    <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
    <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
    <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
    <img src="https://via.placeholder.com/400/3D1D73/ffffff" />
  </SContainer>
)

export default SlideOne
