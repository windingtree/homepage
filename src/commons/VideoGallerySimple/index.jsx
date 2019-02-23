// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import VideoCardSimple from 'commons/VideoCardSimple';
import ScrollableAnchor from 'react-scrollable-anchor';


const VideoGallerySimple = (props: *) => {
  const { data, id } = props;
  return (
    <ScrollableAnchor id={id}>

        <div className="app-section">
          <Container>

            <Row className="my-3 mb-2 mb-md-4 justify-content-center">
              <Col>
                <h2 className="text-center">{data.header}</h2>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {data.items.map(videoItem => (
                <Col md={6}>
                  <VideoCardSimple videoItem={videoItem} />
                </Col>
              ))}
            </Row>

          </Container>
        </div>
    </ScrollableAnchor>
  );
};

export default VideoGallerySimple;
