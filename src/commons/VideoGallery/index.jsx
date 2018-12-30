// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import Gallery from './Gallery';

const VideoGallery = () => (
  <article className="app-section section-video-gallery">
    <Container>

      <header className="mb-2 mb-md-4 text-center">
        <h2>Video gallery</h2>
      </header>

      <Row className="justify-content-md-center">
        <Col sm={12} md={12} lg={9}>
          <Gallery />
        </Col>
      </Row>

    </Container>
  </article>
);

export default VideoGallery;