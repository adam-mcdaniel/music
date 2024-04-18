module.exports = {
  // siteURL: "/music",
  pathPrefix: "/music",
  siteMetadata: {
    description: `React music player using Gatsby.js`,
    author: `Adam McDaniel`,
    headerData: {
      title: "Adam's Music Player",
      image: "mini-me.jpg",
    },
    songData: [
      {
        title: "Chip-Tune Major Blues🎵",
        // cover: "src/images/me.png",
        // Use a gatsby image instead
        cover: "major-blues.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_blues.wav",
        id: 0,
        active: true,
      },
      {
        title: "Chip-Tune Major Pentatonic🎵",
        cover: "major-pentatonic.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_pentatonic.wav",
        id: 1,
        active: false,
      },
      {
        title: "Chip-Tune Minor Blues🎶",
        cover: "minor-blues.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_minor_blues.wav",
        id: 2,
        active: false,
      },
      {
        title: "Chip-Tune Minor Pentatonic🎵",
        cover: "minor-pentatonic.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_minor_pentatonic.wav",
        id: 3,
        active: false,
      },
      {
        title: "Chip-Tune Diminished🎶",
        cover: "diminished.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_diminished.wav",
        id: 4,
        active: false,
      },

      {
        title: "Chip-Tune Augmented🎶",
        cover: "augmented.webp",
        artist: "My Music Generator🤖",
        audio:
          "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_augmented.wav",
        id: 5,
        active: false,
      },

      // {
      //   name: "Beaver Creek",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      //   artist: "Aso, Middle School, Aviino",
      //   audio: "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_pentatonic.wav",
      //   id: 0,
      //   active: true,
      // },
      // {
      //   name: "Daylight",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      //   artist: "Aiguille",
      //   audio: "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_pentatonic.wav",
      //   id: 1,
      //   active: false,
      // },
      // {
      //   name: "Keep Going",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      //   artist: "Swørn",
      //   audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      //   id: 2,
      //   active: false,
      // },
      // {
      //   name: "Nightfall",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      //   artist: "Aiguille",
      //   audio: "https://github.com/adam-mcdaniel/music-generation/raw/main/examples/square_major_pentatonic.wav",
      //   id: 3,
      //   active: false,
      // },
      // {
      //   name: "Reflection",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      //   artist: "Swørn",
      //   audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      //   id: 4,
      //   active: false,
      // },
      // {
      //   name: "Under the City Stars",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      //   artist: "Aso, Middle School, Aviino",
      //   audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      //   id: 5,
      //   active: false,
      // },
      // {
      //   name: "Trenches",
      //   artist: "Philanthrope, Sleepy Fish",
      //   cover:
      //     "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      //   id: 6,
      //   active: false,
      //   audio: "https://mp3.chillhop.com/serve.php/?mp3=10247",
      // },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    // Add the path prefix to the gatsby-source-filesystem plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-sanity`,
    //   options: {
    //     projectId: `64zgrsra`,
    //     dataset: `production`,
    //     // a token with read permissions is required
    //     // if you have a private dataset
    //     token: process.env.SANITY_TOKEN,
    //     watchMode: true,
    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //     graphqlTag: "default",
    //   },
    // },

    // use the song data from the siteMetadata object
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `songs`,
    //     path: `${__dirname}/src/songs`,
    //   },
    // },
  ],
}
