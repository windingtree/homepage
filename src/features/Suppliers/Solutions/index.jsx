/* @flow */
import React from 'react';
import { Button, Container, Row, Col } from '@windingtree/wt-ui-react';
import Hospitality from './Hospitality';
import Airlines from './Airlines';
import Tours from './Tours';
import Quotes from './Quotes';

const Solutions = () => (
  // solutions-section
  <section className="app-section">
    <Container>

      <header>
        <Row className="justify-content-md-center">
          <Col md={10} className="text-center mb-1">
            <h2>Solutions</h2>
          </Col>
        </Row>
      </header>

      <Row className="justify-content-md-center">
        <Col md={10} className="text-center mb-1">

          <Hospitality />
          <Airlines />
          <Tours />

          <hr className="my-md-4" />

          <Quotes />

            <Container>
              <Row>
                <Col sm={12}>
                  <footer className="text-center mt-2">
                    <Button
                      href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform"
                      variant="primary"
                    >
                      Apply for integration
                    </Button>
                  </footer>
                </Col>
              </Row>
            </Container>

        </Col>
      </Row>
    </Container>
  </section>
);

export default Solutions;
