// @flow
import React from 'react';
import Map from 'pigeon-maps';
import {
  Container,
  Row,
  Col,
  Button,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Marker from './pigeon-marker';

const LocationBlock = (props: *) => {
  const { data, id } = props;
  return (
    <ScrollableAnchor id={id}>
      <div className="app-section pb-0">


        <Row className="align-items-center" flex>

          <Col lg={4} className="p-0">
            <Map center={data.gps} zoom={15} height={550}>
              <Marker anchor={data.gps} payload={1} />


            </Map>
          </Col>
          <Col lg={8} className="text-center  pl-lg-4 pr-lg-4">
            <Container className="py-2 py-lg-0 px-lg-4">
              <h2 className=" pb-1">
                {data.header}
              </h2>
              <p className="lead display-linebreak text-lg-left">
                {data.text}
              </p>
              {data.buttonUrl
                                && (
                                <div className="justify-content-center pt-0">
                                  <Button href={data.buttonUrl} className=" mt-1 btn-outline-dark">{data.buttonLabel}</Button>
                                </div>
                                ) }

            </Container>
          </Col>


        </Row>


      </div>
    </ScrollableAnchor>

  );
};

export default LocationBlock;
