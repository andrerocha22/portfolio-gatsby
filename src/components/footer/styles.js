import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background: #2b2b2b;
  border-top: 1px solid #880000;
  color: ${props => props.theme.primary};
`

export const IconsContainer = styled.div`
  display: flex;
`

export const IconsLink = styled.a`
  color: "#FFFFFF";
  margin: 1rem;
`
