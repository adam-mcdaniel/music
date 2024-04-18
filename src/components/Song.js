import React from "react"
import styled from "styled-components"
import { GatsbyImage, StaticImage, getImage, getSrc } from "gatsby-plugin-image";

const Song = ({ imageData, currentSong, isPlaying }) => {
  return (
    <StyledSong className="song">
      {console.log(currentSong)}
      <div id="rotating-image" className={isPlaying? "rotating-image playing-image" : "rotating-image paused-image"}>
          <GatsbyImage image={getImage(imageData[currentSong.cover])} alt={currentSong.title} />
      </div>
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>
    </StyledSong>
  )
}

const StyledSong = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotating-image {
    animation: rotate 20s linear infinite;
    width: 30%;
    border-radius: 50%;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
    animation-play-state: paused;
  }
  .paused-image {
    animation-play-state: paused;
  }
  .playing-image {
    animation-play-state: running;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
`

export default Song
