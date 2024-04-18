import React from "react"
import styled from "styled-components"
import { playAudio } from "../util"
// Import useStaticQuery and graphql
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc, StaticImage } from "gatsby-plugin-image"

const LibrarySong = ({
  imageData,
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song)
    // Change the active class of the element depending on which song the user chose.
    setSongs(
      songs.map(targetSong => {
        return {
          ...targetSong,
          active: targetSong.id === song.id,
        }
      })
    )
    playAudio(isPlaying, audioRef)
  }

  return (
    <StyledSong
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <div className="image">
        <GatsbyImage image={getImage(imageData[song.cover])} alt={song.title} />
      </div>
      <div className="song-description">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </StyledSong>
  )
}

const StyledSong = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  .image {
    width: 20%;
    border-radius: 50%;
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }
  &:hover {
    background: rgb(222, 222, 255);
  }
  .song-description {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1rem;
    h4 {
      font-size: 0.9rem;
    }
  }
`

export default LibrarySong
