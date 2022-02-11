import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Spoiler from './spoiler';

const shortcodes = { Spoiler };

const Markdown = ({ children }) => (
  <div className="markdown">
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  </div>
);

export default Markdown;
