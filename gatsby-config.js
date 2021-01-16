require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: "dwexedm4848a",
  accessToken: "5b10c64edb3d4ee774bc6f92a705c8c0e21f30aacac92ce46460cf27ae73a274",
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Ujjwal Bhardwaj',
    author: 'Ujjwal Bhardwaj',
    description: 'Personal blog by Ujjwal Bhardwaj',
    siteUrl: 'https://ujjwalbhardwaj.me',
    social: {
      twitter: '@imujjwal96',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-87329450-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: null,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ujjwal Bhardwaj`,
        short_name: `Ujjwal Bhardwaj`,
        start_url: `/`,
        background_color: `#069`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
}
