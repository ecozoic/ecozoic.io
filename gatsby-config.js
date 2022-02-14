require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const gatsbyRemarkPlugins = [
  {
    resolve: 'gatsby-remark-images-contentful',
    options: {
      linkImagesToOriginal: false,
      maxWidth: 1100,
      showCaptions: true,
    },
  },
  {
    resolve: 'gatsby-remark-responsive-iframe',
    options: { wrapperStyle: 'margin-bottom: 1.2rem;' },
  },
  'gatsby-remark-prismjs',
];

module.exports = {
  siteMetadata: {
    title: 'ecozoic.io',
    description:
      'ecozoic.io is a blog dedicated to gaming, movies/tv, and coding',
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.nodes.map((node) => ({
                title: node.title,
                description: node.subtitle,
                url: `${site.siteMetadata.siteUrl}/${node.slug}`,
              }));
            },
            query: `
            {
              allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
                nodes {
                  title
                  slug
                  subtitle
                }
              }
            }`,
            output: '/rss.xml',
            title: 'ecozoic.io RSS Feed',
          },
        ],
      },
    },
    process.env.CONTENTFUL_HOST
      ? false
      : {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
            trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          },
        },
  ].filter(Boolean),
};
