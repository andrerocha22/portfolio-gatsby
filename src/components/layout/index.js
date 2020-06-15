import React from "react"

import Header from "../header"
import Footer from "../footer"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    background: url(https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
