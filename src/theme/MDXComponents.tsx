import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import * as customComponents from '@site/src/components/mdx';

export default {
  Admonition,
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  ...customComponents,
};