/* @flow */
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from './Gallery';

type PropsType = {
  id: string
};

const VideoGallery = (props: PropsType) => {
  const { id } = props;

  return (
    <ScrollableAnchor id={id}>

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
    </ScrollableAnchor>);
};

export default VideoGallery;
