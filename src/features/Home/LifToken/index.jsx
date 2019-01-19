// @flow
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Container, Row, Col,
} from '@windingtree/wt-ui-react';


const LifToken = () => (
  <article className="app-section section-lif-token bg-grad">
    <div className="app-section-img" style={{ backgroundImage: 'url(https://windingtree.com/assets/img/banners/lif-token-bg.svg)' }} />
    <Container>
      <Row>
        <Col md={6}>
          <h2 className="mb-1 text-white">Líf Token</h2>
          <p className="lead text-white">
            Líf is used to exchange data and value between Winding Tree smart contracts, companies
            and users.
          </p>
        </Col>
      </Row>
      <LinkContainer to="lif-token">
        <Button variant="primary">
        Learn about Líf
        </Button>
      </LinkContainer>
    </Container>
  </article>
);

export default LifToken;
