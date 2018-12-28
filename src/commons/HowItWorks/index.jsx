/* @flow */
import React from 'react';
import {
  Image, Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import howItWorks from './img/HowItWorks.png';
import data from './data.json';
import './styles.scss';

const HowItWorks = () => (
  <>
    <section className="section-how-it-works app-section">
      <Container>
        <header>
          <Row className="justify-content-md-center">
            <Col md={12} className="text-center mb-1">
              <h2>How it Works</h2>
            </Col>
          </Row>
        </header>

        <Row className="justify-content-md-center">
          <Col md={10} className="mb-2">
            <Image src={howItWorks} alt="How it works diagram" fluid />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col sm={12} md={9} lg={8}>
            <div className="media flex-column flex-sm-row">
              <div className="media-body mb-1 mb-md-0 mr-0 mr-md-2">{data.text}</div>
              <Button variant="primary" className="align-self-center">Watch video</Button>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  </>
);

export default HowItWorks;
