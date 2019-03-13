// @flow
import React from 'react';
import {
  Row, Container, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';
import ScrollableAnchor from 'react-scrollable-anchor';
import CTAs from 'DATA/commons/CTAs';

const ReadyToUse = (props: *) => {
  const { id, data } = props;

  return (
    <ScrollableAnchor id={id}>
      <section className="app-section bg-grad-down section-pre-footer" style={{ borderBottom: '1px solid #8359A2' }}>
        <Container>
          <Row className="justify-content-md-center text-center">
            <Col md={10}>
              <h2 className="mb-1 text-white">{data.header}</h2>
              <p className="mb-1 mb-md-2 text-white">
                {data.text}
              </p>
              <Button variant="light" outlined href={data.ctaButtonUrl} target="_blank" rel="noopener noreferrer">
                {data.ctaButtonLabel}
              </Button>
            </Col>
          </Row>
          <div className="d-none d-md-block mt-4">
            <LearnMoreCards />
          </div>
        </Container>
      </section>
    </ScrollableAnchor>
  );
};

ReadyToUse.defaultProps = {
  id: 'ready',
  data: {
    header: 'Ready To Use Winding Tree',
    text: 'Learn our API or apply for integration and we will get back to you',
    ctaButtonUrl: CTAs.parntersAction,
    ctaButtonLabel: 'Apply For Integration',
  },
};

export default ReadyToUse;
