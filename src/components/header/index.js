import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdMail } from "react-icons/md"

// import {graphql, useStaticQuery} from 'gatsby'
import { Container, List, ListItem, IconsContainer, IconsLink } from "./styles"

export default function Header() {
  const handleNavbar = clicked_id => {
    console.log(clicked_id)

    const linkList = document.getElementById("list").querySelectorAll("a")

    linkList.forEach(link => {
      if (link.id === clicked_id) {
        if (!link.className.includes("selected")) {
          link.classList.toggle("selected")
        }
      } else {
        if (link.className.includes("selected")) {
          link.classList.toggle("selected")
        }
      }
    })
  }

  return (
    <Container>
      <List id="list">
        <ListItem
          className="selected"
          id="about"
          onClick={() => handleNavbar("about")}
        >
          About Me
        </ListItem>
        <ListItem id="expertise" onClick={() => handleNavbar("expertise")}>
          Expertise
        </ListItem>
        <ListItem id="experience" onClick={() => handleNavbar("experience")}>
          Experience
        </ListItem>
        <ListItem id="projects" onClick={() => handleNavbar("projects")}>
          Projects
        </ListItem>
      </List>
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
