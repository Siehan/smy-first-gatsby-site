module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "smy-first-gatsby-site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
};
