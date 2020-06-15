import React from "react"
import styled from "styled-components"

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
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
`

const SlideTwo = () => (
  <SContainer>
    <STextWrapper>
      <h1>
        Your time is limited, so don't waste it living someone else's life
      </h1>
      <p>- Steve Jobs</p>
    </STextWrapper>
  </SContainer>
)

export default SlideTwo
