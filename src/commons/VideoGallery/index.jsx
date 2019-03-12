/* @flow */
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import defaultVideoGalleryItems from 'DATA/commons/VideoGallery';
import Gallery from './Gallery';

const VideoGallery = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>

      <article className="app-section section-video-gallery border-top border-bottom border-light">
        <Container>

          <header className="mb-2 mb-md-4 text-center">
            <h2>{data.header}</h2>
          </header>

          <Row className="justify-content-center">
            <Col md={12} lg={10} className="col-10">
              <Gallery sections={data.items} />
            </Col>
          </Row>

        </Container>
      </article>
    </ScrollableAnchor>
  );
};

VideoGallery.defaultProps = {
  id: 'video-gallery',
  data: {
    header: 'Video Gallery',
    items: defaultVideoGalleryItems,
  },
};

export default VideoGallery;
