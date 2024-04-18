import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faGlobe,
  faMusic,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Container from "../Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate, withPrefix } from "gatsby"
import { Fade } from "react-reveal"
import { Tilt } from "react-tilt"
import waveGif from "./wave.gif"

const AboutBody = ({ headerData, imageData }) => {
  return (
    <StyledBody>
      <Container>
        <h1>
          {/* Hi, I'm Adam!{" "} */}
          {/* make adam blue */}
          {"Hi, I'm "}
          <span className="name">Adam</span>
          {"!"}
          <img className="wave" src={waveGif} alt="Adam McDaniel" />
        </h1>
        <br />
        <Fade bottom_duration={1000} delay={600} distance="30px" bottom={true}>
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 650,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
          >
            <a className="inline" href="https://adam-mcdaniel.github.io/">
                <GatsbyImage className="profile1" image={imageData["real-me.jpg"]} alt="Adam McDaniel" />
                <span> </span>
                <GatsbyImage className="profile2" image={imageData["real-me2.jpg"]} alt="Adam McDaniel" />
            </a>
          </Tilt>
        </Fade>
        <br />

        <Fade bottom_duration={1000} delay={600} distance="30px" bottom={true}>
            <h3>About This Music Player</h3>
            <p>
                I made this project to showcase my<span> </span><a href="https://github.com/adam-mcdaniel/music-generation">music generation library</a> that explores music theory concepts
                to procedurally generate music. It generates songs with tons of scales, custom sound waveforms, and more! It's fun to experiment with
                different scales and sounds to see what kind of music you can create! I also made this project to share any music I create in the future.
                I love playing guitar and singing, so I hope to share some of my music with you!
                I really love blues, classic rock, and anything from the 60s and 70s.
            </p>
        </Fade>

        <Fade bottom_duration={1000} delay={600} distance="30px" bottom={true}>
            <h3>About Me</h3>
            <p>
                I'm a software engineer, computer science graduate student, and musician. I love to learn and create new things. My favorite subject area is compiler design,<span> </span><a href="https://github.com/adam-mcdaniel">I've created several of my own programming languages!</a><span> </span>
                My favorite programming language is certainly Rust, but I also extensively use C and C++. I also dabble in a bit of Haskell!
                If you're interested in learning more about me, check out my<span> </span><a href="https://adam-mcdaniel.github.io/">personal site</a>,
                <span> </span><a href="https://adam-mcdaniel.github.io/blog">blog</a>, and<span> </span><a href="my GitHub">GitHub</a>!
            </p>
        </Fade>
      </Container>
    </StyledBody>
  )
}

const StyledBody = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 30px 0;
  .name {
    color: #77d6ff;
  }
  h1 {
    margin: 0.5em 0.5em 0.5em 0.5em;
  }
  h2 h3 h4 {
    margin: 4em 2em 0em 2em;
  }
  p {
    margin: 2em 2em 2em 2em;
    font-size: 0.9em;
    font-weight: 100;
    width: 60%;
  }
  .inline {
    // Center contained images
    // TOGETHER on the middle of the screen
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // Center contained images
    // TOGETHER on the middle of the screen
    // Add padding on top and below
    margin: 0 auto;
  }
  .title {
    position: relative;
    top: -0.6rem;
  }
  .profile1 {
    width: 26%;
    vertical-align: top;
    border-radius: 5%;
  }
  .profile2 {
    width: 46%;
    vertical-align: top;
    border-radius: 5%;
  }
  .image {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
  }
  .wave {
    width: 1.5em;
    vertical-align: top;
    position: relative;
    top: -0.25em;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container .fade-content {
    /* You might need to inspect the element to find the correct class or element structure */
    // Add padding on top and below
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

// const StyledPlayer = styled.div`
//   width: 100%;
//   min-height: 20vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   .time-control {
//     width: 50%;
//     display: flex;
//     input {
//       width: 100%;
//       padding: 1rem 0;
//       cursor: pointer;
//     }
//     p {
//       padding: 1rem;
//     }
//   }
//   .play-control {
//     width: 40%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1em 0em 3.5em 1em;
//     svg {
//       cursor: pointer;
//     }
//   }
// `

export default AboutBody
