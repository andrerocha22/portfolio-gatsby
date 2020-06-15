/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `André F. Rocha`,
    author: `André Felipe Rocha`,
    siteUrl: `https://www.andrerocha.me`,
    description: `My portfolio`,
    email:`andreerocha2@gmail.com`,
    linkedinUrl: `https://www.linkedin.com/in/andrefelipe22/`,
    githubUrl: `https://github.com/andrerocha22`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#7159c1`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-163997476-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andre Rocha`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7159c1`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
        // See pattern syntax recognized by micromatch
        // https://www.npmjs.com/package/micromatch#matching-features
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
