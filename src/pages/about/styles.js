import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  color: #F9F9F9;
  margin-bottom: 60px;
  /* color: ${props => props.theme.primary}; */
`

export const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin-top: 20px;
  margin-bottom: 60px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 1rem;
  margin: 1rem;

  background-color: #f9f9f9;
  border-bottom: 6px solid ${props => props.borderColor};
  -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
`
export const CardTitle = styled.h1`
  display: flex;
  width: 100%;
  height: 3rem;
  text-align: center;
  justify-content: center;
`

export const CardDescription = styled.p`
  display: flex;
  width: 100%;
  text-align: justify;
  line-height: 1.3rem;
  justify-content: center;
`

export const SessionTitle = styled.h1`
  color: #fff;
`
