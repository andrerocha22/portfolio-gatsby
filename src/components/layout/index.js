import React from "react"

import Header from "../header"
import Footer from "../footer"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: #000000;
  }
`

export default function Layout(props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
