// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import Gallery from './Gallery';

const VideoGallery = () => (
  <article className="app-section section-video-gallery border-top border-bottom border-light">
    <Container>

      <header className="mb-2 mb-md-4 text-center">
        <h2>Video gallery</h2>
      </header>

      <Row className="justify-content-center">
        <Col md={12} lg={10} className="col-10">
          <Gallery />
        </Col>
      </Row>

    </Container>
  </article>
);

export default VideoGallery;
