import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Container from "../components/Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate, withPrefix } from "gatsby"

const Nav = ({ headerData, imageData, libraryStatus, setLibraryStatus }) => {
  return (
    <StyledNav>
      <Container>
        <h1>
          {headerData.title || "Music Player"}
          <GatsbyImage
            className="image"
            image={imageData[headerData.image]}
            alt={headerData.title}
          />
        </h1>
        <div>
          <button onClick={() => setLibraryStatus(!libraryStatus)}>
            {"Library "}
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faMusic}
              title="Music Library"
            />
          </button>
          {/*Add spacing*/}
          <span> </span>
          {/*Goto about page*/}
          <button onClick={() => navigate("/about")}>
            {"About "}
            <FontAwesomeIcon
              aria-hidden="true"
              icon={faAddressCard}
              title="About"
            />
          </button>
        </div>
      </Container>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 30px 0;
  .h1 {
    display: flex;
  }
  .image {
    width: 2.5em;
    position: relative;
    left: 0.2em;
    top: -0.6em;
    vertical-align: top;
    border-radius: 50%;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }
  @media (max-width: 470px) { /* Adjust 500px based on when you notice the image wraps */
    .image {
      display: none; /* This will hide the image */
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      position: relative;
      top: -0.6rem;
      background: transparent;
      cursor: pointer;
      border: none;
      border: 2px solid rgb(65, 65, 65);
      padding: 0.5rem;
      transition: all 0.3s ease;
      &:hover {
        background: rgb(65, 65, 65);
        color: white;
      }
      &:focus {
        outline: 1px solid rgb(65, 65, 65);
      }
    }
  }
`

export default Nav
