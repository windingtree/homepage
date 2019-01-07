// @flow
import React from 'react';
import {
  Container, Row, Col, Button,
} from '@windingtree/wt-ui-react';
import LearnMoreCards from 'commons/LearnMoreCards';
import './styles.scss';

const MainBanner = () => (
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
            <Col md={6}>
              <p className="mb-2 lead text-white">
              Open source infrastructure for travel inventory distribution
              </p>
            </Col>
            <Col xs={12}>
              <ul className="d-flex flex-column flex-md-row justify-content-md-center align-items-md-center list-inline">
                <li className="mb-1 mb-lg-0 ml-0 mr-md-1">
                  <Button href="https://docs.google.com/forms/d/e/1FAIpQLSevHx6goFLdbdI7TSX6JFugNlT56nlRD7I1XjqGc-06pIoemA/viewform" block>
                  Get on board
                  </Button>
                </li>
                <li className="mb-1 mb-lg-0 list-inline-item">
                  <Button href="https://youtu.be/_qer1qd68eQ" block outlined variant="light">
                  Watch Video
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

export default MainBanner;
