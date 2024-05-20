module.exports = {
  // siteURL: "/music",
  pathPrefix: "/music",
  siteMetadata: {
    description: `A music player for my website!`,
    author: `Adam McDaniel`,
    headerData: {
      title: "Adam's Music Player",
      image: "mini-me-circle.jpg",
    },
    songData: [
      {
        title: "Bring It On Home To Me🎶",
        cover: "mini-me-circle.jpg",
        artist: "Adam McDaniel🧑‍🦰",
        audio:
          "https://github.com/adam-mcdaniel/music/blob/main/assets/bring-it-on-home-to-me.mp3?raw=true",
        id: 0,
        active: true,
      },
      {
        title: "Chip-Tune Major Blues🎵",
        cover: "major-blues.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_blues.wav",
        id: 1,
        active: false,
      },
      {
        title: "Chip-Tune Major Pentatonic🎵",
        cover: "major-pentatonic.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_pentatonic.wav",
        id: 2,
        active: false,
      },
      {
        title: "Chip-Tune Minor Blues🎶",
        cover: "minor-blues.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_minor_blues.wav",
        id: 3,
        active: false,
      },
      {
        title: "Chip-Tune Minor Pentatonic🎵",
        cover: "minor-pentatonic.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_minor_pentatonic.wav",
        id: 4,
        active: false,
      },
      {
        title: "Chip-Tune Diminished🎶",
        cover: "diminished.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_diminished.wav",
        id: 5,
        active: false,
      },

      {
        title: "Chip-Tune Augmented🎵",
        cover: "augmented.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_augmented.wav",
        id: 6,
        active: false,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
