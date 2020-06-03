import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdMail } from "react-icons/md"

// import {graphql, useStaticQuery} from 'gatsby'
import { Container, List, ListItem, IconsContainer, IconsLink } from "./styles"

export default function Header() {
  return (
    <Container>
      <IconsContainer>
        <IconsLink href="/">
          <FaGithub size="2rem" color="#fff" />
        </IconsLink>
        <IconsLink href="/">
          <FaLinkedin size="2rem" color="#fff" />
        </IconsLink>
        <IconsLink href="/">
          <MdMail size="2rem" color="#fff" />
        </IconsLink>
      </IconsContainer>
    </Container>
  )
}
