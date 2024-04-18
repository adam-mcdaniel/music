import React from "react"
import styled from "styled-components"
import LibrarySong from "./LibrarySong"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Library = ({
  imageData,
  songs,
  setSongs,
  setCurrentSong,
  currentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  // const getSongImage = (song) => {
  //   // const coverImage = song.cover;
  //   // const data = useStaticQuery(graphql`
  //   //   query($coverImage: String) {
  //   //     file(relativePath: { eq: $coverImage }) {
  //   //       childImageSharp {
  //   //         fluid(maxWidth: 800) {
  //   //           ...GatsbyImageSharpFluid
  //   //         }
  //   //       }
  //   //     }
  //   //   }
  //   // `, { coverImage });
  //   // const fluid = data.file.childImageSharp.fluid;
  //   // if (fluid === null) {
  //   //   console.log("Failed to get image for ", song, ": ", fluid, "...");
  //   // }
  //   // console.log("Got image for ", song, ": ", fluid, "...");
  //   // return fluid;

  //   return getImage(song.cover);
  // }

  return (
    <StyledLibrary
      className={`library ${libraryStatus ? "active-library" : ""}`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            imageData={imageData}
            key={song.id}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </StyledLibrary>
  )
}

const StyledLibrary = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 10px #ccc;
  overflow: scroll;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  background: #fff;
  h2 {
    text-align: center;
    padding: 14px 0;
  }
  .selected {
    background: #77d6ff;
  }
  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }
`

export default Library
