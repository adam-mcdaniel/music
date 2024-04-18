import React, { useState, useRef } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Player from "../components/Player"
import Song from "../components/Song"
import Library from "../components/Library"
import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import { graphql, withPrefix } from "gatsby"
import styled from "styled-components"
import { getSrc } from "gatsby-plugin-image"

// For older versions of Gatsby, this fixes image prefixes
const fix_image_prefix = imageData => {
  let newPath = withPrefix(getSrc(imageData))
  imageData = {
    ...imageData,
    images: {
      ...imageData.images,
      fallback: {
        ...imageData.images.fallback,
        src: newPath,
        srcSet: newPath,
      },
      sources: imageData.images.sources.map(source => {
        return {
          ...source,
          srcSet: source.srcSet.map(src => newPath),
        }
      }),
    },
  }
  return imageData
}

const IndexPage = ({ data }) => {
  console.log("Data: ", data)
  const siteData = data.site.siteMetadata
  const songData = siteData.songData
  // Create a map of the images paths to the image data
  const imageData = data.allFile.edges
    .map(({ node }) => {
      // Add `withPrefix` to the image path source
      let imageData = node.childImageSharp.gatsbyImageData
      let name = node.relativePath
      console.log("New path: ", getSrc(imageData))
      console.log("New image: ", imageData)
      return {
        // [name]: fix_image_prefix(imageData),
        [name]: imageData,
      }
    })
    .reduce((acc, cur) => {
      return { ...acc, ...cur }
    })
  const headerData = siteData.headerData

  console.log("Song Data: ", songData)
  const [songs, setSongs] = useState(songData)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)
  // Get a reference to the audio html element
  const audioRef = useRef(null)
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }
  console.log("Images: ", imageData)
  return (
    <StyledIndex className="index">
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Music Player" />
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        headerData={headerData}
        imageData={imageData}
      />
      <Song
        imageData={imageData}
        currentSong={currentSong}
        isPlaying={isPlaying}
      />
      <Player
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={console.log("Using songs: ", songs) || songs}
        imageData={imageData}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      >
        <track
          default
          kind="captions"
          srcLang="en"
          src={console.log("Playing ", currentSong.audio) || currentSong.audio}
        ></track>
      </audio>
    </StyledIndex>
  )
}

// Use site metadata to get the songs
export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        headerData {
          title
          image
        }
        songData {
          title
          artist
          cover
          audio
          id
          active
        }
      }
    }
    allFile {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO]
            )
          }
        }
      }
    }
  }
`

const StyledIndex = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  audio {
    margin: 0 auto;
  }
`

export default IndexPage
