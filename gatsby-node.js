const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.js');

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Contentful blog posts',
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlogPost.nodes;

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }
};
