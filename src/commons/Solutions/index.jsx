/* @flow */
import React from 'react';
import {
  Container, Row, Col,
} from '@windingtree/wt-ui-react';
import PartnersAndContributors from 'commons/PartnersAndContributors';
import ScrollableAnchor from 'react-scrollable-anchor';
import Hospitality from './Hospitality';
import Airlines from './Airlines';
import Tours from './Tours';
import OTA from './OTA';

const Solutions = (props: *) => {
  const { variant, id } = props;
  return (
    <ScrollableAnchor id={id}>
      <section className="app-section section-solutions pb-0">
        <Container>
          <header>
            <Row className="justify-content-md-center">
              <Col md={10} className="text-center mb-1">
                <h2>Solutions</h2>
              </Col>
            </Row>
          </header>
          <Row className="justify-content-md-center">
            <Col md={10} className="text-center text-md-left">
              {(variant === 'suppliers')
                ? (
                  <div>
                    <Hospitality />
                    <Airlines />
                    <Tours />
                  </div>
                )
                : (
                  <div>
                    <OTA />
                  </div>
                )}

              <PartnersAndContributors tab={1} id="use-cases" />

            </Col>
          </Row>
        </Container>
      </section>
    </ScrollableAnchor>
  );
};

export default Solutions;
