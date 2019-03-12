/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Benefit from 'commons/Benefit';

const BenefitsSection = (props: *) => {
  const { id, data } = props;
  return (
    <ScrollableAnchor id={id}>

      <section className="app-section section-key-benefits pb-0">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-2">
              <h2>{data.header}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} lg={10}>
              <Row>
                {data.items.map(benefit => (
                  <Benefit
                    title={benefit.title}
                    img={benefit.icon}
                    body={benefit.body}
                    key={benefit.title}
                  />
                ))}
                {' '}

              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </ScrollableAnchor>
  );
};

export default BenefitsSection;
