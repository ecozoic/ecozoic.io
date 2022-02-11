const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.js');
  const authorPage = path.resolve('./src/templates/author.js');

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
      allContentfulAuthor {
        nodes {
          name
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Contentful data',
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlogPost.nodes;
  const authors = result.data.allContentfulAuthor.nodes;

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

  if (authors.length > 0) {
    authors.forEach((author) => {
      createPage({
        path: `authors/${author.name.toLowerCase()}`,
        component: authorPage,
        context: {
          name: author.name,
        },
      });
    });
  }
};
