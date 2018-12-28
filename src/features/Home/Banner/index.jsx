// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';
import cardsData from './data';
import bgImage from './img/bg.svg';

const Banner = () => (
  <section className="index-banner app-section bg-grad" id="index-banner">
    <div className="app-section-img" style={{ backgroundImage: `url(${bgImage})` }} />
    <Container>
      <div className="index-banner__inner mb-3 mb-md-5 text-center">
        <Row className="justify-content-md-center">
          <Col as="h1" md={9} className="mb-1 text-white">
            Winding Tree
            <br />
            Decentralized Travel Ecosystem
          </Col>
          <Col as="p" md={6} className="mb-2 lead text-white">
            Open source infrastructure for travel inventory distribution
          </Col>
          <Col as="ul" xs={12} className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
            <li className="mb-1 mb-lg-0 list-inline-item">
              <Button href="https://github.com/windingtree/" block>
                Show Me The Code
              </Button>
            </li>
            <li className="mb-1 mb-lg-0 list-inline-item">
              <Button href="https://windingtree.com/winding-tree-hackathon-prague-2018" block outlined variant="light">
                Check out the Hackathon
              </Button>
            </li>
          </Col>
        </Row>
      </div>
      <LearnMoreCards main data={cardsData} />
    </Container>
  </section>

);

export default Banner;
