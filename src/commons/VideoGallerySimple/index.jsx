// @flow
import React from 'react';
import {
  Row, Col, Container,
} from '@windingtree/wt-ui-react';
import VideoCardSimple from 'commons/VideoCardSimple';

class VideoGallerySimple extends React.Component <*> {
  render() {
    const { data } = this.props;
    return (
        <>
          <div className="app-section">
            <Container>

              <header className="mb-2 mb-md-4 text-center">
                <h2>{data.header}</h2>
              </header>

              <Row className="justify-content-center">
                {data.items.map(videoItem => (
                  <Col md={6}>
                    <VideoCardSimple videoItem={videoItem} />
                  </Col>
                ))}
              </Row>

            </Container>
          </div>
      </>
    );
  }
}

export default VideoGallerySimple;
