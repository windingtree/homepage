// @flow
import React from 'react';
import {
  Button, Container, Row, Col,
} from '@windingtree/wt-ui-react';
import './styles.scss';


const LifToken = () => (
  <section
    className="lif-token-banner py-3 py-md-5 text-center text-md-left"
  >
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
      <Button href="#lif-token" variant="primary">
        Learn about Líf
      </Button>
    </Container>
  </section>
);

export default LifToken;
