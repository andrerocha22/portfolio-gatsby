import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background: #2b2b2b;
  color: ${props => props.theme.primary};
`

export const IconsContainer = styled.div`
  display: flex;
`

export const IconsLink = styled.a`
  color: "#FFFFFF";
  margin: 1rem;
`

export const List = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.a`
  color: #f9f9f9;
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
  &.selected {
    color: #f9f9f9;
    border-bottom: 2px solid #fff;
  }

  &:not(selected) {
    color: #f9f9f9aa;
    border-bottom: none;
  }

  &:hover {
    color: #ff0000;
  }
`
