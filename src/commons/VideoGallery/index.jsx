// @flow
import React from 'react';
import {
  Container,
} from '@windingtree/wt-ui-react';
import Gallery from './Gallery';

const VideoGallery = () => (
  <section className="app-section">
    <h2 className="text-center">Video gallery</h2>
    <Container>
      <Gallery />
    </Container>
  </section>
);

export default VideoGallery;
