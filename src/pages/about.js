// An about page in the site
import React, { useState, useRef } from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import GlobalStyles from "../styles/GlobalStyles"
import styled from "styled-components"
import AboutNav from "../components/about/Nav"
import { useStaticQuery, graphql } from "gatsby"
import { query } from "./index.js"
import { withPrefix } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { Fade } from "react-reveal"
import AboutBody from "../components/about/Body.js"

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

const AboutPage = ({ data }) => {
  const siteData = data.site.siteMetadata
  const songData = siteData.songData
  // Create a map of the images paths to the image data
  const imageData = data.allFile.edges
    .map(({ node }) => {
      // Add `withPrefix` to the image path source
      let imageData = node.childImageSharp.gatsbyImageData
      let name = node.relativePath
      console.log("New path: ", getSrc(imageData))
      return {
        // [name]: fix_image_prefix(imageData),
        [name]: imageData,
      }
    })
    .reduce((acc, cur) => {
      return { ...acc, ...cur }
    })
  const headerData = siteData.headerData

  console.log("About Data: ", data)
  return (
    <StyledAbout className="about">
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Music Player" />
      <AboutNav headerData={headerData} imageData={imageData} />
      <AboutBody headerData={headerData} imageData={imageData} />
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  h1 h2 h3 {
    align-self: center;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  audio {
    margin: 0 auto;
  }
`

export const aboutQuery = graphql`
  query AboutQuery {
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

export default AboutPage
