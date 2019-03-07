// @flow
import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';

const AccentedTextSection = (props: *) => {
  const { data, id } = props;

  return (
    <ScrollableAnchor id={id}>
      <div className="app-section section-about ">
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <h2 className="my-3 mb-md-4 text-center">
                {data.header}
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={11} lg={8} className="col-12 justify-content-center">
              <p className="lead mb-2 text-center">
                {data.text}
              </p>
            </Col>
          </Row>

          {data.buttonUrl
                      && (
                      <Row className="justify-content-center pt-0">
                        <Button href={data.buttonUrl} className={`mt-0 mt-lg-1 ${data.buttonStyle}`}>{data.buttonLabel}</Button>
                      </Row>
                      ) }


        </Container>
      </div>
    </ScrollableAnchor>
  );
};

export default AccentedTextSection;
