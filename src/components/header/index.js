import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { graphql, useStaticQuery } from "gatsby"
import { Container, List, ListItem, IconsContainer, IconsLink } from "./styles"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          email
          linkedinUrl
          githubUrl
        }
      }
    }
  `)

  const handleNavbar = clicked_id => {
    console.log(data)

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
          href="#section1"
          className="selected"
          id="about"
          onClick={() => handleNavbar("about")}
        >
          About Me
        </ListItem>
        <ListItem
          href="#section2"
          id="expertise"
          onClick={() => handleNavbar("expertise")}
        >
          Expertise
        </ListItem>
        <ListItem
          href="#section3"
          id="experience"
          onClick={() => handleNavbar("experience")}
        >
          Experience
        </ListItem>
        <ListItem
          href="#section4"
          id="projects"
          onClick={() => handleNavbar("projects")}
        >
          Projects
        </ListItem>
      </List>
      <IconsContainer>
        <IconsLink href={data.site.siteMetadata.githubUrl} target="_blank">
          <FaGithub size="2rem" color="#fff" />
        </IconsLink>
        <IconsLink href={data.site.siteMetadata.linkedinUrl} target="_blank">
          <FaLinkedin size="2rem" color="#fff" />
        </IconsLink>
        <IconsLink href={`mailto:${data.site.siteMetadata.email}`}>
          <MdMail size="2rem" color="#fff" />
        </IconsLink>
      </IconsContainer>
    </Container>
  )
}
