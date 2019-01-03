// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';
// import bgImage from './img/bg.svg';
import './styles.scss';

const Banner = () => (
  <>
  <section className="app-section hero-homepage pt-1 pt-lg-5">
    <Container>
      <header className="mb-3 mb-lg-5 pb-0 pb-lg-5 text-center">
        <Row className="justify-content-md-center">
          <Col md={9}>
            <h1 className="mb-1 text-white">
              Winding Tree
              <br />
              Decentralized Travel Ecosystem
            </h1>
          </Col>
          <Col md={6} >
            <p className="mb-2 lead text-white">
              Open source infrastructure for travel inventory distribution
            </p>
          </Col>
          <Col xs={12}>
            <ul className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
              <li className="mb-1 mb-lg-0 ml-0 mr-md-1">
                <Button href="https://github.com/windingtree/" block>
                  Show Me The Code
                </Button>
              </li>
              <li className="mb-1 mb-lg-0 list-inline-item">
                <Button href="https://windingtree.com/winding-tree-hackathon-prague-2018" block outlined variant="light">
                  Check out the Hackathon
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </header>
    </Container>
  </section>

  <section className="app-section section-hero-cards pb-0">
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={10}>
          <LearnMoreCards main />
        </Col>
      </Row>
    </Container>
  </section>
  </>

);

export default Banner;
