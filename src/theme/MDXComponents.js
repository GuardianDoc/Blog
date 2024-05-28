import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ImageCard from './../components/ImageCard/ImageCard'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ImageCard : ImageCard
};