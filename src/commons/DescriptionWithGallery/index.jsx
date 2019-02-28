// @flow
import React from 'react';
import {
  Container,
  Row,
  Col,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from 'commons/ImageGallery';


const DescriptionWithGallery = (props: *) => {
  const { data, id, photos } = props;

  return (
    <ScrollableAnchor id={id}>
      <div className="app-section py-0">

        <Row className="align-items-center" flex>
          <Col lg={8} className="text-center text-lg-left pl-lg-4 pr-lg-4">
            <Container className="py-4 py-lg-0 px-lg-4">
              <h2 className="">
                {data.header}
              </h2>

              <p className="lead display-linebreak">
                {data.text}
              </p>

            </Container>
          </Col>


          <Col lg={4} className="p-0 galleryContainer shadow" style={{ backgroundImage: `url(${photos[2].photo})` }}>
            <Gallery photos={photos} />
          </Col>

        </Row>


      </div>
    </ScrollableAnchor>
  );
};

export default DescriptionWithGallery;
